// Tech Monster — Foundation Science Book (Grade 7 • Grade 8 • Grade 9)
// Built directly from the outlined Foundation Science syllabus.
// Each grade -> themes -> topics (units). Topics are the canonical revision
// units and are also the topic keys used by the Science quiz bank.
window.scienceBook = [
  // ============================================================
  // GRADE 7
  // ============================================================
  {
    id: "g7",
    grade: "Grade 7",
    label: "Foundation Science — Grade Seven",
    icon: "📗",
    blurb: "Nature of science, matter, chemical changes, air and water, ecology, food, sense organs, hygiene and technology.",
    themes: [
      {
        id: "g7-t1",
        number: "Theme 1",
        title: "Nature of Science",
        topics: [
          {
            id: "g7-t1-1", image: "images/diagrams/scientific-method.svg", unit: "1.0", page: "1", title: "Definitions of Science", icon: "🔬",
            explanation: "Science is the systematic study of the natural and physical world through observation, experiment, measurement and reasoning. It is organised knowledge that is gathered in an orderly way and can be tested and proven.",
            points: [
              "Science comes from the Latin word scientia, meaning knowledge.",
              "It involves observation, experimentation, measurement, classification, prediction and conclusion.",
              "Scientific findings are based on evidence, not on opinion or belief.",
              "Science can be pure (research for knowledge) or applied (knowledge used to solve problems).",
              "The scientific method moves from a problem to hypothesis, experiment, observation, conclusion, then communication of results."
            ],
            definitions: [
              "Science: the systematic and organised study of natural things through observation and experiment.",
              "Hypothesis: a temporary or trial explanation of an observation that can be tested.",
              "Experiment: a planned procedure carried out under controlled conditions to test an idea.",
              "Conclusion: the judgement drawn from the results of an experiment.",
              "Variable: any factor that can change or be changed in an experiment."
            ],
            examples: [
              "Testing which soil type makes a bean seed grow fastest is applied science.",
              "Observing and recording the phases of the moon is pure science."
            ],
            waecFocus: [
              "State the meaning of science and give the origin of the word.",
              "List the steps of the scientific method in order.",
              "Distinguish between pure science and applied science with examples."
            ],
            memoryTip: "Remember OHECC: Observation, Hypothesis, Experiment, Conclusion, Communication."
          },
          {
            id: "g7-t1-2", unit: "1.1", page: "1", title: "Branches of Science", icon: "🌿",
            explanation: "Science is divided into branches so that each group of natural things can be studied properly. The main branches you will meet at this level are biology, chemistry, physics and earth science.",
            points: [
              "Biology is the study of living things (plants, animals and micro-organisms).",
              "Chemistry is the study of matter, its composition, properties and how it changes.",
              "Physics is the study of energy, force, motion, light, sound, heat and electricity.",
              "Earth science (geography/earth science) is the study of the earth, its rocks, weather and space.",
              "Integrated Science combines biology, chemistry and physics so that related ideas are studied together.",
              "Other branches include astronomy (stars and planets), geology (rocks) and ecology (organisms and their environment)."
            ],
            definitions: [
              "Biology: the science of living organisms.",
              "Chemistry: the science of matter and chemical changes.",
              "Physics: the science of energy and physical changes.",
              "Ecology: the study of how organisms relate to one another and to their environment."
            ],
            examples: [
              "Studying how a leaf makes food is biology.",
              "Studying why iron rusts is chemistry.",
              "Studying why a ball slows down is physics."
            ],
            waecFocus: [
              "Name the four main branches of science and state what each studies.",
              "Classify given statements/activities under the correct branch of science.",
              "Explain why Integrated Science studies the branches together."
            ],
            memoryTip: "Bio = life, Chem = matter, Phys = energy, Earth = the planet."
          },
          {
            id: "g7-t1-3", unit: "1.2", page: "2", title: "Famous Scientists and Their Contributions", icon: "🧑‍🔬",
            explanation: "Many scientists made discoveries by observing carefully and repeating experiments. Learning their contributions helps you understand how scientific knowledge grows over time.",
            points: [
              "Isaac Newton studied force, gravity and motion (three laws of motion).",
              "Albert Einstein developed the theory of relativity (E = mc²).",
              "Louis Pasteur proved that germs cause disease and invented pasteurisation.",
              "Alexander Fleming discovered penicillin, the first antibiotic.",
              "Robert Koch identified the germs that cause anthrax, tuberculosis and cholera.",
              "Charles Darwin proposed the theory of evolution by natural selection.",
              "Dmitri Mendeleev arranged the elements and arranged the periodic table.",
              "Gregor Mendel is the father of genetics through his pea plant experiments.",
              "Marie Curie discovered radium and polonium and studied radioactivity.",
              "Thomas Edison invented the practical electric lamp."
            ],
            definitions: [
              "Scientist: a person trained and engaged in scientific work.",
              "Discovery: finding something that already existed but was not known.",
              "Invention: creating something new that did not exist before.",
              "Theory: a well-tested explanation of a wide range of observations."
            ],
            examples: [
              "Newton noticed an apple falling and studied gravity.",
              "Fleming noticed that mould killed bacteria in a culture plate."
            ],
            waecFocus: [
              "Match famous scientists to their discoveries.",
              "State the contribution of at least five well-known scientists.",
              "Explain the difference between a discovery and an invention."
            ],
            memoryTip: "Newton-gravity, Pasteur-germs, Fleming-penicillin, Mendel-genetics, Mendeleev-periodic table."
          },
          {
            id: "g7-t1-4", unit: "1.3", page: "3", title: "Scientific Instruments and Their Uses", icon: "🛠️",
            explanation: "Scientific instruments are tools used to observe, measure and experiment accurately. Choosing the right instrument gives a reliable and repeatable result.",
            points: [
              "The microscope is used to magnify very small objects such as cells and bacteria.",
              "The magnifying lens (hand lens) is used to magnify small objects like insects and leaf veins.",
              "The thermometer measures temperature (in degrees Celsius).",
              "The beam balance measures mass in grams, while the spring balance measures weight in newtons.",
              "The measuring cylinder measures the volume of liquids in cm³ or ml.",
              "The metre rule and tape measure length and distance in metres, cm and mm.",
              "The stopwatch measures time in seconds and minutes.",
              "The barometer measures atmospheric (air) pressure.",
              "The hygrometer measures the humidity (wetness) of the air.",
              "The weather vane shows wind direction, while the rain gauge measures rainfall.",
              "The lathe, drill, saw and spanner are instruments used in technology and workshop practice."
            ],
            definitions: [
              "Magnify: to make an object appear larger than it really is.",
              "Mass: the amount of matter in an object, measured in grams.",
              "Volume: the amount of space a substance occupies, measured in cm³ or litres.",
              "Atmospheric pressure: the pressure exerted by the weight of air above the earth.",
              "Humidity: the amount of water vapour present in the air."
            ],
            examples: [
              "Use a thermometer to compare the temperature of water before and after heating.",
              "Use a measuring cylinder to find the volume of 25 cm³ of water.",
              "Use a barometer to record air pressure before a rainy day."
            ],
            waecFocus: [
              "Name the instrument used for a given measurement.",
              "State the unit associated with each measuring instrument.",
              "Given an instrument, state one precaution when using it."
            ],
            memoryTip: "Heat=thermometer, mass=balance, volume=cylinder, time=stopwatch, air=barometer."
          },
          {
            id: "g7-t1-5", unit: "2.0", page: "6", title: "Living and Non-Living Things", icon: "🌱",
            explanation: "Living things are things that carry out life processes such as feeding, respiration, excretion, growth, movement, irritability and reproduction. Non-living things do none of these.",
            points: [
              "Living things include plants, animals, fungi and micro-organisms.",
              "Non-living things include water, stone, air, fire, plastic and metal.",
              "All living things are made of cells (except viruses which are studied with living things).",
              "Living things need food, air, water and suitable shelter from their environment.",
              "Some non-living things can move (wind, a car) but movement alone does not make something living.",
              "Some living things do not move obviously (a tree) but they still carry out life processes."
            ],
            definitions: [
              "Organism: any living thing that carries out life processes.",
              "Life processes: the essential activities carried out by all living things.",
              "Environment: everything that surrounds and affects a living thing."
            ],
            examples: [
              "A dog, a fish and a maize plant are living things.",
              "A stone, a river and sunlight are non-living things."
            ],
            waecFocus: [
              "Classify items as living or non-living and justify your answer.",
              "State why movement alone is not a life process.",
              "List the basic needs of living things."
            ],
            memoryTip: "MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition."
          },
          {
            id: "g7-t1-6", unit: "2.1", page: "6", title: "Characteristics of Living Things", icon: "🧬",
            explanation: "All living things share certain basic characteristics or life processes. These characteristics are what make them different from non-living things.",
            points: [
              "Nutrition: taking in and using food for energy and growth.",
              "Respiration: releasing energy from food in the cells of the body.",
              "Excretion: removal of waste products such as carbon dioxide, urea and sweat.",
              "Growth: permanent increase in size and dry weight.",
              "Movement: changing position from one place to another.",
              "Irritability (sensitivity): responding to changes in the environment (stimuli).",
              "Reproduction: producing new individuals of the same kind.",
              "All of these processes happen together and continuously in living things.",
              "Combustion (burning) is NOT a life process even though it also releases energy."
            ],
            definitions: [
              "Stimulus: any change in the environment that causes an organism to respond.",
              "Metabolism: all the chemical reactions taking place in the body of a living thing.",
              "Waste product: a useless substance produced during metabolism."
            ],
            examples: [
              "A plant grows towards light (irritability) and makes food (nutrition).",
              "A dog pants to lose heat (excretion of heat) and runs away from fire (movement and irritability)."
            ],
            waecFocus: [
              "List and define all the characteristics of living things.",
              "Give examples that show each life process.",
              "Explain why combustion is not a life process."
            ],
            memoryTip: "MRS GREN never lies — those seven always appear together in living things."
          },
          {
            id: "g7-t1-7", unit: "2.2", page: "6", title: "Differences Between Plants and Animals", icon: "🌸",
            explanation: "Plants and animals are both living things, but they differ in how they feed, move, respond and build their bodies. These differences help scientists place them in different groups.",
            points: [
              "Plants make their own food (they are autotrophic); animals depend on other organisms for food (heterotrophic).",
              "Most animals move from place to place freely; most plants are fixed in one place.",
              "Plants have cell walls, chloroplasts and a large permanent vacuole; animal cells have none of these.",
              "Plants store food mainly as starch; animals store food as glycogen and fat.",
              "Plants grow more at the tips (indeterminate growth); animals grow evenly over the whole body.",
              "Animals have a nervous system that responds quickly; plants respond slowly to stimuli.",
              "Plants give off oxygen during the day and carbon dioxide at night; animals always give off carbon dioxide."
            ],
            definitions: [
              "Autotroph: an organism that makes its own food, e.g. a green plant.",
              "Heterotroph: an organism that cannot make its own food and must eat others.",
              "Chlorophyll: the green pigment in leaves that traps light energy for photosynthesis."
            ],
            examples: [
              "A maize plant stays in the soil while a rabbit runs to find food.",
              "An onion cell has a cell wall; a cheek cell does not."
            ],
            waecFocus: [
              "State at least four differences between plants and animals.",
              "Give two structural differences between a plant cell and an animal cell.",
              "Explain the meaning of autotrophic and heterotrophic with examples."
            ],
            memoryTip: "Plants: wall, chlorophyll, big vacuole, starch, stay put."
          },
          {
            id: "g7-t1-8", unit: "2.3", page: "7", title: "Classification of Living Things", icon: "🗂️",
            explanation: "Classification is the grouping of living things into different categories based on the characteristics they share. It makes the study of thousands of organisms easier.",
            points: [
              "The levels of classification are kingdom, phylum, class, order, family, genus and species.",
              "The five kingdoms are Plantae, Animalia, Fungi, Protista and Monera.",
              "Animals are first grouped as vertebrates (with a backbone) or invertebrates (without a backbone).",
              "Vertebrates are grouped into fish, amphibians, reptiles, birds and mammals.",
              "Plants are grouped into cryptogams (no flowers/seeds) and phanerogams (produce flowers or seeds).",
              "Warm-blooded animals keep a constant body temperature; cold-blooded animals take the temperature of their surroundings.",
              "A species is a group of organisms that can interbreed to produce fertile offspring."
            ],
            definitions: [
              "Classification: grouping living things based on shared characteristics.",
              "Vertebrate: an animal with a backbone or vertebral column.",
              "Invertebrate: an animal without a backbone.",
              "Warm-blooded: animals that maintain a constant body temperature, e.g. birds and mammals."
            ],
            examples: [
              "A frog is an amphibian; a snake is a reptile; a dove is a bird; a rat is a mammal.",
              "A snail, a worm and a butterfly are invertebrates."
            ],
            waecFocus: [
              "State the levels of classification in order.",
              "Classify given animals into vertebrate classes.",
              "Give three differences between warm-blooded and cold-blooded animals."
            ],
            memoryTip: "Vertebrates: Fish, Amphibian, Reptile, Bird, Mammal = FARM... add Birds: FARB M."
          },
          {
            id: "g7-t1-9", image: "images/diagrams/parallax-error.svg", unit: "3.0", page: "9", title: "Measurement: Concepts and Instruments", icon: "📏",
            explanation: "Measurement is the comparison of an unknown quantity with a standard quantity called a unit. Accurate measurement is the foundation of every scientific experiment.",
            points: [
              "Every measurement has a numerical value and a unit.",
              "The common SI units are metre (length), kilogram (mass), second (time), litre/volume and degree Celsius (temperature).",
              "Length is measured with a metre rule, tape or Vernier callipers.",
              "Mass is measured with a beam balance or electronic balance; weight is measured with a spring balance.",
              "Volume of liquids is measured with a measuring cylinder or pipette; regular solids are measured with callipers.",
              "Time is measured with a stopwatch or clock.",
              "Zero error, parallax error and worn instruments are common sources of inaccurate measurement.",
              "Always read a scale at eye level to avoid parallax error."
            ],
            definitions: [
              "Measurement: comparison of a quantity with a standard unit.",
              "Unit: a standard quantity used as a reference in measurement.",
              "Accuracy: how close a measured value is to the true value.",
              "Parallax error: an error caused by reading a scale from an angle."
            ],
            examples: [
              "Reading a meniscus in a measuring cylinder at eye level.",
              "Using a wooden metre rule with a worn zero mark gives an unreliable result."
            ],
            waecFocus: [
              "Choose the correct instrument for a given measurement.",
              "State one precaution for each common measuring instrument.",
              "Explain parallax error and how to avoid it."
            ],
            memoryTip: "Length=rule, Mass=balance, Volume=cylinder, Time=stopwatch, Temp=thermometer."
          },
          {
            id: "g7-t1-10", unit: "3.1", page: "11", title: "Systems of Units of Measurement", icon: "⚖️",
            explanation: "A system of units is a complete set of agreed units used to measure physical quantities. The SI (Système International) system is the worldwide standard used in science.",
            points: [
              "The SI system has seven base units, of which the metre, kilogram and second are the most used at this level.",
              "Length: metre (m). Sub-units are cm, mm and km; 1 m = 100 cm = 1000 mm; 1 km = 1000 m.",
              "Mass: kilogram (kg). Sub-units are gram (g) and milligram (mg); 1 kg = 1000 g; 1 g = 1000 mg.",
              "Time: second (s). 1 minute = 60 s, 1 hour = 60 minutes.",
              "Volume: cubic metre (m³), cubic centimetre (cm³) and litre (L); 1 L = 1000 cm³.",
              "Temperature: degree Celsius (°C) in everyday work, kelvin (K) in advanced science.",
              "The CGS system uses centimetre, gram and second; the FPS system uses foot, pound and second."
            ],
            definitions: [
              "SI units: the international standard units agreed by scientists worldwide.",
              "Base unit: a unit chosen for a fundamental quantity such as length or time.",
              "Derived unit: a unit made by combining base units, e.g. speed = m/s."
            ],
            examples: [
              "Converting 2.5 m to cm: 2.5 × 100 = 250 cm.",
              "Converting 3 kg to milligrams: 3 × 1000 × 1000 = 3,000,000 mg."
            ],
            waecFocus: [
              "Convert between units of length, mass, time and volume.",
              "State the SI base units for length, mass and time.",
              "Perform calculations involving compound units such as m/s and g/cm³."
            ],
            memoryTip: "kilo = 1000, centi = 1/100, milli = 1/1000 — multiply or divide accordingly."
          },
          {
            id: "g7-t1-11", unit: "3.2", page: "11", title: "Concepts of Mass and Weight", icon: "🪨",
            explanation: "Mass and weight are often confused, but they are different. Mass is the amount of matter in an object, while weight is the force of gravity pulling on that matter.",
            points: [
              "Mass is measured in kilograms (kg) and does not change from place to place.",
              "Weight is a force measured in newtons (N) and changes with the strength of gravity.",
              "Weight = mass × gravitational field strength, written W = m × g.",
              "On earth g is about 10 N/kg (9.8 N/kg), on the moon it is about 1.6 N/kg.",
              "A beam balance measures mass; a spring balance measures weight.",
              "Mass is constant everywhere, so a 10 kg load is still 10 kg on the moon, but its weight is much less.",
              "An object has weight only when it is in a gravitational field."
            ],
            definitions: [
              "Mass: the quantity of matter in a body, measured in kg or g.",
              "Weight: the gravitational force acting on a mass, measured in newtons.",
              "Gravitational field strength (g): the force on unit mass due to gravity."
            ],
            examples: [
              "A 5 kg bag has weight W = 5 × 10 = 50 N on earth.",
              "On the moon the same bag weighs 5 × 1.6 = 8 N."
            ],
            waecFocus: [
              "State three differences between mass and weight.",
              "Calculate weight given mass and g (W = m × g).",
              "Explain why a person is lighter on the moon but mass stays the same."
            ],
            memoryTip: "Mass = what it is made of. Weight = how hard gravity pulls it."
          },
          {
            id: "g7-t1-12", unit: "3.3", page: "12", title: "Density", icon: "🧱",
            explanation: "Density tells how much mass is packed into a given volume of a substance. It explains why some objects float in water while others sink.",
            points: [
              "Density = mass ÷ volume, written ρ = m / V.",
              "The unit of density is g/cm³ for solids and kg/m³ for liquids and gases.",
              "1 g/cm³ = 1000 kg/m³.",
              "An object floats in a liquid if its density is less than the density of the liquid.",
              "An object sinks in a liquid if its density is greater than the density of the liquid.",
              "Density of water is 1 g/cm³; ice floats because ice has a density of about 0.9 g/cm³.",
              "To find the volume of an irregular solid, use displacement of water in a measuring cylinder.",
              "A density bottle (pycnometer) is used to find the density of small grains and liquids."
            ],
            definitions: [
              "Density: mass per unit volume of a substance.",
              "Displacement method: a way of measuring the volume of an irregular solid by the water it pushes aside.",
              "Relative density: the density of a substance compared with the density of water."
            ],
            examples: [
              "A 60 g stone occupying 20 cm³ has density 60 ÷ 20 = 3 g/cm³.",
              "Oil floats on water because oil (0.8 g/cm³) is less dense than water (1 g/cm³)."
            ],
            waecFocus: [
              "Calculate density, mass or volume using ρ = m / V.",
              "Predict whether an object will float or sink using densities.",
              "Describe how to find the volume of an irregular stone using a measuring cylinder."
            ],
            memoryTip: "ρ = m / V — Density is Mass divided by Volume. D-M-V."
          },
          {
            id: "g7-t1-13", image: "images/diagrams/distance-time-graph.svg", unit: "4.0", page: "14", title: "Measurement of Motion (Speed, Distance and Time)", icon: "🏃",
            explanation: "Motion is the change in position of an object with time. Speed tells how fast an object moves by comparing the distance covered with the time taken.",
            points: [
              "Speed = distance ÷ time, written v = d / t.",
              "The SI unit of speed is metres per second (m/s); km/h and cm/s are also used.",
              "1 m/s = 3.6 km/h.",
              "Distance is a scalar quantity (has size only); displacement is a vector quantity (size and direction).",
              "Speed is a scalar; velocity is speed in a stated direction.",
              "Average speed = total distance ÷ total time.",
              "Uniform (constant) speed covers equal distances in equal time intervals.",
              "A ticker tape timer or a stopwatch and metre rule are used to measure speed in the laboratory.",
              "A distance-time graph with a straight line through the origin shows uniform speed."
            ],
            definitions: [
              "Speed: distance covered per unit time.",
              "Velocity: speed in a stated direction.",
              "Distance: the total length of the path travelled.",
              "Displacement: the straight-line distance from start to finish, with direction."
            ],
            examples: [
              "A car covers 120 km in 2 hours: speed = 120 ÷ 2 = 60 km/h.",
              "A runner covers 100 m in 12.5 s: speed = 100 ÷ 12.5 = 8 m/s."
            ],
            waecFocus: [
              "Calculate speed, distance or time using the speed formula.",
              "Convert between m/s and km/h.",
              "Distinguish between distance and displacement, speed and velocity.",
              "Interpret a distance-time graph."
            ],
            memoryTip: "v = d / t. Triangle: d on top, v and t below — cover what you want."
          }
        ]
      },
      {
        id: "g7-t2",
        number: "Theme 2",
        title: "Matter",
        topics: [
          {
            id: "g7-t2-1", unit: "1.1", page: "16", title: "Particle Nature of Matter", icon: "⚛️",
            explanation: "All matter is made up of extremely tiny particles called atoms, molecules or ions. The arrangement and movement of these particles explain the properties we can see around us.",
            points: [
              "Matter is anything that has mass and occupies space.",
              "Particles of matter are too small to be seen with the naked eye.",
              "There are spaces between particles and they are constantly vibrating or moving.",
              "Different substances are made of different kinds of particles arranged differently.",
              "Particles attract each other — this is why solids hold their shape.",
              "The three common states of matter are solid, liquid and gas.",
              "Diffusion shows that particles move from where they are more concentrated to where they are less concentrated."
            ],
            definitions: [
              "Matter: anything that has mass and occupies space.",
              "Atom: the smallest particle of an element that keeps the properties of that element.",
              "Molecule: two or more atoms joined together.",
              "Diffusion: the movement of particles from a region of high concentration to a region of low concentration."
            ],
            examples: [
              "A drop of ink spreads through water by diffusion.",
              "Perfume smelled across a room shows gas particles moving."
            ],
            waecFocus: [
              "State the particle nature of matter.",
              "Give evidence that particles of matter are always moving.",
              "Explain diffusion using the particle theory."
            ],
            memoryTip: "Tiny + moving + spaces + attract = the four rules of particles."
          },
          {
            id: "g7-t2-2", image: "images/diagrams/particle-states.svg", unit: "1.2", page: "16", title: "Kinetic Particle Theory", icon: "🔥",
            explanation: "The kinetic particle theory states that all matter is made of particles that are continuously in motion. The higher the temperature, the faster the particles move and the more kinetic energy they have.",
            points: [
              "Particles in a solid vibrate about fixed positions and are closely packed.",
              "Particles in a liquid can slide over each other and are close together but random.",
              "Particles in a gas move freely at high speed and are far apart.",
              "Raising temperature increases the kinetic energy (speed) of particles.",
              "Cooling reduces kinetic energy until particles move very slowly.",
              "Kinetic energy is the energy a body has because it is moving.",
              "The theory explains melting, boiling, evaporation, expansion and contraction."
            ],
            definitions: [
              "Kinetic energy: energy possessed by a body due to its motion.",
              "Kinetic particle theory: the theory that matter is made of tiny particles in constant motion.",
              "Heat: the transfer of energy from a hotter body to a cooler body."
            ],
            examples: [
              "Water boils because particles gain enough energy to escape into the air.",
              "A balloon expands when warmed because gas particles move faster and push outwards."
            ],
            waecFocus: [
              "Describe the arrangement and motion of particles in solids, liquids and gases.",
              "Explain what happens to particles when a substance is heated or cooled.",
              "Use the kinetic particle theory to explain expansion of gases."
            ],
            memoryTip: "Solid = vibrate in place, Liquid = slide, Gas = fly free."
          },
          {
            id: "g7-t2-3", unit: "1.3", page: "17", title: "Changes in the States of Matter", icon: "🧊",
            explanation: "Matter can change from one state to another when heat is gained or lost. These changes are physical changes because the identity of the substance stays the same.",
            points: [
              "Melting: solid → liquid, heat is absorbed (melting point is fixed for a pure solid).",
              "Freezing/solidification: liquid → solid, heat is lost (freezing point equals melting point).",
              "Boiling/vaporisation: liquid → gas at a fixed boiling point.",
              "Evaporation: liquid → gas at any temperature, only at the surface.",
              "Condensation: gas → liquid, heat is lost (e.g. dew on a cold window).",
              "Sublimation: solid → gas directly without melting (e.g. camphor, dry ice, iodine).",
              "A heating curve shows a flat line during a change of state — temperature stays constant while heat is absorbed.",
              "Change of state is a physical change because the substance remains the same chemically."
            ],
            definitions: [
              "Melting point: the fixed temperature at which a solid melts into a liquid.",
              "Boiling point: the fixed temperature at which a liquid boils throughout.",
              "Latent heat: the hidden heat absorbed or released during a change of state.",
              "Sublimation: change directly from solid to gas (or gas to solid)."
            ],
            examples: [
              "Ice melts at 0 °C and water boils at 100 °C at standard pressure.",
              "Naphthalene balls in a wardrobe disappear by sublimation."
            ],
            waecFocus: [
              "Name and describe each change of state with the direction of heat change.",
              "Distinguish between boiling and evaporation.",
              "Sketch or interpret a heating/cooling curve for water."
            ],
            memoryTip: "Solid → Liquid → Gas: add heat. Reverse: remove heat. Sublimation skips the liquid."
          },
          {
            id: "g7-t2-4", unit: "1.4", page: "18", title: "Evaporation and Boiling", icon: "♨️",
            explanation: "Evaporation and boiling both change a liquid into a vapour, but they happen differently. Boiling occurs throughout the liquid at a fixed temperature, while evaporation happens only at the surface and at any temperature.",
            points: [
              "Evaporation occurs at all temperatures, boiling occurs only at the boiling point.",
              "Evaporation happens only at the surface; boiling happens throughout the liquid.",
              "Evaporation is a slow, gradual process; boiling is rapid and vigorous.",
              "Evaporation can be speeded up by increasing temperature, increasing surface area and blowing air over the surface.",
              "Boiling point of pure water is 100 °C at standard atmospheric pressure.",
              "Impurities raise the boiling point of a liquid.",
              "Evaporation causes cooling because the fastest (most energetic) particles escape, leaving the average energy lower.",
              "The cooling effect of evaporation is used in earthen pots, sweating and hanging wet clothes."
            ],
            definitions: [
              "Evaporation: change of liquid to gas at the surface, below the boiling point.",
              "Boiling: change of liquid to gas throughout the liquid at the boiling point.",
              "Boiling point: the constant temperature at which a liquid boils."
            ],
            examples: [
              "Puddles dry up on a hot, windy day by evaporation.",
              "Water in a kettle boils vigorously at 100 °C."
            ],
            waecFocus: [
              "Give four differences between boiling and evaporation.",
              "State three factors that increase the rate of evaporation.",
              "Explain why evaporation causes cooling."
            ],
            memoryTip: "Boiling = everywhere + fixed temp. Evaporation = surface + any temp."
          },
          {
            id: "g7-t2-5", unit: "2.0", page: "19", title: "Forces: Definition, Effects and Measurement", icon: "💪",
            explanation: "A force is a push or a pull that acts on an object. Forces can start motion, stop motion, change the speed of motion, change direction or change the shape of an object.",
            points: [
              "Force is measured in newtons (N) using a spring balance.",
              "Force is a vector quantity — it has both magnitude and direction.",
              "Effects of force: it can start movement, stop movement, change speed, change direction and change shape.",
              "Balanced forces acting on an object produce no change in its state of motion.",
              "Unbalanced forces produce acceleration (change in speed or direction).",
              "Friction is a force that opposes motion between two surfaces in contact.",
              "Weight is the force of gravity acting on a mass (W = m × g).",
              "Upthrust is the upward force a fluid exerts on an object placed in it.",
              "Effects of friction: it produces heat, wears surfaces and wastes energy."
            ],
            definitions: [
              "Force: a push or pull that changes the state of rest or motion of a body.",
              "Net resultant force: the single force that has the same effect as all the forces acting together.",
              "Friction: the force that opposes the sliding of one surface over another.",
              "Upthrust: the upward force exerted by a liquid or gas on an immersed body."
            ],
            examples: [
              "A book pushed off a table shows a force changing motion.",
              "A car brakes and slows down because friction opposes the wheels."
            ],
            waecFocus: [
              "Define force and state its SI unit.",
              "List the effects of force on an object.",
              "Explain the advantages and disadvantages of friction."
            ],
            memoryTip: "Force effects: Start, Stop, Steer, Stretch (shape)."
          },
          {
            id: "g7-t2-6", unit: "2.1", page: "19", title: "Types of Forces", icon: "🪢",
            explanation: "Forces are grouped by how they act and what causes them. At this level you should know contact forces such as friction, tension and upthrust, and non-contact forces such as gravity, magnetism and electrostatic force.",
            points: [
              "Contact forces act only when objects touch each other (friction, tension, normal reaction, upthrust).",
              "Non-contact forces act over a distance (gravity, magnetism, electrostatic force).",
              "Gravitational force pulls objects towards the centre of the earth.",
              "Magnetic force acts between magnetic poles — like poles repel, unlike poles attract.",
              "Electrostatic force acts between charged bodies — like charges repel, unlike charges attract.",
              "Tension is the pull transmitted through a string, rope or cable.",
              "Normal reaction force acts at right angles to a surface in contact.",
              "Air resistance is a form of friction acting on objects moving through air."
            ],
            definitions: [
              "Gravity: the force of attraction between the earth and objects near it.",
              "Magnetism: the force of attraction or repulsion between magnets or magnetic materials.",
              "Electrostatic force: the force between electrically charged bodies.",
              "Tension: the pull inside a stretched string, rope or spring."
            ],
            examples: [
              "A compass needle turns because of the earth's magnetic force.",
              "A balloon sticks to a wall after being rubbed, showing electrostatic force."
            ],
            waecFocus: [
              "Classify given forces as contact or non-contact.",
              "State the rules of attraction and repulsion for magnets and charges.",
              "Give two examples of each type of force."
            ],
            memoryTip: "Non-contact big three: Gravity, Magnetism, Electrostatic."
          },
          {
            id: "g7-t2-7", unit: "2.2", page: "19", title: "Contact and Non-Contact Forces", icon: "🧲",
            explanation: "Contact forces need the two objects to touch before they can act, while non-contact forces act across empty space. Identifying which is which is a common exam question.",
            points: [
              "Examples of contact forces: friction, air resistance, tension, upthrust, normal reaction, push and pull.",
              "Examples of non-contact forces: gravitational, magnetic and electrostatic forces.",
              "You feel friction only when surfaces rub together.",
              "You feel the earth's pull without touching it — that is gravity.",
              "A magnet lifts paper clips without touching them — magnetic non-contact force.",
              "Two like charged bodies repel each other without touching — electrostatic force.",
              "Contact forces always act along the line joining the touching surfaces."
            ],
            definitions: [
              "Contact force: a force that acts only when two bodies are touching.",
              "Non-contact force: a force that acts over a distance without touching."
            ],
            examples: [
              "Rubbing hands together = contact force (friction) producing heat.",
              "Fruit hanging on a tree = non-contact force (gravity)."
            ],
            waecFocus: [
              "Sort a list of forces into contact and non-contact.",
              "Explain why gravity is a non-contact force.",
              "Give one everyday example of each non-contact force."
            ],
            memoryTip: "If they must touch = contact. If they act across space = non-contact."
          },
          {
            id: "g7-t2-8", image: "images/diagrams/lever-classes.svg", unit: "2.3", page: "21", title: "Turning Effect of Forces", icon: "🔄",
            explanation: "A force applied away from a pivot can make an object turn or rotate. This is called the turning effect of a force and is measured by the moment of the force.",
            points: [
              "Moment of a force = force × perpendicular distance from the pivot, written M = F × d.",
              "The unit of moment is newton metre (N·m).",
              "The pivot (or fulcrum) is the point about which the object turns.",
              "A couple is two equal, parallel forces acting in opposite directions with different lines of action.",
              "Increasing either the force or the distance from the pivot increases the moment.",
              "The turning effect is used in a see-saw, a spanner, a door handle, a pair of scissors and a wheelbarrow.",
              "Clockwise moments and anticlockwise moments act in opposite directions."
            ],
            definitions: [
              "Moment: the turning effect of a force about a pivot.",
              "Pivot (fulcrum): the fixed point about which a body turns.",
              "Couple: two equal forces acting in opposite directions that produce a turning effect."
            ],
            examples: [
              "A 20 N force applied 0.3 m from a pivot gives moment 20 × 0.3 = 6 N·m.",
              "A long spanner turns a nut more easily because the distance is greater."
            ],
            waecFocus: [
              "Calculate the moment of a force about a pivot.",
              "Explain why a longer spanner is easier to use.",
              "Identify the pivot and the moments in a see-saw diagram."
            ],
            memoryTip: "Moment = Force × distance from pivot. Never use the slanted distance — use the perpendicular one."
          },
          {
            id: "g7-t2-9", unit: "2.4", page: "21", title: "Principle of Moments", icon: "⚖️",
            explanation: "The principle of moments states that for a body to be in equilibrium (not turning), the sum of the clockwise moments must be equal to the sum of the anticlockwise moments about any pivot.",
            points: [
              "At equilibrium: total clockwise moment = total anticlockwise moment.",
              "Also, total upward force = total downward force.",
              "This principle is used to solve beam balance, see-saw and hanging weight problems.",
              "Always take moments about the pivot so that the distance of the pivot force becomes zero.",
              "The unit is newton metre (N·m).",
              "A beam balance is in equilibrium when the masses on both pans are equal."
            ],
            definitions: [
              "Equilibrium: a state in which the resultant force and resultant moment on a body are both zero.",
              "Clockwise moment: a moment that would turn a body in the direction the hands of a clock move.",
              "Anticlockwise moment: a moment that would turn a body opposite to clock hands."
            ],
            examples: [
              "A 10 N weight at 2 m balances a 20 N weight at 1 m: 10 × 2 = 20 × 1 = 20 N·m.",
              "A 50 kg person sitting 2 m from the pivot of a see-saw balances a 100 kg child sitting 1 m away."
            ],
            waecFocus: [
              "Apply the principle of moments to find an unknown force or distance.",
              "State the two conditions for equilibrium of a body.",
              "Solve a labelled see-saw or beam diagram problem."
            ],
            memoryTip: "Clockwise must equal anticlockwise — balance the seesaw."
          },
          {
            id: "g7-t2-10", unit: "2.5", page: "23", title: "Application of Moments", icon: "🏗️",
            explanation: "The principle of moments is applied in many everyday tools and machines. Understanding it helps you explain why some tools are designed with long handles or wide bases.",
            points: [
              "A see-saw balances when the moments on both sides of the pivot are equal.",
              "A spanner has a long handle so the distance from the pivot is large and the moment is bigger.",
              "Scissors and pliers are pairs of levers with a pivot between the effort and load.",
              "A wheelbarrow reduces the effort needed because the load is closer to the pivot than the effort.",
              "A crowbar and a bottle opener are levers used to multiply force.",
              "A beam balance and a weighing scale use equal moments to compare masses.",
              "A wide base and low centre of gravity make a structure more stable."
            ],
            definitions: [
              "Lever: a rigid bar that turns about a fixed pivot.",
              "Effort: the force applied to a machine.",
              "Load: the force the machine works against.",
              "Stability: the ability of a body to resist toppling over."
            ],
            examples: [
              "A 30 N effort at 0.5 m lifts a 60 N load at 0.25 m: 30 × 0.5 = 60 × 0.25 = 15 N·m.",
              "A truck is more stable with a wide wheel base and a low centre of gravity."
            ],
            waecFocus: [
              "Explain the working of at least three devices using moments.",
              "Calculate the effort needed to lift a load with a given lever arrangement.",
              "State how to increase the stability of a body."
            ],
            memoryTip: "Long handle = big distance = small effort needed."
          }
        ]
      },
      {
        id: "g7-t3",
        number: "Theme 3",
        title: "Chemical Changes Part 1",
        topics: [
          {
            id: "g7-t3-1", unit: "1.0", page: "24", title: "Elements as Pure Substances", icon: "💎",
            explanation: "An element is a pure substance made of only one kind of atom that cannot be broken down into simpler substances by chemical means. There are about 118 known elements.",
            points: [
              "Elements are the simplest forms of matter and are the building blocks of everything.",
              "About 92 elements occur naturally; the rest are made artificially.",
              "Elements are classified as metals, non-metals and semi-metals (metalloids).",
              "Metals are good conductors of heat and electricity, shiny, malleable and ductile.",
              "Non-metals are poor conductors, dull, brittle (if solid) and are insulators.",
              "Each element has a symbol, usually the first one or two letters of its name (Na for sodium, Fe for iron, Au for gold).",
              "Common elements: oxygen O, hydrogen H, carbon C, nitrogen N, iron Fe, copper Cu, gold Au, calcium Ca.",
              "An element can exist as atoms (noble gases) or molecules (O₂, N₂)."
            ],
            definitions: [
              "Element: a pure substance that cannot be split into simpler substances chemically.",
              "Atom: the smallest particle of an element that retains its properties.",
              "Symbol: a one- or two-letter abbreviation of an element's name.",
              "Metal: an element that is a good conductor of heat and electricity."
            ],
            examples: [
              "Copper wire conducts electricity — copper is an element.",
              "Oxygen gas (O₂), gold (Au) and carbon (C) are elements."
            ],
            waecFocus: [
              "Define an element and state that it is a pure substance.",
              "Classify given substances as metals or non-metals.",
              "Write the symbols of common elements."
            ],
            memoryTip: "Element = ONE kind of atom only. If you can split it chemically, it is not an element."
          },
          {
            id: "g7-t3-2", unit: "2.0", page: "25", title: "Compounds", icon: "🧪",
            explanation: "A compound is a pure substance formed when two or more different elements chemically combine in a fixed ratio. The properties of a compound are completely different from those of its elements.",
            points: [
              "In a compound, elements are chemically joined and cannot be separated by physical means.",
              "The ratio of atoms in a compound is always fixed (law of definite proportions).",
              "Compounds have new properties not shown by the elements that make them.",
              "Examples: water H₂O (hydrogen + oxygen), sodium chloride NaCl (sodium + chlorine), carbon dioxide CO₂, glucose C₆H₁₂O₆.",
              "Compounds can be separated into elements only by chemical reactions such as electrolysis.",
              "Some compounds are held by ionic bonds (NaCl) and others by covalent bonds (H₂O).",
              "Compounds have fixed melting and boiling points, which shows they are pure substances."
            ],
            definitions: [
              "Compound: a pure substance made of two or more elements chemically combined in a fixed ratio.",
              "Chemical combination: the joining of atoms to form new substances.",
              "Fixed ratio: the constant proportion by mass in which elements combine."
            ],
            examples: [
              "Water is formed when hydrogen burns in oxygen: 2H₂ + O₂ → 2H₂O.",
              "Common salt is formed from sodium and chlorine."
            ],
            waecFocus: [
              "Define a compound and give four examples.",
              "State three differences between a compound and a mixture.",
              "Explain that compounds have fixed composition."
            ],
            memoryTip: "Compound = chemically joined + fixed ratio + new properties."
          },
          {
            id: "g7-t3-3", unit: "3.0", page: "26", title: "Mixtures as Impure Substances", icon: "🥤",
            explanation: "A mixture is a material made by physically combining two or more substances that are not chemically united. Each substance in a mixture keeps its own properties.",
            points: [
              "In a mixture the substances can be present in any ratio.",
              "The components of a mixture can be separated by physical methods.",
              "Mixtures may be solid-solid, solid-liquid, liquid-liquid or gas mixtures.",
              "Examples: air (gas mixture), sea water (salt + water), sand + iron filings, brass (copper + zinc), petrol + oil.",
              "Mixtures do not have a fixed melting or boiling point.",
              "No heat or light energy change is needed to form a mixture.",
              "Some mixtures are homogeneous (uniform throughout, e.g. air) and some are heterogeneous (visible parts, e.g. sand and water)."
            ],
            definitions: [
              "Mixture: a material containing two or more substances combined physically, not chemically.",
              "Homogeneous mixture: a mixture that is uniform throughout and has one phase.",
              "Heterogeneous mixture: a mixture in which the components can be seen separately.",
              "Solvent: the substance that dissolves to form a solution.",
              "Solute: the substance that is dissolved."
            ],
            examples: [
              "Salt dissolved in water is a homogeneous mixture (solution).",
              "Sand mixed with water is a heterogeneous mixture."
            ],
            waecFocus: [
              "Define a mixture and contrast it with a compound.",
              "Give four examples of mixtures and state how each can be separated.",
              "Explain why mixtures do not have fixed boiling points."
            ],
            memoryTip: "Mixture = physical + any ratio + easy to separate."
          },
          {
            id: "g7-t3-4", unit: "4.0", page: "26", title: "Separation of Mixtures", icon: "⚗️",
            explanation: "Mixtures are separated using physical methods chosen according to the differences between the substances involved — differences in state, size, boiling point, magnetic property or solubility.",
            points: [
              "Filtration separates an insoluble solid from a liquid (sand from water).",
              "Evaporation separates a soluble solid from its solvent (salt from water).",
              "Distillation separates a liquid from a dissolved solid and can separate liquids with different boiling points.",
              "Chromatography separates coloured dyes or inks that are soluble in a solvent.",
              "Sieving separates solids of different particle sizes (flour from bran).",
              "Magnetism separates magnetic from non-magnetic materials (iron filings from sulphur).",
              "Sublimation separates a substance that sublimes from one that does not (iodine from sand).",
              "Decantation and a separating funnel separate immiscible liquids such as oil and water.",
              "Paper chromatography uses the different distances dyes travel up the paper to identify them."
            ],
            definitions: [
              "Filtration: separation of an insoluble solid from a liquid using filter paper.",
              "Distillation: separation of a liquid from a solution by evaporating and condensing it.",
              "Chromatography: separation of substances by their different rates of travel through a medium.",
              "Miscible: liquids that mix together in all proportions (e.g. water and ethanol)."
            ],
            examples: [
              "Separating sand and water: filtration, then evaporation of any dissolved salts.",
              "Separating salt from water: evaporation or distillation.",
              "Separating ink colours: paper chromatography with water as the solvent."
            ],
            waecFocus: [
              "Choose the correct separation technique for a given mixture.",
              "Describe the apparatus and steps for filtration and simple distillation.",
              "Explain how chromatography separates ink dyes."
            ],
            memoryTip: "Insoluble→Filter, Soluble→Evaporate, Colours→Chromatography, Magnetic→Magnet, Different sizes→Sieve."
          }
        ]
      },
      {
        id: "g7-t4",
        number: "Theme 4",
        title: "Air and Water",
        topics: [
          {
            id: "g7-t4-1", unit: "1.1", page: "31", title: "General Properties and Composition of Air", icon: "🌬️",
            explanation: "Air is a mixture of gases that surrounds the earth and is essential for life. It is colourless, odourless and has no fixed composition, although its main components occur in fairly constant proportions.",
            points: [
              "Air is about 78% nitrogen, 21% oxygen, 0.9% argon and about 0.04% carbon dioxide by volume.",
              "Air also contains variable amounts of water vapour and dust.",
              "Air has mass and occupies space — a deflating balloon proves air has mass.",
              "Air expands when heated and contracts when cooled.",
              "Air exerts pressure in all directions (atmospheric pressure).",
              "Oxygen supports combustion and respiration; nitrogen does not support burning.",
              "Air is a mixture, not a compound, because its components can be separated physically.",
              "The component gases of air keep their own properties in the mixture."
            ],
            definitions: [
              "Atmospheric pressure: the pressure exerted by the weight of the atmosphere above a surface.",
              "Combustion: the chemical process of burning in the presence of oxygen.",
              "Nitrogen: a unreactive gas making up about 78% of air; it dilutes oxygen and is used in fertilisers."
            ],
            examples: [
              "A bell jar experiment with a candle shows oxygen is used up and pressure falls.",
              "A balloon expands when taken from a cold room into the sun."
            ],
            waecFocus: [
              "State the percentage composition of air by volume.",
              "Give four physical properties of air.",
              "Explain an experiment showing that air has mass and pressure."
            ],
            memoryTip: "Air = 78 Nitrogen, 21 Oxygen, the rest is a trace."
          },
          {
            id: "g7-t4-2", unit: "1.2", page: "31", title: "Properties and Uses of Some Gases", icon: "🫧",
            explanation: "The common gases — oxygen, nitrogen, carbon dioxide, hydrogen and water vapour — each have characteristic properties that determine how they are used.",
            points: [
              "Oxygen: colourless, odourless, supports combustion and respiration; used in hospitals, welding, rocket fuel and steel making.",
              "Nitrogen: colourless, unreactive, makes up 78% of air; used to preserve food, in fertilisers and to inflate tyres.",
              "Carbon dioxide: does not support burning, denser than air, turns lime water milky; used in fire extinguishers, drinks and greenhouses.",
              "Hydrogen: lightest gas, highly flammable, burns with a pale blue flame; used in weather balloons and rocket fuel.",
              "Water vapour: invisible gas in the air; its presence is shown by condensation on a cold surface.",
              "Helium is used instead of hydrogen in balloons because it is non-flammable.",
              "Carbon dioxide is used in photosynthesis by green plants."
            ],
            definitions: [
              "Supports combustion: allows a burning substance to keep burning.",
              "Denser than air: has a greater mass per unit volume than air.",
              "Flammable: capable of catching fire easily."
            ],
            examples: [
              "A glowing splint relights in oxygen.",
              "A lit splint burns with a squeaky pop in hydrogen.",
              "Lime water turns milky in carbon dioxide."
            ],
            waecFocus: [
              "List two properties and two uses of oxygen, nitrogen and carbon dioxide.",
              "Explain why hydrogen is not used to fill party balloons today.",
              "Describe the test for carbon dioxide."
            ],
            memoryTip: "Oxygen relights splint, CO₂ milky lime water, Hydrogen squeaky pop."
          },
          {
            id: "g7-t4-3", unit: "1.2", page: "33", title: "Laboratory Tests of Some Gases", icon: "🔬",
            explanation: "Gases are identified in the laboratory by simple tests that produce a visible or audible change. Learning each test and its result is essential for exam questions.",
            points: [
              "Oxygen: a glowing splint relights when inserted into the gas jar.",
              "Hydrogen: a burning splint held at the mouth of the jar gives a squeaky pop.",
              "Carbon dioxide: gas passed through lime water turns it milky (chalky).",
              "Water vapour: a cold dry plate held over the gas shows drops of water forming.",
              "Chlorine: bleaches damp blue litmus paper white and has a pungent smell.",
              "Ammonia: turns damp red litmus paper blue and has a strong pungent smell.",
              "Tests must be carried out carefully and never inhale unknown gases directly —waft the gas towards your nose.",
              "Collect gases over water or by downward/upward delivery according to their density and solubility."
            ],
            definitions: [
              "Lime water: a suspension of calcium hydroxide used to test for carbon dioxide.",
              "Squeaky pop test: the audible test for hydrogen gas.",
              "Wafting: gently pushing gas towards the nose with a hand instead of inhaling directly."
            ],
            examples: [
              "Carbon dioxide is bubbled through lime water and it turns milky.",
              "A glowing splint is lowered into a jar of oxygen and bursts into flame."
            ],
            waecFocus: [
              "State the test and result for oxygen, hydrogen and carbon dioxide.",
              "Describe how to test a gas safely.",
              "Explain why lime water turns milky in carbon dioxide."
            ],
            memoryTip: "Oxygen = relights, Hydrogen = pop, CO₂ = milky lime water."
          },
          {
            id: "g7-t4-4", unit: "2.0", page: "34", title: "Water: Properties, Sources and Uses", icon: "💧",
            explanation: "Water is a chemical compound of hydrogen and oxygen (H₂O) and is the most important liquid on earth. Nearly all living processes depend on it.",
            points: [
              "Water is colourless, odourless and tasteless when pure.",
              "It boils at 100 °C and freezes at 0 °C at standard pressure.",
              "Water is a good solvent — many substances dissolve in it.",
              "Pure water is a poor conductor of electricity, but water containing dissolved salts conducts.",
              "Water expands when it freezes, so ice is less dense than water and floats.",
              "Sources: rain water, rivers, lakes, wells, springs, boreholes and the sea.",
              "Uses: drinking, washing, irrigation, generating electricity, transporting goods and in industry.",
              "Rain water is the purest naturally occurring water; sea water contains dissolved salts.",
              "Natural water contains dissolved air, minerals and sometimes micro-organisms — it is a mixture."
            ],
            definitions: [
              "Solvent: a liquid capable of dissolving other substances.",
              "Universal solvent: water, because it dissolves more substances than any other liquid.",
              "Potable water: water that is safe for drinking.",
              "Distilled water: pure water obtained by distillation."
            ],
            examples: [
              "Salt dissolves in water but does not evaporate, leaving crystals behind.",
              "Water pipes burst in cold weather because water expands on freezing."
            ],
            waecFocus: [
              "State four physical properties of water.",
              "Give four uses of water.",
              "Explain why pure water does not conduct electricity but tap water does."
            ],
            memoryTip: "Water boils 100, freezes 0, expands on freezing, dissolves almost everything."
          },
          {
            id: "g7-t4-5", image: "images/diagrams/water-cycle.svg", unit: "2.1", page: "36", title: "The Water Cycle", icon: "🌊",
            explanation: "The water cycle is the continuous movement of water from the earth to the atmosphere and back again. Energy from the sun drives the cycle, and gravity brings the water back down.",
            points: [
              "Evaporation: the sun heats water in seas, lakes and rivers, turning it into water vapour.",
              "Transpiration: plants release water vapour through their leaves.",
              "Condensation: rising vapour cools high in the atmosphere and forms tiny droplets making clouds.",
              "Precipitation: droplets combine and fall as rain, snow, hail or dew.",
              "Collection: water runs off into rivers, lakes, oceans and soaks into the ground as groundwater.",
              "Run-off/overflow: excess water flows over the surface into rivers and back to the sea.",
              "The cycle repeats endlessly and the total amount of water on earth stays practically constant.",
              "Interception and infiltration describe water caught by plants and soaking into the soil."
            ],
            definitions: [
              "Evaporation: change of liquid water into vapour by heat.",
              "Transpiration: loss of water vapour from the leaves of plants.",
              "Condensation: cooling of vapour into liquid droplets.",
              "Precipitation: water falling from clouds as rain, snow or hail.",
              "Groundwater: water stored underground in porous rocks and soil."
            ],
            examples: [
              "Puddles drying after rain shows evaporation.",
              "Dew on grass in the morning shows condensation near the ground."
            ],
            waecFocus: [
              "Name and describe the four main stages of the water cycle.",
              "Explain the role of the sun in the water cycle.",
              "Distinguish between evaporation and transpiration."
            ],
            memoryTip: "Evaporate → Condense → Precipitate → Collect. Sun up, water up; cool down, water down."
          }
        ]
      }
      ,
      {
        id: "g7-t5",
        number: "Theme 5",
        title: "Ecology 1",
        topics: [
          {
            id: "g7-t5-1", unit: "1.1", page: "37", title: "Definitions and Basic Ecological Concepts", icon: "🌍",
            explanation: "Ecology is the study of how living things relate to one another and to their surroundings. It explains how organisms obtain food, avoid enemies and survive in their environment.",
            points: [
              "An organism is any living thing; a population is all organisms of one species in an area.",
              "A community is all the populations living together in one area.",
              "An ecosystem is the community of living things together with the non-living surroundings.",
              "Habitat is the natural home of an organism where it finds food, water and shelter.",
              "Niche is the role an organism plays in its habitat.",
              "An environment includes both biotic (living) and abiotic (non-living) factors.",
              "Adaptation is a feature that helps an organism survive in its habitat.",
              "Ecology helps us manage resources, control pollution and conserve wildlife."
            ],
            definitions: [
              "Ecology: the study of the relationship between living organisms and their environment.",
              "Ecosystem: living things plus their non-living environment acting together.",
              "Habitat: the particular place where an organism lives.",
              "Population: all members of the same species living in one area at the same time.",
              "Niche: the function or role of an organism within its habitat."
            ],
            examples: [
              "A pond is an ecosystem containing fish, algae, insects, water and sunlight.",
              "A lion's niche is that of a top predator controlling herbivore numbers."
            ],
            waecFocus: [
              "Define ecology and state why it is important.",
              "Distinguish between habitat and niche.",
              "Explain the terms organism, population, community and ecosystem."
            ],
            memoryTip: "Organism → Population → Community → Ecosystem: it keeps getting bigger."
          },
          {
            id: "g7-t5-2", unit: "1.2", page: "37", title: "Biotic Components of an Ecosystem", icon: "🦠",
            explanation: "Biotic components are the living parts of an ecosystem. They are grouped by the way they obtain food: producers, consumers, decomposers and detritivores.",
            points: [
              "Producers (autotrophs) make their own food, mainly green plants using photosynthesis.",
              "Consumers (heterotrophs) feed on other organisms.",
              "Primary consumers eat producers and are herbivores (grasshopper, rabbit).",
              "Secondary consumers eat herbivores and are carnivores or omnivores (frog, rat).",
              "Tertiary consumers eat other carnivores (eagle, lion) and are usually top predators.",
              "Decomposers (bacteria and fungi) break down dead organisms and waste.",
              "Detritivores (earthworm, millipede) feed on dead organic matter (detritus).",
              "Parasites live on or in a host and feed on it without killing it immediately."
            ],
            definitions: [
              "Producer: an organism that makes its own food, e.g. a green plant.",
              "Consumer: an organism that cannot make its own food and must eat others.",
              "Decomposer: an organism that breaks down dead matter into simpler substances.",
              "Herbivore: an animal that feeds only on plants.",
              "Carnivore: an animal that feeds only on other animals.",
              "Omnivore: an animal that feeds on both plants and animals."
            ],
            examples: [
              "Grass → grasshopper → frog → snake → eagle is a chain of consumers.",
              "Fungi rotting a fallen log are decomposers."
            ],
            waecFocus: [
              "Classify organisms as producers, consumers or decomposers.",
              "Give examples of herbivores, carnivores and omnivores.",
              "Explain the importance of decomposers in an ecosystem."
            ],
            memoryTip: "Producers make, Consumers take, Decomposers break."
          },
          {
            id: "g7-t5-3", image: "images/diagrams/food-chain.svg", unit: "1.3", page: "38", title: "Food Chains and Food Webs", icon: "🔗",
            explanation: "A food chain shows the single path of energy as one organism eats another, while a food web shows all the food chains in a habitat joined together.",
            points: [
              "A food chain always starts with a producer (the source of energy from the sun).",
              "Arrows in a food chain point in the direction energy is transferred — from the eaten to the eater.",
              "Producers → primary consumer → secondary consumer → tertiary consumer → top predator.",
              "Decomposers act at every level, breaking down waste and dead organisms.",
              "A food web is a network of interconnecting food chains in a habitat.",
              "Only about 10% of the energy at one trophic level is passed to the next level.",
              "If one link is removed, the whole web is disturbed.",
              "Apex predators keep the population of other animals in check."
            ],
            definitions: [
              "Food chain: the linear sequence of organisms through which energy and matter pass.",
              "Food web: a network of many interlinked food chains in a habitat.",
              "Trophic level: the position an organism occupies in a food chain.",
              "Apex predator: a predator at the top of a food chain with no natural enemy."
            ],
            examples: [
              "Grass → goat → human.",
              "Leaves → caterpillar → chicken → hawk.",
              "In a savanna web, grass feeds both zebras and rodents, which feed lions and eagles."
            ],
            waecFocus: [
              "Draw a food chain and explain what the arrows represent.",
              "Distinguish between a food chain and a food web.",
              "Predict the effect of removing one organism from a food chain."
            ],
            memoryTip: "Arrow points to the EATER — energy flows to whoever takes it."
          },
          {
            id: "g7-t5-4", unit: "1.4", page: "38", title: "Abiotic (Ecological) Factors", icon: "☀️",
            explanation: "Abiotic factors are the non-living parts of an environment that affect how organisms live. They include physical conditions such as light, temperature, water, air, soil and pH.",
            points: [
              "Light is needed for photosynthesis and affects the distribution of plants.",
              "Temperature influences enzyme activity, growth and the behaviour of animals.",
              "Water and humidity are essential for life and affect transpiration and germination.",
              "Atmospheric pressure affects breathing and weather conditions.",
              "Soil type, pH and mineral salts determine which plants can grow.",
              "Wind affects pollination, transpiration, seed dispersal and rate of evaporation.",
              "Salinity (salt concentration) determines which organisms can live in a habitat.",
              "Abiotic factors limit the growth and distribution of living things."
            ],
            definitions: [
              "Abiotic factor: a non-living physical or chemical factor in an environment.",
              "Biotic factor: a living factor in an environment.",
              "Salinity: the amount of salt dissolved in water or soil.",
              "pH: a measure of how acidic or alkaline a substance is."
            ],
            examples: [
              "Cacti survive in deserts because they are adapted to low water availability.",
              "Fish die in water with low dissolved oxygen and high temperature."
            ],
            waecFocus: [
              "List six abiotic factors of a habitat.",
              "Explain how temperature and light affect living organisms.",
              "Distinguish between abiotic and biotic factors with two examples each."
            ],
            memoryTip: "Abiotic = not alive: light, heat, water, air, soil, salt."
          }
        ]
      },
      {
        id: "g7-t6",
        number: "Theme 6",
        title: "Food Part 1",
        topics: [
          {
            id: "g7-t6-1", unit: "1.1", page: "40", title: "Main Classes, Sources and Functions of Food", icon: "🍽️",
            explanation: "Food is any substance eaten to provide energy, build the body and regulate body processes. The main classes of food are carbohydrates, proteins, fats and oils, vitamins, minerals and water.",
            points: [
              "Carbohydrates give energy; they are the body's main and cheapest source of energy (4 kcal/g).",
              "Sources of carbohydrates: rice, yam, maize, cassava, bread, potatoes, sugar.",
              "Proteins build and repair body tissues and are needed for growth (4 kcal/g).",
              "Sources of proteins: meat, fish, eggs, beans, groundnuts, milk, soya beans.",
              "Fats and oils store energy and keep the body warm (9 kcal/g — more than twice carbohydrate).",
              "Sources of fats: butter, margarine, oil, cheese, palm oil, groundnut oil.",
              "Vitamins protect the body, regulate body processes and prevent deficiency diseases.",
              "Minerals build teeth and bones and keep the blood and nerves healthy.",
              "Water regulates body temperature and is a medium for chemical reactions in the body.",
              "Roughage (fibre) helps movement of food through the alimentary canal."
            ],
            definitions: [
              "Nutrient: a chemical substance in food that the body needs for growth and health.",
              "Carbohydrate: an energy-rich food made of carbon, hydrogen and oxygen.",
              "Protein: a body-building food made of carbon, hydrogen, oxygen and nitrogen.",
              "Roughage: indigestible fibre that adds bulk to faeces."
            ],
            examples: [
              "A meal of rice and beans supplies carbohydrate for energy and protein for growth.",
              "An athlete eats carbohydrate-rich food before a race for quick energy."
            ],
            waecFocus: [
              "Name the six main classes of food and state the function of each.",
              "Give three sources of each main class of food.",
              "Explain why fats give more energy than carbohydrates."
            ],
            memoryTip: "Carbs = energy, Protein = build, Fats = store, Vitamins = protect, Minerals = bones, Water = medium."
          },
          {
            id: "g7-t6-2", unit: "1.2", page: "40", title: "Other Classes of Food Substances", icon: "🥗",
            explanation: "Beyond the main classes, food also contains vitamins, minerals, water and roughage, each of which plays a special role in keeping the body healthy.",
            points: [
              "Vitamins are needed in small amounts and most cannot be made by the body.",
              "Vitamin A prevents night blindness and keeps the skin healthy — carrots, liver, palm oil, eggs.",
              "Vitamin B complex prevents beri-beri and helps release energy — whole grains, beans, meat.",
              "Vitamin C prevents scurvy and heals wounds — citrus fruits, guava, tomatoes, pepper.",
              "Vitamin D prevents rickets (soft bones) — sunlight, fish, eggs, milk.",
              "Vitamin K helps blood to clot — green leafy vegetables.",
              "Minerals: calcium (bones/teeth), iron (haemoglobin in blood), iodine (thyroid gland), sodium (body salts).",
              "Water makes up about 60-70% of the body weight and is lost through urine, sweat and breathing.",
              "Roughage/fibre adds bulk to food and prevents constipation.",
              "Vitamins A, D, E and K are fat-soluble; B and C are water-soluble."
            ],
            definitions: [
              "Vitamin: an organic nutrient needed in small amounts to prevent deficiency disease.",
              "Mineral: an inorganic nutrient needed for body structure and regulation.",
              "Deficiency disease: an illness caused by lack of a particular nutrient over a long period.",
              "Roughage: the indigestible part of food that adds bulk."
            ],
            examples: [
              "Lack of vitamin C causes bleeding gums (scurvy).",
              "Lack of iron in the blood causes anaemia."
            ],
            waecFocus: [
              "Name the deficiency disease caused by lack of vitamins A, C, D and iron.",
              "Give two food sources for each vitamin mentioned.",
              "State the function of roughage in the diet."
            ],
            memoryTip: "A=eyes, C=gums, D=bones, K=clotting, Iron=blood, Iodine=thyroid."
          },
          {
            id: "g7-t6-3", unit: "1.3", page: "41", title: "Diet and Balanced Diet", icon: "🥦",
            explanation: "A diet is everything a person eats and drinks. A balanced diet contains all the classes of food in the correct proportions for a particular person's age, size, sex and activity.",
            points: [
              "A balanced diet contains carbohydrates, proteins, fats, vitamins, minerals, water and roughage.",
              "The proportions needed vary with age, sex, occupation, climate and state of health.",
              "Children need more protein for growth; athletes need more carbohydrate for energy.",
              "Energy requirements are highest for young adults doing heavy work and lowest for elderly people.",
              "A malnourished diet is either too little, too much or unbalanced food.",
              "Obesity results from taking in more energy than the body uses.",
              "A starvation diet lacks one or more nutrients and causes disease.",
              "Meals should be regular and should include a variety of foods from different groups."
            ],
            definitions: [
              "Balanced diet: a diet containing all classes of food in the right proportions.",
              "Malnutrition: poor health caused by an unbalanced or inadequate diet.",
              "Basal metabolic rate: the rate at which the body uses energy when at rest.",
              "Energy requirement: the amount of energy the body needs in a day (kJ or kcal)."
            ],
            examples: [
              "A diet of only rice and oil lacks protein, vitamins and minerals — it is not balanced.",
              "A pregnant woman needs extra protein, iron and calcium."
            ],
            waecFocus: [
              "Define a balanced diet and state why it differs between people.",
              "Explain how age, sex and activity affect energy needs.",
              "Suggest a balanced one-day meal plan for a school child."
            ],
            memoryTip: "Balance = variety + right amounts, not just lots of food."
          }
        ]
      },
      {
        id: "g7-t7",
        number: "Theme 7",
        title: "Human Body — Sense Organs",
        topics: [
          {
            id: "g7-t7-1", image: "images/diagrams/human-eye.svg", unit: "1.1", page: "43", title: "Structure and Functions of the Human Eye", icon: "👁️",
            explanation: "The eye is the organ of sight. Its parts work together to focus light from objects onto the retina, where the image is formed and sent to the brain.",
            points: [
              "The eyeball is roughly spherical and protected by the eyelid, eyebrow and eyelashes.",
              "The cornea is the clear front part that lets light in and does most of the focusing.",
              "The iris is the coloured part that controls the size of the pupil.",
              "The pupil is the hole in the centre of the iris that allows light to enter.",
              "The lens is transparent and changes shape to focus near and far objects.",
              "The retina is the light-sensitive layer at the back where the image forms.",
              "Rods see in dim light and give grey vision; cones see colour and need bright light.",
              "The optic nerve carries the message to the brain, where it is interpreted.",
              "The conjunctiva covers the eye and keeps it moist; the aqueous humour is a fluid that nourishes it.",
              "The eye is like a camera: cornea/lens = lens, iris = aperture, retina = film."
            ],
            definitions: [
              "Retina: the light-sensitive screen at the back of the eye.",
              "Pupil: the aperture through which light enters the eye.",
              "Accommodation: the changing of the lens shape to focus objects at different distances.",
              "Optic nerve: the nerve that carries visual messages to the brain.",
              "Blind spot: the point on the retina where the optic nerve leaves; it is not sensitive to light."
            ],
            examples: [
              "In bright light the iris contracts, making the pupil small.",
              "For a near object the ciliary muscles contract and the lens becomes thicker (fatter).",
              "For a distant object the lens becomes thinner (flatter)."
            ],
            waecFocus: [
              "Name the parts of the eye and state the function of each.",
              "Explain how the eye adjusts to focus on near and distant objects.",
              "State what happens to the pupil in bright and dim light."
            ],
            memoryTip: "Light → cornea → pupil → lens → retina → optic nerve → brain."
          },
          {
            id: "g7-t7-2", image: "images/diagrams/human-ear.svg", unit: "2.0", page: "45", title: "Structure and Functions of the Human Ear", icon: "👂",
            explanation: "The ear is the organ of hearing and balance. It is divided into the outer ear, middle ear and inner ear, each with parts that capture, transmit and interpret sound.",
            points: [
              "The outer ear consists of the pinna (collects sound) and the ear canal (auditory canal).",
              "The eardrum (tympanic membrane) vibrates when sound waves hit it.",
              "The middle ear contains the hammer (malleus), anvil (incus) and stirrup (stapes) — the smallest bones in the body.",
              "These three ossicles amplify the vibrations and pass them to the oval window.",
              "The Eustachian tube connects the middle ear to the throat and balances air pressure.",
              "The inner ear contains the cochlea, which changes vibrations into nerve impulses.",
              "The semi-circular canals and the vestibule are responsible for balance.",
              "The auditory nerve carries sound impulses to the brain.",
              "Sound travels faster in solids than in liquids or gases; the ossicles use this to amplify sound."
            ],
            definitions: [
              "Eardrum: a thin membrane that vibrates when sound waves strike it.",
              "Cochlea: the snail-shaped organ in the inner ear that converts vibrations into nerve impulses.",
              "Ossicles: the three tiny bones — malleus, incus and stapes — in the middle ear.",
              "Balance: the ability to keep the body upright, controlled by the inner ear."
            ],
            examples: [
              "Covering the ears makes sounds louder because the pinna collects less air-borne sound.",
              "Popping your ears when a plane descends is the Eustachian tube equalising pressure."
            ],
            waecFocus: [
              "Name the parts of the outer, middle and inner ear.",
              "Trace the path of a sound wave from the pinna to the brain.",
              "State the function of the Eustachian tube and the semi-circular canals."
            ],
            memoryTip: "Outer collects, Middle amplifies, Inner converts."
          },
          {
            id: "g7-t7-3", unit: "3.0", page: "46", title: "Structure and Functions of the Human Tongue", icon: "👅",
            explanation: "The tongue is a muscular organ in the mouth that helps with tasting, chewing, swallowing and speech. Its surface is covered with small bumps called papillae containing taste buds.",
            points: [
              "The tongue is made of skeletal muscle and is attached to the floor of the mouth.",
              "Papillae are the small bumps on the tongue; taste buds are inside them.",
              "There are four main taste sensations: sweet, sour, salty and bitter.",
              "Sweet is tasted mainly at the tip, salty and sour at the sides, bitter at the back.",
              "The tongue mixes food with saliva during chewing (mastication) to form a bolus.",
              "It helps in swallowing by pushing the bolus to the back of the throat.",
              "It is needed for clear speech by shaping sounds.",
              "Taste works together with smell — when you have a cold, food seems tasteless.",
              "Taste buds wear out and are replaced every few days."
            ],
            definitions: [
              "Papilla: a small bump on the surface of the tongue.",
              "Taste bud: the receptor organ that detects dissolved food chemicals.",
              "Bolus: a soft ball of chewed food mixed with saliva, ready to swallow.",
              "Receptor: a specialised cell that responds to a stimulus."
            ],
            examples: [
              "Sour lime makes you purse your lips — sour taste detected at the sides.",
              "A bitter medicine is placed at the back of the tongue where bitter receptors are dense."
            ],
            waecFocus: [
              "State the four taste sensations and where each is detected.",
              "Give three functions of the tongue.",
              "Explain why food seems tasteless when you have a cold."
            ],
            memoryTip: "Tip = sweet, Sides = sour and salty, Back = bitter."
          },
          {
            id: "g7-t7-4", unit: "4.0", page: "47", title: "Structure of the Sensory Cells of the Human Skin", icon: "🖐️",
            explanation: "The skin is the largest organ of the body and contains sensory cells (receptors) that detect touch, pressure, pain, heat and cold. It also protects the body and controls temperature.",
            points: [
              "The skin has two main layers: the epidermis (outer) and the dermis (inner).",
              "Receptors for touch are near the surface of the dermis.",
              "Receptors for heat and cold are distributed throughout the dermis.",
              "Pain receptors warn the body of damage to tissues.",
              "Pressure receptors (in the dermis and deeper) detect pressure and vibration.",
              "The skin contains sweat glands that produce sweat for cooling.",
              "Hair follicles and sebaceous (oil) glands keep the skin and hair flexible.",
              "The skin prevents germs entering, stops water loss and helps make vitamin D.",
              "Sensory cells detect stimuli and send impulses along nerves to the brain."
            ],
            definitions: [
              "Epidermis: the outer, protective layer of the skin.",
              "Dermis: the inner layer of skin containing receptors, glands and blood vessels.",
              "Receptor: a sensory cell that detects a change in the environment.",
              "Sweat gland: a gland that produces sweat to cool the body."
            ],
            examples: [
              "Touching a hot pan makes you pull your hand away instantly — heat and pain receptors.",
              "You can tell a coin is in your pocket without looking — touch and pressure receptors."
            ],
            waecFocus: [
              "Name the two main layers of the skin.",
              "State the types of receptors found in the skin and what each detects.",
              "Give three functions of the skin."
            ],
            memoryTip: "Skin senses: Touch, Temperature, Pain, Pressure — and it protects and cools."
          },
          {
            id: "g7-t7-5", unit: "5.0", page: "47", title: "Structure and Functions of the Nose", icon: "👃",
            explanation: "The nose is the organ of smell and also the main passage for air entering the lungs. Its structure warms, cleans and moistens the air before it reaches the delicate lungs.",
            points: [
              "The nose has two nostrils that lead into the nasal cavity.",
              "The nasal cavity is lined with mucus that traps dust and germs.",
              "Tiny hairs (cilia) in the nostrils filter large dust particles from incoming air.",
              "Blood vessels in the nasal lining warm the incoming air.",
              "Receptor cells for smell are located at the top of the nasal cavity.",
              "Smell receptors send impulses along the olfactory nerve to the brain.",
              "The nose also helps in speech by allowing air to escape for sounds like m, n, ng.",
              "The nasopharynx connects the nasal cavity to the throat.",
              "The nose, mouth and throat work together to condition air before it reaches the lungs."
            ],
            definitions: [
              "Olfactory nerve: the nerve that carries smell impulses to the brain.",
              "Mucus: a sticky fluid that traps dust and germs in the nose.",
              "Cilia: tiny hair-like structures that sweep mucus and trapped particles towards the throat.",
              "Smell (olfaction): the sense that detects chemicals dissolved in mucus."
            ],
            examples: [
              "You smell food because tiny particles dissolve in the mucus and hit receptors.",
              "In cold weather, inhaled air is warmed by blood vessels before reaching the lungs."
            ],
            waecFocus: [
              "State three functions of the nose.",
              "Explain how the nose cleans and warms inhaled air.",
              "Name the nerve responsible for the sense of smell."
            ],
            memoryTip: "Nose = smell + filter + warm + moisturise air."
          }
        ]
      },
      {
        id: "g7-t8",
        number: "Theme 8",
        title: "Hygiene / Health",
        topics: [
          {
            id: "g7-t8-1", unit: "1.0", page: "48", title: "Personal Cleanliness and Health", icon: "🧼",
            explanation: "Personal cleanliness means keeping the body, clothes and surroundings clean. It is one of the cheapest and most effective ways of preventing disease.",
            points: [
              "Bath or wash daily with clean water and soap.",
              "Brush teeth at least twice a day to prevent tooth decay and gum disease.",
              "Keep fingernails and toenails short and clean to avoid harbouring germs.",
              "Wear clean clothes and change undergarments regularly.",
              "Wash hands with soap before eating and after using the toilet.",
              "Keep hair clean and comb it regularly to prevent lice and dandruff.",
              "Keep living and working areas clean and free from refuse and stagnant water.",
              "Avoid sharing towels, razors and eating utensils with others.",
              "Clean wounds and cover them with a plaster to prevent infection."
            ],
            definitions: [
              "Hygiene: the practices that keep the body and surroundings clean to prevent disease.",
              "Sanitation: the provision of clean water, proper drainage and waste disposal.",
              "Personal cleanliness: keeping one's own body and clothing clean.",
              "Infection: the entry and multiplication of germs in the body."
            ],
            examples: [
              "Washing hands before eating prevents cholera and typhoid.",
              "Brushing teeth prevents plaque build-up and tooth decay."
            ],
            waecFocus: [
              "List six personal hygiene practices.",
              "Explain how poor personal hygiene leads to disease.",
              "State why hands should be washed before eating."
            ],
            memoryTip: "Clean body, clean clothes, clean hair, clean nails, clean surroundings."
          },
          {
            id: "g7-t8-2", unit: "1.1", page: "48", title: "Exercise, Rest and Recreation", icon: "🏃‍♀️",
            explanation: "Exercise, rest and recreation work together to keep the body fit. Exercise strengthens muscles and the heart, rest repairs the body, and recreation refreshes the mind.",
            points: [
              "Exercise increases blood flow, strengthens muscles and keeps joints flexible.",
              "Regular exercise helps control body weight and prevents obesity.",
              "It strengthens the heart and lungs and improves posture.",
              "Rest allows the body to repair itself and restore energy.",
              "Sleep is the deepest form of rest; children need about 8-10 hours.",
              "Recreation includes games, music, hobbies and travel that relax the mind.",
              "Too much work without rest causes fatigue and lowers efficiency.",
              "Over-exercise without supervision can cause injury.",
              "A good balance of work, exercise, rest and play keeps a person healthy."
            ],
            definitions: [
              "Exercise: physical activity that strengthens the body.",
              "Rest: a period of relaxation during which the body recovers energy.",
              "Recreation: enjoyable activity done to refresh the mind and body.",
              "Fatigue: a feeling of tiredness caused by prolonged work or lack of rest."
            ],
            examples: [
              "Playing football or athletics is exercise; listening to music is recreation.",
              "A student who sleeps well concentrates better in class."
            ],
            waecFocus: [
              "State four benefits of regular exercise.",
              "Explain the importance of rest and sleep.",
              "Distinguish between exercise, rest and recreation with examples."
            ],
            memoryTip: "Exercise builds the body, Rest repairs it, Recreation refreshes the mind."
          }
        ]
      },
      {
        id: "g7-t9",
        number: "Theme 9",
        title: "Technology",
        topics: [
          {
            id: "g7-t9-1", unit: "1.1", page: "48", title: "Meaning and Uses of Technology", icon: "⚙️",
            explanation: "Technology is the application of scientific knowledge, skills and tools to solve practical problems and make life easier. It turns scientific discoveries into useful products and services.",
            points: [
              "Technology uses knowledge from science to create tools, machines and systems.",
              "It makes work faster, easier, safer and more efficient.",
              "Examples include transport, communication, medicine, agriculture, construction and computing.",
              "Technology improves the quality of life and raises the standard of living.",
              "It creates jobs and new industries.",
              "Technology can also create problems such as pollution, waste and unemployment.",
              "Appropriate technology suits the needs, resources and environment of the user.",
              "Science answers why and how; technology answers what can we do with it."
            ],
            definitions: [
              "Technology: the practical application of scientific knowledge for human benefit.",
              "Tool: an object used to carry out a task.",
              "Machine: a device that makes work easier by changing the size or direction of a force.",
              "Invention: the creation of a new device or process."
            ],
            examples: [
              "A mobile phone applies knowledge of electronics and waves for communication.",
              "Tractors and irrigation pumps apply science to farming."
            ],
            waecFocus: [
              "Define technology and distinguish it from science.",
              "Give five examples of technology in everyday life.",
              "State two advantages and one disadvantage of technology."
            ],
            memoryTip: "Science = knowledge. Technology = using the knowledge."
          },
          {
            id: "g7-t9-2", unit: "1.2", page: "49", title: "Technological Processes (e.g. Recycling)", icon: "♻️",
            explanation: "A technological process is a series of steps used to change raw materials into useful products. Recycling is an important technological process that turns waste back into usable material.",
            points: [
              "A typical process: identify a need → design → gather materials → make/produce → test → evaluate.",
              "Recycling is the collection and reprocessing of waste materials into new products.",
              "Recyclable materials include paper, glass, plastics, metals and some textiles.",
              "Recycling reduces the amount of waste dumped, saves raw materials and saves energy.",
              "It reduces pollution and helps conserve natural resources.",
              "Reducing and reusing come before recycling in waste management (the 3 Rs).",
              "Other technological processes include cooking, baking, brewing, manufacturing and weaving.",
              "Planning, testing and evaluating are essential parts of any technological process."
            ],
            definitions: [
              "Recycling: processing used materials into new products to reduce waste.",
              "Raw material: a basic material before it is processed into a product.",
              "Design: a plan or drawing produced to show how something will be made.",
              "Waste: unwanted or unusable material left after use."
            ],
            examples: [
              "Used plastic bottles are collected, cleaned and turned into fibre for clothing.",
              "Aluminium cans are melted down and reshaped into new cans."
            ],
            waecFocus: [
              "Explain what a technological process is.",
              "State four benefits of recycling.",
              "Outline the steps in a technological process using an example."
            ],
            memoryTip: "3 Rs in order: Reduce, Reuse, Recycle."
          }
        ]
      }
    ]
  }
  ,
  // ============================================================
  // GRADE 8
  // ============================================================
  {
    id: "g8",
    grade: "Grade 8",
    label: "Foundation Science — Grade Eight",
    icon: "📘",
    blurb: "Magnifying instruments and cells, simple machines, chemical changes, air and water pressure, ecology, food preservation, the human body, sanitation and communication technology.",
    themes: [
      {
        id: "g8-t1",
        number: "Theme 1",
        title: "Magnifying Instruments, Cells and Plants",
        topics: [
          {
            id: "g8-t1-1", unit: "1.0", page: "51", title: "Magnifying Instruments", icon: "🔍",
            explanation: "Magnifying instruments make very small objects appear larger so that structures invisible to the naked eye can be studied. The two common instruments at this level are the hand lens and the microscope.",
            points: [
              "Magnification is the number of times an object appears larger than its real size.",
              "A hand lens (magnifying glass) gives a magnification of about 5× to 10×.",
              "A light (optical) microscope can magnify up to about 1500×.",
              "The total magnification of a microscope = eyepiece magnification × objective magnification.",
              "Examples: eyepiece 10× with objective 40× gives 400× magnification.",
              "A lens works by bending (refracting) light rays from the object.",
              "The image seen through a simple lens is upright and magnified.",
              "Magnifying instruments are used to study cells, micro-organisms, crystals and fine structures.",
              "The electron microscope gives much higher magnification and is used in advanced research."
            ],
            definitions: [
              "Magnification: the number of times an object is made to appear larger.",
              "Lens: a curved transparent material (glass) that converges or diverges light.",
              "Eyepiece: the lens you look through at the top of a microscope.",
              "Objective lens: the lens nearest the object being viewed."
            ],
            examples: [
              "A 10× eyepiece with a 4× objective gives 40× total magnification.",
              "A hand lens is used to look at the veins of a leaf or the wings of a fly."
            ],
            waecFocus: [
              "Define magnification and calculate total magnification.",
              "Compare a hand lens with a light microscope.",
              "State two uses of each magnifying instrument."
            ],
            memoryTip: "Total mag = eyepiece × objective."
          },
          {
            id: "g8-t1-2", unit: "1.1", page: "52", title: "The Hand Lens", icon: "🔎",
            explanation: "A hand lens is a simple magnifying glass consisting of a single convex lens in a frame. It is portable and ideal for field work where only moderate magnification is needed.",
            points: [
              "It consists of a double convex lens held in a metal or plastic rim with a handle.",
              "It magnifies objects about 5× to 10× their real size.",
              "Hold the lens close to the eye and move the object until it comes into focus.",
              "For best results, place the object near the focal length of the lens.",
              "It gives a virtual, upright and magnified image.",
              "Uses: examining insects, leaf veins, rocks, coins, fabric and printed detail.",
              "Limitation: it cannot show objects such as bacteria and cells clearly because its magnification is low.",
              "Keep the lens clean and store it in a case to avoid scratches."
            ],
            definitions: [
              "Convex lens: a lens that is thicker in the middle than at the edges and converges light.",
              "Focal length: the distance from the centre of a lens to its principal focus.",
              "Virtual image: an image that cannot be projected on a screen."
            ],
            examples: [
              "A botanist uses a hand lens to identify a leaf in the field.",
              "A coin collector uses a hand lens to read small mint marks."
            ],
            waecFocus: [
              "Describe how to use a hand lens correctly.",
              "State three uses and one limitation of a hand lens.",
              "Name the type of lens in a hand lens."
            ],
            memoryTip: "Lens close to the eye, object moved to focus."
          },
          {
            id: "g8-t1-3", image: "images/diagrams/microscope.svg", unit: "1.2", page: "52", title: "The Microscope", icon: "🔬",
            explanation: "A microscope is an instrument that uses lenses and light to magnify objects that are too small to be seen with the naked eye, such as cells, bacteria and blood corpuscles.",
            points: [
              "Parts: eyepiece, body tube, nosepiece, objective lenses, stage, diaphragm, mirror/lamp, coarse focus and fine focus knobs.",
              "The eyepiece usually magnifies 10×; objectives are usually 4×, 10× and 40×.",
              "Start focusing with the low power objective and the coarse adjustment knob.",
              "Use the fine adjustment knob for sharp focusing at high power.",
              "The diaphragm controls the amount of light reaching the specimen.",
              "The stage holds the slide and has clips to keep it in place.",
              "Always carry a microscope with two hands — one on the arm and one under the base.",
              "Clean lenses only with lens paper, never with ordinary cloth or fingers.",
              "The image seen is magnified, bright and inverted (upside down)."
            ],
            definitions: [
              "Microscope: an instrument for magnifying very small objects.",
              "Slide: a thin glass plate on which the specimen is placed.",
              "Specimen: the object being studied under the microscope.",
              "Coarse adjustment: the knob that moves the tube quickly for initial focusing."
            ],
            examples: [
              "A 10× eyepiece with a 40× objective gives 400× magnification.",
              "A prepared slide of onion epidermis shows brick-shaped cells."
            ],
            waecFocus: [
              "Label the parts of a light microscope.",
              "Explain how to focus a microscope using low power first.",
              "State three rules for caring for a microscope."
            ],
            memoryTip: "Low power first, coarse then fine — never force the knobs."
          },
          {
            id: "g8-t1-4", image: "images/diagrams/plant-animal-cell.svg", unit: "2.1", page: "53", title: "Generalised Plant and Animal Cells", icon: "🧫",
            explanation: "A cell is the basic unit of life. A generalised cell shows the structures common to all cells of that type, even though real cells vary in shape and size.",
            points: [
              "Both plant and animal cells have: cell (plasma) membrane, cytoplasm, nucleus and mitochondria.",
              "The cell membrane controls what enters and leaves the cell (partially permeable).",
              "The nucleus contains genetic material (chromosomes) and controls the activities of the cell.",
              "The cytoplasm is the jelly-like material where most chemical reactions take place.",
              "Mitochondria are the sites of respiration, where energy is released.",
              "Plant cells also have a rigid cell wall, chloroplasts and a large permanent vacuole.",
              "The cell wall is made of cellulose and gives support and shape.",
              "The vacuole contains cell sap and keeps the cell turgid.",
              "Cells are too small to be seen with the naked eye — a microscope is needed.",
              "Cells vary in shape: round (blood), long (nerve), brick-like (epidermis)."
            ],
            definitions: [
              "Cell: the smallest structural and functional unit of living things.",
              "Cell membrane: a thin, partially permeable layer that surrounds the cytoplasm.",
              "Cell wall: a rigid outer layer in plants made of cellulose.",
              "Cytoplasm: the jelly-like substance inside the cell where reactions occur.",
              "Nucleus: the control centre containing chromosomes (DNA).",
              "Vacuole: a fluid-filled sac in plant cells containing cell sap."
            ],
            examples: [
              "Onion epidermis cells are rectangular with a visible cell wall.",
              "Cheek cells are round and have no cell wall or chloroplasts."
            ],
            waecFocus: [
              "List the structures found in a plant cell and in an animal cell.",
              "State three structures present in plant cells but not in animal cells.",
              "Give the function of the nucleus, cell membrane and cytoplasm."
            ],
            memoryTip: "Plant extra three: Wall, Chloroplast, Vacuole (big and permanent)."
          },
          {
            id: "g8-t1-5", unit: "2.2", page: "55", title: "Specialised Plant and Animal Cells", icon: "🎯",
            explanation: "Specialised cells have structures adapted to the particular job they do. Their shape, size and internal features are matched to their function.",
            points: [
              "Root hair cells are long and thin to absorb water and mineral salts from the soil.",
              "Palisade mesophyll cells are packed with chloroplasts to carry out photosynthesis.",
              "Xylem vessels are long, hollow tubes with no end walls to carry water up the stem.",
              "Phloem tubes transport dissolved food (sucrose) around the plant.",
              "Red blood cells are biconcave and have no nucleus to carry more haemoglobin.",
              "White blood cells are irregular and can change shape to engulf germs.",
              "Nerve cells (neurons) are long with branching ends to transmit impulses quickly.",
              "Sperm cells have a tail (flagellum) to swim to the egg.",
              "Muscle cells contain many mitochondria to provide energy for contraction."
            ],
            definitions: [
              "Specialised cell: a cell adapted to perform a particular function.",
              "Adaptation: a feature that helps an organism or cell carry out its function.",
              "Haemoglobin: the red pigment in red blood cells that carries oxygen.",
              "Neuron: a nerve cell that carries electrical impulses."
            ],
            examples: [
              "A root hair cell is long and thin — big surface area for absorption.",
              "A red blood cell is flat and without a nucleus — carries more oxygen."
            ],
            waecFocus: [
              "Match specialised cells to their functions.",
              "Explain how the shape of a root hair cell suits its function.",
              "State two structural differences between red blood cells and white blood cells."
            ],
            memoryTip: "Structure follows function — shape always matches the job."
          },
          {
            id: "g8-t1-6", image: "images/diagrams/micro-organisms.svg", unit: "3.0", page: "57", title: "Unicellular Organisms (Bacterium, Euglena)", icon: "🦠",
            explanation: "Unicellular organisms are made of only one cell, yet that single cell carries out all the life processes. The common examples studied are bacteria and Euglena.",
            points: [
              "Bacteria are among the smallest and most abundant living things.",
              "A bacterium has a cell wall, cell membrane, cytoplasm and genetic material (nucleoid) but no true nucleus.",
              "Some bacteria have flagella for movement and pili/fimbriae for attachment.",
              "Shapes of bacteria: bacillus (rod), coccus (sphere) and spirillum (spiral).",
              "Bacteria may be beneficial (making yoghurt, antibiotics, decomposing waste) or harmful (causing cholera, typhoid, tuberculosis).",
              "Euglena is a unicellular organism with chloroplasts for photosynthesis and a flagellum for movement.",
              "Euglena has an eyespot (stigma) that detects light but no cell wall — it has a pellicle instead.",
              "Euglena can feed like a plant in light and like an animal in the dark (mixotrophic).",
              "Some bacteria reproduce by binary splitting (binary fission) — very rapidly."
            ],
            definitions: [
              "Unicellular: consisting of a single cell only.",
              "Bacterium: a microscopic single-celled organism without a true nucleus.",
              "Euglena: a microscopic unicellular organism with chloroplasts and a flagellum.",
              "Flagellum: a whip-like tail used for movement.",
              "Binary fission: splitting of one cell into two identical cells."
            ],
            examples: [
              "Lactobacillus in milk turns lactose into lactic acid, making yoghurt.",
              "Euglena swims using its flagellum and makes food in sunlight."
            ],
            waecFocus: [
              "Describe the structure of a bacterium with a labelled diagram.",
              "Give three differences between Euglena and a bacterium.",
              "State two useful and two harmful effects of bacteria."
            ],
            memoryTip: "Bacteria: wall + nucleoid + maybe flagellum. Euglena: chloroplast + eyespot + flagellum, no wall."
          },
          {
            id: "g8-t1-7", image: "images/diagrams/plant-kingdom.svg", unit: "4.0", page: "66", title: "The Plant Kingdom", icon: "🌳",
            explanation: "The plant kingdom is divided into non-flowering plants and flowering plants based on how they reproduce. Understanding the groups helps in naming and classifying any plant you meet.",
            points: [
              "Plants are grouped as cryptogams (no flowers or seeds) and phanerogams (produce flowers or seeds).",
              "Cryptogams reproduce by spores and include algae, mosses and ferns.",
              "Phanerogams produce seeds and are divided into gymnosperms and angiosperms.",
              "Gymnosperms have naked seeds not enclosed in a fruit (e.g. pine, cycad).",
              "Angiosperms have seeds enclosed inside a fruit (e.g. maize, mango, bean).",
              "All green plants are autotrophic — they make their own food by photosynthesis.",
              "Plants have indeterminate growth (they grow throughout life at the tips).",
              "Plant organs are roots, stems, leaves, flowers and fruits.",
              "Plants respond slowly to stimuli (tropisms) unlike animals."
            ],
            definitions: [
              "Cryptogam: a plant that reproduces by spores and has no flowers or seeds.",
              "Phanerogam: a seed-producing plant.",
              "Gymnosperm: a plant with naked seeds not enclosed in a fruit.",
              "Angiosperm: a flowering plant with seeds enclosed in a fruit."
            ],
            examples: [
              "Fern and moss are cryptogams; maize and mango are angiosperms.",
              "Pine and cycad are gymnosperms."
            ],
            waecFocus: [
              "Distinguish between cryptogams and phanerogams.",
              "Give two examples of gymnosperms and two of angiosperms.",
              "State three characteristics of the plant kingdom."
            ],
            memoryTip: "Crypto = hidden (spores), Phanero = visible (seeds). Gymno = naked, Angio = in a vessel."
          },
          {
            id: "g8-t1-8", unit: "4.1", page: "66", title: "Non-Flowering Plants", icon: "🌿",
            explanation: "Non-flowering plants do not produce flowers or seeds. They reproduce by spores or by vegetative means and many of them need damp conditions to complete their life cycle.",
            points: [
              "Examples: algae, mosses, liverworts, ferns and horsetails.",
              "They reproduce mainly by spores produced in spore cases (sporangia).",
              "Algae (e.g. Spirogyra, Chlorella) are simple, often aquatic and have chlorophyll.",
              "Mosses are small, have no true roots — they have rhizoids that anchor them.",
              "Ferns have true roots, stems and leaves (fronds) and carry vascular tissue.",
              "The main plant body of a fern is the sporophyte; the spores grow into a small heart-shaped prothallus (gametophyte).",
              "Most non-flowering plants need water for fertilisation because sperm must swim.",
              "Some (e.g. Spirogyra) reproduce by fragmentation.",
              "They are important as food, in soil formation and as indicators of pollution."
            ],
            definitions: [
              "Spore: a single reproductive cell capable of growing into a new organism.",
              "Sporangium: the case in which spores are produced.",
              "Rhizoid: a root-like filament that anchors a moss.",
              "Frond: the leaf of a fern."
            ],
            examples: [
              "Spirogyra in pond water reproduces by fragmentation of its filaments.",
              "The underside of a fern frond carries brown spore cases."
            ],
            waecFocus: [
              "Give three examples of non-flowering plants.",
              "Explain how ferns reproduce using spores.",
              "State two ways non-flowering plants differ from flowering plants."
            ],
            memoryTip: "Non-flowering = spores, not seeds. Ferns have fronds, mosses have rhizoids."
          },
          {
            id: "g8-t1-9", unit: "4.2", page: "67", title: "Flowering Plants: External and Internal Structure", icon: "🌸",
            explanation: "Flowering plants (angiosperms) have clearly defined organs — roots, stems, leaves, flowers and fruits — each with a specific function. Their internal structure shows tissues arranged into systems.",
            points: [
              "External parts: roots, stem, leaves, flowers, fruits and buds.",
              "Roots anchor the plant, absorb water and minerals and store food.",
              "The stem supports leaves and flowers, transports materials and stores food.",
              "Leaves are the main site of photosynthesis and transpiration.",
              "The flower is the reproductive organ; the fruit protects and disperses seeds.",
              "Internal structure of a root (from outside): epidermis, cortex, endodermis, pericycle, xylem and phloem.",
              "Internal structure of a stem: epidermis, cortex, vascular bundles, pith.",
              "Internal structure of a leaf: upper epidermis, palisade layer, spongy mesophyll, air spaces, stomata, veins and lower epidermis.",
              "Vascular bundles contain xylem (water) and phloem (food) and run through root, stem and leaf.",
              "Tissues group into systems: dermal (protection), vascular (transport) and ground (support and storage)."
            ],
            definitions: [
              "Organ: a structure made of different tissues working together (e.g. leaf).",
              "Tissue: a group of similar cells carrying out the same function.",
              "Vascular bundle: a strand of xylem and phloem in root, stem and leaf.",
              "Stomata: pores on the leaf surface that allow gas exchange."
            ],
            examples: [
              "A cross-section of a dicot stem shows vascular bundles arranged in a ring.",
              "A carrot stores food in its swollen taproot."
            ],
            waecFocus: [
              "List the external parts of a flowering plant and state the function of each.",
              "Describe the internal structure of a leaf.",
              "Distinguish between the arrangement of vascular bundles in a dicot stem and a monocot stem."
            ],
            memoryTip: "Root → Stem → Leaf → Flower → Fruit: water up, food down, seeds out."
          },
          {
            id: "g8-t1-10", image: "images/diagrams/flower.svg", unit: "4.3", page: "70", title: "Structure and Functions of Parts of a Flower", icon: "🌺",
            explanation: "The flower is the reproductive organ of a flowering plant. Its parts are arranged so that pollination, fertilisation and seed formation can take place successfully.",
            points: [
              "Sepals (calyx) protect the flower bud before it opens.",
              "Petals (corolla) are often coloured and scented to attract insects and birds.",
              "The stamen is the male part, made of anther and filament.",
              "The anther produces pollen grains which contain male sex cells.",
              "The pistil/carpel (female part) consists of stigma, style and ovary.",
              "The stigma is sticky and receives pollen during pollination.",
              "The style is the tube linking stigma to ovary; the pollen tube grows down it.",
              "The ovary contains ovules; each ovule has an egg cell (female sex cell).",
              "After fertilisation the ovary becomes the fruit and ovules become seeds.",
              "The receptacle holds the flower parts; the pedicel is the flower stalk."
            ],
            definitions: [
              "Stamen: the male reproductive organ of a flower (anther + filament).",
              "Carpel/pistil: the female reproductive organ (stigma + style + ovary).",
              "Pollen grain: the male reproductive cell produced in the anther.",
              "Ovule: the structure in the ovary that develops into a seed."
            ],
            examples: [
              "In maize the male flowers are at the top (tassel) and female at the side (cob).",
              "A bean flower has five petals, five stamens and one carpel."
            ],
            waecFocus: [
              "Name the male and female parts of a flower and their sub-parts.",
              "State the function of each part of the flower.",
              "Explain what the ovary and ovule become after fertilisation."
            ],
            memoryTip: "Stamen = male (Anther makes pollen). Carpel = female (Stigma, Style, Ovary)."
          },
          {
            id: "g8-t1-11", unit: "4.4", page: "70", title: "Pollination and Germination", icon: "🌱",
            explanation: "Pollination is the transfer of pollen from the anther to the stigma, and germination is the growth of a seed into a seedling. Both must succeed for a plant to reproduce.",
            points: [
              "Self-pollination: pollen lands on the stigma of the same flower or another flower on the same plant.",
              "Cross-pollination: pollen is transferred to a stigma of a flower on a different plant of the same species.",
              "Agents of pollination: wind, insects, birds, bats and water.",
              "Insect-pollinated flowers are bright, scented, have nectar and sticky pollen.",
              "Wind-pollinated flowers are small, dull, produce huge amounts of light pollen.",
              "Germination requires water, oxygen and a suitable temperature; light is needed by some seeds.",
              "During germination the testa (seed coat) splits, the radicle (root) emerges first, then the plumule (shoot).",
              "Seeds need a period of rest/dormancy before they can germinate.",
              "Saprophytic nutrition: some seeds (e.g. castor) are nourished by endosperm before leaves form.",
              "Fertilisation occurs when the male nucleus fuses with the egg cell in the ovule."
            ],
            definitions: [
              "Pollination: transfer of pollen grains from anther to stigma.",
              "Germination: the growing of a seed into a seedling.",
              "Fertilisation: fusion of male and female sex cells.",
              "Radicle: the first part of the embryo to emerge — it becomes the root.",
              "Plumule: the embryonic shoot that grows into the stem and leaves."
            ],
            examples: [
              "Bees carry pollen from flower to flower while feeding on nectar.",
              "Maize seeds fail to germinate in waterlogged soil because oxygen is lacking."
            ],
            waecFocus: [
              "Distinguish between self- and cross-pollination.",
              "State three conditions necessary for germination.",
              "Describe the stages of germination of a bean seed."
            ],
            memoryTip: "Germination needs Water + Oxygen + Temperature. Root first, shoot second."
          },
          {
            id: "g8-t1-12", unit: "5.0", page: "71", title: "Important Processes in Plants", icon: "🌞",
            explanation: "Plants carry out photosynthesis, respiration, transpiration, growth and transport. These processes keep the plant alive and provide food and oxygen for other living things.",
            points: [
              "Photosynthesis: CO₂ + water, in the presence of sunlight and chlorophyll, gives glucose + oxygen.",
              "The equation is 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light and chlorophyll over the arrow).",
              "Photosynthesis takes place mainly in the leaves, in the chloroplasts.",
              "Raw materials enter through the stomata (CO₂) and roots/vessels (water).",
              "Factors affecting photosynthesis: light intensity, carbon dioxide concentration, temperature and water supply.",
              "Respiration happens day and night in all living cells and releases energy from glucose.",
              "Transpiration is the loss of water vapour from aerial parts of the plant, mainly through the stomata.",
              "Transpiration creates a pulling force that draws water up the xylem.",
              "Transpiration also cools the plant and keeps cells turgid.",
              "Translocation is the movement of dissolved food in the phloem from leaves to other parts."
            ],
            definitions: [
              "Photosynthesis: manufacture of glucose by green plants using CO₂, water, light and chlorophyll.",
              "Transpiration: loss of water vapour from the surfaces of a plant.",
              "Translocation: movement of manufactured food in the phloem.",
              "Chlorophyll: the green pigment that absorbs light energy."
            ],
            examples: [
              "A plant kept in the dark turns pale — no chlorophyll, no photosynthesis.",
              "A plant covered with grease dies because transpiration and gas exchange stop."
            ],
            waecFocus: [
              "Write the word equation and chemical equation for photosynthesis.",
              "State four factors that affect the rate of photosynthesis.",
              "Explain the importance of transpiration to a plant."
            ],
            memoryTip: "Photosynthesis makes food; Respiration releases it; Transpiration loses water."
          },
          {
            id: "g8-t1-13", unit: "6.0", page: "80", title: "Study of Some Invertebrates", icon: "🪱",
            explanation: "Invertebrates are animals without a backbone. They form the largest group of animals and are classified into major phyla such as arthropods, molluscs and annelids.",
            points: [
              "Arthropods have jointed legs and an exoskeleton — insects, arachnids, myriapods and crustaceans.",
              "Insects have three body parts (head, thorax, abdomen), three pairs of legs and usually wings.",
              "Arachnids (spider, scorpion) have two body parts and four pairs of legs.",
              "Crustaceans (crab, crayfish) have a hard shell and more than four pairs of legs.",
              "Myriapods (millipede, centipede) have many body segments and many legs.",
              "Molluscs (snail, slug, mussel) have a soft body, often with a shell.",
              "Annelids (earthworm, leech) have segmented bodies with many rings.",
              "The cockroach is a common specimen showing external features of an insect.",
              "Insects play roles as pollinators, pests, decomposers and food for other animals."
            ],
            definitions: [
              "Invertebrate: an animal without a backbone.",
              "Exoskeleton: a hard outer covering that supports and protects an arthropod.",
              "Jointed appendage: a leg with joints that allows free movement.",
              "Segmentation: division of the body into a series of similar rings."
            ],
            examples: [
              "A grasshopus has a head, thorax with three pairs of legs, and an abdomen.",
              "An earthworm has about 100-150 segments and bristles (setae) for grip."
            ],
            waecFocus: [
              "Classify given invertebrates into arthropods, molluscs and annelids.",
              "State four characteristics of the phylum Arthropoda.",
              "Describe the external features of a cockroach or grasshopper."
            ],
            memoryTip: "Arthro = jointed legs. Mollusc = soft body. Annelid = ring segments."
          }
        ]
      },
      {
        id: "g8-t2",
        number: "Theme 2",
        title: "Matter Part 2",
        topics: [
          {
            id: "g8-t2-1", image: "images/diagrams/lever-classes.svg", unit: "1.0", page: "86", title: "Simple Machines (Levers)", icon: "🪚",
            explanation: "A simple machine is a device that makes work easier by changing the size or direction of a force. A lever is the simplest and most common machine.",
            points: [
              "A lever is a rigid bar that turns about a fixed pivot called the fulcrum.",
              "The three parts are effort (applied force), load (resistance) and fulcrum (pivot).",
              "There are three classes of lever based on the arrangement of effort, load and fulcrum.",
              "Class 1: fulcrum in the middle (see-saw, crowbar, scissors, pliers).",
              "Class 2: load in the middle (wheelbarrow, nutcracker, bottle opener).",
              "Class 3: effort in the middle (fishing rod, tweezers, human forearm).",
              "A lever can multiply force or multiply distance depending on the arrangement.",
              "Mechanical advantage = load ÷ effort (MA = L / E).",
              "Effort arm is the distance from fulcrum to effort; load arm is from fulcrum to load.",
              "A lever with a longer effort arm than load arm gives a mechanical advantage greater than 1."
            ],
            definitions: [
              "Lever: a rigid bar that pivots about a fixed point to make work easier.",
              "Fulcrum: the fixed pivot of a lever.",
              "Effort: the force applied to the machine.",
              "Load: the resistance the machine overcomes.",
              "Mechanical advantage: the number of times a machine multiplies the effort force."
            ],
            examples: [
              "A crowbar lifting a rock is a class 1 lever.",
              "A pair of tweezers is a class 3 lever.",
              "Nutcrackers are class 2 levers — load is between fulcrum and effort."
            ],
            waecFocus: [
              "Identify the class of a lever from a diagram.",
              "Calculate mechanical advantage given load and effort.",
              "Give two everyday examples of each class of lever."
            ],
            memoryTip: "Class 1: F in middle. Class 2: L in middle. Class 3: E in middle."
          },
          {
            id: "g8-t2-2", image: "images/diagrams/simple-machines.svg", unit: "1.1", page: "87", title: "Other Types of Machines", icon: "🛠️",
            explanation: "Besides levers, other simple machines include pulleys, wheel and axle, inclined planes, screws and gears. Each one makes work easier in a particular way.",
            points: [
              "A pulley changes the direction of a force and can be combined to reduce effort.",
              "A fixed pulley only changes direction; a movable pulley halves the effort.",
              "A wheel and axle multiplies force — examples: door knob, steering wheel, bicycle, screwdriver.",
              "An inclined plane (slope) reduces the effort needed to raise a load by increasing the distance.",
              "A screw is an inclined plane wrapped around a cylinder (gate screw, bottle screw).",
              "Gears are toothed wheels that change the speed and direction of rotation.",
              "Compound machines combine two or more simple machines (bicycle, car, pliers).",
              "All machines obey the principle of conservation of energy: they cannot create energy.",
              "No machine is 100% efficient because some energy is always lost as heat and sound."
            ],
            definitions: [
              "Pulley: a wheel with a grooved rim used with a rope to lift loads.",
              "Wheel and axle: a large wheel attached to a smaller axle that turns together.",
              "Inclined plane: a sloping surface used to move loads with less effort.",
              "Gear: a toothed wheel that transmits and changes motion."
            ],
            examples: [
              "A flag hoisted on a pulley changes the direction of the pull.",
              "A ramp used to push a wheelchair into a building is an inclined plane."
            ],
            waecFocus: [
              "Name five types of simple machines and give an example of each.",
              "Explain how a fixed pulley and a movable pulley differ.",
              "State why no machine can be 100% efficient."
            ],
            memoryTip: "Five machines: Lever, Pulley, Wheel & Axle, Inclined Plane, Screw."
          },
          {
            id: "g8-t2-3", unit: "2.0", page: "87", title: "Efficiency of Machines and Velocity Ratio", icon: "📈",
            explanation: "Efficiency tells how much of the work put into a machine is usefully delivered, while velocity ratio compares how fast the effort moves with the load.",
            points: [
              "Velocity ratio (VR) = distance moved by effort ÷ distance moved by load.",
              "Mechanical advantage (MA) = load ÷ effort.",
              "Efficiency = (MA ÷ VR) × 100%, or useful output ÷ energy input × 100%.",
              "Efficiency is always less than 100% because of friction and the machine's own weight.",
              "A perfect machine would have MA = VR and efficiency = 100%.",
              "Efficiency is expressed as a percentage.",
              "Energy lost appears as heat, sound and wear.",
              "Greasing and oiling parts reduces friction and raises efficiency.",
              "In a pulley system with n supporting ropes, VR = n."
            ],
            definitions: [
              "Velocity ratio: ratio of distance moved by effort to distance moved by load.",
              "Mechanical advantage: ratio of load lifted to effort applied.",
              "Efficiency: the percentage of energy input usefully converted to output.",
              "Friction: the force that opposes motion and wastes energy in machines."
            ],
            examples: [
              "If effort moves 5 m to lift a load 1 m, VR = 5 ÷ 1 = 5.",
              "If load is 50 N and effort is 15 N, MA = 50 ÷ 15 = 3.33, efficiency = (3.33 ÷ 5) × 100 = 66.7%."
            ],
            waecFocus: [
              "Calculate VR, MA and efficiency from given data.",
              "State two reasons why a machine is never 100% efficient.",
              "Explain how to improve the efficiency of a machine."
            ],
            memoryTip: "VR = distance, MA = force, Efficiency = MA/VR × 100."
          },
          {
            id: "g8-t2-4", unit: "3.0", page: "88", title: "Work and Power", icon: "⚡",
            explanation: "Work is done when a force moves an object over a distance, and power is the rate at which that work is done. They are different — a task can involve lots of work but little power if it takes a long time.",
            points: [
              "Work = force × distance moved in the direction of the force, W = F × d.",
              "The unit of work is the joule (J); 1 J = 1 N × 1 m.",
              "No work is done if the object does not move, even if a force is applied.",
              "Power = work ÷ time, or energy ÷ time, P = W / t.",
              "The unit of power is the watt (W); 1000 W = 1 kilowatt (kW).",
              "Horsepower is another unit; 1 hp ≈ 746 W.",
              "Energy is the capacity to do work and is measured in joules.",
              "Energy cannot be created or destroyed, only changed from one form to another.",
              "Forms of energy: kinetic, potential, heat, light, sound, electrical, chemical and nuclear.",
              "A lift motor doing 6000 J in 10 s has power 6000 ÷ 10 = 600 W."
            ],
            definitions: [
              "Work: transfer of energy when a force moves an object.",
              "Power: the rate of doing work (work done per unit time).",
              "Joule: the SI unit of work and energy.",
              "Watt: the SI unit of power (1 joule per second)."
            ],
            examples: [
              "Pushing a wall for one hour does no work because there is no displacement.",
              "A 50 N force pushing a box 4 m does W = 50 × 4 = 200 J of work."
            ],
            waecFocus: [
              "Calculate work done and power using the correct formulas.",
              "Explain why holding a heavy bag still does no work.",
              "Convert between joules, kilojoules, watts and kilowatts."
            ],
            memoryTip: "Work = Force × Distance. Power = Work ÷ Time. No movement = no work."
          }
        ]
      },
      {
        id: "g8-t3",
        number: "Theme 3",
        title: "Chemical Changes 2",
        topics: [
          {
            id: "g8-t3-1", unit: "1.1", page: "90", title: "Physical and Chemical Changes", icon: "🔁",
            explanation: "A physical change alters the form of a substance without changing its composition, while a chemical change produces new substances with new properties.",
            points: [
              "Physical changes are usually reversible and no new substance is formed.",
              "Examples of physical changes: melting, boiling, dissolving, cutting, magnetising, stretching.",
              "Chemical changes are usually irreversible and produce new substances.",
              "Examples of chemical changes: burning, rusting, cooking, digestion, decay, photosynthesis.",
              "Signs of a chemical change: colour change, gas bubbles, heat or light given out, change of smell, formation of a precipitate.",
              "During a chemical change, the mass of the products equals the mass of the reactants (conservation of mass).",
              "Physical changes involve only the particles' arrangement or energy; chemical changes break and form bonds.",
              "Melting ice is physical; burning wood is chemical."
            ],
            definitions: [
              "Physical change: a change in state or form without forming a new substance.",
              "Chemical change (reaction): a change that produces one or more new substances.",
              "Reversible: able to be changed back to the original substance.",
              "Reactant: a substance that takes part in a chemical reaction."
            ],
            examples: [
              "Dissolving sugar in water is physical — evaporation recovers the sugar.",
              "Burning magnesium ribbon gives a white ash (magnesium oxide) that cannot be turned back."
            ],
            waecFocus: [
              "Classify given changes as physical or chemical and give reasons.",
              "List four signs that a chemical reaction has taken place.",
              "Explain why dissolving salt is a physical change."
            ],
            memoryTip: "New substance = chemical. Same substance, different form = physical."
          },
          {
            id: "g8-t3-2", unit: "1.2", page: "90", title: "Principle of Conservation of Energy", icon: "♻️",
            explanation: "The principle of conservation of energy states that energy cannot be created or destroyed, but can only be changed from one form to another. The total energy of an isolated system stays constant.",
            points: [
              "Energy can change form: electrical → light, chemical → heat, kinetic → potential.",
              "The total amount of energy before and after a change is always equal.",
              "Examples: a torch converts chemical energy to light and heat energy.",
              "A lifted object stores gravitational potential energy which becomes kinetic energy when it falls.",
              "In a power station, chemical energy → heat → kinetic → electrical energy.",
              "Some energy is always converted to unwanted forms such as heat and sound.",
              "The sun's energy is stored by plants during photosynthesis as chemical energy in glucose.",
              "Friction converts kinetic energy into heat energy."
            ],
            definitions: [
              "Conservation of energy: energy cannot be created or destroyed, only transformed.",
              "Kinetic energy: energy of motion (½mv²).",
              "Potential energy: stored energy due to position (mgh).",
              "Energy transformation: conversion of energy from one form to another."
            ],
            examples: [
              "A swinging pendulum converts potential energy to kinetic energy and back.",
              "A battery converts chemical energy into electrical energy."
            ],
            waecFocus: [
              "State the principle of conservation of energy.",
              "Trace the energy changes in a torch bulb.",
              "Explain why a machine cannot give out more energy than it receives."
            ],
            memoryTip: "Energy is never made or lost — it only changes costume."
          },
          {
            id: "g8-t3-3", image: "images/diagrams/solubility-curve.svg", unit: "1.3", page: "90", title: "Solutions, Saturation and Solubility Curve", icon: "🧪",
            explanation: "A solution is a homogeneous mixture of a solute dissolved in a solvent. How much solute dissolves depends on temperature, and this relationship is shown by a solubility curve.",
            points: [
              "Solubility is the maximum amount of solute that dissolves in 100 g of solvent at a given temperature.",
              "An unsaturated solution can still dissolve more solute at that temperature.",
              "A saturated solution contains the maximum amount of solute at that temperature.",
              "A supersaturated solution contains more solute than should dissolve (unstable — seeded crystals form).",
              "Most solids become more soluble as temperature rises; gases become less soluble.",
              "A solubility curve is a graph of solubility against temperature.",
              "Solubility is measured in g per 100 g of water.",
              "To make a saturated solution, add solute with stirring until no more dissolves.",
              "Cooling a saturated solution of a salt like potassium nitrate gives crystals."
            ],
            definitions: [
              "Solution: a homogeneous mixture of solute and solvent.",
              "Solute: the substance that dissolves.",
              "Solvent: the liquid in which the solute dissolves (usually water).",
              "Solubility: the maximum mass of solute that dissolves in 100 g of solvent at a stated temperature.",
              "Solubility curve: a graph showing how solubility changes with temperature."
            ],
            examples: [
              "36 g of salt dissolves in 100 g of water at 20 °C — that is its solubility.",
              "Cooling a hot saturated solution of sodium trioxocarbonate(IV) gives crystals."
            ],
            waecFocus: [
              "Define solubility and state its unit.",
              "Distinguish between saturated, unsaturated and supersaturated solutions.",
              "Read and interpret a solubility curve."
            ],
            memoryTip: "Unsaturated = can take more. Saturated = full. Supersaturated = overfull and unstable."
          },
          {
            id: "g8-t3-4", unit: "1.4", page: "92", title: "Crystallization", icon: "🔷",
            explanation: "Crystallization is a technique for purifying a solid by dissolving it in a hot solvent, then cooling so that pure crystals form while impurities stay in solution.",
            points: [
              "It is used to obtain pure crystals of a substance from a mixture.",
              "Steps: make a hot saturated solution → filter → allow to cool slowly → filter off crystals → wash with cold water → dry.",
              "Slow cooling gives large, well-formed crystals; rapid cooling gives small crystals.",
              "Crystals of sodium trioxocarbonate(IV) (washing soda) are made this way.",
              "Copper(II) sulfate crystals are blue; sodium chloride crystals are cubic.",
              "Crystallization differs from evaporation to dryness because impurities remain dissolved.",
              "Water of crystallisation is water held in the crystal structure.",
              "Heating a hydrated crystal removes water of crystallisation and changes its colour."
            ],
            definitions: [
              "Crystallization: the formation of solid crystals from a solution.",
              "Hydrated crystal: a crystal containing water of crystallisation.",
              "Anhydrous: a substance with no water of crystallisation.",
              "Supernatant: the liquid above the crystals in a container."
            ],
            examples: [
              "Copper(II) sulfate crystals are made by cooling a hot saturated solution.",
              "Blue copper(II) sulfate turns white when heated — water of crystallisation is lost."
            ],
            waecFocus: [
              "Outline the steps of crystallization.",
              "State two differences between crystallization and simple evaporation.",
              "Explain what water of crystallisation is using copper(II) sulfate."
            ],
            memoryTip: "Hot saturated → filter → cool slowly → crystals."
          }
        ]
      },
      {
        id: "g8-t4",
        number: "Theme 4",
        title: "Air and Water",
        topics: [
          {
            id: "g8-t4-1", image: "images/diagrams/fire-triangle.svg", unit: "1.1", page: "93", title: "Burning (Combustion)", icon: "🔥",
            explanation: "Burning (combustion) is a rapid chemical reaction between a substance and oxygen that gives out heat and light. Three things are needed for burning: fuel, oxygen and heat.",
            points: [
              "The fire triangle has three sides: fuel, oxygen (air) and heat (ignition temperature).",
              "Remove any one side and the fire goes out — this is the principle of fire fighting.",
              "A supporter of combustion (e.g. oxygen) is needed for burning; nitrogen does not support burning.",
              "Combustion is exothermic — it releases heat energy.",
              "Complete burning of carbon gives carbon dioxide; incomplete burning gives carbon monoxide and soot.",
              "Carbon burns: C + O₂ → CO₂.",
              "Carbon monoxide is poisonous because it combines with haemoglobin and stops oxygen transport.",
              "Types of combustion: rapid (fire), slow (rusting) and spontaneous (self-heating).",
              "Fire extinguishers work by removing heat, oxygen or fuel.",
              "Burning requires a substance to reach its ignition temperature."
            ],
            definitions: [
              "Combustion: the chemical reaction of a substance with oxygen giving heat and light.",
              "Fuel: any combustible material used as a source of heat.",
              "Ignition temperature: the lowest temperature at which a substance catches fire.",
              "Exothermic reaction: a reaction that releases heat energy.",
              "Supporter of combustion: a substance (like oxygen) that allows burning."
            ],
            examples: [
              "A candle burns in air but goes out in a closed jar as oxygen is used up.",
              "Sand on a fire cuts off the oxygen supply."
            ],
            waecFocus: [
              "Draw and label the fire triangle.",
              "Explain how each side of the fire triangle can be removed to put out a fire.",
              "Distinguish between complete and incomplete combustion."
            ],
            memoryTip: "Fire needs Fuel + Oxygen + Heat. Take one away, fire is gone."
          },
          {
            id: "g8-t4-2", image: "images/diagrams/rusting-experiment.svg", unit: "1.2", page: "94", title: "Rusting", icon: "🔩",
            explanation: "Rusting is the slow oxidation of iron or steel in the presence of air and water, forming a brown flaky solid called hydrated iron(III) oxide. It damages iron structures badly.",
            points: [
              "Rusting needs both oxygen AND water — neither alone is enough.",
              "Iron + oxygen + water → hydrated iron(III) oxide (rust).",
              "Rusting is an electrochemical process involving the transfer of electrons.",
              "Rust is flaky and does not protect the iron underneath, so rusting continues inward.",
              "Methods of prevention: painting, greasing and oiling, galvanising (coating with zinc), tinning, electroplating, using stainless steel (alloying with chromium and nickel).",
              "Galvanising protects even if scratched because zinc is more reactive and corrodes first (sacrificial protection).",
              "Rusting speeds up in salt water, acid rain and in the presence of acids.",
              "Keeping iron dry and away from acids prevents rusting.",
              "Rust is reddish-brown and holds about 30% water by mass."
            ],
            definitions: [
              "Rusting: slow oxidation of iron in the presence of air and water.",
              "Galvanising: coating iron with a layer of zinc to prevent rusting.",
              "Alloy: a mixture of a metal with one or more other elements to improve properties.",
              "Corrosion: gradual destruction of a material by chemical reaction with its environment."
            ],
            examples: [
              "A nail in dry air does not rust; the same nail in water rusts quickly.",
              "A tin can prevents food from reacting with the iron inside."
            ],
            waecFocus: [
              "State the two conditions necessary for rusting.",
              "Explain why painting and galvanising prevent rusting.",
              "Describe an experiment to show that air and water are both needed for rusting."
            ],
            memoryTip: "Rust = Iron + Water + Oxygen. Remove either water or oxygen and no rust."
          },
          {
            id: "g8-t4-3", unit: "2.0", page: "95", title: "Water and Air Pressure", icon: "🫧",
            explanation: "Pressure is force acting normally (perpendicularly) on unit area. Liquids and gases both exert pressure, and this pressure increases with depth and decreases with height.",
            points: [
              "Pressure = force ÷ area, P = F / A, unit is pascal (Pa) or N/m².",
              "Pressure in a liquid acts in all directions at a point.",
              "Pressure in a liquid increases with depth: P = ρgh.",
              "Pressure in a liquid depends on depth and density, not on the shape of the container.",
              "Pressure of air (atmospheric pressure) is about 101,325 Pa (1013 mbar) at sea level.",
              "Atmospheric pressure decreases as altitude increases.",
              "Air pressure is the reason a drinking straw works, why a pump lifts water and why weather changes.",
              "Pressure of a gas increases when it is compressed and decreases when it is expanded.",
              "Gases exert equal pressure in all directions in a closed container.",
              "Suction is really atmospheric pressure pushing liquid up into a space of lower pressure."
            ],
            definitions: [
              "Pressure: force per unit area acting normally on a surface.",
              "Atmospheric pressure: the pressure exerted by the weight of the atmosphere.",
              "Pascal: the SI unit of pressure (1 Pa = 1 N/m²).",
              "Depth: the vertical distance below the surface of a liquid."
            ],
            examples: [
              "A dam is thicker at the bottom because water pressure is greatest there.",
              "A barometer measures atmospheric pressure; an aneroid barometer has no liquid."
            ],
            waecFocus: [
              "Calculate pressure using P = F / A and P = ρgh.",
              "Explain why a submarine is built with strong walls.",
              "State how atmospheric pressure changes with altitude."
            ],
            memoryTip: "Deeper = more pressure. Higher = less air pressure. Pressure = F / A."
          },
          {
            id: "g8-t4-4", image: "images/diagrams/tin-holes-pressure.svg", unit: "2.1", page: "96", title: "Experiments on Pressure", icon: "🧪",
            explanation: "Simple classroom experiments demonstrate that liquid pressure increases with depth, that pressure acts in all directions and that atmospheric pressure is real and measurable.",
            points: [
              "A tin with holes at different heights shows water spouts out furthest from the lowest hole.",
              "A thistle funnel with a rubber sheet shows the deeper side experiences more pressure.",
              "U-tube manometers compare the pressure of two gases.",
              "A bell jar experiment with a partially evacuated jar shows objects expand as external pressure falls.",
              "A Magdeburg hemispheres demonstration shows the huge force of atmospheric pressure.",
              "A barometer (mercury or aneroid) measures atmospheric pressure.",
              "Paradox experiments (a card supporting an inverted glass of water) show atmospheric pressure acts upwards.",
              "To read a mercury barometer: measure the height of the mercury column above the free surface.",
              "Precaution: ensure apparatus are airtight and free from leaks.",
              "Results are recorded and compared with expected values to check accuracy."
            ],
            definitions: [
              "Manometer: an instrument for measuring the pressure of a gas.",
              "Barometer: an instrument for measuring atmospheric pressure.",
              "Vacuum: a space with almost no gas in it.",
              "Airtight: not allowing air to pass in or out."
            ],
            examples: [
              "Water squirts furthest from the bottom hole of a tin — greatest depth, greatest pressure.",
              "Pulling apart Magdeburg hemispheres needs many people because air pressure holds them together."
            ],
            waecFocus: [
              "Describe the tin-with-holes experiment and state its conclusion.",
              "Explain how a simple water barometer works.",
              "State one precaution and one source of error in a pressure experiment."
            ],
            memoryTip: "Lowest hole squirts furthest = pressure increases with depth."
          }
        ]
      },
      {
        id: "g8-t5",
        number: "Theme 5",
        title: "Ecology Part 2",
        topics: [
          {
            id: "g8-t5-1", unit: "1.1", page: "99", title: "Environmental Protection and Management", icon: "🛡️",
            explanation: "Environmental protection means safeguarding the air, water, soil and living things from damage. Good management ensures resources last for future generations.",
            points: [
              "Protection includes preventing pollution, conserving resources and managing waste.",
              "Reforestation (tree planting) prevents soil erosion and restores habitats.",
              "Proper farming methods — terracing, crop rotation, contour ploughing — protect soil.",
              "Protected areas such as national parks and game reserves preserve wildlife.",
              "Laws and enforcement (e.g. bans on illegal logging and hunting) protect the environment.",
              "Environmental education raises awareness in communities.",
              "Sustainable use means using resources at a rate that allows them to regenerate.",
              "Environmental management considers the needs of people, animals and plants together."
            ],
            definitions: [
              "Environmental protection: activities that prevent damage to the environment.",
              "Sustainable development: meeting present needs without compromising future generations.",
              "Conservation: careful use and protection of natural resources.",
              "Refostation: planting trees on land that has been cleared."
            ],
            examples: [
              "Planting trees along a river bank prevents soil washing into the water.",
              "National parks protect animals such as elephants from poaching."
            ],
            waecFocus: [
              "State four ways of protecting the environment.",
              "Explain the meaning of sustainable use of resources.",
              "Give two roles of national parks in environmental management."
            ],
            memoryTip: "Protect air, water, soil and life — that is the whole job."
          },
          {
            id: "g8-t5-2", unit: "1.2", page: "99", title: "Natural Resources", icon: "🏞️",
            explanation: "Natural resources are materials and energy sources found in nature that are useful to people. They are grouped as renewable or non-renewable according to how fast they are replaced.",
            points: [
              "Renewable resources can be replaced within a short time (sunlight, wind, water, forests, wildlife, crops).",
              "Non-renewable resources take millions of years to form and run out (petroleum, coal, natural gas, minerals).",
              "Biological resources are living (plants, animals, fish).",
              "Physical resources are non-living (land, water, air, climate).",
              "Mineral resources include metallic ores (iron, gold) and non-metallic minerals (limestone, salt).",
              "Energy resources include fossil fuels, solar energy, hydroelectric power, biogas and wind.",
              "Over-use of a resource can make it scarce or extinct.",
              "Renewable resources still need careful management to avoid depletion."
            ],
            definitions: [
              "Natural resource: any material or energy source obtained from nature.",
              "Renewable resource: a resource replaced naturally within a short period.",
              "Non-renewable resource: a resource that takes very long to form and can be exhausted.",
              "Fossil fuel: fuel formed from the remains of ancient organisms (coal, oil, gas)."
            ],
            examples: [
              "Sunlight, water and forests are renewable; crude oil and coal are non-renewable.",
              "Fish stocks decline if harvesting exceeds the rate of reproduction."
            ],
            waecFocus: [
              "Classify given resources as renewable or non-renewable.",
              "Give three examples of each type of natural resource.",
              "Explain why non-renewable resources must be used carefully."
            ],
            memoryTip: "Renewable comes back quickly; non-renewable takes forever."
          },
          {
            id: "g8-t5-3", unit: "1.3", page: "99", title: "Conservation of Natural Resources", icon: "🌱",
            explanation: "Conservation means using natural resources wisely so that they are not wasted or exhausted. It includes protecting soil, water, forests, wildlife and minerals.",
            points: [
              "Soil conservation: terracing, contour ploughing, mulching, cover cropping and avoiding bush burning.",
              "Water conservation: fixing leaks, recycling water, treating wastewater and protecting springs.",
              "Forest conservation: selective logging, replanting, avoiding bush fires and legislating against illegal felling.",
              "Wildlife conservation: game reserves, national parks, anti-poaching laws and breeding programmes.",
              "Mineral conservation: recycling metals, using substitutes and efficient mining methods.",
              "Energy conservation: using energy-efficient appliances, solar energy and public transport.",
              "Reduce, Reuse and Recycle (3 Rs) apply to all resources.",
              "Conservation balances human needs with the needs of the ecosystem."
            ],
            definitions: [
              "Conservation: the careful use and protection of resources to prevent wastage.",
              "Selective logging: cutting only some mature trees while leaving others standing.",
              "Recycling: reprocessing used material into new products.",
              "Breeding programme: a managed scheme to increase the numbers of an endangered species."
            ],
            examples: [
              "Terracing on hillsides slows water runoff and holds soil.",
              "Recycling aluminium cans saves the energy needed to mine new bauxite."
            ],
            waecFocus: [
              "State three methods of conserving soil, water and forests.",
              "Explain how recycling helps conserve natural resources.",
              "Give three ways of conserving energy in the home."
            ],
            memoryTip: "3 Rs: Reduce use, Reuse again, Recycle into something new."
          },
          {
            id: "g8-t5-4", unit: "1.4", page: "100", title: "Pollution and Control Methods", icon: "🏭",
            explanation: "Pollution is the introduction of harmful substances into the environment at levels that damage living things. It affects air, water, soil and can cause noise and light pollution.",
            points: [
              "Air pollution is caused by smoke, vehicle exhaust, burning refuse, dust and factory gases.",
              "Harmful air pollutants: carbon monoxide, sulphur dioxide, nitrogen oxides, smoke and lead particles.",
              "Water pollution comes from sewage, industrial waste, fertilisers, pesticides and oil spills.",
              "Soil (land) pollution is caused by refuse dumps, pesticides, plastics and mining waste.",
              "Noise pollution comes from traffic, machines, loud music and construction.",
              "Control methods: treating waste before release, using filters and scrubbers, planting trees, recycling, using unleaded fuel and enforcing laws.",
              "Eutrophication occurs when fertiliser-rich water causes algal bloom that depletes oxygen.",
              "Acid rain (from SO₂ and NOₓ) damages buildings, lakes and forests.",
              "Pollution causes diseases such as cholera, lead poisoning and respiratory illness."
            ],
            definitions: [
              "Pollution: the contamination of the environment with harmful substances.",
              "Pollutant: any substance that causes pollution.",
              "Sewage: waste water and faecal matter from homes and industries.",
              "Eutrophication: enrichment of water with nutrients causing oxygen depletion."
            ],
            examples: [
              "Untested factory effluent discharged into a river kills fish.",
              "Lead from vehicle exhaust damages the nervous system of children."
            ],
            waecFocus: [
              "Name three types of pollution and give two causes of each.",
              "State four methods of controlling air and water pollution.",
              "Explain how acid rain is formed and its effects."
            ],
            memoryTip: "Air, Water, Soil, Noise — and the cause is always waste we did not treat."
          },
          {
            id: "g8-t5-5", unit: "1.5", page: "101", title: "Desertification", icon: "🏜️",
            explanation: "Desertification is the process by which fertile land becomes dry, sandy and unproductive, usually in dry areas. It is largely caused by human activities and climate factors.",
            points: [
              "Desertification is the degradation of land in arid and semi-arid areas.",
              "Causes: over-grazing, over-cultivation, deforestation, poor irrigation, drought and climate change.",
              "Over-grazing removes plant cover so soil is exposed to wind and water.",
              "Poor irrigation leaves salts in the soil (salinisation), making it unfit for crops.",
              "Effects: reduced crop yield, food shortage, migration of people and loss of biodiversity.",
              "Prevention: tree planting, controlled grazing, terracing, mulching and drought-resistant crops.",
              "The Sahel region south of the Sahara is a well-known affected area.",
              "Combating desertification requires community effort and government policy."
            ],
            definitions: [
              "Desertification: the process by which fertile land turns into desert.",
              "Arid: very dry with little rainfall.",
              "Salinisation: accumulation of salts in soil due to poor drainage or irrigation.",
              "Over-grazing: too many animals feeding on land so vegetation cannot recover."
            ],
            examples: [
              "Removing trees on a hillside leads to soil erosion and eventually bare land.",
              "Cattle grazing continuously in one area kills the grass cover."
            ],
            waecFocus: [
              "Define desertification and state its main causes.",
              "List four effects and four preventive measures of desertification.",
              "Explain how over-grazing leads to desertification."
            ],
            memoryTip: "No plants → wind and rain take the soil → desert."
          }
        ]
      }
      ,
      {
        id: "g8-t6",
        number: "Theme 6",
        title: "Food Part 2",
        topics: [
          {
            id: "g8-t6-1", unit: "1.0", page: "103", title: "Deficiency Diseases", icon: "🩺",
            explanation: "A deficiency disease is caused by a lack of one or more nutrients in the diet over a long period. Knowing the symptom of each deficiency helps in prevention and treatment.",
            points: [
              "Kwashiorkor is caused by lack of protein — symptoms: swollen belly, thin limbs, skin lesions, growth failure.",
              "Marasmus is caused by lack of both protein and energy (calories) — symptoms: wasted muscles, old-looking face, extreme thinness.",
              "Anaemia is caused by lack of iron — symptoms: weakness, pale skin, breathlessness.",
              "Rickets is caused by lack of vitamin D and calcium — symptoms: soft, bowed legs and bones in children.",
              "Scurvy is caused by lack of vitamin C — symptoms: bleeding gums, slow wound healing.",
              "Night blindness is caused by lack of vitamin A — symptoms: poor vision in dim light.",
              "Beriberi is caused by lack of vitamin B1 (thiamine) — symptoms: nerve damage, weak muscles, swollen legs.",
              "Goitre is caused by lack of iodine — symptoms: swollen thyroid gland in the neck.",
              "Obesity results from excess energy intake compared with energy used.",
              "Treatment: correct the diet by adding the missing nutrient and seek medical advice."
            ],
            definitions: [
              "Deficiency disease: illness resulting from the lack of a nutrient in the diet.",
              "Kwashiorkor: protein-deficiency disease with a swollen abdomen.",
              "Marasmus: disease caused by a combined deficiency of protein and energy.",
              "Anaemia: condition in which the blood lacks enough healthy red blood cells or haemoglobin."
            ],
            examples: [
              "A child fed only cassava and water develops kwashiorkor because protein is missing.",
              "Eating citrus fruits or peppers cures and prevents scurvy."
            ],
            waecFocus: [
              "Match each deficiency disease to the missing nutrient.",
              "State the symptoms of kwashiorkor, marasmus, rickets and scurvy.",
              "Explain how a balanced diet prevents deficiency diseases."
            ],
            memoryTip: "Protein→Kwashiorkor, Iron→Anaemia, Vit D→Rickets, Vit C→Scurvy, Iodine→Goitre."
          },
          {
            id: "g8-t6-2", unit: "2.0", page: "103", title: "Food Contamination", icon: "⚠️",
            explanation: "Food contamination is the presence of harmful substances in food, making it unsafe to eat. Contamination can be biological, chemical or physical.",
            points: [
              "Biological contamination is caused by bacteria, viruses, fungi and parasites.",
              "Chemical contamination comes from pesticides, cleaning agents, preservatives in excess and metals.",
              "Physical contamination comes from hair, stones, glass, plastic and dust.",
              "Common sources: untreated water, raw sewage, dirty hands, contaminated utensils and poor storage.",
              "Food that is not cooked or stored at the right temperature allows bacteria to multiply.",
              "Signs of contaminated food: bad smell, slimy texture, unusual colour, mould and off taste.",
              "Contaminated food causes food poisoning — symptoms include vomiting, diarrhoea, stomach cramps and fever.",
              "Prevention: wash hands and utensils, cook food thoroughly, refrigerate, cover food and use clean water."
            ],
            definitions: [
              "Contamination: the presence of an unwanted harmful substance in food.",
              "Food poisoning: illness caused by eating contaminated food.",
              "Pathogen: a micro-organism that causes disease.",
              "Preservative: a substance added to food to slow spoilage."
            ],
            examples: [
              "Leftover rice kept in a warm kitchen can harbour bacteria that cause food poisoning.",
              "Pesticide residue on unwashed vegetables is a chemical contamination."
            ],
            waecFocus: [
              "Give three types of food contamination with examples.",
              "State four ways of preventing food contamination.",
              "Explain how contaminated food causes food poisoning."
            ],
            memoryTip: "Biological = germs, Chemical = substances, Physical = foreign objects."
          },
          {
            id: "g8-t6-3", unit: "3.0", page: "104", title: "Methods of Food Preservation", icon: "🥫",
            explanation: "Food preservation slows or stops the growth of spoilage organisms and keeps food safe for longer. Each method works by removing water, lowering temperature or blocking microbial growth.",
            points: [
              "Drying/dehydration removes water so bacteria cannot grow (fish, fruits, vegetables).",
              "Smoking uses heat, smoke and chemicals to preserve fish and meat.",
              "Salting draws water out of microbes by osmosis (meat, fish, vegetables).",
              "Canning seals food in airtight containers and heats it to kill microbes.",
              "Refrigeration and freezing slow down bacterial growth by lowering temperature.",
              "Pasteurisation heats milk to about 72 °C then cools it quickly to kill harmful bacteria.",
              "Addition of chemical preservatives such as sugar, vinegar, sodium benzoate and sulphites.",
              "Sterilisation kills all micro-organisms by boiling or heating under pressure.",
              "Root cellars keep tubers cool, dark and dry for storage.",
              "Good storage also protects food from rats, insects and damp."
            ],
            definitions: [
              "Preservation: keeping food from spoiling for a longer period.",
              "Drying: removing most of the water from food.",
              "Pasteurisation: heating a liquid (usually milk) to kill pathogens then cooling it.",
              "Sterilisation: complete removal or destruction of all micro-organisms."
            ],
            examples: [
              "Kunu and dried fish are preserved by drying.",
              "Milk is pasteurised so it stays safe for days."
            ],
            waecFocus: [
              "List six methods of preserving food.",
              "Explain how salting and drying preserve food.",
              "Distinguish between pasteurisation and sterilisation."
            ],
            memoryTip: "Take away the water or the warmth and microbes cannot grow."
          }
        ]
      },
      {
        id: "g8-t7",
        number: "Theme 7",
        title: "Human Body Part 2",
        topics: [
          {
            id: "g8-t7-1", unit: "1.0", page: "106", title: "Cellular Organisation", icon: "🧬",
            explanation: "Cellular organisation describes how cells are grouped into tissues, tissues into organs, organs into systems and systems into the whole organism. Every level works together to keep the body alive.",
            points: [
              "Cells are the basic structural and functional units of life.",
              "Tissues are groups of similar cells doing the same job (e.g. muscle tissue, nerve tissue).",
              "Organs are made of different tissues working together (e.g. heart, stomach, kidney).",
              "Systems are groups of organs working together (e.g. digestive, respiratory, circulatory).",
              "The organism is the complete living being made of all the systems.",
              "Example chain: cells → muscle tissue → heart → circulatory system → human being.",
              "The skin is the largest organ of the body.",
              "Specialisation allows cells to be efficient at their particular job.",
              "Damage at cell level can affect the whole organism (e.g. cancer)."
            ],
            definitions: [
              "Tissue: a group of similar cells performing a common function.",
              "Organ: a structure made of different tissues working together.",
              "Organ system: a group of organs that cooperate to perform a major function.",
              "Organism: an individual living thing."
            ],
            examples: [
              "The stomach has muscle, gland, nerve and connective tissues.",
              "The digestive system includes the mouth, oesophagus, stomach, intestines and glands."
            ],
            waecFocus: [
              "Arrange cells, tissues, organs, systems and organisms in order of complexity.",
              "Give one example of an organ for each body system studied.",
              "Explain the meaning of cellular organisation."
            ],
            memoryTip: "Cell → Tissue → Organ → System → Organism. C-T-O-S-O."
          },
          {
            id: "g8-t7-2", image: "images/diagrams/internal-organs.svg", unit: "1.0", page: "106", title: "Functions of Some Human Internal Organs", icon: "🫀",
            explanation: "Internal organs carry out the vital processes of the body. Knowing each organ and its function explains how the body takes in food, breathes, removes waste and stays alive.",
            points: [
              "The brain controls and coordinates all body activities.",
              "The heart pumps blood around the body through blood vessels.",
              "The lungs take in oxygen and give out carbon dioxide.",
              "The liver processes nutrients, detoxifies poisons and stores glycogen.",
              "The kidneys filter blood and produce urine to remove nitrogenous waste.",
              "The stomach churns food and mixes it with gastric juice to start protein digestion.",
              "The small intestine completes digestion and absorbs nutrients into the blood.",
              "The pancreas produces insulin to control blood sugar level.",
              "The spleen destroys worn-out red blood cells.",
              "The gall bladder stores bile produced by the liver."
            ],
            definitions: [
              "Organ: a part of the body with a specific function.",
              "Glycogen: the form in which glucose is stored in the liver.",
              "Insulin: a hormone from the pancreas that lowers blood sugar.",
              "Urine: the liquid waste filtered from the blood by the kidneys."
            ],
            examples: [
              "After a meal the liver stores excess glucose as glycogen.",
              "When blood sugar rises, the pancreas releases more insulin."
            ],
            waecFocus: [
              "State the function of the liver, kidneys, pancreas and heart.",
              "Explain what happens when the kidneys fail to work.",
              "Name the organ that stores bile and the organ that produces it."
            ],
            memoryTip: "Heart pumps, Lungs breathe, Liver cleans, Kidneys filter, Brain controls."
          }
        ]
      },
      {
        id: "g8-t8",
        number: "Theme 8",
        title: "Health and Hygiene 2",
        topics: [
          {
            id: "g8-t8-1", unit: "1.0", page: "109", title: "Sanitation", icon: "🚰",
            explanation: "Sanitation is the provision of clean water, proper sewage disposal and hygienic living conditions to protect public health. Poor sanitation is a major cause of disease in developing communities.",
            points: [
              "Sanitation includes safe water supply, sewage and refuse disposal and good housing.",
              "Clean drinking water must be treated by filtration, boiling, chlorination or UV treatment.",
              "Sewage should be carried away in covered drains to treatment plants.",
              "Latrines and toilets must be kept clean and located away from water sources.",
              "Good housing has ventilation, light, drainage and enough space.",
              "Drainage removes stagnant water, which breeds mosquitoes.",
              "Community clean-up days keep the environment free of refuse.",
              "Sanitation prevents cholera, typhoid, dysentery, malaria and other diseases.",
              "Food handlers and water vendors must follow hygiene rules."
            ],
            definitions: [
              "Sanitation: the provision of hygienic conditions to protect health.",
              "Sewage: waste water and excreta carried away in drains.",
              "Chlorination: adding chlorine to water to kill disease organisms.",
              "Drainage: a system of channels that removes excess water and waste."
            ],
            examples: [
              "Boiling drinking water kills cholera bacteria.",
              "A blocked drain causes mosquitoes to breed and spread malaria."
            ],
            waecFocus: [
              "State four components of good sanitation.",
              "Explain three ways of making water safe to drink.",
              "Describe how poor sanitation leads to disease outbreaks."
            ],
            memoryTip: "Sanitation = clean water + covered drains + safe waste + good housing."
          },
          {
            id: "g8-t8-2", unit: "2.0", page: "109", title: "Types of Wastes", icon: "🗑️",
            explanation: "Waste is any unwanted material produced by homes, industries, farms or institutions. Wastes are classified by their source and by how easily they decay.",
            points: [
              "Domestic (household) waste: food scraps, paper, plastics, cans and ashes.",
              "Industrial waste: chemicals, smoke, ash, effluents and scrap metal.",
              "Agricultural waste: crop residues, animal droppings, pesticides and fertiliser bags.",
              "Biodegradable waste can be broken down by microbes (food scraps, paper, leaves).",
              "Non-biodegradable waste cannot be broken down easily (plastics, glass, metal, nylon).",
              "Organic waste is of animal or plant origin; inorganic waste is not.",
              "Hazardous waste includes chemicals, batteries, medical and radioactive waste.",
              "Liquid waste (sewage) and solid waste (refuse) need different disposal methods.",
              "E-waste (old phones, computers) contains valuable and toxic materials.",
              "Waste can be classified as solid, liquid or gaseous."
            ],
            definitions: [
              "Waste: unwanted or unusable material left after use.",
              "Biodegradable: capable of being broken down by micro-organisms.",
              "Non-biodegradable: cannot be decomposed by micro-organisms.",
              "Refuse: solid waste from homes and institutions."
            ],
            examples: [
              "Banana peel rots away (biodegradable); a plastic bottle does not (non-biodegradable).",
              "Factory smoke is gaseous waste; factory effluent is liquid waste."
            ],
            waecFocus: [
              "Classify wastes by source and by biodegradability.",
              "Give four examples of non-biodegradable waste and explain the problem they cause.",
              "Distinguish between organic and inorganic waste."
            ],
            memoryTip: "Biodegradable = nature can eat it. Non-biodegradable = it stays forever."
          },
          {
            id: "g8-t8-3", unit: "2.1", page: "109", title: "Methods of Disposal of Domestic Wastes", icon: "♻️",
            explanation: "Domestic waste must be disposed of safely so that it does not pollute the environment or spread disease. The method chosen depends on the type of waste and the community's resources.",
            points: [
              "Dumping/burial in a designated refuse dump or landfill is the commonest method.",
              "Burning (incineration) reduces the volume of waste but produces smoke and toxic gases.",
              "Composting converts biodegradable waste into manure for farms.",
              "Rubbish pits are used in rural areas for non-burnable waste.",
              "Recycling converts waste materials into new useful products.",
              "Rearing animals (pigs, chickens) on food scraps reuses organic waste.",
              "Sewage is carried by drains to septic tanks or sewage treatment plants.",
              "Hazardous and medical waste must be handled and disposed of separately by experts.",
              "Waste should be sorted at source into biodegradable and non-biodegradable.",
              "Proper disposal keeps drains clear, reduces odour and cuts breeding sites for flies and rats."
            ],
            definitions: [
              "Landfill: a site where waste is buried in layers and covered.",
              "Composting: controlled decomposition of organic waste into manure.",
              "Incineration: burning waste at high temperatures to reduce its volume.",
              "Recycling: reprocessing waste materials into new products."
            ],
            examples: [
              "Kitchen waste and leaves can be composted into garden manure.",
              "Plastic bottles can be recycled into fibre for clothing."
            ],
            waecFocus: [
              "List five methods of disposing domestic waste.",
              "Explain the advantages and disadvantages of burning refuse.",
              "Describe how composting is carried out."
            ],
            memoryTip: "Sort first: biodegradable → compost; the rest → recycle or landfill."
          }
        ]
      },
      {
        id: "g8-t9",
        number: "Theme 9",
        title: "Technology Part 2",
        topics: [
          {
            id: "g8-t9-1", unit: "1.0", page: "111", title: "Types of Communication Technology", icon: "📡",
            explanation: "Communication technology is the use of devices, systems and networks to send and receive messages. It has transformed how people share information across the world.",
            points: [
              "Traditional communication: talking, drumming, signals, messengers and letters.",
              "Modern communication uses electrical and electronic devices.",
              "Telephony: fixed landlines and mobile phones for voice calls.",
              "Broadcasting: radio and television send information to many people at once.",
              "Print media: newspapers, magazines and books.",
              "Internet and email allow instant written communication worldwide.",
              "Satellite and optical fibre cable carry signals over long distances.",
              "Signalling methods: Morse code, flags, smoke and body language.",
              "Communication can be one-way (broadcast) or two-way (telephone, chat).",
              "Communication technology improves trade, education, healthcare and emergency response."
            ],
            definitions: [
              "Communication: the exchange of information between a sender and a receiver.",
              "Communication technology: the use of tools and systems to send messages.",
              "Broadcast: sending information to many receivers at the same time.",
              "Encoder/decoder: devices that convert signals into transmissible form and back."
            ],
            examples: [
              "A radio broadcast sends one message to millions of listeners.",
              "An email travels through the internet in seconds."
            ],
            waecFocus: [
              "Name four types of communication technology.",
              "Distinguish between one-way and two-way communication with examples.",
              "State two advantages of modern communication technology."
            ],
            memoryTip: "Old: words, drums, letters. New: phone, radio, TV, internet."
          },
          {
            id: "g8-t9-2", unit: "2.0", page: "111", title: "Some Communication Devices", icon: "📱",
            explanation: "Communication devices are the physical tools used to send and receive messages. Each device has particular advantages in speed, range and cost.",
            points: [
              "Telephone/mobile phone: instant two-way voice and video communication.",
              "Radio: broadcasts voice and music over a wide area; useful in emergencies.",
              "Television: transmits moving pictures with sound to a wide audience.",
              "Computer: processes, stores and sends text, images and video.",
              "Satellite: receives and retransmits signals across continents.",
              "Optical fibre: carries large amounts of data as light pulses with little loss.",
              "Walkie-talkie: short-range two-way radio used by security and emergency teams.",
              "Fax machine: sends printed documents over telephone lines.",
              "Telegraph was an early device using electrical pulses (Morse code).",
              "Choosing a device depends on speed, distance, cost, reliability and secrecy."
            ],
            definitions: [
              "Device: a piece of equipment made for a particular purpose.",
              "Satellite: an artificial object orbiting the earth that relays signals.",
              "Optical fibre: thin glass fibres that transmit data as light.",
              "Telegraph: an early device for sending messages using electrical signals."
            ],
            examples: [
              "A mobile phone uses both radio waves and satellites to connect calls.",
              "Undersea optical fibre cables carry most internet traffic between continents."
            ],
            waecFocus: [
              "Name five communication devices and state the use of each.",
              "Compare the mobile phone and the radio in two respects.",
              "Explain why optical fibre is preferred for internet data."
            ],
            memoryTip: "Voice → phone/radio. Pictures → TV/video. Data → computer/fibre."
          },
          {
            id: "g8-t9-3", unit: "3.0", page: "112", title: "Computers: Parts and Functions", icon: "💻",
            explanation: "A computer is an electronic device that accepts data, processes it and produces information. It is made of hardware (physical parts) and software (programs).",
            points: [
              "Input devices: keyboard, mouse, scanner, microphone, joystick, webcam, barcode reader.",
              "Processing device: the central processing unit (CPU) inside the system unit.",
              "Memory: RAM (temporary, volatile) and ROM (permanent, non-volatile).",
              "Output devices: monitor, printer, speaker, projector, plotter.",
              "Storage devices: hard disk, flash drive, CD/DVD, memory card.",
              "The CPU has the arithmetic logic unit (ALU), control unit (CU) and registers.",
              "Software is grouped as system software (operating system) and application software (word processor, browser).",
              "The five stages of computer operation: input, processing, storage, output and feedback.",
              "Computers are fast, accurate, tireless and have large storage capacity.",
              "Computers cannot think — they only follow instructions given by people."
            ],
            definitions: [
              "Computer: an electronic device that processes data into useful information.",
              "Hardware: the physical, touchable parts of a computer.",
              "Software: the programs and instructions that tell the computer what to do.",
              "CPU: the central processing unit that carries out instructions.",
              "RAM: temporary memory that loses its contents when power is switched off.",
              "Input: data entered into a computer for processing."
            ],
            examples: [
              "Typing a letter is input; the CPU processes it; the printer outputs it.",
              "A word processor is application software; Windows or Linux is system software."
            ],
            waecFocus: [
              "Classify computer parts as input, output, storage or processing.",
              "State the function of the CPU, RAM and ROM.",
              "Distinguish between hardware and software with examples."
            ],
            memoryTip: "Input → Process → Store → Output. Hardware = touchable, Software = runnable."
          },
          {
            id: "g8-t9-4", unit: "3.1", page: "114", title: "The Internet and Its Uses", icon: "🌐",
            explanation: "The internet is a global network of interconnected computers that share information using standardized rules. It has become a major tool for communication, learning and business.",
            points: [
              "The internet connects millions of computers worldwide using routers and cables.",
              "The World Wide Web (WWW) is the system of pages and sites on the internet.",
              "A browser (Chrome, Firefox, Edge) is used to view web pages.",
              "Web addresses are written as URLs (uniform resource locators).",
              "Email allows fast written communication with attachments.",
              "Search engines (Google, Bing) help find information quickly.",
              "Uses: research, online learning, e-commerce, social networking, banking, news and entertainment.",
              "An internet service provider (ISP) gives access to the internet.",
              "Cyber risks include hacking, viruses, phishing and identity theft — use strong passwords and security software.",
              "Internet access can be by cable, Wi-Fi, mobile data or satellite."
            ],
            definitions: [
              "Internet: a worldwide system of connected computer networks.",
              "World Wide Web: the collection of documents and sites accessible on the internet.",
              "Browser: software used to access and display web pages.",
              "URL: the address of a page on the internet.",
              "Email: electronic mail sent and received over the internet."
            ],
            examples: [
              "Searching for revision notes online uses a search engine and a browser.",
              "An online shop lets customers order goods from home."
            ],
            waecFocus: [
              "State four uses of the internet.",
              "Explain the difference between the internet and the World Wide Web.",
              "Give three ways of protecting yourself online."
            ],
            memoryTip: "Internet = the roads. Web = the buildings. Browser = your car."
          }
        ]
      }
    ]
  }
  ,
  // ============================================================
  // GRADE 9
  // ============================================================
  {
    id: "g9",
    grade: "Grade 9",
    label: "Foundation Science — Grade Nine",
    icon: "📙",
    blurb: "Adaptations of vertebrates, atomic structure and bonding, acids and bases, energy, human body systems, diseases and project work.",
    themes: [
      {
        id: "g9-t1",
        number: "Theme 1",
        title: "Structure and Adaptations of Vertebrates",
        topics: [
          {
            id: "g9-t1-1", unit: "1.0", page: "115", title: "Meaning of Adaptation", icon: "🦎",
            explanation: "Adaptation is the way an organism's body structure and behaviour are suited to the environment in which it lives. Adaptations help organisms obtain food, avoid enemies and survive changing conditions.",
            points: [
              "Structural adaptations are features of the body (shape, colour, teeth, limbs).",
              "Behavioural adaptations are things the organism does (nocturnal hunting, migration, hibernation).",
              "Physiological adaptations are internal body processes (sweating, venom production, camouflage).",
              "Adaptations can be to a habitat (aquatic, arboreal, desert), to food (herbivore, carnivore) or to escape predators.",
              "Camouflage helps an animal blend with its surroundings.",
              "Warning colouration (aposematism) warns predators that an animal is poisonous.",
              "Mimicry is when a harmless animal copies the appearance of a harmful one.",
              "Adaptations arise over many generations through natural selection.",
              "An organism that cannot adapt to a changing environment may become extinct."
            ],
            definitions: [
              "Adaptation: a feature that helps an organism survive in its environment.",
              "Camouflage: colouring or shape that blends with the surroundings.",
              "Migration: seasonal movement of animals from one place to another for food or breeding.",
              "Natural selection: the process by which better-adapted organisms survive and reproduce."
            ],
            examples: [
              "A flatfish lying flat on the sea bed shows camouflage.",
              "A camel stores fat in its hump and has wide feet for desert life."
            ],
            waecFocus: [
              "Define adaptation and give three types with examples.",
              "Explain how camouflage helps an animal survive.",
              "Distinguish between structural and behavioural adaptations."
            ],
            memoryTip: "Structure, Behaviour, Physiology — the three kinds of adaptation."
          },
          {
            id: "g9-t1-2", image: "images/diagrams/tilapia.svg", unit: "2.1", page: "115", title: "Structure and Adaptations of the Tilapia Fish", icon: "🐟",
            explanation: "The tilapia is a freshwater fish whose body is perfectly shaped for life in water. Every feature — from its streamlined body to its gills and fins — helps it swim, breathe, feed and escape enemies.",
            points: [
              "Streamlined (fusiform) body shape reduces resistance when swimming.",
              "Body is covered with overlapping scales protected by mucus (slime) that reduces friction and prevents infections.",
              "Gills are the respiratory organs; water passes over them and oxygen diffuses into the blood.",
              "The operculum (gill cover) protects the gills and helps pump water over them.",
              "Fins — dorsal, pectoral, pelvic, anal and caudal (tail) — help in movement, balance and steering.",
              "The swim bladder (air bladder) controls buoyancy so the fish can stay at any depth.",
              "Lateral line detects vibrations and movements in the water.",
      "Eyes have no eyelids and are adapted for seeing underwater.",
              "A small mouth with teeth (in some species) suited to its diet; tilapia are mainly herbivorous/omnivorous.",
              "Kidneys conserve water and excrete dilute urine — an adaptation to freshwater.",
              "The lateral colouring (dark above, light below) provides camouflage (countershading)."
            ],
            definitions: [
              "Streamlined: tapering at both ends to reduce resistance in water.",
              "Operculum: the bony cover protecting the gills.",
              "Swim bladder: a gas-filled sac that controls buoyancy.",
              "Countershading: dark back and pale underside that make an animal hard to see."
            ],
            examples: [
              "A tilapia rises to the surface to take air into its swim bladder when it needs to float higher.",
              "Mucus on the scales makes the fish slippery, helping it escape predators."
            ],
            waecFocus: [
              "State six adaptations of the tilapia fish to aquatic life.",
              "Explain the function of the swim bladder and the lateral line.",
              "Describe how the gills are adapted for breathing in water."
            ],
            memoryTip: "Shape, scales, gills, fins, swim bladder, lateral line — water toolkit."
          },
          {
            id: "g9-t1-3", image: "images/diagrams/toad-life-cycle.svg", unit: "2.2", page: "116", title: "Structure and Adaptations of the Toad", icon: "🐸",
            explanation: "The toad is an amphibian that lives both on land and in water. Its features show a mixture of aquatic and terrestrial adaptations, which is typical of amphibians.",
            points: [
              "Body is covered with dry, warty skin instead of smooth moist skin — reduces water loss on land.",
              "Skin is used for respiration in water (cutaneous respiration) and hibernates underwater.",
              "Powerful hind limbs are adapted for jumping and swimming; fore limbs absorb the shock of landing.",
              "Webbed hind feet increase surface area for swimming.",
              "No tail in the adult stage — the tail is lost during metamorphosis.",
              "Large eyes with movable eyelids and a nictitating membrane that protects the eye in water.",
              "A short broad head with a wide mouth for catching insects.",
              "Tympanum (eardrum) is visible on the side of the head behind the eye — detects sound.",
              "Colour (brown/olive) gives camouflage against soil and vegetation.",
              "Toads lay eggs in water with no shells; tadpoles breathe with gills and metamorphose into adults.",
              "Poison glands in the skin secrete a bitter fluid that deters predators."
            ],
            definitions: [
              "Amphibian: a cold-blooded vertebrate that lives both on land and in water.",
              "Cutaneous respiration: breathing through the skin.",
              "Nictitating membrane: a transparent third eyelid protecting the eye in water.",
              "Metamorphosis: the gradual change in body form from larva to adult."
            ],
            examples: [
              "A toad stays damp by hiding under logs during the day.",
              "Tadpoles have gills and tails; adult toads have lungs and limbs."
            ],
            waecFocus: [
              "State six adaptations of the toad to its habitat.",
              "Explain the difference between the skin of a toad and that of a lizard.",
              "Describe the life cycle of a toad."
            ],
            memoryTip: "Amphibian = both lives: gills as a tadpole, lungs and legs as an adult."
          },
          {
            id: "g9-t1-4", unit: "2.3", page: "118", title: "Structure and Adaptations of the Agama Lizard", icon: "🦎",
            explanation: "The agama is a reptile adapted for life on land. Its dry scaly skin, claws and effective eyes make it a successful hunter in warm, dry habitats.",
            points: [
              "Body covered with dry, horny scales prevent water loss on land.",
              "Clawed toes grip rocks, soil and tree bark for climbing and running.",
              "Long tail helps with balance during running and jumping.",
              "Colour changes in males (bright blue/orange head) are used in courtship and territory display.",
              "Well-developed eyes with movable eyelids give sharp vision for spotting prey.",
              "External ear opening (tympanum) is visible behind the eye.",
              "Mouth has small pointed teeth for gripping insects.",
              "Lungs are used for breathing on land — it does not breathe through skin like a toad.",
              "Cold-blooded: it basks in the sun to raise its body temperature.",
              "Lays amniotic eggs with leathery shells on land — does not need water for reproduction.",
              "Well-developed limbs are used for running quickly across open ground.",
              "Camouflaged brown/olive colouring hides it from predators among rocks and dry grass."
            ],
            definitions: [
              "Reptile: a cold-blooded vertebrate with dry scaly skin laying amniotic eggs.",
              "Amniotic egg: an egg with a shell and membranes that can be laid on land.",
              "Ectothermic (cold-blooded): an animal that depends on external heat to regulate body temperature."
            ],
            examples: [
              "An agama sits on a warm rock in the morning to raise its body temperature.",
              "A male agama flashes bright colours to warn off rivals."
            ],
            waecFocus: [
              "State six adaptations of the agama lizard to terrestrial life.",
              "Explain why the agama basks in the sun.",
              "Compare the skin of an agama with the skin of a toad."
            ],
            memoryTip: "Reptile = dry scales, claws, lungs, lays eggs on land."
          },
          {
            id: "g9-t1-5", image: "images/diagrams/bird-adaptations.svg", unit: "2.4", page: "119", title: "Structure and Adaptations of Birds", icon: "🦅",
            explanation: "Birds are adapted for flight. Lightweight bones, feathers, powerful flight muscles and a high metabolic rate all work together to make flight possible.",
            points: [
              "Forelimbs are modified into wings — the main organ of flight.",
              "Feathers (contour, down and flight feathers) give lift, insulation and a streamlined shape.",
              "Bones are hollow and light with air spaces, reducing body weight.",
              "Breastbone (keel) is large and provides a surface for the attachment of flight muscles.",
              "Powerful pectoral muscles power the downstroke of the wings.",
              "Respiratory system has air sacs that ensure a continuous one-way flow of air — efficient oxygen supply.",
              "Heart is four-chambered and large, pumping oxygenated blood rapidly.",
              "Beak shape is adapted to diet — hooked in eagles, pointed in sparrows, flat in ducks.",
              "Feet are adapted to the way of life: perching, swimming, grasping prey or walking.",
              "Lightweight but strong, with no teeth (saves weight) and a crop for storing food.",
              "Excretory system produces uric acid (semi-solid) instead of urine to save water and weight.",
              "Warm-blooded (endothermic) — maintains constant body temperature for active flight."
            ],
            definitions: [
              "Feather: the keratin structure covering a bird's body, used for flight and insulation.",
              "Keel: the ridge on the breastbone where flight muscles attach.",
              "Air sac: extensions of the lungs that store air and improve respiration.",
              "Endothermic: maintaining a constant body temperature internally."
            ],
            examples: [
              "An eagle has sharp talons and a hooked beak for catching and tearing prey.",
              "A duck has webbed feet and a flat beak for swimming and filtering food."
            ],
            waecFocus: [
              "List six adaptations of birds for flight.",
              "Explain the importance of hollow bones and air sacs in flight.",
              "Compare the beak and feet of a hawk and a duck."
            ],
            memoryTip: "Fly light: hollow bones, feathers, keel muscles, air sacs, uric acid."
          },
          {
            id: "g9-t1-6", unit: "2.5", page: "120", title: "Structure and Adaptations of a Mammal (Rat)", icon: "🐀",
            explanation: "Mammals are warm-blooded vertebrates that nourish their young with milk. The rat is a typical small mammal showing the key features of the class.",
            points: [
              "Body covered with hair/fur for insulation and protection.",
              "Mammary glands produce milk to feed the young — a defining mammalian feature.",
              "Warm-blooded: maintains a constant body temperature regardless of the environment.",
              "Viviparous: most mammals give birth to live young (the rat produces live young).",
              "Two pairs of limbs adapted for running, climbing and digging.",
              "Teeth are differentiated: incisors for gnawing, canines, premolars and molars for chewing.",
              "Well-developed brain and sense organs give good hearing, smell and touch.",
              "Whiskers (vibrissae) detect obstacles and changes in air movement.",
              "Diaphragm aids efficient breathing; four-chambered heart separates oxygenated and deoxygenated blood.",
              "Efficient kidneys produce concentrated urine to conserve water.",
              "Nails/claws protect the digits and help in gripping.",
              "Long tail helps with balance when climbing."
            ],
            definitions: [
              "Mammal: a warm-blooded vertebrate with hair that feeds its young on milk.",
              "Viviparous: giving birth to live young rather than laying eggs.",
              "Mammary gland: a gland that produces milk in female mammals.",
              "Incisor: a chisel-shaped tooth used for cutting or gnawing."
            ],
            examples: [
              "A rat gnaws through a bag with its sharp incisors.",
              "A mother rat nurses her pups with milk from mammary glands."
            ],
            waecFocus: [
              "State six characteristics of mammals.",
              "Explain three adaptations of the rat for its way of life.",
              "Distinguish between viviparous and oviparous animals with examples."
            ],
            memoryTip: "Mammal: Hair, Milk, Warm, Live young, Diaphragm."
          },
          {
            id: "g9-t1-7", image: "images/diagrams/vertebrate-comparison.svg", unit: "2.6", page: "121", title: "Comparison of Classes of Vertebrates", icon: "📊",
            explanation: "Vertebrates are grouped into five classes. Comparing them by body covering, respiration, reproduction and body temperature shows how each class is adapted to its way of life.",
            points: [
              "Fish: scales, gills, cold-blooded, lay eggs in water, fins for swimming.",
              "Amphibians: moist skin, gills as larvae and lungs as adults, cold-blooded, lay shell-less eggs in water.",
              "Reptiles: dry scaly skin, lungs, cold-blooded, lay amniotic eggs on land.",
              "Birds: feathers, lungs with air sacs, warm-blooded, lay hard-shelled eggs, forelimbs are wings.",
              "Mammals: hair, lungs, warm-blooded, give birth to live young (mostly) and feed them on milk.",
              "Only mammals and birds are warm-blooded; the rest are cold-blooded.",
              "Frogs and some fish can breathe through their skin.",
              "Vertebrates all have a backbone/vertebral column.",
              "The heart has two chambers in fish, three in amphibians, three (partly divided) in reptiles and four in birds and mammals.",
              "Habitats range from aquatic (fish) to both land and water (amphibians) to mainly land (reptiles, birds, mammals)."
            ],
            definitions: [
              "Vertebrate: an animal with a backbone.",
              "Cold-blooded (ectothermic): body temperature changes with the environment.",
              "Warm-blooded (endothermic): body temperature is kept constant.",
              "Amniote: an embryo surrounded by amniotic membranes (reptiles, birds, mammals)."
            ],
            examples: [
              "A frog is amphibian: moist skin, cold-blooded, lives in water and on land.",
              "A dove is a bird: feathers, four-chambered heart, warm-blooded."
            ],
            waecFocus: [
              "Complete a comparison table of the five vertebrate classes.",
              "State two differences between amphibians and reptiles.",
              "Explain why fish are restricted to aquatic habitats."
            ],
            memoryTip: "FARM + Fish: Fish, Amphibian, Reptile, Mammal... plus Birds — compare covering, breathing, temperature, eggs."
          }
        ]
      },
      {
        id: "g9-t2",
        number: "Theme 2",
        title: "Matter",
        topics: [
          {
            id: "g9-t2-1", image: "images/diagrams/structure-of-atom.svg", unit: "1.0", page: "122", title: "Modern Atomic Theory", icon: "⚛️",
            explanation: "Modern atomic theory describes the atom as a tiny particle made of smaller sub-atomic particles. The arrangement of these particles explains the behaviour of every element.",
            points: [
              "An atom has a central nucleus containing protons and neutrons, surrounded by electrons.",
              "Protons are positively charged, electrons are negatively charged and neutrons have no charge.",
              "The number of protons (atomic number) is the same in every atom of an element.",
              "Electrons are arranged in shells (energy levels) around the nucleus.",
              "The first shell holds a maximum of 2 electrons, the second 8, the third 8 (at this level).",
              "Atoms are electrically neutral because the number of protons equals the number of electrons.",
              "Ions are formed when atoms gain or lose electrons.",
              "An element's chemical properties depend on the number of electrons in the outermost shell.",
              "The nucleus is extremely small but holds almost all of the atom's mass.",
              "Dalton, Thomson, Rutherford and Bohr each improved the model of the atom."
            ],
            definitions: [
              "Atom: the smallest particle of an element that retains its chemical properties.",
              "Nucleus: the central part of an atom containing protons and neutrons.",
              "Proton: a positively charged particle in the nucleus.",
              "Neutron: a neutral (uncharged) particle in the nucleus.",
              "Electron: a negatively charged particle orbiting the nucleus.",
              "Ion: an atom or group of atoms with a net electrical charge."
            ],
            examples: [
              "A sodium atom (2,8,1) loses one electron to form Na⁺ with structure 2,8.",
              "A chlorine atom (2,8,7) gains one electron to form Cl⁻ with structure 2,8,8."
            ],
            waecFocus: [
              "Describe the structure of an atom using the nuclear model.",
              "State the charge, mass and position of each sub-atomic particle.",
              "Explain how ions are formed from atoms."
            ],
            memoryTip: "PEN: Protons positive, Electrons negative, Neutrons nothing."
          },
          {
            id: "g9-t2-2", image: "images/diagrams/periodic-table.svg", unit: "2.0", page: "123", title: "The Simplified Periodic Table of Elements", icon: "🧱",
            explanation: "The periodic table arranges all known elements in order of increasing atomic number, in rows (periods) and columns (groups). Elements in the same group have similar chemical properties.",
            points: [
              "Elements are arranged in order of atomic number (number of protons).",
              "A period is a horizontal row; a group is a vertical column.",
              "Group numbers show the number of electrons in the outer shell.",
              "Elements in the same group have similar chemical properties because they have the same number of outer electrons.",
              "Period number shows the number of electron shells occupied.",
              "Group I elements (alkali metals) are soft, reactive and have 1 outer electron.",
              "Group VII (halogens) are reactive non-metals with 7 outer electrons.",
              "Group VIII (noble gases) are unreactive because their outer shells are full (8 electrons).",
              "Metals are on the left and centre; non-metals are on the right.",
              "Hydrogen is placed in Group I but is a gas and is not a metal.",
              "The table includes the symbol, name and atomic number of each element."
            ],
            definitions: [
              "Periodic table: the chart of elements arranged in order of increasing atomic number.",
              "Group: a vertical column in the periodic table.",
              "Period: a horizontal row in the periodic table.",
              "Alkali metal: a soft, reactive metal in Group I.",
              "Noble gas: an unreactive gas in Group VIII with a full outer shell."
            ],
            examples: [
              "Sodium (Na) is in Group I period 3 — 1 outer electron, 3 shells.",
              "Chlorine (Cl) is in Group VII — 7 outer electrons and very reactive."
            ],
            waecFocus: [
              "State how elements are arranged in the periodic table.",
              "Explain the meaning of group and period.",
              "Predict the group and number of outer electrons of an element from its position."
            ],
            memoryTip: "Group = outer electrons. Period = number of shells."
          },
          {
            id: "g9-t2-3", image: "images/diagrams/electron-arrangement-sodium.svg", unit: "3.0", page: "124", title: "Arrangement of Electrons", icon: "🖥️",
            explanation: "Electrons occupy shells around the nucleus in a definite order. The arrangement of electrons determines how an element reacts and what compounds it can form.",
            points: [
              "Electrons are arranged in shells (energy levels) starting from the one closest to the nucleus.",
              "The maximum number of electrons in a shell is 2n², but at this level we use 2, 8, 8.",
              "The outermost shell cannot hold more than 8 electrons.",
              "Electrons fill the inner shells first before the outer shell.",
              "Atoms with a full outer shell (noble gases) are unreactive.",
              "Atoms tend to gain, lose or share electrons to achieve a full outer shell.",
              "Elements with 1, 2 or 3 outer electrons usually lose them to form positive ions.",
              "Elements with 5, 6 or 7 outer electrons usually gain electrons to form negative ions.",
              "Metals are on the left of the table and lose electrons; non-metals are on the right and gain electrons.",
              "The electron arrangement of sodium (11) is 2,8,1; of chlorine (17) is 2,8,7."
            ],
            definitions: [
              "Electron arrangement (configuration): the distribution of electrons in shells.",
              "Outer shell: the highest energy level occupied by electrons.",
              "Stable configuration: a full outer shell, as in noble gases.",
              "Valence electron: an electron in the outermost shell."
            ],
            examples: [
              "Oxygen (8) is 2,6 — it gains 2 electrons to become O²⁻.",
              "Calcium (20) is 2,8,8,2 — it loses 2 electrons to become Ca²⁺."
            ],
            waecFocus: [
              "Write the electron arrangement of elements 1 to 20.",
              "Explain why sodium forms a +1 ion and oxygen a 2− ion.",
              "Identify elements with stable electron arrangements."
            ],
            memoryTip: "2, 8, 8 and never more than 8 in the outer shell."
          },
          {
            id: "g9-t2-4", unit: "4.0", page: "125", title: "Atomic Mass and Atomic Numbers", icon: "🔢",
            explanation: "The atomic number counts the protons in an nucleus, while the atomic mass counts the protons plus neutrons. Together they identify every element uniquely.",
            points: [
              "Atomic number (proton number) = number of protons in the nucleus = number of electrons in a neutral atom.",
              "Mass number = number of protons + number of neutrons.",
              "Number of neutrons = mass number − atomic number.",
              "Every element has a unique atomic number — this is what defines the element.",
              "The relative atomic mass is the weighted average mass of the isotopes of an element.",
              "Atomic mass is found below the symbol in the periodic table; atomic number is above (or the whole number).",
              "Atoms of the same element always have the same number of protons.",
              "Atoms of the same element may have different numbers of neutrons (isotopes).",
              "Units: atomic number has no unit; relative atomic mass is measured in unified atomic mass units (u)."
            ],
            definitions: [
              "Atomic number: the number of protons in the nucleus of an atom.",
              "Mass number: the total number of protons and neutrons in the nucleus.",
              "Relative atomic mass: the average mass of an element's atoms compared with 1/12 of a carbon-12 atom."
            ],
            examples: [
              "Carbon has atomic number 6 and mass number 12 — neutrons = 12 − 6 = 6.",
              "Chlorine: atomic number 17, mass number 35.5 — neutrons ≈ 35.5 − 17 = 18.5 (average of isotopes)."
            ],
            waecFocus: [
              "Calculate the number of neutrons given atomic number and mass number.",
              "Define atomic number and mass number.",
              "Explain why the atomic number identifies an element."
            ],
            memoryTip: "Mass = protons + neutrons. Neutrons = mass − atomic number."
          },
          {
            id: "g9-t2-5", image: "images/diagrams/isotopes.svg", unit: "5.0", page: "126", title: "Isotopes", icon: "⚛️",
            explanation: "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. They behave chemically almost identically.",
            points: [
              "Isotopes have the same atomic number but different mass numbers.",
              "They have identical chemical properties because they have the same electron arrangement.",
              "They have different physical properties (density, rate of diffusion, radioactivity).",
              "Examples: hydrogen has three isotopes — protium (¹H), deuterium (²H) and tritium (³H).",
              "Carbon-12, carbon-13 and carbon-14 are isotopes of carbon.",
              "Chlorine exists as Cl-35 and Cl-37 in a 3:1 ratio, giving relative atomic mass 35.5.",
              "Radioactive isotopes (radioisotopes) give out radiation as they decay.",
              "Uses of isotopes: medical diagnosis and treatment (cobalt-60, iodine-131), carbon dating, tracing, power generation.",
              "Uranium-235 is used as fuel in nuclear power stations.",
              "Stable isotopes are used as tracers in industry and agriculture."
            ],
            definitions: [
              "Isotope: atoms of the same element with the same number of protons but different numbers of neutrons.",
              "Radioisotope: an isotope that is radioactive and gives out radiation.",
              "Radioactivity: the spontaneous emission of radiation from an unstable nucleus.",
              "Half-life: the time taken for half of a radioactive sample to decay."
            ],
            examples: [
              "¹²C, ¹³C and ¹⁴C all have 6 protons but 6, 7 and 8 neutrons.",
              "Cobalt-60 is used to treat cancer by destroying tumour cells."
            ],
            waecFocus: [
              "Define isotopes and give two examples.",
              "State two uses of radioisotopes.",
              "Explain why isotopes of an element have similar chemical properties."
            ],
            memoryTip: "Same protons, different neutrons = isotopes."
          },
          {
            id: "g9-t2-6", unit: "6.0", page: "127", title: "Metals and Non-Metals", icon: "🥇",
            explanation: "Elements are broadly divided into metals and non-metals according to their physical and chemical properties. Their behaviour depends on the number of electrons in the outer shell.",
            points: [
              "Metals are on the left and centre of the periodic table; non-metals are on the right.",
              "Metals have 1, 2 or 3 outer electrons and tend to lose them to form positive ions.",
              "Non-metals have 5, 6 or 7 outer electrons and tend to gain electrons to form negative ions.",
              "Metals are good conductors of heat and electricity, shiny, malleable and ductile.",
              "Non-metals are poor conductors, dull, brittle as solids and are insulators.",
              "Metals have high melting and boiling points (except mercury, which is liquid).",
              "Non-metals have low melting points (except carbon and boron).",
              "Metals form basic (alkaline) oxides; non-metals form acidic or neutral oxides.",
              "Metals react with acids to give hydrogen; non-metals generally do not.",
              "Metals in aqueous solution displace hydrogen from dilute acids.",
              "Metallic bonding involves a lattice of positive ions in a sea of delocalised electrons."
            ],
            definitions: [
              "Metal: an element that loses electrons to form positive ions and conducts electricity.",
              "Non-metal: an element that gains electrons to form negative ions and does not conduct.",
              "Malleable: able to be hammered into sheets.",
              "Ductile: able to be drawn into wires.",
              "Delocalised electron: an electron not attached to any one atom and free to move."
            ],
            examples: [
              "Sodium is a soft reactive metal that forms Na⁺ ions.",
              "Chlorine is a reactive non-metal that forms Cl⁻ ions.",
              "Semi-metals like silicon have properties between metals and non-metals."
            ],
            waecFocus: [
              "List six physical properties that distinguish metals from non-metals.",
              "Explain how the number of outer electrons determines whether an element is a metal.",
              "Give three examples of each and state their common uses."
            ],
            memoryTip: "Metal = loses electrons, conducts, shiny. Non-metal = gains electrons, dull, insulates."
          },
          {
            id: "g9-t2-7", unit: "7.0", page: "127", title: "Compounds and Naming Compounds", icon: "🧫",
            explanation: "A compound is formed when two or more elements combine chemically in fixed proportions. Compounds are named using rules based on the ions the elements form.",
            points: [
              "Ionic compounds are formed between metals and non-metals.",
              "Covalent compounds are formed between two or more non-metals.",
              "The name of a metal comes first, followed by the non-metal with the suffix -ide (sodium chloride).",
              "For metals that can form more than one ion, a Roman numeral shows the charge (iron(II) chloride, iron(III) chloride).",
              "Some compounds have traditional names: water (H₂O), ammonia (NH₃), methane (CH₄).",
              "Oxoacids and their salts: trioxocarbonate(IV), tetraoxosulphate(VI), hydroxide.",
              "A compound has fixed composition and fixed properties.",
              "Compounds can be represented by word equations and chemical formulae.",
              "The formula of an ionic compound shows the simplest ratio of ions (NaCl, MgCl₂).",
              "Metals from Group I form +1 ions, Group II form +2 ions, aluminium forms Al³⁺."
            ],
            definitions: [
              "Compound: a pure substance made of two or more elements chemically combined in fixed ratio.",
              "Ionic bond: the electrostatic attraction between oppositely charged ions.",
              "Covalent bond: the sharing of a pair of electrons between two non-metal atoms.",
              "Chemical formula: the symbols showing the number of atoms of each element in a compound."
            ],
            examples: [
              "Sodium + chlorine → sodium chloride (NaCl).",
              "Magnesium + chlorine → magnesium chloride (MgCl₂).",
              "Iron + sulfur → iron(II) sulfide (FeS)."
            ],
            waecFocus: [
              "Name given compounds from their formulae.",
              "Write the formula of a compound given the ions involved.",
              "Distinguish between ionic and covalent compounds."
            ],
            memoryTip: "Metal first, non-metal with -ide. Balance the charges to get the formula."
          },
          {
            id: "g9-t2-8", unit: "8.0", page: "128", title: "Chemical Formulae of Compounds", icon: "📝",
            explanation: "A chemical formula shows the types and numbers of atoms in a compound. Writing correct formulae depends on knowing the charge of each ion and balancing them so the compound is neutral.",
            points: [
              "Write the symbol of the cation (metal) first, then the anion (non-metal).",
              "Balance the charges so the total positive charge equals the total negative charge.",
              "Group I metals form +1 ions: Na⁺, K⁺, Li⁺.",
              "Group II metals form +2 ions: Mg²⁺, Ca²⁺, Ba²⁺.",
              "Aluminium forms Al³⁺; zinc forms Zn²⁺.",
              "Common anions: Cl⁻, Br⁻, I⁻, O²⁻, S²⁻, N³⁻, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻.",
              "Cross the charges to get the ratio: Mg²⁺ and Cl⁻ give MgCl₂.",
              "Parentheses are used for polyatomic ions occurring more than once: Ca(OH)₂, Al₂(SO₄)₃.",
      "Water of crystallisation is written after a dot: CuSO₄·5H₂O.",
              "The formula unit shows the simplest whole-number ratio of ions."
            ],
            definitions: [
              "Cation: a positively charged ion.",
              "Anion: a negatively charged ion.",
              "Valency: the combining capacity of an element (equal to the charge on its ion).",
              "Polyatomic ion: an ion made of more than one atom (e.g. SO₄²⁻)."
            ],
            examples: [
              "Aluminium (Al³⁺) and oxygen (O²⁻) → Al₂O₃.",
              "Calcium (Ca²⁺) and hydroxide (OH⁻) → Ca(OH)₂.",
              "Ammonium (NH₄⁺) and nitrate (NO₃⁻) → NH₄NO₃."
            ],
            waecFocus: [
              "Write formulae for ten given pairs of ions.",
              "Explain the use of parentheses in a formula.",
              "Determine the valency of an element from its formula."
            ],
            memoryTip: "Balance the charges; cross them over; reduce to simplest ratio."
          },
          {
            id: "g9-t2-9", unit: "9.0", page: "129", title: "Chemical Equations", icon: "⇄",
            explanation: "A chemical equation uses symbols and formulae to show what happens in a chemical reaction. It must be balanced so that atoms are neither created nor destroyed.",
            points: [
              "Reactants are written on the left and products on the right, separated by an arrow.",
              "State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.",
              "A word equation describes the reaction in words.",
              "A balanced chemical equation has the same number of each type of atom on both sides.",
              "Balancing is done by placing coefficients (multipliers) in front of formulae — never change subscripts.",
              "Conservation of mass means the total mass of reactants equals the total mass of products.",
              "Combination: A + B → AB. Decomposition: AB → A + B.",
              "Displacement: A + BC → AC + B. Double decomposition: AB + CD → AD + CB.",
              "Conditions such as heat (Δ), catalysts and pressure are written above/below the arrow.",
              "Example: 2Mg + O₂ → 2MgO."
            ],
            definitions: [
              "Chemical equation: a symbolic representation of a chemical reaction.",
              "Reactant: a substance that takes part in a reaction.",
              "Product: a substance formed in a reaction.",
              "Balanced equation: an equation with equal numbers of each atom on both sides.",
              "State symbol: a letter in brackets showing the physical state of a substance."
            ],
            examples: [
              "2H₂ + O₂ → 2H₂O.",
              "CaCO₃ → CaO + CO₂ (on heating).",
              "Zn + CuSO₄ → ZnSO₄ + Cu."
            ],
            waecFocus: [
              "Balance given chemical equations.",
              "Write a word equation and a symbol equation for a described reaction.",
              "Explain the law of conservation of mass using an equation."
            ],
            memoryTip: "Never change the formula — only add big numbers in front."
          },
          {
            id: "g9-t2-10", image: "images/diagrams/ionic-covalent.svg", unit: "10.0", page: "130", title: "Ionic and Covalent Bonding", icon: "🔗",
            explanation: "Chemical bonds hold atoms together in compounds. Ionic bonding involves the transfer of electrons between a metal and a non-metal, while covalent bonding involves sharing electrons between non-metals.",
            points: [
              "Ionic bonding: a metal atom transfers its outer electrons to a non-metal atom.",
              "This creates positive and negative ions which are held together by electrostatic attraction.",
              "Ionic compounds form giant crystal lattices with high melting points.",
              "Ionic compounds conduct electricity when molten or in aqueous solution (ions are free to move) but not when solid.",
              "Covalent bonding: two non-metal atoms share pairs of electrons.",
              "Each shared pair forms one covalent bond; each atom fills its outer shell.",
              "Examples of covalent molecules: H₂, O₂, N₂, H₂O, CH₄, CO₂, NH₃.",
              "Simple molecular substances have low melting and boiling points because the forces between molecules are weak.",
              "Covalent substances do not conduct electricity (no free electrons or ions).",
              "Giant covalent substances such as diamond, graphite and silicon dioxide have very high melting points.",
              "Metals have metallic bonding: positive ions in a sea of delocalised electrons — that is why they conduct."
            ],
            definitions: [
              "Ionic bond: the electrostatic attraction between oppositely charged ions.",
              "Covalent bond: a shared pair of electrons between two atoms.",
              "Lattice: a regular, repeating three-dimensional arrangement of ions or atoms.",
              "Electrostatic attraction: the attraction between positive and negative charges."
            ],
            examples: [
              "Sodium chloride: Na transfers an electron to Cl, forming Na⁺ and Cl⁻.",
              "Water: oxygen shares electrons with two hydrogen atoms, forming H₂O."
            ],
            waecFocus: [
              "Distinguish between ionic and covalent bonding.",
              "Explain why sodium chloride conducts electricity when molten but not when solid.",
              "Draw a dot-and-cross diagram for a simple covalent molecule."
            ],
            memoryTip: "Metal + non-metal = transfer = ionic. Non-metal + non-metal = share = covalent."
          }
        ]
      },
      {
        id: "g9-t3",
        number: "Theme 3",
        title: "Chemical Changes",
        topics: [
          {
            id: "g9-t3-1", unit: "1.0", page: "132", title: "Acids: Types and Properties", icon: "🍋",
            explanation: "An acid is a substance that donates hydrogen ions (H⁺) in solution, turns blue litmus red and reacts with metals and bases. Acids are important in industry, the home and the body.",
            points: [
              "A mineral (mineral acid) acid is made from a non-metal oxide dissolved in water (HCl, H₂SO₄, HNO₃).",
              "An organic (carboxylic) acid is found in living things (citric, acetic, lactic, tartaric acid).",
              "Properties: sour taste, turn blue litmus red, conduct electricity in solution.",
              "Acids react with reactive metals to give a salt and hydrogen gas.",
              "Acids react with bases/alkalis to give a salt and water (neutralisation).",
              "Acids react with carbonates to give a salt, water and carbon dioxide.",
              "Strong acids (HCl, H₂SO₄, HNO₃) are completely ionised in water.",
              "Weak acids (ethanoic, carbonic, citric) are only partly ionised in water.",
              "Concentrated means a lot of acid in a little water; dilute means a lot of water.",
              "Acid concentration is measured in mol/dm³ (molarity) or as a percentage.",
              "Dilute an acid by adding acid slowly to water, never water to acid."
            ],
            definitions: [
              "Acid: a substance that produces H⁺ ions in aqueous solution and turns blue litmus red.",
              "Mineral acid: an acid derived from inorganic compounds (e.g. hydrochloric acid).",
              "Organic acid: an acid found in living organisms (e.g. citric acid).",
              "Concentrated: containing a large amount of solute in a given volume."
            ],
            examples: [
              "Hydrochloric acid + magnesium → magnesium chloride + hydrogen.",
              "Citric acid is found in oranges and lemons; ethanoic acid is vinegar."
            ],
            waecFocus: [
              "State four properties of acids.",
              "Distinguish between strong and weak acids, concentrated and dilute acids.",
              "Name three mineral acids and three organic acids."
            ],
            memoryTip: "Acid: sour, turns litmus red, reacts with metals and bases."
          },
          {
            id: "g9-t3-2", unit: "2.0", page: "133", title: "Bases, Oxides and Neutralisation", icon: "🧴",
            explanation: "A base is a substance that neutralises an acid to form salt and water. Oxides of metals are basic, oxides of non-metals are acidic, and some oxides are amphoteric.",
            points: [
              "A base is a metal oxide or hydroxide that reacts with an acid to give salt and water.",
              "An alkali is a base that dissolves in water (sodium hydroxide, potassium hydroxide, ammonia solution).",
              "Properties of bases/alkalis: bitter, soapy or slippery feel, turn red litmus blue, conduct electricity in solution.",
              "Neutralisation: acid + base → salt + water.",
              "Indicators show whether a substance is acidic, neutral or alkaline.",
              "Basic oxides: Na₂O, CaO, MgO, CuO (formed from metals).",
              "Acidic oxides: SO₂, CO₂, NO₂, SO₃ (formed from non-metals).",
              "Amphoteric oxides react with both acids and alkalis (Al₂O₃, ZnO, PbO).",
              "Neutral oxides: CO, NO, H₂O.",
              "Bases neutralise acids in the stomach (milk of magnesia), in soil treatment and in industry."
            ],
            definitions: [
              "Base: a substance that neutralises an acid to form salt and water.",
              "Alkali: a base that is soluble in water.",
              "Neutralisation: the reaction between an acid and a base giving salt and water.",
              "Amphoteric oxide: an oxide that reacts with both acids and bases."
            ],
            examples: [
              "NaOH + HCl → NaCl + H₂O.",
              "Aluminium oxide reacts with both HCl and NaOH — it is amphoteric.",
              "Calcium hydroxide (slaked lime) is used to neutralise acidic soil."
            ],
            waecFocus: [
              "Define base and alkali and state the difference.",
              "Write an equation for a neutralisation reaction.",
              "Classify given oxides as basic, acidic, amphoteric or neutral."
            ],
            memoryTip: "Base neutralises acid. Alkali = base that dissolves."
          },
          {
            id: "g9-t3-3", unit: "2.3", page: "134", title: "Acid-Base Indicators", icon: "🧪",
            explanation: "Indicators are substances that change colour depending on whether the solution around them is acidic, neutral or alkaline. They are essential for identifying unknown solutions.",
            points: [
              "Litmus is the commonest indicator: blue in alkali, red in acid, unchanged (purple) when neutral.",
              "Litmus paper is used by dipping it into the solution, not by putting the solution on the paper.",
              "Methyl orange is orange in neutral, red in acid and yellow in alkali.",
              "Phenolphthalein is colourless in acid and neutral, pink in alkali.",
              "Universal indicator gives a range of colours from red (strong acid) through green (neutral) to purple (strong alkali).",
              "Natural indicators include turmeric (yellow → red in alkali) and red cabbage juice.",
              "An indicator changes because of a chemical reaction with H⁺ or OH⁻ ions.",
              "Mixed indicators are used to identify the pH of a solution more precisely.",
              "Always use a few drops of indicator, not the whole bottle.",
              "Universal indicator can be used as a solution or on indicator paper."
            ],
            definitions: [
              "Indicator: a substance that changes colour to show whether a solution is acidic or alkaline.",
              "Litmus: a natural indicator extracted from lichens.",
              "Universal indicator: a mixture of dyes giving different colours across the pH range.",
              "Neutral: neither acidic nor alkaline (pH 7)."
            ],
            examples: [
              "Adding universal indicator to vinegar gives an orange colour (acidic).",
              "Turmeric paper turns red in a soap solution (alkaline)."
            ],
            waecFocus: [
              "State the colour change of litmus in acid and alkali.",
              "Explain how to use universal indicator to test a solution.",
              "Name two natural indicators and their colour changes."
            ],
            memoryTip: "Litmus: Red in acid, Blue in alkali. Phenolphthalein: pink in alkali only."
          },
          {
            id: "g9-t3-4", unit: "2.4", page: "135", title: "The pH Scale and Universal Indicator", icon: "🌈",
            explanation: "The pH scale measures how acidic or alkaline a solution is, from 0 to 14. It is read using universal indicator and shows the concentration of hydrogen ions in the solution.",
            points: [
              "pH below 7 = acidic; pH 7 = neutral; pH above 7 = alkaline.",
              "The lower the pH, the stronger the acid; the higher the pH, the stronger the alkali.",
              "pH 0-1 strong acids, pH 3-6 weak acids, pH 7 neutral, pH 8-11 weak alkalis, pH 12-14 strong alkalis.",
              "pH is calculated as −log[H⁺], where [H⁺] is the hydrogen ion concentration.",
              "The higher the H⁺ concentration, the lower the pH.",
              "Universal indicator colours: red (strong acid) → orange/yellow (weak acid) → green (neutral) → blue/purple (strong alkali).",
              "pH can be measured with universal indicator paper or a pH meter/probe.",
              "Pure water and neutral solutions have pH 7.",
              "Stomach acid has a pH of about 1-2; blood is slightly alkaline at about 7.4.",
              "Acid rain has a pH below 5.6 and damages plants and buildings."
            ],
            definitions: [
              "pH scale: a scale from 0 to 14 that measures the acidity or alkalinity of a solution.",
              "Neutral solution: a solution with pH 7, e.g. pure water.",
              "Alkaline solution: a solution with pH greater than 7.",
              "pH meter: an electronic instrument that measures pH accurately."
            ],
            examples: [
              "Lemon juice has pH about 2 — strongly acidic.",
              "Common salt solution has pH 7 — neutral.",
              "Soapy water has pH about 10 — alkaline."
            ],
            waecFocus: [
              "State the pH of acidic, neutral and alkaline solutions.",
              "Use universal indicator colours to estimate the pH of given solutions.",
              "Explain what a pH of 2 means compared with a pH of 5."
            ],
            memoryTip: "Below 7 = acid, 7 = neutral, above 7 = alkali. Lower number = stronger acid."
          },
          {
            id: "g9-t3-5", unit: "3.0", page: "136", title: "Salts and Their Types", icon: "🧂",
            explanation: "A salt is the compound formed when the replaceable hydrogen of an acid is replaced by a metal or ammonium ion. There are three main types: normal, acid and basic salts.",
            points: [
              "Normal salts: all replaceable hydrogen atoms of the acid are replaced (NaCl, Na₂SO₄).",
              "Acid salts: some replaceable hydrogen remains (NaHSO₄, NaHCO₃, KH₂PO₄).",
              "Basic salts: contain OH or O groups in addition to the acid radical (NaOH·NaCl, Cu₂(OH)₂Cl₂).",
              "Sodium chloride (common salt) is a normal salt and is used in food, in the chlor-alkali industry and for preserving food.",
              "Sodium hydrogen carbonate (baking soda) is an acid salt used in baking and indigestion.",
              "Salts can be soluble or insoluble in water.",
              "Generally, all nitrates are soluble; most chlorides are soluble except AgCl and PbCl₂; most sulphates are soluble except BaSO₄, PbSO₄, CaSO₄.",
              "Most carbonates are insoluble except those of Group I and ammonium.",
              "Salts are used in fertilisers, food, medicine, soap and detergents.",
              "The solubility of a salt determines how it is prepared in the laboratory."
            ],
            definitions: [
              "Salt: a compound formed by replacing the hydrogen of an acid with a metal or ammonium ion.",
              "Normal salt: a salt with no replaceable hydrogen left from the acid.",
              "Acid salt: a salt that still contains some replaceable hydrogen.",
              "Solubility: the maximum mass of a substance that dissolves in a given volume of solvent."
            ],
            examples: [
              "NaOH + HCl → NaCl + H₂O gives a normal salt.",
              "Na₂CO₃ + HCl → NaHCO₃ + NaCl gives an acid salt under controlled conditions."
            ],
            waecFocus: [
              "Define a salt and distinguish between normal and acid salts.",
              "State the solubility rules for chlorides, sulphates and carbonates.",
              "Give two uses each of sodium chloride and sodium hydrogen carbonate."
            ],
            memoryTip: "Acid + Base → Salt + Water. All nitrates soluble; most chlorides and sulphates soluble."
          },
          {
            id: "g9-t3-6", unit: "3.1", page: "136", title: "Preparation of Salts (Soluble and Insoluble)", icon: "⚗️",
            explanation: "The method used to prepare a salt depends on whether it is soluble or insoluble and on the reactivity of the reactants involved.",
            points: [
              "Soluble salts from insoluble bases/carbonates: warm the acid with excess insoluble base, filter off the excess, evaporate and crystallise.",
              "Soluble salts from soluble bases/alkalis and acids: titrate to find the exact volumes, then evaporate and crystallise.",
              "Insoluble salts are made by precipitation — mixing two solutions whose products form an insoluble salt.",
              "Example of precipitation: silver nitrate + sodium chloride → silver chloride (white ppt) + sodium nitrate.",
              "Example: barium chloride + sodium sulphate → barium sulphate (white ppt) + sodium chloride.",
              "Titration is used for salts of strong acid + strong alkali (e.g. NaCl from NaOH and HCl).",
              "Excess insoluble reactant ensures all the acid is used up.",
              "Filtration removes the unreacted excess solid.",
              "Crystallisation is done by cooling a hot saturated solution.",
              "Sodium trioxocarbonate(IV) is prepared by the Solvay process.",
              "The purity of the prepared salt can be tested by measuring its melting point or by recrystallisation."
            ],
            definitions: [
              "Precipitation: the formation of an insoluble solid when two solutions are mixed.",
              "Titration: a procedure to find the exact volumes of acid and alkali that react completely.",
              "Crystallisation: forming crystals from a cooled saturated solution.",
              "Filtration: separating an insoluble solid from a liquid using filter paper."
            ],
            examples: [
              "Making copper(II) sulfate: dilute sulphuric acid + excess copper(II) oxide → filter → evaporate → crystallise.",
              "Making barium sulphate: BaCl₂ solution + Na₂SO₄ solution → white precipitate."
            ],
            waecFocus: [
              "Describe how to prepare a soluble salt from an insoluble base.",
              "Explain why titration is used for strong acid + strong alkali salts.",
              "Describe how to prepare an insoluble salt by precipitation."
            ],
            memoryTip: "Soluble salt = acid + base then crystallise. Insoluble salt = mix two solutions."
          },
          {
            id: "g9-t3-7", image: "images/diagrams/electrolysis-water.svg", unit: "4.0", page: "139", title: "Electrolysis of Acidified Water", icon: "🔋",
            explanation: "Electrolysis is the breakdown of a compound by passing an electric current through it in a liquid state or solution. Pure water is a poor conductor, so a little acid or alkali is added.",
            points: [
              "Electrolysis needs a liquid electrolyte and a direct current (DC) supply.",
              "The cathode is the negative electrode; the anode is the positive electrode.",
              "Cations (positive ions) move to the cathode and are reduced (gain electrons).",
              "Anions (negative ions) move to the anode and are oxidised (lose electrons).",
              "During the electrolysis of acidified water: hydrogen is produced at the cathode and oxygen at the anode.",
              "The ratio of hydrogen to oxygen collected is 2 : 1 by volume.",
              "Equation: 2H₂O → 2H₂ + O₂.",
              "Pure water conducts very poorly because it has few ions; adding dilute sulphuric acid increases conductivity.",
              "The volume of gas at each electrode can be tested — hydrogen gives a squeaky pop, oxygen relights a glowing splint.",
              "In molten sodium chloride, sodium forms at the cathode and chlorine at the anode.",
              "Electrolysis is used in electroplating, extraction of metals and purification of copper."
            ],
            definitions: [
              "Electrolysis: the breakdown of a substance by an electric current when molten or in solution.",
              "Electrolyte: a liquid (molten or solution) that conducts electricity and is decomposed.",
              "Cathode: the negative electrode where reduction takes place.",
              "Anode: the positive electrode where oxidation takes place.",
              "Electrolysis of water: decomposition of water into hydrogen and oxygen by electric current."
            ],
            examples: [
              "Water acidified with dilute sulphuric acid gives twice as much hydrogen as oxygen.",
              "Molten lead bromide gives lead at the cathode and bromine at the anode."
            ],
            waecFocus: [
              "Explain the electrolysis of acidified water and the volume ratio of gases.",
              "State what is formed at the cathode and the anode in given electrolyses.",
              "Describe the test for hydrogen and oxygen gases."
            ],
            memoryTip: "Cathode = negative = cations = reduction. Anode = positive = anions = oxidation."
          },
          {
            id: "g9-t3-8", unit: "5.0", page: "140", title: "Hard and Soft Water", icon: "🚿",
            explanation: "Water hardness is caused by dissolved calcium and magnesium compounds. Hard water does not lather easily with soap, while soft water does.",
            points: [
              "Soft water lathers easily with soap and rinses off freely.",
              "Hard water reacts with soap to form scum (insoluble calcium/magnesium stearate) and wastes soap.",
              "Temporary hardness is caused by dissolved calcium trioxocarbonate(IV), Ca(HCO₃)₂, and is removed by boiling.",
              "Permanent hardness is caused by dissolved calcium and magnesium sulphates/chlorides and is not removed by boiling.",
              "Permanent hardness can be removed by adding sodium trioxocarbonate(IV), by ion exchange or by distillation.",
              "Calcium and magnesium ions come from limestone and gypsum rocks dissolved by water.",
              "Hard water is not harmful to health — indeed it supplies dietary calcium.",
              "Hard water is unsuitable for washing, cooking some foods and industrial use.",
              "Soap works by forming an insoluble precipitate with calcium and magnesium ions.",
              "Boiling converts soluble hydrogencarbonates into insoluble carbonates that form scale."
            ],
            definitions: [
              "Hard water: water containing dissolved calcium and magnesium ions.",
              "Soft water: water that lathers easily with soap.",
              "Temporary hardness: hardness removed by boiling.",
              "Permanent hardness: hardness not removed by boiling.",
              "Scale: hard deposit of calcium carbonate formed on the inside of kettles and pipes."
            ],
            examples: [
              "Boiling a kettle repeatedly leaves a white scale of CaCO₃.",
              "Adding soap to hard water produces a grey scum instead of lather."
            ],
            waecFocus: [
              "State the causes of temporary and permanent hardness.",
              "Describe two methods of removing each type of hardness.",
              "Explain why hard water wastes soap."
            ],
            memoryTip: "Temporary = carbonate, boils away. Permanent = sulphate/chloride, needs ion exchange."
          },
          {
            id: "g9-t3-9", image: "images/diagrams/water-purification.svg", unit: "7.0", page: "141", title: "Purification of Water", icon: "💧",
            explanation: "Water for public supply must be made safe by removing suspended solids, dissolved substances and disease-causing organisms before it reaches homes.",
            points: [
              "The main steps: collection → screening → sedimentation/flocculation → filtration → chlorination → distribution.",
              "Screening removes large objects such as sticks, leaves and rubbish.",
              "Sedimentation allows heavy particles to settle in a sedimentation tank.",
              "Flocculation uses aluminium sulphate (alum) to make fine particles clump together and settle.",
              "Filtration through sand and gravel removes remaining suspended particles and some microbes.",
              "Chlorination kills bacteria and other disease-causing organisms.",
              "Boiling at home is a simple way of making water safe to drink.",
              "UV treatment and ozonation are chemical-free modern methods.",
              "Distillation produces pure water but is expensive and mainly used in laboratories.",
              "The treated water must meet quality standards before distribution."
            ],
            definitions: [
              "Flocculation: forming fine particles into larger clumps so they settle.",
              "Chlorination: adding chlorine to kill micro-organisms in water.",
              "Filtration: passing water through a porous material to remove solids.",
              "Distillation: boiling water and condensing the steam to obtain pure water."
            ],
            examples: [
              "Alum is added to muddy river water to make it settle quickly.",
              "Household water filters use activated carbon to remove taste and odour."
            ],
            waecFocus: [
              "Outline the stages in the purification of water for public supply.",
              "State two methods of making water safe at home.",
              "Explain the purpose of chlorination and filtration."
            ],
            memoryTip: "Screen → Settle → Filter → Chlorinate → Distribute."
          },
          {
            id: "g9-t3-10", unit: "6.0", page: "141", title: "Advantages and Disadvantages of Hard and Soft Water", icon: "⚖️",
            explanation: "Both hard and soft water have uses and drawbacks. The choice depends on whether the water is for washing, industry, drinking or cooking.",
            points: [
              "Advantages of hard water: supplies calcium and magnesium needed for healthy bones and teeth; hard water boils form a protective scale in boilers; some people prefer the taste.",
              "Disadvantages of hard water: wastes soap by forming scum; blocks pipes and kettles with scale; reduces efficiency of water heaters; makes clothes feel stiff.",
              "Advantages of soft water: lathers easily and cleans effectively; good for laundry and bathing; safe for boilers and pipes.",
              "Disadvantages of soft water: some softening processes add sodium, which is a problem for people on low-sodium diets; very soft water may taste flat; distilled water is not ideal for drinking because it lacks minerals.",
              "Soap is more effective with soft water, so less is used — saving money.",
              "Scale in kettles uses more energy and shortens the appliance's life.",
              "Ion-exchange water softeners replace calcium and magnesium with sodium.",
              "Temporary hardness can be removed by boiling — a cheap method for homes.",
              "Industrial boilers need soft water to prevent damage.",
              "Drinking water should be clean, safe and contain some minerals."
            ],
            definitions: [
              "Scale: hard calcium carbonate deposit formed on heating elements and pipes.",
              "Ion exchange: a process in which unwanted calcium and magnesium ions are replaced by sodium ions.",
              "Lather: the foam produced when soap is shaken with water."
            ],
            examples: [
              "Washing clothes in hard water leaves them grey and stiff.",
              "An electric kettle scaled up takes longer to boil and wastes electricity."
            ],
            waecFocus: [
              "Give three advantages and three disadvantages of hard water.",
              "Explain why soft water is preferred for laundry.",
              "Describe how ion exchange softens water."
            ],
            memoryTip: "Hard water: good bones, bad laundry. Soft water: good laundry, adds sodium."
          }
        ]
      },
      ,
      {
        id: "g9-t4",
        number: "Theme 4",
        title: "Energy",
        topics: [
          {
            id: "g9-t4-1", unit: "1.0", page: "142", title: "Movement of Heat Energy", icon: "🌡️",
            explanation: "Heat energy always moves from a hotter body to a cooler body until both reach the same temperature. It can be transferred by conduction, convection and radiation.",
            points: [
              "Conduction is the transfer of heat through a substance without the substance itself moving.",
              "Metals are good conductors; air, wood and plastic are poor conductors (insulators).",
              "Conduction is fastest in solids because particles are close together and vibrate and pass energy along.",
              "Convection is the transfer of heat through a fluid (liquid or gas) by the movement of the fluid itself.",
              "Warm fluid rises and cold fluid takes its place — this is a convection current.",
              "Convection happens in gases and liquids only; it does not occur in solids.",
              "Radiation is the transfer of heat by electromagnetic waves and needs no medium — it can travel through a vacuum.",
              "Radiant heat travels at the speed of light and is absorbed best by dull, dark surfaces.",
              "Shiny, light surfaces reflect radiant heat; this is why silvered insulation works.",
              "Good conductors spread heat evenly: cooking pots use aluminium/copper.",
              "Metals are also good conductors of electricity because they have free electrons.",
              "Land heats faster than the sea, causing sea breezes by convection."
            ],
            definitions: [
              "Conduction: transfer of heat through a substance by direct contact of particles.",
              "Convection: transfer of heat through a fluid by the movement of the fluid itself.",
              "Radiation: transfer of heat by electromagnetic waves without a medium.",
              "Insulator: a poor conductor of heat used to prevent heat loss.",
              "Convection current: the circular movement of fluid caused by heating and cooling."
            ],
            examples: [
              "A metal spoon heats up in hot tea by convection of water plus conduction along the spoon.",
              "The sea breeze in the day and land breeze at night are caused by convection currents."
            ],
            waecFocus: [
              "Distinguish between conduction, convection and radiation.",
              "Explain why metals are good conductors of heat.",
              "Give three examples of convection currents."
            ],
            memoryTip: "Conduction = touch, Convection = move, Radiation = waves through space."
          },
          {
            id: "g9-t4-2", unit: "2.0", page: "147", title: "Light Energy", icon: "💡",
            explanation: "Light is a form of energy that travels in straight lines and allows us to see. It can be reflected, refracted and dispersed, and each of these has practical uses.",
            points: [
              "Light travels in straight lines (rectilinear propagation) at about 3 × 10⁸ m/s in a vacuum.",
              "Light is produced by luminous objects (sun, lamp) and seen when it reflects off non-luminous objects.",
              "Reflection: light bounces off a surface; angle of incidence equals angle of reflection.",
              "Plane mirrors give virtual, upright, laterally inverted images the same size as the object.",
              "Refraction: light bends when passing from one medium to another of different density.",
              "Light bends towards the normal when entering a denser medium and away from the normal when leaving.",
              "A prism splits white light into its seven colours (dispersion): red, orange, yellow, green, blue, indigo, violet (ROYGBIV).",
      "Rainbows are formed by refraction and dispersion of sunlight in raindrops.",
              "Lenses: convex lenses converge light and can magnify; concave lenses diverge light and give diminished images.",
              "The human eye has a convex lens that focuses light on the retina.",
              "Mirrors are used in periscopes, telescopes, vehicle mirrors and safety mirrors.",
              "Rectilinear propagation explains why shadows form."
            ],
            definitions: [
              "Reflection: bouncing back of light from a surface.",
              "Refraction: bending of light as it passes from one medium to another.",
              "Dispersion: splitting of white light into its component colours by a prism.",
              "Luminous: a body that produces its own light.",
              "Lateral inversion: the left and right of an image are reversed."
            ],
            examples: [
              "A pencil in a glass of water appears bent because of refraction.",
              "A plane mirror shows your image reversed — your writing appears backwards.",
              "A rainbow appears when sunlight is dispersed by raindrops."
            ],
            waecFocus: [
              "State the laws of reflection and draw a ray diagram.",
              "Explain refraction and why a pencil appears bent in water.",
              "Name the colours of the visible spectrum in order."
            ],
            memoryTip: "Reflection = bounce, Refraction = bend, Dispersion = split."
          },
          {
            id: "g9-t4-3", unit: "3.0", page: "157", title: "Sound Energy", icon: "🔊",
            explanation: "Sound is a form of energy produced by vibrating bodies and travels through a medium as longitudinal waves. It cannot travel through a vacuum.",
            points: [
              "Sound is produced by vibrating objects and travels as compressions and rarefactions (longitudinal waves).",
              "Sound needs a medium (solid, liquid or gas) to travel; it cannot travel through a vacuum.",
              "Sound travels fastest in solids, slower in liquids and slowest in gases.",
              "Speed of sound in air is about 340 m/s at room temperature.",
              "Pitch depends on frequency: high frequency = high pitch.",
              "Loudness depends on amplitude: larger amplitude = louder sound.",
              "Quality (timbre) distinguishes two sounds of the same pitch and loudness.",
      "Echo is the reflection of sound from a distant surface (needs a delay of at least 0.1 s).",
              "Ultrasound is sound above 20,000 Hz; infrasound is below 20 Hz — both are inaudible to humans.",
              "Uses of ultrasound: imaging unborn babies (scan), cleaning delicate parts, detecting cracks in metals.",
              "Uses of sound: SONAR for measuring depth of the sea, musical instruments, communication.",
              "Noise pollution damages hearing and causes stress."
            ],
            definitions: [
              "Sound: a form of energy produced by vibrating bodies and transmitted as a longitudinal wave.",
              "Frequency: the number of waves passing a point per second, measured in hertz (Hz).",
              "Amplitude: the maximum displacement of a vibrating particle.",
              "Ultrasound: sound with a frequency above the upper limit of human hearing (20,000 Hz).",
              "Echo: sound heard again after reflection from a surface."
            ],
            examples: [
              "A drum skin vibrates to produce sound when struck.",
              "A bat uses ultrasound to navigate and locate prey in the dark."
            ],
            waecFocus: [
              "State the conditions necessary for sound to travel.",
              "Explain how pitch and loudness relate to frequency and amplitude.",
              "Give three uses of ultrasound."
            ],
            memoryTip: "Vibration makes sound; medium carries it; solids are fastest; no vacuum, no sound."
          },
          {
            id: "g9-t4-4", unit: "4.0", page: "162", title: "Electrical Energy", icon: "⚡",
            explanation: "Electrical energy is the energy carried by moving electric charges. It is easily transmitted over long distances and can be converted into light, heat, sound and motion.",
            points: [
              "Electric current is the flow of electric charge, measured in amperes (A) with an ammeter.",
              "Conductors (metals, graphite, salt solution) allow current to flow; insulators (rubber, plastic, glass) do not.",
              "Potential difference (voltage) is the energy per unit charge, measured in volts (V) with a voltmeter.",
              "Resistance opposes current and is measured in ohms (Ω) with a resistance box.",
              "Ohm's law: V = I × R (voltage = current × resistance).",
              "Current in series is the same everywhere; voltage divides across components in series.",
      "A cell/battery converts chemical energy into electrical energy.",
              "The mains supply in Ghana is 240 V, 50 Hz AC.",
              "Earthing, fuses and circuit breakers are safety devices that protect users from electric shock.",
              "Energy transferred P = V × I; energy E = P × t.",
              "Uses of electricity: lighting, heating, cooking, driving motors, communications and computing."
            ],
            definitions: [
              "Electric current: the rate of flow of electric charge (amperes).",
              "Potential difference: the work done in moving unit charge between two points (volts).",
              "Resistance: the opposition to the flow of current (ohms).",
              "Conductor: a material that allows electric current to pass through it.",
              "Insulator: a material that does not allow current to pass through it."
            ],
            examples: [
              "A 12 V battery driving 2 A through a lamp gives resistance R = 12 ÷ 2 = 6 Ω.",
              "A 60 W lamp used for 10 hours uses 60 × 10 = 600 Wh = 0.6 kWh of energy."
            ],
            waecFocus: [
              "State Ohm's law and use V = I × R in calculations.",
              "Distinguish between conductors and insulators with examples.",
              "Calculate energy used by an appliance (E = P × t)."
            ],
            memoryTip: "V = I × R. Ammeter in series, voltmeter in parallel."
          }
        ]
      },
      {
        id: "g9-t5",
        number: "Theme 5",
        title: "Human Body Organs and Systems",
        topics: [
          {
            id: "g9-t5-1", unit: "1.0", page: "170", title: "The Human Digestive System", icon: "🥣",
            explanation: "The digestive system breaks food down into small, soluble molecules that can be absorbed into the blood and used by the body. It consists of the alimentary canal and the digestive glands.",
            points: [
              "The alimentary canal runs from the mouth to the anus: mouth, oesophagus, stomach, small intestine, large intestine, anus.",
              "Digestive glands include salivary glands, gastric glands, the liver, the pancreas and intestinal glands.",
              "In the mouth, teeth break food down mechanically (mastication) and salivary amylase begins starch digestion.",
              "The oesophagus pushes food down by peristalsis (rhythmic muscle contraction).",
              "The stomach churns food and mixes it with gastric juice containing hydrochloric acid and pepsin.",
              "HCl kills bacteria and gives the acidic medium needed by pepsin.",
              "The small intestine is the main site of digestion and absorption — it is long, has villi and receives bile and pancreatic juice.",
              "Bile from the liver emulsifies fats; pancreatic juice contains enzymes for starch, protein and fat.",
              "The ileum has villi and micro-villi that give a huge surface area for absorption.",
              "The large intestine absorbs water, salts and vitamins and forms faeces.",
              "Faeces are stored in the rectum and expelled through the anus (egestion).",
              "Mechanical digestion = physical breakdown; chemical digestion = enzymes breaking bonds."
            ],
            definitions: [
              "Digestion: the breakdown of large insoluble food molecules into small soluble ones.",
              "Alimentary canal: the tube from mouth to anus through which food passes.",
              "Enzyme: a biological catalyst that speeds up a reaction in the body.",
              "Peristalsis: rhythmic contraction of muscles that pushes food along the gut.",
              "Villi: tiny finger-like projections in the ileum that absorb digested food."
            ],
            examples: [
              "Salivary amylase converts starch to maltose in the mouth.",
              "Bile does not contain enzymes — it neutralises stomach acid and emulsifies fats."
            ],
            waecFocus: [
              "List the organs of the alimentary canal in order.",
              "State the functions of the stomach, liver, pancreas and ileum.",
              "Explain how the ileum is adapted for absorption."
            ],
            memoryTip: "Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Anus."
          },
          {
            id: "g9-t5-2", unit: "2.0", page: "174", title: "The Human Respiratory System", icon: "🫁",
            explanation: "The respiratory system takes in oxygen for use in respiration and removes carbon dioxide, the waste product of respiration. Gas exchange takes place in the lungs.",
            points: [
              "Organs: nose/nasal cavity, pharynx, larynx, trachea, bronchi, bronchioles and alveoli.",
              "The trachea is kept open by C-shaped rings of cartilage so breathing is not blocked.",
      "Cilia and mucus in the trachea trap dust and germs and sweep them to the throat.",
              "The larynx contains the vocal cords, which vibrate to produce sound.",
              "Gas exchange occurs in the alveoli — tiny thin-walled air sacs with a rich blood supply.",
              "Oxygen diffuses from alveoli into the blood; carbon dioxide diffuses from blood into alveoli.",
              "Ventilation (breathing) is driven by the diaphragm and intercostal muscles.",
              "Inhalation: diaphragm contracts and flattens, intercostals lift the ribs — chest volume increases and air enters.",
              "Exhalation: diaphragm relaxes and domes upward, ribs fall — chest volume decreases and air leaves.",
              "Haemoglobin in red blood cells carries oxygen as oxyhaemoglobin.",
              "Respiration equation: glucose + oxygen → carbon dioxide + water + energy.",
              "Smoking damages cilia, blocks alveoli and causes emphysema and lung cancer."
            ],
            definitions: [
              "Respiration: the breakdown of glucose in living cells to release energy.",
              "Alveolus: the tiny air sac in the lung where gas exchange takes place.",
              "Diaphragm: the muscle below the lungs that changes chest volume during breathing.",
              "Oxyhaemoglobin: haemoglobin combined with oxygen in the blood."
            ],
            examples: [
              "After a race you breathe faster because more oxygen is needed for respiration.",
              "A person with a blocked trachea struggles to breathe because air cannot pass."
            ],
            waecFocus: [
              "List the parts of the respiratory system.",
              "Describe how breathing in and out occurs using the diaphragm.",
              "Explain how the alveoli are adapted for gas exchange."
            ],
            memoryTip: "Nose → Trachea → Bronchi → Alveoli. Diaphragm down = breathe in."
          },
          {
            id: "g9-t5-3", unit: "3.0", page: "179", title: "The Excretory System", icon: "🚽",
            explanation: "Excretion is the removal of waste products of metabolism from the body. The kidneys are the main excretory organs, supported by the skin, lungs and liver.",
            points: [
              "Excretory products: carbon dioxide (lungs), urea (kidneys), excess water and salts (kidneys, skin), bile pigments (liver).",
              "The kidneys filter blood and remove urea, excess water and salts as urine.",
              "Each kidney contains about a million nephrons — the functional units.",
              "A nephron has a Bowman's capsule, glomerulus, loop of Henle, distal tubule and collecting duct.",
              "Urine formation: ultrafiltration in the glomerulus, then selective reabsorption in the tubule.",
              "Glucose, amino acids and most water are reabsorbed back into the blood.",
              "Urine passes from the kidney through the ureter to the bladder for storage.",
              "Urine leaves the body through the urethra.",
      "The liver deaminates excess amino acids, producing urea which is converted to ammonia then urea.",
              "Sweating removes water, salts and small amounts of urea; the skin is an excretory organ.",
              "The lungs remove carbon dioxide and water vapour.",
              "Failure of the kidneys is treated by dialysis or kidney transplant."
            ],
            definitions: [
              "Excretion: removal of waste products of metabolism from the body.",
              "Nephron: the functional unit of the kidney.",
              "Urea: the nitrogenous waste formed in the liver from excess amino acids.",
              "Ultrafiltration: pressure-driven filtration of blood in the glomerulus.",
              "Dialysis: a machine process that removes waste from blood when kidneys fail."
            ],
            examples: [
              "After eating excess protein, more urea is produced and excreted in urine.",
              "A person who drinks more water produces more dilute urine."
            ],
            waecFocus: [
              "State the organs of excretion and the waste each removes.",
              "Describe the formation of urine in the nephron.",
              "Explain the role of the liver in excretion."
            ],
            memoryTip: "Lungs = CO₂, Kidneys = urea/water/salts, Skin = sweat, Liver = makes urea."
          },
          {
            id: "g9-t5-4", unit: "4.0", page: "185", title: "The Blood Circulatory System", icon: "❤️",
            explanation: "The circulatory system transports food, oxygen, hormones and wastes around the body. It is a double circulation driven by a four-chambered heart.",
            points: [
              "The heart has four chambers: two upper atria and two lower ventricles.",
              "The left ventricle has the thickest wall because it pumps blood to the whole body.",
              "Valves (atrio-ventricular and semi-lunar) ensure blood flows in one direction only.",
              "Pulmonary circulation: right ventricle → lungs → left atrium (to oxygenate blood).",
              "Systemic circulation: left ventricle → body → right atrium.",
              "Arteries carry blood away from the heart under high pressure and have thick, elastic walls.",
              "Veins carry blood towards the heart under low pressure and have valves.",
              "Capillaries are thin, one-cell thick vessels where exchange of materials takes place.",
              "Blood consists of plasma, red blood cells, white blood cells and platelets.",
              "Red blood cells carry oxygen as oxyhaemoglobin; white blood cells fight infection; platelets help clotting.",
              "Plasma carries dissolved food, urea, hormones and carbon dioxide.",
              "The lymphatic system returns tissue fluid to the blood and helps fight infection."
            ],
            definitions: [
              "Circulation: the movement of blood through the heart, vessels and tissues.",
              "Artery: a vessel carrying blood away from the heart.",
              "Vein: a vessel carrying blood towards the heart.",
              "Capillary: the smallest blood vessel where exchange occurs.",
              "Pulse: the expansion of an artery as a wave of pressure passes along it."
            ],
            examples: [
              "Veins in the legs have many valves to stop blood flowing backwards.",
              "A cut artery spurts blood because of the high pressure from the heart."
            ],
            waecFocus: [
              "Trace the path of blood through the heart.",
              "State three differences between arteries and veins.",
              "Describe the structure and function of red blood cells."
            ],
            memoryTip: "Arteries Away (thick, no valves), Veins back to heart (thin, has valves)."
          },
          {
            id: "g9-t5-5", unit: "5.0", page: "189", title: "The Human Reproductive System", icon: "🧬",
            explanation: "The reproductive system produces sex cells, allows fertilisation and supports the development of the offspring. It differs between males and females.",
            points: [
              "Male organs: testes (produce sperm and testosterone), epididymis, vas deferens, penis, prostate gland and seminal vesicles.",
              "Female organs: ovaries (produce eggs and oestrogen/progesterone), fallopian tubes, uterus, cervix and vagina.",
              "Sperm is produced continuously from puberty; eggs are released monthly (ovulation).",
      "Fertilisation usually takes place in the fallopian tube.",
              "The fertilised egg divides and implants in the uterus lining about a week later.",
              "The placenta allows exchange of food, oxygen and waste between mother and foetus.",
              "The umbilical cord connects the foetus to the placenta.",
              "HCG maintains the pregnancy; oxytocin and prolactin are involved in birth and milk production.",
              "Growth of the foetus takes about 40 weeks (280 days) in the uterus.",
              "Birth (parturition) occurs by contractions of the uterine muscle.",
              "Sexually transmitted infections can be prevented by abstinence and use of condoms.",
              "Puberty is the stage when reproductive organs mature and secondary sexual characteristics appear."
            ],
            definitions: [
              "Reproduction: the process by which living things produce new individuals of the same kind.",
              "Ovulation: release of a mature egg from the ovary.",
              "Fertilisation: fusion of sperm and egg to form a zygote.",
              "Placenta: the organ through which the mother's blood supplies the foetus.",
              "Puberty: the stage of life when the body becomes capable of reproduction."
            ],
            examples: [
              "An egg lives for about 24 hours after ovulation; sperm survive about 3-5 days.",
              "The uterus lining thickens each month in case an egg is fertilised."
            ],
            waecFocus: [
              "Name the male and female reproductive organs and state their functions.",
              "Describe the journey of an egg from ovulation to implantation.",
              "Explain the role of the placenta."
            ],
            memoryTip: "Male: Testes make sperm. Female: Ovary releases egg, uterus holds baby."
          },
          {
            id: "g9-t5-6", unit: "6.0", page: "193", title: "The Skeletal System of Man", icon: "🦴",
            explanation: "The skeletal system gives the body its shape, supports organs, allows movement and protects delicate structures. An adult human skeleton has 206 bones.",
            points: [
              "The skeleton is divided into the axial skeleton (skull, vertebral column, rib cage) and appendicular skeleton (limbs, shoulder and hip girdles).",
              "Functions: support, protection, movement, production of blood cells, storage of minerals and shape.",
              "The skull protects the brain; the rib cage protects the heart and lungs; the vertebral column protects the spinal cord.",
              "The vertebral column is made of 33 vertebrae and gives flexibility and support.",
              "Bones are joined at joints; some joints are freely movable (ball and socket, hinge) and some are fixed (sutures of the skull).",
              "Ball-and-socket joints (shoulder, hip) allow movement in all directions.",
              "Hinge joints (elbow, knee) allow movement in one plane only.",
      "Ligaments join bone to bone; tendons join muscle to bone.",
              "Antagonistic muscle pairs work together — biceps and triceps.",
              "Red bone marrow in some bones produces blood cells.",
              "Bones are made of calcium phosphate and collagen, which give hardness and flexibility.",
              "The human skeleton has 206 bones at adulthood (babies have about 270)."
            ],
            definitions: [
              "Skeleton: the framework of bones supporting the body.",
              "Joint: the point where two or more bones meet.",
              "Ligament: tough tissue joining bone to bone.",
              "Tendon: tissue joining muscle to bone.",
              "Antagonistic muscles: pairs of muscles that work in opposite directions."
            ],
            examples: [
              "When the biceps contracts, the forearm bends; the triceps contracts to straighten it.",
              "The shoulder joint is a ball-and-socket joint allowing rotation."
            ],
            waecFocus: [
              "State four functions of the skeletal system.",
              "Distinguish between ligaments and tendons.",
              "Name the two types of freely movable joints and give examples."
            ],
            memoryTip: "Ligament = Bone to bone. Tendon = Muscle to bone. Biceps bends, Triceps straightens."
          },
          {
            id: "g9-t5-7", unit: "7.0", page: "195", title: "The Endocrine System", icon: "⚗️",
            explanation: "The endocrine system is made of glands that secrete hormones directly into the blood. Hormones control growth, metabolism, reproduction and the balance of the body.",
            points: [
              "Endocrine glands are ductless and pour their secretions (hormones) into the blood.",
              "Hormones travel in the blood to target organs where they have their effect.",
              "The pituitary gland (master gland) is in the brain and controls other glands.",
              "The thyroid gland secretes thyroxine, which controls the rate of metabolism.",
              "Deficiency of thyroxine in children causes cretinism; excess causes goitre and exophthalmos.",
              "The adrenal glands secrete adrenaline, which prepares the body for fight or flight.",
              "The pancreas secretes insulin and glucagon to control blood sugar level.",
              "Deficiency of insulin causes diabetes mellitus.",
              "The gonads (testes and ovaries) secrete testosterone, oestrogen and progesterone.",
              "Hormones act more slowly than nerve impulses but their effects last longer.",
              "The endocrine and nervous systems work together to coordinate body activities.",
              "Feedback mechanisms keep hormone levels within a narrow range."
            ],
            definitions: [
              "Hormone: a chemical substance secreted by a gland and carried in the blood to a target organ.",
              "Endocrine gland: a ductless gland that secretes hormones into the blood.",
              "Target organ: an organ on which a hormone has its effect.",
              "Adrenaline: the hormone that prepares the body for emergency action."
            ],
            examples: [
              "Insulin from the pancreas lowers blood sugar after a meal.",
              "Adrenaline makes the heart beat faster when you are frightened."
            ],
            waecFocus: [
              "Name four endocrine glands and the hormone each produces.",
              "State the effect of too little thyroxine and too little insulin.",
              "Distinguish between the endocrine and nervous systems."
            ],
            memoryTip: "Pituitary = master, Thyroxine = metabolism, Adrenaline = alarm, Insulin = sugar down."
          }
        ]
      },
      {
        id: "g9-t6",
        number: "Theme 6",
        title: "Health and Hygiene",
        topics: [
          {
            id: "g9-t6-1", unit: "1.0", page: "197", title: "Communicable and Non-Communicable Diseases", icon: "🤒",
            explanation: "Diseases are grouped by whether they can spread from one person to another. Knowing the cause of each disease is the first step to preventing it.",
            points: [
              "Communicable (infectious) diseases are caused by pathogens and can spread from person to person or from animals.",
              "Types of pathogens: bacteria, viruses, fungi, protozoa and parasites (worms).",
              "Methods of spread: air (droplets), water, food, direct contact, vectors (mosquitoes, flies) and sexual contact.",
              "Examples of communicable diseases: cholera, typhoid, tuberculosis, malaria, AIDS, measles, dysentery, yellow fever.",
              "Non-communicable (non-infectious) diseases do not spread from person to person.",
              "Examples: cancer, diabetes, hypertension, asthma, sickle cell anaemia, goitre, heart disease.",
              "Causes of non-communicable diseases: genetics, poor diet, smoking, alcohol, lack of exercise, pollution and ageing.",
      "Vectors are organisms that carry pathogens from one host to another (Anopheles mosquito carries malaria).",
              "A reservoir is a place where a pathogen lives and multiplies.",
              "Quarantine and isolation help stop the spread of infectious diseases."
            ],
            definitions: [
              "Communicable disease: a disease that can be transmitted from one organism to another.",
              "Non-communicable disease: a disease that cannot be transmitted to others.",
              "Pathogen: a micro-organism or agent that causes disease.",
              "Vector: an organism that carries a pathogen from one host to another.",
              "Carrier: a person or animal that harbours a pathogen without showing symptoms."
            ],
            examples: [
              "Malaria is spread by the bite of an infected female Anopheles mosquito.",
              "Diabetes is non-communicable — you cannot catch it from someone else."
            ],
            waecFocus: [
              "Distinguish between communicable and non-communicable diseases with three examples each.",
              "Name the pathogen and vector for malaria.",
              "State four ways in which communicable diseases spread."
            ],
            memoryTip: "Communicable = can catch. Non-communicable = cannot catch."
          },
          {
            id: "g9-t6-2", unit: "2.0", page: "199", title: "Treatment and Control Methods of Diseases", icon: "💊",
            explanation: "Diseases are prevented, treated and controlled by personal hygiene, vaccination, sanitation, medication and public health measures. Prevention is better and cheaper than cure.",
            points: [
              "Prevention: vaccination, personal hygiene, safe water, proper sewage disposal, safe food and use of condoms.",
              "Vaccination introduces a weakened or dead pathogen so the body produces antibodies.",
              "Treatment of bacterial diseases uses antibiotics such as penicillin, tetracycline and streptomycin.",
              "Viruses are not killed by antibiotics — they are treated with antiviral drugs, rest and supportive care.",
              "Antiseptics and disinfectants kill or inhibit microbes on living tissue and on surfaces respectively.",
              "Malaria is treated with antimalarial drugs such as chloroquine and artemisinin-based combinations.",
              "Control of vectors: use of insecticide-treated nets, insecticides, clearing bushes and destroying breeding sites.",
              "Isolation of patients and contact tracing limit outbreaks.",
              "Surgery, chemotherapy and radiation treat cancer.",
              "Balanced diet, exercise and adequate rest increase the body's resistance to disease.",
              "Health education raises awareness of how diseases spread and how to avoid them.",
              "Drug abuse damages the body — medicines must be taken as prescribed."
            ],
            definitions: [
              "Vaccination: introduction of a weakened or dead pathogen to stimulate immunity.",
              "Antibiotic: a substance produced by a micro-organism that kills or inhibits bacteria.",
              "Antiseptic: a substance applied to living tissue to kill microbes.",
              "Disinfectant: a substance used on surfaces to kill microbes.",
              "Immunity: the body's ability to resist a particular pathogen after exposure."
            ],
            examples: [
              "Penicillin cures a bacterial throat infection but not influenza (viral).",
              "An insecticide-treated net kills mosquitoes and prevents malaria."
            ],
            waecFocus: [
              "Explain how vaccination produces immunity.",
              "Distinguish between antibiotics and antiviral drugs.",
              "State four methods of controlling disease vectors."
            ],
            memoryTip: "Bacteria → antibiotics. Viruses → antivirals + rest. Prevent with vaccines."
          }
        ]
      },
      {
        id: "g9-t7",
        number: "Theme 7",
        title: "Technology",
        topics: [
          {
            id: "g9-t7-1", unit: "1.0", page: "", title: "Project Work", icon: "🏗️",
            explanation: "Project work is where you apply science to solve a real problem in your community. A good project follows the design and investigation process and ends with a clear report.",
            points: [
              "Choose a problem that is real, manageable and relevant to your community.",
              "Research the background and state a clear aim or hypothesis.",
              "Plan the method, list materials and identify the variables (independent, dependent, control).",
              "Carry out the investigation carefully and record observations in tables and graphs.",
              "Analyse the results, calculate averages where needed and discuss possible sources of error.",
              "Draw conclusions that answer the aim and state whether the hypothesis is supported.",
              "Write a report with title, aim, materials, method, results, discussion, conclusion and references.",
              "Cost the project and consider its environmental impact.",
      "Present the project with labelled diagrams, charts and a clear oral explanation.",
              "Examples: water filter, compost bin, simple electric alarm, balanced diet survey, waste audit, drug abuse awareness campaign, local water quality test, solar dryer."
            ],
            definitions: [
              "Project: an extended piece of work investigating or building something to solve a problem.",
              "Hypothesis: a testable prediction that guides an investigation.",
              "Variables: factors that can change in an experiment (independent, dependent, controlled).",
              "Conclusion: a judgement about whether the results support the aim or hypothesis."
            ],
            examples: [
              "Testing the pH of water sources in your community and recommending treatment.",
              "Building a compost bin from refuse and measuring how fast it produces manure."
            ],
            waecFocus: [
              "Outline the steps involved in planning and carrying out a science project.",
              "Write a complete project report with all the required sections.",
              "Identify the variables in a given investigation."
            ],
            memoryTip: "Aim → Method → Results → Analysis → Conclusion → Report. Always control your variables."
          }
        ]
      }
    ]
  }
];
