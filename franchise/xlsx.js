/*
 * ============================================================
 *  최소 XLSX 생성기 (라이브러리 없음, 브라우저 전용)
 * ============================================================
 *  왜 CSV 가 아니라 xlsx 인가:
 *   · 고객사(컴포즈커피) 제출용이라 시트 여러 장이 필요하다
 *     (월간요약 / 카테고리별 / 지점별 / 담당자별 / 전건상세)
 *   · CSV 는 시트가 하나뿐이고, 한글 인코딩 사고가 잦다
 *
 *  구현: ZIP(무압축 stored) + OOXML 파트 직접 작성.
 *  압축을 안 하므로 deflate 구현이 필요 없고, Excel·구글시트·
 *  넘버스 모두 정상적으로 엽니다. (수십만 행이면 파일이 커지지만
 *  월 단위 보고 규모에서는 문제되지 않음)
 *
 *  사용법:
 *    XLSX.download('파일명.xlsx', [
 *      { name:'월간요약', rows:[ ['항목','값'], ['총 인입', 24] ], widths:[24,12] },
 *      ...
 *    ]);
 *  rows 의 각 셀: 문자열 → 텍스트, 숫자 → 숫자셀. 첫 행은 자동으로 굵게.
 * ============================================================
 */
(function(global){
  'use strict';

  /* ── CRC32 (ZIP 무결성) ─────────────────────────────────── */
  let CRC_TABLE = null;
  function crc32(bytes){
    if(!CRC_TABLE){
      CRC_TABLE = new Uint32Array(256);
      for(let n=0;n<256;n++){
        let c = n;
        for(let k=0;k<8;k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        CRC_TABLE[n] = c >>> 0;
      }
    }
    let crc = 0xFFFFFFFF;
    for(let i=0;i<bytes.length;i++) crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xFF];
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  const enc = s => new TextEncoder().encode(s);
  const u16 = v => [v & 255, (v >>> 8) & 255];
  const u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];

  /* ── ZIP (무압축) ───────────────────────────────────────── */
  function zipStore(files){
    const body = [], central = [];
    let offset = 0;
    files.forEach(f=>{
      const nameB = enc(f.name), data = f.data, crc = crc32(data), sz = data.length;
      // Local file header (30바이트 + 파일명)
      body.push(new Uint8Array([].concat(
        [0x50,0x4b,0x03,0x04], u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(sz), u32(sz), u16(nameB.length), u16(0)
      )), nameB, data);
      // Central directory header (46바이트 + 파일명)
      central.push(new Uint8Array([].concat(
        [0x50,0x4b,0x01,0x02], u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(sz), u32(sz), u16(nameB.length), u16(0), u16(0),
        u16(0), u16(0), u32(0), u32(offset)
      )), nameB);
      offset += 30 + nameB.length + sz;
    });
    const cdSize = central.reduce((a,b)=>a+b.length, 0);
    const eocd = new Uint8Array([].concat(
      [0x50,0x4b,0x05,0x06], u16(0), u16(0), u16(files.length), u16(files.length),
      u32(cdSize), u32(offset), u16(0)
    ));
    const all = body.concat(central, [eocd]);
    const out = new Uint8Array(all.reduce((a,b)=>a+b.length, 0));
    let p = 0; all.forEach(b=>{ out.set(b, p); p += b.length; });
    return out;
  }

  /* ── XML 유틸 ───────────────────────────────────────────── */
  const xe = s => String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&apos;')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,'');   // XML 금지 제어문자 제거

  /* 0→A, 25→Z, 26→AA */
  function colName(i){
    let s = '';
    for(i = i + 1; i > 0; i = Math.floor((i - 1) / 26)) s = String.fromCharCode(65 + ((i - 1) % 26)) + s;
    return s;
  }

  /* 시트명 제약: 31자 이내, : \ / ? * [ ] 금지 */
  function safeSheetName(n, idx){
    let s = String(n || ('Sheet' + (idx + 1))).replace(/[:\\\/\?\*\[\]]/g,'-').slice(0,31);
    return s || ('Sheet' + (idx + 1));
  }

  function sheetXml(rows, widths){
    let cols = '';
    if(widths && widths.length){
      cols = '<cols>' + widths.map((w,i)=>'<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+w+'" customWidth="1"/>').join('') + '</cols>';
    }
    const body = (rows || []).map(function(row, r){
      const cells = (row || []).map(function(v, c){
        const ref = colName(c) + (r + 1);
        const style = r === 0 ? ' s="1"' : '';            // 첫 행 = 헤더(굵게)
        if(v === null || v === undefined || v === '') return '<c r="'+ref+'"'+style+'/>';
        if(typeof v === 'number' && isFinite(v)) return '<c r="'+ref+'"'+style+'><v>'+v+'</v></c>';
        return '<c r="'+ref+'"'+style+' t="inlineStr"><is><t xml:space="preserve">'+xe(v)+'</t></is></c>';
      }).join('');
      return '<row r="'+(r+1)+'">'+cells+'</row>';
    }).join('');
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
      + cols + '<sheetData>' + body + '</sheetData></worksheet>';
  }

  function build(sheets){
    const S = (sheets || []).map((s,i)=>({ name:safeSheetName(s.name,i), rows:s.rows||[], widths:s.widths }));
    if(!S.length) S.push({name:'Sheet1', rows:[]});

    const files = [];
    files.push({ name:'[Content_Types].xml', data: enc(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
      + '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
      + '<Default Extension="xml" ContentType="application/xml"/>'
      + '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
      + S.map((s,i)=>'<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join('')
      + '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
      + '</Types>') });

    files.push({ name:'_rels/.rels', data: enc(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
      + '</Relationships>') });

    files.push({ name:'xl/workbook.xml', data: enc(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
      + ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
      + S.map((s,i)=>'<sheet name="'+xe(s.name)+'" sheetId="'+(i+1)+'" r:id="rId'+(i+1)+'"/>').join('')
      + '</sheets></workbook>') });

    files.push({ name:'xl/_rels/workbook.xml.rels', data: enc(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      + S.map((s,i)=>'<Relationship Id="rId'+(i+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+(i+1)+'.xml"/>').join('')
      + '<Relationship Id="rId'+(S.length+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
      + '</Relationships>') });

    /* 스타일: 0=기본, 1=굵게(헤더) */
    files.push({ name:'xl/styles.xml', data: enc(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
      + '<fonts count="2"><font><sz val="11"/><name val="맑은 고딕"/></font>'
      + '<font><b/><sz val="11"/><name val="맑은 고딕"/></font></fonts>'
      + '<fills count="2"><fill><patternFill patternType="none"/></fill>'
      + '<fill><patternFill patternType="gray125"/></fill></fills>'
      + '<borders count="1"><border/></borders>'
      + '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
      + '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'
      + '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>'
      + '</styleSheet>') });

    S.forEach((s,i)=>files.push({ name:'xl/worksheets/sheet'+(i+1)+'.xml', data: enc(sheetXml(s.rows, s.widths)) }));

    return zipStore(files);
  }

  global.XLSX = {
    build: build,
    download: function(filename, sheets){
      const bytes = build(sheets);
      const blob = new Blob([bytes], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a); a.click();
      setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 0);
    }
  };
})(window);
