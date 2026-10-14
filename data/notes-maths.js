// Aki Ola Maths (Junior Secondary) series - WAEC/BECE objective-focused study notes.
// Comprehensive edition: mirrors Science notes - full explanation, key points,
// definitions, formulas/rules, worked examples, BECE focus and memory tip.
// Each note carries quizTopic so Library can link to practice (min 10 questions).
// Diagrams are embedded as inline SVG data URIs so they render without image files.
window.mathsNotes = [
  {
    grade: "JSS 1",
    topicNumber: 1,
    title: "Whole Numbers and Place Value",
    quizTopic: "Number and Numeration",
    icon: "🔢",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef3ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#203a6b" text-anchor="middle">Place Value Chart: 2,643,000</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="15" y="50" width="45" height="90" fill="#fff" stroke="#203a6b"/><text x="37" y="70">M</text><text x="37" y="90" font-weight="bold">2</text><rect x="65" y="50" width="45" height="90" fill="#fffde6" stroke="#c9a227"/><text x="87" y="70">H-Th</text><text x="87" y="90" font-weight="bold">6</text><rect x="115" y="50" width="45" height="90" fill="#fff" stroke="#203a6b"/><text x="137" y="70">T-Th</text><text x="137" y="90" font-weight="bold">4</text><rect x="165" y="50" width="45" height="90" fill="#fff" stroke="#203a6b"/><text x="187" y="70">Th</text><text x="187" y="90" font-weight="bold">3</text><rect x="215" y="50" width="45" height="90" fill="#e6f4ff" stroke="#203a6b"/><text x="237" y="70">H</text><text x="237" y="90" font-weight="bold">0</text><rect x="265" y="50" width="40" height="90" fill="#fff" stroke="#203a6b"/><text x="285" y="70">T</text><text x="285" y="90" font-weight="bold">0</text><rect x="310" y="50" width="35" height="90" fill="#fff" stroke="#203a6b"/><text x="327" y="70">U</text><text x="327" y="90" font-weight="bold">0</text></g><text x="180" y="165" font-family="Arial" font-size="11" fill="#203a6b" text-anchor="middle">6 is in the hundred-thousands place = 600,000</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Whole numbers are 0, 1, 2, 3 and so on. Every digit has a place value given by its position. Reading from the right, the positions are units, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions. Place value lets us read, write, compare and round large numbers correctly.",
    points: [
      "Whole numbers are 0, 1, 2, 3, 4, 5, and so on without end.",
      "Place value is the value a digit has because of its position in a number.",
      "From the right: units, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions.",
      "The value of a digit = digit x its place (e.g. 7 in hundreds place = 700).",
      "Face value is the digit itself; place value is digit x position.",
      "Write numbers in words by naming each group: thousand, million.",
      "Compare numbers first by number of digits, then digit by digit from the left.",
      "Round numbers to the nearest ten, hundred or thousand for quick estimation.",
      "Standard form writes large numbers as A x 10n where 1 <= A < 10."
    ],
    definitions: [
      "Whole number: any of 0, 1, 2, 3, ... with no fraction or decimal part.",
      "Place value: value given to a digit by its position in a number.",
      "Face value: the digit itself, ignoring its position.",
      "Rounding: replacing a number by the nearest ten, hundred or thousand.",
      "Standard form: writing a number as A x 10n with 1 <= A < 10."
    ],
    rules: [
      "To round to the nearest 10, look at the units digit: 5 or more rounds up.",
      "To round to the nearest 100, look at the tens digit; to nearest 1000, look at hundreds.",
      "Digits 0-4 round down; digits 5-9 round up.",
      "In 2,643,000 the 6 is hundred-thousands: value 600,000.",
      "Three thousand and forty-six in figures is 3,046 (mind the zero)."
    ],
    formulas: [
      "Value of digit = digit x place (e.g. 6 x 100,000 = 600,000).",
      "1500 = 1.5 x 10^3. 0.00025 = 2.5 x 10^-4."
    ],
    examples: [
      "In 5742, the digit 7 is in the hundreds place, value 700.",
      "In 2,643,000 the digit 6 is hundred-thousands, value 600,000.",
      "In 4,359 the digit 3 is hundreds, value 300; in 75,021 the 5 is thousands, value 5,000.",
      "3742 rounded to nearest hundred is 3700 (tens digit 4 rounds down).",
      "7,845 rounded to nearest hundred is 7,800; 4.678 to 2 decimals is 4.68."
    ],
    waecFocus: [
      "Give the place value or value of a digit (e.g. 7 in 5742 = 700).",
      "Write numbers in words or figures (e.g. three thousand and forty-six = 3,046).",
      "Round to nearest ten, hundred, thousand or decimal place.",
      "Write a large or small number in standard form.",
      "Compare and order whole numbers."
    ],
    memoryTip:
      "Order from right: Units, Tens, Hundreds, Thousands. Rounding judge is the NEXT digit: 5 or more rounds up."
  },

  {
    grade: "JSS 1",
    topicNumber: 2,
    title: "The Four Basic Operations",
    quizTopic: "Number and Numeration",
    icon: "➕",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#fff7ec"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#8a4d12" text-anchor="middle">BODMAS Order</text><g font-family="Arial" font-size="13" text-anchor="middle"><rect x="20" y="50" width="68" height="60" rx="8" fill="#2f7d3a"/><text x="54" y="75" fill="#fff">B</text><text x="54" y="92" fill="#fff" font-size="11">Brackets</text><rect x="95" y="50" width="68" height="60" rx="8" fill="#c4562a"/><text x="129" y="75" fill="#fff">D/M</text><text x="129" y="92" fill="#fff" font-size="11">Divide x</text><rect x="170" y="50" width="68" height="60" rx="8" fill="#2f5aa0"/><text x="204" y="75" fill="#fff">A/S</text><text x="204" y="92" fill="#fff" font-size="11">Add -</text><rect x="245" y="50" width="95" height="60" rx="8" fill="#7a3d99"/><text x="292" y="75" fill="#fff" font-size="12">3+4x2=11</text><text x="292" y="92" fill="#fff" font-size="11">not 14!</text></g><text x="180" y="140" font-family="Arial" font-size="12" fill="#5a3d12" text-anchor="middle">348+129=477  800-265=535  48x5=240  96/8=12</text><text x="180" y="162" font-family="Arial" font-size="11" fill="#5a3d12" text-anchor="middle">Brackets first, then x and /, then + and -</text></svg>'
    ),
    imageNote: "",
    explanation:
      "The four basic operations are addition (+), subtraction (-), multiplication (x) and division (/). Addition gives a sum, subtraction a difference, multiplication a product and division a quotient. When they mix, follow BODMAS: Brackets, Of, Division, Multiplication, Addition, Subtraction.",
    points: [
      "Addition adds numbers and gives a sum: 348 + 129 = 477.",
      "Subtraction removes and gives a difference: 800 - 265 = 535.",
      "Multiplication is repeated addition and gives a product: 48 x 5 = 240.",
      "Division shares equally and gives a quotient: 96 / 8 = 12.",
      "Decimals: line up the decimal point before adding or subtracting (0.45 + 0.3 = 0.75).",
      "Decimals: count decimal places when multiplying (0.4 x 0.3 = 0.12).",
      "BODMAS decides the order when operations are mixed.",
      "Brackets are always worked out first.",
      "Division and multiplication come before addition and subtraction.",
      "Add and subtract from left to right at the last step."
    ],
    definitions: [
      "Sum: result of addition.",
      "Difference: result of subtraction.",
      "Product: result of multiplication.",
      "Quotient: result of division.",
      "BODMAS: Brackets, Of, Division, Multiplication, Addition, Subtraction."
    ],
    rules: [
      "BODMAS: Brackets first, then division/multiplication, then addition/subtraction.",
      "3 + 4 x 2 = 3 + 8 = 11 (not 14).",
      "12 - 6 / 3 + 2 = 12 - 2 + 2 = 12.",
      "(2 + 3) x 4 = 5 x 4 = 20.",
      "Multiply before adding or subtracting when there are no brackets."
    ],
    examples: [
      "348 + 129 = 477.",
      "800 - 265 = 535.",
      "48 x 5 = 240; 2.5 x 4 = 10.",
      "96 / 8 = 12.",
      "0.45 + 0.3 = 0.75; 2.5 + 3.75 = 6.25; 10.5 - 4.25 = 6.25."
    ],
    waecFocus: [
      "Add, subtract, multiply and divide whole numbers and decimals.",
      "Use BODMAS to simplify expressions.",
      "Do brackets first, then x and / before + and -.",
      "Solve simple word problems with the correct operation.",
      "Line up decimal points for + and -; count places for x."
    ],
    memoryTip:
      "BODMAS: Brackets, then Divide/Multiply, then Add/Subtract. 3+4x2 is 11, not 14."
  },

  {
    grade: "JSS 1",
    topicNumber: 3,
    title: "Fractions, Decimals and Percentages",
    quizTopic: "Number and Numeration",
    icon: "🍰",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="210" viewBox="0 0 360 210"><rect width="360" height="210" fill="#fff7ec"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#8a4d12" text-anchor="middle">Parts of a Whole</text><g><circle cx="90" cy="105" r="50" fill="#f4c971" stroke="#8a4d12" stroke-width="2"/><path d="M90 105 L90 55 A50 50 0 0 1 140 105 Z" fill="#c4562a"/><text x="90" y="170" font-family="Arial" font-size="12" fill="#5a3d12" text-anchor="middle">3/4 = 0.75 = 75%</text><rect x="200" y="60" width="120" height="90" fill="#fff" stroke="#8a4d12" stroke-width="2"/><line x1="200" y1="90" x2="320" y2="90" stroke="#8a4d12"/><line x1="200" y1="120" x2="320" y2="120" stroke="#8a4d12"/><text x="260" y="140" font-family="Arial" font-size="11" fill="#5a3d12" text-anchor="middle">0.6 = 3/5</text><text x="260" y="80" font-family="Arial" font-size="12" fill="#8a4d12" text-anchor="middle">1/2 = 50%</text></g></svg>'
    ),
    imageNote: "",
    explanation:
      "Fractions, decimals and percentages are three ways of showing parts of a whole. A fraction has a numerator (top) and denominator (bottom). A decimal uses tenths and hundredths. A percentage is a fraction with denominator 100. Convert freely: divide for decimals, multiply by 100 for percentages.",
    points: [
      "A fraction has a numerator (top) and a denominator (bottom): 3/4.",
      "A decimal is a fraction with denominator 10, 100 or 1000: 0.75.",
      "A percentage is a fraction with denominator 100: 75%.",
      "To convert fraction to decimal, divide numerator by denominator (5/8 = 0.625).",
      "To convert fraction to percentage, multiply by 100 (2/5 = 40%).",
      "To convert percentage to fraction, write over 100 and simplify (25% = 1/4).",
      "To convert decimal to fraction, read the place value (0.75 = 75/100 = 3/4).",
      "Percentage of a quantity: multiply the quantity by the rate (15% of 200 = 30).",
      "Increase/decrease by a percentage: find the change, then add or subtract."
    ],
    definitions: [
      "Numerator: top number of a fraction.",
      "Denominator: bottom number showing into how many parts the whole is divided.",
      "Equivalent fractions: different fractions with the same value (1/2 = 2/4).",
      "Reciprocal: flip of a fraction (reciprocal of 2/3 is 3/2).",
      "Percentage: parts per hundred, symbol %."
    ],
    rules: [
      "To add/subtract fractions, first make denominators equal (LCM).",
      "To multiply fractions, multiply tops and multiply bottoms, then simplify.",
      "To divide by a fraction, multiply by its reciprocal: 5/6 / 2/3 = 5/6 x 3/2 = 5/4.",
      "To find a percentage of a number, multiply by the fraction: 15/100 x 240 = 36.",
      "Express one quantity as percentage of another: (part/whole) x 100."
    ],
    formulas: [
      "Decimal = numerator / denominator.",
      "Percentage = fraction x 100.",
      "Fraction = percentage / 100 (simplify).",
      "Percentage change = (change / original) x 100."
    ],
    examples: [
      "2/3 + 1/4 = 8/12 + 3/12 = 11/12; 1/3 + 1/6 = 1/2.",
      "3/5 - 1/4 = 12/20 - 5/20 = 7/20; 3/4 - 1/2 = 1/4.",
      "3/4 x 2/5 = 6/20 = 3/10; 2/3 x 9/10 = 3/5.",
      "0.6 = 3/5; 0.75 = 3/4; 5/8 = 0.625.",
      "25% = 1/4; 3/4 = 75%; 2/5 = 40%; 15% of 200 = 30; 15% of 240 = 36.",
      "3 out of 12 = 3/12 x 100 = 25%; increase 200 by 25% = 250."
    ],
    waecFocus: [
      "Add, subtract, multiply and divide fractions (with common denominator).",
      "Convert between fractions, decimals and percentages.",
      "Find a percentage of a quantity.",
      "Express one quantity as a percentage of another.",
      "Solve increase/decrease by percentage."
    ],
    memoryTip:
      "Add fractions: same denominator first. Divide by a fraction: flip and multiply. Percent means over 100."
  },

  {
    grade: "JSS 1",
    topicNumber: 4,
    title: "LCM, HCF and Prime Numbers",
    quizTopic: "Number and Numeration",
    icon: "🔢",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef7ec"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#1e5d2a" text-anchor="middle">Factors and Multiples</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="20" y="50" width="100" height="110" rx="8" fill="#fff" stroke="#2b5d34"/><text x="70" y="72">Factors</text><text x="70" y="92">of 12:</text><text x="70" y="112">1,2,3,4,6,12</text><text x="70" y="132">HCF(12,18)=6</text><rect x="130" y="50" width="100" height="110" rx="8" fill="#fffde6" stroke="#c9a227"/><text x="180" y="72">Primes:</text><text x="180" y="92">2,3,5,7,</text><text x="180" y="112">11,13,17,19</text><text x="180" y="132">29 ...</text><rect x="240" y="50" width="100" height="110" rx="8" fill="#fff" stroke="#2b5d34"/><text x="290" y="72">Multiples</text><text x="290" y="92">of 4: 4,8,12</text><text x="290" y="112">of 6: 6,12</text><text x="290" y="132">LCM=12</text></g></svg>'
    ),
    imageNote: "",
    explanation:
      "A factor divides a number exactly; a multiple is obtained by multiplying. A prime number has only two factors, 1 and itself. The HCF is the largest factor shared by two or more numbers. The LCM is the smallest multiple shared by two or more numbers.",
    points: [
      "A prime number has only two factors, 1 and itself: 2, 3, 5, 7, 11, 13, 17, 19, 29.",
      "2 is the only even prime; 1 is neither prime nor composite.",
      "A factor of a number divides it exactly (factors of 24: 1,2,3,4,6,8,12,24: eight factors).",
      "A multiple is obtained by multiplying: multiples of 6 are 6,12,18,24,....",
      "The HCF is the largest factor shared by two or more numbers (HCF of 12 and 18 is 6; of 20 and 30 is 10).",
      "The LCM is the smallest multiple shared (LCM of 4 and 6 is 12; of 6 and 8 is 24).",
      "Use a factor tree to break a number into prime factors.",
      "Primes between 10 and 20 are 11, 13, 17, 19 (four in all).",
      "HCF is used for simplifying fractions and sharing; LCM for adding fractions and repeating events."
    ],
    definitions: [
      "Prime number: has only two factors, 1 and itself.",
      "Composite number: has more than two factors.",
      "Factor: a number that divides another exactly.",
      "Multiple: product of a number with a whole number.",
      "HCF: highest common factor shared by numbers.",
      "LCM: lowest common multiple shared by numbers."
    ],
    rules: [
      "List the factors to find the HCF; list multiples to find the LCM.",
      "Use a factor tree for prime factorization.",
      "Test primality by trying division by 2, 3, 5, 7, 11, ...",
      "HCF <= each number; LCM >= each number."
    ],
    examples: [
      "HCF of 12 and 18 is 6; HCF of 20 and 30 is 10.",
      "LCM of 4 and 6 is 12; LCM of 6 and 8 is 24.",
      "17 and 29 are prime; 9, 15, 21, 27, 33 are not.",
      "42 is a multiple of 6 because 6 x 7 = 42.",
      "24 has 8 factors: 1,2,3,4,6,8,12,24."
    ],
    waecFocus: [
      "Identify a prime number and count primes in a range.",
      "Find HCF and LCM of given numbers.",
      "Identify factors and multiples; count factors.",
      "Use prime factorization with a factor tree.",
      "Apply HCF/LCM to fractions and sharing problems."
    ],
    memoryTip:
      "HCF = biggest shared FACTOR (divides in). LCM = smallest shared MULTIPLE (times table meets)."
  },

  {
    grade: "JSS 1",
    topicNumber: 5,
    title: "Ratio and Proportion",
    quizTopic: "Ratio and Proportion",
    icon: "⚖️",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#fdf4ec"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#7a3d12" text-anchor="middle">Sharing GHc 60 in ratio 2:1</text><g font-family="Arial" font-size="13" text-anchor="middle"><rect x="40" y="60" width="140" height="80" rx="10" fill="#2f7d3a"/><text x="110" y="90" fill="#fff">2 parts = 40</text><text x="110" y="112" fill="#fff" font-size="11">2/3 of 60</text><rect x="185" y="60" width="135" height="80" rx="10" fill="#c4562a"/><text x="252" y="90" fill="#fff">1 part = 20</text><text x="252" y="112" fill="#fff" font-size="11">1/3 of 60</text></g><text x="180" y="165" font-family="Arial" font-size="11" fill="#7a3d12" text-anchor="middle">Total parts = 3. Each part = 60/3 = 20</text></svg>'
    ),
    imageNote: "",
    explanation:
      "A ratio compares two quantities of the same kind, written a:b. Simplify by dividing by a common factor. To share, add the parts, divide the total by total parts, then multiply. Direct proportion: both increase together. Inverse proportion: one increases while the other decreases (more workers, fewer days).",
    points: [
      "A ratio compares two quantities of the same kind, written a:b.",
      "Simplify a ratio by dividing both sides by a common factor (14:21 = 2:3; 18:24 = 3:4).",
      "Convert units before forming a ratio (25 cm to 1 m = 25:100 = 1:4; 3 hours to 1 day = 3:24 = 1:8).",
      "To share: total parts = sum of ratio numbers; each part = total / total parts.",
      "Direct proportion: as one quantity increases, the other increases (pens and cost, petrol and distance).",
      "Inverse proportion: more workers means fewer days; total work stays constant.",
      "Map scale: actual distance = map distance x scale (4 cm at 1:50,000 = 2 km).",
      "Speed = distance / time (180 km in 3 h = 60 km/h).",
      "Combined ratios: if A:B = 2:3 and B:C = 4:5, make B common: 8:12:15."
    ],
    definitions: [
      "Ratio: comparison of two quantities of the same kind.",
      "Proportion: statement that two ratios are equal.",
      "Direct proportion: both quantities increase together.",
      "Inverse proportion: one increases while the other decreases.",
      "Scale: ratio of map distance to actual distance."
    ],
    rules: [
      "Share GHc 60 in 2:1: total parts 3, each 20, shares 40 and 20.",
      "Simplify by HCF: 14:21 /7 = 2:3.",
      "Direct: cost = unit price x quantity (3 pens GHc 4.50, 7 pens GHc 10.50).",
      "Inverse: days = (workers x days)/new workers (3 men 4 days, 6 men 2 days).",
      "Increase 800 in ratio 7:5 = 800 x 7/5 = 1120. Decrease 96 in 3:4 = 72."
    ],
    formulas: [
      "Each part = total / sum of ratio parts.",
      "Share = ratio part x each part.",
      "Inverse time = (old workers x old days) / new workers.",
      "Actual distance = map distance x scale."
    ],
    examples: [
      "Share GHc 60 in 2:1 gives GHc 40 and GHc 20; GHc 600 in 2:3 gives 240 and 360.",
      "Boys:girls 2:3 in class of 30 gives 18 girls; 5:4 with 45 boys gives 36 girls.",
      "4 pencils GHc 2, so 10 cost GHc 5; 3 pens GHc 4.50, 7 cost GHc 10.50.",
      "3 men 4 days, 6 men 2 days; 12 workers 10 days, 15 workers 8 days.",
      "Map 1:50,000, 4 cm = 2 km; 1:25,000, 6 cm = 1.5 km. Car 240 km on 20 L = 12 km/L."
    ],
    waecFocus: [
      "Share a quantity in a given ratio (including three parts).",
      "Simplify a ratio; convert units first.",
      "Solve direct proportion (cost, distance, recipe).",
      "Solve inverse proportion (workers and days).",
      "Use map scale and speed."
    ],
    memoryTip:
      "Sharing: ADD the parts first. Same units first. More men = fewer days (inverse)."
  },

  {
    grade: "JSS 1",
    topicNumber: 6,
    title: "Indices (Powers) and Standard Form",
    quizTopic: "Number and Numeration",
    icon: "🔺",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#f3f0ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#3b2a6b" text-anchor="middle">Powers: 2^4 = 16</text><g font-family="Arial" font-size="13" text-anchor="middle"><rect x="30" y="55" width="90" height="70" rx="8" fill="#fff" stroke="#3b2a6b"/><text x="75" y="80">2^4</text><text x="75" y="100" font-size="11">=2x2x2x2</text><text x="75" y="115" font-size="11">=16</text><rect x="135" y="55" width="90" height="70" rx="8" fill="#fffde6" stroke="#c9a227"/><text x="180" y="80">3^2=9</text><text x="180" y="100" font-size="11">v49=7</text><text x="180" y="115" font-size="11">5^-2=1/25</text><rect x="240" y="55" width="90" height="70" rx="8" fill="#fff" stroke="#3b2a6b"/><text x="285" y="80" font-size="12">1.5x10^3</text><text x="285" y="100" font-size="11">=1500</text><text x="285" y="115" font-size="11">2.5x10^-4</text></g><text x="180" y="155" font-family="Arial" font-size="11" fill="#3b2a6b" text-anchor="middle">Multiply powers: add indices. Divide: subtract.</text></svg>'
    ),
    imageNote: "",
    explanation:
      "An index (power) shows how many times a number is multiplied by itself: 2^4 = 2x2x2x2 = 16. The base is the number, the index is the small raised power. A negative index gives a reciprocal. A square root undoes squaring. Standard form writes very large or small numbers as A x 10^n.",
    points: [
      "x^2 means x multiplied by itself: 3^2 = 9; 2^4 = 16; 2^5 = 32; 10^3 = 1000.",
      "The base is the big number, the index (exponent) is the power.",
      "Any non-zero number to power 0 is 1: 5^0 = 1.",
      "A negative index gives the reciprocal: 5^-2 = 1/25.",
      "Square root undoes squaring: v49 = 7, v144 = 12, v81 + v16 = 9 + 4 = 13.",
      "Standard form is A x 10^n where 1 <= A < 10.",
      "Large numbers have positive n: 1500 = 1.5 x 10^3.",
      "Small numbers have negative n: 0.00025 = 2.5 x 10^-4.",
      "Laws of indices control multiplication and division of powers."
    ],
    definitions: [
      "Base: the number being multiplied.",
      "Index (exponent): how many times the base is multiplied.",
      "Square: number to power 2; square root undoes it.",
      "Reciprocal: 1 divided by the number.",
      "Standard form: A x 10^n with 1 <= A < 10."
    ],
    rules: [
      "Multiply powers with same base: add indices (3^2 x 3^3 = 3^5 = 243).",
      "Divide powers: subtract indices (x^a / x^b = x^(a-b)).",
      "Power of a power: multiply indices.",
      "7^2 - 3^2 = 49 - 9 = 40; 2^3 + 3^2 = 8 + 9 = 17.",
      "If vx = 7 then x = 49."
    ],
    formulas: [
      "x^a x x^b = x^(a+b). x^a / x^b = x^(a-b). (x^a)^b = x^(ab).",
      "x^-n = 1/x^n. x^0 = 1.",
      "Standard form: move decimal to leave one non-zero digit, count moves = n."
    ],
    examples: [
      "2^4 = 16; 3^2 = 9; v49 = 7; v144 = 12.",
      "5^-2 = 1/25; 5^0 = 1.",
      "3^2 x 3^3 = 3^5 = 243.",
      "1500 = 1.5 x 10^3; 0.00025 = 2.5 x 10^-4.",
      "Evaluate 7^2 - 3^2 = 40."
    ],
    waecFocus: [
      "Evaluate powers, squares and square roots.",
      "Simplify with negative and zero indices.",
      "Apply laws of indices (add/subtract powers).",
      "Write numbers in standard form and back.",
      "Solve vx = k type questions."
    ],
    memoryTip:
      "Standard form: ONE digit before the point x 10^n. Multiply powers: ADD. Divide: SUBTRACT."
  },

  {
    grade: "JSS 2",
    topicNumber: 7,
    title: "Algebra: Simplifying Expressions",
    quizTopic: "Algebra",
    icon: "🧮",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef6ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#1e3a6b" text-anchor="middle">Like Terms Together</text><g font-family="Arial" font-size="13" text-anchor="middle"><rect x="25" y="55" width="95" height="70" rx="8" fill="#2f7d3a"/><text x="72" y="82" fill="#fff">3x+2x=5x</text><text x="72" y="102" fill="#fff" font-size="11">like terms</text><rect x="132" y="55" width="95" height="70" rx="8" fill="#c4562a"/><text x="179" y="82" fill="#fff">2ax3a=6a2</text><text x="179" y="102" fill="#fff" font-size="11">add powers</text><rect x="239" y="55" width="95" height="70" rx="8" fill="#2f5aa0"/><text x="286" y="82" fill="#fff">2(x+3)</text><text x="286" y="102" fill="#fff" font-size="11">=2x+6</text></g><text x="180" y="155" font-family="Arial" font-size="11" fill="#1e3a6b" text-anchor="middle">Only add or subtract LIKE terms. 4a-2b+3a+5b = 7a+3b</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Algebra uses letters to stand for numbers. A term is a number, letter or their product. Like terms have the same letters and powers, e.g. 3x and 2x. Simplify by collecting like terms and by expanding brackets: multiply every term inside by the term outside.",
    points: [
      "A letter such as x stands for an unknown number; 2x means 2 times x.",
      "A term is a number, letter or product (3x, -2b, 6a^2).",
      "Coefficient is the number in front (in 3x, 3 is the coefficient).",
      "Like terms have the same letters and powers: 3x and 2x; unlike: 3x and 3y.",
      "Collect like terms by adding/subtracting coefficients: 3x + 2x = 5x.",
      "Unlike terms cannot be combined: 7a + 3b stays as 7a + 3b.",
      "Multiply: numbers together, add powers of letters: 2a x 3a = 6a^2.",
      "Divide: divide numbers, subtract powers: 6x / 2 = 3x.",
      "Expand a bracket by multiplying each inside term: 2(x + 3) = 2x + 6.",
      "Substitute numbers for letters to evaluate: if y = 3, 2y + 1 = 7."
    ],
    definitions: [
      "Variable: letter standing for an unknown number.",
      "Term: number, letter or product forming part of an expression.",
      "Coefficient: number multiplying a letter.",
      "Like terms: same letters and powers.",
      "Expression: combination of terms without an equals sign."
    ],
    rules: [
      "3x + 2x = 5x; 5y - 2y = 3y; 4a - 2b + 3a + 5b = 7a + 3b.",
      "2a x 3a = 6a^2 (multiply numbers, add indices).",
      "6x / 2 = 3x.",
      "2(x + 3) = 2x + 6; 3(x + 2) - 2x = x + 6; 5x - 2(x + 3) = 3x - 6."
    ],
    examples: [
      "3x + 2x = 5x; 5y - 2y = 3y.",
      "2a x 3a = 6a^2; 6x / 2 = 3x.",
      "2(x + 3) = 2x + 6.",
      "If y = 3, 2y + 1 = 7; if a = 3, b = 4, 2a + 3b = 18.",
      "4a - 2b + 3a + 5b = 7a + 3b."
    ],
    waecFocus: [
      "Collect like terms to simplify.",
      "Expand brackets and simplify.",
      "Multiply and divide algebraic terms.",
      "Substitute numbers and evaluate.",
      "Simplify with powers (3^2 x 3^3 = 3^5)."
    ],
    memoryTip:
      "ONLY like terms combine. Multiply: numbers x numbers, letters add powers."
  },

  {
    grade: "JSS 2",
    topicNumber: 8,
    title: "Algebra: Equations",
    quizTopic: "Algebra",
    icon: "⚖️",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#fdf0f5"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#7a1e4a" text-anchor="middle">Balance: 2x + 3 = 11</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="30" y="60" width="130" height="70" rx="8" fill="#fff" stroke="#7a1e4a"/><text x="95" y="85">2x + 3</text><text x="95" y="105">-3  -3</text><rect x="200" y="60" width="130" height="70" rx="8" fill="#fffde6" stroke="#c9a227"/><text x="265" y="85">= 11</text><text x="265" y="105">2x=8, x=4</text><line x1="160" y1="60" x2="160" y2="130" stroke="#7a1e4a" stroke-width="3"/></g><text x="180" y="160" font-family="Arial" font-size="11" fill="#7a1e4a" text-anchor="middle">Do the SAME to both sides. Opposite undoes: +/-, x//</text></svg>'
    ),
    imageNote: "",
    explanation:
      "An equation states that two expressions are equal (=). Solving means finding the unknown that makes it true. Keep the balance: do the same operation to both sides. Undo addition with subtraction, multiplication with division. Collect x terms on one side and numbers on the other.",
    points: [
      "An equation has an equals sign; an expression does not.",
      "The unknown is the letter whose value we find.",
      "Keep balance: whatever you do to one side, do to the other.",
      "Undo + with -, - with +, x with /, / with x.",
      "One-step: x + 5 = 12 gives x = 7; 2x = 18 gives x = 9; 7x = 42 gives x = 6.",
      "Two-step: 3x - 4 = 11 gives 3x = 15, x = 5; 2x - 5 = 13 gives x = 9.",
      "Brackets first: 4(x - 1) = 20 gives x = 6; 5(x - 2) = 3x + 4 gives x = 7.",
      "x on both sides: collect x left, numbers right (4x + 3 = 5x - 1 gives x = 4).",
      "Fractions: multiply through by LCM (x/3 + x/4 = 7 gives x = 12).",
      "Word problems: let the unknown be x, form an equation, solve, check."
    ],
    definitions: [
      "Equation: statement that two expressions are equal.",
      "Unknown: letter whose value solves the equation.",
      "Solution: value of the unknown that makes the equation true.",
      "Factorise: write as product of brackets.",
      "Expand: multiply brackets out."
    ],
    rules: [
      "x + 5 = 12: subtract 5 both sides, x = 7.",
      "2x = 18: divide by 2, x = 9.",
      "3x - 4 = 11: add 4, 3x = 15, x = 5.",
      "4x + 3 = 5x - 1: 4x - 5x = -1 - 3, -x = -4, x = 4.",
      "x^2 + 5x + 6 = (x + 2)(x + 3); x^2 - 9 = (x + 3)(x - 3); (x + 4)(x - 4) = x^2 - 16."
    ],
    examples: [
      "If 3x - 7 = 11, 3x = 18, x = 6.",
      "Solve 5(x - 2) = 3x + 4: 5x - 10 = 3x + 4, x = 7.",
      "If y = 2x + 1 and x = 4, y = 9.",
      "Number + 3 = 10 gives 7; number + double = 18 gives 6.",
      "Expand (x + 5)(x + 3) = x^2 + 8x + 15."
    ],
    waecFocus: [
      "Solve one-step and two-step linear equations.",
      "Solve with brackets and with x on both sides.",
      "Solve fractional equations (multiply by LCM).",
      "Factorise quadratics (find two numbers with given product and sum).",
      "Form and solve word problems; substitute into formulas."
    ],
    memoryTip:
      "Balance method: SAME both sides. Move: change sign. x-terms left, numbers right."
  },

  {
    grade: "JSS 2",
    topicNumber: 9,
    title: "Geometry: Angles",
    quizTopic: "Geometry",
    icon: "📐",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef4ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#203a6b" text-anchor="middle">Types of Angles</text><g font-family="Arial" font-size="11" text-anchor="middle"><text x="55" y="80">acute</text><text x="55" y="95">&lt;90</text><path d="M30 120 L80 120 L65 100" stroke="#203a6b" stroke-width="3" fill="none"/><text x="135" y="80">right</text><text x="135" y="95">=90</text><rect x="115" y="100" width="30" height="20" fill="none" stroke="#c00" stroke-width="2"/><text x="215" y="80">obtuse</text><text x="215" y="95">90-180</text><path d="M190 120 L240 120 L205 95" stroke="#203a6b" stroke-width="3" fill="none"/><text x="295" y="80">straight</text><text x="295" y="95">=180</text><line x1="270" y1="120" x2="320" y2="120" stroke="#203a6b" stroke-width="3"/><text x="180" y="160" fill="#203a6b">Complementary = 90. Supplementary = 180.</text><text x="180" y="178" fill="#203a6b">Straight line = 180. Round a point = 360.</text></g></svg>'
    ),
    imageNote: "",
    explanation:
      "An angle is formed when two lines meet at a point (vertex), measured in degrees. Acute < 90, right = 90, obtuse 90-180, straight = 180, reflex > 180, full turn = 360. Complementary pairs sum to 90, supplementary to 180. Angles on a straight line sum to 180; round a point 360; vertically opposite are equal.",
    points: [
      "An acute angle is less than 90 degrees (e.g. 37, 60).",
      "A right angle is exactly 90 degrees.",
      "An obtuse angle is between 90 and 180 degrees.",
      "A straight angle is 180 degrees (a straight line).",
      "A reflex angle is between 180 and 360 degrees.",
      "Complementary angles add to 90 (complement of 37 is 53).",
      "Supplementary angles add to 180 (supplement of 37 is 143).",
      "Angles on a straight line add to 180 (90 + 35 + third = 180 gives 55).",
      "Angles round a point add to 360; vertically opposite angles are equal.",
      "With parallel lines: corresponding and alternate angles are equal."
    ],
    definitions: [
      "Vertex: point where two lines forming an angle meet.",
      "Acute: less than 90 degrees.",
      "Obtuse: between 90 and 180 degrees.",
      "Complementary: two angles summing to 90 degrees.",
      "Supplementary: two angles summing to 180 degrees."
    ],
    rules: [
      "Angles on a straight line = 180.",
      "Angles round a point = 360.",
      "Vertically opposite angles are equal.",
      "Corresponding angles equal when lines are parallel; alternate angles equal.",
      "Triangle angles x, 2x, 3x: 6x = 180, x = 30."
    ],
    examples: [
      "Complement of 37 is 90 - 37 = 53.",
      "Two angles 30 and 60 are complementary; 110 and 70 supplementary.",
      "90 + 35 + third on straight line: third = 55.",
      "Angles x, 2x, 3x in triangle: x = 30, smallest 30.",
      "Each angle of equilateral triangle is 60; base angles of isosceles are equal."
    ],
    waecFocus: [
      "Identify acute, right, obtuse, straight, reflex.",
      "Find complements and supplements.",
      "Use straight line (180) and round point (360).",
      "Use vertically opposite, corresponding, alternate.",
      "Apply to triangles and parallel lines."
    ],
    memoryTip:
      "C comes before S: Complementary = 90, Supplementary = 180. Straight = 180, Round = 360."
  },

  {
    grade: "JSS 2",
    topicNumber: 10,
    title: "Geometry: Triangles and Quadrilaterals",
    quizTopic: "Geometry",
    icon: "🔺",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="210" viewBox="0 0 360 210"><rect width="360" height="210" fill="#f3f8ff"/><text x="180" y="18" font-family="Arial" font-size="15" font-weight="bold" fill="#1e3a6b" text-anchor="middle">Triangles (180) and Quads (360)</text><g font-family="Arial" font-size="11" text-anchor="middle"><polygon points="60,130 20,170 100,170" fill="#d8e8ff" stroke="#1e3a6b" stroke-width="2"/><text x="60" y="190">equilateral 60</text><polygon points="180,130 150,170 210,170" fill="#ffe8c8" stroke="#7a4a12" stroke-width="2"/><text x="180" y="190">isosceles</text><polygon points="290,130 250,170 330,170" fill="#e8ffe8" stroke="#1e5d2a" stroke-width="2"/><text x="290" y="190">scalene</text><rect x="40" y="60" width="60" height="40" fill="#fff" stroke="#1e3a6b"/><text x="70" y="85">square</text><rect x="140" y="60" width="80" height="40" fill="#fff" stroke="#1e3a6b"/><text x="180" y="85">rectangle</text><polygon points="260,60 300,60 290,100 250,100" fill="#fff" stroke="#1e3a6b"/><text x="275" y="85">trapezium</text></g></svg>'
    ),
    imageNote: "",
    explanation:
      "A triangle has 3 sides and 3 angles summing to 180. Equilateral has all equal (60 each), isosceles has two equal sides and base angles, scalene has none equal, right-angled has one 90 with hypotenuse longest. A quadrilateral has 4 sides summing to 360: square, rectangle, parallelogram, rhombus, trapezium (one pair parallel), kite.",
    points: [
      "A triangle has three sides and three angles summing to 180.",
      "Equilateral: all sides and angles equal, each 60 degrees.",
      "Isosceles: two sides and two base angles equal.",
      "Scalene: no equal sides or angles.",
      "Right-angled: one 90; longest side opposite is the hypotenuse.",
      "Pythagoras: hypotenuse^2 = base^2 + height^2 (3,4,5 triangle).",
      "A quadrilateral has four sides and angles summing to 360.",
      "Square: four equal sides, four right angles; rectangle: opposite equal, all 90.",
      "Parallelogram/rhombus: opposite sides parallel; trapezium: one pair parallel.",
      "Polygons: pentagon 5, hexagon 6, heptagon 7, octagon 8."
    ],
    definitions: [
      "Equilateral: all sides equal, each angle 60.",
      "Isosceles: two sides and two angles equal.",
      "Scalene: no equal sides.",
      "Hypotenuse: longest side of a right triangle.",
      "Trapezium: quadrilateral with one pair of parallel sides.",
      "Square: four equal sides and four right angles."
    ],
    rules: [
      "Triangle angles total 180; quadrilateral 360.",
      "Third angle = 180 - sum of two (50 + 60 gives 70).",
      "Pythagoras: 3^2 + 4^2 = 25, hypotenuse 5.",
      "Isosceles base angles equal; equilateral each 60.",
      "Angles in ratio 1:2:3: total 6 parts, each 30, smallest 30."
    ],
    examples: [
      "Two angles 50 and 60, third = 70.",
      "Sides 3 and 4, hypotenuse = 5.",
      "Angles x, 2x, 3x: x = 30.",
      "Square side 9: perimeter 36; square four equal sides + four rights.",
      "Trapezium has one pair parallel; hexagon has 6 sides; pentagon 5."
    ],
    waecFocus: [
      "Find missing angle in triangle (180) or quadrilateral (360).",
      "Identify equilateral, isosceles, scalene, right-angled.",
      "Use Pythagoras for right triangles.",
      "Identify square, rectangle, trapezium, rhombus, kite.",
      "Count sides of polygons (pentagon to octagon)."
    ],
    memoryTip:
      "Triangle = 180, Quad = 360. Equilateral 60 each. 3-4-5 is the BECE right triangle."
  },

  {
    grade: "JSS 2",
    topicNumber: 11,
    title: "Mensuration: Perimeter and Area",
    quizTopic: "Mensuration",
    icon: "📏",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef9ee"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#1c5d2a" text-anchor="middle">Perimeter vs Area</text><g font-family="Arial" font-size="11" text-anchor="middle"><rect x="25" y="55" width="100" height="70" fill="#fff" stroke="#1c5d2a" stroke-width="2"/><text x="75" y="90">8 x 5</text><text x="75" y="106">P=26 Area=40</text><polygon points="190,55 240,55 190,125" fill="#ffe8c8" stroke="#7a4a12" stroke-width="2"/><text x="215" y="140">1/2xb x h</text><rect x="260" y="55" width="70" height="70" fill="#d8e8ff" stroke="#1e3a6b" stroke-width="2"/><text x="295" y="90">7x7</text><text x="295" y="106">A=49</text></g><text x="180" y="165" font-family="Arial" font-size="11" fill="#1c5d2a" text-anchor="middle">Perimeter = around (cm). Area = surface (cm2).</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Perimeter is the total distance around a shape (units: cm, m). Area is the surface covered (square units: cm^2, m^2). Rectangle: P = 2(l+b), A = lxb. Square: P = 4s, A = s^2. Triangle: A = 1/2 x base x height. Parallelogram: A = base x height.",
    points: [
      "Perimeter is measured in length units (cm, m); area in square units (cm^2).",
      "Perimeter of rectangle = 2(length + breadth): 8 by 5 gives 26 cm.",
      "Area of rectangle = length x breadth: 8 by 5 gives 40 cm^2; 12 by 5 gives 60.",
      "Perimeter of square = 4 x side: side 9 gives 36 cm; side 7 gives 28 cm.",
      "Area of square = side x side: side 7 gives 49 cm^2.",
      "Area of triangle = 1/2 x base x height: 10 by 6 gives 30 cm^2.",
      "Area of parallelogram = base x height: 12 by 5 gives 60 cm^2.",
      "Choose the correct formula; keep base and height perpendicular.",
      "Always write the correct units: cm for perimeter, cm^2 for area."
    ],
    definitions: [
      "Perimeter: total distance around a shape.",
      "Area: amount of surface covered.",
      "Base: side chosen as bottom for area.",
      "Height (altitude): perpendicular distance to the opposite side."
    ],
    rules: [
      "Rectangle P = 2(l+b); A = l x b.",
      "Square P = 4s; A = s^2.",
      "Triangle A = 1/2 x b x h.",
      "Parallelogram A = base x height."
    ],
    formulas: [
      "P(rect) = 2(l + b). A(rect) = l x b.",
      "P(square) = 4s. A(square) = s^2.",
      "A(triangle) = 1/2 x b x h.",
      "A(parallelogram) = b x h."
    ],
    examples: [
      "Rectangle 8 x 5: P = 26 cm, A = 40 cm^2; 12 x 5: A = 60 cm^2.",
      "Square side 7: A = 49 cm^2, P = 28 cm; side 9: P = 36 cm.",
      "Triangle base 10, height 6: A = 30 cm^2.",
      "Parallelogram base 12, height 5: A = 60 cm^2."
    ],
    waecFocus: [
      "Find perimeter of rectangle and square.",
      "Find area of rectangle, square, triangle, parallelogram.",
      "Choose the correct formula for each shape.",
      "Answer in correct units (cm vs cm^2).",
      "Solve word problems with dimensions."
    ],
    memoryTip:
      "Perimeter = fence around (cm). Area = floor inside (cm2). Triangle always half."
  },

  {
    grade: "JSS 3",
    topicNumber: 12,
    title: "Mensuration: Circles and Volume",
    quizTopic: "Mensuration",
    icon: "⭕",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eef3ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#203a6b" text-anchor="middle">Circle: C=2pr, A=pr2</text><g><circle cx="110" cy="110" r="50" fill="#fff" stroke="#203a6b" stroke-width="3"/><line x1="110" y1="110" x2="160" y2="110" stroke="#c00" stroke-width="2"/><text x="130" y="105" font-family="Arial" font-size="11">r=7</text><text x="110" y="180" font-family="Arial" font-size="11" fill="#203a6b" text-anchor="middle">C=44 A=154</text><rect x="220" y="70" width="70" height="70" fill="#ffe8c8" stroke="#7a4a12" stroke-width="2"/><text x="255" y="115" font-family="Arial" font-size="12" text-anchor="middle">4^3=64</text><text x="255" y="160" font-family="Arial" font-size="11" fill="#7a4a12" text-anchor="middle">cube V=s3</text></g></svg>'
    ),
    imageNote: "",
    explanation:
      "A circle uses pi (22/7 or 3.14). Diameter = 2 x radius. Circumference (around) = 2 x pi x r = pi x d. Area (surface) = pi x r^2. Volume is space inside a solid (cubic units cm^3): cube V = s^3, cuboid V = l x b x h.",
    points: [
      "The diameter is twice the radius: d = 2r.",
      "Circumference = 2 x pi x r = pi x d (units cm).",
      "Area of circle = pi x r^2 (units cm^2).",
      "Use pi = 22/7 for radii 7, 14 (multiples of 7); else 3.14.",
      "Radius 7: C = 44 cm, A = 154 cm^2; radius 14: A = 616 cm^2.",
      "Volume is measured in cubic units (cm^3, m^3).",
      "Volume of cube = side^3: side 4 gives 64 cm^3.",
      "Volume of cuboid = length x breadth x height: 6x3x2 = 36 cm^3; 4x3x2 = 24.",
      "Check units: circumference cm, area cm^2, volume cm^3."
    ],
    definitions: [
      "Radius: distance from centre to circumference.",
      "Diameter: line through centre touching both sides (2 x radius).",
      "Circumference: distance around a circle.",
      "Volume: space inside a 3D solid."
    ],
    rules: [
      "C = 2 pi r. A = pi r^2.",
      "V(cube) = s^3. V(cuboid) = l x b x h.",
      "22/7 cancels nicely with 7 and 14."
    ],
    formulas: [
      "C = 2 x pi x r = pi x d.",
      "A = pi x r^2.",
      "V(cube) = s^3. V(cuboid) = l x b x h."
    ],
    examples: [
      "Radius 7: C = 2 x 22/7 x 7 = 44 cm; A = 22/7 x 7 x 7 = 154 cm^2.",
      "Radius 14: A = 22/7 x 14 x 14 = 616 cm^2.",
      "Cube side 4: V = 64 cm^3.",
      "Cuboid 6x3x2: V = 36 cm^3; 4x3x2: V = 24 cm^3."
    ],
    waecFocus: [
      "Find circumference and area of a circle with pi = 22/7 or 3.14.",
      "Recall d = 2r and choose correct formula.",
      "Find volume of cube and cuboid.",
      "Use correct units (cm, cm^2, cm^3).",
      "Solve with radii 7 and 14 quickly."
    ],
    memoryTip:
      "C goes AROUND (2 pi r). A covers SURFACE (pi r2). V fills SPACE (l x b x h)."
  },

  {
    grade: "JSS 3",
    topicNumber: 13,
    title: "Statistics: Mean, Median and Mode",
    quizTopic: "Statistics & Probability",
    icon: "📊",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#f3f8ff"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#1e3a6b" text-anchor="middle">Mean, Median, Mode</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="20" y="55" width="100" height="80" rx="8" fill="#2f7d3a"/><text x="70" y="80" fill="#fff">Mean</text><text x="70" y="100" fill="#fff" font-size="11">total / n</text><text x="70" y="118" fill="#fff" font-size="11">30/5=6</text><rect x="130" y="55" width="100" height="80" rx="8" fill="#2f5aa0"/><text x="180" y="80" fill="#fff">Median</text><text x="180" y="100" fill="#fff" font-size="11">middle</text><text x="180" y="118" fill="#fff" font-size="11">1,3,5,7,9</text><rect x="240" y="55" width="100" height="80" rx="8" fill="#c4562a"/><text x="290" y="80" fill="#fff">Mode</text><text x="290" y="100" fill="#fff" font-size="11">most</text><text x="290" y="118" fill="#fff" font-size="11">3,3,3</text></g><text x="180" y="160" font-family="Arial" font-size="11" fill="#1e3a6b" text-anchor="middle">Range = highest - lowest. Arrange BEFORE median.</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Statistics collects and interprets data. Mean is the average (total divided by count). Median is the middle value after arranging in order; for even counts average the two middles. Mode is the most frequent value. Range is highest minus lowest.",
    points: [
      "The mean is the average: total divided by number of items.",
      "Mean of 2,4,6,8,10: sum 30 / 5 = 6; marks 4,5,6,7,8: mean 6.",
      "The median is the middle value AFTER arranging in order.",
      "Median of 3,5,7,9,11 is 7; of 3,9,5,7,1 arrange to 1,3,5,7,9, median 5.",
      "For even counts, median is average of two middles.",
      "The mode is the most frequent: mode of 2,3,3,4,3,5 is 3.",
      "A set can have no mode or more than one mode.",
      "Range = highest - lowest: range of 12,5,19,8,15 is 19-5 = 14.",
      "Tables and bar charts summarise data; read scales carefully."
    ],
    definitions: [
      "Mean: total of values / number of values.",
      "Median: middle value of ordered data.",
      "Mode: most frequent value.",
      "Range: highest minus lowest.",
      "Data: collected facts or numbers."
    ],
    rules: [
      "Always arrange in order BEFORE finding median.",
      "Even count: median = (middle1 + middle2)/2.",
      "Mode = value with highest frequency, not the frequency.",
      "Mean uses every value; median uses position."
    ],
    examples: [
      "Mean of 2,4,6,8,10 = 6; of 4,8,6,10,2 = 6; marks 4,5,6,7,8 mean 6.",
      "Median of 3,5,7,9,11 = 7; of 3,9,5,7,1 = 5 (ordered).",
      "Mode of 2,3,3,4,3,5 = 3; of 2,5,3,5,4,5,6 = 5.",
      "Range of 12,5,19,8,15 = 14; of 2,4,6,8 = 6."
    ],
    waecFocus: [
      "Find mean of a set (add then divide).",
      "Arrange before finding median; handle even counts.",
      "Find mode (most frequent) and range.",
      "Interpret simple tables and bar charts.",
      "Distinguish mean, median, mode."
    ],
    memoryTip:
      "Mean = AVERAGE (add/divide). Median = MIDDLE (order first). Mode = MOST."
  },

  {
    grade: "JSS 3",
    topicNumber: 14,
    title: "Probability",
    quizTopic: "Statistics & Probability",
    icon: "🎲",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#fffbe8"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#7a5b12" text-anchor="middle">Chance: favourable / total</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="25" y="55" width="95" height="80" rx="8" fill="#fff" stroke="#7a5b12"/><text x="72" y="82">Coin</text><text x="72" y="102" font-size="11">Head = 1/2</text><rect x="132" y="55" width="95" height="80" rx="8" fill="#fff" stroke="#7a5b12"/><text x="179" y="82">Die</text><text x="179" y="102" font-size="11">5 = 1/6</text><rect x="239" y="55" width="95" height="80" rx="8" fill="#fffde6" stroke="#c9a227"/><text x="286" y="82">3R+2B</text><text x="286" y="102" font-size="11">Red = 3/5</text></g><text x="180" y="160" font-family="Arial" font-size="11" fill="#7a5b12" text-anchor="middle">0 = impossible. 1 = certain. Sum of all = 1.</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Probability measures chance: favourable outcomes divided by total outcomes. It lies between 0 (impossible) and 1 (certain). A coin has 2 outcomes (head 1/2); a die has 6 (each face 1/6, even 3/6 = 1/2). Probabilities of all outcomes sum to 1.",
    points: [
      "Probability = favourable outcomes / total outcomes.",
      "Probability lies between 0 and 1, often a fraction.",
      "0 means impossible; 1 means certain.",
      "Coin: P(head) = 1/2, P(tail) = 1/2.",
      "Die: each face 1/6; even (2,4,6) = 3/6 = 1/2.",
      "Balls: 3 red + 2 blue, P(red) = 3/5; 3 red + 5 blue, P(red) = 3/8.",
      "Letters: vowels in MONDAY (O,A) = 2/6 = 1/3.",
      "P(not happening) = 1 - P(happening).",
      "Sum of all probabilities in a situation = 1."
    ],
    definitions: [
      "Outcome: possible result of an experiment.",
      "Favourable outcomes: outcomes we want.",
      "Total outcomes: all possible outcomes.",
      "Certain: probability 1.",
      "Impossible: probability 0."
    ],
    rules: [
      "P(event) = favourable / total.",
      "P(not E) = 1 - P(E).",
      "Total of die = 6; of coin = 2.",
      "Simplify fractions (3/6 = 1/2)."
    ],
    formulas: [
      "P(E) = favourable / total.",
      "P(not E) = 1 - P(E).",
      "Total probability = 1."
    ],
    examples: [
      "3 red + 2 blue, P(red) = 3/5; 3 red + 5 blue, P(red) = 3/8.",
      "Coin head = 1/2; tail = 1/2.",
      "Die 5 = 1/6; even = 1/2.",
      "Vowel from MONDAY = 2/6 = 1/3.",
      "Class 20, 5 girls: boys = 15/20 = 3/4."
    ],
    waecFocus: [
      "Find probability as a fraction (simplified).",
      "Identify total outcomes (coin 2, die 6, balls, letters).",
      "Find P of specific outcome and of not happening.",
      "Use sum of probabilities = 1.",
      "Solve fraction-of-class type questions."
    ],
    memoryTip:
      "Probability = want / total. Between 0 and 1. Coin halves, die sixths."
  },

  {
    grade: "JSS 3",
    topicNumber: 15,
    title: "Money, Profit and Simple Interest",
    quizTopic: "Money & Interest",
    icon: "💰",
    image: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="200" viewBox="0 0 360 200"><rect width="360" height="200" fill="#eefbf0"/><text x="180" y="20" font-family="Arial" font-size="15" font-weight="bold" fill="#166534" text-anchor="middle">Profit, Loss, Interest</text><g font-family="Arial" font-size="12" text-anchor="middle"><rect x="20" y="55" width="100" height="80" rx="8" fill="#fff" stroke="#166534"/><text x="70" y="80">Profit</text><text x="70" y="100" font-size="11">SP-CP</text><text x="70" y="118" font-size="11">120-100=20</text><rect x="130" y="55" width="100" height="80" rx="8" fill="#fffde6" stroke="#c9a227"/><text x="180" y="80">SI=P*R*T</text><text x="180" y="100" font-size="11">/100</text><text x="180" y="118" font-size="11">500x10x2</text><rect x="240" y="55" width="100" height="80" rx="8" fill="#fff" stroke="#166534"/><text x="290" y="80">Discount</text><text x="290" y="100" font-size="11">MP-price</text><text x="290" y="118" font-size="11">200-20=180</text></g><text x="180" y="160" font-family="Arial" font-size="11" fill="#166534" text-anchor="middle">%Profit/Loss uses COST price. Amount = Principal + Interest.</text></svg>'
    ),
    imageNote: "",
    explanation:
      "Business maths uses cost price (CP), selling price (SP), profit, loss, discount, commission and simple interest. Profit = SP - CP; loss = CP - SP; % profit/loss uses CP. Discount reduces the marked price. Simple interest = P x R x T / 100; amount = principal + interest.",
    points: [
      "Profit = selling price - cost price (SP > CP).",
      "Loss = cost price - selling price (CP > SP).",
      "% profit/loss = (profit or loss / cost price) x 100.",
      "Buy 100 sell 120: profit 20 = 20%; buy 80 sell 64: loss 16 = 20%.",
      "Book 150 sell 180: profit 30 = 20%; bag 500 sell 425: loss 75 = 15%.",
      "Discount = reduction from marked price; SP = marked - discount.",
      "10% off 200: discount 20, SP 180; 15% off 400: discount 60, SP 340.",
      "Simple interest is on principal only: SI = P x R x T / 100.",
      "Amount = principal + interest (5000 at 8% 2 yrs: interest 800, amount 5800).",
      "Commission, levy, exchange: apply the rate to the base (4% of 25,000 = 1000)."
    ],
    definitions: [
      "Cost price: price of buying.",
      "Selling price: price of selling.",
      "Profit: SP - CP when SP > CP.",
      "Loss: CP - SP when CP > SP.",
      "Discount: reduction from marked price.",
      "Simple interest: interest on principal only."
    ],
    rules: [
      "Profit = SP - CP. Loss = CP - SP.",
      "% profit/loss always divides by COST price.",
      "SI = P x R x T / 100. Amount = P + SI.",
      "Discounted price = marked - (rate x marked).",
      "Exchange: cedis = dollars x rate; dollars = cedis / rate."
    ],
    formulas: [
      "Profit = SP - CP. %Profit = Profit/CP x 100.",
      "Loss = CP - SP. %Loss = Loss/CP x 100.",
      "SI = P x R x T / 100. Amount = P + SI.",
      "SP after discount = MP - discount."
    ],
    examples: [
      "Buy 100 sell 120: profit 20 = 20%; radio 400 sell 500: profit 100.",
      "Buy 80 sell 64: loss 16 = 20%; 150 to 180: profit 20%.",
      "SI on 500 at 10% 2 yrs = 100; on 2000 at 5% 3 yrs = 300.",
      "5000 at 8% 2 yrs: interest 800, amount 5800.",
      "10% off 200 = 180; 15% off 400 = 340; 4% of 25,000 = 1000; 5% levy on 200 = 210.",
      "1 dollar = GHc 12, 5 dollars = GHc 60; GHc 600 at 15 = 40 dollars."
    ],
    waecFocus: [
      "Calculate profit, loss and percentage (divide by CP).",
      "Calculate simple interest and amount.",
      "Calculate discounted selling price.",
      "Calculate commission, levy and exchange.",
      "Solve trader word problems."
    ],
    memoryTip:
      "SI = P x R x T / 100. Profit = SP-CP, Loss = CP-SP. Percent always over COST."
  }
];
