const ScienceQuestions = [
  // Question topics follow the Foundation Science Book syllabus (Grade 7 / 8 / 9).
  // topic values are canonical book topic titles so Library and Quiz stay in sync.
  //
  // SCIENCE IMAGES — development stage (offline mode only).
  // Current images have been removed. Add your diagram files manually, e.g.:
  //   images/science/living-and-non-living-things/q1.png
  //   images/science/characteristics-of-living-things/q2.png
  //   images/science/generalised-plant-and-animal-cells/q3.png
  // Convention: images/science/<topic-slug>/q<question-index>.png
  // Then update the "image" field below to that path so it shows in the app.
  {
    "topic": "Living and Non-Living Things",
    "question": "Which of the following is NOT a life process common to all living things?",
    "image": "images/science/diagrams/q.png",
    "options": ["Nutrition", "Irritability", "Combustion", "Reproduction"],
    "correct": 2,
    "explanation": "Combustion is a chemical process, not a life process. Living things carry out nutrition, irritability, growth, reproduction, movement and respiration."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "The process by which living things obtain and use food is called",
    "image": "images/science/diagrams/q.png",
    "options": ["respiration", "nutrition", "excretion", "growth"],
    "correct": 1,
    "explanation": "Nutrition is the taking in and use of food by living things."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "The ability of living things to respond to changes in their surroundings is called",
    "image": "images/science/diagrams/q.png",
    "options": ["movement", "irritability", "adaptation", "growth"],
    "correct": 1,
    "explanation": "Irritability (sensitivity) is the ability of organisms to respond to stimuli in their environment."
  },
  {
    "topic": "Living and Non-Living Things",
    "question": "Which of the following is a non-living thing?",
    "image": "images/science/diagrams/q.png",
    "options": ["A mushroom", "A river", "A mango tree", "A grasshopper"],
    "correct": 1,
    "explanation": "A river has no life processes; it does not feed, respire or reproduce."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "The removal of waste products from the body of a living thing is known as",
    "image": "images/science/diagrams/q.png",
    "options": ["excretion", "nutrition", "digestion", "transport"],
    "correct": 0,
    "explanation": "Excretion is the removal of metabolic waste products from the body."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "Growth in living things is best described as",
    "image": "images/science/diagrams/q.png",
    "options": ["an increase in size and weight", "a change in colour", "the ability to move", "the production of young ones"],
    "correct": 0,
    "explanation": "Growth is the permanent increase in size and dry weight of an organism."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Which of the following is the basic unit of life?",
    "image": "images/science/diagrams/q.png",
    "options": ["Tissue", "Organ", "Cell", "Organism"],
    "correct": 2,
    "explanation": "The cell is the basic unit of structure and function of all living things."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The control centre of a cell that contains the genetic material is the",
    "image": "images/science/diagrams/q.png",
    "options": ["cytoplasm", "nucleus", "cell wall", "cell membrane"],
    "correct": 1,
    "explanation": "The nucleus controls cell activities and contains chromosomes with genes."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Which structure is found in a plant cell but NOT in an animal cell?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mitochondrion", "Ribosome", "Cell wall", "Cell membrane"],
    "correct": 2,
    "explanation": "The rigid cell wall made of cellulose is present only in plant cells."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The jelly-like substance in which cell organelles are found is the",
    "image": "images/science/diagrams/q.png",
    "options": ["nucleus", "cytoplasm", "vacuole", "membrane"],
    "correct": 1,
    "explanation": "Cytoplasm is the jelly-like material inside the cell in which organelles are suspended."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Which organelle is responsible for respiration and the release of energy in a cell?",
    "image": "images/science/diagrams/q.png",
    "options": ["Nucleus", "Ribosome", "Mitochondrion", "Vacuole"],
    "correct": 2,
    "explanation": "The mitochondrion is the powerhouse of the cell where respiration releases energy."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The green pigment that gives plants their colour and traps sunlight is",
    "image": "images/science/diagrams/q.png",
    "options": ["chlorophyll", "xanthophyll", "hemoglobin", "melanin"],
    "correct": 0,
    "explanation": "Chlorophyll is the green pigment that absorbs light energy for photosynthesis."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "Which of the following special structures is found in plant cells but not in animal cells?",
    "image": "images/science/diagrams/q.png",
    "options": ["Vacuole", "Chloroplast", "Nucleus", "Membrane"],
    "correct": 1,
    "explanation": "Chloroplasts contain chlorophyll and are present only in plant (and some algal) cells."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The movement of water molecules from a region of high concentration to a region of low concentration through a partially permeable membrane is called",
    "image": "images/science/diagrams/q.png",
    "options": ["diffusion", "osmosis", "excretion", "transpiration"],
    "correct": 1,
    "explanation": "Osmosis is the movement of water through a partially permeable membrane from high to low concentration."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Without any help, gases and dissolved substances spread from an area of high concentration to an area of low concentration by",
    "image": "images/science/diagrams/q.png",
    "options": ["osmosis", "diffusion", "excretion", "filtration"],
    "correct": 1,
    "explanation": "Diffusion is the movement of particles from a region of higher to lower concentration."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The green chemical present in chloroplasts is used by plants mainly to",
    "image": "images/science/diagrams/q.png",
    "options": ["absorb sunlight for photosynthesis", "give the plant a pleasant smell", "protect the plant from insects", "store starch"],
    "correct": 0,
    "explanation": "Chlorophyll traps sunlight needed to make food during photosynthesis."
  },
  {
    "topic": "Classification of Living Things",
    "question": "The two major kingdoms into which living things are first divided are",
    "image": "images/science/diagrams/q.png",
    "options": ["Plantae and Animalia", "Monera and Protista", "Fungi and Protista", "Plantae and Fungi"],
    "correct": 0,
    "explanation": "Living things are broadly divided into the plant kingdom (Plantae) and the animal kingdom (Animalia)."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following is a feature that distinguishes animals from plants?",
    "image": "images/science/diagrams/q.png",
    "options": ["Plants can move about freely", "Animals manufacture their own food", "Animals feed on ready-made food", "Animals are green in colour"],
    "correct": 2,
    "explanation": "Animals are consumers that feed on ready-made food, while plants make their own food."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Mammals are animals that",
    "image": "images/science/diagrams/q.png",
    "options": ["lay eggs and feed their young on milk", "give birth to live young and feed them on milk", "have feathers and scales", "live only in water"],
    "correct": 1,
    "explanation": "Mammals give birth to live young (except monotremes) and feed them on milk from mammary glands."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which group of animals has feathers and lays eggs?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mammals", "Birds", "Amphibians", "Reptiles"],
    "correct": 1,
    "explanation": "Birds are the only vertebrates covered with feathers and they lay hard-shelled eggs."
  },
  {
    "topic": "Classification of Living Things",
    "question": "A fish belongs to the class known as Pisces because it",
    "image": "images/science/diagrams/q.png",
    "options": ["lives on land", "breathes with lungs", "lives in water and breathes with gills", "has four legs"],
    "correct": 2,
    "explanation": "Fish are aquatic vertebrates that breathe with gills and are covered with scales."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following animals is a herbivore?",
    "image": "images/science/diagrams/q.png",
    "options": ["Lion", "Cow", "Eagle", "Snake"],
    "correct": 1,
    "explanation": "A herbivore feeds only on plants; a cow is a herbivore."
  },
  {
    "topic": "Classification of Living Things",
    "question": "An animal that feeds on the flesh of other animals is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["herbivore", "carnivore", "omnivore", "scavenger"],
    "correct": 1,
    "explanation": "A carnivore is a flesh-eating animal such as a lion or eagle."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following is an example of a monocotyledonous plant?",
    "image": "images/science/diagrams/q.png",
    "options": ["Maize", "Bean", "Mango", "Orange"],
    "correct": 0,
    "explanation": "Monocots have one seed leaf (cotyledon); maize is a monocot, while beans and mango have two."
  },
  {
    "topic": "Classification of Living Things",
    "question": "The young ones which feed on their mother's milk are produced by",
    "image": "images/science/diagrams/q.png",
    "options": ["birds", "mammals", "fishes", "reptiles"],
    "correct": 1,
    "explanation": "Only mammals produce milk to feed their young."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The food-making process in green plants is called",
    "image": "images/science/diagrams/q.png",
    "options": ["respiration", "photosynthesis", "transpiration", "digestion"],
    "correct": 1,
    "explanation": "Photosynthesis is the process by which green plants manufacture food using sunlight, water and carbon dioxide."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The raw materials for photosynthesis are",
    "image": "images/science/diagrams/q.png",
    "options": ["oxygen and water", "carbon dioxide and water", "carbon dioxide and oxygen", "glucose and oxygen"],
    "correct": 1,
    "explanation": "Carbon dioxide (from the air) and water (from the soil) are the raw materials for photosynthesis."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The end products of photosynthesis are",
    "image": "images/science/diagrams/q.png",
    "options": ["glucose and oxygen", "carbon dioxide and water", "starch and carbon dioxide", "water and oxygen"],
    "correct": 0,
    "explanation": "Photosynthesis produces glucose (food) and oxygen, using energy from sunlight."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "Photosynthesis takes place mainly in which part of the plant?",
    "image": "images/science/diagrams/q.png",
    "options": ["The root", "The leaf", "The stem", "The flower"],
    "correct": 1,
    "explanation": "The leaf contains most chloroplasts and is the main site of photosynthesis."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The loss of water vapour from the leaves of plants is called",
    "image": "images/science/diagrams/q.png",
    "options": ["osmosis", "transpiration", "respiration", "evaporation"],
    "correct": 1,
    "explanation": "Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata."
  },
  {
    "topic": "Flowering Plants: External and Internal Structure",
    "question": "Water is absorbed from the soil by the plant mainly through the",
    "image": "images/science/diagrams/q.png",
    "options": ["leaf", "root hairs", "stem", "flower"],
    "correct": 1,
    "explanation": "Root hairs increase the surface area for absorbing water and mineral salts from the soil."
  },
  {
    "topic": "Flowering Plants: External and Internal Structure",
    "question": "The tiny pores on leaves that allow gases and water vapour to pass in and out are called",
    "image": "images/science/diagrams/q.png",
    "options": ["veins", "stomata", "chloroplasts", "cuticles"],
    "correct": 1,
    "explanation": "Stomata are small openings, usually on the lower surface of leaves, used for gas exchange and transpiration."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "Which gas is released by plants during photosynthesis?",
    "image": "images/science/diagrams/q.png",
    "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "correct": 1,
    "explanation": "Oxygen is given out as a by-product of photosynthesis."
  },
  {
    "topic": "Flowering Plants: External and Internal Structure",
    "question": "The function of a leaf's veins is to",
    "image": "images/science/diagrams/q.png",
    "options": ["support and transport substances", "absorb sunlight", "store food only", "release oxygen only"],
    "correct": 0,
    "explanation": "Veins (vascular bundles) transport water, mineral salts and food, and give the leaf support."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "Plants need sunlight mainly for",
    "image": "images/science/diagrams/q.png",
    "options": ["respiration", "transpiration", "photosynthesis", "absorption of water"],
    "correct": 2,
    "explanation": "Sunlight provides the energy for photosynthesis."
  },
  {
    "topic": "Main Classes, Sources and Functions of Food",
    "question": "The nutrient that provides the body with the most energy is",
    "image": "images/science/diagrams/q.png",
    "options": ["carbohydrate", "protein", "vitamin", "mineral salt"],
    "correct": 0,
    "explanation": "Carbohydrates are the body's main source of energy."
  },
  {
    "topic": "Main Classes, Sources and Functions of Food",
    "question": "Which nutrient is most important for the growth and repair of body tissues?",
    "image": "images/science/diagrams/q.png",
    "options": ["Carbohydrate", "Fat", "Protein", "Vitamin C"],
    "correct": 2,
    "explanation": "Proteins are body-building foods needed for growth and repair."
  },
  {
    "topic": "Other Classes of Food Substances",
    "question": "The lack of Vitamin C in the diet causes",
    "image": "images/science/diagrams/q.png",
    "options": ["rickets", "scurvy", "anaemia", "goitre"],
    "correct": 1,
    "explanation": "Deficiency of Vitamin C causes scurvy."
  },
  {
    "topic": "Other Classes of Food Substances",
    "question": "Which mineral is needed to make strong bones and teeth?",
    "image": "images/science/diagrams/q.png",
    "options": ["Iron", "Calcium", "Iodine", "Sodium"],
    "correct": 1,
    "explanation": "Calcium is needed for strong bones and teeth."
  },
  {
    "topic": "Deficiency Diseases",
    "question": "Deficiency of iron in the diet causes",
    "image": "images/science/diagrams/q.png",
    "options": ["goitre", "anaemia", "rickets", "beriberi"],
    "correct": 1,
    "explanation": "Lack of iron leads to anaemia because iron is needed to make hemoglobin in red blood cells."
  },
  {
    "topic": "Deficiency Diseases",
    "question": "The disease caused by a deficiency of iodine is",
    "image": "images/science/diagrams/q.png",
    "options": ["goitre", "anaemia", "scurvy", "rickets"],
    "correct": 0,
    "explanation": "Iodine deficiency causes goitre, an enlargement of the thyroid gland."
  },
  {
    "topic": "Other Classes of Food Substances",
    "question": "Vitamin D is needed mainly for",
    "image": "images/science/diagrams/q.png",
    "options": ["good eyesight", "formation of strong bones", "clotting of blood", "healthy skin"],
    "correct": 1,
    "explanation": "Vitamin D helps the body absorb calcium for strong bones; deficiency causes rickets."
  },
  {
    "topic": "The Human Digestive System",
    "question": "The chemical process by which food is broken down into simple soluble substances in the body is called",
    "image": "images/science/diagrams/q.png",
    "options": ["ingestion", "digestion", "absorption", "assimilation"],
    "correct": 1,
    "explanation": "Digestion is the breakdown of complex food into simple, soluble and absorbable forms."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Digestion of starch to sugar begins in the",
    "image": "images/science/diagrams/q.png",
    "options": ["stomach", "mouth", "small intestine", "large intestine"],
    "correct": 1,
    "explanation": "Saliva in the mouth contains amylase (ptyalin) which begins the digestion of starch to sugar."
  },
  {
    "topic": "The Endocrine System",
    "question": "Which organ produces insulin in the human body?",
    "image": "images/science/diagrams/q.png",
    "options": ["Liver", "Kidney", "Pancreas", "Stomach"],
    "correct": 2,
    "explanation": "The pancreas produces insulin which regulates blood sugar level."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Bile, which helps to digest fats, is produced by the",
    "image": "images/science/diagrams/q.png",
    "options": ["pancreas", "liver", "gall bladder", "stomach"],
    "correct": 1,
    "explanation": "Bile is produced by the liver (stored in the gall bladder) and helps digest fats."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Where does most of the absorption of digested food take place?",
    "image": "images/science/diagrams/q.png",
    "options": ["Stomach", "Large intestine", "Small intestine", "Mouth"],
    "correct": 2,
    "explanation": "The small intestine, with its villi, is where most digested food is absorbed into the blood."
  },
  {
    "topic": "Diet and Balanced Diet",
    "question": "A balanced diet is one that",
    "image": "images/science/diagrams/q.png",
    "options": ["contains only carbohydrates", "contains all the essential nutrients in the right proportions", "is rich only in proteins", "contains plenty of fat"],
    "correct": 1,
    "explanation": "A balanced diet provides all nutrients in the right proportions for good health."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "The organ that pumps blood around the body is the",
    "image": "images/science/diagrams/q.png",
    "options": ["liver", "heart", "lung", "kidney"],
    "correct": 1,
    "explanation": "The heart pumps blood through the blood vessels to all parts of the body."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "The red pigment in blood that carries oxygen is called",
    "image": "images/science/diagrams/q.png",
    "options": ["chlorophyll", "hemoglobin", "melanin", "plasma"],
    "correct": 1,
    "explanation": "Hemoglobin in red blood cells combines with oxygen to transport it around the body."
  },
  {
    "topic": "Specialised Plant and Animal Cells",
    "question": "Which substance in the red blood cells carries oxygen?",
    "image": "images/science/diagrams/q.png",
    "options": ["Plasma", "White blood cell", "Hemoglobin", "Platelet"],
    "correct": 2,
    "explanation": "Hemoglobin is the oxygen-carrying pigment in red blood cells."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "The process of breathing in is called",
    "image": "images/science/diagrams/q.png",
    "options": ["exhalation", "inhalation", "respiration", "expiration"],
    "correct": 1,
    "explanation": "Inhalation is the breathing in of air; exhalation is breathing out."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "The exchange of gases in humans takes place mainly in the",
    "image": "images/science/diagrams/q.png",
    "options": ["trachea", "bronchi", "alveoli", "diaphragm"],
    "correct": 2,
    "explanation": "Alveoli are tiny air sacs in the lungs where oxygen enters the blood and carbon dioxide leaves it."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Which gas is taken in during breathing and used by the body?",
    "image": "images/science/diagrams/q.png",
    "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "correct": 1,
    "explanation": "Oxygen is inhaled and used for respiration to release energy."
  },
  {
    "topic": "The Excretory System",
    "question": "The organ responsible for filtering waste (urea) from the blood to form urine is the",
    "image": "images/science/diagrams/q.png",
    "options": ["liver", "kidney", "bladder", "pancreas"],
    "correct": 1,
    "explanation": "The kidneys filter waste from the blood to produce urine."
  },
  {
    "topic": "The Excretory System",
    "question": "The functional unit of the kidney is the",
    "image": "images/science/diagrams/q.png",
    "options": ["neuron", "nephron", "alveolus", "axon"],
    "correct": 1,
    "explanation": "The nephron is the tiny filtering unit of the kidney."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Which of the following is a gaseous waste product of respiration excreted by mammals?",
    "image": "images/science/diagrams/q.png",
    "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "correct": 1,
    "explanation": "Carbon dioxide is a waste product of respiration, removed by the lungs."
  },
  {
    "topic": "Human Body Systems",
    "question": "The basic unit of the nervous system is the",
    "image": "images/science/diagrams/q.png",
    "options": ["nephron", "neuron", "alveolus", "axon"],
    "correct": 1,
    "explanation": "The neuron is the basic structural and functional unit of the nervous system."
  },
  {
    "topic": "Human Body Systems",
    "question": "The part of the brain that controls balance and coordination is the",
    "image": "images/science/diagrams/q.png",
    "options": ["cerebrum", "cerebellum", "medulla", "spinal cord"],
    "correct": 1,
    "explanation": "The cerebellum controls balance and coordination of muscle movements."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The spinal cord is protected by the",
    "image": "images/science/diagrams/q.png",
    "options": ["skull", "vertebral column", "ribs", "pelvic girdle"],
    "correct": 1,
    "explanation": "The vertebral column (backbone) protects the spinal cord."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Which part of the eye controls the amount of light entering it?",
    "image": "images/science/diagrams/q.png",
    "options": ["Retina", "Iris", "Cornea", "Lens"],
    "correct": 1,
    "explanation": "The iris contains the pupil and controls how much light enters the eye."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The part of the ear that receives sound vibrations and changes them into nerve impulses is the",
    "image": "images/science/diagrams/q.png",
    "options": ["eardrum", "cochlea", "pinna", "ear canal"],
    "correct": 1,
    "explanation": "The cochlea in the inner ear converts sound vibrations into nerve impulses."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The organ system that is responsible for movement of the body's bones is the",
    "image": "images/science/diagrams/q.png",
    "options": ["nervous system", "muscular system", "digestive system", "excretory system"],
    "correct": 1,
    "explanation": "Muscles pull on bones to produce movement; together they form the musculoskeletal system."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The bone that protects the brain is the",
    "image": "images/science/diagrams/q.png",
    "options": ["rib", "skull", "pelvis", "backbone"],
    "correct": 1,
    "explanation": "The skull protects the brain from injury."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Which system transports blood, nutrients and oxygen around the body?",
    "image": "images/science/diagrams/q.png",
    "options": ["The skeletal system", "The circulatory system", "The respiratory system", "The digestive system"],
    "correct": 1,
    "explanation": "The circulatory system (heart and blood vessels) transports materials around the body."
  },
  {
    "topic": "The Endocrine System",
    "question": "Hormones, which control body functions, are produced by the",
    "image": "images/science/diagrams/q.png",
    "options": ["endocrine glands", "sweat glands", "skin", "kidneys"],
    "correct": 0,
    "explanation": "Endocrine glands secrete hormones that regulate body processes."
  },
  {
    "topic": "Water: Properties, Sources and Uses",
    "question": "The purest form of water is",
    "image": "images/science/diagrams/q.png",
    "options": ["rain water", "sea water", "distilled water", "river water"],
    "correct": 2,
    "explanation": "Distilled water contains no dissolved salts, making it the purest form."
  },
  {
    "topic": "Hard and Soft Water",
    "question": "Water is said to be hard when it",
    "image": "images/science/diagrams/q.png",
    "options": ["forms little lather with soap", "forms much lather with soap", "has a bad smell", "is colourless"],
    "correct": 0,
    "explanation": "Hard water contains dissolved calcium and magnesium salts, so it forms little lather with soap."
  },
  {
    "topic": "Changes in the States of Matter",
    "question": "The process of turning vapour into liquid by cooling is called",
    "image": "images/science/diagrams/q.png",
    "options": ["evaporation", "condensation", "sublimation", "boiling"],
    "correct": 1,
    "explanation": "Condensation is the change of gas (vapour) into liquid when cooled."
  },
  {
    "topic": "General Properties and Composition of Air",
    "question": "Which of the following gases makes up the largest part of the air?",
    "image": "images/science/diagrams/q.png",
    "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    "correct": 2,
    "explanation": "Nitrogen makes up about 78% of the air."
  },
  {
    "topic": "General Properties and Composition of Air",
    "question": "The gas in the air that supports burning is",
    "image": "images/science/diagrams/q.png",
    "options": ["nitrogen", "oxygen", "carbon dioxide", "hydrogen"],
    "correct": 1,
    "explanation": "Oxygen supports burning (combustion)."
  },
  {
    "topic": "General Properties and Composition of Air",
    "question": "A burning candle is covered with a glass jar; the flame goes out because",
    "image": "images/science/diagrams/q.png",
    "options": ["all the nitrogen is used up", "all the oxygen is used up", "carbon dioxide is formed", "the air becomes too cold"],
    "correct": 1,
    "explanation": "The candle uses up the oxygen in the jar, so the flame goes out."
  },
  {
    "topic": "Abiotic (Ecological) Factors",
    "question": "The soil that is best for planting most crops is",
    "image": "images/science/diagrams/q.png",
    "options": ["sandy soil", "loamy soil", "clay soil", "gravel"],
    "correct": 1,
    "explanation": "Loamy soil balances water retention and drainage, making it best for most crops."
  },
  {
    "topic": "Abiotic (Ecological) Factors",
    "question": "Which type of soil has the largest particle size?",
    "image": "images/science/diagrams/q.png",
    "options": ["Clay", "Silt", "Sand", "Loam"],
    "correct": 2,
    "explanation": "Sand has the largest particles, so it drains water fastest."
  },
  {
    "topic": "Abiotic (Ecological) Factors",
    "question": "The remains of dead plants and animals that make soil fertile are called",
    "image": "images/science/diagrams/q.png",
    "options": ["sand", "humus", "clay", "gravel"],
    "correct": 1,
    "explanation": "Humus is the decayed organic matter that adds nutrients to the soil."
  },
  {
    "topic": "Environmental Protection and Management",
    "question": "World Environment Day is celebrated to",
    "image": "images/science/diagrams/q.png",
    "options": ["promote protection of the environment", "celebrate farmers", "promote trade", "honour scientists"],
    "correct": 0,
    "explanation": "World Environment Day is an annual event to encourage protection of the environment."
  },
  {
    "topic": "Work and Power",
    "question": "The ability to do work is called",
    "image": "images/science/diagrams/q.png",
    "options": ["force", "energy", "power", "motion"],
    "correct": 1,
    "explanation": "Energy is the ability to do work."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "Energy possessed by a body due to its motion is called",
    "image": "images/science/diagrams/q.png",
    "options": ["potential energy", "kinetic energy", "heat energy", "chemical energy"],
    "correct": 1,
    "explanation": "Kinetic energy is the energy a body has because of its motion."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "Energy stored in a raised object is called",
    "image": "images/science/diagrams/q.png",
    "options": ["kinetic energy", "potential energy", "sound energy", "light energy"],
    "correct": 1,
    "explanation": "Potential energy is stored energy due to position, like a raised object."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "The energy stored in food and fuels is called",
    "image": "images/science/diagrams/q.png",
    "options": ["kinetic energy", "chemical energy", "electrical energy", "potential energy"],
    "correct": 1,
    "explanation": "Chemical energy is stored in the bonds of food and fuels."
  },
  {
    "topic": "Light Energy",
    "question": "Light travels in",
    "image": "images/science/diagrams/q.png",
    "options": ["curved lines", "straight lines", "circles", "waves only in water"],
    "correct": 1,
    "explanation": "Light travels in straight lines (rectilinear propagation)."
  },
  {
    "topic": "Light Energy",
    "question": "Which of the following is NOT a source of light?",
    "image": "images/science/diagrams/q.png",
    "options": ["The sun", "A candle", "The moon", "Electric lamp"],
    "correct": 2,
    "explanation": "The moon is not a source of light; it reflects light from the sun."
  },
  {
    "topic": "Light Energy",
    "question": "The image formed by a plane mirror is",
    "image": "images/science/diagrams/q.png",
    "options": ["real and inverted", "virtual and erect", "real and erect", "virtual and inverted"],
    "correct": 1,
    "explanation": "A plane mirror forms a virtual, erect image of the same size as the object."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound travels fastest through",
    "image": "images/science/diagrams/q.png",
    "options": ["air", "water", "steel", "a vacuum"],
    "correct": 2,
    "explanation": "Sound travels fastest in solids (steel), slower in liquids, and cannot pass through a vacuum."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound cannot travel through",
    "image": "images/science/diagrams/q.png",
    "options": ["air", "water", "a vacuum", "wood"],
    "correct": 2,
    "explanation": "Sound needs a medium to travel; it cannot travel through a vacuum."
  },
  {
    "topic": "Light Energy",
    "question": "The bouncing back of light from a surface is called",
    "image": "images/science/diagrams/q.png",
    "options": ["refraction", "reflection", "diffraction", "absorption"],
    "correct": 1,
    "explanation": "Reflection is the bouncing back of light when it hits a surface."
  },
  {
    "topic": "Light Energy",
    "question": "The bending of light as it passes from one medium to another is called",
    "image": "images/science/diagrams/q.png",
    "options": ["reflection", "refraction", "dispersion", "scattering"],
    "correct": 1,
    "explanation": "Refraction is the bending of light as it enters a different medium."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "Heat energy is measured in",
    "image": "images/science/diagrams/q.png",
    "options": ["joules", "newtons", "amperes", "volts"],
    "correct": 0,
    "explanation": "Heat energy is measured in joules (J)."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "The transfer of heat by the movement of heated fluid particles is called",
    "image": "images/science/diagrams/q.png",
    "options": ["conduction", "convection", "radiation", "insulation"],
    "correct": 1,
    "explanation": "Convection is the transfer of heat through the movement of fluids (liquids and gases)."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "Heat travels through a solid metal rod mainly by",
    "image": "images/science/diagrams/q.png",
    "options": ["convection", "conduction", "radiation", "reflection"],
    "correct": 1,
    "explanation": "Conduction is the transfer of heat through a solid by particle vibration."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "Heat from the sun reaches the earth by",
    "image": "images/science/diagrams/q.png",
    "options": ["conduction", "convection", "radiation", "reflection"],
    "correct": 2,
    "explanation": "Radiation transfers heat through space without a medium, which is how the sun's heat reaches us."
  },
  {
    "topic": "Changes in the States of Matter",
    "question": "The temperature at which a solid changes into a liquid is its",
    "image": "images/science/diagrams/q.png",
    "options": ["boiling point", "melting point", "freezing point", "sublimation point"],
    "correct": 1,
    "explanation": "The melting point is the temperature at which a solid changes to a liquid."
  },
  {
    "topic": "Forces: Definition, Effects and Measurement",
    "question": "Force is measured in",
    "image": "images/science/diagrams/q.png",
    "options": ["joules", "newtons", "watts", "kilograms"],
    "correct": 1,
    "explanation": "Force is measured in newtons (N)."
  },
  {
    "topic": "Types of Forces",
    "question": "The force that pulls objects towards the centre of the earth is",
    "image": "images/science/diagrams/q.png",
    "options": ["magnetic force", "gravity", "friction", "tension"],
    "correct": 1,
    "explanation": "Gravity is the force that pulls all objects towards the centre of the earth."
  },
  {
    "topic": "Types of Forces",
    "question": "The force that opposes motion between two surfaces in contact is called",
    "image": "images/science/diagrams/q.png",
    "options": ["gravity", "friction", "magnetism", "tension"],
    "correct": 1,
    "explanation": "Friction is the force that resists the motion of one surface over another."
  },
  {
    "topic": "Types of Forces",
    "question": "Which force is useful for stopping a moving vehicle?",
    "image": "images/science/diagrams/q.png",
    "options": ["Gravity", "Friction", "Magnetism", "Uplift"],
    "correct": 1,
    "explanation": "Friction between the tyres and the road helps a vehicle to stop."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A simple machine that is used for lifting loads and has a wheel with a grooved rim is the",
    "image": "images/science/diagrams/q.png",
    "options": ["lever", "pulley", "screw", "wedge"],
    "correct": 1,
    "explanation": "A pulley is a wheel with a grooved rim used with a rope to lift loads."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "A first-class lever has the fulcrum",
    "image": "images/science/diagrams/q.png",
    "options": ["at one end", "in the middle between the load and effort", "at the load end", "at the effort end"],
    "correct": 1,
    "explanation": "In a first-class lever, the fulcrum is between the load and the effort, like a seesaw."
  },
  {
    "topic": "Efficiency of Machines and Velocity Ratio",
    "question": "The ratio of the load to the effort in a machine is called",
    "image": "images/science/diagrams/q.png",
    "options": ["work", "efficiency", "mechanical advantage", "power"],
    "correct": 2,
    "explanation": "Mechanical advantage = load ÷ effort."
  },
  {
    "topic": "Other Types of Machines",
    "question": "An inclined plane is an example of a simple machine used to",
    "image": "images/science/diagrams/q.png",
    "options": ["increase speed", "easily move heavy loads up a slope", "create heat", "change direction of light"],
    "correct": 1,
    "explanation": "An inclined plane makes it easier to move heavy loads to a higher level."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "Which of the following is a lever?",
    "image": "images/science/diagrams/q.png",
    "options": ["A nutcracker", "A pulley", "A wheel and axle", "A screw"],
    "correct": 0,
    "explanation": "A nutcracker is a lever; the others are different simple machines."
  },
  {
    "topic": "Contact and Non-Contact Forces",
    "question": "Which material is attracted by a magnet?",
    "image": "images/science/diagrams/q.png",
    "options": ["Copper", "Iron", "Aluminium", "Wood"],
    "correct": 1,
    "explanation": "Iron (and steel) is a magnetic material attracted by a magnet."
  },
  {
    "topic": "Contact and Non-Contact Forces",
    "question": "The two ends of a magnet, where the magnetic force is strongest, are called",
    "image": "images/science/diagrams/q.png",
    "options": ["poles", "nodes", "terminals", "loops"],
    "correct": 0,
    "explanation": "A magnet has a north pole and a south pole where its force is strongest."
  },
  {
    "topic": "Contact and Non-Contact Forces",
    "question": "When two like poles of magnets are brought together, they",
    "image": "images/science/diagrams/q.png",
    "options": ["attract each other", "repel each other", "do nothing", "produce electricity"],
    "correct": 1,
    "explanation": "Like poles (N-N or S-S) repel each other; unlike poles attract."
  },
  {
    "topic": "Electrical Energy",
    "question": "The unit of electric current is the",
    "image": "images/science/diagrams/q.png",
    "options": ["volt", "ampere", "ohm", "watt"],
    "correct": 1,
    "explanation": "Electric current is measured in amperes (amps)."
  },
  {
    "topic": "Electrical Energy",
    "question": "The unit of electrical potential difference (voltage) is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ampere", "volt", "ohm", "joule"],
    "correct": 1,
    "explanation": "Voltage is measured in volts."
  },
  {
    "topic": "Electrical Energy",
    "question": "A material that allows electric current to pass through easily is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["conductor", "insulator", "resistor", "generator"],
    "correct": 0,
    "explanation": "Conductors, like copper, allow electric current to pass through easily."
  },
  {
    "topic": "Electrical Energy",
    "question": "Which of the following is a good conductor of electricity?",
    "image": "images/science/diagrams/q.png",
    "options": ["Rubber", "Copper", "Glass", "Plastic"],
    "correct": 1,
    "explanation": "Copper is a metal and a good conductor of electricity."
  },
  {
    "topic": "Electrical Energy",
    "question": "An instrument used to measure electric current is the",
    "image": "images/science/diagrams/q.png",
    "options": ["thermometer", "ammeter", "barometer", "hydrometer"],
    "correct": 1,
    "explanation": "An ammeter measures electric current in amperes."
  },
  {
    "topic": "Electrical Energy",
    "question": "The instrument used to measure electrical resistance is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ammeter", "ohmmeter", "voltmeter", "galvanometer"],
    "correct": 1,
    "explanation": "An ohmmeter measures resistance in ohms."
  },
  {
    "topic": "Electrical Energy",
    "question": "In a series circuit, if one bulb blows, the other bulbs will",
    "image": "images/science/diagrams/q.png",
    "options": ["still be on", "also go off", "become brighter", "remain unchanged"],
    "correct": 1,
    "explanation": "In a series circuit, the current path is broken when one bulb blows, so all bulbs go off."
  },
  {
    "topic": "Particle Nature of Matter",
    "question": "Matter is anything that has",
    "image": "images/science/diagrams/q.png",
    "options": ["colour and taste", "mass and takes up space", "shape and smell", "weight only"],
    "correct": 1,
    "explanation": "Matter is anything that has mass and occupies space (volume)."
  },
  {
    "topic": "Evaporation and Boiling",
    "question": "The change of a liquid to a gas at its surface is called",
    "image": "images/science/diagrams/q.png",
    "options": ["condensation", "evaporation", "melting", "freezing"],
    "correct": 1,
    "explanation": "Evaporation is the change of liquid to gas at the surface below boiling point."
  },
  {
    "topic": "Changes in the States of Matter",
    "question": "The process by which a solid changes directly into a gas is called",
    "image": "images/science/diagrams/q.png",
    "options": ["melting", "sublimation", "condensation", "evaporation"],
    "correct": 1,
    "explanation": "Sublimation is the direct change of a solid to a gas, like iodine or dry ice."
  },
  {
    "topic": "Acids: Types and Properties",
    "question": "A liquid that turns blue litmus paper red is",
    "image": "images/science/diagrams/q.png",
    "options": ["an acid", "a base", "a neutral liquid", "a salt"],
    "correct": 0,
    "explanation": "Acids turn blue litmus paper red."
  },
  {
    "topic": "Bases, Oxides and Neutralisation",
    "question": "A substance that turns red litmus paper blue is",
    "image": "images/science/diagrams/q.png",
    "options": ["an acid", "a base (alkali)", "a neutral substance", "pure water"],
    "correct": 1,
    "explanation": "Bases (alkalis) turn red litmus paper blue."
  },
  {
    "topic": "Bases, Oxides and Neutralisation",
    "question": "The reaction between an acid and a base to form salt and water is called",
    "image": "images/science/diagrams/q.png",
    "options": ["oxidation", "neutralisation", "reduction", "combustion"],
    "correct": 1,
    "explanation": "Neutralisation is the reaction between an acid and a base to form a salt and water."
  },
  {
    "topic": "The pH Scale and Universal Indicator",
    "question": "The pH value of a neutral solution such as pure water is",
    "image": "images/science/diagrams/q.png",
    "options": ["0", "7", "14", "1"],
    "correct": 1,
    "explanation": "A neutral solution has a pH of 7."
  },
  {
    "topic": "Acids: Types and Properties",
    "question": "Which of the following is an example of an acid?",
    "image": "images/science/diagrams/q.png",
    "options": ["Lemon juice", "Soap", "Baking soda", "Ash"],
    "correct": 0,
    "explanation": "Lemon juice contains citric acid and is acidic."
  },
  {
    "topic": "Bases, Oxides and Neutralisation",
    "question": "Which of the following is an example of a base commonly used to treat acidity of the stomach?",
    "image": "images/science/diagrams/q.png",
    "options": ["Lemon juice", "Vinegar", "Milk of magnesia", "Lime water"],
    "correct": 2,
    "explanation": "Milk of magnesia is a mild base used as an antacid."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "The addition of harmful substances to the environment is called",
    "image": "images/science/diagrams/q.png",
    "options": ["pollution", "contamination only", "erosion", "decomposition"],
    "correct": 0,
    "explanation": "Pollution is the introduction of harmful substances into the environment."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "The gas produced by burning fuels that causes acid rain is",
    "image": "images/science/diagrams/q.png",
    "options": ["oxygen", "sulphur dioxide", "nitrogen", "hydrogen"],
    "correct": 1,
    "explanation": "Sulphur dioxide from burning fuels forms acid rain when it dissolves in rainwater."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Which of the following is a disease spread by mosquitoes?",
    "image": "images/science/diagrams/q.png",
    "options": ["Cholera", "Malaria", "Tuberculosis", "Typhoid"],
    "correct": 1,
    "explanation": "Malaria is transmitted by the female Anopheles mosquito."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "A disease caused by drinking unclean water is",
    "image": "images/science/diagrams/q.png",
    "options": ["malaria", "cholera", "measles", "asthma"],
    "correct": 1,
    "explanation": "Cholera is a water-borne disease spread by drinking contaminated water."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "The harmful effect of smoking is that it",
    "image": "images/science/diagrams/q.png",
    "options": ["damages the lungs", "improves eyesight", "aids digestion", "strengthens bones"],
    "correct": 0,
    "explanation": "Smoking damages the lungs and causes diseases like lung cancer and bronchitis."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Which of the following is a communicable disease?",
    "image": "images/science/diagrams/q.png",
    "options": ["High blood pressure", "Measles", "Diabetes", "Sickle-cell anaemia"],
    "correct": 1,
    "explanation": "Measles is infectious and spreads from person to person."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "The standing water in the environment should be drained because it",
    "image": "images/science/diagrams/q.png",
    "options": ["provides breeding grounds for mosquitoes", "makes the soil fertile", "cools the air", "supports fishing"],
    "correct": 0,
    "explanation": "Stagnant water provides breeding grounds for mosquitoes, spreading malaria."
  },
  {
    "topic": "Conservation of Natural Resources",
    "question": "Bush burning is harmful because it",
    "image": "images/science/diagrams/q.png",
    "options": ["destroys soil fertility and living organisms", "increases rainfall", "creates more farmland", "kills only harmful insects"],
    "correct": 0,
    "explanation": "Bush burning destroys soil fertility, organic matter and living organisms."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "Reproduction in living things is important because it",
    "image": "images/science/diagrams/q.png",
    "options": ["ensures the continuation of the species", "increases body weight", "helps them move", "helps them breathe"],
    "correct": 0,
    "explanation": "Reproduction ensures the survival and continuation of a species."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "The part of a flower that produces pollen is the",
    "image": "images/science/diagrams/q.png",
    "options": ["stigma", "anther", "ovary", "petal"],
    "correct": 1,
    "explanation": "The anther, part of the stamen, produces and releases pollen."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "The transfer of pollen from the anther to the stigma is called",
    "image": "images/science/diagrams/q.png",
    "options": ["fertilisation", "pollination", "germination", "transpiration"],
    "correct": 1,
    "explanation": "Pollination is the transfer of pollen grains to the stigma."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "In humans, fertilisation takes place in the",
    "image": "images/science/diagrams/q.png",
    "options": ["uterus", "ovary", "fallopian tube", "vagina"],
    "correct": 2,
    "explanation": "Fertilisation of the egg by the sperm occurs in the fallopian tube."
  },
  {
    "topic": "Pollination and Germination",
    "question": "The process by which a seed develops into a new plant is called",
    "image": "images/science/diagrams/q.png",
    "options": ["germination", "pollination", "fertilisation", "photosynthesis"],
    "correct": 0,
    "explanation": "Germination is the growth of a seed into a seedling."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "Adaptation in living things means",
    "image": "images/science/diagrams/q.png",
    "options": ["the ability to survive in a particular environment", "the ability to reproduce quickly", "having sharp teeth", "growing very large"],
    "correct": 0,
    "explanation": "Adaptation is the way an organism becomes suited to survive in its environment."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "Which of the following is an adaptation of a desert plant like the cactus?",
    "image": "images/science/diagrams/q.png",
    "options": ["Broad flat leaves", "Fleshy stem storing water and reduced leaves", "Long deep flowers", "Bright red fruits"],
    "correct": 1,
    "explanation": "The cactus stores water in its fleshy stem and has spines (reduced leaves) to reduce water loss."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "A fish is adapted to live in water because it",
    "image": "images/science/diagrams/q.png",
    "options": ["has lungs and legs", "has gills and fins", "has feathers and wings", "breathes with nostrils"],
    "correct": 1,
    "explanation": "Gills for breathing and fins for swimming adapt fish to water."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "Which body part mainly helps a bird to fly?",
    "image": "images/science/diagrams/q.png",
    "options": ["Its beak", "Its wings", "Its claws", "Its tail"],
    "correct": 1,
    "explanation": "Wings generate lift and thrust that enable a bird to fly."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "The sense organ for seeing is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ear", "eye", "nose", "tongue"],
    "correct": 1,
    "explanation": "The eye is the sense organ for sight (seeing)."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "The sense organ used to detect smell is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ear", "nose", "tongue", "skin"],
    "correct": 1,
    "explanation": "The nose detects smell (olfaction)."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Taste is detected by",
    "image": "images/science/diagrams/q.png",
    "options": ["small bumps on the tongue called taste buds", "the ear drum", "the eyes", "the nose hairs"],
    "correct": 0,
    "explanation": "Taste buds on the tongue detect sweet, sour, salty and bitter tastes."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Washing hands before eating helps to",
    "image": "images/science/diagrams/q.png",
    "options": ["remove germs and prevent diseases", "make food tastier", "cool the body", "improve eyesight"],
    "correct": 0,
    "explanation": "Washing hands removes germs and prevents the spread of diseases."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Which of the following is a good personal hygiene habit?",
    "image": "images/science/diagrams/q.png",
    "options": ["Bathing daily and brushing the teeth", "Wearing the same clothes all week", "Not washing hands after the toilet", "Sharing a toothbrush"],
    "correct": 0,
    "explanation": "Bathing daily and brushing the teeth are important personal hygiene habits."
  },
  {
    "topic": "Exercise, Rest and Recreation",
    "question": "The effect of alcohol on the body includes",
    "image": "images/science/diagrams/q.png",
    "options": ["damage to the liver", "improved memory", "stronger bones", "clearer skin"],
    "correct": 0,
    "explanation": "Excessive alcohol damages the liver and other body organs."
  },
  {
    "topic": "Diet and Balanced Diet",
    "question": "A balanced diet, exercise and rest are important for",
    "image": "images/science/diagrams/q.png",
    "options": ["good health", "causing disease", "sleeping less", "losing weight quickly"],
    "correct": 0,
    "explanation": "Good nutrition, exercise and rest maintain health and prevent disease."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "The first aid treatment for a minor burn is to",
    "image": "images/science/diagrams/q.png",
    "options": ["apply oil immediately", "cool the area with running cold water", "cover with a tight bandage", "burst any blister"],
    "correct": 1,
    "explanation": "Cooling a burn with running cold water reduces pain and damage."
  },
  {
    "topic": "Living and Non-Living Things",
    "question": "Which of the following best shows that a seed is alive?",
    "image": "images/science/diagrams/q.png",
    "options": ["It germinates under the right conditions", "It is brown in colour", "It is stored in a dry place", "It has a hard coat"],
    "correct": 0,
    "explanation": "A seed is alive because it can germinate, i.e. grow and develop into a plant."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "The part of the skin that helps to cool the body through the release of water and salts is the",
    "image": "images/science/diagrams/q.png",
    "options": ["sweat pore", "hair root", "nerve ending", "blood vessel"],
    "correct": 0,
    "explanation": "Sweat pores release sweat which evaporates and cools the body."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "Which of the following is a life process carried out by plants?",
    "image": "images/science/diagrams/q.png",
    "options": ["Photosynthesis", "Combustion", "Magnetisation", "Rusting"],
    "correct": 0,
    "explanation": "Photosynthesis is a life process of green plants, while combustion, magnetisation and rusting are not life processes."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "The process by which living things produce new individuals of their own kind is called",
    "image": "images/science/diagrams/q.png",
    "options": ["reproduction", "growth", "excretion", "adaptation"],
    "correct": 0,
    "explanation": "Reproduction is the production of new individuals of the same species."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "Which of the following organisms shows movement even as an adult?",
    "image": "images/science/diagrams/q.png",
    "options": ["A mango tree", "A fish", "A mushroom", "An oak tree"],
    "correct": 1,
    "explanation": "A fish moves freely and actively as an adult; plants and fungi are mostly fixed."
  },
  {
    "topic": "Characteristics of Living Things",
    "question": "A potted plant placed near a window grows towards the light. This shows that living things",
    "image": "images/science/diagrams/q.png",
    "options": ["respond to stimuli", "excrete waste", "reproduce", "grow only at night"],
    "correct": 0,
    "explanation": "Growing towards light (phototropism) shows sensitivity or response to a stimulus."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The structure that surrounds and protects a plant cell, giving it a definite shape, is the",
    "image": "images/science/diagrams/q.png",
    "options": ["cell membrane", "cell wall", "nucleus", "cytoplasm"],
    "correct": 1,
    "explanation": "The rigid cell wall of cellulose gives the plant cell its shape and protection."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Which organelle is responsible for controlling cell activities?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mitochondrion", "Nucleus", "Ribosome", "Vacuole"],
    "correct": 1,
    "explanation": "The nucleus controls all cell activities and contains the hereditary material."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "A typical animal cell contains all of the following EXCEPT",
    "image": "images/science/diagrams/q.png",
    "options": ["cell membrane", "nucleus", "cell wall", "cytoplasm"],
    "correct": 2,
    "explanation": "Animal cells have a cell membrane but not the rigid cellulose cell wall found in plant cells."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The part of the cell where proteins are made is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ribosome", "lysosome", "vacuole", "chloroplast"],
    "correct": 0,
    "explanation": "Ribosomes are the tiny structures where proteins are synthesised."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Osmosis plays an important role in plants by helping them to",
    "image": "images/science/diagrams/q.png",
    "options": ["absorb water through root hairs", "make food in the leaves", "produce flowers", "destroy pests"],
    "correct": 0,
    "explanation": "Water enters root hairs by osmosis, moving from the dilute soil water into the root cells."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The respiratory organelle known as the powerhouse of the cell is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ribosome", "mitochondrion", "nucleus", "chloroplast"],
    "correct": 1,
    "explanation": "The mitochondrion is called the powerhouse of the cell because it releases energy during respiration."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following animals has a backbone?",
    "image": "images/science/diagrams/q.png",
    "options": ["A crab", "A toad", "A snail", "A spider"],
    "correct": 1,
    "explanation": "A toad is a vertebrate with a backbone; crabs, snails and spiders are invertebrates."
  },
  {
    "topic": "Classification of Living Things",
    "question": "An animal that eats both plants and animal flesh is called a/an",
    "image": "images/science/diagrams/q.png",
    "options": ["herbivore", "omnivore", "carnivore", "scavenger"],
    "correct": 1,
    "explanation": "An omnivore, such as a human or a rat, feeds on both plants and animals."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following is an invertebrate?",
    "image": "images/science/diagrams/q.png",
    "options": ["A snake", "A bird", "An earthworm", "A fish"],
    "correct": 2,
    "explanation": "An earthworm has no backbone, so it is an invertebrate."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Amphibians are animals that",
    "image": "images/science/diagrams/q.png",
    "options": ["live only in water", "live both in water and on land", "have feathers", "are covered with scales and lay eggs on land"],
    "correct": 1,
    "explanation": "Amphibians, like frogs and toads, can live both in water and on land."
  },
  {
    "topic": "Classification of Living Things",
    "question": "Which of the following plants has two seed leaves (is a dicot)?",
    "image": "images/science/diagrams/q.png",
    "options": ["Maize", "Rice", "Bean", "Grass"],
    "correct": 2,
    "explanation": "A bean plant is a dicot with two seed leaves; maize, rice and grass are monocots."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The gas needed for photosynthesis is",
    "image": "images/science/diagrams/q.png",
    "options": ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
    "correct": 1,
    "explanation": "Plants take in carbon dioxide from the air for photosynthesis."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "A leaf is tested with iodine solution and turns blue-black, showing that it contains",
    "image": "images/science/diagrams/q.png",
    "options": ["protein", "starch", "sugar only", "fat"],
    "correct": 1,
    "explanation": "Iodine solution turns blue-black in the presence of starch, a product of photosynthesis."
  },
  {
    "topic": "Flowering Plants: External and Internal Structure",
    "question": "Which part of the plant carries water and food between the roots and the leaves?",
    "image": "images/science/diagrams/q.png",
    "options": ["The flower", "The stem", "The fruit", "The petal"],
    "correct": 1,
    "explanation": "The stem (vascular tissue) transports water, minerals and food around the plant."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The process by which plants lose water vapour through their leaves is called",
    "image": "images/science/diagrams/q.png",
    "options": ["transpiration", "respiration", "condensation", "germination"],
    "correct": 0,
    "explanation": "Transpiration is the loss of water vapour from the leaves through stomata."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "During the day, the concentration of which gas in the air around a green plant increases?",
    "image": "images/science/diagrams/q.png",
    "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
    "correct": 1,
    "explanation": "Photosynthesis releases oxygen, increasing its concentration around the plant during the day."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The food made by plants during photosynthesis is stored mainly as",
    "image": "images/science/diagrams/q.png",
    "options": ["protein", "starch", "glucose in the air", "mineral salt"],
    "correct": 1,
    "explanation": "The glucose made is often converted and stored as starch in the leaves and other parts."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "A plant kept in a dark room for several days will not photosynthesise because it lacks",
    "image": "images/science/diagrams/q.png",
    "options": ["carbon dioxide", "water", "light", "oxygen"],
    "correct": 2,
    "explanation": "Without light the plant cannot photosynthesise, as light supplies the energy for the process."
  },
  {
    "topic": "Important Processes in Plants",
    "question": "The movement of water and dissolved minerals up the stem is mainly due to",
    "image": "images/science/diagrams/q.png",
    "options": ["root pressure and transpiration pull", "gravity only", "the force of the wind", "the colour of the leaves"],
    "correct": 0,
    "explanation": "Root pressure and the transpiration pull help move water and minerals up the plant."
  },
  {
    "topic": "Other Classes of Food Substances",
    "question": "Which vitamin is obtained mainly from exposure to sunlight and helps form strong bones?",
    "image": "images/science/diagrams/q.png",
    "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "correct": 3,
    "explanation": "Vitamin D is made in the skin in sunlight and helps the body use calcium for strong bones."
  },
  {
    "topic": "Main Classes, Sources and Functions of Food",
    "question": "Rice, yam, cassava and bread are rich sources of",
    "image": "images/science/diagrams/q.png",
    "options": ["protein", "carbohydrate", "vitamin C", "mineral salt"],
    "correct": 1,
    "explanation": "These starchy foods are rich in carbohydrates, the body's main energy source."
  },
  {
    "topic": "Main Classes, Sources and Functions of Food",
    "question": "Beans and meat are good sources of which nutrient?",
    "image": "images/science/diagrams/q.png",
    "options": ["Carbohydrate", "Protein", "Vitamin A", "Iron only"],
    "correct": 1,
    "explanation": "Beans and meat are rich in protein, which is needed for growth and repair."
  },
  {
    "topic": "Deficiency Diseases",
    "question": "The disease beriberi is caused by a deficiency of",
    "image": "images/science/diagrams/q.png",
    "options": ["Vitamin B1 (thiamine)", "Vitamin C", "Vitamin D", "Iron"],
    "correct": 0,
    "explanation": "Beriberi results from a lack of Vitamin B1 (thiamine)."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Which of the following is a water-borne method of spreading disease?",
    "image": "images/science/diagrams/q.png",
    "options": ["Drinking contaminated water", "Breathing clean air", "Bathing with soap", "Eating well-cooked food"],
    "correct": 0,
    "explanation": "Drinking contaminated water spreads water-borne diseases like cholera and typhoid."
  },
  {
    "topic": "Main Classes, Sources and Functions of Food",
    "question": "Fats and oils are stored in the human body mainly as",
    "image": "images/science/diagrams/q.png",
    "options": ["energy reserve", "a source of vitamins", "blue pigment", "a way of cooling the body"],
    "correct": 0,
    "explanation": "Fats and oils are stored as an energy reserve that the body can use later."
  },
  {
    "topic": "Diet and Balanced Diet",
    "question": "The condition in which a person cannot produce insulin, causing high blood sugar, is known as",
    "image": "images/science/diagrams/q.png",
    "options": ["diabetes", "anaemia", "malaria", "flu"],
    "correct": 0,
    "explanation": "Diabetes is caused by a lack of insulin, leading to high blood sugar levels."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Blood is composed of plasma, red blood cells, white blood cells and",
    "image": "images/science/diagrams/q.png",
    "options": ["platelets", "vitamins", "starch", "proteins"],
    "correct": 0,
    "explanation": "Platelets are the cell fragments in blood that help it to clot."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "The thin vessel where substances are exchanged between the blood and body cells is the",
    "image": "images/science/diagrams/q.png",
    "options": ["artery", "vein", "capillary", "aorta"],
    "correct": 2,
    "explanation": "Capillaries are tiny vessels where oxygen, nutrients and waste are exchanged with cells."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Which blood cells defend the body against disease?",
    "image": "images/science/diagrams/q.png",
    "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    "correct": 1,
    "explanation": "White blood cells fight against disease-causing germs."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "The dome-shaped muscle below the lungs that helps in breathing is the",
    "image": "images/science/diagrams/q.png",
    "options": ["diaphragm", "trachea", "larynx", "pleura"],
    "correct": 0,
    "explanation": "The diaphragm flattens to allow air in and relaxes to push air out."
  },
  {
    "topic": "The Excretory System",
    "question": "The main organ of the urinary system is the",
    "image": "images/science/diagrams/q.png",
    "options": ["kidney", "liver", "pancreas", "spleen"],
    "correct": 0,
    "explanation": "The kidneys filter waste from the blood and form urine."
  },
  {
    "topic": "Human Body Systems",
    "question": "The part of the brain that controls heartbeat and breathing is the",
    "image": "images/science/diagrams/q.png",
    "options": ["cerebrum", "cerebellum", "medulla oblongata", "hypothalamus"],
    "correct": 2,
    "explanation": "The medulla oblongata controls involuntary actions like heartbeat and breathing."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "Which of the following is the largest bone in the human body?",
    "image": "images/science/diagrams/q.png",
    "options": ["The skull", "The femur (thigh bone)", "The rib", "The humerus"],
    "correct": 1,
    "explanation": "The femur, the thigh bone, is the longest and strongest bone in the body."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "The condition caused by high blood pressure and damaged arteries is a result of",
    "image": "images/science/diagrams/q.png",
    "options": ["regular exercise", "a diet high in salt and fat", "drinking enough water", "a balanced diet"],
    "correct": 1,
    "explanation": "A diet high in salt and fat can lead to high blood pressure and heart problems."
  },
  {
    "topic": "The Endocrine System",
    "question": "Which hormone regulates the amount of sugar in the blood?",
    "image": "images/science/diagrams/q.png",
    "options": ["Insulin", "Adrenaline", "Growth hormone", "Bile"],
    "correct": 0,
    "explanation": "Insulin, produced by the pancreas, regulates the blood sugar level."
  },
  {
    "topic": "The Endocrine System",
    "question": "The organ system that produces hormones is the",
    "image": "images/science/diagrams/q.png",
    "options": ["endocrine system", "skeletal system", "muscular system", "digestive system"],
    "correct": 0,
    "explanation": "The endocrine system is made up of glands that produce hormones."
  },
  {
    "topic": "General Properties and Composition of Air",
    "question": "The composition of the air that supports burning is mainly",
    "image": "images/science/diagrams/q.png",
    "options": ["around 21% oxygen", "around 50% oxygen", "around 90% oxygen", "no oxygen at all"],
    "correct": 0,
    "explanation": "Air contains about 21% oxygen, which supports burning and respiration."
  },
  {
    "topic": "General Properties and Composition of Air",
    "question": "The gas that is most abundant in the atmosphere and is relatively unreactive is",
    "image": "images/science/diagrams/q.png",
    "options": ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"],
    "correct": 2,
    "explanation": "Nitrogen makes up about 78% of the air and is relatively unreactive."
  },
  {
    "topic": "Changes in the States of Matter",
    "question": "When water vapour condenses, it changes into",
    "image": "images/science/diagrams/q.png",
    "options": ["ice", "liquid water", "steam", "carbon dioxide"],
    "correct": 1,
    "explanation": "Condensation is the change of water vapour into liquid water."
  },
  {
    "topic": "Abiotic (Ecological) Factors",
    "question": "Which of the following makes clay soil different from sandy soil?",
    "image": "images/science/diagrams/q.png",
    "options": ["Clay has larger particles", "Clay holds more water", "Clay has no mineral salts", "Clay drains water fastest"],
    "correct": 1,
    "explanation": "Clay soil has very fine particles and therefore holds more water than sandy soil."
  },
  {
    "topic": "Conservation of Natural Resources",
    "question": "The loss of topsoil by running water and wind is called",
    "image": "images/science/diagrams/q.png",
    "options": ["erosion", "condensation", "germination", "evaporation"],
    "correct": 0,
    "explanation": "Soil erosion is the washing or blowing away of the topsoil."
  },
  {
    "topic": "Abiotic (Ecological) Factors",
    "question": "Farmers improve the fertility of their soil by adding",
    "image": "images/science/diagrams/q.png",
    "options": ["compost or manure", "sand only", "pure water", "plastic waste"],
    "correct": 0,
    "explanation": "Compost or manure adds humus and nutrients that improve soil fertility."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "The energy possessed by a stretched rubber band is an example of",
    "image": "images/science/diagrams/q.png",
    "options": ["kinetic energy", "potential energy", "light energy", "sound energy"],
    "correct": 1,
    "explanation": "A stretched rubber band stores potential (elastic) energy."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "A moving car has mainly which form of energy?",
    "image": "images/science/diagrams/q.png",
    "options": ["Kinetic energy", "Potential energy", "Nuclear energy", "Chemical energy"],
    "correct": 0,
    "explanation": "A moving car has kinetic energy, the energy of motion."
  },
  {
    "topic": "Electrical Energy",
    "question": "Electricity is used in a lamp to produce mainly",
    "image": "images/science/diagrams/q.png",
    "options": ["light and heat energy", "sound energy", "kinetic energy", "chemical energy"],
    "correct": 0,
    "explanation": "An electric lamp converts electrical energy into light and heat."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "Which of the following is an example of chemical energy being changed into heat energy?",
    "image": "images/science/diagrams/q.png",
    "options": ["Burning wood", "Falling water", "A moving car", "A spinning top"],
    "correct": 0,
    "explanation": "Burning wood converts stored chemical energy into heat and light."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "The food we eat is a source of which energy that the body uses to work?",
    "image": "images/science/diagrams/q.png",
    "options": ["Chemical energy", "Electrical energy", "Nuclear energy", "Light energy"],
    "correct": 0,
    "explanation": "Food contains chemical energy which the body releases through respiration to do work."
  },
  {
    "topic": "Principle of Conservation of Energy",
    "question": "Energy stored in a coiled spring is called",
    "image": "images/science/diagrams/q.png",
    "options": ["kinetic energy", "elastic potential energy", "gravitational energy", "heat energy"],
    "correct": 1,
    "explanation": "A coiled spring stores elastic potential energy."
  },
  {
    "topic": "Electrical Energy",
    "question": "The main form of energy used to generate electricity in many dams is",
    "image": "images/science/diagrams/q.png",
    "options": ["heat energy", "kinetic energy of falling water", "sound energy", "light energy"],
    "correct": 1,
    "explanation": "Dams use the kinetic energy of falling water to drive turbines and generate electricity."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound energy is produced when an object",
    "image": "images/science/diagrams/q.png",
    "options": ["vibrates", "is heated slowly", "is at rest", "reflects light"],
    "correct": 0,
    "explanation": "Sound is produced by the vibration of objects."
  },
  {
    "topic": "Light Energy",
    "question": "A shadow is formed because light",
    "image": "images/science/diagrams/q.png",
    "options": ["travels in straight lines", "bends around objects", "is reflected by objects", "cannot pass through air"],
    "correct": 0,
    "explanation": "Shadows form because light travels in straight lines and cannot pass through opaque objects."
  },
  {
    "topic": "Light Energy",
    "question": "Which of the following objects is a source of light?",
    "image": "images/science/diagrams/q.png",
    "options": ["The moon", "A torch", "A piece of chalk", "A mirror"],
    "correct": 1,
    "explanation": "A torch produces its own light; the moon and a mirror only reflect light."
  },
  {
    "topic": "Light Energy",
    "question": "The splitting of white light into its colours is called",
    "image": "images/science/diagrams/q.png",
    "options": ["reflection", "refraction", "dispersion", "diffraction"],
    "correct": 2,
    "explanation": "Dispersion splits white light into the colours of the rainbow."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound is caused by the",
    "image": "images/science/diagrams/q.png",
    "options": ["vibration of objects", "reflection of light", "movement of the sun", "flow of electric current alone"],
    "correct": 0,
    "explanation": "Sound is produced by the vibration of an object."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound travels slowest through which medium?",
    "image": "images/science/diagrams/q.png",
    "options": ["Steel", "Water", "Air", "Glass"],
    "correct": 2,
    "explanation": "Sound travels slowest through air (a gas) and fastest through solids like steel."
  },
  {
    "topic": "Sound Energy",
    "question": "The reflection of sound that produces an echo is used by",
    "image": "images/science/diagrams/q.png",
    "options": ["bats to navigate", "the sun to shine", "plants to make food", "the moon to glow"],
    "correct": 0,
    "explanation": "Bats use the reflection of sound (echolocation) to navigate and find prey."
  },
  {
    "topic": "Light Energy",
    "question": "The angle of incidence is the angle between the incident ray and the",
    "image": "images/science/diagrams/q.png",
    "options": ["normal", "reflected ray", "mirror surface", "object"],
    "correct": 0,
    "explanation": "The angle of incidence is measured between the incident ray and the normal."
  },
  {
    "topic": "Sound Energy",
    "question": "Light travels faster than sound, which is why during a thunderstorm we",
    "image": "images/science/diagrams/q.png",
    "options": ["see the lightning before hearing the thunder", "hear the thunder before seeing the lightning", "see and hear them at the same time", "never see lightning"],
    "correct": 0,
    "explanation": "Because light travels faster than sound, we see lightning before we hear thunder."
  },
  {
    "topic": "Light Energy",
    "question": "A rainbow is formed as a result of the dispersion of light by",
    "image": "images/science/diagrams/q.png",
    "options": ["water droplets", "green leaves", "the moon", "solid rocks"],
    "correct": 0,
    "explanation": "Water droplets in the air split sunlight into its colours to form a rainbow."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "The unit of heat energy is the",
    "image": "images/science/diagrams/q.png",
    "options": ["joule", "newton", "ampere", "ohm"],
    "correct": 0,
    "explanation": "Heat energy is measured in joules (J)."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "Which surface is the best radiator of heat?",
    "image": "images/science/diagrams/q.png",
    "options": ["A shiny white surface", "A dark dull surface", "A smooth aluminium surface", "A transparent surface"],
    "correct": 1,
    "explanation": "Dark, dull surfaces absorb and radiate heat better than shiny, bright surfaces."
  },
  {
    "topic": "Changes in the States of Matter",
    "question": "The freezing point of pure water is",
    "image": "images/science/diagrams/q.png",
    "options": ["0°C", "100°C", "37°C", "50°C"],
    "correct": 0,
    "explanation": "Pure water freezes at 0°C."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "In a thermos flask, the vacuum between the walls prevents heat loss by",
    "image": "images/science/diagrams/q.png",
    "options": ["conduction and convection", "radiation only", "reflection only", "evaporation"],
    "correct": 0,
    "explanation": "The vacuum stops conduction and convection because there are no particles between the walls."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "The normal human body temperature is about",
    "image": "images/science/diagrams/q.png",
    "options": ["37°C", "0°C", "100°C", "70°C"],
    "correct": 0,
    "explanation": "Normal human body temperature is about 37°C."
  },
  {
    "topic": "Forces: Definition, Effects and Measurement",
    "question": "The unit used to measure force is the",
    "image": "images/science/diagrams/q.png",
    "options": ["newton", "joule", "watt", "pascal"],
    "correct": 0,
    "explanation": "Force is measured in newtons (N)."
  },
  {
    "topic": "Forces: Definition, Effects and Measurement",
    "question": "The property that makes an object remain at rest or in uniform motion unless acted upon is described by",
    "image": "images/science/diagrams/q.png",
    "options": ["inertia", "friction", "gravity", "magnetism"],
    "correct": 0,
    "explanation": "Inertia is the tendency of an object to resist a change in its state of motion."
  },
  {
    "topic": "Other Types of Machines",
    "question": "Which of the following is a simple machine used to split or cut things?",
    "image": "images/science/diagrams/q.png",
    "options": ["Wedge", "Pulley", "Lever", "Wheel and axle"],
    "correct": 0,
    "explanation": "A wedge, like an axe, is used to split or cut objects."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "A wheelbarrow is an example of which class of lever?",
    "image": "images/science/diagrams/q.png",
    "options": ["First-class", "Second-class", "Third-class", "It is not a lever"],
    "correct": 1,
    "explanation": "A wheelbarrow is a second-class lever with the load between the fulcrum and the effort."
  },
  {
    "topic": "Efficiency of Machines and Velocity Ratio",
    "question": "The efficiency of a machine is always less than 100% because",
    "image": "images/science/diagrams/q.png",
    "options": ["some energy is lost to friction as heat", "machines create new energy", "the load is always heavier", "the effort is always bigger"],
    "correct": 0,
    "explanation": "Some energy is wasted overcoming friction and is converted to heat, so efficiency is never 100%."
  },
  {
    "topic": "Other Types of Machines",
    "question": "Which simple machine is used to carry water from a well using a rope and wheel?",
    "image": "images/science/diagrams/q.png",
    "options": ["Pulley", "Wedge", "Screw", "Inclined plane"],
    "correct": 0,
    "explanation": "A pulley with a rope is used to lift water from a well."
  },
  {
    "topic": "Contact and Non-Contact Forces",
    "question": "Which of the following materials can be made into a permanent magnet?",
    "image": "images/science/diagrams/q.png",
    "options": ["Steel", "Rubber", "Wood", "Glass"],
    "correct": 0,
    "explanation": "Steel can be magnetised and retains its magnetism, forming a permanent magnet."
  },
  {
    "topic": "Electrical Energy",
    "question": "A device that protects a circuit from too much current is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["fuse", "generator", "cell", "switch"],
    "correct": 0,
    "explanation": "A fuse melts and breaks the circuit when the current becomes too high."
  },
  {
    "topic": "Electrical Energy",
    "question": "The path along which electric current flows is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["circuit", "magnet", "pulley", "lever"],
    "correct": 0,
    "explanation": "A circuit is the closed path through which electric current flows."
  },
  {
    "topic": "Electrical Energy",
    "question": "Which of the following is a non-conductor of electricity?",
    "image": "images/science/diagrams/q.png",
    "options": ["Copper", "Plastic", "Aluminium", "Iron"],
    "correct": 1,
    "explanation": "Plastic is an insulator and does not conduct electricity."
  },
  {
    "topic": "Electrical Energy",
    "question": "The instrument used to measure electrical resistance in a circuit is the",
    "image": "images/science/diagrams/q.png",
    "options": ["ohmmeter", "thermometer", "barometer", "ammeter"],
    "correct": 0,
    "explanation": "An ohmmeter measures electrical resistance in ohms."
  },
  {
    "topic": "Contact and Non-Contact Forces",
    "question": "Similar poles of two magnets always",
    "image": "images/science/diagrams/q.png",
    "options": ["attract each other", "repel each other", "lose their magnetism", "form a new magnet"],
    "correct": 1,
    "explanation": "Like poles (N-N or S-S) repel each other."
  },
  {
    "topic": "Electrical Energy",
    "question": "Connecting two cells in a torch increases the",
    "image": "images/science/diagrams/q.png",
    "options": ["voltage of the circuit", "length of the wire", "size of the bulb", "resistance of the air"],
    "correct": 0,
    "explanation": "Connecting cells in series increases the total voltage supplied."
  },
  {
    "topic": "Electrical Energy",
    "question": "Electric current is the flow of",
    "image": "images/science/diagrams/q.png",
    "options": ["positive charges (conventionally)", "water molecules", "sound waves", "heat rays"],
    "correct": 0,
    "explanation": "Electric current is the flow of electric charge; conventionally it is taken as the flow of positive charge."
  },
  {
    "topic": "Evaporation and Boiling",
    "question": "The change of a liquid to a gas at its boiling point is called",
    "image": "images/science/diagrams/q.png",
    "options": ["boiling", "melting", "sublimation", "condensation"],
    "correct": 0,
    "explanation": "Boiling is the change of a liquid to a gas at its boiling point throughout the liquid."
  },
  {
    "topic": "Physical and Chemical Changes",
    "question": "Which of the following is an example of a physical change?",
    "image": "images/science/diagrams/q.png",
    "options": ["Melting of ice", "Burning of wood", "Rusting of iron", "Digestion of food"],
    "correct": 0,
    "explanation": "Melting ice only changes state; no new substance is formed, so it is a physical change."
  },
  {
    "topic": "Physical and Chemical Changes",
    "question": "Which of the following is an example of a chemical change?",
    "image": "images/science/diagrams/q.png",
    "options": ["Rusting of iron", "Dissolving sugar in water", "Melting wax", "Freezing water"],
    "correct": 0,
    "explanation": "Rusting forms a new substance (rust), so it is a chemical change."
  },
  {
    "topic": "Elements as Pure Substances",
    "question": "The smallest particle of an element is called the",
    "image": "images/science/diagrams/q.png",
    "options": ["atom", "molecule", "electron", "compound"],
    "correct": 0,
    "explanation": "An atom is the smallest particle of an element that retains its properties."
  },
  {
    "topic": "Compounds",
    "question": "Two or more elements chemically combined form a",
    "image": "images/science/diagrams/q.png",
    "options": ["compound", "mixture", "solution", "alloy only"],
    "correct": 0,
    "explanation": "A compound is formed when two or more elements combine chemically."
  },
  {
    "topic": "Mixtures as Impure Substances",
    "question": "Which of the following is a mixture?",
    "image": "images/science/diagrams/q.png",
    "options": ["Air", "Pure water", "Table salt", "Sugar"],
    "correct": 0,
    "explanation": "Air is a mixture of gases; the others are pure substances (elements or compounds)."
  },
  {
    "topic": "Properties and Uses of Some Gases",
    "question": "The gas that turns lime water milky is",
    "image": "images/science/diagrams/q.png",
    "options": ["carbon dioxide", "oxygen", "nitrogen", "hydrogen"],
    "correct": 0,
    "explanation": "Carbon dioxide turns lime water milky (cloudy)."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "Which of the following is a cause of air pollution?",
    "image": "images/science/diagrams/q.png",
    "options": ["Smoke from factory chimneys", "Planting trees", "Recycling paper", "Drinking clean water"],
    "correct": 0,
    "explanation": "Smoke containing harmful gases from factory chimneys pollutes the air."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "Dumping sewage into a river causes",
    "image": "images/science/diagrams/q.png",
    "options": ["water pollution", "air pollution", "light pollution", "soil erosion"],
    "correct": 0,
    "explanation": "Sewage in rivers pollutes the water and harms living organisms."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "Acid rain is mainly caused by the release of which gas into the air?",
    "image": "images/science/diagrams/q.png",
    "options": ["Sulphur dioxide", "Oxygen", "Nitrogen", "Carbon monoxide"],
    "correct": 0,
    "explanation": "Sulphur dioxide dissolves in rainwater to form acid rain."
  },
  {
    "topic": "Conservation of Natural Resources",
    "question": "Which of the following helps to reduce pollution?",
    "image": "images/science/diagrams/q.png",
    "options": ["Recycling waste materials", "Burning all rubbish", "Dumping waste in rivers", "Cutting down all trees"],
    "correct": 0,
    "explanation": "Recycling reduces waste and pollution, unlike burning or improper dumping."
  },
  {
    "topic": "Conservation of Natural Resources",
    "question": "The depletion of trees in a forest by cutting them down is called",
    "image": "images/science/diagrams/q.png",
    "options": ["deforestation", "afforestation", "erosion", "cultivation"],
    "correct": 0,
    "explanation": "Deforestation is the removal of trees and forests."
  },
  {
    "topic": "Pollution and Control Methods",
    "question": "The gas that is very harmful when inhaled and is produced by incomplete burning of fuels is",
    "image": "images/science/diagrams/q.png",
    "options": ["carbon monoxide", "nitrogen", "oxygen", "helium"],
    "correct": 0,
    "explanation": "Carbon monoxide, from incomplete burning, is poisonous when inhaled."
  },
  {
    "topic": "Conservation of Natural Resources",
    "question": "Reforestation is the practice of",
    "image": "images/science/diagrams/q.png",
    "options": ["planting trees again in a deforested area", "burning trees", "cutting down trees", "covering soil with plastic"],
    "correct": 0,
    "explanation": "Reforestation is replanting trees in an area where trees were removed."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "The male sex cell of a plant is carried in the",
    "image": "images/science/diagrams/q.png",
    "options": ["pollen grain", "ovary", "stigma", "root"],
    "correct": 0,
    "explanation": "Pollen grains carry the male sex cells (gametes) of a plant."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "In humans, the fusion of a sperm and an egg produces a",
    "image": "images/science/diagrams/q.png",
    "options": ["zygote", "foetus", "gamete", "embryo sac"],
    "correct": 0,
    "explanation": "Fertilisation produces a zygote, which develops into an embryo and then a foetus."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "Which part of the flower contains the ovules?",
    "image": "images/science/diagrams/q.png",
    "options": ["Ovary", "Anther", "Petal", "Stigma"],
    "correct": 0,
    "explanation": "The ovary contains the ovules, which contain the female sex cells."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "The thick fur of a polar bear is an example of",
    "image": "images/science/diagrams/q.png",
    "options": ["adaptation to a cold environment", "a sign of ill health", "a way of attracting mates only", "a response to light"],
    "correct": 0,
    "explanation": "Thick fur insulates the polar bear, adapting it to its cold environment."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "The webbed feet of a frog help it to",
    "image": "images/science/diagrams/q.png",
    "options": ["swim in water", "climb trees", "catch flies in the air", "hide on land"],
    "correct": 0,
    "explanation": "Webbed feet push against water and help the frog swim, adapting it to a watery habitat."
  },
  {
    "topic": "Pollination and Germination",
    "question": "A seed needs which THREE conditions to germinate?",
    "image": "images/science/diagrams/q.png",
    "options": ["Water, air and warmth", "Light, oil and cold", "Soil, stone and dust", "Salt, sugar and shade"],
    "correct": 0,
    "explanation": "Seeds germinate when they have water, air (oxygen) and warmth."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "The part of the eye that focuses light onto the retina is the",
    "image": "images/science/diagrams/q.png",
    "options": ["lens", "iris", "cornea", "pupil"],
    "correct": 0,
    "explanation": "The lens focuses light rays onto the retina to form an image."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The part of the ear that collects sound waves from the air is the",
    "image": "images/science/diagrams/q.png",
    "options": ["pinna (outer ear)", "eardrum", "cochlea", "auditory nerve"],
    "correct": 0,
    "explanation": "The pinna, the outer part of the ear, collects sound waves."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Which of the following is a healthy way to care for the eye?",
    "image": "images/science/diagrams/q.png",
    "options": ["Reading in good light", "Rubbing the eyes with dirty hands", "Looking directly at the sun", "Sharing eye drops"],
    "correct": 0,
    "explanation": "Reading in good light protects the eyes from strain and damage."
  },
  {
    "topic": "Exercise, Rest and Recreation",
    "question": "Sleep and rest are important for health because they",
    "image": "images/science/diagrams/q.png",
    "options": ["let the body recover and repair", "cause disease", "reduce blood", "stop the heart"],
    "correct": 0,
    "explanation": "Sleep and rest allow the body to rest, recover and repair itself."
  },
  {
    "topic": "Diet and Balanced Diet",
    "question": "A diet rich in which nutrient can raise blood pressure and should be limited?",
    "image": "images/science/diagrams/q.png",
    "options": ["Salt (sodium)", "Water", "Vitamin C", "Fibre"],
    "correct": 0,
    "explanation": "Too much salt can raise blood pressure and harm the heart."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "The sense organ for touch is the",
    "image": "images/science/diagrams/q.png",
    "options": ["skin", "ear", "tongue", "nose"],
    "correct": 0,
    "explanation": "The skin is the sense organ for touch."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The star at the centre of our solar system is the",
    "image": "images/science/diagrams/q.png",
    "options": ["sun", "moon", "earth", "north star"],
    "correct": 0,
    "explanation": "The sun is the star at the centre of the solar system."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The earth moves around the sun along a path called a",
    "image": "images/science/diagrams/q.png",
    "options": ["orbit", "circle only", "rotation", "revolution"],
    "correct": 0,
    "explanation": "The earth travels around the sun in an elliptical path called an orbit."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The earth rotates on its axis once every",
    "image": "images/science/diagrams/q.png",
    "options": ["24 hours", "365 days", "12 hours", "7 days"],
    "correct": 0,
    "explanation": "The earth completes one rotation on its axis in about 24 hours."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "Day and night are caused by the earth's",
    "image": "images/science/diagrams/q.png",
    "options": ["rotation on its axis", "revolution around the sun", "tilt of the moon", "distance from the sun"],
    "correct": 0,
    "explanation": "Day and night occur because the earth rotates on its axis."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The earth makes one complete revolution around the sun in about",
    "image": "images/science/diagrams/q.png",
    "options": ["365 days", "24 hours", "7 days", "90 days"],
    "correct": 0,
    "explanation": "One revolution of the earth around the sun takes about 365 days (one year)."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The natural satellite that revolves around the earth is the",
    "image": "images/science/diagrams/q.png",
    "options": ["moon", "sun", "mars", "venus"],
    "correct": 0,
    "explanation": "The moon is the natural satellite that revolves around the earth."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "Which planet is known as the red planet?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mars", "Venus", "Jupiter", "Mercury"],
    "correct": 0,
    "explanation": "Mars appears red because of iron oxide (rust) on its surface."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The largest planet in the solar system is",
    "image": "images/science/diagrams/q.png",
    "options": ["Jupiter", "Earth", "Venus", "Mars"],
    "correct": 0,
    "explanation": "Jupiter is the largest planet in the solar system."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The layer of gases surrounding the earth is called the",
    "image": "images/science/diagrams/q.png",
    "options": ["atmosphere", "mantle", "crust", "hydrosphere"],
    "correct": 0,
    "explanation": "The atmosphere is the layer of gases surrounding the earth."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The earth's movement around the sun causes",
    "image": "images/science/diagrams/q.png",
    "options": ["the seasons", "day and night only", "tides only", "the moon's phases only"],
    "correct": 0,
    "explanation": "The earth's revolution around the sun, together with its tilt, causes the seasons."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "Which planet is nearest to the sun?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mercury", "Venus", "Earth", "Mars"],
    "correct": 0,
    "explanation": "Mercury is the planet nearest to the sun."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The phenomenon of day and night lasts about",
    "image": "images/science/diagrams/q.png",
    "options": ["24 hours", "1 week", "1 month", "1 year"],
    "correct": 0,
    "explanation": "Day and night together span about 24 hours, caused by one rotation."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The planet on which humans live is",
    "image": "images/science/diagrams/q.png",
    "options": ["Earth", "Mars", "Venus", "Saturn"],
    "correct": 0,
    "explanation": "Earth is the only known planet that supports human life."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "Which of the following is NOT a planet?",
    "image": "images/science/diagrams/q.png",
    "options": ["The moon", "Mars", "Venus", "Mercury"],
    "correct": 0,
    "explanation": "The moon is a satellite, not a planet."
  },
  {
    "topic": "Earth and the Solar System",
    "question": "The seasons (wet and dry) in the tropics are mainly caused by",
    "image": "images/science/diagrams/q.png",
    "options": ["the movement and position of the sun relative to the earth", "the rotation of the moon", "ocean waves", "mountain height"],
    "correct": 0,
    "explanation": "The changing position of the sun relative to the tilted earth causes the seasons."
  },
  {
    "topic": "Weather and Climate",
    "question": "The measure of how hot or cold the atmosphere is is called",
    "image": "images/science/diagrams/q.png",
    "options": ["temperature", "humidity", "pressure", "wind"],
    "correct": 0,
    "explanation": "Temperature is the measure of heat in the atmosphere."
  },
  {
    "topic": "Weather and Climate",
    "question": "The amount of water vapour in the air is called",
    "image": "images/science/diagrams/q.png",
    "options": ["humidity", "temperature", "precipitation", "wind"],
    "correct": 0,
    "explanation": "Humidity is the amount of water vapour present in the air."
  },
  {
    "topic": "Scientific Instruments and Their Uses",
    "question": "The instrument used to measure rainfall is the",
    "image": "images/science/diagrams/q.png",
    "options": ["rain gauge", "barometer", "thermometer", "anemometer"],
    "correct": 0,
    "explanation": "A rain gauge measures the amount of rainfall."
  },
  {
    "topic": "Scientific Instruments and Their Uses",
    "question": "The instrument used to measure wind speed is the",
    "image": "images/science/diagrams/q.png",
    "options": ["anemometer", "thermometer", "rain gauge", "barometer"],
    "correct": 0,
    "explanation": "An anemometer measures the speed of the wind."
  },
  {
    "topic": "Scientific Instruments and Their Uses",
    "question": "The atmospheric pressure is measured with a",
    "image": "images/science/diagrams/q.png",
    "options": ["barometer", "thermometer", "anemometer", "rain gauge"],
    "correct": 0,
    "explanation": "A barometer measures atmospheric pressure."
  },
  {
    "topic": "Weather and Climate",
    "question": "Large drops of water that fall from clouds are called",
    "image": "images/science/diagrams/q.png",
    "options": ["rain", "evaporation", "transpiration", "condensation"],
    "correct": 0,
    "explanation": "Rain is water that falls from clouds in the form of drops."
  },
  {
    "topic": "Weather and Climate",
    "question": "The average weather condition of a place over a long period is called its",
    "image": "images/science/diagrams/q.png",
    "options": ["climate", "weather", "season", "forecast"],
    "correct": 0,
    "explanation": "Climate is the average weather condition over a long period, while weather is short-term."
  },
  {
    "topic": "Weather and Climate",
    "question": "The state of the atmosphere at a particular time and place is called",
    "image": "images/science/diagrams/q.png",
    "options": ["weather", "climate", "tropical zone", "ocean current"],
    "correct": 0,
    "explanation": "Weather is the condition of the atmosphere at a specific time and place."
  },
  {
    "topic": "Weather and Climate",
    "question": "As altitude (height above sea level) increases, temperature generally",
    "image": "images/science/diagrams/q.png",
    "options": ["decreases", "increases", "stays the same", "becomes unpredictable without cooling"],
    "correct": 0,
    "explanation": "Temperature generally decreases as altitude increases."
  },
  {
    "topic": "Weather and Climate",
    "question": "The rising warm air and falling cool air at the land and sea cause which weather phenomenon?",
    "image": "images/science/diagrams/q.png",
    "options": ["Sea and land breezes", "Earthquakes", "Tides", "Eclipses"],
    "correct": 0,
    "explanation": "Differences in heating of land and sea cause sea and land breezes."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "The misuse of drugs is called",
    "image": "images/science/diagrams/q.png",
    "options": ["drug abuse", "drug storage", "drug prescription", "drug purity"],
    "correct": 0,
    "explanation": "Drug abuse is the wrong or excessive use of drugs."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "Which of the following is an example of drug abuse?",
    "image": "images/science/diagrams/q.png",
    "options": ["Using drugs without a prescription", "Using prescribed drugs correctly", "Storing drugs in a cool place", "Reading the label before use"],
    "correct": 0,
    "explanation": "Using drugs without a prescription is a form of drug abuse."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Smoking of tobacco may lead to which disease?",
    "image": "images/science/diagrams/q.png",
    "options": ["Lung cancer", "Malaria", "Cholera", "Typhoid"],
    "correct": 0,
    "explanation": "Smoking increases the risk of lung cancer and other lung diseases."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "The excessive drinking of alcohol can damage which organ?",
    "image": "images/science/diagrams/q.png",
    "options": ["The liver", "The teeth", "The skin", "The nails"],
    "correct": 0,
    "explanation": "Excessive alcohol damages the liver."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "Which of the following is a good practice when taking medicines?",
    "image": "images/science/diagrams/q.png",
    "options": ["Following the doctor's prescription and dosage", "Taking more than prescribed", "Sharing drugs with friends", "Taking expired drugs"],
    "correct": 0,
    "explanation": "Take medicines only as prescribed by a doctor or pharmacist."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "Drugs obtained from plants that are used for recreation and cause addiction are called",
    "image": "images/science/diagrams/q.png",
    "options": ["narcotics or hard drugs", "vitamins", "antibiotics", "painkillers"],
    "correct": 0,
    "explanation": "Hard drugs or narcotics are addictive and harmful, like cannabis and cocaine."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "Which of the following is a safe way to help a friend who is abusing drugs?",
    "image": "images/science/diagrams/q.png",
    "options": ["Encourage them to seek help and support", "Buy them more drugs", "Use drugs to encourage them", "Ignore the problem entirely"],
    "correct": 0,
    "explanation": "Guiding a drug abuser to seek help and counselling is the safe approach."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "A person who cannot do without a drug and needs increasing amounts is said to be",
    "image": "images/science/diagrams/q.png",
    "options": ["addicted", "healthy", "relaxed", "strengthened"],
    "correct": 0,
    "explanation": "Addiction is the state of depending on a drug and needing more of it."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Which of the following is used to treat bacterial infections and should be completed as prescribed?",
    "image": "images/science/diagrams/q.png",
    "options": ["Antibiotics", "Narcotics", "Cannabis", "Alcohol"],
    "correct": 0,
    "explanation": "Antibiotics treat bacterial infections; the full course must be completed."
  },
  {
    "topic": "Drugs and Substance Abuse",
    "question": "The effect of hard drugs on the body includes",
    "image": "images/science/diagrams/q.png",
    "options": ["damage to the brain and body organs", "improved thinking always", "stronger bones", "clearer vision"],
    "correct": 0,
    "explanation": "Hard drugs damage the brain and other body organs and cause addiction."
  },
  {
    "topic": "Safety and First Aid",
    "question": "The first help given to an injured person before a doctor arrives is called",
    "image": "images/science/diagrams/q.png",
    "options": ["first aid", "final aid", "surgery", "treatment only"],
    "correct": 0,
    "explanation": "First aid is the immediate assistance given to an injured person."
  },
  {
    "topic": "Safety and First Aid",
    "question": "Which of the following is a way to prevent accidents in the home?",
    "image": "images/science/diagrams/q.png",
    "options": ["Keeping floors dry and clear of obstacles", "Leaving sharp objects lying around", "Playing with fire", "Climbing on unstable furniture"],
    "correct": 0,
    "explanation": "Dry, clear floors prevent slips and falls, reducing home accidents."
  },
  {
    "topic": "Safety and First Aid",
    "question": "An object that causes choking in a small child should be",
    "image": "images/science/diagrams/q.png",
    "options": ["kept out of reach of children", "given to the child to play with", "left on the floor", "hidden under the pillow"],
    "correct": 0,
    "explanation": "Small objects should be kept out of children's reach to prevent choking."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "The safest way to store medicines at home is",
    "image": "images/science/diagrams/q.png",
    "options": ["in a locked container out of children's reach", "on an open kitchen shelf", "mixed with food", "on the floor"],
    "correct": 0,
    "explanation": "Medicines should be locked away and kept out of children's reach."
  },
  {
    "topic": "Safety and First Aid",
    "question": "A person who is bleeding heavily should be given first aid to",
    "image": "images/science/diagrams/q.png",
    "options": ["stop the bleeding", "make them drink", "make them exercise", "make them run"],
    "correct": 0,
    "explanation": "First aid for severe bleeding is to stop the bleeding and seek medical help."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "The substance used to clean and disinfect a wound in first aid is",
    "image": "images/science/diagrams/q.png",
    "options": ["methylated spirit or antiseptic", "kerosene", "sugar", "paraffin"],
    "correct": 0,
    "explanation": "Antiseptics or methylated spirit are used to clean wounds and prevent infection."
  },
  {
    "topic": "Safety and First Aid",
    "question": "To prevent electric shock at home, one should",
    "image": "images/science/diagrams/q.png",
    "options": ["not touch electrical appliances with wet hands", "touch bare wires", "overload sockets", "use damaged plugs"],
    "correct": 0,
    "explanation": "Avoid touching electrical appliances with wet hands to prevent electric shock."
  },
  {
    "topic": "Safety and First Aid",
    "question": "When a fire starts in the home, the best first action is to",
    "image": "images/science/diagrams/q.png",
    "options": ["raise the alarm and move everyone to safety", "hide under a table", "keep it burning", "pour more fuel on it"],
    "correct": 0,
    "explanation": "Raise the alarm and move people to safety first, then call for help."
  },
  {
    "topic": "Safety and First Aid",
    "question": "The box containing medicines and dressings kept at home is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["first aid box", "tool box", "lunch box", "jewellery box"],
    "correct": 0,
    "explanation": "A first aid box contains items used to give first aid."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Which of the following is a safety rule when handling hot objects?",
    "image": "images/science/diagrams/q.png",
    "options": ["Use a dry cloth or gloves to hold hot items", "Hold them with wet hands", "Carry them while running", "Touch them to test the heat"],
    "correct": 0,
    "explanation": "Use a dry cloth or glove to hold hot objects to avoid burns."
  },
  {
    "topic": "Definitions of Science",
    "question": "The word science is derived from a Latin word that means",
    "image": "images/science/diagrams/q.png",
    "options": ["to invent", "to measure", "to see", "to know"],
    "correct": 3,
    "explanation": "Science comes from the Latin word 'scire' which means to know."
  },
  {
    "topic": "Definitions of Science",
    "question": "Which of the following shows the correct order of the steps of the scientific method?",
    "image": "images/science/diagrams/q.png",
    "options": ["Experiment, Question, Hypothesis, Observation, Conclusion", "Conclusion, Observation, Hypothesis, Experiment, Question", "Observation, Question, Hypothesis, Experiment, Conclusion", "Hypothesis, Conclusion, Observation, Experiment, Question"],
    "correct": 2,
    "explanation": "Scientific investigation begins with observation and a question, then a hypothesis is tested by experiment and a conclusion is drawn."
  },
  {
    "topic": "Definitions of Science",
    "question": "A biologist studies how a green plant makes its food in sunlight. This is an example of",
    "image": "images/science/diagrams/q.png",
    "options": ["technology", "pure science", "engineering design", "applied science"],
    "correct": 1,
    "explanation": "Pure science is carried out to gain knowledge for its own sake, while applied science uses that knowledge to solve practical problems."
  },
  {
    "topic": "Branches of Science",
    "question": "The branch of science that deals with living things and their life processes is",
    "image": "images/science/diagrams/q.png",
    "options": ["Geography", "Physics", "Biology", "Chemistry"],
    "correct": 2,
    "explanation": "Biology is the science of living organisms such as plants, animals and micro-organisms."
  },
  {
    "topic": "Branches of Science",
    "question": "Which branch of science studies the earth, its rocks, soil and atmosphere?",
    "image": "images/science/diagrams/q.png",
    "options": ["Biology", "Physics", "Earth Science", "Physiology"],
    "correct": 2,
    "explanation": "Earth Science covers the study of the earth, its rocks, soils, water and atmosphere."
  },
  {
    "topic": "Branches of Science",
    "question": "Integrated Science is important mainly because it",
    "image": "images/science/diagrams/q.png",
    "options": ["avoids the use of mathematics", "replaces all the other sciences completely", "studies the branches of science together and applies them to real life", "deals with experiments only"],
    "correct": 2,
    "explanation": "Integrated Science combines physics, chemistry and biology so that problems can be studied from more than one angle."
  },
  {
    "topic": "Famous Scientists and Their Contributions",
    "question": "Who is often called the father of biology for classifying living things?",
    "image": "images/science/diagrams/q.png",
    "options": ["Louis Pasteur", "Isaac Newton", "Aristotle", "Albert Einstein"],
    "correct": 2,
    "explanation": "Aristotle classified many living organisms and is regarded as the father of biology."
  },
  {
    "topic": "Famous Scientists and Their Contributions",
    "question": "The law of universal gravitation was proposed by",
    "image": "images/science/diagrams/q.png",
    "options": ["Albert Einstein", "Isaac Newton", "Louis Pasteur", "Robert Koch"],
    "correct": 1,
    "explanation": "Isaac Newton stated the law of gravitation, which explains why objects fall to the ground."
  },
  {
    "topic": "Famous Scientists and Their Contributions",
    "question": "Louis Pasteur is best known for his work on",
    "image": "images/science/diagrams/q.png",
    "options": ["the structure of the atom", "germs, vaccination and pasteurisation", "the theory of relativity", "the laws of motion"],
    "correct": 1,
    "explanation": "Louis Pasteur proved that germs cause disease and developed pasteurisation to kill microbes in food."
  },
  {
    "topic": "Differences Between Plants and Animals",
    "question": "Which of the following is a structural difference between a plant cell and an animal cell?",
    "image": "images/science/diagrams/q.png",
    "options": ["Plant cells have a cell wall, animal cells do not", "Animal cells are always green", "Plant cells have no nucleus", "Animal cells contain chlorophyll"],
    "correct": 0,
    "explanation": "The cell wall and chloroplasts are found in plant cells but absent in animal cells."
  },
  {
    "topic": "Differences Between Plants and Animals",
    "question": "Organisms that make their own food using sunlight are described as",
    "image": "images/science/diagrams/q.png",
    "options": ["saprophytic", "autotrophic", "heterotrophic", "carnivorous"],
    "correct": 1,
    "explanation": "Autotrophic organisms such as green plants manufacture their own food, while heterotrophic organisms feed on other organisms."
  },
  {
    "topic": "Differences Between Plants and Animals",
    "question": "Animals differ from plants mainly because animals",
    "image": "images/science/diagrams/q.png",
    "options": ["absorb minerals from the soil", "can move about and depend on other organisms for food", "carry out photosynthesis", "have cell walls and chlorophyll"],
    "correct": 1,
    "explanation": "Movement and the inability to make their own food are key differences between animals and plants."
  },
  {
    "topic": "Measurement: Concepts and Instruments",
    "question": "Which instrument is used to measure the volume of a liquid?",
    "image": "images/science/diagrams/q.png",
    "options": ["Vernier callipers", "Spring balance", "Barometer", "Graduated cylinder"],
    "correct": 3,
    "explanation": "A graduated cylinder is marked in millilitres and is used to measure liquid volume."
  },
  {
    "topic": "Measurement: Concepts and Instruments",
    "question": "Parallax error in reading a scale is avoided by",
    "image": "images/science/diagrams/q.png",
    "options": ["using the largest instrument available", "warming the instrument first", "placing the eye directly above the mark being read", "measuring twice and multiplying"],
    "correct": 2,
    "explanation": "Reading from an angle gives a wrong value, so the eye must be level with the mark on the scale."
  },
  {
    "topic": "Measurement: Concepts and Instruments",
    "question": "Which of the following is a correct precaution when using a mercury-in-glass thermometer?",
    "image": "images/science/diagrams/q.png",
    "options": ["shake the thermometer hard after use", "read the scale at eye level", "place it directly on a flame", "hold the bulb tightly while reading"],
    "correct": 1,
    "explanation": "The scale should be read at eye level to avoid parallax error and the thermometer must be handled carefully."
  },
  {
    "topic": "Systems of Units of Measurement",
    "question": "The SI base unit of length is the",
    "image": "images/science/diagrams/q.png",
    "options": ["metre", "millimetre", "kilometre", "centimetre"],
    "correct": 0,
    "explanation": "The metre (m) is the standard SI base unit of length."
  },
  {
    "topic": "Systems of Units of Measurement",
    "question": "Which of the following is a compound unit?",
    "image": "images/science/diagrams/q.png",
    "options": ["second", "kilogram", "kelvin", "metres per second (m/s)"],
    "correct": 3,
    "explanation": "A compound unit is formed from two or more base units, such as speed in m/s or density in kg/m³."
  },
  {
    "topic": "Systems of Units of Measurement",
    "question": "A speed of 108 km/h is the same as",
    "image": "images/science/diagrams/q.png",
    "options": ["300 m/s", "30 m/s", "3 m/s", "0.3 m/s"],
    "correct": 1,
    "explanation": "Divide by 3.6: 108/3.6 gives 30 m/s."
  },
  {
    "topic": "Concepts of Mass and Weight",
    "question": "Which statement correctly shows the difference between mass and weight?",
    "image": "images/science/diagrams/q.png",
    "options": ["Mass changes with location but weight does not", "Mass is the amount of matter, weight is the gravitational force on it", "Weight is the amount of matter, mass is a force", "Both mass and weight are measured in newtons"],
    "correct": 1,
    "explanation": "Mass is measured in kilograms and stays the same everywhere, while weight (W = m x g) is a force measured in newtons."
  },
  {
    "topic": "Concepts of Mass and Weight",
    "question": "Calculate the weight of a 5 kg object on earth if g = 10 m/s2.",
    "image": "images/science/diagrams/q.png",
    "options": ["0.5 N", "50 N", "100 N", "5 N"],
    "correct": 1,
    "explanation": "W = m x g = 5 x 10 = 50 N."
  },
  {
    "topic": "Concepts of Mass and Weight",
    "question": "A person weighs less on the moon than on earth mainly because",
    "image": "images/science/diagrams/q.png",
    "options": ["the person is farther from the earth", "the person has lost mass on the moon", "the moon has no atmosphere", "the pull of gravity on the moon is weaker"],
    "correct": 3,
    "explanation": "Weight depends on the gravitational pull of the body, and the moon's gravity is about one sixth of the earth's."
  },
  {
    "topic": "Density",
    "question": "Density of a substance is calculated using",
    "image": "images/science/diagrams/q.png",
    "options": ["volume divided by mass", "mass multiplied by volume", "weight divided by volume", "mass divided by volume"],
    "correct": 3,
    "explanation": "Density = mass / volume, and it is usually measured in g/cm3 or kg/m3."
  },
  {
    "topic": "Density",
    "question": "An object will float in a liquid if",
    "image": "images/science/diagrams/q.png",
    "options": ["it has no mass", "its density is less than the density of the liquid", "its density is greater than the density of the liquid", "it is made of metal"],
    "correct": 1,
    "explanation": "Objects less dense than the liquid float, while denser objects sink."
  },
  {
    "topic": "Density",
    "question": "The volume of an irregular solid such as a stone is best found using",
    "image": "images/science/diagrams/q.png",
    "options": ["a metre rule only", "a thermometer", "a beam balance only", "a measuring cylinder and the water displacement method"],
    "correct": 3,
    "explanation": "Note the rise in water level when the stone is submerged; the difference gives the volume of the stone."
  },
  {
    "topic": "Measurement of Motion (Speed, Distance and Time)",
    "question": "A car travels 100 m in 10 s. Its average speed is",
    "image": "images/science/diagrams/q.png",
    "options": ["100 m/s", "10 m/s", "1 m/s", "0.1 m/s"],
    "correct": 1,
    "explanation": "Speed = distance / time = 100 / 10 = 10 m/s."
  },
  {
    "topic": "Measurement of Motion (Speed, Distance and Time)",
    "question": "Which statement about speed and velocity is correct?",
    "image": "images/science/diagrams/q.png",
    "options": ["Velocity has direction but speed does not", "Both are vector quantities", "Speed has direction but velocity does not", "Velocity is always greater than speed"],
    "correct": 0,
    "explanation": "Speed is a scalar quantity (magnitude only), while velocity is a vector quantity (magnitude and direction)."
  },
  {
    "topic": "Measurement of Motion (Speed, Distance and Time)",
    "question": "On a distance-time graph, a horizontal straight line shows that the object is",
    "image": "images/science/diagrams/q.png",
    "options": ["accelerating", "stationary", "reversing direction", "moving at a steady speed"],
    "correct": 1,
    "explanation": "No change in distance over time means the object is not moving."
  },
  {
    "topic": "Kinetic Particle Theory",
    "question": "In a solid, the particles are",
    "image": "images/science/diagrams/q.png",
    "options": ["far apart and move freely in all directions", "completely at rest with no movement", "closely packed and vibrate about fixed positions", "close together and slide past each other"],
    "correct": 2,
    "explanation": "Solid particles have a fixed position and only vibrate, which gives solids a definite shape."
  },
  {
    "topic": "Kinetic Particle Theory",
    "question": "When a gas is heated, its particles",
    "image": "images/science/diagrams/q.png",
    "options": ["move faster and spread further apart", "become heavier", "turn into liquid particles", "move more slowly"],
    "correct": 0,
    "explanation": "Heating increases the kinetic energy of the particles, so they move faster and occupy a larger volume."
  },
  {
    "topic": "Kinetic Particle Theory",
    "question": "The expansion of a gas in a closed container when heated is best explained by the fact that",
    "image": "images/science/diagrams/q.png",
    "options": ["the container itself expands only", "the particles change into solids", "the gas gains mass", "the particles move faster and hit the walls more forcefully"],
    "correct": 3,
    "explanation": "Faster-moving particles strike the container walls more often and with greater force, raising the pressure."
  },
  {
    "topic": "Turning Effect of Forces",
    "question": "The turning effect of a force about a pivot is called",
    "image": "images/science/diagrams/q.png",
    "options": ["the pressure of the force", "the moment of the force", "the momentum of the force", "the weight of the force"],
    "correct": 1,
    "explanation": "Moment = force x perpendicular distance from the pivot, measured in newton-metres (Nm)."
  },
  {
    "topic": "Turning Effect of Forces",
    "question": "A spanner of length 0.2 m is used with a force of 50 N. The moment produced about the nut is",
    "image": "images/science/diagrams/q.png",
    "options": ["0.004 Nm", "250 Nm", "100 Nm", "10 Nm"],
    "correct": 3,
    "explanation": "Moment = force x distance = 50 x 0.2 = 10 Nm."
  },
  {
    "topic": "Turning Effect of Forces",
    "question": "A longer spanner is easier to turn because it",
    "image": "images/science/diagrams/q.png",
    "options": ["reduces the force to zero", "increases the moment produced by the same force", "increases the weight of the nut", "reduces the distance from the pivot"],
    "correct": 1,
    "explanation": "Moment increases with distance from the pivot, so a longer spanner gives a bigger turning effect."
  },
  {
    "topic": "Principle of Moments",
    "question": "The principle of moments states that for a body in equilibrium",
    "image": "images/science/diagrams/q.png",
    "options": ["the resultant force must be equal to the weight", "the sum of clockwise moments equals the sum of anticlockwise moments", "all forces must act in the same direction", "the body must be rotating slowly"],
    "correct": 1,
    "explanation": "At equilibrium the clockwise moments balance the anticlockwise moments about any pivot."
  },
  {
    "topic": "Principle of Moments",
    "question": "The two conditions for a body to be in equilibrium are that",
    "image": "images/science/diagrams/q.png",
    "options": ["the resultant force is zero and the resultant moment is zero", "the moments are unequal but opposite", "all forces are parallel and equal", "the body is at rest and has no weight"],
    "correct": 0,
    "explanation": "Equilibrium requires both no net force (no translation) and no net moment (no rotation)."
  },
  {
    "topic": "Principle of Moments",
    "question": "A uniform see-saw balances when",
    "image": "images/science/diagrams/q.png",
    "options": ["the pivot is always at the exact centre", "the clockwise moments about the pivot equal the anticlockwise moments", "both riders have exactly the same mass", "one side of the see-saw is longer"],
    "correct": 1,
    "explanation": "The see-saw balances when total clockwise moment equals total anticlockwise moment about the pivot."
  },
  {
    "topic": "Application of Moments",
    "question": "A wheelbarrow is an example of a device that works on the principle of",
    "image": "images/science/diagrams/q.png",
    "options": ["moments", "buoyancy", "radioactivity", "magnetism"],
    "correct": 0,
    "explanation": "The wheel acts as a pivot and the load and effort act at different distances, giving a mechanical advantage through moments."
  },
  {
    "topic": "Application of Moments",
    "question": "The stability of a body can be increased by",
    "image": "images/science/diagrams/q.png",
    "options": ["removing its base", "lowering its centre of gravity", "raising its centre of gravity", "increasing its height above the ground"],
    "correct": 1,
    "explanation": "A body with a low centre of gravity is harder to topple, which is why loading vehicles low improves stability."
  },
  {
    "topic": "Application of Moments",
    "question": "The handles of a pair of scissors are made longer than the blades so that",
    "image": "images/science/diagrams/q.png",
    "options": ["the scissors become heavier", "less effort is needed to cut through the material", "more effort is needed to cut", "the blades become weaker"],
    "correct": 1,
    "explanation": "A longer effort arm gives a greater moment about the pivot, so a smaller effort can overcome the same load."
  },
  {
    "topic": "Separation of Mixtures",
    "question": "Sand mixed with water can be separated by",
    "image": "images/science/diagrams/q.png",
    "options": ["filtration", "magnetism", "chromatography", "sublimation"],
    "correct": 0,
    "explanation": "Sand is insoluble and stays on the filter paper while water passes through as filtrate."
  },
  {
    "topic": "Separation of Mixtures",
    "question": "Chromatography is mainly used to",
    "image": "images/science/diagrams/q.png",
    "options": ["filter sand from water", "separate coloured dyes present in a mixture", "turn a liquid into a gas", "measure the density of a liquid"],
    "correct": 1,
    "explanation": "Chromatography separates the components of a coloured mixture as they travel at different rates through a medium."
  },
  {
    "topic": "Separation of Mixtures",
    "question": "Pure water is best obtained from a salt solution by",
    "image": "images/science/diagrams/q.png",
    "options": ["simple distillation", "evaporation to dryness", "filtration", "using a magnet"],
    "correct": 0,
    "explanation": "Distillation collects the water as vapour and condenses it, leaving the salt behind."
  },
  {
    "topic": "Laboratory Tests of Some Gases",
    "question": "Which gas turns lime water milky?",
    "image": "images/science/diagrams/q.png",
    "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    "correct": 3,
    "explanation": "Carbon dioxide reacts with lime water to form a white precipitate of calcium carbonate, making it milky."
  },
  {
    "topic": "Laboratory Tests of Some Gases",
    "question": "The gas that supports burning and relights a glowing splint is",
    "image": "images/science/diagrams/q.png",
    "options": ["Water vapour", "Carbon dioxide", "Hydrogen", "Oxygen"],
    "correct": 3,
    "explanation": "Oxygen supports combustion, so a glowing splint relights when it is lowered into a jar of oxygen."
  },
  {
    "topic": "Laboratory Tests of Some Gases",
    "question": "Hydrogen gas is identified by",
    "image": "images/science/diagrams/q.png",
    "options": ["relighting a glowing splint", "turning lime water milky", "burning with a yellow flame", "a squeaky pop sound when a lit splint is applied"],
    "correct": 3,
    "explanation": "A mixture of hydrogen and air burns with a characteristic squeaky pop sound."
  },
  {
    "topic": "The Water Cycle",
    "question": "The four main stages of the water cycle are",
    "image": "images/science/diagrams/q.png",
    "options": ["absorption, transpiration, photosynthesis and respiration", "evaporation, condensation, precipitation and collection", "filtration, distillation, evaporation and chromatography", "melting, freezing, boiling and cooling"],
    "correct": 1,
    "explanation": "Water evaporates, condenses into clouds, falls as precipitation and collects in rivers, lakes and the sea."
  },
  {
    "topic": "The Water Cycle",
    "question": "The main source of energy that drives the water cycle is",
    "image": "images/science/diagrams/q.png",
    "options": ["volcanoes", "the wind", "the sun", "the moon"],
    "correct": 2,
    "explanation": "Sunlight provides the heat needed to evaporate water from the surface of the earth."
  },
  {
    "topic": "The Water Cycle",
    "question": "The loss of water vapour from the leaves of plants during the water cycle is called",
    "image": "images/science/diagrams/q.png",
    "options": ["transpiration", "percolation", "precipitation", "condensation"],
    "correct": 0,
    "explanation": "Transpiration is the loss of water vapour through the stomata of leaves and it adds moisture to the air."
  },
  {
    "topic": "Definitions and Basic Ecological Concepts",
    "question": "The scientific study of the relationship between living organisms and their environment is called",
    "image": "images/science/diagrams/q.png",
    "options": ["taxonomy", "geology", "ecology", "physiology"],
    "correct": 2,
    "explanation": "Ecology (from the Greek oikos meaning home) deals with organisms and their surroundings."
  },
  {
    "topic": "Definitions and Basic Ecological Concepts",
    "question": "The total number of organisms of the same species living in the same area at the same time is a",
    "image": "images/science/diagrams/q.png",
    "options": ["population", "community", "habitat", "ecosystem"],
    "correct": 0,
    "explanation": "A population is all the members of one species in a given area; together with other species they form a community."
  },
  {
    "topic": "Definitions and Basic Ecological Concepts",
    "question": "The specific role and position that an organism occupies in its habitat is called its",
    "image": "images/science/diagrams/q.png",
    "options": ["biome", "biosphere", "population", "niche"],
    "correct": 3,
    "explanation": "A niche includes what an organism eats, where it lives and how it interacts with other organisms."
  },
  {
    "topic": "Biotic Components of an Ecosystem",
    "question": "Green plants in an ecosystem are described as producers because they",
    "image": "images/science/diagrams/q.png",
    "options": ["break down dead matter", "feed on other organisms", "are always carnivores", "make their own food using sunlight"],
    "correct": 3,
    "explanation": "Producers manufacture food by photosynthesis and pass energy on to consumers."
  },
  {
    "topic": "Biotic Components of an Ecosystem",
    "question": "Which of the following is a decomposer?",
    "image": "images/science/diagrams/q.png",
    "options": ["Cat", "Hawk", "Grasshopper", "Fungus"],
    "correct": 3,
    "explanation": "Decomposers such as fungi and bacteria break down dead remains and return nutrients to the soil."
  },
  {
    "topic": "Biotic Components of an Ecosystem",
    "question": "An animal that feeds only on plants is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["herbivore", "omnivore", "carnivore", "decomposer"],
    "correct": 0,
    "explanation": "Herbivores are primary consumers that eat producers."
  },
  {
    "topic": "Food Chains and Food Webs",
    "question": "In a food chain, the arrows show",
    "image": "images/science/diagrams/q.png",
    "options": ["the direction in which energy is transferred", "the amount of food available", "the direction the animal is moving", "how fast the organism travels"],
    "correct": 0,
    "explanation": "Arrows in a food chain point from the organism being eaten to the organism that eats it, showing energy flow."
  },
  {
    "topic": "Food Chains and Food Webs",
    "question": "Which of the following correctly represents a food chain?",
    "image": "images/science/diagrams/q.png",
    "options": ["Lizard - grass - grasshopper - hawk", "Hawk - lizard - grasshopper - grass", "Grass - hawk - lizard - grasshopper", "Grass - grasshopper - lizard - hawk"],
    "correct": 3,
    "explanation": "Energy passes from the producer to the primary consumer, then to secondary and tertiary consumers."
  },
  {
    "topic": "Food Chains and Food Webs",
    "question": "If all the grasshoppers are removed from a food chain, the immediate effect on the lizard is that it",
    "image": "images/science/diagrams/q.png",
    "options": ["grows larger because of more food", "produces more grass", "has no effect at all", "loses a source of food and may die or move away"],
    "correct": 3,
    "explanation": "Removing one link in a food chain reduces the food supply for the organisms that depend on it."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Technology is best defined as",
    "image": "images/science/diagrams/q.png",
    "options": ["the study of living things only", "the same thing as pure science", "the application of scientific knowledge to solve practical problems", "a collection of theories with no practical use"],
    "correct": 2,
    "explanation": "Science discovers knowledge; technology applies that knowledge to make tools, devices and services."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Which of the following is an example of technology in everyday life?",
    "image": "images/science/diagrams/q.png",
    "options": ["A chemical symbol", "A law of motion", "A biological classification", "A mobile phone"],
    "correct": 3,
    "explanation": "A mobile phone applies knowledge from physics and electronics to communication."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Which of the following is a disadvantage of technology?",
    "image": "images/science/diagrams/q.png",
    "options": ["It makes work easier", "It improves communication", "It improves health care", "It can cause pollution and unemployment"],
    "correct": 3,
    "explanation": "Although technology has many benefits, it can also bring pollution, waste and job displacement."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "A technological process is best described as",
    "image": "images/science/diagrams/q.png",
    "options": ["a natural cycle that cannot be changed", "a chemical reaction that happens by itself", "a series of planned steps used to convert resources into useful products", "an observation made without acting"],
    "correct": 2,
    "explanation": "Technological processes involve identifying a need, planning, carrying out steps and evaluating the product."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Which of these is a benefit of recycling?",
    "image": "images/science/diagrams/q.png",
    "options": ["It reduces waste and conserves raw materials", "It reduces the quality of materials", "It increases the amount of landfill", "It uses more energy every time"],
    "correct": 0,
    "explanation": "Recycling reuses materials such as paper, plastic and metal, saving energy and reducing pollution."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "The correct order of the steps in a simple technological process is",
    "image": "images/science/diagrams/q.png",
    "options": ["evaluate, make, test, design, identify the problem", "test, identify the problem, make, design, evaluate", "make, test, identify the problem, evaluate, design", "identify the problem, design, make, test, evaluate"],
    "correct": 3,
    "explanation": "Work begins with a problem or need, then a design, manufacture, testing and finally evaluation."
  },
  {
    "topic": "Magnifying Instruments",
    "question": "A hand lens of power 5x combined with an eyepiece of power 10x gives a total magnification of",
    "image": "images/science/diagrams/q.png",
    "options": ["15x", "5x", "50x", "0.5x"],
    "correct": 2,
    "explanation": "Total magnification = power of the lens x power of the eyepiece = 5 x 10 = 50x."
  },
  {
    "topic": "Magnifying Instruments",
    "question": "Which instrument is used to obtain a much larger magnification of very small objects?",
    "image": "images/science/diagrams/q.png",
    "options": ["Hand lens", "Light microscope", "Ruler", "Magnifying glass"],
    "correct": 1,
    "explanation": "A light microscope can magnify objects thousands of times, far more than a simple hand lens."
  },
  {
    "topic": "Magnifying Instruments",
    "question": "The correct unit for magnification is",
    "image": "images/science/diagrams/q.png",
    "options": ["newtons", "centimetres", "no unit, it is a ratio", "grams"],
    "correct": 2,
    "explanation": "Magnification compares the image size with the object size, so it has no units."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens is mainly used to",
    "image": "images/science/diagrams/q.png",
    "options": ["separate mixtures", "measure the length of an object", "produce light", "magnify small objects so that fine details are visible"],
    "correct": 3,
    "explanation": "A hand lens (convex lens) forms a magnified virtual image of nearby small objects."
  },
  {
    "topic": "The Hand Lens",
    "question": "Which of the following is a limitation of a hand lens?",
    "image": "images/science/diagrams/q.png",
    "options": ["it cannot be used in daylight", "it requires electricity to work", "it is always too heavy to carry", "it cannot magnify very small objects as much as a microscope does"],
    "correct": 3,
    "explanation": "A hand lens gives limited magnification and cannot show the fine internal structure of cells."
  },
  {
    "topic": "The Hand Lens",
    "question": "To use a hand lens correctly, the object should be",
    "image": "images/science/diagrams/q.png",
    "options": ["held against the eye directly", "placed just inside the focal length so the image appears upright and magnified", "placed behind a light source", "placed far away from the lens"],
    "correct": 1,
    "explanation": "When the object is within the focal length, the lens forms an upright, magnified virtual image."
  },
  {
    "topic": "The Microscope",
    "question": "Which part of a light microscope is used to control the amount of light reaching the specimen?",
    "image": "images/science/diagrams/q.png",
    "options": ["Nose piece", "Eyepiece", "Body tube", "Diaphragm"],
    "correct": 3,
    "explanation": "The diaphragm (and mirror or lamp) regulates how much light illuminates the specimen."
  },
  {
    "topic": "The Microscope",
    "question": "When focusing a microscope you should always",
    "image": "images/science/diagrams/q.png",
    "options": ["start with the high power objective lens", "turn the coarse adjustment with the high power lens in place", "start with the low power objective lens", "look through the eyepiece while lowering the stage"],
    "correct": 2,
    "explanation": "Starting on low power gives a wider field of view and prevents damage to the lens and slide."
  },
  {
    "topic": "The Microscope",
    "question": "Which of the following is a correct rule for caring for a microscope?",
    "image": "images/science/diagrams/q.png",
    "options": ["store it near a window in direct sunlight", "carry it with both hands, one on the arm and one under the base", "wipe the lenses with your fingers", "leave the high power lens in place after use"],
    "correct": 1,
    "explanation": "Carrying a microscope with two hands prevents it from being dropped or damaged."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Which of the following is found in a bacterium but not in a euglena?",
    "image": "images/science/diagrams/q.png",
    "options": ["a nucleus", "a cell wall", "the ability to move", "chloroplasts"],
    "correct": 1,
    "explanation": "Bacteria have a cell wall and no true nucleus, while euglena has chloroplasts and a nucleus."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Bacteria are useful to humans mainly because they",
    "image": "images/science/diagrams/q.png",
    "options": ["help in decomposition and in the production of foods such as yoghurt", "make soil more acidic", "produce sunlight", "cause all known diseases"],
    "correct": 0,
    "explanation": "Bacteria decay dead matter, fix nitrogen and are used to make yoghurt, cheese and antibiotics."
  },
  {
    "topic": "The Microscope",
    "question": "A useful way to increase the magnification of a microscope is to",
    "image": "images/science/diagrams/q.png",
    "options": ["move the slide further from the lens", "use the high power objective lens and adjust the focus carefully", "remove the eyepiece", "use a lower power lens only"],
    "correct": 1,
    "explanation": "The high power objective lens magnifies the specimen further; fine focus is then used to sharpen the image."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Plants that do not produce seeds but reproduce by spores are called",
    "image": "images/science/diagrams/q.png",
    "options": ["cryptogams", "phanerogams", "monocotyledons", "angiosperms"],
    "correct": 0,
    "explanation": "Cryptogams (cryptic marriage) include ferns, mosses and algae whose reproductive organs are hidden."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Plants that produce seeds enclosed within a fruit are",
    "image": "images/science/diagrams/q.png",
    "options": ["gymnosperms", "angiosperms", "bryophytes", "cryptogams"],
    "correct": 1,
    "explanation": "Angiosperms are flowering plants whose seeds are protected inside a fruit."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Which of the following is a characteristic of the plant kingdom?",
    "image": "images/science/diagrams/q.png",
    "options": ["all of them produce flowers", "they cannot make their own food", "their cells have cell walls made of cellulose", "all of them are aquatic"],
    "correct": 2,
    "explanation": "Cellulose cell walls and the ability to carry out photosynthesis are key features of plants."
  },
  {
    "topic": "Non-Flowering Plants",
    "question": "Which of the following is a non-flowering plant?",
    "image": "images/science/diagrams/q.png",
    "options": ["Cassava", "Maize", "Mango tree", "Fern"],
    "correct": 3,
    "explanation": "Ferns reproduce by spores and have no flowers or seeds."
  },
  {
    "topic": "Non-Flowering Plants",
    "question": "Ferns reproduce mainly by",
    "image": "images/science/diagrams/q.png",
    "options": ["bulbs", "flowers", "seeds inside fruit", "spores"],
    "correct": 3,
    "explanation": "Spores are produced in cases (sporangia) usually found under the leaves of the fern."
  },
  {
    "topic": "Non-Flowering Plants",
    "question": "Which statement correctly distinguishes non-flowering from flowering plants?",
    "image": "images/science/diagrams/q.png",
    "options": ["Non-flowering plants have no flowers and usually reproduce by spores", "Flowering plants never produce seeds", "Flowering plants reproduce only by spores", "Non-flowering plants always produce fruit"],
    "correct": 0,
    "explanation": "Flowering plants produce seeds in fruits, while non-flowering plants such as ferns and mosses use spores."
  },
  {
    "topic": "Study of Some Invertebrates",
    "question": "The phylum Arthropoda can be recognised by",
    "image": "images/science/diagrams/q.png",
    "options": ["a segmented body with jointed legs and an exoskeleton", "a single unsegmented sac", "a body with a backbone", "a soft body without segments"],
    "correct": 0,
    "explanation": "Arthropods (insects, spiders, crustaceans) have jointed appendages and a chitinous exoskeleton."
  },
  {
    "topic": "Study of Some Invertebrates",
    "question": "Which of the following is an arthropod?",
    "image": "images/science/diagrams/q.png",
    "options": ["Snail", "Hydra", "Earthworm", "Cockroach"],
    "correct": 3,
    "explanation": "A cockroach is an insect with jointed legs; earthworms are annelids and snails are molluscs."
  },
  {
    "topic": "Study of Some Invertebrates",
    "question": "An earthworm belongs to the phylum",
    "image": "images/science/diagrams/q.png",
    "options": ["Coelenterata", "Annelida", "Arthropoda", "Mollusca"],
    "correct": 1,
    "explanation": "Annelids have bodies divided into many ring-like segments."
  },
  {
    "topic": "Solutions, Saturation and Solubility Curve",
    "question": "The maximum amount of solute that dissolves in a given amount of solvent at a stated temperature is called its",
    "image": "images/science/diagrams/q.png",
    "options": ["saturation", "density", "concentration", "solubility"],
    "correct": 3,
    "explanation": "Solubility is usually expressed in grams of solute per 100 g of water at a particular temperature."
  },
  {
    "topic": "Solutions, Saturation and Solubility Curve",
    "question": "A solution that contains all the solute it can dissolve at a given temperature is",
    "image": "images/science/diagrams/q.png",
    "options": ["supersaturated", "saturated", "dilute", "unsaturated"],
    "correct": 1,
    "explanation": "A saturated solution holds no more solute at that temperature unless it is heated."
  },
  {
    "topic": "Solutions, Saturation and Solubility Curve",
    "question": "On a solubility curve, the solubility of most solid solutes",
    "image": "images/science/diagrams/q.png",
    "options": ["falls sharply then rises", "increases as temperature rises", "stays constant at all temperatures", "decreases as temperature rises"],
    "correct": 1,
    "explanation": "Heating gives particles more energy to dissolve, so the curve generally slopes upwards."
  },
  {
    "topic": "Crystallization",
    "question": "Crystallization is a method of separating a solute from a solution by",
    "image": "images/science/diagrams/q.png",
    "options": ["filtering the solution through paper", "shaking the solution vigorously", "cooling a hot saturated solution so that crystals form", "boiling the solution away completely"],
    "correct": 2,
    "explanation": "As the hot saturated solution cools, the dissolved solute comes out as pure, well-shaped crystals."
  },
  {
    "topic": "Crystallization",
    "question": "Which statement correctly distinguishes crystallization from simple evaporation?",
    "image": "images/science/diagrams/q.png",
    "options": ["Both methods always give exactly the same purity", "Simple evaporation always gives purer crystals", "Crystallization removes only the solvent completely", "Crystallization gives purer crystals and is not carried out to dryness"],
    "correct": 3,
    "explanation": "Evaporation to dryness traps impurities in the solid, while crystallization leaves impurities in the mother liquor."
  },
  {
    "topic": "Crystallization",
    "question": "Water of crystallisation is",
    "image": "images/science/diagrams/q.png",
    "options": ["water that is chemically combined with a crystal salt", "water held on the surface of a crystal", "the water used to dissolve the salt", "water that evaporates from a crystal"],
    "correct": 0,
    "explanation": "Blue copper(II) sulfate crystals contain water of crystallisation; heating drives it off and the crystals turn white."
  },
  {
    "topic": "Burning (Combustion)",
    "question": "The three things needed for burning are shown by the fire triangle:",
    "image": "images/science/diagrams/q.png",
    "options": ["water, air and soil", "light, sound and heat", "fuel, oxygen and heat", "carbon, hydrogen and oxygen"],
    "correct": 2,
    "explanation": "Remove any one side of the fire triangle and the fire will go out."
  },
  {
    "topic": "Burning (Combustion)",
    "question": "A fire caused by burning oil in a pan is best put out by",
    "image": "images/science/diagrams/q.png",
    "options": ["throwing water on it", "covering it with a lid to cut off the oxygen", "opening all the windows", "fanning it with a cloth"],
    "correct": 1,
    "explanation": "Water may spread burning oil; covering the pan starves the fire of oxygen."
  },
  {
    "topic": "Burning (Combustion)",
    "question": "Incomplete combustion of fuel produces",
    "image": "images/science/diagrams/q.png",
    "options": ["hydrogen gas", "oxygen and water only", "pure carbon dioxide only", "carbon monoxide and smoke"],
    "correct": 3,
    "explanation": "A limited supply of oxygen gives carbon monoxide and soot instead of carbon dioxide and water."
  },
  {
    "topic": "Rusting",
    "question": "The two conditions necessary for iron to rust are",
    "image": "images/science/diagrams/q.png",
    "options": ["presence of salt and acid only", "presence of nitrogen and water", "presence of oxygen and oil", "presence of water and oxygen"],
    "correct": 3,
    "explanation": "Rusting is the slow oxidation of iron in the presence of both moisture and air."
  },
  {
    "topic": "Rusting",
    "question": "Rusting of iron is prevented by",
    "image": "images/science/diagrams/q.png",
    "options": ["leaving the iron in damp air", "scratching off the protective coat", "keeping it in salty water", "painting or galvanising the surface"],
    "correct": 3,
    "explanation": "Paint blocks air and water from reaching the iron, while galvanising coats it with a more reactive zinc."
  },
  {
    "topic": "Rusting",
    "question": "An experiment to show that both air and water are needed for rusting uses",
    "image": "images/science/diagrams/q.png",
    "options": ["iron placed in strong acid", "iron left in the open only", "boiled water covered with oil to exclude air, and dry air with a drying agent", "iron heated in a crucible"],
    "correct": 2,
    "explanation": "Boiled water has no dissolved air and the oil layer keeps air out, so the nail does not rust."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Pressure is calculated using",
    "image": "images/science/diagrams/q.png",
    "options": ["P = F / A", "P = m x g", "P = F x A", "P = m / V"],
    "correct": 0,
    "explanation": "Pressure equals the force divided by the area over which it acts, measured in pascals (Pa)."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "A brick exerts a greater pressure on the ground when",
    "image": "images/science/diagrams/q.png",
    "options": ["it is cut into two halves", "it is placed on sand", "it lies flat on its largest face", "it stands on its smallest face"],
    "correct": 3,
    "explanation": "For the same force, a smaller area gives a greater pressure."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Atmospheric pressure is measured using a",
    "image": "images/science/diagrams/q.png",
    "options": ["manometer", "barometer", "anemometer", "hygrometer"],
    "correct": 1,
    "explanation": "A barometer measures the pressure of the atmosphere; it falls as altitude increases."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "When a tin with holes on all sides is pushed into water, water",
    "image": "images/science/diagrams/q.png",
    "options": ["enters only the bottom holes", "enters through all the holes", "does not enter at all", "enters only the top holes"],
    "correct": 1,
    "explanation": "Water pressure acts in all directions, so water pushes in through every hole."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "A simple water barometer shows a change in weather because",
    "image": "images/science/diagrams/q.png",
    "options": ["the glass expands", "the water evaporates", "atmospheric pressure changes with the weather", "the water changes colour"],
    "correct": 2,
    "explanation": "Rising pressure usually means fair weather, while falling pressure often brings rain."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "Which is a possible source of error in a pressure experiment?",
    "image": "images/science/diagrams/q.png",
    "options": ["using a clean tin", "reading the scale from an angle", "measuring the height twice", "using a standard ruler"],
    "correct": 1,
    "explanation": "Reading a scale at an angle gives a parallax error and an inaccurate result."
  },
  {
    "topic": "Natural Resources",
    "question": "Which of the following is a non-renewable natural resource?",
    "image": "images/science/diagrams/q.png",
    "options": ["Wind energy", "Forest products", "Solar energy", "Coal"],
    "correct": 3,
    "explanation": "Fuels such as coal, oil and natural gas take millions of years to form and are used up faster than they are made."
  },
  {
    "topic": "Natural Resources",
    "question": "Which of the following is a renewable resource?",
    "image": "images/science/diagrams/q.png",
    "options": ["Sunlight", "Petroleum", "Coal", "Natural gas"],
    "correct": 0,
    "explanation": "Renewable resources are replaced naturally within a short time."
  },
  {
    "topic": "Natural Resources",
    "question": "Non-renewable resources must be used carefully mainly because",
    "image": "images/science/diagrams/q.png",
    "options": ["they take millions of years to be formed and will run out", "they grow back every year", "they are free of cost", "they cause no pollution"],
    "correct": 0,
    "explanation": "Once used, non-renewable resources such as crude oil cannot be replaced within a human lifetime."
  },
  {
    "topic": "Desertification",
    "question": "Desertification is best defined as",
    "image": "images/science/diagrams/q.png",
    "options": ["the formation of a river in a desert", "the sudden flooding of farmland", "the gradual conversion of fertile land into dry, barren desert", "the cooling of the earth's surface"],
    "correct": 2,
    "explanation": "Desertification destroys farmland and is driven by drought, deforestation and over-farming."
  },
  {
    "topic": "Desertification",
    "question": "Which human activity is a major cause of desertification?",
    "image": "images/science/diagrams/q.png",
    "options": ["Crop rotation", "Terracing hillsides", "Planting trees regularly", "Over-grazing of land by livestock"],
    "correct": 3,
    "explanation": "Over-grazing removes plant cover, leaving soil exposed to wind and water erosion."
  },
  {
    "topic": "Desertification",
    "question": "Which of the following is the best way to prevent desertification?",
    "image": "images/science/diagrams/q.png",
    "options": ["Reforestation and controlled grazing", "Cutting down more trees", "Removing vegetation for fuel", "Burning the grassland"],
    "correct": 0,
    "explanation": "Planting trees and limiting the number of grazing animals protect the soil from erosion."
  },
  {
    "topic": "Food Contamination",
    "question": "Which of the following is a type of food contamination?",
    "image": "images/science/diagrams/q.png",
    "options": ["Storing food in covered containers", "Washing hands before cooking", "Chemical contamination from pesticides or cleaning fluids", "Keeping food in a cool place"],
    "correct": 2,
    "explanation": "Food may be contaminated by biological agents, chemicals or physical objects such as glass."
  },
  {
    "topic": "Food Contamination",
    "question": "Food poisoning is most likely to occur when food is",
    "image": "images/science/diagrams/q.png",
    "options": ["left in the warm for a long time before serving", "cooked thoroughly", "refrigerated promptly", "covered while being served"],
    "correct": 0,
    "explanation": "Warm, moist conditions allow bacteria to multiply rapidly on cooked food."
  },
  {
    "topic": "Food Contamination",
    "question": "Which practice helps to prevent food contamination?",
    "image": "images/science/diagrams/q.png",
    "options": ["Keeping raw and cooked foods separate", "Reusing cooking oil many times", "Tasting food with a used spoon", "Thawing meat on a warm counter"],
    "correct": 0,
    "explanation": "Separating raw and cooked food stops bacteria from raw food spreading to food that will not be cooked again."
  },
  {
    "topic": "Methods of Food Preservation",
    "question": "Which of the following preserves food by removing water?",
    "image": "images/science/diagrams/q.png",
    "options": ["Drying and salting", "Freezing", "Pasteurisation", "Canning"],
    "correct": 0,
    "explanation": "Bacteria need water to grow; drying and salting reduce the water available."
  },
  {
    "topic": "Methods of Food Preservation",
    "question": "Pasteurisation involves",
    "image": "images/science/diagrams/q.png",
    "options": ["sealing food in an airtight tin", "freezing food to below 0 degrees Celsius", "heating a liquid to a set temperature for a set time then cooling it quickly", "removing all the water from food"],
    "correct": 2,
    "explanation": "Pasteurisation kills harmful microbes in milk and drinks without destroying their taste."
  },
  {
    "topic": "Methods of Food Preservation",
    "question": "Which method of preservation is most suitable for extending the shelf life of meat for months?",
    "image": "images/science/diagrams/q.png",
    "options": ["Freezing", "Placing it in a warm cupboard", "Keeping it in the sun", "Leaving it uncovered"],
    "correct": 0,
    "explanation": "Freezing stops bacterial growth by lowering the temperature far below the level at which microbes can multiply."
  },
  {
    "topic": "Cellular Organisation",
    "question": "The correct order of biological organisation from simplest to most complex is",
    "image": "images/science/diagrams/q.png",
    "options": ["organ, cell, tissue, organism, organ system", "organism, organ system, organ, tissue, cell", "tissue, cell, organ system, organ, organism", "cell, tissue, organ, organ system, organism"],
    "correct": 3,
    "explanation": "Cells group into tissues, tissues into organs, organs into systems and systems into a whole organism."
  },
  {
    "topic": "Cellular Organisation",
    "question": "A group of similar cells performing the same function is called a",
    "image": "images/science/diagrams/q.png",
    "options": ["organ system", "tissue", "organism", "organ"],
    "correct": 1,
    "explanation": "Examples include muscle tissue, which is made of similar muscle cells working together."
  },
  {
    "topic": "Cellular Organisation",
    "question": "The heart is an example of",
    "image": "images/science/diagrams/q.png",
    "options": ["an organ", "an organ system", "a tissue", "a cell"],
    "correct": 0,
    "explanation": "The heart is made of several tissues (muscle, nerve, connective) working together as one unit."
  },
  {
    "topic": "Functions of Some Human Internal Organs",
    "question": "Which organ produces bile in the human body?",
    "image": "images/science/diagrams/q.png",
    "options": ["Kidney", "Stomach", "Pancreas", "Liver"],
    "correct": 3,
    "explanation": "The liver makes bile, which is stored in the gall bladder before being released into the small intestine."
  },
  {
    "topic": "Functions of Some Human Internal Organs",
    "question": "The organ that stores bile is the",
    "image": "images/science/diagrams/q.png",
    "options": ["Liver", "Pancreas", "Duodenum", "Gall bladder"],
    "correct": 3,
    "explanation": "Bile is produced by the liver and concentrated in the gall bladder."
  },
  {
    "topic": "Functions of Some Human Internal Organs",
    "question": "Which organ filters waste products such as urea from the blood?",
    "image": "images/science/diagrams/q.png",
    "options": ["Kidney", "Liver", "Heart", "Lung"],
    "correct": 0,
    "explanation": "The kidneys remove urea and excess salts, producing urine that is passed out of the body."
  },
  {
    "topic": "Sanitation",
    "question": "Which of the following is a component of good sanitation?",
    "image": "images/science/diagrams/q.png",
    "options": ["Keeping animals in the kitchen", "Proper disposal of human waste and a clean water supply", "Blocking all drainage channels", "Drinking untreated river water"],
    "correct": 1,
    "explanation": "Sanitation includes safe waste disposal, clean water, good drainage and clean surroundings."
  },
  {
    "topic": "Sanitation",
    "question": "Water can be made safe to drink at home by",
    "image": "images/science/diagrams/q.png",
    "options": ["filtering it through cloth only", "adding soil to it", "boiling it thoroughly", "leaving it in the sun for a minute"],
    "correct": 2,
    "explanation": "Boiling kills most disease-causing organisms present in the water."
  },
  {
    "topic": "Sanitation",
    "question": "Poor sanitation in a community leads mainly to",
    "image": "images/science/diagrams/q.png",
    "options": ["outbreaks of water-borne diseases such as cholera", "increased rainfall", "more sunlight", "improved soil fertility"],
    "correct": 0,
    "explanation": "Faecal matter reaching water and food spreads diseases such as cholera, typhoid and dysentery."
  },
  {
    "topic": "Types of Wastes",
    "question": "Which of the following is a non-biodegradable waste?",
    "image": "images/science/diagrams/q.png",
    "options": ["Peel of a banana", "Plastic bag", "Dead leaves", "Food leftovers"],
    "correct": 1,
    "explanation": "Non-biodegradable materials are not broken down by decomposers and remain in the environment for years."
  },
  {
    "topic": "Types of Wastes",
    "question": "Organic waste is waste that comes from",
    "image": "images/science/diagrams/q.png",
    "options": ["chemical factories only", "nuclear reactors", "living things and decays naturally", "plastics and metals only"],
    "correct": 2,
    "explanation": "Organic waste such as food scraps and leaves is broken down by micro-organisms."
  },
  {
    "topic": "Types of Wastes",
    "question": "Waste can be classified by source into",
    "image": "images/science/diagrams/q.png",
    "options": ["liquid and solid only", "domestic, industrial and agricultural waste", "toxic and non-toxic only", "hard and soft waste"],
    "correct": 1,
    "explanation": "Classifying waste by origin helps in choosing the correct method of disposal."
  },
  {
    "topic": "Methods of Disposal of Domestic Wastes",
    "question": "Which method of waste disposal turns organic waste into useful manure?",
    "image": "images/science/diagrams/q.png",
    "options": ["Dumping into the river", "Littering", "Open burning", "Composting"],
    "correct": 3,
    "explanation": "Composting allows micro-organisms to break down organic waste into a nutrient-rich soil conditioner."
  },
  {
    "topic": "Methods of Disposal of Domestic Wastes",
    "question": "The main disadvantage of burning refuse in the open is that it",
    "image": "images/science/diagrams/q.png",
    "options": ["produces useful manure", "pollutes the air with smoke and toxic gases", "saves land space permanently", "reduces the volume of waste safely"],
    "correct": 1,
    "explanation": "Open burning releases smoke, carbon monoxide and other pollutants into the air."
  },
  {
    "topic": "Methods of Disposal of Domestic Wastes",
    "question": "The safest method of disposing of hospital waste is by",
    "image": "images/science/diagrams/q.png",
    "options": ["burying it in the garden", "controlled incineration", "throwing it into a stream", "selling it to recycling plants"],
    "correct": 1,
    "explanation": "Contaminated medical waste must be burned at high temperature to destroy harmful organisms."
  },
  {
    "topic": "Types of Communication Technology",
    "question": "Communication technology is mainly concerned with",
    "image": "images/science/diagrams/q.png",
    "options": ["making clothes", "producing electricity", "sending and receiving information over distances", "measuring mass"],
    "correct": 2,
    "explanation": "Communication technology covers devices and systems that transfer information from one place to another."
  },
  {
    "topic": "Types of Communication Technology",
    "question": "Which of the following is a two-way means of communication?",
    "image": "images/science/diagrams/q.png",
    "options": ["Television broadcast", "Telephone conversation", "Newspaper advert", "Radio broadcast"],
    "correct": 1,
    "explanation": "Two-way communication allows a reply, unlike one-way media such as radio or television."
  },
  {
    "topic": "Types of Communication Technology",
    "question": "Optical fibre is preferred for carrying internet data mainly because it",
    "image": "images/science/diagrams/q.png",
    "options": ["cannot be damaged", "is always cheaper than copper", "carries more data with little interference", "uses more electricity"],
    "correct": 2,
    "explanation": "Fibre optic cables transmit light signals, giving high bandwidth and resistance to electrical interference."
  },
  {
    "topic": "Some Communication Devices",
    "question": "Which of the following is a communication device?",
    "image": "images/science/diagrams/q.png",
    "options": ["Spectrometer", "Mobile phone", "Ammeter", "Micrometer screw gauge"],
    "correct": 1,
    "explanation": "A mobile phone transmits voice, text and data; the others are measuring instruments."
  },
  {
    "topic": "Some Communication Devices",
    "question": "A radio communicates mainly by means of",
    "image": "images/science/diagrams/q.png",
    "options": ["sound travelling through solids", "cables only", "electromagnetic waves", "water pipes"],
    "correct": 2,
    "explanation": "Radio sets send and receive signals carried by radio waves."
  },
  {
    "topic": "Some Communication Devices",
    "question": "Which device is used to send electronic mail?",
    "image": "images/science/diagrams/q.png",
    "options": ["Barometer", "Computer with internet access", "Vernier callipers", "Fire extinguisher"],
    "correct": 1,
    "explanation": "A computer connected to the internet can send and receive electronic mail."
  },
  {
    "topic": "Computers: Parts and Functions",
    "question": "Which computer part is mainly responsible for processing data?",
    "image": "images/science/diagrams/q.png",
    "options": ["Monitor", "Central Processing Unit (CPU)", "Printer", "Keyboard"],
    "correct": 1,
    "explanation": "The CPU performs the calculations and carries out instructions given by software."
  },
  {
    "topic": "Computers: Parts and Functions",
    "question": "RAM is a type of computer memory that is",
    "image": "images/science/diagrams/q.png",
    "options": ["temporary and loses its contents when power is off", "used only to display images", "a type of output device", "permanent and never erased"],
    "correct": 0,
    "explanation": "RAM (Random Access Memory) is volatile working memory used while the computer is running."
  },
  {
    "topic": "Computers: Parts and Functions",
    "question": "A mouse and a keyboard are examples of",
    "image": "images/science/diagrams/q.png",
    "options": ["output devices", "input devices", "storage devices", "processing devices"],
    "correct": 1,
    "explanation": "Input devices feed data and instructions into the computer."
  },
  {
    "topic": "The Internet and Its Uses",
    "question": "Which of the following is a common use of the internet?",
    "image": "images/science/diagrams/q.png",
    "options": ["Splitting white light", "Cultivating crops", "Sending and receiving information worldwide", "Measuring the temperature of a body"],
    "correct": 2,
    "explanation": "The internet connects computers globally for communication, research and commerce."
  },
  {
    "topic": "The Internet and Its Uses",
    "question": "The World Wide Web differs from the internet in that it is",
    "image": "images/science/diagrams/q.png",
    "options": ["a system of pages and services that runs on the internet", "a type of computer hardware", "the physical cables connecting computers", "the same as an email address"],
    "correct": 0,
    "explanation": "The internet is the network itself; the Web is one of the services that runs on it."
  },
  {
    "topic": "The Internet and Its Uses",
    "question": "Which of the following is a safe way to protect yourself online?",
    "image": "images/science/diagrams/q.png",
    "options": ["Open attachments from unknown senders", "Share your password with friends", "Keep passwords private and do not open strange links", "Use the same password for every account"],
    "correct": 2,
    "explanation": "Strong, private passwords and caution with unknown links reduce the risk of online fraud."
  },
  {
    "topic": "Structure and Adaptations of the Tilapia Fish",
    "question": "Which of the following is an adaptation of the tilapia fish for life in water?",
    "image": "images/science/diagrams/q.png",
    "options": ["long legs for running on land", "streamlined body that reduces resistance in water", "dry scaly skin", "feathers for flying"],
    "correct": 1,
    "explanation": "A streamlined body lets the fish glide through water with less resistance."
  },
  {
    "topic": "Structure and Adaptations of the Tilapia Fish",
    "question": "The swim bladder helps the tilapia to",
    "image": "images/science/diagrams/q.png",
    "options": ["absorb oxygen from water", "control its buoyancy and remain at a certain depth", "sense vibrations in the water", "propel itself forward rapidly"],
    "correct": 1,
    "explanation": "The swim bladder fills with gas so that the fish can stay suspended without swimming constantly."
  },
  {
    "topic": "Structure and Adaptations of the Tilapia Fish",
    "question": "Gills are adapted for breathing in water because they",
    "image": "images/science/diagrams/q.png",
    "options": ["are covered by scales", "are made of bone", "are used for swimming", "have a large surface area and a rich blood supply for dissolving oxygen"],
    "correct": 3,
    "explanation": "Water passes over the thin, moist gill surfaces where dissolved oxygen diffuses into the blood."
  },
  {
    "topic": "Structure and Adaptations of the Toad",
    "question": "Which feature distinguishes the skin of a toad from that of a lizard?",
    "image": "images/science/diagrams/q.png",
    "options": ["Both have exactly the same covering", "The toad has moist, glandular skin while a lizard has dry scaly skin", "The toad has scales and the lizard has feathers", "The toad skin is dry and horny"],
    "correct": 1,
    "explanation": "Toads keep their skin moist for auxiliary respiration, while reptiles have waterproof scales to prevent water loss."
  },
  {
    "topic": "Structure and Adaptations of the Toad",
    "question": "A toad is adapted to life on land mainly by its",
    "image": "images/science/diagrams/q.png",
    "options": ["gills and fins for swimming", "feathers and wings", "streamlined body for fast swimming", "strong hind limbs for jumping and lungs for breathing air"],
    "correct": 3,
    "explanation": "Powerful hind legs allow quick escape on land and lungs allow it to breathe air."
  },
  {
    "topic": "Structure and Adaptations of the Toad",
    "question": "The life cycle of a toad begins with",
    "image": "images/science/diagrams/q.png",
    "options": ["eggs laid on dry land", "hatching from a shelled egg on land", "eggs laid in water that hatch into tadpoles", "live young that suckle"],
    "correct": 2,
    "explanation": "Toads lay jelly-like eggs in water; the tadpoles that hatch later develop legs and lungs."
  },
  {
    "topic": "Structure and Adaptations of the Agama Lizard",
    "question": "The agama lizard basks in the sun mainly to",
    "image": "images/science/diagrams/q.png",
    "options": ["keep its skin moist", "attract insects", "raise its body temperature because it is cold-blooded", "absorb food through its skin"],
    "correct": 2,
    "explanation": "Reptiles are ectothermic, so they rely on external heat sources such as sunlight to warm up."
  },
  {
    "topic": "Structure and Adaptations of the Agama Lizard",
    "question": "Which adaptation helps the agama lizard to grip branches and rough surfaces?",
    "image": "images/science/diagrams/q.png",
    "options": ["Webbed feet", "Claws on its digits", "Hooves", "Suction pads only"],
    "correct": 1,
    "explanation": "Sharp claws on the digits let the lizard climb and hold onto bark and stones."
  },
  {
    "topic": "Structure and Adaptations of the Agama Lizard",
    "question": "Compared with the skin of a toad, the skin of an agama is",
    "image": "images/science/diagrams/q.png",
    "options": ["moist and glandular", "dry and covered with scales", "smooth and without covering", "thin and transparent"],
    "correct": 1,
    "explanation": "Scales prevent water loss and protect the lizard in dry terrestrial habitats."
  },
  {
    "topic": "Structure and Adaptations of Birds",
    "question": "Which of the following is an adaptation of birds for flight?",
    "image": "images/science/diagrams/q.png",
    "options": ["Heavy solid bones for strength", "Gills for breathing", "Scales on the wings", "Hollow bones that make the body light"],
    "correct": 3,
    "explanation": "Hollow, air-filled bones reduce weight while still providing strength for the flight muscles."
  },
  {
    "topic": "Structure and Adaptations of Birds",
    "question": "Feathers are important for flight because they",
    "image": "images/science/diagrams/q.png",
    "options": ["increase the weight of the bird", "help the bird to swim only", "keep the bird underwater", "form a large, airtight surface that pushes against the air"],
    "correct": 3,
    "explanation": "The wings (remiges) form an airtight surface that gives the lift needed for flight."
  },
  {
    "topic": "Structure and Adaptations of Birds",
    "question": "A hawk has sharp curved claws while a duck has webbed feet because",
    "image": "images/science/diagrams/q.png",
    "options": ["each bird is adapted to its own feeding habit and habitat", "both birds live in water", "ducks hunt small animals", "hawks eat grass"],
    "correct": 0,
    "explanation": "The hawk's talons are for seizing prey, while the duck's webbed feet are for swimming."
  },
  {
    "topic": "Structure and Adaptations of a Mammal (Rat)",
    "question": "Which of the following is a characteristic of mammals?",
    "image": "images/science/diagrams/q.png",
    "options": ["They are all herbivores", "They have feathers and wings", "They lay eggs in water", "They have hair or fur and feed their young with milk"],
    "correct": 3,
    "explanation": "Hair/fur and mammary glands that produce milk are the defining features of mammals."
  },
  {
    "topic": "Structure and Adaptations of a Mammal (Rat)",
    "question": "The rat is well adapted to its way of life because it",
    "image": "images/science/diagrams/q.png",
    "options": ["has strong incisors for gnawing and keen senses for avoiding danger", "lives only in water", "cannot see at all", "has gills for breathing"],
    "correct": 0,
    "explanation": "Continuously growing incisors allow gnawing and sharp senses help the rat detect predators."
  },
  {
    "topic": "Structure and Adaptations of a Mammal (Rat)",
    "question": "Animals that give birth to live young and suckle them are said to be",
    "image": "images/science/diagrams/q.png",
    "options": ["ovoviviparous", "viviparous", "herbivorous", "oviparous"],
    "correct": 1,
    "explanation": "Viviparous animals produce live young, whereas oviparous animals lay eggs."
  },
  {
    "topic": "Comparison of Classes of Vertebrates",
    "question": "Which two classes of vertebrates are both cold-blooded?",
    "image": "images/science/diagrams/q.png",
    "options": ["Birds and mammals", "Reptiles and amphibians", "Mammals and reptiles", "Fish and birds"],
    "correct": 1,
    "explanation": "Fish, amphibians and reptiles cannot regulate their own body temperature; birds and mammals can."
  },
  {
    "topic": "Comparison of Classes of Vertebrates",
    "question": "One key difference between amphibians and reptiles is that",
    "image": "images/science/diagrams/q.png",
    "options": ["amphibians have moist skin and lay eggs in water, reptiles have dry scaly skin and lay eggs on land", "amphibians are warm-blooded and reptiles are cold-blooded", "reptiles live only in water", "reptiles have moist skin and amphibians have feathers"],
    "correct": 0,
    "explanation": "Amphibians depend on water for reproduction and lose water through their skin, which reptiles prevent with scales."
  },
  {
    "topic": "Comparison of Classes of Vertebrates",
    "question": "Fish are restricted to aquatic habitats mainly because they",
    "image": "images/science/diagrams/q.png",
    "options": ["have feathers", "have lungs like mammals", "cannot move on land", "breathe through gills that collapse out of water"],
    "correct": 3,
    "explanation": "Gills collapse out of water so fish cannot breathe on land, and the density of water supports the fish's heavy body."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "In the nuclear model of the atom, protons and neutrons are found",
    "image": "images/science/diagrams/q.png",
    "options": ["in the electron cloud only", "orbiting around the nucleus", "in the nucleus at the centre of the atom", "outside the atom entirely"],
    "correct": 2,
    "explanation": "The nucleus contains protons and neutrons; electrons occupy the space around it."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "The electric charge carried by a neutron is",
    "image": "images/science/diagrams/q.png",
    "options": ["zero", "negative", "both positive and negative", "positive"],
    "correct": 0,
    "explanation": "Neutrons are neutral particles, while protons are positive and electrons are negative."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "An ion is formed when an atom",
    "image": "images/science/diagrams/q.png",
    "options": ["loses neutrons", "gains or loses electrons", "gains or loses protons from its nucleus", "splits its nucleus"],
    "correct": 1,
    "explanation": "Only electrons are transferred in ordinary chemical changes; the number of protons stays the same."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Elements in the periodic table are arranged in order of increasing",
    "image": "images/science/diagrams/q.png",
    "options": ["symbol size", "number of neutrons", "atomic number", "mass number only"],
    "correct": 2,
    "explanation": "The periodic table is arranged by atomic number, which is the number of protons in the nucleus."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Elements in the same vertical column of the periodic table are called",
    "image": "images/science/diagrams/q.png",
    "options": ["an orbit", "a period", "a shell", "a group"],
    "correct": 3,
    "explanation": "A group (vertical) contains elements with the same number of outer electrons; a period is a horizontal row."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "An element in Group 1 of the periodic table will have",
    "image": "images/science/diagrams/q.png",
    "options": ["two electrons in its outer shell", "no electrons at all", "eight electrons in its outer shell", "one electron in its outer shell"],
    "correct": 3,
    "explanation": "Group number corresponds to the number of electrons in the outermost shell."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "The electron arrangement of an element with atomic number 11 is",
    "image": "images/science/diagrams/q.png",
    "options": ["2, 9", "1, 8, 2", "8, 2, 1", "2, 8, 1"],
    "correct": 3,
    "explanation": "Eleven electrons fill the first shell with 2, the second with 8 and leave 1 in the third shell."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "Sodium forms a Na+ ion because it",
    "image": "images/science/diagrams/q.png",
    "options": ["gains eight electrons", "gains one electron", "loses its one outer electron to achieve a stable arrangement", "loses all its electrons"],
    "correct": 2,
    "explanation": "Atoms lose or gain electrons to reach a full outer shell, which is the stable noble gas arrangement."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "An element with a full outer shell of electrons is",
    "image": "images/science/diagrams/q.png",
    "options": ["a metal at all times", "very reactive and always a gas", "chemically unreactive", "likely to form many compounds"],
    "correct": 2,
    "explanation": "Noble gases have stable electron arrangements and so rarely react with other elements."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "An element has atomic number 17 and mass number 35. The number of neutrons is",
    "image": "images/science/diagrams/q.png",
    "options": ["35", "17", "52", "18"],
    "correct": 3,
    "explanation": "Neutrons = mass number - atomic number = 35 - 17 = 18."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "The atomic number of an element is the number of",
    "image": "images/science/diagrams/q.png",
    "options": ["protons in its nucleus", "nucleons in its atom", "electrons in all shells", "neutrons in its nucleus"],
    "correct": 0,
    "explanation": "The atomic number uniquely identifies an element; it equals the number of protons."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "The mass number of an atom is the total number of",
    "image": "images/science/diagrams/q.png",
    "options": ["only the electrons", "neutrons and electrons", "protons and neutrons", "protons and electrons"],
    "correct": 2,
    "explanation": "Mass number = number of protons + number of neutrons in the nucleus."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes of the same element have",
    "image": "images/science/diagrams/q.png",
    "options": ["the same number of protons but different numbers of neutrons", "the same number of neutrons only", "different chemical symbols", "different numbers of protons"],
    "correct": 0,
    "explanation": "Isotopes share the atomic number but differ in mass number."
  },
  {
    "topic": "Isotopes",
    "question": "Which of the following is a use of radioisotopes?",
    "image": "images/science/diagrams/q.png",
    "options": ["building bridges", "making food sweeter", "treating cancer and radiocarbon dating", "producing electricity in cars"],
    "correct": 2,
    "explanation": "Radioisotopes are used in medicine, industry and archaeology for dating and tracing."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes of an element have similar chemical properties because they",
    "image": "images/science/diagrams/q.png",
    "options": ["have the same number of outer electrons", "have different masses", "have the same number of neutrons", "have different atomic numbers"],
    "correct": 0,
    "explanation": "Chemical behaviour depends on the electron arrangement, which is the same for all isotopes of an element."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Which of the following is a physical property that distinguishes metals from non-metals?",
    "image": "images/science/diagrams/q.png",
    "options": ["Non-metals conduct electricity better", "Non-metals are always shiny", "Metals are good conductors of heat and electricity", "Metals are always gases"],
    "correct": 2,
    "explanation": "Metals are lustrous, malleable, ductile and good conductors; non-metals are generally the opposite."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Whether an element is a metal or a non-metal depends mainly on",
    "image": "images/science/diagrams/q.png",
    "options": ["its colour", "its symbol on the periodic table", "the number of electrons in its outer shell", "the number of neutrons"],
    "correct": 2,
    "explanation": "Elements with 1 to 3 outer electrons tend to be metals, while those with 5 to 7 tend to be non-metals."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Which of the following is a non-metal?",
    "image": "images/science/diagrams/q.png",
    "options": ["Sulphur", "Copper", "Aluminium", "Iron"],
    "correct": 0,
    "explanation": "Sulphur is a solid non-metal; iron, copper and aluminium are metals."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "A compound formed from aluminium and oxygen is correctly named",
    "image": "images/science/diagrams/q.png",
    "options": ["Aluminium hydroxide", "Aluminium sulphate", "Aluminium oxide", "Aluminium chloride"],
    "correct": 2,
    "explanation": "Aluminium has a valency of +3 and oxygen -2, so the compound is Al2O3 (aluminium oxide)."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "The formula of sodium chloride is",
    "image": "images/science/diagrams/q.png",
    "options": ["NaCl2", "Na2Cl", "NaCl", "Na2Cl2"],
    "correct": 2,
    "explanation": "Sodium has valency +1 and chloride -1, so the ions combine in a 1:1 ratio."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "Ionic compounds are formed between",
    "image": "images/science/diagrams/q.png",
    "options": ["two metals only", "noble gases", "two non-metals only", "a metal and a non-metal"],
    "correct": 3,
    "explanation": "Metal atoms transfer electrons to non-metal atoms, forming oppositely charged ions."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The correct formula of calcium chloride (Ca2+ and Cl-) is",
    "image": "images/science/diagrams/q.png",
    "options": ["CaCl", "CaCl2", "Ca2Cl", "Ca2Cl2"],
    "correct": 1,
    "explanation": "Two chloride ions are needed to balance one calcium ion, giving CaCl2."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of aluminium sulphate (Al3+ and SO4 2-) is",
    "image": "images/science/diagrams/q.png",
    "options": ["Al3(SO4)2", "Al(SO4)2", "AlSO4", "Al2(SO4)3"],
    "correct": 3,
    "explanation": "Crossing the valencies gives Al2(SO4)3; the sulphate ion is placed in brackets because of the subscript 3."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "Parentheses (brackets) are used in a chemical formula when",
    "image": "images/science/diagrams/q.png",
    "options": ["the compound is an element", "the formula has no oxygen", "the element is a metal", "more than one polyatomic ion is needed"],
    "correct": 3,
    "explanation": "Brackets show that the whole polyatomic ion is multiplied, as in Ca(OH)2."
  },
  {
    "topic": "Chemical Equations",
    "question": "In a chemical equation, the substances on the left of the arrow are called",
    "image": "images/science/diagrams/q.png",
    "options": ["solvents", "reactants", "catalysts", "products"],
    "correct": 1,
    "explanation": "Reactants are the starting materials and products are the substances formed."
  },
  {
    "topic": "Chemical Equations",
    "question": "A chemical equation is balanced to satisfy the law of",
    "image": "images/science/diagrams/q.png",
    "options": ["dulong and petit", "conservation of mass", "multiple proportions", "conservation of energy"],
    "correct": 1,
    "explanation": "Atoms are neither created nor destroyed, so the number of each type of atom must be the same on both sides."
  },
  {
    "topic": "Chemical Equations",
    "question": "The balanced symbol equation for the reaction between hydrogen and oxygen to form water is",
    "image": "images/science/diagrams/q.png",
    "options": ["2H2 + O2 -> H2O", "2H2 + O2 -> 2H2O", "H2 + O2 -> H2O", "H2 + 2O2 -> 2H2O"],
    "correct": 1,
    "explanation": "Balancing gives equal numbers of H and O atoms on both sides."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Ionic bonding involves",
    "image": "images/science/diagrams/q.png",
    "options": ["the sharing of electron pairs between atoms", "the sharing of protons", "the transfer of electrons from one atom to another", "the exchange of neutrons"],
    "correct": 2,
    "explanation": "Electrons move from a metal atom to a non-metal atom, producing oppositely charged ions that attract."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Sodium chloride conducts electricity when molten but not when solid because",
    "image": "images/science/diagrams/q.png",
    "options": ["electrons move freely in the solid", "it changes into a metal", "there are no ions in the solid", "the ions are free to move when molten but fixed in the solid"],
    "correct": 3,
    "explanation": "Conduction in ionic compounds requires mobile ions, which only occur when the lattice is melted or dissolved."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "A covalent bond is formed between",
    "image": "images/science/diagrams/q.png",
    "options": ["a metal and a non-metal", "two non-metal atoms that share a pair of electrons", "two metal atoms", "an atom and a neutron"],
    "correct": 1,
    "explanation": "Non-metals share electrons so that each atom achieves a full outer shell."
  },
  {
    "topic": "Acid-Base Indicators",
    "question": "Blue litmus paper turns red in the presence of",
    "image": "images/science/diagrams/q.png",
    "options": ["pure water", "an alkali", "a neutral solution", "an acid"],
    "correct": 3,
    "explanation": "Acids turn blue litmus red; alkalis turn red litmus blue."
  },
  {
    "topic": "Acid-Base Indicators",
    "question": "Universal indicator is used to show",
    "image": "images/science/diagrams/q.png",
    "options": ["the mass of a solution", "the temperature of a solution", "the volume of a solution", "the pH value and therefore the strength of a solution"],
    "correct": 3,
    "explanation": "Universal indicator gives a colour scale from red (strong acid) through green (neutral) to purple (strong alkali)."
  },
  {
    "topic": "Acid-Base Indicators",
    "question": "Which of the following is a natural acid-base indicator?",
    "image": "images/science/diagrams/q.png",
    "options": ["Universal indicator", "Phenolphthalein", "Litmus from lichen", "Methyl orange"],
    "correct": 2,
    "explanation": "Litmus is obtained from lichens; the others are synthetic indicators."
  },
  {
    "topic": "Salts and Their Types",
    "question": "A salt formed by the complete replacement of all replaceable hydrogen atoms of an acid is a",
    "image": "images/science/diagrams/q.png",
    "options": ["acid salt", "metallic salt", "normal salt", "basic salt"],
    "correct": 2,
    "explanation": "Example: NaCl from HCl and NaOH is a normal salt."
  },
  {
    "topic": "Salts and Their Types",
    "question": "An example of an acid salt is",
    "image": "images/science/diagrams/q.png",
    "options": ["sodium hydrogen sulphate", "sodium chloride", "calcium nitrate", "potassium sulphate"],
    "correct": 0,
    "explanation": "Acid salts still contain replaceable hydrogen atoms, such as NaHSO4."
  },
  {
    "topic": "Salts and Their Types",
    "question": "Sodium chloride is used mainly for",
    "image": "images/science/diagrams/q.png",
    "options": ["producing light", "making plastics", "preserving and seasoning food", "making roads slippery only"],
    "correct": 2,
    "explanation": "Common salt is a food preservative and seasoning, and is also a raw material for other chemicals."
  },
  {
    "topic": "Preparation of Salts (Soluble and Insoluble)",
    "question": "A soluble salt can be prepared from an insoluble base by",
    "image": "images/science/diagrams/q.png",
    "options": ["adding water to the base", "reacting it with a dilute acid and filtering off the excess base", "evaporating the base alone", "electrolysis only"],
    "correct": 1,
    "explanation": "The base dissolves in the acid until no more reacts; the excess base is then filtered off."
  },
  {
    "topic": "Preparation of Salts (Soluble and Insoluble)",
    "question": "Titration is used when preparing a salt from",
    "image": "images/science/diagrams/q.png",
    "options": ["a strong acid and a strong alkali", "an insoluble base and any acid", "water and sand", "a metal and a gas"],
    "correct": 0,
    "explanation": "Titration measures exactly the volumes needed so that no excess acid or alkali remains."
  },
  {
    "topic": "Preparation of Salts (Soluble and Insoluble)",
    "question": "An insoluble salt such as barium sulphate is best prepared by",
    "image": "images/science/diagrams/q.png",
    "options": ["distillation", "precipitation from the reaction of two soluble solutions", "simple evaporation", "filtration of a mixture"],
    "correct": 1,
    "explanation": "Mixing two soluble reagents produces the insoluble salt, which is then filtered and washed."
  },
  {
    "topic": "Electrolysis of Acidified Water",
    "question": "During the electrolysis of acidified water, hydrogen is collected at the",
    "image": "images/science/diagrams/q.png",
    "options": ["battery terminal", "electrolyte only", "anode", "cathode"],
    "correct": 3,
    "explanation": "Hydrogen ions are reduced at the cathode and hydroxide ions oxidised at the anode."
  },
  {
    "topic": "Electrolysis of Acidified Water",
    "question": "The ratio by volume of hydrogen to oxygen produced by electrolysis of water is",
    "image": "images/science/diagrams/q.png",
    "options": ["1 : 2", "2 : 1", "1 : 1", "3 : 1"],
    "correct": 1,
    "explanation": "Water is H2O, so twice as much hydrogen as oxygen is released."
  },
  {
    "topic": "Electrolysis of Acidified Water",
    "question": "The gas collected at the anode during the electrolysis of water is tested with a glowing splint and",
    "image": "images/science/diagrams/q.png",
    "options": ["it relights, showing oxygen", "it gives a squeaky pop, showing hydrogen", "it turns lime water milky", "it is odourless and invisible"],
    "correct": 0,
    "explanation": "Oxygen supports combustion, so a glowing splint relights in it."
  },
  {
    "topic": "Purification of Water",
    "question": "The first stage in purifying water for public supply is usually",
    "image": "images/science/diagrams/q.png",
    "options": ["freezing the water", "distilling the whole supply", "adding sugar", "filtration through sand and gravel beds"],
    "correct": 3,
    "explanation": "Filtration removes suspended dirt and particles before disinfection."
  },
  {
    "topic": "Purification of Water",
    "question": "Chlorination of water is carried out mainly to",
    "image": "images/science/diagrams/q.png",
    "options": ["add flavour", "remove dissolved minerals", "kill disease-causing micro-organisms", "raise the temperature"],
    "correct": 2,
    "explanation": "Chlorine disinfects the water and leaves a small residue that continues to protect it."
  },
  {
    "topic": "Purification of Water",
    "question": "Which of the following is a simple method of making water safe at home?",
    "image": "images/science/diagrams/q.png",
    "options": ["Boiling it for several minutes", "Leaving it in a bucket overnight", "Adding sand to it", "Straining it through a cloth"],
    "correct": 0,
    "explanation": "Boiling kills bacteria, viruses and other pathogens that cause water-borne diseases."
  },
  {
    "topic": "Advantages and Disadvantages of Hard and Soft Water",
    "question": "Hard water is inconvenient for laundry mainly because",
    "image": "images/science/diagrams/q.png",
    "options": ["it freezes easily", "it makes soap lather too quickly", "it has no dissolved minerals", "it reacts with soap to form scum"],
    "correct": 3,
    "explanation": "Calcium and magnesium ions precipitate soap as scum, wasting soap and graying clothes."
  },
  {
    "topic": "Advantages and Disadvantages of Hard and Soft Water",
    "question": "Which of the following is an advantage of hard water?",
    "image": "images/science/diagrams/q.png",
    "options": ["It wastes soap completely", "It contains no minerals", "It cannot be used for drinking", "It is good for building strong bones and teeth"],
    "correct": 3,
    "explanation": "The dissolved calcium and magnesium in hard water help the body build strong bones and teeth."
  },
  {
    "topic": "Advantages and Disadvantages of Hard and Soft Water",
    "question": "Temporary hardness in water can be removed by",
    "image": "images/science/diagrams/q.png",
    "options": ["boiling the water", "adding salt", "freezing the water", "filtering through paper"],
    "correct": 0,
    "explanation": "Boiling decomposes the soluble hydrogencarbonates into insoluble carbonates that can be filtered off."
  },
  {
    "topic": "Project Work",
    "question": "The first step in planning a science project is to",
    "image": "images/science/diagrams/q.png",
    "options": ["identify a problem or research question", "draw the final graph", "write the conclusion", "submit the report"],
    "correct": 0,
    "explanation": "Every project begins by defining the problem or question to be investigated."
  },
  {
    "topic": "Project Work",
    "question": "In an investigation, the variable that is deliberately changed is called the",
    "image": "images/science/diagrams/q.png",
    "options": ["dependent variable", "control variable", "constant variable", "independent variable"],
    "correct": 3,
    "explanation": "The independent variable is changed by the investigator; the dependent variable is what is measured."
  },
  {
    "topic": "Project Work",
    "question": "A complete project report should include",
    "image": "images/science/diagrams/q.png",
    "options": ["photographs only", "a list of classmates", "aim, method, results, conclusion and references", "only the final answer"],
    "correct": 2,
    "explanation": "A good report states the aim, apparatus, method, observations, results, conclusion and sources of information."
  },
  /* ============ GRADE 7: TECHNOLOGY ============ */
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Technology is best defined as",
    "image": "",
    "options": [
      "The study of living things only",
      "The application of scientific knowledge to solve practical problems",
      "The study of stars and planets",
      "The classification of plants and animals"
    ],
    "correct": 1,
    "explanation": "Technology applies scientific ideas to improve lives and meet human needs."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Which of the following is a use of technology?",
    "image": "",
    "options": [
      "Destroying farmland",
      "Improving transport and communication systems",
      "Spreading disease",
      "Wasting natural resources"
    ],
    "correct": 1,
    "explanation": "Technology improves transport, communication, agriculture and construction."
  },
  {
    "topic": "Technological Processes - Recycling",
    "question": "Recycling is the process of",
    "image": "",
    "options": [
      "Burning all waste",
      "Collecting and processing waste into new materials",
      "Burying waste in rivers",
      "Leaving waste to rot"
    ],
    "correct": 1,
    "explanation": "Recycling collects waste materials and turns them into new materials."
  },
  {
    "topic": "Technological Processes - Recycling",
    "question": "Which of these is NOT an advantage of recycling?",
    "image": "",
    "options": [
      "Uses less energy",
      "Creates more pollution than making new products",
      "Reduces landfill sites",
      "Conserves natural resources"
    ],
    "correct": 1,
    "explanation": "Recycling creates less pollution than manufacturing new products."
  },
  /* ============ GRADE 7: SENSE ORGANS ============ */
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Which part of the eye controls the amount of light entering?",
    "image": "",
    "options": [
      "Retina",
      "Iris",
      "Optic nerve",
      "Cornea"
    ],
    "correct": 1,
    "explanation": "The iris controls the size of the pupil and the amount of light entering the eye."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "The image is formed on the",
    "image": "",
    "options": [
      "Cornea",
      "Iris",
      "Retina",
      "Lens"
    ],
    "correct": 2,
    "explanation": "The retina is the light-sensitive layer where the image is formed."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Long-sightedness is corrected using",
    "image": "",
    "options": [
      "Concave lenses",
      "Convex lenses",
      "Cylindrical lenses",
      "No lenses"
    ],
    "correct": 1,
    "explanation": "Long-sightedness (hypermetropia) is corrected with convex (converging) lenses."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "Which part of the ear converts sound vibrations into nerve impulses?",
    "image": "",
    "options": [
      "Pinna",
      "Eardrum",
      "Cochlea",
      "Auditory nerve"
    ],
    "correct": 2,
    "explanation": "The cochlea converts vibrations into nerve impulses sent to the brain."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The part of the ear that collects sound waves is the",
    "image": "",
    "options": [
      "Cochlea",
      "Pinna",
      "Eardrum",
      "Ossicles"
    ],
    "correct": 1,
    "explanation": "The pinna (outer ear) collects sound waves."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "The sense organ for taste is the",
    "image": "",
    "options": [
      "Nose",
      "Tongue",
      "Skin",
      "Ear"
    ],
    "correct": 1,
    "explanation": "The tongue contains taste buds that detect taste."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "The skin contains receptors for all EXCEPT",
    "image": "",
    "options": [
      "Touch",
      "Pressure",
      "Sound",
      "Pain"
    ],
    "correct": 2,
    "explanation": "The skin senses touch, pressure, pain, heat and cold — not sound (that is the ear)."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "The sense organ for smell is the",
    "image": "",
    "options": [
      "Tongue",
      "Nose",
      "Ear",
      "Skin"
    ],
    "correct": 1,
    "explanation": "Olfactory cells in the nose detect smell."
  },
  /* ============ GRADE 7: HYGIENE ============ */
  {
    "topic": "Personal Cleanliness and Health",
    "question": "The best hygienic practice after visiting a toilet is to wash hands with",
    "image": "",
    "options": [
      "Water only",
      "Water and soap",
      "Tissue paper only",
      "Soap only"
    ],
    "correct": 1,
    "explanation": "Hands should be washed with water and soap to remove germs."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Sharing bath towels and soap may lead to the spread of",
    "image": "",
    "options": [
      "Cleanliness",
      "Infectious skin diseases such as ringworm",
      "Stronger skin",
      "Better health"
    ],
    "correct": 1,
    "explanation": "Sharing towels and soap can spread infectious skin diseases like ringworm."
  },
  /* ============ GRADE 8: MICROSCOPE ============ */
  {
    "topic": "The Microscope",
    "question": "When using a microscope, you should always start with the",
    "image": "",
    "options": [
      "High-power objective",
      "Low-power objective",
      "Fine adjustment only",
      "Mirror removed"
    ],
    "correct": 1,
    "explanation": "Always start viewing with the lowest power magnification."
  },
  {
    "topic": "The Microscope",
    "question": "Which part of the microscope holds the specimen slide?",
    "image": "",
    "options": [
      "Mirror",
      "Stage",
      "Diaphragm",
      "Eye-piece"
    ],
    "correct": 1,
    "explanation": "The stage is the platform where the specimen slide is placed."
  },
  /* ============ GRADE 8: CELLS ============ */
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "The control centre of the cell containing genetic material is the",
    "image": "",
    "options": [
      "Cytoplasm",
      "Nucleus",
      "Cell membrane",
      "Vacuole"
    ],
    "correct": 1,
    "explanation": "The nucleus controls cell activities and contains DNA."
  },
  {
    "topic": "Generalised Plant and Animal Cells",
    "question": "Which structure is found in plant cells but NOT animal cells?",
    "image": "",
    "options": [
      "Mitochondrion",
      "Cell membrane",
      "Cell wall",
      "Cytoplasm"
    ],
    "correct": 2,
    "explanation": "The rigid cellulose cell wall is found only in plant cells."
  },
  {
    "topic": "Specialised Plant and Animal Cells",
    "question": "Red blood cells contain",
    "image": "",
    "options": [
      "Chlorophyll",
      "Haemoglobin",
      "Cell wall",
      "Chloroplast"
    ],
    "correct": 1,
    "explanation": "Red blood cells contain haemoglobin, which carries oxygen."
  },
  {
    "topic": "Specialised Plant and Animal Cells",
    "question": "A nerve cell (neuron) is adapted to",
    "image": "",
    "options": [
      "Carry oxygen",
      "Transmit nerve impulses",
      "Absorb water from soil",
      "Photosynthesise"
    ],
    "correct": 1,
    "explanation": "Nerve cells have long axons that transmit nerve impulses around the body."
  },
  /* ============ GRADE 8: UNICELLULAR ============ */
  {
    "topic": "Unicellular Organisms",
    "question": "Which of these is a unicellular organism?",
    "image": "",
    "options": [
      "Mango tree",
      "Amoeba",
      "Human being",
      "Toad"
    ],
    "correct": 1,
    "explanation": "Amoeba is made of a single cell."
  },
  {
    "topic": "Unicellular Organisms",
    "question": "Bacteria are classified as",
    "image": "",
    "options": [
      "Eukaryotes with a nucleus",
      "Prokaryotes without a true nucleus",
      "Multicellular fungi",
      "Plants"
    ],
    "correct": 1,
    "explanation": "Bacteria are prokaryotes — they have no true nucleus or membrane-bound organelles."
  },
  /* ============ GRADE 8: PLANT KINGDOM ============ */
  {
    "topic": "The Plant Kingdom",
    "question": "Flowering plants reproduce by means of",
    "image": "",
    "options": [
      "Spores only",
      "Flowers and seeds",
      "Budding only",
      "Binary fission"
    ],
    "correct": 1,
    "explanation": "Flowering plants (angiosperms) reproduce by means of flowers producing seeds."
  },
  {
    "topic": "Flowering Plants: External and Internal Structure",
    "question": "The part of the plant that absorbs water and mineral salts from the soil is the",
    "image": "",
    "options": [
      "Leaf",
      "Stem",
      "Root",
      "Flower"
    ],
    "correct": 2,
    "explanation": "Roots absorb water and mineral salts from the soil."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "The male reproductive part of a flower is the",
    "image": "",
    "options": [
      "Carpel",
      "Stamen",
      "Sepal",
      "Petal"
    ],
    "correct": 1,
    "explanation": "The stamen (anther + filament) is the male part producing pollen."
  },
  {
    "topic": "Structure and Functions of Parts of a Flower",
    "question": "The part of the flower that receives pollen is the",
    "image": "",
    "options": [
      "Anther",
      "Stigma",
      "Ovary",
      "Petal"
    ],
    "correct": 1,
    "explanation": "The stigma receives pollen grains during pollination."
  },
  {
    "topic": "Pollination and Germination",
    "question": "Pollination is the transfer of pollen from the",
    "image": "",
    "options": [
      "Stigma to anther",
      "Anther to stigma",
      "Ovary to stigma",
      "Root to leaf"
    ],
    "correct": 1,
    "explanation": "Pollination is the transfer of pollen from the anther to the stigma."
  },
  {
    "topic": "Pollination and Germination",
    "question": "Which of these is NOT a condition needed for seed germination?",
    "image": "",
    "options": [
      "Water",
      "Oxygen",
      "Suitable warmth",
      "Sunlight for all seeds"
    ],
    "correct": 3,
    "explanation": "Most seeds need water, oxygen and warmth; sunlight is not required for all seeds to germinate."
  },
  /* ============ GRADE 9: MATTER ============ */
  {
    "topic": "Modern Atomic Theory",
    "question": "The particle with a positive charge in the nucleus is the",
    "image": "",
    "options": [
      "Electron",
      "Neutron",
      "Proton",
      "Atom"
    ],
    "correct": 2,
    "explanation": "Protons are positively charged particles in the nucleus."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "Electrons have",
    "image": "",
    "options": [
      "A positive charge",
      "No charge",
      "A negative charge",
      "No mass at all"
    ],
    "correct": 2,
    "explanation": "Electrons are negatively charged particles with negligible mass."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Elements in the same group of the periodic table have",
    "image": "",
    "options": [
      "The same number of protons",
      "Similar chemical properties",
      "The same mass number",
      "No outer electrons"
    ],
    "correct": 1,
    "explanation": "Elements in the same group have the same number of outer electrons and similar properties."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "The first electron shell holds a maximum of",
    "image": "",
    "options": [
      "8 electrons",
      "2 electrons",
      "18 electrons",
      "1 electron"
    ],
    "correct": 1,
    "explanation": "The first shell holds a maximum of 2 electrons."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "The atomic number of an element is the number of",
    "image": "",
    "options": [
      "Neutrons",
      "Protons",
      "Electrons only",
      "Protons + neutrons"
    ],
    "correct": 1,
    "explanation": "Atomic number = number of protons in the nucleus."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes are atoms of the same element with different numbers of",
    "image": "",
    "options": [
      "Protons",
      "Electrons",
      "Neutrons",
      "Shells"
    ],
    "correct": 2,
    "explanation": "Isotopes have the same protons but different neutrons."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Which of these is a property of metals?",
    "image": "",
    "options": [
      "Brittle and dull",
      "Poor conductors of electricity",
      "Shiny and conduct electricity",
      "Form acidic oxides only"
    ],
    "correct": 2,
    "explanation": "Metals are shiny, malleable and conduct heat and electricity."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "A compound is",
    "image": "",
    "options": [
      "A mixture of elements",
      "Two or more elements chemically combined",
      "A single atom",
      "Only a metal"
    ],
    "correct": 1,
    "explanation": "A compound is a pure substance made of two or more elements chemically combined."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of sodium chloride is",
    "image": "",
    "options": [
      "NaCl₂",
      "NaCl",
      "Na₂Cl",
      "Na₂Cl₂"
    ],
    "correct": 1,
    "explanation": "Sodium is Na⁺ and chloride is Cl⁻, so they combine in a 1:1 ratio: NaCl."
  },
  {
    "topic": "Chemical Equations",
    "question": "In a balanced chemical equation, the number of atoms of each element is",
    "image": "",
    "options": [
      "Greater on the left",
      "Greater on the right",
      "Equal on both sides",
      "Not important"
    ],
    "correct": 2,
    "explanation": "A balanced equation has equal numbers of each atom on both sides."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Ionic bonding involves the",
    "image": "",
    "options": [
      "Sharing of electrons",
      "Transfer of electrons",
      "Loss of protons",
      "Gain of neutrons"
    ],
    "correct": 1,
    "explanation": "Ionic bonding is the transfer of electrons from a metal to a non-metal."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Covalent bonding occurs between",
    "image": "",
    "options": [
      "Two metals",
      "A metal and a non-metal",
      "Two non-metals",
      "A metal and a noble gas"
    ],
    "correct": 2,
    "explanation": "Covalent bonding is the sharing of electrons between non-metal atoms."
  },
  /* ============ GRADE 9: ENERGY ============ */
  {
    "topic": "Movement of Heat Energy",
    "question": "Heat transfer through a solid is called",
    "image": "",
    "options": [
      "Convection",
      "Radiation",
      "Conduction",
      "Evaporation"
    ],
    "correct": 2,
    "explanation": "Conduction is heat transfer through a solid by particle vibration."
  },
  {
    "topic": "Movement of Heat Energy",
    "question": "Heat from the sun reaches the earth by",
    "image": "",
    "options": [
      "Conduction",
      "Convection",
      "Radiation",
      "Insulation"
    ],
    "correct": 2,
    "explanation": "Radiation transfers heat through space without a medium."
  },
  {
    "topic": "Light Energy",
    "question": "Light travels fastest in",
    "image": "",
    "options": [
      "Water",
      "Glass",
      "A vacuum",
      "Diamond"
    ],
    "correct": 2,
    "explanation": "Light travels fastest in a vacuum at about 3×10⁸ m/s."
  },
  {
    "topic": "Light Energy",
    "question": "A plane mirror forms an image that is",
    "image": "",
    "options": [
      "Real and inverted",
      "Virtual and erect",
      "Real and enlarged",
      "Virtual and inverted"
    ],
    "correct": 1,
    "explanation": "A plane mirror forms a virtual, erect, same-size image."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound cannot travel through",
    "image": "",
    "options": [
      "Air",
      "Water",
      "Steel",
      "A vacuum"
    ],
    "correct": 3,
    "explanation": "Sound needs a medium and cannot travel through a vacuum."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound travels fastest through",
    "image": "",
    "options": [
      "Air",
      "Water",
      "Steel",
      "A vacuum"
    ],
    "correct": 2,
    "explanation": "Sound travels fastest in solids such as steel."
  },
  {
    "topic": "Electrical Energy",
    "question": "Electric current is measured in",
    "image": "",
    "options": [
      "Volts",
      "Amperes",
      "Ohms",
      "Watts"
    ],
    "correct": 1,
    "explanation": "Electric current is measured in amperes (amps)."
  },
  {
    "topic": "Electrical Energy",
    "question": "In a series circuit, if one bulb blows, the other bulbs will",
    "image": "",
    "options": [
      "Stay on",
      "Also go off",
      "Become brighter",
      "Remain unchanged"
    ],
    "correct": 1,
    "explanation": "In a series circuit there is only one path, so all bulbs go off if one blows."
  },
  /* ============ GRADE 9: HUMAN BODY SYSTEMS ============ */
  {
    "topic": "The Human Digestive System",
    "question": "Digestion of starch begins in the",
    "image": "",
    "options": [
      "Stomach",
      "Mouth",
      "Small intestine",
      "Large intestine"
    ],
    "correct": 1,
    "explanation": "Saliva in the mouth contains amylase which begins starch digestion."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Bile is produced by the",
    "image": "",
    "options": [
      "Pancreas",
      "Liver",
      "Stomach",
      "Gall bladder"
    ],
    "correct": 1,
    "explanation": "Bile is produced by the liver and stored in the gall bladder."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Gas exchange in humans takes place in the",
    "image": "",
    "options": [
      "Trachea",
      "Bronchi",
      "Alveoli",
      "Diaphragm"
    ],
    "correct": 2,
    "explanation": "Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged."
  },
  {
    "topic": "The Excretory System",
    "question": "The functional unit of the kidney is the",
    "image": "",
    "options": [
      "Neuron",
      "Nephron",
      "Alveolus",
      "Ureter"
    ],
    "correct": 1,
    "explanation": "The nephron is the filtering unit of the kidney."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Red blood cells contain",
    "image": "",
    "options": [
      "Antibodies",
      "Haemoglobin",
      "Platelets",
      "Glucose"
    ],
    "correct": 1,
    "explanation": "Haemoglobin in red blood cells carries oxygen."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "In humans, fertilisation takes place in the",
    "image": "",
    "options": [
      "Uterus",
      "Ovary",
      "Fallopian tube",
      "Vagina"
    ],
    "correct": 2,
    "explanation": "Fertilisation of the egg by sperm occurs in the fallopian tube."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The bone that protects the brain is the",
    "image": "",
    "options": [
      "Rib",
      "Skull",
      "Pelvis",
      "Backbone"
    ],
    "correct": 1,
    "explanation": "The skull protects the brain from injury."
  },
  {
    "topic": "The Endocrine System",
    "question": "The hormone insulin is produced by the",
    "image": "",
    "options": [
      "Liver",
      "Pancreas",
      "Thyroid",
      "Kidney"
    ],
    "correct": 1,
    "explanation": "The pancreas produces insulin to regulate blood sugar."
  },
  /* ============ GRADE 9: DISEASES ============ */
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Which of these is a communicable disease?",
    "image": "",
    "options": [
      "Diabetes",
      "High blood pressure",
      "Measles",
      "Sickle-cell anaemia"
    ],
    "correct": 2,
    "explanation": "Measles is infectious and spreads from person to person."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Malaria is spread by the",
    "image": "",
    "options": [
      "Housefly",
      "Female Anopheles mosquito",
      "Contaminated water",
      "Touching an infected person"
    ],
    "correct": 1,
    "explanation": "Malaria is transmitted by the female Anopheles mosquito."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Immunisation helps to prevent",
    "image": "",
    "options": [
      "Only malaria",
      "Diseases such as measles and polio",
      "Only diabetes",
      "Only high blood pressure"
    ],
    "correct": 1,
    "explanation": "Vaccination/immunisation prevents diseases like measles and polio."
  },
  /* ============ GRADE 9: PROJECT WORK ============ */
  {
    "topic": "Project Work",
    "question": "A testable scientific guess is called a",
    "image": "",
    "options": [
      "Conclusion",
      "Hypothesis",
      "Result",
      "Variable"
    ],
    "correct": 1,
    "explanation": "A hypothesis is a testable statement made before an experiment."
  },
  {
    "topic": "Project Work",
    "question": "The variable that is deliberately changed in an experiment is the",
    "image": "",
    "options": [
      "Dependent variable",
      "Control variable",
      "Independent variable",
      "Constant variable"
    ],
    "correct": 2,
    "explanation": "The independent variable is the one changed by the investigator."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Which structures on the tongue detect taste?",
    "image": "",
    "options": ["Taste buds", "Salivary glands", "Papillae only", "Tongue muscles"],
    "correct": 0,
    "explanation": "Taste buds contain receptor cells that detect sweet, sour, salty, bitter and umami tastes."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Besides taste, the tongue helps with",
    "image": "",
    "options": ["Breathing only", "Chewing, swallowing and speech", "Hearing only", "Vision"],
    "correct": 1,
    "explanation": "The tongue helps manipulate food during chewing, aids swallowing and assists in forming speech sounds."
  },
  {
    "topic": "Structure and Functions of the Human Nose",
    "question": "The nose is the sense organ for which of the following?",
    "image": "",
    "options": ["Taste", "Smell", "Touch", "Hearing"],
    "correct": 1,
    "explanation": "Olfactory cells in the nose detect smell; the nose also warms, filters and moistens inhaled air."
  },
  {
    "topic": "Structure and Functions of the Human Nose",
    "question": "Hairs and mucus in the nose trap",
    "image": "",
    "options": ["Oxygen only", "Dust and microbes from inhaled air", "Carbon dioxide only", "Water vapour only"],
    "correct": 1,
    "explanation": "Nose hairs and mucus trap dust, microbes and other particles before air reaches the lungs."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "A unicellular organism carries out all life processes within",
    "image": "",
    "options": ["Many cells", "One cell", "Tissues only", "Organs only"],
    "correct": 1,
    "explanation": "A unicellular organism is made of a single cell that performs nutrition, respiration, excretion, reproduction and response."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Which of the following is a prokaryote with no true nucleus?",
    "image": "",
    "options": ["Amoeba", "Euglena", "Bacterium", "Paramecium"],
    "correct": 2,
    "explanation": "Bacteria are prokaryotes: they lack a membrane-bound nucleus and other membrane-bound organelles."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Recycling is best described as",
    "image": "",
    "options": ["Burning waste", "Collecting and processing waste into new materials", "Burying waste in landfills", "Leaving waste to rot"],
    "correct": 1,
    "explanation": "Recycling collects used materials such as paper, plastics, metals and glass and processes them into new products."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Which of the following is NOT usually recyclable?",
    "image": "",
    "options": ["Drink cans", "Paper", "Plastics", "Food scraps and used nappies"],
    "correct": 3,
    "explanation": "Food scraps and used nappies are generally not recycled with paper, plastics, cans and glass."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "Which part of the ear collects sound waves?",
    "image": "",
    "options": ["Cochlea", "Pinna", "Ossicles", "Auditory nerve"],
    "correct": 1,
    "explanation": "The pinna (outer ear) collects and funnels sound waves into the ear canal."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "Sound vibrations are converted into nerve impulses in the",
    "image": "",
    "options": ["Eardrum", "Ossicles", "Cochlea", "Pinna"],
    "correct": 2,
    "explanation": "The cochlea contains sensory cells that turn sound vibrations into electrical nerve impulses carried by the auditory nerve."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "The skin contains receptors for all of the following EXCEPT",
    "image": "",
    "options": ["Touch", "Pressure", "Smell", "Pain"],
    "correct": 2,
    "explanation": "The skin senses touch, pressure, pain, heat and cold; smell is detected by the nose."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "Sweat glands in the skin help to",
    "image": "",
    "options": ["Increase body temperature", "Cool the body", "Store fat only", "Produce hair only"],
    "correct": 1,
    "explanation": "Sweat glands release sweat that evaporates from the skin surface, helping to cool the body."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens is used to",
    "image": "",
    "options": ["Measure temperature", "Magnify small objects", "Measure mass", "Test pH"],
    "correct": 1,
    "explanation": "A hand lens (magnifying glass) uses a convex lens to enlarge the image of small objects such as insects, leaves and crystals."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "A lever is a simple machine consisting of a",
    "image": "",
    "options": ["Rigid bar pivoted at a fulcrum", "Stretched rubber band", "Heated metal rod", "Spinning wheel only"],
    "correct": 0,
    "explanation": "A lever is a rigid bar that turns around a fixed point called the fulcrum to lift or move loads."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "Which class of lever has the fulcrum between the effort and the load?",
    "image": "",
    "options": ["First class", "Second class", "Third class", "Fourth class"],
    "correct": 0,
    "explanation": "In a first-class lever, the fulcrum lies between the effort and the load (e.g. seesaw, scissors, crowbar)."
  },
  {
    "topic": "Rusting",
    "question": "Rusting of iron requires both",
    "image": "",
    "options": ["Oxygen and water", "Oil and heat", "Salt only", "Light only"],
    "correct": 0,
    "explanation": "Iron rusts when it reacts with oxygen in the presence of water (moisture); both are needed."
  },
  {
    "topic": "Rusting",
    "question": "Which method helps prevent rusting of iron?",
    "image": "",
    "options": ["Painting or greasing the surface", "Leaving it outdoors in the rain", "Heating it strongly", "Burying it in wet soil"],
    "correct": 0,
    "explanation": "Painting, greasing, oiling or galvanising iron keeps oxygen and water away from the surface, preventing rust."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Air pressure decreases as altitude",
    "image": "",
    "options": ["Increases", "Decreases", "Stays the same", "Doubles"],
    "correct": 1,
    "explanation": "The higher you go above sea level, the less air presses down, so air pressure decreases with altitude."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Pressure in a liquid increases with",
    "image": "",
    "options": ["Depth only", "Depth and density", "Temperature only", "Colour of the liquid"],
    "correct": 1,
    "explanation": "Liquid pressure increases with depth and with the density of the liquid."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "In a pressure experiment, force acting per unit area is called",
    "image": "",
    "options": ["Pressure", "Volume", "Mass", "Temperature"],
    "correct": 0,
    "explanation": "Pressure is defined as force per unit area: Pressure = Force ÷ Area."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "If the same force is applied over a smaller area, the pressure",
    "image": "",
    "options": ["Increases", "Decreases", "Stays the same", "Becomes zero"],
    "correct": 0,
    "explanation": "Pressure = Force ÷ Area, so a smaller area gives a larger pressure for the same force."
  },
  {
    "topic": "The Excretory System",
    "question": "The functional filtering unit of the kidney is the",
    "image": "",
    "options": ["Ureter", "Nephron", "Bladder", "Urethra"],
    "correct": 1,
    "explanation": "Each kidney contains about one million nephrons, which filter blood and form urine."
  },
  {
    "topic": "The Excretory System",
    "question": "Urine leaves the kidney through the",
    "image": "",
    "options": ["Ureter", "Urethra", "Blood vessel", "Nerve"],
    "correct": 0,
    "explanation": "The ureter carries urine from each kidney to the urinary bladder for storage."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "In humans, fertilisation usually occurs in the",
    "image": "",
    "options": ["Uterus", "Fallopian tube (oviduct)", "Ovary", "Vagina"],
    "correct": 1,
    "explanation": "Fertilisation (sperm meeting egg) usually takes place in the fallopian tube."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "The male gamete is called the",
    "image": "",
    "options": ["Egg", "Ovum", "Sperm", "Zygote"],
    "correct": 2,
    "explanation": "Sperm is the male gamete; the egg (ovum) is the female gamete."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Immunisation protects against diseases such as",
    "image": "",
    "options": ["Measles and polio", "Broken bones only", "Sunburn only", "Tooth decay only"],
    "correct": 0,
    "explanation": "Vaccines stimulate the body to produce antibodies against specific diseases such as measles, polio and tuberculosis."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Draining stagnant water helps control",
    "image": "",
    "options": ["Malaria", "Tooth decay", "Broken bones", "Sunburn"],
    "correct": 0,
    "explanation": "Stagnant water is a breeding site for mosquitoes; draining it reduces mosquito numbers and helps prevent malaria."
  },
  /* ===== Bring every Foundation Science topic to 10+ practice questions ===== */
  {
    "topic": "Meaning of Adaptation",
    "question": "Adaptation in living things means",
    "image": "",
    "options": ["Special features that help an organism survive in its environment", "Changing colour every day", "Moving to a new country", "Eating more food"],
    "correct": 0,
    "explanation": "Adaptation is any feature or behaviour that helps an organism survive and reproduce in its habitat."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "A camel's hump is an adaptation for",
    "image": "",
    "options": ["Storing fat for energy and water", "Running fast", "Attracting mates", "Keeping cool only"],
    "correct": 0,
    "explanation": "A camel's hump stores fat, which can be converted to energy and water when food and water are scarce."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "A fish's streamlined body is an adaptation for",
    "image": "",
    "options": ["Flying", "Swimming efficiently through water", "Climbing trees", "Burrowing in soil"],
    "correct": 1,
    "explanation": "A streamlined body reduces water resistance, helping fish swim faster and with less effort."
  },
  {
    "topic": "Meaning of Adaptation",
    "question": "Plants in dry deserts often have adaptations such as",
    "image": "",
    "options": ["Large thin leaves", "Thick waxy cuticle and spines instead of leaves", "Very tall trunks only", "Bright flowers only"],
    "correct": 1,
    "explanation": "Desert plants reduce water loss through thick waxy cuticles, spines, and reduced leaf surface area."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Technology is best defined as",
    "image": "",
    "options": ["The application of scientific knowledge to solve practical problems", "Only computers and phones", "Playing video games", "Watching television"],
    "correct": 0,
    "explanation": "Technology applies scientific knowledge to create tools, machines, materials and systems that meet human needs."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Which of the following is an example of technology in agriculture?",
    "image": "",
    "options": ["Using a tractor to plough a farm", "Eating harvested crops only", "Sleeping in the field", "Singing to plants"],
    "correct": 0,
    "explanation": "Farm machinery such as tractors, planters and harvesters are technological tools that improve food production."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Technology improves communication by",
    "image": "",
    "options": ["Making it slower", "Enabling phones, internet and radio to send messages quickly", "Stopping messages entirely", "Using only letters"],
    "correct": 1,
    "explanation": "Communication technology such as mobile phones, radio, television and the internet allows fast exchange of information."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "A disadvantage of technology can be",
    "image": "",
    "options": ["Increased pollution and waste from factories", "Solving more problems", "Improving health care only", "Creating more jobs only"],
    "correct": 0,
    "explanation": "Technology can cause pollution, electronic waste and job displacement if not managed responsibly."
  },
  {
    "topic": "Meaning and Uses of Technology",
    "question": "Science and technology are related because",
    "image": "",
    "options": ["Technology applies discoveries from science to practical uses", "They are completely unrelated", "Science uses only technology", "Technology replaces science entirely"],
    "correct": 0,
    "explanation": "Science discovers how nature works; technology uses those discoveries to build useful tools and solutions."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "The main aim of recycling is to",
    "image": "",
    "options": ["Reduce waste and conserve natural resources", "Create more landfill sites", "Burn more rubbish", "Use more raw materials"],
    "correct": 0,
    "explanation": "Recycling reprocesses used materials into new products, reducing the need for raw materials and cutting landfill waste."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Which material can be recycled?",
    "image": "",
    "options": ["Glass bottles", "Only food scraps", "Only broken ceramics", "Only used tissues"],
    "correct": 0,
    "explanation": "Glass, paper, metals and many plastics can be collected and recycled into new items."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Recycling paper helps save",
    "image": "",
    "options": ["Trees and forests", "Oil only", "Sand only", "Gold only"],
    "correct": 0,
    "explanation": "Recycling paper reduces the number of trees cut down to make new paper, protecting forests."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Composting is a way of recycling",
    "image": "",
    "options": ["Organic waste such as food scraps and leaves", "Plastic bags only", "Glass bottles only", "Metal cans only"],
    "correct": 0,
    "explanation": "Composting breaks down organic waste into nutrient-rich manure for farming and gardening."
  },
  {
    "topic": "Technological Processes (e.g. Recycling)",
    "question": "Reusing means",
    "image": "",
    "options": ["Using an item again for the same or a new purpose", "Throwing it away after one use", "Burning it immediately", "Burying it deep underground"],
    "correct": 0,
    "explanation": "Reusing extends the life of products such as bags, bottles and containers before they are recycled or discarded."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "The transparent front part of the eye that lets light in is the",
    "image": "",
    "options": ["Cornea", "Retina", "Iris", "Optic nerve"],
    "correct": 0,
    "explanation": "The cornea is the clear front layer of the eye through which light enters."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Long-sightedness (hypermetropia) makes it hard to see",
    "image": "",
    "options": ["Near objects clearly", "Distant objects clearly", "Colours clearly", "In the dark only"],
    "correct": 0,
    "explanation": "A long-sighted person can see distant objects well but struggles to focus on near objects; convex lenses help correct it."
  },
  {
    "topic": "Structure and Functions of the Human Eye",
    "question": "Short-sightedness (myopia) makes it hard to see",
    "image": "",
    "options": ["Distant objects clearly", "Near objects clearly", "Colours clearly", "In bright light only"],
    "correct": 0,
    "explanation": "A short-sighted person can see near objects well but struggles with distant objects; concave lenses help correct it."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The eardrum",
    "image": "",
    "options": ["Vibrates when sound waves hit it", "Produces sound only", "Filters air only", "Sees images"],
    "correct": 0,
    "explanation": "Sound waves make the eardrum vibrate, passing the vibrations to the ossicles in the middle ear."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The three tiny bones in the middle ear are called",
    "image": "",
    "options": ["Ossicles (malleus, incus, stapes)", "Taste buds", "Neurons", "Rods and cones"],
    "correct": 0,
    "explanation": "The malleus, incus and stapes amplify vibrations from the eardrum to the inner ear."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The auditory nerve carries impulses from the ear to the",
    "image": "",
    "options": ["Brain", "Stomach", "Liver", "Lungs"],
    "correct": 0,
    "explanation": "The auditory nerve sends electrical signals from the cochlea to the brain for interpretation as sound."
  },
  {
    "topic": "Structure and Functions of the Human Ear",
    "question": "The part of the ear that helps maintain balance is the",
    "image": "",
    "options": ["Inner ear (semicircular canals)", "Outer ear only", "Eardrum only", "Ear wax"],
    "correct": 0,
    "explanation": "The semicircular canals in the inner ear detect head movement and help maintain balance."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "The five basic tastes detected by taste buds are",
    "image": "",
    "options": ["Sweet, sour, salty, bitter and umami", "Hot, cold, wet, dry, rough", "Loud, soft, high, low, silent", "Red, blue, green, yellow, black"],
    "correct": 0,
    "explanation": "Taste buds detect sweet, sour, salty, bitter and umami (savoury) tastes."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Papillae on the tongue are",
    "image": "",
    "options": ["Small bumps that contain taste buds", "Salivary glands only", "Taste nerves only", "Teeth-like structures"],
    "correct": 0,
    "explanation": "Papillae are the tiny bumps on the tongue's surface; many contain taste buds."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Saliva helps digestion by",
    "image": "",
    "options": ["Containing amylase that begins starch digestion", "Killing all bacteria", "Cooling food only", "Hardening food"],
    "correct": 0,
    "explanation": "Saliva contains the enzyme amylase (ptyalin), which begins breaking down starch into maltose."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "Receptors in the skin detect",
    "image": "",
    "options": ["Touch, pressure, pain, heat and cold", "Light and sound only", "Taste and smell only", "Only gravity"],
    "correct": 0,
    "explanation": "The skin has sensory receptors for touch, pressure, pain, heat (warmth) and cold."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "Which layer of the skin contains sensory receptors?",
    "image": "",
    "options": ["The dermis", "Only the surface cells", "Fat only", "Hair only"],
    "correct": 0,
    "explanation": "Sensory receptors are located mainly in the dermis, the inner layer of the skin."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "Hair and nails are protective structures of the skin",
    "image": "",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "Hair helps protect against heat loss and UV radiation; nails protect the tips of fingers and toes."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "Sweat helps regulate body temperature by",
    "image": "",
    "options": ["Evaporating from the skin and cooling the body", "Increasing body heat only", "Producing oil only", "Growing hair"],
    "correct": 0,
    "explanation": "When sweat evaporates from the skin surface, it removes heat and cools the body."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "Olfactory cells detect",
    "image": "",
    "options": ["Smells", "Tastes only", "Sounds only", "Touches only"],
    "correct": 0,
    "explanation": "Olfactory cells in the nasal cavity detect thousands of different smells."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "The nose warms and moistens air before it reaches the",
    "image": "",
    "options": ["Lungs", "Stomach", "Brain", "Kidneys"],
    "correct": 0,
    "explanation": "Nasal passages warm, moisten and filter inhaled air to protect the delicate lung tissues."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "Mucus in the nose traps",
    "image": "",
    "options": ["Dust and microbes", "Oxygen only", "Carbon dioxide only", "Water only"],
    "correct": 0,
    "explanation": "Mucus traps dust, pollen and microbes so they do not enter the lungs."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "The entry point of the respiratory system is the",
    "image": "",
    "options": ["Nose", "Stomach", "Skin", "Ear"],
    "correct": 0,
    "explanation": "Air normally enters the respiratory system through the nose (or mouth)."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Brushing teeth twice a day helps prevent",
    "image": "",
    "options": ["Tooth decay and gum disease", "Broken bones only", "Hair loss only", "Eye problems only"],
    "correct": 0,
    "explanation": "Brushing removes plaque and food particles, reducing the risk of tooth decay and gum disease."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Washing hands after using the toilet prevents the spread of",
    "image": "",
    "options": ["Germs that cause diseases", "Oxygen only", "Carbon dioxide only", "Sunlight"],
    "correct": 0,
    "explanation": "Hand washing with soap removes germs that can cause diarrhoea, cholera and other illnesses."
  },
  {
    "topic": "Personal Cleanliness and Health",
    "question": "Not sharing towels and combs helps prevent",
    "image": "",
    "options": ["Skin infections such as ringworm", "Broken bones only", "Poor eyesight only", "Tooth decay only"],
    "correct": 0,
    "explanation": "Sharing personal items can spread fungi, bacteria and parasites that cause skin diseases."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens uses a",
    "image": "",
    "options": ["Convex lens", "Concave lens only", "Plane mirror only", "Coloured filter only"],
    "correct": 0,
    "explanation": "A hand lens uses a convex (converging) lens to produce a magnified virtual image."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens is useful for observing",
    "image": "",
    "options": ["Small objects such as insects, leaves and crystals", "Only very distant stars", "Only underwater objects", "Only X-ray images"],
    "correct": 0,
    "explanation": "A magnifying glass enlarges tiny details of small objects for closer study."
  },
  {
    "topic": "The Hand Lens",
    "question": "To focus an image with a hand lens, you",
    "image": "",
    "options": ["Move the lens closer or farther from the object until it is clear", "Shake the lens", "Paint the lens", "Freeze the lens"],
    "correct": 0,
    "explanation": "Changing the distance between the lens and the object brings the magnified image into focus."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "The fixed point around which a lever turns is the",
    "image": "",
    "options": ["Fulcrum", "Load only", "Effort only", "Fulcrum plus load"],
    "correct": 0,
    "explanation": "The fulcrum is the pivot or support on which a lever rests and turns."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "In a second-class lever, the",
    "image": "",
    "options": ["Load is between the fulcrum and the effort", "Effort is between the fulcrum and the load", "Fulcrum is between effort and load", "Load and effort are the same point"],
    "correct": 0,
    "explanation": "Examples of second-class levers include wheelbarrows and nutcrackers."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "In a third-class lever, the",
    "image": "",
    "options": ["Effort is between the fulcrum and the load", "Load is between fulcrum and effort", "Fulcrum is between effort and load", "None of the above"],
    "correct": 0,
    "explanation": "Examples of third-class levers include tweezers and the human arm."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "Machines make work easier by",
    "image": "",
    "options": ["Changing the size or direction of a force", "Creating energy from nothing", "Destroying energy", "Only making work harder"],
    "correct": 0,
    "explanation": "Machines do not create energy; they help apply force more conveniently or efficiently."
  },
  {
    "topic": "Simple Machines (Levers)",
    "question": "The effort applied to a lever is the",
    "image": "",
    "options": ["Force applied to move the load", "The load itself", "The fulcrum only", "The weight of the lever"],
    "correct": 0,
    "explanation": "Effort is the force a person applies to a lever to overcome the load."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A pulley is used to",
    "image": "",
    "options": ["Lift heavy loads with less effort", "Measure time only", "Cut wood only", "Heat water only"],
    "correct": 0,
    "explanation": "A pulley changes the direction of a force and can reduce the effort needed to lift a load."
  },
  {
    "topic": "Other Types of Machines",
    "question": "An inclined plane is a",
    "image": "",
    "options": ["Sloping surface that reduces the effort needed to raise a load", "Vertical wall only", "Spinning wheel", "Electric motor"],
    "correct": 0,
    "explanation": "Ramps are inclined planes: they let you push a load up gradually with less force than lifting straight up."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A wheel and axle makes work easier by",
    "image": "",
    "options": ["Reducing friction when moving objects", "Increasing weight only", "Producing heat only", "Changing colour"],
    "correct": 0,
    "explanation": "Wheels roll with much less friction than dragging, making it easier to move heavy objects."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A screw is an inclined plane wrapped around a",
    "image": "",
    "options": ["Cylinder", "Flat sheet only", "Ball only", "Cone only"],
    "correct": 0,
    "explanation": "The threads of a screw are an inclined plane coiled around a central cylinder."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Amoeba moves and feeds using",
    "image": "",
    "options": ["Pseudopodia", "Wings only", "Fins only", "Roots only"],
    "correct": 0,
    "explanation": "Pseudopodia are temporary projections of the cell used for movement and engulfing food."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Paramecium moves using",
    "image": "",
    "options": ["Cilia", "Legs only", "Wings only", "Roots only"],
    "correct": 0,
    "explanation": "Paramecium is covered in tiny hair-like cilia that beat to propel it through water."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Euglena can make its own food because it has",
    "image": "",
    "options": ["Chloroplasts", "Only a nucleus", "Only a flagellum", "Only a cell wall"],
    "correct": 0,
    "explanation": "Chloroplasts contain chlorophyll, allowing Euglena to carry out photosynthesis like a plant."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Binary fission is a form of",
    "image": "",
    "options": ["Asexual reproduction in one-celled organisms", "Sexual reproduction only", "Growth in plants only", "A disease"],
    "correct": 0,
    "explanation": "Binary fission splits one parent cell into two identical daughter cells, common in bacteria and amoeba."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Bacteria reproduce by",
    "image": "",
    "options": ["Binary fission", "Laying eggs only", "Growing leaves only", "Budding only in animals"],
    "correct": 0,
    "explanation": "Most bacteria reproduce asexually by binary fission, dividing into two cells."
  },
  {
    "topic": "Unicellular Organisms (Bacterium, Euglena)",
    "question": "Euglena is considered a borderline organism because",
    "image": "",
    "options": ["It has both plant-like and animal-like features", "It is only a plant", "It is only an animal", "It has no cell parts"],
    "correct": 0,
    "explanation": "Euglena has chloroplasts (plant-like) but can also move with a flagellum and lacks a cell wall (animal-like)."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Non-flowering plants reproduce using",
    "image": "",
    "options": ["Spores", "Seeds only", "Flowers only", "Fruits only"],
    "correct": 0,
    "explanation": "Mosses and ferns are non-flowering plants that reproduce by spores rather than seeds."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Flowering plants are also called",
    "image": "",
    "options": ["Angiosperms", "Gymnosperms only", "Fungi only", "Bryophytes only"],
    "correct": 0,
    "explanation": "Angiosperms are flowering plants that produce seeds enclosed in fruits."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Monocots have",
    "image": "",
    "options": ["One seed leaf (cotyledon)", "Two seed leaves", "No seed leaves", "Ten seed leaves"],
    "correct": 0,
    "explanation": "Monocotyledons have a single cotyledon in their seeds (e.g. maize, rice, grass)."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Dicots have",
    "image": "",
    "options": ["Two seed leaves (cotyledons)", "One seed leaf", "No seed leaves", "Three seed leaves"],
    "correct": 0,
    "explanation": "Dicotyledons have two cotyledons in their seeds (e.g. beans, mango, orange)."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Cellulose cell walls are found in",
    "image": "",
    "options": ["Plant cells", "Animal cells only", "Bacteria only", "Viruses"],
    "correct": 0,
    "explanation": "Plant cells have rigid cellulose cell walls that give them shape and protection."
  },
  {
    "topic": "Rusting",
    "question": "Rust is mainly hydrated",
    "image": "",
    "options": ["Iron(III) oxide", "Sodium chloride", "Calcium carbonate", "Copper sulphate"],
    "correct": 0,
    "explanation": "Rust is hydrated iron(III) oxide, formed when iron reacts with oxygen and water."
  },
  {
    "topic": "Rusting",
    "question": "Galvanising protects iron by",
    "image": "",
    "options": ["Coating it with a layer of zinc", "Painting it black only", "Leaving it in the rain", "Heating it strongly"],
    "correct": 0,
    "explanation": "Zinc coating shields iron from oxygen and water and corrodes preferentially if scratched."
  },
  {
    "topic": "Rusting",
    "question": "Rusting is faster in",
    "image": "",
    "options": ["Moist salty air", "Dry air only", "Vacuum only", "Boiling oil only"],
    "correct": 0,
    "explanation": "Salt and moisture both speed up the rusting of iron."
  },
  {
    "topic": "Rusting",
    "question": "Alloying iron with chromium produces",
    "image": "",
    "options": ["Stainless steel, which resists rust", "Pure copper only", "Aluminium foil only", "Glass"],
    "correct": 0,
    "explanation": "Stainless steel contains chromium, which forms a protective oxide layer that resists rust."
  },
  {
    "topic": "Rusting",
    "question": "Oil or grease prevents rusting by",
    "image": "",
    "options": ["Keeping oxygen and water away from the iron surface", "Adding oxygen to the surface", "Heating the iron", "Making iron heavier"],
    "correct": 0,
    "explanation": "A layer of oil or grease blocks contact between iron, oxygen and moisture."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "At sea level, air pressure is",
    "image": "",
    "options": ["Highest", "Lowest", "Zero", "Negative"],
    "correct": 0,
    "explanation": "Air pressure is greatest at sea level because the whole atmosphere presses down from above."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Drinking through a straw works because",
    "image": "",
    "options": ["Reducing pressure inside the straw lets atmospheric pressure push the liquid up", "Gravity pulls liquid up only", "The straw heats the liquid", "The straw creates vacuum only"],
    "correct": 0,
    "explanation": "Sucking reduces air pressure inside the straw; outside atmospheric pressure pushes the drink upward."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "A barometer measures",
    "image": "",
    "options": ["Atmospheric pressure", "Temperature only", "Rainfall only", "Wind speed only"],
    "correct": 0,
    "explanation": "A barometer is used to measure atmospheric pressure, helpful in weather forecasting."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Water pressure at the bottom of a deep lake is",
    "image": "",
    "options": ["Greater than at the surface", "Less than at the surface", "The same everywhere", "Zero"],
    "correct": 0,
    "explanation": "Pressure in a liquid increases with depth, so it is greatest at the bottom."
  },
  {
    "topic": "Water and Air Pressure",
    "question": "Pascal's principle states that pressure applied to an enclosed liquid is",
    "image": "",
    "options": ["Transmitted equally to all parts of the liquid", "Lost completely", "Changed randomly", "Only at the surface"],
    "correct": 0,
    "explanation": "Pascal's principle is the basis of hydraulic presses and brakes."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "The SI unit of pressure is the",
    "image": "",
    "options": ["Pascal (Pa)", "Newton only", "Metre only", "Second only"],
    "correct": 0,
    "explanation": "One pascal equals one newton per square metre (N/m²)."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "A sharp knife cuts better than a blunt one because",
    "image": "",
    "options": ["Its edge has a smaller area, producing greater pressure for the same force", "It is heavier only", "It is colder only", "It is longer only"],
    "correct": 0,
    "explanation": "Pressure = Force ÷ Area, so a smaller cutting area exerts higher pressure."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "Wide tyres on heavy vehicles reduce pressure on the ground because they",
    "image": "",
    "options": ["Spread the vehicle's weight over a larger area", "Increase the weight only", "Make the vehicle lighter", "Only look better"],
    "correct": 0,
    "explanation": "A larger contact area reduces pressure, preventing the vehicle from sinking into soft ground."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "A hydraulic press works using",
    "image": "",
    "options": ["Pascal's principle of liquid pressure", "Only gravity", "Only magnetism", "Only sound"],
    "correct": 0,
    "explanation": "A small force on a narrow piston creates pressure transmitted through liquid to a larger piston, producing a large force."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "Protons are located in the",
    "image": "",
    "options": ["Nucleus", "Electron shells only", "Outside the atom", "Orbitals only"],
    "correct": 0,
    "explanation": "Protons and neutrons are packed together in the nucleus at the centre of the atom."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "Electrons are found",
    "image": "",
    "options": ["In shells around the nucleus", "Only in the nucleus", "Only inside protons", "Only inside neutrons"],
    "correct": 0,
    "explanation": "Negatively charged electrons occupy energy levels or shells surrounding the nucleus."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "Neutrons have",
    "image": "",
    "options": ["No electric charge", "Positive charge only", "Negative charge only", "Both positive and negative"],
    "correct": 0,
    "explanation": "Neutrons are neutral particles found in the nucleus."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "The nucleus of an atom is",
    "image": "",
    "options": ["Positively charged", "Negatively charged", "Neutral", "Empty"],
    "correct": 0,
    "explanation": "Protons are positive and neutrons are neutral, so the nucleus has a net positive charge."
  },
  {
    "topic": "Modern Atomic Theory",
    "question": "Atoms of the same element have the same number of",
    "image": "",
    "options": ["Protons", "Only neutrons", "Only electrons", "Neither protons nor neutrons"],
    "correct": 0,
    "explanation": "The number of protons (atomic number) identifies the element."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Elements in the same group have similar",
    "image": "",
    "options": ["Chemical properties", "Only atomic masses", "Only colours", "Only densities"],
    "correct": 0,
    "explanation": "Elements in a vertical group have the same number of outer electrons and similar chemical behaviour."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Metals are mostly found on the",
    "image": "",
    "options": ["Left side of the periodic table", "Right side only", "Bottom row only", "Top row only"],
    "correct": 0,
    "explanation": "Metals occupy the left and centre; non-metals are on the right."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Group 18 elements are called",
    "image": "",
    "options": ["Noble gases", "Alkali metals only", "Halogens only", "Transition metals only"],
    "correct": 0,
    "explanation": "Group 18 elements (helium, neon, argon, etc.) are unreactive noble gases with full outer shells."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Group 17 elements are called",
    "image": "",
    "options": ["Halogens", "Alkali metals only", "Noble gases only", "Transition metals only"],
    "correct": 0,
    "explanation": "Group 17 elements (fluorine, chlorine, bromine, iodine) are reactive non-metals called halogens."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Group 1 elements are called",
    "image": "",
    "options": ["Alkali metals", "Noble gases only", "Halogens only", "Transition metals only"],
    "correct": 0,
    "explanation": "Group 1 metals (lithium, sodium, potassium, etc.) are very reactive and called alkali metals."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "The first electron shell holds a maximum of",
    "image": "",
    "options": ["2 electrons", "8 electrons", "18 electrons", "32 electrons"],
    "correct": 0,
    "explanation": "The innermost shell (n=1) can hold up to 2 electrons."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "The second electron shell holds a maximum of",
    "image": "",
    "options": ["8 electrons", "2 electrons", "18 electrons", "32 electrons"],
    "correct": 0,
    "explanation": "The second shell (n=2) can hold up to 8 electrons."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "For the first 20 elements, the third shell holds up to",
    "image": "",
    "options": ["8 electrons before the fourth shell starts filling", "2 electrons", "18 electrons only", "32 electrons"],
    "correct": 0,
    "explanation": "In the first 20 elements, the third shell is filled to 8 before electrons enter the fourth shell."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "Atoms with full outer shells are",
    "image": "",
    "options": ["Unreactive (noble gases)", "Very reactive only", "Always radioactive", "Always metals"],
    "correct": 0,
    "explanation": "Full outer shells make atoms stable and chemically unreactive."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "Outer-shell electrons determine an atom's",
    "image": "",
    "options": ["Chemical behaviour and bonding", "Only colour", "Only mass", "Only size"],
    "correct": 0,
    "explanation": "Valence electrons (outer-shell electrons) are involved in chemical reactions and bonding."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "Atomic number equals the number of",
    "image": "",
    "options": ["Protons", "Only neutrons", "Only electrons", "Protons plus neutrons"],
    "correct": 0,
    "explanation": "The atomic number (Z) identifies an element by its proton count."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "Mass number equals",
    "image": "",
    "options": ["Protons plus neutrons", "Only protons", "Only electrons", "Protons minus electrons"],
    "correct": 0,
    "explanation": "Mass number (A) = protons + neutrons in the nucleus."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "Number of neutrons =",
    "image": "",
    "options": ["Mass number − atomic number", "Atomic number − mass number", "Mass number + atomic number", "Electrons − protons"],
    "correct": 0,
    "explanation": "Subtract the proton count (atomic number) from the mass number to get neutrons."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "In a neutral atom, electrons equal",
    "image": "",
    "options": ["Protons", "Neutrons only", "Mass number only", "Zero"],
    "correct": 0,
    "explanation": "A neutral atom has equal numbers of protons (positive) and electrons (negative)."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes are atoms of the same element with different",
    "image": "",
    "options": ["Numbers of neutrons", "Numbers of protons", "Only colours", "Only masses without neutrons"],
    "correct": 0,
    "explanation": "Isotopes have the same protons (same element) but different neutrons, giving different mass numbers."
  },
  {
    "topic": "Isotopes",
    "question": "Carbon-12 and Carbon-14 are",
    "image": "",
    "options": ["Isotopes of carbon", "Different elements", "Molecules only", "Ions only"],
    "correct": 0,
    "explanation": "Both have 6 protons but different neutrons (6 vs 8), so they are isotopes of carbon."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes of an element have the same",
    "image": "",
    "options": ["Chemical properties", "Only mass numbers", "Only neutron counts", "Different proton counts"],
    "correct": 0,
    "explanation": "Chemical behaviour depends on electrons/protons, so isotopes of an element react similarly."
  },
  {
    "topic": "Isotopes",
    "question": "One medical use of isotopes is",
    "image": "",
    "options": ["Using radioactive tracers for diagnosis", "Only causing illness", "Only colouring medicine", "Only storing data"],
    "correct": 0,
    "explanation": "Radioisotopes such as technetium-99m are used as tracers in medical imaging."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Metals usually form",
    "image": "",
    "options": ["Basic oxides", "Only acidic oxides", "Only neutral oxides", "No oxides"],
    "correct": 0,
    "explanation": "Most metal oxides are basic (some, like aluminium oxide, are amphoteric)."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Non-metals usually form",
    "image": "",
    "options": ["Acidic oxides", "Only basic oxides", "Only neutral oxides", "No oxides"],
    "correct": 0,
    "explanation": "Most non-metal oxides are acidic (some, like carbon monoxide and water, are neutral)."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "A metal that is liquid at room temperature is",
    "image": "",
    "options": ["Mercury", "Iron only", "Copper only", "Aluminium only"],
    "correct": 0,
    "explanation": "Mercury is the only common metal that is liquid at room temperature."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "Graphite is a non-metal that",
    "image": "",
    "options": ["Conducts electricity", "Does not conduct at all", "Is magnetic only", "Is a liquid"],
    "correct": 0,
    "explanation": "Graphite (a form of carbon) conducts electricity despite being a non-metal."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "A dull, brittle, poor conductor is likely a",
    "image": "",
    "options": ["Non-metal", "Metal only", "Only a liquid metal", "Only a magnet"],
    "correct": 0,
    "explanation": "Dull appearance, brittleness and poor conductivity are typical non-metal properties."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "A compound made of two elements often ends in",
    "image": "",
    "options": ["-ide", "-ate only", "-ite only", "-ium only"],
    "correct": 0,
    "explanation": "Binary compounds such as sodium chloride and magnesium oxide use the -ide ending."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "Compounds containing oxygen with another element often end in",
    "image": "",
    "options": ["-ate or -ite", "-ide only", "-ium only", "-ic only"],
    "correct": 0,
    "explanation": "Examples include calcium carbonate and sodium sulphate."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "Water has the formula",
    "image": "",
    "options": ["H₂O", "CO₂", "NaCl", "O₂"],
    "correct": 0,
    "explanation": "One water molecule contains two hydrogen atoms and one oxygen atom."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "A pure substance made of two or more elements chemically combined is a",
    "image": "",
    "options": ["Compound", "Mixture only", "Element only", "Alloy only"],
    "correct": 0,
    "explanation": "A compound has elements chemically bonded in fixed proportions."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of magnesium oxide is",
    "image": "",
    "options": ["MgO", "Mg₂O", "MgO₂", "M₂O"],
    "correct": 0,
    "explanation": "Mg²⁺ and O²⁻ combine in a 1:1 ratio to form MgO."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of aluminium oxide is",
    "image": "",
    "options": ["Al₂O₃", "AlO", "AlO₃", "Al₃O₂"],
    "correct": 0,
    "explanation": "Al³⁺ and O²⁻ combine in a 2:3 ratio to balance charges, giving Al₂O₃."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "Valency is used to",
    "image": "",
    "options": ["Balance charges when writing formulae", "Measure temperature only", "Count only neutrons", "Only name elements"],
    "correct": 0,
    "explanation": "Swapping valencies of ions gives the correct ratio in a neutral compound formula."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of sodium chloride is",
    "image": "",
    "options": ["NaCl", "NaCl₂", "Na₂Cl", "Na₂Cl₂"],
    "correct": 0,
    "explanation": "Na⁺ and Cl⁻ combine in a 1:1 ratio to form sodium chloride, NaCl."
  },
  {
    "topic": "Chemical Equations",
    "question": "A balanced chemical equation has equal numbers of",
    "image": "",
    "options": ["Each type of atom on both sides", "Only reactants", "Only products", "Only energy"],
    "correct": 0,
    "explanation": "The law of conservation of mass requires the same atoms on both sides of the arrow."
  },
  {
    "topic": "Chemical Equations",
    "question": "Reactants are written",
    "image": "",
    "options": ["On the left of the arrow", "On the right only", "Above the arrow only", "Below the arrow only"],
    "correct": 0,
    "explanation": "Reactants go on the left; products go on the right: reactants → products."
  },
  {
    "topic": "Chemical Equations",
    "question": "State symbol (g) means",
    "image": "",
    "options": ["Gaseous state", "Liquid only", "Solid only", "Aqueous solution only"],
    "correct": 0,
    "explanation": "(g) = gas, (l) = liquid, (s) = solid, (aq) = dissolved in water."
  },
  {
    "topic": "Chemical Equations",
    "question": "Balancing is done by changing",
    "image": "",
    "options": ["Coefficients only, never subscripts in formulas", "Only subscripts", "Only the arrow", "Only state symbols"],
    "correct": 0,
    "explanation": "Change the numbers in front of formulas (coefficients) to balance atoms; do not alter formulas themselves."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Ionic bonding involves",
    "image": "",
    "options": ["Transfer of electrons between atoms", "Only sharing electrons", "Only losing protons", "Only gaining neutrons"],
    "correct": 0,
    "explanation": "In ionic bonding, one atom transfers electrons to another, forming oppositely charged ions."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Covalent bonding involves",
    "image": "",
    "options": ["Sharing electron pairs between non-metal atoms", "Only transferring electrons", "Only losing protons", "Only gaining neutrons"],
    "correct": 0,
    "explanation": "Non-metal atoms share electrons to complete their outer shells."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Sodium chloride (NaCl) is held together by",
    "image": "",
    "options": ["Electrostatic attraction between Na⁺ and Cl⁻ ions", "Only sharing electrons", "Only gravity", "Only magnetism"],
    "correct": 0,
    "explanation": "Sodium donates an electron to chlorine, forming Na⁺ and Cl⁻ ions that attract each other."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Water (H₂O) is a",
    "image": "",
    "options": ["Covalent compound", "Ionic compound only", "Metal only", "Element only"],
    "correct": 0,
    "explanation": "Hydrogen and oxygen share electrons in water, a covalent compound."
  },
  {
    "topic": "Ionic and Covalent Bonding",
    "question": "Ionic compounds usually have",
    "image": "",
    "options": ["High melting and boiling points", "Very low melting points only", "Only liquid states", "Only gaseous states"],
    "correct": 0,
    "explanation": "Strong ionic bonds require lots of energy to break, giving high melting and boiling points."
  },
  {
    "topic": "Sound Energy",
    "question": "Sound cannot travel through",
    "image": "",
    "options": ["A vacuum", "Solids only", "Liquids only", "Gases only"],
    "correct": 0,
    "explanation": "Sound needs particles to vibrate, so it cannot travel through empty space (a vacuum)."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Amylase is produced in the",
    "image": "",
    "options": ["Salivary glands and pancreas", "Only the stomach", "Only the liver", "Only the heart"],
    "correct": 0,
    "explanation": "Salivary amylase begins starch digestion in the mouth; pancreatic amylase continues it in the small intestine."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Pepsin digests",
    "image": "",
    "options": ["Protein", "Only fats", "Only carbohydrates", "Only vitamins"],
    "correct": 0,
    "explanation": "Pepsin, secreted in the stomach, breaks proteins into smaller peptides."
  },
  {
    "topic": "The Human Digestive System",
    "question": "Most nutrient absorption occurs in the",
    "image": "",
    "options": ["Small intestine", "Stomach only", "Large intestine only", "Mouth only"],
    "correct": 0,
    "explanation": "The small intestine, with its villi, is the main site of digestion and absorption."
  },
  {
    "topic": "The Human Digestive System",
    "question": "The large intestine mainly absorbs",
    "image": "",
    "options": ["Water", "Only oxygen", "Only food", "Only enzymes"],
    "correct": 0,
    "explanation": "Water and mineral salts are absorbed from undigested residue in the large intestine."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Breathing in is called",
    "image": "",
    "options": ["Inhalation (inspiration)", "Exhalation only", "Digestion only", "Circulation only"],
    "correct": 0,
    "explanation": "Inhalation brings air into the lungs as the diaphragm contracts and flattens."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Gas exchange occurs in the",
    "image": "",
    "options": ["Alveoli", "Trachea only", "Bronchus only", "Diaphragm only"],
    "correct": 0,
    "explanation": "Oxygen and carbon dioxide diffuse across the thin walls of the alveoli and capillaries."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "During exhalation, the diaphragm",
    "image": "",
    "options": ["Relaxes and moves upward", "Contracts only", "Disappears only", "Stays still only"],
    "correct": 0,
    "explanation": "The relaxed diaphragm moves up, reducing chest volume and pushing air out."
  },
  {
    "topic": "The Human Respiratory System",
    "question": "Breathing is different from respiration because",
    "image": "",
    "options": ["Respiration releases energy from food in cells", "Breathing releases energy only", "Respiration moves air only", "They are exactly the same"],
    "correct": 0,
    "explanation": "Breathing is ventilation (air movement); respiration is the chemical release of energy from glucose in cells."
  },
  {
    "topic": "The Excretory System",
    "question": "Urea is a waste product of",
    "image": "",
    "options": ["Protein metabolism", "Only fat metabolism", "Only vitamin metabolism", "Only carbohydrate metabolism"],
    "correct": 0,
    "explanation": "The liver produces urea when excess amino acids from proteins are broken down (deamination)."
  },
  {
    "topic": "The Excretory System",
    "question": "Urine is stored in the",
    "image": "",
    "options": ["Bladder", "Kidney only", "Ureter only", "Urethra only"],
    "correct": 0,
    "explanation": "The urinary bladder stores urine until it is released through the urethra."
  },
  {
    "topic": "The Excretory System",
    "question": "The skin excretes",
    "image": "",
    "options": ["Sweat containing water, salts and some urea", "Only oxygen", "Only food", "Only carbon dioxide"],
    "correct": 0,
    "explanation": "Sweat glands release water, mineral salts and small amounts of urea through the skin."
  },
  {
    "topic": "The Excretory System",
    "question": "The lungs excrete",
    "image": "",
    "options": ["Carbon dioxide and water vapour", "Only oxygen", "Only food", "Only urine"],
    "correct": 0,
    "explanation": "Cells release carbon dioxide during respiration; it is carried to the lungs and exhaled."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Capillaries are the site of",
    "image": "",
    "options": ["Exchange of materials between blood and body cells", "Only pumping blood", "Only clotting", "Only producing cells"],
    "correct": 0,
    "explanation": "Oxygen, food, wastes and hormones diffuse across thin capillary walls."
  },
  {
    "topic": "The Blood Circulatory System",
    "question": "Platelets help the blood to",
    "image": "",
    "options": ["Clot at a wound", "Only carry oxygen", "Only fight disease", "Only flow faster"],
    "correct": 0,
    "explanation": "Platelets are cell fragments involved in blood clotting to stop bleeding."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "The female gamete is called the",
    "image": "",
    "options": ["Egg (ovum)", "Sperm only", "Zygote only", "Foetus only"],
    "correct": 0,
    "explanation": "The ovum is the female sex cell; sperm is the male sex cell."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "The foetus develops in the",
    "image": "",
    "options": ["Uterus (womb)", "Fallopian tube only", "Ovary only", "Vagina only"],
    "correct": 0,
    "explanation": "After fertilisation, the embryo implants and grows in the uterus."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "Ovaries produce",
    "image": "",
    "options": ["Eggs (ova) and female hormones", "Sperm only", "Urine only", "Bile only"],
    "correct": 0,
    "explanation": "The ovaries release ova and produce hormones such as oestrogen and progesterone."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The skull protects the",
    "image": "",
    "options": ["Brain", "Stomach only", "Lungs only", "Kidneys only"],
    "correct": 0,
    "explanation": "The cranium (skull) encloses and protects the brain."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "The backbone (vertebral column) protects the",
    "image": "",
    "options": ["Spinal cord", "Heart only", "Liver only", "Stomach only"],
    "correct": 0,
    "explanation": "Vertebrae surround and shield the delicate spinal cord."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "Blood cells are produced in the",
    "image": "",
    "options": ["Bone marrow", "Only muscles", "Only skin", "Only nerves"],
    "correct": 0,
    "explanation": "Red and white blood cells and platelets are formed in the marrow of certain bones."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "Joints are where",
    "image": "",
    "options": ["Two or more bones meet", "Only muscles end", "Only nerves begin", "Only blood starts"],
    "correct": 0,
    "explanation": "Joints allow movement by connecting bones (e.g. knee, elbow, shoulder)."
  },
  {
    "topic": "The Skeletal System of Man",
    "question": "Muscles move bones by",
    "image": "",
    "options": ["Contracting and pulling on bones", "Only pushing bones", "Only melting bones", "Only dissolving bones"],
    "correct": 0,
    "explanation": "Muscles work in pairs; when one contracts, it pulls a bone to create movement."
  },
  {
    "topic": "The Endocrine System",
    "question": "Hormones are",
    "image": "",
    "options": ["Chemical messengers carried in the blood", "Only nerves", "Only muscles", "Only bones"],
    "correct": 0,
    "explanation": "Endocrine glands secrete hormones directly into the bloodstream to regulate body processes."
  },
  {
    "topic": "The Endocrine System",
    "question": "Insulin is produced by the",
    "image": "",
    "options": ["Pancreas", "Thyroid only", "Adrenal only", "Kidney only"],
    "correct": 0,
    "explanation": "Insulin lowers blood sugar by helping cells absorb glucose."
  },
  {
    "topic": "The Endocrine System",
    "question": "Thyroxine controls",
    "image": "",
    "options": ["Metabolic rate", "Only growth of nails", "Only skin colour", "Only hair length"],
    "correct": 0,
    "explanation": "Thyroxine from the thyroid gland regulates how quickly the body uses energy."
  },
  {
    "topic": "The Endocrine System",
    "question": "Adrenaline prepares the body for",
    "image": "",
    "options": ["'Fight or flight' action", "Only sleeping", "Only digestion", "Only growth"],
    "correct": 0,
    "explanation": "Adrenaline increases heart rate, breathing and energy availability during stress or danger."
  },
  {
    "topic": "The Endocrine System",
    "question": "The pituitary gland is called the",
    "image": "",
    "options": ["Master gland", "Only salivary gland", "Only sweat gland", "Only oil gland"],
    "correct": 0,
    "explanation": "The pituitary secretes hormones that control many other endocrine glands."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Malaria is spread by",
    "image": "",
    "options": ["Female Anopheles mosquitoes", "Only drinking water", "Only shaking hands", "Only eating food"],
    "correct": 0,
    "explanation": "Infected female Anopheles mosquitoes transmit the malaria parasite to people."
  },
  {
    "topic": "Communicable and Non-Communicable Diseases",
    "question": "Diabetes is a",
    "image": "",
    "options": ["Non-communicable disease", "Only communicable disease", "Only insect bite", "Only injury"],
    "correct": 0,
    "explanation": "Diabetes does not spread from person to person; it is a non-communicable disease."
  },
  {
    "topic": "Project Work",
    "question": "A hypothesis should be",
    "image": "",
    "options": ["Testable through experiment", "Only a guess with no test", "Only a fact", "Only a story"],
    "correct": 0,
    "explanation": "A good scientific hypothesis can be supported or rejected by evidence from an experiment."
  },
  {
    "topic": "Project Work",
    "question": "Controlling variables means",
    "image": "",
    "options": ["Keeping all factors constant except the one being tested", "Changing everything at once", "Ignoring all factors", "Only changing the result"],
    "correct": 0,
    "explanation": "A fair test changes only the independent variable and measures its effect on the dependent variable."
  },
  {
    "topic": "Project Work",
    "question": "The scientific method ends with",
    "image": "",
    "options": ["Drawing a conclusion", "Only asking a question", "Only guessing", "Only stopping"],
    "correct": 0,
    "explanation": "After observing and analysing results, the investigator draws a conclusion about the hypothesis."
  },
  {
    "topic": "Project Work",
    "question": "The aim of an experiment states",
    "image": "",
    "options": ["What the investigator intends to find out", "Only the result", "Only the conclusion", "Only the apparatus"],
    "correct": 0,
    "explanation": "The aim defines the purpose or question the experiment is designed to answer."
  },
  {
    "topic": "Project Work",
    "question": "Results should be",
    "image": "",
    "options": ["Recorded accurately and honestly", "Only guessed", "Only invented", "Only hidden"],
    "correct": 0,
    "explanation": "Accurate records allow others to check and repeat the investigation."
  },
  /* ===== Additional questions to bring Foundation Science topics to 10+ ===== */
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "The tongue is kept moist by",
    "image": "",
    "options": ["Saliva", "Only blood", "Only air", "Only mucus from the nose"],
    "correct": 0,
    "explanation": "Salivary glands release saliva that keeps the tongue and mouth moist."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Taste signals are sent to the brain by the",
    "image": "",
    "options": ["Facial and glossopharyngeal nerves", "Only the optic nerve", "Only the auditory nerve", "Only the spinal cord"],
    "correct": 0,
    "explanation": "Taste receptor cells send signals through cranial nerves to the brain."
  },
  {
    "topic": "Structure and Functions of the Human Tongue",
    "question": "Umami is the taste of",
    "image": "",
    "options": ["Savoury or meaty foods", "Only sweet foods", "Only sour foods", "Only bitter foods"],
    "correct": 0,
    "explanation": "Umami is the fifth basic taste, often described as savoury or meaty."
  },
  {
    "topic": "Structure of the Sensory Cells of the Human Skin",
    "question": "The epidermis is the",
    "image": "",
    "options": ["Outer layer of the skin", "Inner layer only", "Fatty layer only", "Muscle layer only"],
    "correct": 0,
    "explanation": "The epidermis is the thin outer layer of the skin."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "Sinuses are air-filled spaces in the",
    "image": "",
    "options": ["Skull bones around the nose", "Lungs only", "Stomach only", "Heart only"],
    "correct": 0,
    "explanation": "Sinuses lighten the skull, produce mucus, and help warm and moisten air."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "The nasal septum separates the",
    "image": "",
    "options": ["Two nostrils", "Mouth from nose only", "Eyes from ears only", "Brain from skull only"],
    "correct": 0,
    "explanation": "The septum is the wall of cartilage dividing the left and right nasal cavities."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "Sneezing helps to",
    "image": "",
    "options": ["Expel irritants from the nasal passages", "Only swallow food", "Only digest food", "Only hear better"],
    "correct": 0,
    "explanation": "Sneezing forcefully expels dust, germs and irritants from the nose."
  },
  {
    "topic": "Structure and Functions of the Nose",
    "question": "Pharyngitis is inflammation of the",
    "image": "",
    "options": ["Throat (pharynx)", "Nose only", "Ear only", "Lung only"],
    "correct": 0,
    "explanation": "Pharyngitis is a sore throat caused by inflammation of the pharynx."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens forms a",
    "image": "",
    "options": ["Virtual, upright and magnified image", "Only real inverted image", "Only coloured image", "Only X-ray image"],
    "correct": 0,
    "explanation": "When the object is within the focal length, a convex lens forms a virtual upright magnified image."
  },
  {
    "topic": "The Hand Lens",
    "question": "The magnification of a hand lens depends on its",
    "image": "",
    "options": ["Focal length and lens curvature", "Only colour", "Only weight", "Only price"],
    "correct": 0,
    "explanation": "A shorter focal length and greater curvature give higher magnification."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A gear system is used to",
    "image": "",
    "options": ["Change speed and force between rotating shafts", "Only tell time", "Only measure length", "Only produce light"],
    "correct": 0,
    "explanation": "Gears transmit motion and can increase force or speed depending on their sizes."
  },
  {
    "topic": "Other Types of Machines",
    "question": "A hydraulic jack lifts a car using",
    "image": "",
    "options": ["Liquid pressure (Pascal's principle)", "Only air only", "Only magnetism", "Only sound"],
    "correct": 0,
    "explanation": "Pressure applied to oil in a small cylinder is transmitted to a larger cylinder, lifting the car."
  },
  {
    "topic": "The Plant Kingdom",
    "question": "Bryophytes include",
    "image": "",
    "options": ["Mosses", "Only flowering plants", "Only conifers", "Only fungi"],
    "correct": 0,
    "explanation": "Mosses are non-flowering bryophytes that reproduce by spores and need moist habitats."
  },
  {
    "topic": "Experiments on Pressure",
    "question": "Snowshoes reduce sinking into snow because they",
    "image": "",
    "options": ["Increase area and reduce pressure", "Increase weight only", "Decrease area only", "Only look different"],
    "correct": 0,
    "explanation": "A larger area spreads body weight, reducing pressure on the snow."
  },
  {
    "topic": "The Simplified Periodic Table of Elements",
    "question": "Horizontal rows in the periodic table are called",
    "image": "",
    "options": ["Periods", "Only groups", "Only families", "Only shells"],
    "correct": 0,
    "explanation": "Each period represents a new electron shell being filled."
  },
  {
    "topic": "Arrangement of Electrons",
    "question": "Sodium (Na) has atomic number 11, so its electron arrangement is",
    "image": "",
    "options": ["2,8,1", "2,8,11", "11", "2,9"],
    "correct": 0,
    "explanation": "11 electrons fill the shells as 2 (first), 8 (second), 1 (third)."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "Carbon-12 has 6 protons and",
    "image": "",
    "options": ["6 neutrons", "12 neutrons", "6 electrons only", "0 neutrons"],
    "correct": 0,
    "explanation": "Mass number 12 − 6 protons = 6 neutrons."
  },
  {
    "topic": "Isotopes",
    "question": "Hydrogen has isotopes called",
    "image": "",
    "options": ["Protium, deuterium and tritium", "Only helium", "Only oxygen", "Only carbon"],
    "correct": 0,
    "explanation": "Hydrogen-1 (protium), hydrogen-2 (deuterium) and hydrogen-3 (tritium) are isotopes."
  },
  {
    "topic": "Metals and Non-Metals",
    "question": "A metal that is a poor conductor of electricity is",
    "image": "",
    "options": ["Stainless steel (relative to copper)", "Only copper", "Only silver", "Only gold"],
    "correct": 0,
    "explanation": "Most metals conduct well, but alloys like stainless steel conduct less than pure copper."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "Magnesium oxide contains",
    "image": "",
    "options": ["Magnesium and oxygen", "Only magnesium", "Only oxygen", "Magnesium and hydrogen"],
    "correct": 0,
    "explanation": "The name shows the two elements: magnesium + oxygen → magnesium oxide."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of calcium carbonate is",
    "image": "",
    "options": ["CaCO₃", "CaCO₂", "Ca₂CO₃", "CaC"],
    "correct": 0,
    "explanation": "Ca²⁺ combines with carbonate (CO₃²⁻) in a 1:1 ratio."
  },
  {
    "topic": "Chemical Equations",
    "question": "The arrow (→) in a chemical equation means",
    "image": "",
    "options": ["Yields or produces", "Only equals", "Only plus", "Only minus"],
    "correct": 0,
    "explanation": "The arrow separates reactants from products and means 'yields' or 'produces'."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "Testes produce",
    "image": "",
    "options": ["Sperm and male hormones", "Eggs only", "Urine only", "Milk only"],
    "correct": 0,
    "explanation": "Testes produce sperm and the hormone testosterone."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Washing hands with soap helps prevent",
    "image": "",
    "options": ["Diarrhoea and respiratory infections", "Only broken bones", "Only sunburn", "Only tooth decay"],
    "correct": 0,
    "explanation": "Soap removes germs from hands, stopping the spread of many infectious diseases."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Using mosquito nets helps prevent",
    "image": "",
    "options": ["Malaria", "Only tooth decay", "Only broken bones", "Only sunburn"],
    "correct": 0,
    "explanation": "Insecticide-treated nets protect people from mosquito bites while sleeping."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Boiling water kills",
    "image": "",
    "options": ["Disease-causing microbes", "Only oxygen", "Only minerals", "Only taste"],
    "correct": 0,
    "explanation": "Boiling water destroys bacteria, viruses and parasites that cause waterborne diseases."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "Covering food protects it from",
    "image": "",
    "options": ["Flies and dust that carry germs", "Only light", "Only heat", "Only sound"],
    "correct": 0,
    "explanation": "Uncovered food can be contaminated by flies, dust and microbes."
  },
  {
    "topic": "Treatment and Control Methods of Diseases",
    "question": "A balanced diet helps prevent",
    "image": "",
    "options": ["Deficiency diseases such as scurvy and rickets", "Only broken bones", "Only sunburn", "Only tooth decay"],
    "correct": 0,
    "explanation": "Eating a variety of foods supplies vitamins and minerals that prevent deficiency diseases."
  },
  {
    "topic": "The Hand Lens",
    "question": "A hand lens is also called a",
    "image": "",
    "options": ["Magnifying glass", "Microscope only", "Telescope only", "Mirror only"],
    "correct": 0,
    "explanation": "A hand lens is a simple magnifying glass used to enlarge small objects."
  },
  {
    "topic": "Atomic Mass and Atomic Numbers",
    "question": "The atomic number of oxygen is 8, so oxygen has",
    "image": "",
    "options": ["8 protons", "8 neutrons only", "8 electrons only", "0 protons"],
    "correct": 0,
    "explanation": "Atomic number equals the number of protons, which identifies the element."
  },
  {
    "topic": "Isotopes",
    "question": "Isotopes have different",
    "image": "",
    "options": ["Mass numbers", "Only proton numbers", "Only element names", "Only colours"],
    "correct": 0,
    "explanation": "Isotopes differ in neutron count, so they have different mass numbers."
  },
  {
    "topic": "Compounds and Naming Compounds",
    "question": "Sodium chloride contains",
    "image": "",
    "options": ["Sodium and chlorine", "Only sodium", "Only chlorine", "Sodium and oxygen"],
    "correct": 0,
    "explanation": "The name sodium chloride shows it is made of sodium and chlorine (chloride)."
  },
  {
    "topic": "Chemical Formulae of Compounds",
    "question": "The formula of water is H₂O because",
    "image": "",
    "options": ["It has 2 hydrogen atoms and 1 oxygen atom", "It has 2 oxygen atoms only", "It has 2 helium atoms", "It has 20 atoms"],
    "correct": 0,
    "explanation": "The subscript 2 after H means two hydrogen atoms; O with no subscript means one oxygen atom."
  },
  {
    "topic": "Chemical Equations",
    "question": "In 2H₂ + O₂ → 2H₂O, the coefficient 2 before H₂ means",
    "image": "",
    "options": ["Two molecules of hydrogen", "Two atoms only", "Two elements only", "Two reactions"],
    "correct": 0,
    "explanation": "Coefficients in an equation indicate the number of molecules (or moles) of each substance."
  },
  {
    "topic": "The Human Reproductive System",
    "question": "Puberty is the stage when",
    "image": "",
    "options": ["The body becomes capable of reproduction", "Only hair falls out", "Only teeth grow", "Only height stops"],
    "correct": 0,
    "explanation": "Puberty is when the reproductive organs mature and the body becomes capable of reproduction."
  }
];
