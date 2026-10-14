// Tech Monster – Past Papers Catalog
// Technical Drawing papers extracted from GABECE compendium (2002-2026). Other subjects scaffolded for future expansion.
// Questions source: window.Questions (data/questions.js = 292 Qs ordered chronologically, 2002 -> 2021). Offsets derived from docx totals.
// If dedicated per-year files exist they override slicing via window.PaperBank.
// Papers are capped at MAX_PAPER_QUESTIONS — larger official papers show their first MAX_PAPER_QUESTIONS questions only.
//
// "bank: true"  -> the year is served from an explicit data/<year>.js bank, so the slice is unused.
// "reserve: n"  -> how much this entry still advances the slice cursor. Bank-backed years set
//                  reserve to whatever the old slice consumed (or 0 for brand new years) so that
//                  adding or correcting one paper never shifts the years around it.
//
// Verified against the official papers in "pass papers/":
//   2015 -> data/2015.js  (50 Qs, explicit; was slicing arr[46..99] and bleeding into 2002/2016)
//   2019 -> data/2019.js  (50 Qs, explicit; year was missing entirely)
//   2021 -> data/2021.js  (50 Qs, explicit; was slicing arr[194..241], 48 entries that
//                          opened with two questions from other papers, 11 questions
//                          missing and 4 answer keys wrong)
//   2022 -> data/2022.js  (50 Qs, explicit; was slicing arr[242..293], 52 entries that
//                          started at the paper's Q6 and ran on into 2025's Q1-Q7)
//   2025 -> data/2025.js  (50 Qs, explicit; was slicing arr[294..336], only 43 Qs, Q45/Q48 options swapped)
//   2026 -> data/2026.js  (50 Qs, explicit)
// The slice offsets for 2002/2016/2020 are still approximate - those blocks do not
// line up with the official papers yet and are being re-arranged separately.
// RESOLVED: data/questions.js had 6 orphaned 2026 questions at the head of the array,
// which pushed every slice after 2002 out by 6. Removed. Blocks are now text-verified
// against GABECE_TD_Compendium.docx: 2002 arr[0..45], 2015 arr[46..99],
// 2016 arr[100..143], 2020 arr[144..187], 2026 arr[188..237].
// 2020 was set to 50 but the paper only has 44 questions; at 50 it was bleeding
// 6 questions from 2026 into the 2020 paper, so it is now 44.

const PaperTotals = {
  "Technical Drawing": [
    { year: 2002, total: 46 },
    { year: 2015, total: 50, bank: true, reserve: 54 },
    { year: 2016, total: 44 },
    { year: 2019, total: 50, bank: true, reserve: 0 },
    { year: 2020, total: 44 },
    { year: 2021, total: 50, bank: true, reserve: 48 },
    { year: 2022, total: 50, bank: true, reserve: 52 },
    { year: 2025, total: 50, bank: true, reserve: 0 },
    { year: 2026, total: 50, bank: true, reserve: 56 }
  ],
  "English": [
    { year: 2026, total: 80, duration: "50 minutes", marks: 100, hasDiagrams: false }
  ],
  // Scaffolds – fill when notes/books for other subjects land in data/
  "Maths": [],
  "Science": [],
  "SES": []
};

const MAX_PAPER_QUESTIONS = 80;

// Build catalog with cumulative offsets for slice mode
window.PaperCatalog = (() => {
  const catalog = [];
  for (const [subject, list] of Object.entries(PaperTotals)) {
    let cursor = 0;
    for (const p of list) {
      const total = Math.min(p.total, MAX_PAPER_QUESTIONS);
      catalog.push({
        subject,
        year: p.year,
        total,
        fullTotal: p.total,
        start: cursor,
        end: cursor + total,
        label: `GABECE ${p.year} — ${subject}`,
        exam: "GABECE",
        duration: p.duration || "2 hrs 30 mins",
        marks: p.marks || null,
        questions: total,
        hasBank: !!p.bank,
        hasDiagrams: p.hasDiagrams !== undefined ? p.hasDiagrams : true
      });
      cursor += p.reserve !== undefined ? p.reserve : total;
    }
  }
  return catalog;
})();

// Optional override bank: if you later generate data/papers/2002.js etc, populate window.PaperBank
window.PaperBank = window.PaperBank || {};

window.getPaperMeta = function(subject, year) {
  return window.PaperCatalog.find(p => p.subject === subject && String(p.year) === String(year)) || null;
};

window.getPaperQuestions = function(subject, year) {
  const y = String(year);
  const key = `${subject}__${y}`;
  // 1) explicit bank override
  if (window.PaperBank[key] && Array.isArray(window.PaperBank[key]) && window.PaperBank[key].length) {
    // A question with no answer key would always be scored wrong and print
    // "Correct answer: undefined" in review, so hold it back until it is answered.
    const bank = window.PaperBank[key];
    const ready = bank.filter(q => q && typeof q.correct === "number" && q.correct >= 0 && q.correct < (q.options || []).length);
    const held = bank.length - ready.length;
    if (held > 0) {
      console.warn(`[Tech Monster] ${key}: holding back ${held} unanswered question(s) pending an answer key.`);
    }
    return ready;
  }
  // 2) for Technical Drawing slice from global Questions (chronological 2002→2026)
  if (subject === "Technical Drawing" && typeof Questions !== "undefined") {
    const meta = window.getPaperMeta(subject, y);
    if (meta) {
      const slice = Questions.slice(meta.start, meta.end);
      // annotate with subject for engine consistency
      return slice.map(q => ({ subject, year: Number(y), ...q }));
    }
  }
  // 3) fallback – filter by image folder containing year string (handles sparse per-year image sets)
  if (subject === "Technical Drawing" && typeof Questions !== "undefined") {
    const byImage = Questions.filter(q => q.image && q.image.includes(`/${y}/`));
    if (byImage.length >= 10) return byImage.map(q => ({ subject, year: Number(y), ...q }));
  }
  // 4) generic fallback – subject bank if available
  const banks = {
    "Technical Drawing": (typeof Questions !== "undefined" ? Questions : []),
    "English": (typeof EnglishQuestions !== "undefined" ? EnglishQuestions : []),
    "Maths": (typeof MathsQuestions !== "undefined" ? MathsQuestions : []),
    "Science": (typeof ScienceQuestions !== "undefined" ? ScienceQuestions : []),
    "SES": (typeof SESQuestions !== "undefined" ? SESQuestions : [])
  };
  const pool = banks[subject] || [];
  return pool.slice(0, 30).map(q => ({ subject, year: Number(y) || 0, ...q }));
};

window.getPapersForSubject = function(subject) {
  const all = window.PaperCatalog.filter(p => p.subject === subject);
  // if no explicit papers yet but we have question bank, synthesize a generic "Practice Pool"
  if (!all.length) return [];
  return all.slice().sort((a, b) => b.year - a.year);
};
