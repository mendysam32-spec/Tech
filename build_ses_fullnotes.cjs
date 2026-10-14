// Build data/ses-fullnotes.js from the extracted Mr. Dibba SES notes.
// Usage: node build_ses_fullnotes.cjs
// Reads C:\Users\kumen\AppData\Local\Temp\opencode\ses_notes.txt (0-based line indices below).
const fs = require('fs');

const SRC = 'C:\\Users\\kumen\\AppData\\Local\\Temp\\opencode\\ses_notes.txt';
const OUT = __dirname + '\\data\\ses-fullnotes.js';
const rawLines = fs.readFileSync(SRC, 'utf8').split('\n');

// [topicId, chapterLabel, from(incl), to(excl)]
const SEGMENTS = [
  ['ses-g7-t1-1', 'Chapter 1: Introduction to S.E.S.', 4, 8],
  ['ses-g7-t1-2', 'Chapter 1: Introduction to S.E.S.', 8, 20],
  ['ses-g7-t1-3', 'Chapter 1: Introduction to S.E.S.', 20, 25],
  ['ses-g7-t1-4', 'Chapter 1: Introduction to S.E.S.', 25, 73],
  ['ses-g7-t1-5', 'Chapter 1: Introduction to S.E.S.', 73, 81],
  ['ses-g7-t2-1', 'Chapter 2: Trans-Saharan Trade', 82, 93],
  ['ses-g7-t2-2', 'Chapter 2: Trans-Saharan Trade', 93, 128],
  ['ses-g7-t2-3', 'Chapter 2: Trans-Saharan Trade', 128, 165],
  ['ses-g7-t3-1', 'Chapter 3: Empires of Western Sudan', 166, 199],
  ['ses-g7-t3-2', 'Chapter 3: Empires of Western Sudan', 199, 230],
  ['ses-g7-t3-3', 'Chapter 3: Empires of Western Sudan', 230, 258],
  ['ses-g7-t4-1', 'Chapter 4: Kingdoms of Senegambia', 259, 300],
  ['ses-g7-t4-2', 'Chapter 4: Kingdoms of Senegambia', 300, 324],
  ['ses-g7-t4-3', 'Chapter 4: Kingdoms of Senegambia', 324, 342],
  ['ses-g7-t5-1', 'Chapter 5: Ethnic Groups', 343, 387],
  ['ses-g7-t5-2', 'Chapter 5: Ethnic Groups', 387, 415],
  ['ses-g7-t5-3', 'Chapter 5: Ethnic Groups', 415, 472],
  ['ses-g7-t6-1', 'Chapter 6: Political Organisation', 473, 629],
  ['ses-g7-t6-2', 'Chapter 6: Political Organisation', 629, 652],
  ['ses-g7-t6-3', 'Chapter 7: Social Structures', 653, 818],
  ['ses-g7-t7-1', 'Chapter 8: Acculturation', 819, 868],
  ['ses-g7-t7-2', 'Chapter 9: Language and Dialect', 869, 970],
  ['ses-g7-t7-3', 'Chapter 10: Traditional Beliefs', 971, 1019],
  ['ses-g7-t7-4', 'Chapter 11: Traditional Religion', 1020, 1134],
  ['ses-g7-t7-5', 'Chapter 12: Traditional Cultures', 1135, 1367],
  ['ses-g8-t1-1', 'Chapter 13: Islam in The Gambia', 1368, 1493],
  ['ses-g8-t1-2', 'Chapter 13: Christianity in The Gambia', 1493, 1587],
  ['ses-g8-t2-1', 'Chapter 16: Family Systems', 1782, 1845],
  ['ses-g8-t2-2', 'Chapter 16: Marriage, Dowry, Divorce', 1845, 1913],
  ['ses-g8-t3-1', 'Chapter 17: Gambian Economy', 1937, 2049],
  ['ses-g8-t3-2', 'Chapters 18-19: Gardening and Rice', 2078, 2165],
  ['ses-g8-t3-3', 'Chapters 20-21: Livestock, Cotton, Fishing', 2166, 2338],
  ['ses-g8-t3-4', 'Chapters 22-24: Industry, Trade, Banking', 2352, 2682],
  ['ses-g8-t4-1', 'Chapters 25-26: Population and Malthus', 2713, 2889],
  ['ses-g8-t4-2', 'Chapter 27: Health in The Gambia', 2927, 3173],
  ['ses-g8-t4-3', 'Chapter 28: Tourism', 3193, 3267],
  ['ses-g8-t4-4', 'Chapters 29-30: Weather, Climate, Environment', 3286, 3501],
];
const EXTRA = [
  ['ses-g8-t4-4', 'Chapter 15: World Physical Features', 1588, 1608],
];

