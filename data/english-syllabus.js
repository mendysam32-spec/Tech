// Tech Monster - English syllabus topic order
// Ordered the way WAEC/GABECE set English objective questions:
// Lexis & Structure first (prepositions, grammar, concord...), lexis
// (synonyms/antonyms/confusable words), verb forms, idioms, word order,
// punctuation, then Comprehension LAST (English papers always end with comprehension).
// Each question's topic/section is mapped to a syllabus bucket; comprehension
// passage questions stay grouped together (passageId) at the end.
const ENG_SYLLABUS = [
  "Prepositions",
  "Lexis & Structure",
  "Grammar",
  "Concord / Subject-Verb Agreement",
  "Articles: A, An, The",
  "Determiners",
  "Tenses",
  "Verb Forms",
  "Sentence Structure",
  "Active and Passive Voice",
  "Direct and Reported Speech",
  "Question Tags",
  "Word Order & Arrangement",
  "Punctuation",
  "Spelling",
  "Synonyms",
  "Antonyms",
  "Lexis",
  "Confusable Words",
  "Homophones",
  "Idioms",
  "Figures of Speech",
  "Prefixes and Suffixes",
  "Contractions",
  "Correct and Incorrect Usage",
  "Essay and Letter Writing",
  "Comprehension",
  "Summary Writing",
  "General"
];

const ENG_BUCKET = {};
ENG_SYLLABUS.forEach((t, i) => { ENG_BUCKET[t] = i; });

// Map the many topic strings used across English banks to a syllabus bucket.
const TOPIC_ALIASES = {
  // prepositions
  "prepositions": "Prepositions",
  "prepositions and conjunctions": "Prepositions",
  "conjunctions": "Prepositions",
  // grammar / structure
  "grammar": "Grammar",
  "grammar: special constructions": "Grammar",
  "lexis & structure": "Lexis & Structure",
  "lexis": "Lexis",
  "concord / subject-verb agreement": "Concord / Subject-Verb Agreement",
  "subject-verb agreement": "Concord / Subject-Verb Agreement",
  "articles: a, an, the": "Articles: A, An, The",
  "determiners": "Determiners",
  "tenses": "Tenses",
  "tenses forms": "Tenses",
  "verbs and tenses": "Verb Forms",
  "verb forms": "Verb Forms",
  "verbs": "Verb Forms",
  "conditional sentences": "Verb Forms",
  "sentence structure": "Sentence Structure",
  "simple sentences": "Sentence Structure",
  "compound sentences": "Sentence Structure",
  "complex sentences": "Sentence Structure",
  "phrases": "Sentence Structure",
  "clauses": "Sentence Structure",
  "relative clause": "Sentence Structure",
  "active and passive voice": "Active and Passive Voice",
  "direct and reported speech": "Direct and Reported Speech",
  "reported speech": "Direct and Reported Speech",
  "question tags": "Question Tags",
  "word order": "Word Order & Arrangement",
  "word order and arrangement": "Word Order & Arrangement",
  "punctuation": "Punctuation",
  "punctuations": "Punctuation",
  "punctuation and spelling": "Punctuation",
  "spelling": "Spelling",
  "synonyms": "Synonyms",
  "lexis: synonyms and antonyms": "Synonyms",
  "antonyms": "Antonyms",
  "confusable words": "Confusable Words",
  "homophones": "Homophones",
  "idioms": "Idioms",
  "idioms and proverbs": "Idioms",
  "figures of speech": "Figures of Speech",
  "prefixes and suffixes": "Prefixes and Suffixes",
  "contractions": "Contractions",
  "correct and incorrect usage": "Correct and Incorrect Usage",
  "essay and letter writing": "Essay and Letter Writing",
  "comprehension": "Comprehension",
  "comprehension skills": "Comprehension",
  "summary writing": "Summary Writing",
  "adjectives": "Grammar",
  "the adjective": "Grammar",
  "adverbs": "Grammar",
  "nouns": "Grammar",
  "pronouns": "Grammar",
  "used to": "Grammar"
};

function engBucket(topic) {
  const t = String(topic || "").trim().toLowerCase();
  if (ENG_BUCKET[t] !== undefined) return ENG_BUCKET[t];
  if (TOPIC_ALIASES[t]) return ENG_BUCKET[TOPIC_ALIASES[t]];
  return ENG_BUCKET["General"];
}

// Group comprehension questions by passageId so each passage's questions stay
// together in original order; all non-comprehension questions keep original order.
function sortByEnglishSyllabus(questions) {
  if (!Array.isArray(questions)) return [];
  const compreh = [];   // {passageId, questions[]}
  const others = [];
  questions.forEach((q, idx) => {
    const topic = q.topic || q.section || "General";
    const bucket = engBucket(topic);
    if (bucket === ENG_BUCKET["Comprehension"] && q.passageId) {
      let grp = compreh.find(g => g.passageId === q.passageId);
      if (!grp) { grp = { passageId: q.passageId, questions: [] }; compreh.push(grp); }
      grp.questions.push({ q, idx, bucket });
    } else {
      others.push({ q, idx, bucket });
    }
  });
  others.sort((a, b) => {
    if (a.bucket !== b.bucket) return a.bucket - b.bucket;
    return a.idx - b.idx;
  });
  compreh.forEach(g => {
    g.questions.sort((a, b) => a.idx - b.idx);
  });
  // comprehension comes last
  const result = others.map(x => x.q);
  compreh.forEach(g => g.questions.forEach(x => result.push(x.q)));
  return result;
}

window.ENG_SYLLABUS = ENG_SYLLABUS;
window.engBucket = engBucket;
window.sortByEnglishSyllabus = sortByEnglishSyllabus;
