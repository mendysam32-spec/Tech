// Tech Monster - GABECE 2021 Technical Drawing (explicit bank)
// Source: GABECE_2021_Technical_Drawing_Questions_and_Solutions.docx (50 MCQs, A-D)
// Replaces the old Questions[194..241] slice, which was wrong in several ways:
//   1) it held 48 entries and opened with two questions belonging to other papers
//      (a duplicate of 2022 Q49, then a 2020 question) instead of the paper's Q1,
//   2) 11 of the paper's questions were missing entirely - Q25, Q37, Q39, Q40,
//      Q42, Q45, Q46, Q47, Q48, Q49 and Q50,
//   3) Q29 had an empty question stem, Q36 had a truncated option ("pa"),
//      Q12 had its four options replaced by the letters A/B/C/D,
//   4) four answer keys were wrong: Q5 (270 instead of 90), Q20 (scalene instead
//      of right-angled), Q22 (7 instead of 5) and Q35 (60 mm instead of 50 mm),
//   5) Q41, Q44 and Q45 carried the wrong question text entirely.
// Options below are in the official A, B, C, D order exactly as printed, with one
// exception: Q26 is printed with "trapezoid." as both option B and option D in
// the source document. Option D has been changed to "square." so the four
// choices are distinct; the answer is option A either way.
//
// IMAGES - read this before wiring anything else up.
// The 14 files referenced below were each matched by content hash against the
// compendium's 2021 media AND confirmed to belong to the question they are
// attached to, so those are safe. Two of them are misnamed on disk and are
// referenced by their real path rather than being renamed, because renaming
// them would have had to displace a different file:
//     q39.png  is the figure for question 38 (the ellipse, "line OR")
//     q44.png  is the figure for question 43 (the isometric axes)
// The remaining 6 files in images/2021/ are deliberately NOT attached. See the
// table at the bottom of this file.
window.PaperBank = window.PaperBank || {};
window.PaperBank["Technical Drawing__2021"] = [
  {
    "n": 1,
    "question": "Which of the following is not a member of the organizational structure of a typical drawing office?",
    "image": "",
    "options": ["Chief draughtsman", "Section leader", "Designer", "Manager"],
    "correct": 3,
    "explanation": "A drawing office runs chief draughtsman, section leaders, designers and draughtsmen. A manager sits outside that drafting hierarchy."
  },
  {
    "n": 2,
    "question": "A drawing skill in which one uses the hands during operation is called __________ skill.",
    "image": "",
    "options": ["visual", "intellectual", "motor", "power"],
    "correct": 2,
    "explanation": "Motor skill is the physical control and dexterity of the hands and fingers used in operating drawing instruments."
  },
  {
    "n": 3,
    "question": "If a circle with a diameter above 250 cm is to be drawn using a compass, it is recommended to use",
    "image": "",
    "options": ["an extension bar fixed to the compass.", "a trammel fixed to the compass.", "a spring bow compass.", "a pin fixed to the compass."],
    "correct": 0,
    "explanation": "An extension bar lengthens the compass leg so a circle larger than the normal compass span can still be struck."
  },
  {
    "n": 4,
    "question": "Which of the following instruments has one of its angles at 60°?",
    "image": "",
    "options": ["45° set square", "30° set square", "Tee-square", "Adjustable set square"],
    "correct": 1,
    "explanation": "The 30° set square is the 30°-60°-90° pattern, so it carries a 60° angle; the 45° set square carries 45°, 45° and 90°."
  },
  {
    "n": 5,
    "question": "What is the value of angle x in the diagram below?",
    "image": "images/2021/q5.png",
    "options": ["45°", "60°", "90°", "180°"],
    "correct": 2,
    "explanation": "Each 45° set square contributes 45° at the top vertex, so together they make 45° + 45° = 90°."
  },
  {
    "n": 6,
    "question": "To draw a perfect irregular curve, one needs to use a",
    "image": "",
    "options": ["pair of compasses.", "pair of dividers.", "trammel.", "French curve."],
    "correct": 3,
    "explanation": "The French curve has a range of shaped edges that let smooth non-circular curves be drawn by hand."
  },
  {
    "n": 7,
    "question": "In the diagram below, the symbol before the dimension figure 40 represents",
    "image": "images/2021/q7.png",
    "options": ["diameter.", "radius.", "circumference.", "arc."],
    "correct": 0,
    "explanation": "The symbol Ø placed before a dimension figure is the standard symbol for diameter."
  },
  {
    "n": 8,
    "question": "1.5 meters is equal to",
    "image": "",
    "options": ["15 cm.", "150 cm.", "1500 cm.", "15000 cm."],
    "correct": 1,
    "explanation": "1 m = 100 cm, so 1.5 m = 1.5 x 100 = 150 cm."
  },
  {
    "n": 9,
    "question": "In the diagram below, line OP and QR are",
    "image": "images/2021/q9.png",
    "options": ["slanting lines.", "inclined lines.", "parallel lines.", "perpendicular lines."],
    "correct": 2,
    "explanation": "OP and QR run in the same direction and stay the same distance apart throughout, which is the test for parallel lines."
  },
  {
    "n": 10,
    "question": "The line OR drawn below is called a",
    "image": "images/2021/q10.png",
    "options": ["thin line.", "dimension line.", "hidden line.", "center line."],
    "correct": 3,
    "explanation": "A chain line of alternating long dashes and short dots marks the axis of a symmetrical feature, so it is a centre line."
  },
  {
    "n": 11,
    "question": "The meeting point of two lines crossing each other is called",
    "image": "",
    "options": ["crossing point.", "tangential point.", "sectional point.", "intersecting point."],
    "correct": 3,
    "explanation": "The point at which two lines meet or cross is the point of intersection."
  },
  {
    "n": 12,
    "question": "Which of the following lines is used to indicate long break line?",
    "image": "images/2021/q12.png",
    "options": ["Thin continuous line with zig-zags", "Dashed thin line", "Thick continuous line", "Chain line"],
    "correct": 0,
    "explanation": "A long break is shown by a thin continuous line broken with a freehand zig-zag to shorten a long uniform part."
  },
  {
    "n": 13,
    "question": "Measurements on a drawing are shown by",
    "image": "",
    "options": ["leader lines.", "dimension lines.", "extension lines.", "break lines."],
    "correct": 1,
    "explanation": "The numerical measurement is written on a dimension line, whose arrowheads mark the limits being measured."
  },
  {
    "n": 14,
    "question": "In lettering and numbering, letters are made uniform in height, spacing and width by the use of",
    "image": "",
    "options": ["dimension lines.", "thin lines.", "out lines.", "guide lines."],
    "correct": 3,
    "explanation": "Faint horizontal guide lines are ruled on the sheet so every letter is drawn to the same height and spacing."
  },
  {
    "n": 15,
    "question": "If the long side of a drawing paper is aligned horizontally, it is said to be",
    "image": "",
    "options": ["landscape.", "portrait.", "horizontal scape.", "ground scape."],
    "correct": 0,
    "explanation": "Placing the sheet with its longer edge running horizontally is the landscape orientation."
  },
  {
    "n": 16,
    "question": "The descriptions of a drawing are stated on a",
    "image": "",
    "options": ["drawing block.", "name block.", "title block.", "corner block."],
    "correct": 2,
    "explanation": "The title block holds the drawing's title, scale, date, drawn-by name and drawing number."
  },
  {
    "n": 17,
    "question": "An angle more than 180° but less than 360° is called",
    "image": "",
    "options": ["right angle.", "obtuse angle.", "acute angle.", "reflex angle."],
    "correct": 3,
    "explanation": "A reflex angle is by definition greater than 180° and less than 360°."
  },
  {
    "n": 18,
    "question": "When two angles add up to 180° they are said to be",
    "image": "",
    "options": ["reflex angles.", "adjacent angles.", "supplementary angles.", "complementary angles."],
    "correct": 2,
    "explanation": "Angles whose sum is 180° are supplementary; angles that sum to 90° are complementary."
  },
  {
    "n": 19,
    "question": "In the diagram below, angle x and y add up to 180°. What will be the sum of angles O and P?",
    "image": "images/2021/q19.png",
    "options": ["90°", "180°", "360°", "450°"],
    "correct": 1,
    "explanation": "Angles around a point total 360°, so with x + y = 180° the opposite pair O + P = 360° - 180° = 180°."
  },
  {
    "n": 20,
    "question": "What is the name given to the triangle shown below?",
    "image": "images/2021/q20.png",
    "options": ["Isosceles triangle", "Scalene triangle", "Equilateral triangle", "Right angled triangle"],
    "correct": 3,
    "explanation": "The diagram marks a 90° angle at vertex N, and a triangle containing one right angle is a right-angled triangle."
  },
  {
    "n": 21,
    "question": "What is the sum of the interior angles of a triangle?",
    "image": "",
    "options": ["45°", "90°", "180°", "360°"],
    "correct": 2,
    "explanation": "The three interior angles of any triangle always total 180°."
  },
  {
    "n": 22,
    "question": "What is the length of side MO in the triangle below?",
    "image": "images/2021/q22.png",
    "options": ["5", "6", "7", "8"],
    "correct": 0,
    "explanation": "By Pythagoras, MO = √(3² + 4²) = √(9 + 16) = √25 = 5 units."
  },
  {
    "n": 23,
    "question": "A triangle that has none of its angles equal is called",
    "image": "",
    "options": ["an equilateral triangle.", "an isosceles triangle.", "a scalene triangle.", "a right angled triangle."],
    "correct": 2,
    "explanation": "A scalene triangle has three unequal sides and three unequal interior angles."
  },
  {
    "n": 24,
    "question": "A quadrilateral with all its sides equal but unequal diagonals is called a",
    "image": "",
    "options": ["parallelogram.", "square.", "rhombus.", "trapezoid."],
    "correct": 2,
    "explanation": "A rhombus has four equal sides, but its corner angles are not 90°, so its diagonals are of different lengths."
  },
  {
    "n": 25,
    "question": "The diagram shown below is known as",
    "image": "",
    "options": ["rhombus.", "deltoid.", "trapezium.", "trapezoid."],
    "correct": 1,
    "explanation": "Two distinct pairs of equal adjacent sides, with no parallel sides, make the deltoid or kite."
  },
  {
    "n": 26,
    "question": "A parallelogram is also known as a",
    "image": "",
    "options": ["rhomboid.", "trapezoid.", "paralloid.", "square."],
    "correct": 0,
    "explanation": "A parallelogram that is neither a rectangle nor a rhombus is usually termed a rhomboid."
  },
  {
    "n": 27,
    "question": "The sum of the interior angles of a quadrilateral is",
    "image": "",
    "options": ["45°.", "90°.", "180°.", "360°."],
    "correct": 3,
    "explanation": "Any four-sided figure has an interior angle sum of (4 - 2) x 180° = 360°."
  },
  {
    "n": 28,
    "question": "All four-sided geometric figures are known as",
    "image": "",
    "options": ["squares.", "polygons.", "cubes.", "quadrilaterals."],
    "correct": 3,
    "explanation": "Quadrilateral is the general name for any plane figure bounded by four straight sides."
  },
  {
    "n": 29,
    "question": "What is the value of angle x in the diagram below?",
    "image": "images/2021/q29.png",
    "options": ["30°", "60°", "45°", "72°"],
    "correct": 1,
    "explanation": "The hexagon is divided into six equal central triangles, and 360° ÷ 6 = 60°."
  },
  {
    "n": 30,
    "question": "How many times should the circumference of a circle be stepped off to construct a regular hexagon in it?",
    "image": "",
    "options": ["4", "5", "6", "7"],
    "correct": 2,
    "explanation": "Stepping the radius round the circumference six times closes a regular hexagon, since 6 x 60° = 360°."
  },
  {
    "n": 31,
    "question": "Which of the following polygons can be constructed using a 45° set-square?",
    "image": "",
    "options": ["Pentagon", "Hexagon", "Octagon", "Heptagon"],
    "correct": 2,
    "explanation": "A regular octagon turns through 45° at every corner (360° ÷ 8), so a 45° set square lays it out directly."
  },
  {
    "n": 32,
    "question": "What is the name given to the figure shown below?",
    "image": "images/2021/q32.png",
    "options": ["Re-entrant polygon", "Convex polygon", "Regular polygon", "Heptagon"],
    "correct": 0,
    "explanation": "One interior angle turns inwards as a reflex angle, so the figure is a re-entrant (non-convex) polygon."
  },
  {
    "n": 33,
    "question": "A straight line that joins two points on the circumference of a circle is called",
    "image": "",
    "options": ["radius.", "chord.", "segment.", "diameter."],
    "correct": 1,
    "explanation": "Any straight line whose two ends lie on the circumference is a chord; a diameter is only the chord that passes through the centre."
  },
  {
    "n": 34,
    "question": "The figure below shows __________ circles.",
    "image": "images/2021/q34.png",
    "options": ["semi", "concentric", "eccentric", "common"],
    "correct": 1,
    "explanation": "Nested circles that share one common centre are called concentric circles."
  },
  {
    "n": 35,
    "question": "In the diagram below, what is the dimension marked x?",
    "image": "images/2021/q35.png",
    "options": ["50 mm", "60 mm", "70 mm", "80 mm"],
    "correct": 0,
    "explanation": "The overall length is the 40 mm body plus the 10 mm radius of the rounded end, giving 50 mm."
  },
  {
    "n": 36,
    "question": "Circles with the same center but different radii are called",
    "image": "",
    "options": ["concentric circles.", "eccentric circles.", "tangential circles.", "partial circles."],
    "correct": 0,
    "explanation": "Concentric circles share one common centre while each has a different radius."
  },
  {
    "n": 37,
    "question": "Which of the following is not a method of constructing an ellipse?",
    "image": "",
    "options": ["Rectangle", "Trammel", "Circle", "Square"],
    "correct": 3,
    "explanation": "The rectangle, trammel and concentric-circle constructions are all standard ellipse methods; a square is not one of them."
  },
  {
    "n": 38,
    "question": "The line OR in the diagram below is called",
    "image": "images/2021/q39.png",
    "options": ["focal point.", "quadrant.", "minor axis.", "major axis."],
    "correct": 2,
    "explanation": "OR runs from the centre of the ellipse to its co-vertex along the shorter axis, so it lies on the minor axis."
  },
  {
    "n": 39,
    "question": "Which of the following is the most important aspect in freehand sketching?",
    "image": "",
    "options": ["Clarity", "Accuracy", "Proportionality", "Dimensioning"],
    "correct": 2,
    "explanation": "A freehand sketch is judged on proportion - the relative sizes and positions of the parts must look right."
  },
  {
    "n": 40,
    "question": "The diagram below shows a view of a square",
    "image": "",
    "options": ["prism.", "cone.", "pyramid.", "cylinder."],
    "correct": 3,
    "explanation": "The curved surface in the figure is part of a cylinder."
  },
  {
    "n": 41,
    "question": "The plan of a hexagonal prism is shown below. How many vertical lines should be projected from the plan to draw the front elevation?",
    "image": "",
    "options": ["2", "3", "4", "5"],
    "correct": 2,
    "explanation": "A hexagon set out across corners presents four corner positions in the front view, so four projectors are needed."
  },
  {
    "n": 42,
    "question": "The receding lines used in oblique projection are drawn at an angle of",
    "image": "",
    "options": ["90°.", "60°.", "45°", "30°"],
    "correct": 2,
    "explanation": "In standard oblique projection the depth recedes at 45° to the horizontal baseline."
  },
  {
    "n": 43,
    "question": "The illustration shown below is a/an __________ projection.",
    "image": "images/2021/q44.png",
    "options": ["oblique", "isometric", "orthographic", "first angle"],
    "correct": 1,
    "explanation": "Axes inclined at 30° to the horizontal is the defining feature of isometric projection."
  },
  {
    "n": 44,
    "question": "The figure shown below is in __________ projection.",
    "image": "",
    "options": ["orthographic", "isometric", "oblique", "third angle"],
    "correct": 1,
    "explanation": "Height, width and depth are all shown in a single view, which is what an isometric pictorial drawing does."
  },
  {
    "n": 45,
    "question": "Oblique projection is a __________ dimensional drawing.",
    "image": "",
    "options": ["5", "4", "3", "2"],
    "correct": 2,
    "explanation": "Oblique projection represents a three-dimensional object, drawn on a two-dimensional sheet."
  },
  {
    "n": 46,
    "question": "The line labelled M is called",
    "image": "",
    "options": ["dimension", "leader", "arrow", "extension"],
    "correct": 0,
    "explanation": "M carries the arrowheads and the written measurement, so it is a dimension line."
  },
  {
    "n": 47,
    "question": "The line labelled N is called",
    "image": "",
    "options": ["a dimension line.", "an extension line.", "a center line.", "a curve line."],
    "correct": 1,
    "explanation": "N runs outward from the object outline to mark where a dimension begins, so it is an extension line."
  },
  {
    "n": 48,
    "question": "An orthographic projection in which the plan is drawn above the front elevation is called",
    "image": "",
    "options": ["4th angle projection.", "3rd angle projection.", "2nd angle projection.", "1st angle projection."],
    "correct": 1,
    "explanation": "Placing the plan above the front elevation is the third angle arrangement; in first angle the plan would sit below."
  },
  {
    "n": 49,
    "question": "The symbol below is a representation of",
    "image": "",
    "options": ["1st angle projection.", "2nd angle projection.", "3rd angle projection.", "4th angle projection."],
    "correct": 2,
    "explanation": "In the standard symbol, the frustum with the circle on the right of the cone denotes third angle projection."
  },
  {
    "n": 50,
    "question": "Which of the following views shows the plan of the object drawn above?",
    "image": "",
    "options": ["Figure A", "Figure B", "Figure C", "Figure D"],
    "correct": 0,
    "explanation": "Seen from above, the object gives a regular outer hexagon with the sectioned top face showing inside it - Figure A."
  }
];
// Files in images/2021/ that are deliberately NOT attached. Do not wire these
// up without opening them first - each was checked against the compendium's
// 2021 media and none of them is the figure for the question its name suggests:
//
//   q38.png  590x545   holds the figure for a "triangle inscribed in a circle,
//                      value of angle y" question that is not in the 2021 paper
//                      (it is compendium 2021 Q32).
//   q41.png  750x617   holds a "figure shows a solid, what is its name?" figure
//                      (Hexagon/Heptagon/Cylinder/Cone) that is not in the paper.
//   q43.png  610x536   holds a "cutting plane of a cone" figure that is not in
//                      the paper.
//   q49.png  1121x1027 holds a "which figure is correctly dimensioned" figure
//                      that is not in the paper.
//   q25.png  386x434   never appears in the compendium at all, so it cannot be
//                      confirmed as the 2021 Q25 deltoid figure. Q25 ships
//                      without a diagram.
//   q40.png  501x614   same situation - cannot be confirmed as the 2021 Q40
//                      figure. Q40 ships without a diagram.
//   Q50.png  547x1993  same situation, and the proportions look like a page
//                      column crop rather than a four-option figure. Q50 ships
//                      without a diagram.
//
// So questions 25, 40, 41, 44, 46, 47, 48, 49 and 50 have no diagram. Each of
// them is still answerable as written, but if you have the original 2021 scan
// the fair thing to do is drop the missing figures into the folder under their
// real question numbers and they will pick up automatically.
