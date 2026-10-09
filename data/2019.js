// Tech Monster - GABECE 2019 Technical Drawing (explicit bank)
// Source of truth: GABECE 2019 Technical Drawing paper, questions 1-50,
// Reference: GABECE/TD/2019. Transcribed verbatim from the official paper.
//
// Diagram handling: the official paper prints 16 questions against a figure.
// In this app quiz.html renders #questionImage ABOVE #questionText, so the
// paper's "the diagram below" is worded "above" here, matching data/2015.js.
// Figures are referenced as images/2019/qN.png and are supplied separately;
// drop the extracted PNGs into images/2019/ to activate them.
//
// Q34 and Q35 share one figure, so both point at q34.png (same pattern as
// data/2026.js q36.png).
//
// ANSWER KEY: the official paper (both the .docx transcription and the scanned
// .pdf) carries NO answer key - the .docx has 0 tables/0 textboxes and the .pdf
// is a page-scan whose OCR layer is unusable. The 4 answers below were therefore
// inferred and are marked "unverified": true. They are scored for real, so check
// them against the official marking scheme and delete the flag once confirmed.
//   Q9  (B) 150 cm  - options B and D are both printed as "150 cm" in the
//         official paper, so D also reads as correct. The duplicate is in the
//         source, not this transcription. Fix option D from the original paper.
//   Q12 (A) guide line - the figure is a dimensioning element, so R is taken as
//         a guide line rather than a centre/projection line. Needs the figure.
//   Q41 (C) proportionality - least weak of speed/accuracy/proportionality/
//         neatness. This is the weakest of the four; confirm first.
//   Q46 (D) 1.5 - the figure is read as pointing between 1 and 2, which rules
//         out 3.5 and 52 and leaves 1.1 vs 1.5. Needs the figure.
window.PaperBank = window.PaperBank || {};
window.PaperBank["Technical Drawing__2019"] = [
  {
    "n": 1,
    "question": "A drawing method by which an object is represented graphically is called",
    "image": "",
    "options": ["Graphical drawing.", "Technical drawing.", "Artistic drawing.", "Building drawing."],
    "correct": 1,
    "explanation": "Technical drawing is the graphical method of representing an object."
  },
  {
    "n": 2,
    "question": "Which area of technical drawing involves drawing building plans?",
    "image": "",
    "options": ["Architectural", "Electrical", "Geometrical", "Mechanical"],
    "correct": 0,
    "explanation": "Building plans are drawn in the architectural area of technical drawing."
  },
  {
    "n": 3,
    "question": "The best method of attaching a drawing paper to the drawing board is by using",
    "image": "",
    "options": ["pins.", "sello tape.", "clips.", "glue."],
    "correct": 2,
    "explanation": "Drawing clips hold the sheet firmly and square on the drawing board."
  },
  {
    "n": 4,
    "question": "An angle is usually measured by using a",
    "image": "",
    "options": ["protractor.", "divider.", "set square.", "metric rule."],
    "correct": 0,
    "explanation": "A protractor is the instrument used for measuring angles."
  },
  {
    "n": 5,
    "question": "Which of the following pencils is considered to be soft?",
    "image": "",
    "options": ["HB", "H", "6B", "2H"],
    "correct": 2,
    "explanation": "6B is a soft grade; H and 2H are hard and HB is medium."
  },
  {
    "n": 6,
    "question": "Which instrument is best used on the drawing board to draw horizontal lines?",
    "image": "",
    "options": ["30° set square", "45° set square", "Tee square", "Protractor"],
    "correct": 2,
    "explanation": "The tee-square is held against the board edge to guide horizontal lines."
  },
  {
    "n": 7,
    "question": "For drawing irregular curves, which instrument is best used?",
    "image": "",
    "options": ["Curved edge", "French curve", "English curve", "Protractor"],
    "correct": 1,
    "explanation": "A French curve is used for drawing smooth irregular curves."
  },
  {
    "n": 8,
    "question": "Which of the following dimensions is a correct size of a drawing paper?",
    "image": "",
    "options": ["210 mm x 297 mm", "297 mm x 310 mm", "310 mm x 340 mm", "150 mm x 180 mm"],
    "correct": 0,
    "explanation": "210 mm x 297 mm is the A4 sheet size."
  },
  {
    "n": 9,
    "question": "If the distance PS represents 3 meters in the diagram above, what does QR represent?",
    "image": "images/2019/q9.png",
    "options": ["3 cm", "150 cm", "700 cm", "150 cm"],
    "correct": 1,
    "unverified": true,
    "explanation": "UNVERIFIED ANSWER - 150 cm. The official paper prints 150 cm as both option B and option D, so either looks right; treat this question as broken until option D is corrected from the original paper."
  },
  {
    "n": 10,
    "question": "What is the name given to the line shown above?",
    "image": "images/2019/q10.png",
    "options": ["wavy line", "long break line", "short break line", "zig-zag line"],
    "correct": 1,
    "explanation": "A continuous line broken by a sharp zig-zag is a long break line."
  },
  {
    "n": 11,
    "question": "The lines shown above are said to be...",
    "image": "images/2019/q11.png",
    "options": ["parallel lines", "diverging lines", "converging lines", "slanting lines"],
    "correct": 0,
    "explanation": "Lines that stay the same distance apart are parallel."
  },
  {
    "n": 12,
    "question": "In the diagram above 'R' is...",
    "image": "images/2019/q12.png",
    "options": ["guide line.", "thin line.", "projection line.", "center line."],
    "correct": 0,
    "unverified": true,
    "explanation": "UNVERIFIED ANSWER - R is taken to be a guide line, the dimensioning element that marks what a dimension applies to. Confirm against the figure; it could also be a centre or projection line."
  },
  {
    "n": 13,
    "question": "Which of the lines below is a cutting plane?",
    "image": "",
    "options": ["Long chain line with thick ends", "Continuous thin line", "Dashed hidden line", "Wavy short break line"],
    "correct": 0,
    "explanation": "A cutting plane is shown as a long chain line with thick ends."
  },
  {
    "n": 14,
    "question": "Hatching lines are drawn to an angle of",
    "image": "",
    "options": ["30°", "45°", "60°", "90°"],
    "correct": 1,
    "explanation": "Section or hatching lines are conventionally drawn at 45 degrees."
  },
  {
    "n": 15,
    "question": "The height of capital letters on a drawing paper should not be more than",
    "image": "",
    "options": ["8 mm.", "6 mm.", "5 mm.", "3 mm."],
    "correct": 3,
    "explanation": "Capital letters on a drawing are 3 mm high (the ISO standard for A4)."
  },
  {
    "n": 16,
    "question": "The distance from the border line to the edge of an A4 drawing paper is",
    "image": "",
    "options": ["8 mm.", "10 mm.", "15 mm.", "20 mm."],
    "correct": 1,
    "explanation": "A 10 mm margin is left between the border line and the edge of the sheet."
  },
  {
    "n": 17,
    "question": "The measurement 360 mm is equivalent to",
    "image": "",
    "options": ["360 cm.", "36 cm.", "36 m.", "36.0 mm"],
    "correct": 1,
    "explanation": "360 mm = 36 cm."
  },
  {
    "n": 18,
    "question": "What is the name given to the angle shown above?",
    "image": "images/2019/q18.png",
    "options": ["Acute angle", "Obtuse angle", "Right angle", "Reflex angle"],
    "correct": 2,
    "explanation": "The figure shows a 90 degree corner, which is a right angle."
  },
  {
    "n": 19,
    "question": "A straight line has an angle of",
    "image": "",
    "options": ["90°", "180°", "270°", "360°"],
    "correct": 1,
    "explanation": "A straight line measures 180 degrees."
  },
  {
    "n": 20,
    "question": "An angle of more than 90° but less than 180° is called",
    "image": "",
    "options": ["right angle.", "obtuse angle.", "reflex angle.", "acute angle."],
    "correct": 1,
    "explanation": "An angle between 90 and 180 degrees is obtuse."
  },
  {
    "n": 21,
    "question": "What is the value of angle 'P' if angle 'R' is 70° in a complementary/supplementary set?",
    "image": "",
    "options": ["90°", "100°", "110°", "120°"],
    "correct": 2,
    "explanation": "The pair is supplementary, so P = 180 - 70 = 110 degrees. A complementary pair would give 20 degrees, which is not offered."
  },
  {
    "n": 22,
    "question": "Which side of the triangle above is the adjacent side?",
    "image": "images/2019/q22.png",
    "options": ["QR", "RS", "QS", "None"],
    "correct": 1,
    "explanation": "RS is the side adjacent to angle R; QR is the hypotenuse."
  },
  {
    "n": 23,
    "question": "The triangle shown above is called...",
    "image": "images/2019/q23.png",
    "options": ["equilateral", "scalene.", "isosceles.", "right angled."],
    "correct": 0,
    "explanation": "The equal hatch marks on all three sides indicate an equilateral triangle."
  },
  {
    "n": 24,
    "question": "What is the length of side QR of the triangle QRS in the diagram above?",
    "image": "images/2019/q24.png",
    "options": ["10", "12", "14", "16"],
    "correct": 0,
    "explanation": "Pythagoras: 6^2 + 8^2 = 100, so QR = 10."
  },
  {
    "n": 25,
    "question": "A plane figure bounded by four straight lines is called",
    "image": "",
    "options": ["Trapezium", "rectangle", "quadrilateral.", "square."],
    "correct": 2,
    "explanation": "A plane figure bounded by four straight lines is a quadrilateral."
  },
  {
    "n": 26,
    "question": "The sum of the interior angles of a quadrilateral add up to",
    "image": "",
    "options": ["90°", "180°", "270°", "360°"],
    "correct": 3,
    "explanation": "The interior angles of a quadrilateral total 360 degrees."
  },
  {
    "n": 27,
    "question": "The diagram shown above is called...",
    "image": "images/2019/q27.png",
    "options": ["parallelogram.", "deltoid.", "trapezium.", "rhombus."],
    "correct": 0,
    "explanation": "Opposite sides parallel and equal in length is a parallelogram."
  },
  {
    "n": 28,
    "question": "The diagonals of a square intersect at",
    "image": "",
    "options": ["45°", "60°", "90°", "180°"],
    "correct": 2,
    "explanation": "The diagonals of a square meet at right angles, 90 degrees."
  },
  {
    "n": 29,
    "question": "A quadrilateral with unequal sides and angles is known as",
    "image": "",
    "options": ["trapezoid", "deltoid.", "trapezium", "rhombus."],
    "correct": 2,
    "explanation": "A general quadrilateral with no equal sides or angles is a trapezium."
  },
  {
    "n": 30,
    "question": "A plane figure with more than four sides is known as",
    "image": "",
    "options": ["pentagon", "hexagon", "octagon", "polygon"],
    "correct": 3,
    "explanation": "A plane figure with more than four sides is a polygon."
  },
  {
    "n": 31,
    "question": "A nine-sided plane figure is called",
    "image": "",
    "options": ["nonagon.", "decagon.", "pentagon", "octagon."],
    "correct": 0,
    "explanation": "A nine-sided polygon is a nonagon."
  },
  {
    "n": 32,
    "question": "If the formula 540° / 5 is used to calculate the internal angle of a regular polygon, what is the name given to the polygon?",
    "image": "",
    "options": ["Heptagon", "Hexagon", "Octagon", "Pentagon"],
    "correct": 3,
    "explanation": "540/5 gives the interior angle of a pentagon."
  },
  {
    "n": 33,
    "question": "In the diagram above, the part labeled 'X' is known as...",
    "image": "images/2019/q33.png",
    "options": ["across length.", "across sides.", "across flat", "across centers."],
    "correct": 2,
    "explanation": "The distance between opposite flat faces of a hexagon is the across flats dimension."
  },
  {
    "n": 34,
    "question": "The part labeled OP is known as",
    "image": "images/2019/q34.png",
    "options": ["circumference.", "normal.", "tangent.", "arc."],
    "correct": 1,
    "explanation": "OP runs from the centre to the point of contact, so it is the normal. This figure is shared with question 35."
  },
  {
    "n": 35,
    "question": "The part labeled QR is known as",
    "image": "images/2019/q34.png",
    "options": ["normal.", "circumference.", "tangent.", "arc."],
    "correct": 2,
    "explanation": "QR touches the circle at one point only, so it is a tangent. This figure is shared with question 34."
  },
  {
    "n": 36,
    "question": "If a circle is divided into four equal parts, each part is called",
    "image": "",
    "options": ["sector", "quadrant.", "chord", "segment."],
    "correct": 1,
    "explanation": "One quarter of a circle is a quadrant."
  },
  {
    "n": 37,
    "question": "The circumference of a circle is referred to as the",
    "image": "",
    "options": ["perimeter.", "area.", "volume.", "segment."],
    "correct": 0,
    "explanation": "The distance round a circle is its perimeter."
  },
  {
    "n": 38,
    "question": "Which of the following is not a drawing instrument?",
    "image": "",
    "options": ["compass", "Protractor", "Caliper", "Set-square"],
    "correct": 2,
    "explanation": "A caliper is a measuring tool, not a drawing instrument."
  },
  {
    "n": 39,
    "question": "Which instrument is best used to divide a circle into 12 equal parts?",
    "image": "",
    "options": ["45° set-square", "30°-60° set-square", "compass", "Tee-square"],
    "correct": 2,
    "explanation": "A compass steps off equal lengths round the circle to divide it into 12 parts."
  },
  {
    "n": 40,
    "question": "To draw an ellipse in a circle, the method used is known as",
    "image": "",
    "options": ["trammel", "focal point.", "concentric.", "rectangular."],
    "correct": 0,
    "explanation": "Drawing an ellipse inside a circle using the trammel method."
  },
  {
    "n": 41,
    "question": "The main guiding principle in freehand sketching is",
    "image": "",
    "options": ["speed", "accuracy.", "proportionality.", "neatness."],
    "correct": 2,
    "unverified": true,
    "explanation": "UNVERIFIED ANSWER - proportionality is the weakest-defensible choice: a freehand sketch carries no instruments, so it communicates by getting the proportions right. Accuracy is the main rival answer. Confirm against the official key."
  },
  {
    "n": 42,
    "question": "How many faces has a cube?",
    "image": "",
    "options": ["6", "8", "4", "12"],
    "correct": 0,
    "explanation": "A cube has 6 equal square faces."
  },
  {
    "n": 43,
    "question": "The diagram above shows an isometric axis. What is the value of angle 'X'?",
    "image": "images/2019/q43.png",
    "options": ["120°", "60°", "45°", "30°"],
    "correct": 3,
    "explanation": "Isometric axes recede at 30 degrees from the horizontal."
  },
  {
    "n": 44,
    "question": "The name of a pyramid is determined by the",
    "image": "",
    "options": ["base size.", "sides.", "shape of the base.", "height."],
    "correct": 2,
    "explanation": "A pyramid is named after the shape of its base."
  },
  {
    "n": 45,
    "question": "The figure above is drawn in...",
    "image": "images/2019/q45.png",
    "options": ["oblique projection", "isometric projection", "orthographic projection", "axonometric projection"],
    "correct": 1,
    "explanation": "The circular ends project back symmetrically, which is isometric projection."
  },
  {
    "n": 46,
    "question": "What does the measurement 'R' read on the scale rule above?",
    "image": "images/2019/q46.png",
    "options": ["3.5", "52", "1.1", "1.5"],
    "correct": 3,
    "unverified": true,
    "explanation": "UNVERIFIED ANSWER - R is read as pointing between 1 and 2 on the scale rule, which rules out 3.5 and 52 and leaves 1.1 against 1.5. Confirm against the figure."
  },
  {
    "n": 47,
    "question": "The scale on a ruler is measured in",
    "image": "",
    "options": ["kilometers.", "millimeters.", "decimeters.", "meters."],
    "correct": 1,
    "explanation": "Drawing scales are graduated in millimetres."
  },
  {
    "n": 48,
    "question": "In orthographic projection, when the plan view is drawn above the front elevation, it is",
    "image": "",
    "options": ["first angle projection.", "second angle projection.", "third angle projection.", "fourth angle projection."],
    "correct": 2,
    "explanation": "Plan above the front elevation is third angle projection."
  },
  {
    "n": 49,
    "question": "Orthographic projection is a form of ________ drawing.",
    "image": "",
    "options": ["2 dimensional", "3 dimensional", "1 dimensional", "4 dimensional"],
    "correct": 0,
    "explanation": "Orthographic projection gives flat 2 dimensional views."
  },
  {
    "n": 50,
    "question": "The symbol shown above is a representative of...",
    "image": "images/2019/q50.png",
    "options": ["first angle projection", "second angle projection", "third angle projection", "isometric projection"],
    "correct": 2,
    "explanation": "The truncated cone with the circle on the left is the third angle projection symbol."
  }
];
