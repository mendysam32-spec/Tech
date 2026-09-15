// Tech Monster – Past Papers Catalog
// Technical Drawing papers extracted from GABECE compendium (2002-2026). Other subjects scaffolded for future expansion.
// Questions source: window.Questions (data/questions.js = 393 Qs ordered chronologically). Offsets derived from docx totals.
// If dedicated per-year files exist they override slicing via window.PaperBank.

const PaperTotals = {
  "Technical Drawing": [
    { year: 2002, total: 46 },
    { year: 2015, total: 54 },
    { year: 2016, total: 44 },
    { year: 2020, total: 50 },
    { year: 2021, total: 48 },
    { year: 2022, total: 52 },
    { year: 2025, total: 43 },
    { year: 2026, total: 56 }
  ],
  // Scaffolds – fill when notes/books for other subjects land in data/
  "English": [],
  "Maths": [],
  "Science": []
};

// Build catalog with cumulative offsets for slice mode
window.PaperCatalog = (() => {
  const catalog = [];
  for (const [subject, list] of Object.entries(PaperTotals)) {
    let cursor = 0;
    for (const p of list) {
      catalog.push({
        subject,
        year: p.year,
        total: p.total,
        start: cursor,
        end: cursor + p.total,
        label: `GABECE ${p.year} — ${subject}`,
        exam: "GABECE",
        duration: "2 hrs 30 mins",
        questions: p.total,
        hasDiagrams: true
      });
      cursor += p.total;
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
    return window.PaperBank[key];
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
    "Science": (typeof ScienceQuestions !== "undefined" ? ScienceQuestions : [])
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
