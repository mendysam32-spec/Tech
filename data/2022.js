// Tech Monster - GABECE 2022 Technical Drawing (explicit bank)
// Source: GABECE_2022_Technical_Drawing_Questions_and_Solutions.docx (50 MCQs, A-D)
// Replaces the old Questions[242..293] slice, which was wrong in several ways:
//   1) it held 52 entries for a 50-question paper - it started at the paper's Q6
//      (the first five questions were missing) and then ran on into the 2025
//      paper's Q1-Q7 at the end,
//   2) the paper's Q18 ("value of angle TUS") was absent altogether,
//   3) five answer keys were wrong: Q17, Q43, Q44, Q46 and Q47,
//   4) Q43 offered "prism" where the paper offers "pyramid", and Q44 asked for
//      angle "Y" where the paper asks for angle "X",
//   5) blanks were written as "..." / "........" instead of "______",
//   6) the shared directions for Q29-Q30 and Q40-Q41 were lost.
// Options below are in the official A, B, C, D order exactly as printed.
// Diagrams live in images/2022/; each of the 21 attached files was matched by
// content hash against the compendium's 2022 media, so those are verified.
// Three files in that folder are NOT attached, see the note at the bottom.
window.PaperBank = window.PaperBank || {};
window.PaperBank["Technical Drawing__2022"] = [
  {
    "n": 1,
    "question": "Technical Drawing can also be referred to as __________ communication.",
    "image": "",
    "options": ["written", "graphical", "mental", "oral"],
    "correct": 1,
    "explanation": "Technical drawing communicates with lines, symbols and standard conventions rather than with words."
  },
  {
    "n": 2,
    "question": "Which of the following is not a branch of Technical Drawing?",
    "image": "",
    "options": ["Intellectual Drawing", "Building Drawing", "Geometrical Drawing", "Mechanical Drawing"],
    "correct": 0,
    "explanation": "Technical drawing divides into geometrical, building (architectural) and mechanical drawing. 'Intellectual Drawing' is not a branch."
  },
  {
    "n": 3,
    "question": "One of the main features of a drawing board is",
    "image": "",
    "options": ["to have smooth edges.", "to have a smooth surface.", "to have unsquared surface.", "to have a rough surface."],
    "correct": 1,
    "explanation": "The board surface must be smooth and flat so the paper lies flat and the tee-square and set-square slide true."
  },
  {
    "n": 4,
    "question": "Which of the following angles is not found on set-squares?",
    "image": "",
    "options": ["100°", "90°", "60°", "45°"],
    "correct": 0,
    "explanation": "Set-squares come as 45°-45°-90° and 30°-60°-90°, so 100° is not one of their angles."
  },
  {
    "n": 5,
    "question": "Short pencil is recommended for use with a pair of compasses in order to",
    "image": "",
    "options": ["keep the pair of compasses in good shape.", "avoid obstruction when drawing arcs.", "utilise the pencil economically.", "decorate the pair of compasses."],
    "correct": 1,
    "explanation": "A short pencil stops its top end catching on the compass legs or the fingers as the arc is swept round."
  },
  {
    "n": 6,
    "question": "Identify the drawing instrument below.",
    "image": "images/2022/q6.png",
    "options": ["Divider", "Eraser", "French curve", "Protractor"],
    "correct": 2,
    "explanation": "The French curve is a template with a variety of curved edges, used for smooth curves that a compass cannot follow."
  },
  {
    "n": 7,
    "question": "All the following are units of the metric system except",
    "image": "",
    "options": ["inch.", "millimetre.", "metre.", "centimetre."],
    "correct": 0,
    "explanation": "The inch is an Imperial unit; millimetre, centimetre and metre all belong to the metric system."
  },
  {
    "n": 8,
    "question": "Which of the figures below is equivalent to 706 mm?",
    "image": "",
    "options": ["70 cm", "70.60 cm", "7006 cm", "7060 cm"],
    "correct": 1,
    "explanation": "Since 1 cm = 10 mm, dividing by 10 gives 706 mm = 70.60 cm."
  },
  {
    "n": 9,
    "question": "Which of the names is given to the figure below?",
    "image": "images/2022/q9.png",
    "options": ["Reflex angles", "Supplementary angles", "Obtuse angles", "Complementary angles"],
    "correct": 3,
    "explanation": "The two adjacent angles add up to 90° (35° + 55°), so they are complementary angles."
  },
  {
    "n": 10,
    "question": "The type of line recommended to start a drawing is a",
    "image": "",
    "options": ["wavy line.", "thick continuous line.", "long chain.", "thin continuous line."],
    "correct": 3,
    "explanation": "Layout and construction work is done first in thin continuous lines, which stay light and are easy to adjust or erase."
  },
  {
    "n": 11,
    "question": "The lines shown below are called __________ lines.",
    "image": "images/2022/q11.png",
    "options": ["perpendicular", "vertical", "parallel", "oblique"],
    "correct": 2,
    "explanation": "Parallel lines lie in the same plane, stay equidistant along their whole length and never meet."
  },
  {
    "n": 12,
    "question": "Point Y in the diagram below divides line XZ in the ratio of",
    "image": "images/2022/q12.png",
    "options": ["4:5.", "4:3.", "3:4.", "2:5."],
    "correct": 2,
    "explanation": "XY spans 3 of the 7 equal parts and YZ spans 4, giving the ratio 3:4."
  },
  {
    "n": 13,
    "question": "The shortest trace between two points is called a/an",
    "image": "",
    "options": ["arc.", "line.", "circumference.", "straight line."],
    "correct": 3,
    "explanation": "In plane geometry the shortest path joining two points is the straight line between them."
  },
  {
    "n": 14,
    "question": "In lettering, one can either use the slanted or __________ style.",
    "image": "",
    "options": ["horizontal", "vertical", "new", "old"],
    "correct": 1,
    "explanation": "Technical lettering is drawn either upright (vertical) at 90° or slanted, usually at 68° to 75°."
  },
  {
    "n": 15,
    "question": "The horizontal positioning of a drawing sheet is called __________ layout.",
    "image": "",
    "options": ["formal", "portrait", "landscape", "vertical"],
    "correct": 2,
    "explanation": "With the long edge running horizontally the sheet is in landscape layout; the reverse is portrait."
  },
  {
    "n": 16,
    "question": "Which of the following is not part of a title block?",
    "image": "",
    "options": ["Date", "Scale", "Name", "Signature"],
    "correct": 3,
    "explanation": "A title block carries the title, draughtsman's name, date, scale, units and drawing number - a personal signature is not one of them."
  },
  {
    "n": 17,
    "question": "The diagram below shows a/an __________ angle.",
    "image": "images/2022/q17.png",
    "options": ["right", "reflex", "acute", "obtuse"],
    "correct": 3,
    "explanation": "An angle measuring between 90° and 180° is obtuse; a reflex angle would be greater than 180°."
  },
  {
    "n": 18,
    "question": "What is the value of angle TUS in the diagram drawn below?",
    "image": "",
    "options": ["30°", "45°", "60°", "90°"],
    "correct": 0,
    "explanation": "US is perpendicular to the straight line AB, so angle AUS is 90°. Since angle AUT is 60°, angle TUS = 90° - 60° = 30°."
  },
  {
    "n": 19,
    "question": "The diagram below illustrates __________ angles.",
    "image": "images/2022/q19.png",
    "options": ["reflex", "acute", "supplementary", "complementary"],
    "correct": 2,
    "explanation": "The angles rest on a straight line and total 180° (23° + 92° + 65°), so they are supplementary."
  },
  {
    "n": 20,
    "question": "The altitude of a triangle is the same as its",
    "image": "",
    "options": ["apex.", "vertical height.", "vertex.", "hypotenuse."],
    "correct": 1,
    "explanation": "The altitude is the perpendicular distance from a vertex to the opposite side, that is the vertical height."
  },
  {
    "n": 21,
    "question": "The best way to describe a triangle as a plane figure is that it has",
    "image": "",
    "options": ["three angles.", "three sides and angles.", "three sides.", "three equal sides."],
    "correct": 1,
    "explanation": "A triangle is a closed two-dimensional figure bounded by three straight sides and containing three interior angles."
  },
  {
    "n": 22,
    "question": "The diagram below illustrates two 45° set-squares attached together. What is the value of angle ABC?",
    "image": "images/2022/q22.png",
    "options": ["135°", "120°", "100°", "90°"],
    "correct": 0,
    "explanation": "The 90° corner of one set-square added to the 45° corner of the other gives 90° + 45° = 135°."
  },
  {
    "n": 23,
    "question": "What is the sum of two angles of an equilateral triangle?",
    "image": "",
    "options": ["60°", "90°", "120°", "180°"],
    "correct": 2,
    "explanation": "Every angle of an equilateral triangle is 60°, so two of them total 120°."
  },
  {
    "n": 24,
    "question": "Which of the plane figures below does not have its diagonal at right angle?",
    "image": "",
    "options": ["Rhombus", "Rectangle", "Deltoid", "Square"],
    "correct": 1,
    "explanation": "The diagonals of a square, a rhombus and a deltoid meet at 90°, but those of a plain rectangle are only at right angles if the rectangle is a square."
  },
  {
    "n": 25,
    "question": "The figure below represents a",
    "image": "images/2022/q25.png",
    "options": ["parallelogram.", "kite.", "square.", "rhombus."],
    "correct": 2,
    "explanation": "Four equal sides, four right angles and diagonals that bisect each other at right angles make the figure a square."
  },
  {
    "n": 26,
    "question": "All quadrilaterals have",
    "image": "",
    "options": ["four sides and two angles.", "four sides and four diagonals.", "four angles and two diagonals.", "four sides and three diagonals."],
    "correct": 2,
    "explanation": "A quadrilateral always has four interior angles and exactly two diagonals, each joining a pair of opposite vertices."
  },
  {
    "n": 27,
    "question": "Which of the quadrilaterals below has none of its sides parallel?",
    "image": "",
    "options": ["Parallelogram", "Trapezium", "Deltoid", "Square"],
    "correct": 2,
    "explanation": "A deltoid (kite) has two pairs of equal adjacent sides but no parallel sides at all; the others have at least one pair."
  },
  {
    "n": 28,
    "question": "A square when distorted to an angle other than 90° will become a",
    "image": "",
    "options": ["trapezoid.", "parallelogram.", "rhombus.", "trapezium."],
    "correct": 2,
    "explanation": "Distorting a square slants its corners away from 90° while all four sides stay equal, which is a rhombus."
  },
  {
    "n": 29,
    "passage": "Use the diagram below to answer questions 29 and 30.",
    "question": "The distance marked 'Y' in the diagram above is called",
    "image": "images/2022/q29.png",
    "options": ["circumference.", "diagonal.", "across corners.", "across flat."],
    "correct": 3,
    "explanation": "The perpendicular distance between two opposite parallel flats of a regular polygon is the distance across flats (A/F)."
  },
  {
    "n": 30,
    "passage": "Use the diagram below to answer questions 29 and 30.",
    "question": "The angle marked X is equal to",
    "image": "",
    "options": ["90°", "60°", "45°", "30°"],
    "correct": 1,
    "explanation": "The exterior angle of a regular n-sided polygon is 360° ÷ n, so for a hexagon 360° ÷ 6 = 60°."
  },
  {
    "n": 31,
    "question": "A seven sided plane figure is called",
    "image": "",
    "options": ["octagon.", "hexagon.", "heptagon.", "pentagon."],
    "correct": 2,
    "explanation": "A seven-sided polygon is a heptagon; five sides is a pentagon, six a hexagon and eight an octagon."
  },
  {
    "n": 32,
    "question": "The diagram below shows an incomplete method of constructing a polygon. How many sides will this polygon have?",
    "image": "images/2022/q32.png",
    "options": ["5", "6", "7", "8"],
    "correct": 2,
    "explanation": "When the baseline is divided into 7 equal parts, the standard construction sweeps arcs of that radius from each division point to close a 7-sided polygon."
  },
  {
    "n": 33,
    "question": "A straight line drawn at 90° to the tangent from the point of tangency is called",
    "image": "",
    "options": ["normal.", "diameter.", "tangent.", "radius."],
    "correct": 0,
    "explanation": "A line drawn perpendicular to a tangent at the point of contact is, by definition, the normal."
  },
  {
    "n": 34,
    "question": "A sector is bounded by",
    "image": "",
    "options": ["two radii and a chord.", "two radii and an arc.", "two radii and a tangent.", "a chord and an arc."],
    "correct": 1,
    "explanation": "A sector is the region enclosed by the two radii from the centre and the arc that joins their outer ends."
  },
  {
    "n": 35,
    "question": "How many semi-circles make up a complete circle?",
    "image": "",
    "options": ["2", "3", "4", "5"],
    "correct": 0,
    "explanation": "A semi-circle is half a circle, so two of them make a complete circle."
  },
  {
    "n": 36,
    "question": "The diagram below shows __________ circles.",
    "image": "images/2022/q36.png",
    "options": ["inscribed", "circumscribed", "eccentric", "concentric"],
    "correct": 3,
    "explanation": "Circles of different radii that share one common centre are called concentric circles."
  },
  {
    "n": 37,
    "question": "The longest diameter in an ellipse is called",
    "image": "",
    "options": ["long axis.", "major axis.", "minor axis.", "focal point."],
    "correct": 1,
    "explanation": "The major axis is the longest diameter of an ellipse and it passes through both foci; the shortest one is the minor axis."
  },
  {
    "n": 38,
    "question": "In all ellipses, the distance from one end of the minor axis to the focal points is equal to half the",
    "image": "",
    "options": ["major axis.", "diameter.", "radius.", "minor axis."],
    "correct": 0,
    "explanation": "For every ellipse, the distance from an end of the minor axis to a focus is constant and equals half the major axis."
  },
  {
    "n": 39,
    "question": "An accurate freehand sketching depends on good",
    "image": "",
    "options": ["line work.", "proportion.", "spacing.", "layout."],
    "correct": 1,
    "explanation": "A freehand sketch is judged on proportion - the relative sizes and positions of the parts must be right."
  },
  {
    "n": 40,
    "passage": "Use the diagram below to answer questions 40 and 41.",
    "question": "The figure illustrated above is called a",
    "image": "images/2022/q40.png",
    "options": ["square pyramid.", "rectangular prism.", "cube.", "cuboid."],
    "correct": 2,
    "explanation": "A cube is a solid bounded by six equal square faces meeting at right angles."
  },
  {
    "n": 41,
    "passage": "Use the diagram below to answer questions 40 and 41.",
    "question": "How many faces does the solid figure have?",
    "image": "images/2022/q41.png",
    "options": ["4", "6", "8", "10"],
    "correct": 1,
    "explanation": "A cube has six square faces - top, bottom, front, back, left and right."
  },
  {
    "n": 42,
    "question": "Which of the following is not a representation of an object in pictorial drawing?",
    "image": "",
    "options": ["Orthographic drawing", "Perspective", "Oblique drawing", "Isometric drawing."],
    "correct": 0,
    "explanation": "Perspective, oblique and isometric are three-dimensional pictorial views; orthographic drawing is a two-dimensional multi-view method."
  },
  {
    "n": 43,
    "question": "An elevation of a solid geometrical figure is shown below. The solid can possibly be a",
    "image": "images/2022/q43.png",
    "options": ["cube.", "pyramid.", "rectangular pyramid.", "cylinder."],
    "correct": 3,
    "explanation": "An upright cylinder projects as a rectangle in its front or side elevation."
  },
  {
    "n": 44,
    "question": "The diagram below shows isometric axis. The angle marked X will be",
    "image": "images/2022/q44.png",
    "options": ["30°", "45°", "60°", "120°"],
    "correct": 0,
    "explanation": "The two receding isometric axes are drawn at 30° to the horizontal reference line."
  },
  {
    "n": 45,
    "question": "The figure drawn below represents __________ projection.",
    "image": "images/2022/q45.png",
    "options": ["isometric", "orthographic", "oblique", "perspective"],
    "correct": 2,
    "explanation": "Oblique projection keeps the front face parallel to the picture plane in true shape and recedes the depth at an angle, usually 45°."
  },
  {
    "n": 46,
    "question": "Which of the following figures is correctly dimensioned?",
    "image": "images/2022/q46.png",
    "options": ["Figure A", "Figure B", "Figure C", "Figure D"],
    "correct": 0,
    "explanation": "Figure A is correct: the extension lines leave a small gap from the outline, the arrowheads touch the extension lines, and the figure sits above the horizontal dimension line."
  },
  {
    "n": 47,
    "question": "The line labeled 'S' in the diagram below is called __________ line.",
    "image": "images/2022/q47.png",
    "options": ["parallel", "dimension", "centre", "projection"],
    "correct": 3,
    "explanation": "A line run out from the object outline to mark the extent of a dimension is a projection (extension) line."
  },
  {
    "n": 48,
    "question": "Which of the figures below represents a third angle projection?",
    "image": "images/2022/q48.png",
    "options": ["I and IV", "II and IV", "II and III", "I and II"],
    "correct": 1,
    "explanation": "In the standard symbols, figures II and IV place the views on the same side of the truncated cone, which is the third angle arrangement."
  },
  {
    "n": 49,
    "question": "The angle of projection for the true shape on a cutting plane is",
    "image": "",
    "options": ["60°", "80°", "90°", "120°."],
    "correct": 2,
    "explanation": "The true shape of an inclined surface is projected by viewing at right angles to the cutting plane, that is at 90°."
  },
  {
    "n": 50,
    "question": "The figure above shows an isometric drawing of a block. Identify the end view as in the direction of arrow E.",
    "image": "images/2022/q50.png",
    "options": ["Figure A", "Figure B", "Figure C", "Figure D"],
    "correct": 0,
    "explanation": "Looking in the direction of arrow E gives the stepped profile with dashed hidden lines marking the square recess on top - Figure A."
  }
];
// Unattached files in images/2022/ - deliberately left out, do not wire these up blind:
//   q13.png  not present anywhere in the compendium, so it cannot be confirmed as
//            the 2022 Q13 figure. Q13 ("shortest trace between two points") is
//            answerable without a figure, so it ships without one.
//   q30.png  CONFIRMED WRONG: it is compendium image153, the figure for the 2026
//            paper's Q27. Attaching it to 2022 Q30 would show a misleading diagram.
//   q49.png  not present anywhere in the compendium either. 2022 Q49 ("angle of
//            projection for the true shape on a cutting plane") is answerable
//            without a figure, so it ships without one.
// 2022 Q18 ("value of angle TUS") and Q30 ("angle marked X") also have no figure
// available anywhere in the sources; both are still answerable as written.
