// Tech Monster - SES syllabus topic order
// Topics follow the Grade 7 SES book structure: introduction & history first,
// then the empires, ethnic groups/politics, culture, then economy & environment,
// matching how GABECE/WAEC set questions across the syllabus.
// Set q.topic on each question (already done in data/questions-ses*.js) to match
// one of these titles exactly; any unmatched topic lands last as "General".
const SES_SYLLABUS = [
  "What is SES?",
  "Importance of Studying SES",
  "Importance of Studying History",
  "Sources of History",
  "Periods and Terms Used in History",
  "Trans-Saharan Trade: Causes and Organisation",
  "Routes, Centres and Commodities",
  "Effects of Trans-Saharan Trade",
  "Ghana Empire",
  "Mali Empire and Mansa Musa",
  "Songhai Empire and Askia Muhammad",
  "Kaabu Kingdom (1537–1867)",
  "Fulladu Kingdom",
  "Jollof Kingdom",
  "Coming and Spread of Islam",
  "Coming and Effects of Christianity",
  "Mandinko and Fula",
  "Wollof and Jola",
  "Sarahuleh, Serer, Aku and Minor Groups",
  "Mandinko, Wollof and Fula Politics",
  "Jola, Serer and Stateless Groups",
  "Social Hierarchy, Kinship and Work Groups",
  "Acculturation, Toleration and Joking Relations",
  "Language, Dialect and Official Language",
  "Taboo, Totem, Superstition and Libation",
  "Traditional Religion and Sacred Places",
  "Culture, Ceremonies, Proverbs and Masquerades",
  "Types of Families",
  "Marriage, Dowry and Divorce",
  "Traditional and Modern Economy, Tax and Budget",
  "Vegetable Gardening and Rice Cultivation",
  "Livestock, Cotton and Fishing",
  "Industry, Trade and Banking",
  "Population, Census and Migration",
  "Health, Teenage Pregnancy and Drug Abuse",
  "Tourism in The Gambia",
  "Weather, Climate and Environment",
  "General"
];

const SES_SYLLABUS_INDEX = {};
SES_SYLLABUS.forEach((t, i) => { SES_SYLLABUS_INDEX[t] = i; });

function sesSyllabusIndex(topic) {
  return SES_SYLLABUS_INDEX[topic] !== undefined ? SES_SYLLABUS_INDEX[topic] : SES_SYLLABUS_INDEX["General"];
}

// Sort SES questions by syllabus topic order, keeping original order within each topic.
function sortBySesSyllabus(questions) {
  if (!Array.isArray(questions)) return [];
  return questions.map((q, idx) => ({ q, idx }))
    .sort((a, b) => {
      const ta = sesSyllabusIndex((a.q && a.q.topic) || "General");
      const tb = sesSyllabusIndex((b.q && b.q.topic) || "General");
      if (ta !== tb) return ta - tb;
      return a.idx - b.idx;
    })
    .map(x => x.q);
}

window.SES_SYLLABUS = SES_SYLLABUS;
window.sesSyllabusIndex = sesSyllabusIndex;
window.sortBySesSyllabus = sortBySesSyllabus;
