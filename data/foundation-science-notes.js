/* Foundation Science - hand written notes and diagrams (safe to edit).
 *
 * The textbook text itself lives in data/foundation-science-book.js, which is generated
 * by build_foundation_science.cjs - do not edit that file by hand.
 * Everything you add here is merged on top of the textbook at runtime, so you can type up
 * the units that are still missing and drop in your own diagrams.
 *
 * Entry shape:
 *   "g9-t1-1": {
 *     title: "Optional title override",
 *     notes: "Short revision note shown in a callout box.",
 *     memoryTip: "Tip shown at the bottom of the topic.",
 *     figures: [{ src: "images/foundation-science/my-diagram.png", alt: "What the diagram shows" }],
 *     sections: [
 *       { h: "Heading", blocks: [
 *           { t: "p", x: "A paragraph." },
 *           { t: "ul", items: ["Point one", "Point two"] },
 *           { t: "ol", items: ["Step one", "Step two"] },
 *           { t: "table", rows: [["Head", "Head"], ["Cell", "Cell"]] },
 *           { t: "formula", x: "Force = mass x acceleration" },
 *           { t: "img", src: "images/foundation-science/diagram.png", alt: "Caption" }
 *       ] }
 *     ]
 *   }
 */

window.foundationScienceNotes = window.foundationScienceNotes || {};