const HEAD_KEYWORDS = /^(what|why|how|when|who|whom|types?|importance|reasons?|effects?|functions?|problems?|solutions?|advantages?|disadvantages?|factors?|methods?|elements?|components?|characteristics|uses?|roles?|duties|rights?|steps?|causes?|origin|meaning|sources?|routes?|centres?|centers?|commodities|organisation|organization|government|justice|rise|decline|fall|migration|kinship|inheritance|marriage|family|econom|trade|bank|tax|budget|health|disease|tourism|weather|climate|population|census|religion|worship|culture|language|dialect|proverbs?|music|songs?|dances?|dress|ceremon|hospitals?|drugs?|nutri|malaria|fishing|fish|cotton|rice|gardens?|livestock|cattle|industr|insurance|demand|supply|balance|accounts?|general|some|major|for|traditional|modern|local|national|world|parts|biggest|natural|periods?|terms?|examples?|hierarch|structures?|acculturation|toleration|taboos?|totems?|superstition|libation|sacred|beliefs?|practices?|medicines?|elements of|rates?|sex|age|definition|define|note\b.{0,40}|uses of|forms of|classes|conditions|tropical|signs|symptoms|prevention|transmission|mutilation|pregnancy|feeding|planning|abuse|soft|hard|centres?|companies|preserv|contribution|environmental|products?|pottery|refinery|partners?|re-export|forex|micro|bureaus?|transfer|urbanisation|patterns?|determines?|development|theor|vectors?|diseases?|sex:|transmission|hierarchy|stocks?|networks?)/i;

