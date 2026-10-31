// Tech Monster - Technical Drawing syllabus topic order
// Topics are ordered the way WAEC/GABECE set questions: introduction first,
// then equipment, lettering, lines, construction, ... up to the last topic.
// Set q.syllabusTopic on any question to override keyword tagging precisely.
const TD_SYLLABUS = [
  "Introduction to Technical Drawing",
  "Drawing Instruments, Equipment & Materials",
  "Lettering & Numerals",
  "Types of Lines & Line Work",
  "Layout of Drawing Sheet (Border, Title Block, Paper Sizes)",
  "Geometric Construction",
  "Triangles & Angles",
  "Quadrilaterals & Polygons",
  "Circles & Tangents",
  "Conic Sections (Ellipse, Parabola, Hyperbola)",
  "Plane & Solid Geometry",
  "Pictorial Drawing (Isometric, Oblique)",
  "Orthographic Projection",
  "Dimensioning & Measurement",
  "Sectional Views & Hatching",
  "Freehand Sketching & Visualization",
  "General"
];

const SYLLABUS_INDEX = {};
TD_SYLLABUS.forEach((t, i) => { SYLLABUS_INDEX[t] = i; });

// topic -> keywords (checked in syllabus order; first match wins)
const TOPIC_KEYWORDS = [
  ["universal language", "language of an industry", "language of industry", "importance of technical drawing", "technical drawing is", "what is technical drawing", "true about technical drawing", "encourages tidy and accurate work", "drawing office", "organizational structure", "chief draftsman", "section leader"], // 0 Introduction
  ["tee-square", "tsquare", "t square", "set square", "protractor", "compass", "compasses", "drawing board", "drawing clips", "french curve", "try square", "ruler", "rule", "pencil", "hb", "2b", "4b", "divider", "drawing instrument", "drawing equipment", "blade", "stock"], // 1 Equipment
  ["lettering", "numeral", "numerals", "stencil", "block letters", "capital letters", "printing", "legible", "legibility", "single-stroke"], // 2 Lettering
  ["line", "lines", "hatching", "hidden", "centre line", "center line", "cutting plane line", "dimension line", "extension line", "projection line", "outline", "chain line", "leader line", "continuous", "wavy", "zig-zag", "zigzag", "parallel", "perpendicular", "converging", "diverging", "diagonal", "transversal", "thick line", "thin line", "short dashed"], // 3 Lines
  ["title block", "border line", "border", "layout", "landscape", "portrait", "a4", "a3", "paper size", "margin", "sheet size", "titleblock"], // 4 Layout
  ["bisect", "bisector", "trisect", "construct", "construction", "arc", "arcs", "radius", "radii", "inscribe", "circumscribe", "step-off", "stepped off"], // 5 Geometric Construction
  ["triangle", "triangles", "angle", "angles", "acute", "obtuse", "reflex", "complementary", "supplementary", "right angle", "equilateral", "isosceles", "scalene", "vertical angle", "base angle", "hypotenuse", "adjacent side", "opposite side", "sum of angles", "median", "vertex", "apex"], // 6 Triangles & Angles
  ["quadrilateral", "square", "rectangle", "rhombus", "trapezium", "trapezoid", "kite", "deltoid", "parallelogram", "polygon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon", "diagonal", "re-entrant", "convex", "across flats", "across corners"], // 7 Quadrilaterals & Polygons
  ["circle", "circles", "chord", "radius", "diameter", "circumference", "sector", "segment", "quadrant", "tangent", "tangential", "concentric", "eccentric", "semicircle"], // 8 Circles & Tangents
  ["ellipse", "ellipses", "major axis", "minor axis", "focal", "foci", "ordinate", "trammel", "parabola", "hyperbola", "conic"], // 9 Conic Sections
  ["prism", "pyramid", "cube", "cuboid", "cylinder", "cone", "cones", "frustum", "solid", "solids", "geometrical solid", "geometrical figure", "elevation", "section", "sectional", "cutting plane", "cut surface", "true shape", "cross section"], // 10 Plane & Solid Geometry
  ["isometric", "oblique", "cabinet", "cavalier", "perspective", "axonometric", "pictorial", "receding", "isometric circle", "ordinates", "foreshortened", "three-dimensional view", "three views"], // 11 Pictorial Drawing
  ["orthographic", "first angle", "third angle", "projection", "plan", "front elevation", "end view", "side view", "principal plane", "horizontal plane", "vertical plane", "views are usually shown"], // 12 Orthographic Projection
  ["dimension", "dimensioning", "millimetre", "millimeter", "centimetre", "meter", "metre", "measurement", "linear measurement", "ø", "diameter symbol", "chain", "datum", "stepping", "scale", "convert", "mm", "cm"], // 13 Dimensioning & Measurement
  ["section", "sectional", "hatching", "cut surface", "true shape", "cutting plane", "cross section"], // 14 Sectional Views & Hatching
  ["freehand", "sketch", "sketching", "proportionality", "proportion", "visualization", "visual skills", "perception", "motor skills", "intellectual skills", "neatness", "accuracy", "clarity"] // 15 Freehand Sketching & Visualization
];

function syllabusTopicForQuestion(question) {
  if (!question) return "General";
  if (question.syllabusTopic && SYLLABUS_INDEX[question.syllabusTopic] !== undefined) {
    return question.syllabusTopic;
  }
  const qtext = `${question.question || ""} ${question.image || ""}`.toLowerCase();
  const xtext = `${qtext} ${question.explanation || ""}`.toLowerCase();
  // 1) match on question text first (most reliable)
  for (let i = 0; i < TOPIC_KEYWORDS.length; i++) {
    const kws = TOPIC_KEYWORDS[i];
    if (kws.some(k => qtext.indexOf(k.toLowerCase()) !== -1)) return TD_SYLLABUS[i];
  }
  // 2) fall back to explanation text
  for (let i = 0; i < TOPIC_KEYWORDS.length; i++) {
    const kws = TOPIC_KEYWORDS[i];
    if (kws.some(k => xtext.indexOf(k.toLowerCase()) !== -1)) return TD_SYLLABUS[i];
  }
  return "General";
}

function syllabusIndex(topic) {
  return SYLLABUS_INDEX[topic] !== undefined ? SYLLABUS_INDEX[topic] : SYLLABUS_INDEX["General"];
}

// Sort questions by syllabus topic order, then by year (asc), then original position.
function sortBySyllabus(questions) {
  if (!Array.isArray(questions)) return [];
  return questions.map((q, idx) => ({ q, idx }))
    .sort((a, b) => {
      const ta = syllabusTopicForQuestion(a.q);
      const tb = syllabusTopicForQuestion(b.q);
      const ia = syllabusIndex(ta);
      const ib = syllabusIndex(tb);
      if (ia !== ib) return ia - ib;
      const ya = Number(a.q.year) || 0;
      const yb = Number(b.q.year) || 0;
      if (ya !== yb) return ya - yb;
      return a.idx - b.idx;
    })
    .map(x => x.q);
}

window.TD_SYLLABUS = TD_SYLLABUS;
window.syllabusTopicForQuestion = syllabusTopicForQuestion;
window.sortBySyllabus = sortBySyllabus;
