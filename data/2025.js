// Tech Monster - GABECE 2025 Technical Drawing (explicit bank)
// Source: GABECE_2025_Technical_Drawing.docx (50 multiple choice questions, A-D)
// Replaces the old Questions[294..342] slice, which was wrong in three ways:
//   1) it only held 43 of the paper's 50 questions (Q44-Q50 were cut off),
//   2) Q45 and Q48 had each other's options ("Isometric projection is a ... form
//      of drawing" was carrying the 2/3/4/5-view options and vice versa),
//   3) several question stems had lost their "______" blank.
// Options below are in the official A, B, C, D order exactly as printed.
// Diagrams live in images/2025/; that folder was extracted off by one at Q15, so
// the title-block figure was renamed q14.png -> q15.png to match its question.
window.PaperBank = window.PaperBank || {};
window.PaperBank["Technical Drawing__2025"] = [
  {
    "n": 1,
    "question": "Good draughtsmanship involves",
    "image": "",
    "options": ["using all types of lines in drawing.", "the use of compasses alone.", "division of the drawing area.", "drawing border lines and title block."],
    "correct": 3,
    "explanation": "A well organised drawing carries its border lines and a title block, which hold the scale, date, name and sheet number."
  },
  {
    "n": 2,
    "question": "In perception, one uses",
    "image": "",
    "options": ["visual skills and coordination.", "motor skills and intellectual skills.", "intellectual skills and imagination.", "coordination and motor skills."],
    "correct": 1,
    "explanation": "Perception in drawing is the ability to interpret what is seen and to imagine it - it relies on both intellectual and motor skills."
  },
  {
    "n": 3,
    "question": "The main function of the rule is to",
    "image": "",
    "options": ["mark points on an object.", "measure an object.", "measure in kilometres.", "transfer measurements from the rule to an object."],
    "correct": 1,
    "explanation": "A rule is a graduated scale used for taking linear measurements."
  },
  {
    "n": 4,
    "question": "The instrument used to measure an angle is called",
    "image": "",
    "options": ["compasses.", "French curve.", "protractor.", "ruler."],
    "correct": 2,
    "explanation": "The protractor is graduated in degrees and is used to measure or set out angles."
  },
  {
    "n": 5,
    "question": "Which of the following is not a Technical Drawing equipment?",
    "image": "",
    "options": ["Set-square", "French curve", "File", "Drawing board"],
    "correct": 2,
    "explanation": "A file is a workshop tool for shaping metal; the set-square, French curve and drawing board are all drawing equipment."
  },
  {
    "n": 6,
    "question": "Which of the following angles is not found on a set square?",
    "image": "",
    "options": ["15°", "30°", "45°", "90°"],
    "correct": 0,
    "explanation": "The 30°-60°-90° and the 45°-45°-90° set squares are the standard pair, so 15° is not one of their angles."
  },
  {
    "n": 7,
    "question": "What name is given to the old system of measuring?",
    "image": "",
    "options": ["Imperial system", "Metre standard", "Metric system", "Newton system"],
    "correct": 0,
    "explanation": "The Imperial system (feet, inches, yards) is the older British system; the metre standard is the metric system."
  },
  {
    "n": 8,
    "question": "What is the distance marked X in the diagram above?",
    "image": "images/2025/q8.png",
    "options": ["20 mm", "26 mm", "28 mm", "30 mm"],
    "correct": 2,
    "explanation": "Reading the scale on the rule, the arrow X runs from the 0 mm mark to the 28 mm mark."
  },
  {
    "n": 9,
    "question": "Lines that are equidistant throughout their length are said to be",
    "image": "",
    "options": ["equal.", "horizontal.", "parallel.", "perpendicular."],
    "correct": 2,
    "explanation": "Parallel lines stay the same distance apart at every point along their length."
  },
  {
    "n": 10,
    "question": "The diagram below illustrates ______ lines.",
    "image": "images/2025/q10.png",
    "options": ["vertical", "perpendicular", "horizontal", "diagonal"],
    "correct": 1,
    "explanation": "The right-angle square at the meeting point shows the two lines meet at 90°, so they are perpendicular."
  },
  {
    "n": 11,
    "question": "To bisect simply means to divide equally into ______ parts.",
    "image": "",
    "options": ["two", "three", "four", "five"],
    "correct": 0,
    "explanation": "To bisect is to divide a line, angle or shape into two equal parts."
  },
  {
    "n": 12,
    "question": "To bisect line AB below, one needs to use points ______ as centres to scribe the arcs.",
    "image": "images/2025/q12.png",
    "options": ["A and B", "A and C", "A, B and C", "B and C"],
    "correct": 0,
    "explanation": "Equal arcs are struck from the ends A and B with a radius greater than half of AB; their intersection is then joined to C."
  },
  {
    "n": 13,
    "question": "Lines ST and UV in the diagram below are ______ to each other.",
    "image": "images/2025/q13.png",
    "options": ["perpendicular", "parallel", "horizontal", "converging"],
    "correct": 1,
    "explanation": "ST and UV are slanted, but they remain equidistant along their whole length, which makes them parallel."
  },
  {
    "n": 14,
    "question": "The most common type of lettering is the ______ style.",
    "image": "",
    "options": ["vertical", "slanted", "horizontal", "common"],
    "correct": 1,
    "explanation": "Slanted (italic) single-stroke lettering is the standard style used on technical drawings."
  },
  {
    "n": 15,
    "question": "The part labelled X on the diagram below is the",
    "image": "images/2025/q15.png",
    "options": ["title block.", "rectangle.", "centre box.", "border line."],
    "correct": 0,
    "explanation": "The small framed block in the bottom right corner of the sheet is the title block, which carries the drawing's identification details."
  },
  {
    "n": 16,
    "question": "The standard measurement of border lines on A4 paper is",
    "image": "",
    "options": ["8 mm.", "10 mm.", "12 mm.", "15 mm."],
    "correct": 1,
    "explanation": "A 10 mm border is left all round an A4 drawing sheet so it can be filed without the drawing being trimmed."
  },
  {
    "n": 17,
    "question": "The construction below illustrates how to construct an angle of",
    "image": "images/2025/q17.png",
    "options": ["30°", "60°", "90°", "180°"],
    "correct": 1,
    "explanation": "The construction sets out six equal parts of a 60° step, so the angle at the base is 60°."
  },
  {
    "n": 18,
    "question": "All angles are measured in",
    "image": "",
    "options": ["centimetres.", "degrees.", "metres.", "millimetres."],
    "correct": 1,
    "explanation": "Angular measurement is expressed in degrees, with a full turn being 360°."
  },
  {
    "n": 19,
    "question": "What is the value of angle X in the diagram below?",
    "image": "images/2025/q19.png",
    "options": ["70°", "90°", "110°", "180°"],
    "correct": 0,
    "explanation": "Angle X is a co-interior (alternate) angle on the parallel lines, so X = 180° − 110° = 70°."
  },
  {
    "n": 20,
    "question": "A triangle with all the sides and angles unequal is called ______ triangle.",
    "image": "",
    "options": ["scalene", "right angle", "isosceles", "equilateral"],
    "correct": 0,
    "explanation": "A scalene triangle has three unequal sides and three unequal angles."
  },
  {
    "n": 21,
    "question": "The value of X in the diagram below is",
    "image": "images/2025/q21.png",
    "options": ["20°", "30°", "45°", "60°"],
    "correct": 3,
    "explanation": "The equal side marks show the triangle is equilateral, and the angles of an equilateral triangle are 180° ÷ 3 = 60° each."
  },
  {
    "n": 22,
    "question": "To inscribe a circle in a triangle, one needs to bisect two",
    "image": "",
    "options": ["vertices.", "sides.", "apex.", "angles."],
    "correct": 3,
    "explanation": "Bisecting two of the angles and dropping perpendiculars from the centre fixes the centre of the inscribed circle."
  },
  {
    "n": 23,
    "question": "The longest side of a right angle triangle is known as",
    "image": "",
    "options": ["adjacent.", "bisector.", "hypotenuse.", "perpendicular."],
    "correct": 2,
    "explanation": "The hypotenuse is the side opposite the right angle and is always the longest side of the triangle."
  },
  {
    "n": 24,
    "question": "The difference between a rhombus and a square is their",
    "image": "",
    "options": ["angles.", "areas.", "perimeters.", "sides."],
    "correct": 0,
    "explanation": "Both have four equal sides, but a rhombus has four unequal angles while a square has four right angles."
  },
  {
    "n": 25,
    "question": "Identify the quadrilateral illustrated below.",
    "image": "images/2025/q25.png",
    "options": ["square", "rhombus", "rectangle", "deltoid"],
    "correct": 3,
    "explanation": "Two pairs of equal adjacent sides with no right angles is the deltoid, or kite shape."
  },
  {
    "n": 26,
    "question": "The sum of the interior angles of a quadrilateral is",
    "image": "",
    "options": ["360°.", "240°.", "180°.", "90°."],
    "correct": 0,
    "explanation": "Any four-sided figure has an interior angle sum of (4 − 2) × 180° = 360°."
  },
  {
    "n": 27,
    "question": "A square when pushed to an angle other than 90° will become a",
    "image": "",
    "options": ["rhomboid.", "rhombus.", "trapezium.", "Trapezoid."],
    "correct": 1,
    "explanation": "Shearing a square keeps all four sides equal, so the result is a rhombus."
  },
  {
    "n": 28,
    "question": "Which of the following does not have its diagonal at right angles?",
    "image": "",
    "options": ["Kite", "Rectangle", "Rhombus", "Square"],
    "correct": 1,
    "explanation": "The diagonals of a rectangle are equal but they only meet at right angles when the rectangle is a square."
  },
  {
    "n": 29,
    "question": "Which of the following polygons can be constructed using a 45° set square?",
    "image": "",
    "options": ["Hexagon", "Nonagon", "Octagon", "Pentagon"],
    "correct": 2,
    "explanation": "A regular octagon is built entirely from 45° turns, which the 45° set square provides directly."
  },
  {
    "n": 30,
    "question": "A regular polygon whose exterior angle is 72° is a",
    "image": "",
    "options": ["decagon.", "heptagon.", "octagon.", "pentagon."],
    "correct": 3,
    "explanation": "Exterior angles total 360°, so 360° ÷ 72° = 5 sides, which is a pentagon."
  },
  {
    "n": 31,
    "question": "A polygon is simply a plane figure with",
    "image": "",
    "options": ["three sides.", "more than four sides.", "less than four sides.", "four sides."],
    "correct": 1,
    "explanation": "A polygon is a closed plane figure with more than four straight sides."
  },
  {
    "n": 32,
    "question": "What name is given to the figure illustrated below?",
    "image": "images/2025/q32.png",
    "options": ["Polygon", "Quadrilateral", "Re-entrant polygon", "Regular polygon"],
    "correct": 2,
    "explanation": "One interior angle turns inwards (a reflex angle), so the figure is a re-entrant, or concave, polygon."
  },
  {
    "n": 33,
    "question": "When a circle is drawn in isometric, the figure produced will be",
    "image": "",
    "options": ["ellipse.", "cycloid.", "circle.", "an involute."],
    "correct": 0,
    "explanation": "A circle set out on an isometric plane is foreshortened to an ellipse."
  },
  {
    "n": 34,
    "passage": "Use the circle diagram below for questions 34 to 36.",
    "question": "What is the name of the part labelled X?",
    "image": "images/2025/q34.png",
    "options": ["Chord", "Radius", "Sector", "Segment"],
    "correct": 0,
    "explanation": "X is a straight line whose ends lie on the circle, which is a chord."
  },
  {
    "n": 35,
    "passage": "Use the circle diagram below for questions 34 to 36.",
    "question": "The part labelled Y is called",
    "image": "images/2025/q35.png",
    "options": ["segment.", "sector.", "quadrant.", "chord."],
    "correct": 0,
    "explanation": "Y is the area cut off between a chord and the arc it subtends, which is a segment."
  },
  {
    "n": 36,
    "passage": "Use the circle diagram below for questions 34 to 36.",
    "question": "What name is given to the part labelled Z?",
    "image": "images/2025/q36.png",
    "options": ["Diameter", "Quadrant", "Radius", "Sector"],
    "correct": 3,
    "explanation": "Z is the region enclosed by two radii and the arc between them, which is a sector."
  },
  {
    "n": 37,
    "question": "The figure drawn below is called",
    "image": "images/2025/q37.png",
    "options": ["bisecting circles.", "common circles.", "concentric circles.", "eccentric circles."],
    "correct": 2,
    "explanation": "Circles that share one common centre are called concentric circles."
  },
  {
    "n": 38,
    "question": "The outer boundary of a circle is called",
    "image": "",
    "options": ["tangent.", "radius.", "diameter.", "circumference."],
    "correct": 3,
    "explanation": "The circumference is the distance round the outside of a circle, and its diameter is twice the radius."
  },
  {
    "n": 39,
    "question": "In the diagram below, line OP is called the",
    "image": "images/2025/q39.png",
    "options": ["perimeter.", "minor axis.", "major axis.", "focal point."],
    "correct": 1,
    "explanation": "QR is the major axis, so the shorter axis OP through the same centre is the minor axis."
  },
  {
    "n": 40,
    "question": "Which of the following is not a method of constructing an ellipse?",
    "image": "",
    "options": ["Trammel", "Square", "Rectangle", "Circle"],
    "correct": 1,
    "explanation": "The trammel, rectangle and concentric-circle methods are all standard ellipse constructions; a square is not one of them."
  },
  {
    "n": 41,
    "question": "Which of the following is the most important aspect in freehand sketching?",
    "image": "",
    "options": ["Accuracy", "Clarity", "Dimensioning", "Proportionality"],
    "correct": 3,
    "explanation": "A freehand sketch is judged chiefly on proportion - the relative sizes and positions of the parts must look right."
  },
  {
    "n": 42,
    "question": "The diagram below shows a view of a square",
    "image": "images/2025/q42.png",
    "options": ["cone.", "cylinder.", "prism.", "pyramid."],
    "correct": 3,
    "explanation": "A square base rising to a single apex forms a pyramid."
  },
  {
    "n": 43,
    "question": "An elevation of a solid geometrical figure is shown below. The solid can possibly be a",
    "image": "images/2025/q43.png",
    "options": ["cube.", "cylinder.", "prism.", "pyramid."],
    "correct": 2,
    "explanation": "Two equal rectangular panels standing side by side is the front elevation of a prism."
  },
  {
    "n": 44,
    "question": "The diagram below shows isometric axes. What is the value of angle \"b\"?",
    "image": "images/2025/q44.png",
    "options": ["120°", "90°", "60°", "30°"],
    "correct": 2,
    "explanation": "Each isometric axis rises 30° from the horizontal, so the angle between the vertical axis and a receding axis is 90° − 30° = 60°."
  },
  {
    "n": 45,
    "question": "Isometric projection is a ______ form of drawing.",
    "image": "",
    "options": ["pictorial", "perspective", "orthographic", "oblique"],
    "correct": 0,
    "explanation": "Isometric projection is a pictorial drawing: it shows the object as it appears in three dimensions rather than as true orthographic views."
  },
  {
    "n": 46,
    "question": "In the figure below, the symbol \"Ø\" before the dimension figure 20 represents the ______ of the circle.",
    "image": "images/2025/q46.png",
    "options": ["chord", "circumference", "diameter", "radius"],
    "correct": 2,
    "explanation": "The diameter symbol Ø is placed before a dimension to show that the figure it refers to is a diameter; the radius uses R instead."
  },
  {
    "n": 47,
    "question": "In the diagram below, line GH, is called a/an",
    "image": "images/2025/q47.png",
    "options": ["construction line.", "dimension line.", "extension line.", "outline."],
    "correct": 1,
    "explanation": "GH is the line along which the measurement 25 is written, so it is a dimension line."
  },
  {
    "n": 48,
    "question": "Isometric drawing gives the ______ view of an object.",
    "image": "",
    "options": ["2", "3", "4", "5"],
    "correct": 1,
    "explanation": "An isometric drawing is a three-dimensional view, so the number of dimensions is 3."
  },
  {
    "n": 49,
    "question": "The method used to draw the layout of the figures below is",
    "image": "images/2025/q49.png",
    "options": ["third angle projection.", "pictorial view.", "orthographic projection.", "first angle projection."],
    "correct": 0,
    "explanation": "The plan is placed above the front elevation, which is the third angle arrangement. In first angle the plan would sit below."
  },
  {
    "n": 50,
    "question": "How many views are usually shown in orthographic projection?",
    "image": "",
    "options": ["2", "3", "4", "5"],
    "correct": 1,
    "explanation": "The three views of an object are the front elevation, the plan (top view) and the end view (side view)."
  }
];