function cleanParas(raw) {
  let line = String(raw).replace(/^\[[^\]]+\]\s*/, '');
  line = line.replace(/\[cite:[^\]]*\]?/g, '');
  const out = [];
  for (const chunk of line.split(/\[\d+xBR\]/)) {
    // split inline numbered points: "...others.2. Ethnic groups..."
    // split inline lettered points: "...namely:  A. Tiramang..."
    const parts = String(chunk).split(/(?<=[a-zA-Z\)\].])\s*(?=\d{1,2}\.\s+[A-Z“"])/);
    for (const p1 of parts) {
      for (const p2 of String(p1).split(/(?<=[a-z\)\]:;])\s*(?=[A-Z]\.\s+[A-Z0-9“"])/)) {
        const t = String(p2).trim();
        if (t) out.push(t);
      }
    }
  }
  return out;
}
// Table header remnants (column labels whose rows follow as plain lines).
const SKIP_EXACT = new Set([
  'PERIODS / YEARS', 'CENTURIES', 'THEIR EXAMPLES', 'ACTIVITIES / CONTRIBUTION',
  'ACTIVITIES/CONTRIBUTIONS', 'NAME', 'LOCATION', 'ETHNIC GROUP', 'ETHNIC GROUPS',
  'ENGLISH', 'DIALECTS', 'MUSICAL INSTRUMENTS', 'TRADITIONAL DANCES',
  'TRADITIONAL MASQUERADES', 'BODY DRESS', 'HEAD DRESS', 'HAIR STYLE',
  'CEREMONIES', 'TYPES OF CEREMONIES', 'DISEASE THEY CURE', 'MODERN MEDICINES',
  'TYPES', 'MEANING', 'MANUFACTURING INDUSTRIES', 'NAME OF JIHADIST',
  'PLACE OF BIRTH', 'AREA OF JIHAD', 'CONTRIBUTIONS/ ACTIVITIES IN HIS CAREER',
  'NAME OF MISSIONARIES', 'ORIGIN', 'NAME OF BISHOPS', 'INSTRUMENT',
  'WEATHER UNITS', 'CENTIGRADE SCALE', 'FAHRENHEIT SCALE', 'TEMPERATURE POINTS',
  'WEATHER ELEMENTS',
]);
function isChapterMarker(t) {
  return /^CHAPTER\b/i.test(t) || /^GRADE\s*[–-]/i.test(t);
}
function isListItem(t) {
  return /^(•|❖|✓|-|–|○)\s+/.test(t) || /^\d+[\)\.]\s+/.test(t) ||
    /^[A-Z]\.\s+/.test(t) || /^[ivxlc]+\.\s+/i.test(t) || /^\(\d+\)/.test(t);
}
function stripMarker(t) {
  return t.replace(/^(•|❖|✓|-|–|○)\s+/, '').replace(/^\d+[\)\.]\s+/, '')
    .replace(/^[A-Z]\.\s+/, '').replace(/^[ivxlc]+\.\s+/i, '').replace(/^\(\d+\)\s*/, '').trim();
}
function isAllCaps(t) {
  const letters = t.replace(/[^A-Za-z]/g, '');
  return letters.length >= 4 && letters === letters.toUpperCase();
}
function isHead(t) {
  if (!t || t.length > 100 || /[.!?…]$/.test(t)) return false;
  if (isListItem(t)) return false;
  if (/^(NOTE|NB)\b/i.test(t)) return false;
  if (isAllCaps(t)) return true;
  return HEAD_KEYWORDS.test(t);
}
function isNote(t) { return /^(NOTE|NB)\b/i.test(t); }
function cleanOne(raw) {
  return String(raw).replace(/^\[[^\]]+\]\s*/, '').replace(/\[cite:[^\]]*\]?/g, '')
    .split(/\[\d+xBR\]/).map(s => s.trim()).filter(Boolean).join(' ');
}
function capWord(s) {
  s = String(s).trim();
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
// Greeting-table column headers (0-based indices into ses_notes.txt).
const TABLE_SKIP = new Set([894, 895, 896, 897, 898]);

function buildTopic(from, to) {
  const sections = [];
  let cur = { h: '', blocks: [] };
  const pushLi = (x) => {
    const last = cur.blocks[cur.blocks.length - 1];
    if (last && last.t === 'ul') last.items.push(x);
    else cur.blocks.push({ t: 'ul', items: [x] });
  };
  const flush = () => {
    // Never lose text: a lonely head with no blocks is kept as a paragraph.
    if (cur.h && !cur.blocks.length) cur.blocks.push({ t: 'p', x: cur.h });
    if (cur.blocks.length) sections.push(cur);
    cur = { h: '', blocks: [] };
  };
  // gather cleaned paras with merge rules
  const items = [];
  for (let i = from; i < to && i < rawLines.length; i++) {
    if (TABLE_SKIP.has(i)) continue;
    // Dialect triplets (JOLA / Come / "Joe","Bil") -> one clean line each.
    if (i >= 881 && i < 893) {
      const g = cleanOne(rawLines[i]), e = cleanOne(rawLines[i + 1]), f = cleanOne(rawLines[i + 2]);
      if (g && e && f) items.push('• ' + capWord(g) + ' — "' + e + '": ' + f);
      i += 2;
      continue;
    }
    // Greeting table: English phrase + Olof/Mandinka/Pularr/Jola forms.
    if (i >= 899 && i < 919 && (i - 899) % 5 === 0) {
      const e = cleanOne(rawLines[i]);
      const f = [1, 2, 3, 4].map(k => cleanOne(rawLines[i + k]));
      if (e && f.every(Boolean)) {
        items.push('• "' + e + '" — Olof: ' + f[0] + '; Mandinka: ' + f[1] + '; Pularr: ' + f[2] + '; Jola: ' + f[3]);
      }
      i += 4;
      continue;
    }
    for (const p of cleanParas(rawLines[i])) {
      if (!p || isChapterMarker(p)) continue;
      items.push(p);
    }
  }
  for (let k = 0; k < items.length; k++) {
    const t = items[k];
    if (SKIP_EXACT.has(t)) continue;
    const nxt = items[k + 1];
    const nxtIsHead = nxt ? (isHead(nxt) && !SKIP_EXACT.has(nxt)) : false;
    // year-range table pair: "2000-2099" + "21st"
    if (/^\d{3,4}\s*[–-]\s*\d{3,4}$/.test(t) && nxt && !/[.!?]$/.test(nxt)) {
      cur.blocks.push({ t: 'dl', k: t, v: nxt });
      k++;
      continue;
    }
    // label + value pair: "MANDINKO" + "Kora, Balafong, ..." / "BANANA" + "TABULE ..."
    const singleToken = /^[A-Z][A-Z\/-]*$/.test(t) && !/\s/.test(t);
    if (t.length < 45 && !/[.!?…]$/.test(t) && !isListItem(t) && !isNote(t) && nxt &&
        nxt.length < 140 && !/[.!?…]$/.test(nxt) && !isListItem(nxt) && !isNote(nxt) && !nxtIsHead &&
        ((nxt.includes(',') && (isAllCaps(t) || /^[A-Z][a-z]+$/.test(t))) || (singleToken && isAllCaps(t)))) {
      cur.blocks.push({ t: 'dl', k: t, v: nxt });
      k++;
      continue;
    }
    if (isNote(t)) { cur.blocks.push({ t: 'note', x: t }); continue; }
    if (isListItem(t)) { pushLi(stripMarker(t)); continue; }
    if (isHead(t)) { flush(); cur = { h: t, blocks: [] }; continue; }
    cur.blocks.push({ t: 'p', x: t });
  }
  flush();
  return sections;
}

const out = {};
const report = [];
for (const [id, chapter, from, to] of [...SEGMENTS, ...EXTRA]) {
  const sections = buildTopic(from, to);
  if (!out[id]) out[id] = { chapter: '', sections: [] };
  if (!out[id].chapter) out[id].chapter = chapter;
  // tag extra sections with their chapter
  const tagged = sections.map(s => ({ ...s, src: chapter }));
  out[id].sections.push(...tagged);
  const heads = sections.map(s => s.h || '(intro)').join(' | ').slice(0, 220);
  const nBlocks = sections.reduce((n, s) => n + s.blocks.length, 0);
  report.push(`${id}: ${sections.length} sections, ${nBlocks} blocks :: ${heads}`);
}
// search blob per topic
for (const id of Object.keys(out)) {
  const bits = [];
  out[id].sections.forEach(s => {
    if (s.h) bits.push(s.h);
    s.blocks.forEach(b => {
      if (b.t === 'ul') bits.push(...b.items);
      else if (b.t === 'dl') bits.push(b.k + ' ' + b.v);
      else bits.push(b.x);
    });
  });
  out[id].text = bits.join(' ').toLowerCase();
}

let js = '// Tech Monster — SES complete class notes (Mr. Fafanding Dibba, Mansa-Colley Bojang Sch. S.E.S. Dept.)\n';
js += '// Full running notes for every SES Book topic (Grades 7-8). Generated — do not hand-edit; rebuild with build_ses_fullnotes.cjs.\n';
js += '// Rendered by js/library.js sesFullNotesBlock() below each topic study card. Quiz topic keys are unchanged.\n';
js += 'window.sesFullNotes = ' + JSON.stringify(out, null, 1) + ';\n';
fs.writeFileSync(OUT, js);
console.log('wrote ' + OUT + ' (' + js.length + ' chars)');
console.log('topics: ' + Object.keys(out).length);
console.log('--- segment report ---');
console.log(report.join('\n'));