Object.assign(window.foundationScienceNotes, {
 /* ============ GRADE 7 ============ */
 "g7-t9-1": {
   title: "Meaning and Uses of Technology",
   notes: "Technology is the application of scientific knowledge to solve practical problems and meet human needs.",
   memoryTip: "Science discovers; technology applies.",
   sections: [
     { h: "Meaning of Technology", blocks: [
       { t: "p", x: "Technology is the systematic application of scientific ideas or knowledge to improve lives and meet people's needs." },
       { t: "ul", items: [
         "Science investigates nature; technology puts scientific knowledge into practical use.",
         "Technology produces tools, machines, medicines and materials to serve society."
       ]}
     ]},
     { h: "Uses of Technology", blocks: [
       { t: "ul", items: [
         "Producing new materials such as tools, machines and medicines.",
         "Improving transport and communication systems.",
         "Improving agriculture and biotechnology.",
         "Improving architecture, building and construction."
       ]}
     ]}
   ]
 },
 "g7-t9-2": {
   title: "Technological Processes - Recycling",
   notes: "Recycling collects and processes waste materials into new materials, reducing environmental impact.",
   memoryTip: "Reduce, reuse, recycle.",
   sections: [
     { h: "Meaning of Recycling", blocks: [
       { t: "p", x: "Recycling is the collection and processing of waste materials thrown away as trash and turning them into new materials." },
       { t: "ul", items: [
         "Recyclable materials: metals, paper, plastics, drink cans and glass.",
         "Recycling uses less of Earth's natural resources and less energy than making new products."
       ]}
     ]},
     { h: "Advantages", blocks: [
       { t: "ul", items: [
         "Uses less natural resources.",
         "Uses less energy and creates less pollution.",
         "Reduces landfill and waste dump sites."
       ]}
     ]},
     { h: "Problems", blocks: [
       { t: "ul", items: [
         "Sorting different materials (e.g. plastics) is difficult and time-consuming.",
         "Sorting equipment can be expensive.",
         "Some recycled materials (e.g. paper) are lower quality than new."
       ]}
     ]}
   ]
 },
 "g7-t7-1": {
   title: "Structure and Functions of the Human Eye",
   notes: "The eye is the sense organ for sight. It focuses light onto the retina, which sends signals to the brain.",
   memoryTip: "Cornea → pupil → lens → retina → optic nerve → brain.",
   sections: [
     { h: "Parts and Functions", blocks: [
       { t: "ul", items: [
         "Cornea: transparent front part that lets light in.",
         "Iris: controls the size of the pupil and amount of light entering.",
         "Lens: focuses light onto the retina.",
         "Retina: light-sensitive layer where the image is formed.",
         "Optic nerve: carries impulses from the eye to the brain."
       ]}
     ]},
     { h: "Eye Defects", blocks: [
       { t: "ul", items: [
         "Long-sightedness (hypermetropia): cannot see near objects; corrected with convex lenses.",
         "Short-sightedness (myopia): cannot see distant objects; corrected with concave lenses.",
         "Astigmatism: blurred vision from an uneven cornea; corrected with cylindrical lenses."
       ]}
     ]}
   ]
 },
 "g7-t7-2": {
   title: "Structure and Functions of the Human Ear",
   notes: "The ear detects sound and helps maintain balance. Sound vibrations travel through the outer, middle and inner ear.",
   memoryTip: "Pinna → ear canal → eardrum → ossicles → cochlea → auditory nerve.",
   sections: [
     { h: "Parts and Functions", blocks: [
       { t: "ul", items: [
         "Pinna: collects sound waves.",
         "Ear canal: carries sound to the eardrum.",
         "Eardrum: vibrates when sound hits it.",
         "Ossicles (three tiny bones): amplify vibrations.",
         "Cochlea: converts vibrations into nerve impulses.",
         "Auditory nerve: carries impulses to the brain."
       ]}
     ]}
   ]
 },
 "g7-t7-3": {
   title: "Structure and Functions of the Human Tongue",
   notes: "The tongue is the sense organ for taste. Taste buds detect sweet, sour, salty, bitter and umami.",
   memoryTip: "Taste buds on the tongue detect five basic tastes.",
   sections: [
     { h: "Functions", blocks: [
       { t: "ul", items: [
         "Detects taste through taste buds.",
         "Helps in chewing, swallowing and speech.",
         "Keeps the mouth moist with saliva."
       ]}
     ]}
   ]
 },
 "g7-t7-4": {
   title: "Structure of the Sensory Cells of the Human Skin",
   notes: "The skin contains sensory receptors for touch, pressure, pain, heat and cold. It protects the body and helps regulate temperature.",
   memoryTip: "Skin senses touch, pressure, pain, heat and cold.",
   sections: [
     { h: "Functions", blocks: [
       { t: "ul", items: [
         "Protects the body from injury and microbes.",
         "Contains receptors for touch, pressure, pain, heat and cold.",
         "Sweat glands help cool the body.",
         "Hair and nails are protective structures."
       ]}
     ]}
   ]
 },
 "g7-t7-5": {
   title: "Structure and Functions of the Nose",
   notes: "The nose is the sense organ for smell and the entry point of the respiratory system.",
   memoryTip: "Olfactory cells in the nose detect smell; nose warms and filters air.",
   sections: [
     { h: "Functions", blocks: [
       { t: "ul", items: [
         "Olfactory cells detect thousands of different smells.",
         "Hairs and mucus trap dust and microbes from inhaled air.",
         "Warms and moistens air before it reaches the lungs."
       ]}
     ]}
   ]
 },
 "g7-t8-1": {
   title: "Personal Cleanliness and Health",
   notes: "Personal health means keeping the body clean and free from germs through daily hygiene habits.",
   memoryTip: "Wash hands, body, teeth; keep nails and hair clean.",
   sections: [
     { h: "Hygiene Practices", blocks: [
       { t: "ul", items: [
         "Wash hands with soap and water after the toilet and before eating.",
         "Wash the whole body at least twice a day.",
         "Do not share towels, soap or hair combs (prevents ringworm and skin diseases).",
         "Brush teeth twice a day to prevent decay.",
         "Clean and change clothing regularly.",
         "Wear footwear to prevent cuts and hookworm infection."
       ]}
     ]}
   ]
 },
 /* ============ GRADE 8 ============ */
 "g8-t1-2": {
   title: "The Microscope",
   notes: "The light microscope uses two convex lenses to greatly enlarge tiny objects such as cells.",
   memoryTip: "Always start with the low-power objective.",
   sections: [
     { h: "Parts and Functions", blocks: [
       { t: "ul", items: [
         "Eye-piece lens: magnifies the image from the objective lens.",
         "Objective lens: magnifies the specimen to form a real image.",
         "Stage: platform where the specimen is placed.",
         "Mirror: directs light through the specimen.",
         "Diaphragm: controls the amount of light.",
         "Coarse and fine adjustment knobs: focus the image."
       ]}
     ]},
     { h: "Precautions", blocks: [
       { t: "ul", items: [
         "Always start with the lowest power magnification.",
         "Keep lenses clean; never touch them with fingers.",
         "Carry the microscope with both hands.",
         "Keep the stage dry and clean."
       ]}
     ]}
   ]
 },
 "g8-t2-1": {
   title: "Generalised Plant and Animal Cells",
   notes: "The cell is the basic unit of life. Plant cells have a cell wall, chloroplasts and a large vacuole; animal cells do not.",
   memoryTip: "Plant cell = animal cell + wall, chloroplasts, large vacuole.",
   sections: [
     { h: "Structures", blocks: [
       { t: "ul", items: [
         "Cell membrane: controls entry and exit of substances.",
         "Cytoplasm: jelly-like substance holding organelles.",
         "Nucleus: control centre containing genetic material (DNA).",
         "Mitochondrion: site of respiration (releases energy).",
         "Chloroplast: contains chlorophyll for photosynthesis (plant only).",
         "Cell wall: rigid cellulose layer (plant only).",
         "Vacuole: stores water, food and wastes."
       ]}
     ]}
   ]
 },
 "g8-t2-2": {
   title: "Specialised Plant and Animal Cells",
   notes: "Specialised cells are structurally adapted to perform specific functions.",
   memoryTip: "Form fits function.",
   sections: [
     { h: "Examples", blocks: [
       { t: "ul", items: [
         "Red blood cell: biconcave, no nucleus, contains haemoglobin to carry oxygen.",
         "Nerve cell (neuron): long axon transmits impulses.",
         "Root hair cell: large surface area absorbs water and minerals.",
         "Guard cells: control opening and closing of stomata.",
         "Ciliated cell: sweeps mucus and dust in air passages.",
         "Palisade cell: packed with chloroplasts for photosynthesis."
       ]}
     ]}
   ]
 },
 "g8-t3-0": {
   title: "Unicellular Organisms",
   notes: "Unicellular organisms are made of one cell that carries out all life processes. Examples: Amoeba, Paramecium, Euglena, Bacterium.",
   memoryTip: "One cell = whole organism.",
   sections: [
     { h: "Examples", blocks: [
       { t: "ul", items: [
         "Amoeba: moves and feeds using pseudopodia; reproduces by binary fission.",
         "Paramecium: slipper-shaped, moves with cilia, has oral groove for feeding.",
         "Euglena: plant-like (chloroplasts) and animal-like (flagellum); borderline organism.",
         "Bacterium: prokaryote, no true nucleus; reproduces by binary fission."
       ]}
     ]}
   ]
 },
 "g8-t4-0": {
   title: "The Plant Kingdom",
   notes: "Plants are multicellular, autotrophic organisms with cellulose cell walls. They are divided into non-flowering and flowering plants.",
   memoryTip: "Non-flowering (spores) vs flowering (seeds).",
   sections: [
     { h: "Groups", blocks: [
       { t: "ul", items: [
         "Non-flowering: bryophytes (mosses), pteridophytes (ferns), gymnosperms (conifers).",
         "Flowering (angiosperms): monocots (one seed leaf) and dicots (two seed leaves)."
       ]}
     ]}
   ]
 },
 "g8-t4-2": {
   title: "Flowering Plants: External and Internal Structure",
   notes: "A flowering plant has a root system (anchors, absorbs water/minerals) and a shoot system (stem, leaves, flowers).",
   memoryTip: "Root absorbs; stem transports; leaf photosynthesises.",
   sections: [
     { h: "Parts", blocks: [
       { t: "ul", items: [
         "Root: anchors the plant and absorbs water and mineral salts.",
         "Stem: transports water (xylem) and food (phloem); supports leaves and flowers.",
         "Leaf: photosynthesises and transpires through stomata.",
         "Flower: reproductive part producing seeds and fruit."
       ]}
     ]}
   ]
 },
 "g8-t4-3": {
   title: "Structure and Functions of Parts of a Flower",
   notes: "The flower is the reproductive organ. Male part = stamen (anther + filament); female part = carpel/pistil (stigma, style, ovary).",
   memoryTip: "Stamen male (anther=pollen); Carpel female (stigma receives pollen).",
   sections: [
     { h: "Whorls", blocks: [
       { t: "ul", items: [
         "Calyx: sepals protect the bud.",
         "Corolla: petals attract pollinators.",
         "Androecium: stamens (male) produce pollen.",
         "Gynoecium: carpels (female) contain ovules."
       ]}
     ]}
   ]
 },
 "g8-t4-4": {
   title: "Pollination and Germination",
   notes: "Pollination transfers pollen from anther to stigma (self or cross; by wind, insects, water). Germination is a seed growing into a seedling.",
   memoryTip: "Pollination = pollen moves; Germination = seed sprouts.",
   sections: [
     { h: "Key Points", blocks: [
       { t: "ul", items: [
         "Self-pollination: same flower or same plant.",
         "Cross-pollination: different plant of same species.",
         "Agents: wind, insects, water.",
         "Conditions for germination: water, oxygen, suitable warmth."
       ]}
     ]}
   ]
 },
 /* ============ GRADE 9 ============ */
 "g9-t2-1": {
   title: "Modern Atomic Theory",
   notes: "Matter is made of tiny particles called atoms. Atoms consist of a nucleus (protons + neutrons) surrounded by electrons.",
   memoryTip: "Proton (+), Neutron (0), Electron (−).",
   sections: [
     { h: "Subatomic Particles", blocks: [
       { t: "ul", items: [
         "Proton: positive charge, in nucleus, relative mass 1.",
         "Neutron: no charge, in nucleus, relative mass 1.",
         "Electron: negative charge, orbits nucleus, negligible mass.",
         "Atomic number = number of protons.",
         "Mass number = protons + neutrons."
       ]}
     ]}
   ]
 },
 "g9-t2-2": {
   title: "The Simplified Periodic Table of Elements",
   notes: "Elements are arranged in the periodic table by atomic number. Elements in the same group have similar properties.",
   memoryTip: "Groups = columns (similar properties); Periods = rows.",
   sections: [
     { h: "Structure", blocks: [
       { t: "ul", items: [
         "Elements in the same group have the same number of outer electrons.",
         "Metals on the left, non-metals on the right.",
         "Group 1: alkali metals; Group 17: halogens; Group 18: noble gases."
       ]}
     ]}
   ]
 },
 "g9-t2-3": {
   title: "Arrangement of Electrons",
   notes: "Electrons occupy shells around the nucleus: 2, 8, 8 pattern. The outer-shell electrons determine chemical behaviour.",
   memoryTip: "2-8-8 for the first 20 elements.",
   sections: [
     { h: "Rules", blocks: [
       { t: "ul", items: [
         "First shell holds max 2 electrons.",
         "Second shell holds max 8 electrons.",
         "Third shell holds max 8 electrons (for elements up to calcium).",
         "Atoms with full outer shells (noble gases) are unreactive."
       ]}
     ]}
   ]
 },
 "g9-t2-4": {
   title: "Atomic Mass and Atomic Numbers",
   notes: "Atomic number = number of protons (identifies the element). Mass number = protons + neutrons. Isotopes are same element, different neutrons.",
   memoryTip: "Atomic number = protons; Mass number = protons + neutrons.",
   sections: [
     { h: "Definitions", blocks: [
       { t: "ul", items: [
         "Atomic number (Z): number of protons in the nucleus.",
         "Mass number (A): total protons and neutrons.",
         "Neutrons = mass number − atomic number."
       ]}
     ]}
   ]
 },
 "g9-t2-5": {
   title: "Isotopes",
   notes: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
   memoryTip: "Same protons, different neutrons.",
   sections: [
     { h: "Examples & Uses", blocks: [
       { t: "ul", items: [
         "Carbon-12 and Carbon-14 are isotopes of carbon.",
         "Uses: carbon dating, medical tracers, cancer treatment (cobalt-60)."
       ]}
     ]}
   ]
 },
 "g9-t2-6": {
   title: "Metals and Non-Metals",
   notes: "Metals are shiny, malleable, conduct heat and electricity, and form basic oxides. Non-metals are dull, brittle, poor conductors, and form acidic oxides.",
   memoryTip: "Metals = left (conduct, shiny); Non-metals = right (dull, brittle).",
   sections: [
     { h: "Comparison", blocks: [
       { t: "table", rows: [
         ["Property", "Metals", "Non-Metals"],
         ["Appearance", "Shiny", "Dull"],
         ["Conducts electricity", "Yes", "No (except graphite)"],
         ["Malleable/ductile", "Yes", "No (brittle)"],
         ["Oxide type", "Basic", "Acidic"]
       ]}
     ]}
   ]
 },
 "g9-t2-7": {
   title: "Compounds and Naming Compounds",
   notes: "A compound is a pure substance made of two or more elements chemically combined. Names often end in -ide (two elements) or -ate/-ite (with oxygen).",
   memoryTip: "Two elements → -ide; with oxygen → -ate/-ite.",
   sections: [
     { h: "Examples", blocks: [
       { t: "ul", items: [
         "Sodium chloride (NaCl), magnesium oxide (MgO), water (H₂O).",
         "Calcium carbonate (CaCO₃), sodium sulphate (Na₂SO₄)."
       ]}
     ]}
   ]
 },
 "g9-t2-8": {
   title: "Chemical Formulae of Compounds",
   notes: "A chemical formula shows the elements and number of atoms in a compound using valences to balance charges.",
   memoryTip: "Swap the valences to write the formula.",
   sections: [
     { h: "Examples", blocks: [
       { t: "ul", items: [
         "Sodium chloride: Na⁺ Cl⁻ → NaCl.",
         "Magnesium oxide: Mg²⁺ O²⁻ → MgO.",
         "Aluminium oxide: Al³⁺ O²⁻ → Al₂O₃."
       ]}
     ]}
   ]
 },
 "g9-t2-9": {
   title: "Chemical Equations",
   notes: "A chemical equation shows reactants → products. It must be balanced so the same number of each atom appears on both sides.",
   memoryTip: "Balance atoms, never change formulas.",
   sections: [
     { h: "Example", blocks: [
       { t: "p", x: "Hydrogen + oxygen → water: 2H₂ + O₂ → 2H₂O" },
       { t: "ul", items: [
         "Reactants on the left, products on the right.",
         "State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous."
       ]}
     ]}
   ]
 },
 "g9-t2-10": {
   title: "Ionic and Covalent Bonding",
   notes: "Ionic bonding: transfer of electrons between metal and non-metal forming ions. Covalent bonding: sharing of electrons between non-metals.",
   memoryTip: "Ionic = transfer (metal+non-metal); Covalent = share (non-metal+non-metal).",
   sections: [
     { h: "Types", blocks: [
       { t: "ul", items: [
         "Ionic: NaCl (Na⁺ and Cl⁻ held by electrostatic attraction).",
         "Covalent: H₂O, CH₄ (shared electron pairs)."
       ]}
     ]}
   ]
 },
 "g9-t4-1": {
   title: "Movement of Heat Energy",
   notes: "Heat travels by conduction (solids), convection (fluids) and radiation (no medium needed).",
   memoryTip: "Conduction = solid; Convection = fluid; Radiation = space.",
   sections: [
     { h: "Methods", blocks: [
       { t: "ul", items: [
         "Conduction: vibration of particles through a solid (metals are good conductors).",
         "Convection: movement of heated fluid particles (warm rises, cool sinks).",
         "Radiation: electromagnetic waves through vacuum (sun's heat reaches Earth)."
       ]}
     ]}
   ]
 },
 "g9-t4-2": {
   title: "Light Energy",
   notes: "Light travels in straight lines at 3×10⁸ m/s. It can be reflected, refracted, absorbed or transmitted. Lenses form images.",
   memoryTip: "Light = straight, fast, reflects/refracts.",
   sections: [
     { h: "Key Ideas", blocks: [
       { t: "ul", items: [
         "Reflection: bouncing off a surface (plane mirror forms virtual, erect image).",
         "Refraction: bending when entering a different medium.",
         "Dispersion: white light splits into seven colours (ROYGBIV).",
         "Convex lens: converges; concave lens: diverges."
       ]}
     ]}
   ]
 },
 "g9-t4-3": {
   title: "Sound Energy",
   notes: "Sound is produced by vibrations and needs a medium (solid, liquid or gas) to travel. It cannot travel through a vacuum.",
   memoryTip: "Sound needs a medium; fastest in solids.",
   sections: [
     { h: "Key Ideas", blocks: [
       { t: "ul", items: [
         "Sound is a longitudinal wave (compressions and rarefactions).",
         "Speed: fastest in solids, slower in liquids, slowest in gases.",
         "Echo: reflected sound used to measure distance/depth."
       ]}
     ]}
   ]
 },
 "g9-t4-4": {
   title: "Electrical Energy",
   notes: "Electric current is the flow of charge (amps), driven by voltage (volts), opposed by resistance (ohms). Circuits are series or parallel.",
   memoryTip: "V = IR; Series = one path; Parallel = multiple paths.",
   sections: [
     { h: "Circuit Rules", blocks: [
       { t: "ul", items: [
         "Series: one path; if one bulb blows, all go off.",
         "Parallel: multiple paths; one bulb failing does not affect others.",
         "Ohm's law: V = I × R."
       ]}
     ]}
   ]
 },
 "g9-t5-1": {
   title: "The Human Digestive System",
   notes: "Digestion breaks food into simple soluble substances. Path: mouth → oesophagus → stomach → small intestine → large intestine.",
   memoryTip: "Mouth → Oesophagus → Stomach → Small intestine → Large intestine.",
   sections: [
     { h: "Organs", blocks: [
       { t: "ul", items: [
         "Mouth: starch digestion begins (saliva/amylase).",
         "Stomach: churns food with digestive juices.",
         "Liver: produces bile for fat digestion.",
         "Pancreas: produces enzymes and insulin.",
         "Small intestine: most digestion and absorption.",
         "Large intestine: absorbs water; removes undigested waste."
       ]}
     ]}
   ]
 },
 "g9-t5-2": {
   title: "The Human Respiratory System",
   notes: "Breathing moves air in and out; gas exchange occurs in the alveoli. Oxygen enters blood; carbon dioxide leaves.",
   memoryTip: "Nose → Trachea → Bronchi → Alveoli.",
   sections: [
     { h: "Key Ideas", blocks: [
       { t: "ul", items: [
         "Inhalation: diaphragm flattens, air enters.",
         "Exhalation: diaphragm relaxes, air leaves.",
         "Alveoli: tiny air sacs where gas exchange occurs.",
         "Breathing ≠ respiration (respiration releases energy from food)."
       ]}
     ]}
   ]
 },
 "g9-t5-3": {
   title: "The Excretory System",
   notes: "The kidneys filter urea and excess water from blood to form urine. Path: kidney → ureter → bladder → urethra.",
   memoryTip: "Kidney filters → ureter carries → bladder stores → urethra exits.",
   sections: [
     { h: "Organs", blocks: [
       { t: "ul", items: [
         "Kidneys: filter waste (urea) from blood.",
         "Nephron: filtering unit of the kidney.",
         "Ureter: carries urine to the bladder.",
         "Bladder: stores urine.",
         "Skin and lungs also excrete waste (sweat, CO₂)."
       ]}
     ]}
   ]
 },
 "g9-t5-4": {
   title: "The Blood Circulatory System",
   notes: "The heart pumps blood through arteries (away), veins (back) and capillaries (exchange).",
   memoryTip: "Arteries Away; Veins back; Capillaries exchange.",
   sections: [
     { h: "Blood Parts", blocks: [
       { t: "ul", items: [
         "Red blood cells: carry oxygen (haemoglobin).",
         "White blood cells: defend against disease.",
         "Platelets: help blood clot.",
         "Plasma: liquid part of blood."
       ]}
     ]}
   ]
 },
 "g9-t5-5": {
   title: "The Human Reproductive System",
   notes: "In humans, fertilisation occurs in the fallopian tube; the foetus develops in the uterus.",
   memoryTip: "Fertilisation in fallopian tube; baby grows in uterus.",
   sections: [
     { h: "Key Ideas", blocks: [
       { t: "ul", items: [
         "Male: testes produce sperm.",
         "Female: ovaries produce eggs.",
         "Fertilisation: sperm meets egg in the fallopian tube.",
         "Pregnancy: embryo implants and develops in the uterus."
       ]}
     ]}
   ]
 },
 "g9-t5-6": {
   title: "The Skeletal System of Man",
   notes: "The skeleton supports, protects and enables movement. Bones are joined at joints; muscles pull on bones.",
   memoryTip: "Skull protects brain; backbone protects spinal cord.",
   sections: [
     { h: "Functions", blocks: [
       { t: "ul", items: [
         "Support and shape for the body.",
         "Protection of organs (skull, ribs, backbone).",
         "Movement (muscles pull on bones).",
         "Blood cell production in bone marrow."
       ]}
     ]}
   ]
 },
 "g9-t5-7": {
   title: "The Endocrine System",
   notes: "Endocrine glands secrete hormones directly into the blood to regulate body functions.",
   memoryTip: "Hormones = chemical messengers in blood.",
   sections: [
     { h: "Glands", blocks: [
       { t: "ul", items: [
         "Pancreas: insulin controls blood sugar.",
         "Thyroid: thyroxine controls metabolism.",
         "Adrenal: adrenaline for 'fight or flight'.",
         "Pituitary: master gland controlling other glands."
       ]}
     ]}
   ]
 },
 "g9-t6-1": {
   title: "Communicable and Non-Communicable Diseases",
   notes: "Communicable diseases spread between people (measles, cholera, malaria). Non-communicable do not (diabetes, high blood pressure).",
   memoryTip: "Communicable = spreads; Non-communicable = does not spread.",
   sections: [
     { h: "Examples", blocks: [
       { t: "ul", items: [
         "Communicable: cholera (water), malaria (mosquito), measles (air).",
         "Non-communicable: diabetes, high blood pressure, sickle-cell anaemia."
       ]}
     ]}
   ]
 },
 "g9-t6-2": {
   title: "Treatment and Control Methods of Diseases",
   notes: "Prevent disease through hygiene, clean water, immunisation, mosquito nets and draining stagnant water.",
   memoryTip: "Wash hands, drink clean water, immunise, use nets.",
   sections: [
     { h: "Prevention", blocks: [
       { t: "ul", items: [
         "Vaccination prevents measles, polio, etc.",
         "Draining stagnant water prevents mosquito breeding (malaria).",
         "Boiling/filtering water prevents cholera and typhoid.",
         "Hand washing prevents spread of germs."
       ]}
     ]}
   ]
 },
 "g9-t7-1": {
   title: "Project Work",
   notes: "A science project follows the scientific method: ask a question, form a hypothesis, experiment, observe, conclude.",
   memoryTip: "Aim → Hypothesis → Method → Results → Conclusion.",
   sections: [
     { h: "Steps", blocks: [
       { t: "ul", items: [
         "Identify a problem and state the aim.",
         "Form a hypothesis (testable guess).",
         "Plan and carry out an experiment (control variables).",
         "Record observations and analyse results.",
         "Draw a conclusion and write a report."
        ]}
      ]}
    ]
  },
});
 /* Units still to be typed up (remaining):
 *   "g8-t5-1"  (Grade 8 - Environmental Protection and Management)
 *   "g8-t5-2"  (Grade 8 - Natural Resources)
 *   "g8-t5-3"  (Grade 8 - Conservation of Natural Resources)
 *   "g8-t5-4"  (Grade 8 - Pollution and Control Methods)
 *   "g8-t5-5"  (Grade 8 - Desertification)
 *   "g8-t6-1"  (Grade 8 - Deficiency Diseases)
 *   "g8-t6-2"  (Grade 8 - Food Contamination)
 *   "g8-t6-3"  (Grade 8 - Methods of Food Preservation)
 *   "g8-t7-1"  (Grade 8 - Cellular Organisation)
 *   "g8-t7-2"  (Grade 8 - Functions of Some Human Internal Organs)
 *   "g8-t8-1"  (Grade 8 - Sanitation)
 *   "g8-t8-2"  (Grade 8 - Types of Wastes)
 *   "g8-t8-3"  (Grade 8 - Methods of Disposal of Domestic Wastes)
 *   "g8-t9-1"  (Grade 8 - Types of Communication Technology)
 *   "g8-t9-2"  (Grade 8 - Some Communication Devices)
 *   "g8-t9-3"  (Grade 8 - Computers: Parts and Functions)
 *   "g8-t9-4"  (Grade 8 - The Internet and Its Uses)
 *   "g9-t1-1"  (Grade 9 - Meaning of Adaptation)
 *   "g9-t1-2"  (Grade 9 - Structure and Adaptations of the Tilapia Fish)
 *   "g9-t1-3"  (Grade 9 - Structure and Adaptations of the Toad)
 *   "g9-t1-4"  (Grade 9 - Structure and Adaptations of the Agama Lizard)
 *   "g9-t1-5"  (Grade 9 - Structure and Adaptations of Birds)
 *   "g9-t1-6"  (Grade 9 - Structure and Adaptations of a Mammal (Rat))
 *   "g9-t1-7"  (Grade 9 - Comparison of Classes of Vertebrates)
 *   "g9-t2-1"  (Grade 9 - Modern Atomic Theory)
 *   "g9-t2-2"  (Grade 9 - The Simplified Periodic Table of Elements)
 *   "g9-t2-3"  (Grade 9 - Arrangement of Electrons)
 *   "g9-t2-4"  (Grade 9 - Atomic Mass and Atomic Numbers)
 *   "g9-t2-5"  (Grade 9 - Isotopes)
 *   "g9-t2-6"  (Grade 9 - Metals and Non-Metals)
 *   "g9-t2-7"  (Grade 9 - Compounds and Naming Compounds)
 *   "g9-t2-8"  (Grade 9 - Chemical Formulae of Compounds)
 *   "g9-t2-9"  (Grade 9 - Chemical Equations)
 *   "g9-t2-10"  (Grade 9 - Ionic and Covalent Bonding)
 *   "g9-t3-1"  (Grade 9 - Acids: Types and Properties)
 *   "g9-t3-2"  (Grade 9 - Bases, Oxides and Neutralisation)
 *   "g9-t3-3"  (Grade 9 - Acid-Base Indicators)
 *   "g9-t3-4"  (Grade 9 - The pH Scale and Universal Indicator)
 *   "g9-t3-5"  (Grade 9 - Salts and Their Types)
 *   "g9-t3-6"  (Grade 9 - Preparation of Salts (Soluble and Insoluble))
 *   "g9-t3-7"  (Grade 9 - Electrolysis of Acidified Water)
 *   "g9-t3-8"  (Grade 9 - Hard and Soft Water)
 *   "g9-t3-9"  (Grade 9 - Purification of Water)
 *   "g9-t3-10"  (Grade 9 - Advantages and Disadvantages of Hard and Soft Water)
 *   "g9-t5-7"  (Grade 9 - The Endocrine System)
 *   "g9-t6-1"  (Grade 9 - Communicable and Non-Communicable Diseases)
 *   "g9-t6-2"  (Grade 9 - Treatment and Control Methods of Diseases)
 *   "g9-t7-1"  (Grade 9 - Project Work)
 */
