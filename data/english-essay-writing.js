// Tech Monster — Essay Writing Masterclass (WAEC / GABECE continuous writing)
// Companion to the letter masterclasses (data/english-letter-writing.js and
// data/english-letter-writing-formal.js). Covers the four marking criteria
// (COEMA), the characteristics of a good essay, and the seven WAEC essay
// types — narrative, descriptive, argumentative/debate, article, expository,
// creative and speech — each with features and full model answers.
// Rendered by js/english-guides.js in the Library English Book (Grade 9).
window.englishEssayGuide = {
  id: "essay-masterclass",
  title: "Essay Writing — Continuous Writing Masterclass",
  intro:
    "Essay writing is the other topic under continuous writing in English Language. An essay is a piece of writing based on one's notion, perception or viewpoint of a situation, an action or an event — a piece of writing in which one expresses one's ideas, thoughts and judgments on a given topic. In WAEC / GABECE Paper 2 you will meet at least one continuous-writing question: a narrative, a description, an argument, an article, an explanation, a story illustrating a saying, or a speech. Every essay is marked on the same four criteria — COEMA — worth 50 marks in all, and about 450 words is the expected length. This masterclass teaches you the criteria, the characteristics of a good essay, and the seven essay types with full model answers.",

  // ===================== STANDARD MARKING GUIDE =====================
  marking: {
    title: "The four features of a good essay — COEMA (50 marks)",
    items: [
      {
        name: "Content",
        marks: "10 marks",
        detail:
          "The content of an essay is largely determined by the purpose of the essay. With the topic well understood, the purpose becomes clear and the content becomes apparent. The examiner wants to know whether you stick to the topic you have chosen and whether the topic has been properly treated. A candidate who writes off topic can score NO mark at all under content. Write about 450 words focusing on the demands of the essay — every paragraph must answer the question.",
      },
      {
        name: "Organisation",
        marks: "10 marks",
        detail:
          "The examiner wants to see how well you have organised the essay: whether the points are properly arranged and developed, the presentation, the paragraphing, and the correct form of introduction and conclusion. Write in paragraphs, develop points logically and present them systematically. Use link words or connectives to join one paragraph to another — furthermore, moreover, in addition to, nonetheless, however — and use them appropriately.",
      },
      {
        name: "Expression",
        marks: "20 marks",
        detail:
          "The examiner asks: is the language suitable to the topic? Are the sentences awkward or clumsy? Do you know the meaning and application of figurative expressions such as simile, metaphor, personification and idioms? Do you show a fairly good command of English? Expression carries the highest marks of the four features — it is your expression that reveals to the examiner whether you are good or weak in English. Build a good vocabulary and make the language appropriate for the intended audience.",
      },
      {
        name: "Mechanical Accuracy",
        marks: "10 marks",
        detail:
          "The examiner takes a very close and critical look at spelling mistakes, punctuation errors, grammatical mistakes, wrong use of words and wrong capitals. Examiners are strict here: for every mistake, half a mark is deducted, up to the whole 10. Be mindful of spellings, tenses, capital letters and punctuation — and ALWAYS proofread the essay before submitting it.",
      },
    ],
  },

  // ===================== CHARACTERISTICS OF A GOOD ESSAY =====================
  characteristics: [
    "Understand the topic very well before attempting the question.",
    "Use tenses properly — the simple present or the simple past, kept consistent throughout.",
    "Avoid spelling mistakes — every error costs half a mark.",
    "Give the essay a topic, title or heading.",
    "Arrange the essay in paragraphs; each paragraph carries its own idea.",
    "Write simple, punctuated sentences so the ideas are meaningful to the reader.",
    "Introduce idiomatic expressions, phrasal verbs and colourful adjectives — they give the essay quality.",
    "Arrive at a definite finishing point — the conclusion should be brief, fresh and suitable.",
    "Read over the essay to correct possible mistakes before submitting.",
  ],

  // ===================== THE SEVEN ESSAY TYPES =====================
  types: [
    {
      key: "narrative",
      icon: "📖",
      name: "A. Narrative Essay",
      definition:
        "A narrative essay is simply a tale — the telling of a past event, or an account of something that has happened which one is retelling to another person. It could be an imaginary story made up by the narrator (fiction), or a true-life account of what really happened (non-fiction). Sometimes we give a first-hand account of what we witnessed or experienced ourselves.",
      features: [
        "It should have a topic heading.",
        "The writer must understand the topic before attempting it.",
        "The story must be convincing.",
        "The tense must be the past or the past participle.",
        "The story must involve a lot of imagination and creativity.",
        "Avoid using words or expressions you do not understand.",
        "The presentation of characters must be clearly done.",
        "There must be orderliness in the arrangement of the story within the paragraphs.",
        "The narrator must introduce the conflict — what happened.",
        "Be concerned with the incident, the person involved, and the time and place of the event.",
        "The story should be well told — the language matters.",
        "It should contain an element of suspense in the presentation.",
        "The story must appeal to the senses of smell, touch, sight, feeling and taste.",
        "Divide the story into three parts: the beginning, the middle (climax) and the ending.",
      ],
      model: {
        question:
          "You have just spent your holiday in a neighbouring country with a friend. Narrate your experience to your other friends, describing what you found interesting about the customs, food, dress and way of life of your hosts.",
        title: "HOW I SPENT MY HOLIDAY",
        whyItScores:
          "A past-tense journey story in clear order (departure → arrival → visits → lessons → return), with concrete names and places, sensory detail and a definite ending — full Content and Organisation marks.",
        paragraphs: [
          {
            label: "P1 — The promise and the journey",
            text: "The school vacated on the 30th of June, 2015. My parents promised that if I passed my exams, they would send me to Dakar to spend my holiday with one of my friends. By the grace of Allah, I passed excellently well, and immediately I got home, my parents arranged for my journey to Dakar. On the 10th of July, I was set. My parents saw me off to the ferry terminal, and we departed for Barra, where we boarded a vehicle to Karang and continued the journey throughout the day. I got to Dakar at exactly four o'clock in the evening. My friend was living at Pikine, on the outskirts of Dakar. On seeing me, she was very happy, and I was given a rousing welcome.",
          },
          {
            label: "P2 — First days and sightseeing",
            text: "We exchanged pleasantries and got into the house. I told her about life in The Gambia and my journey to Dakar. She also told me a little about Dakar, and she assured me that I was going to have a nice time. Three days after my arrival, she took me round Dakar. We went round the city; we visited the National Museum, the African Reminiscence Monument that was built recently to depict the slave trade and its effects; we also visited the TFM television station, Anta Diop University, the biggest in Dakar, and the biggest mosque in Madina.",
          },
          {
            label: "P3 — Learning the customs of the Serers",
            text: "After a week, she told me about the customs of the Serers. About a week later, I had studied them, knew their culture very well, and could speak a little of their language. I realised that their mode of dressing is more or less the same as ours, although there was a little difference. In fact, I really cherished their mode of dressing; I also liked their food, and this prompted me to learn the way they cook it. I learnt how to prepare their style of 'benachin', and I also learnt how to make 'cherreh'. I really enjoyed everything about Dakar.",
          },
          {
            label: "P4 — What my host taught me",
            text: "My host also displayed some characteristics which caught my fancy. She played music and taught me some dance steps; she also taught me some things I did not know before, things such as basket weaving, mat weaving and decoration on dresses.",
          },
          {
            label: "P5 — Kaolack and Goree Island",
            text: "I stayed for five weeks, and we later decided to visit my aunt in Kaolack, who was married there. We left for Kaolack and arrived there late at night. My aunt welcomed us very well and accommodated us. We spent only a week with her, but we really enjoyed it, and it can never be erased from my memory. We returned to Dakar on a Thursday evening. I decided to come back to The Gambia, but before then, I visited Goree Island, where some people told me about the importance of the place and its historical ties with the slave trade.",
          },
          {
            label: "P6 — Homecoming",
            text: "I returned to Banjul as usual, by road. I really enjoyed the trip. My parents were waiting for me at the terminal gate to pick me up. I was happy to see them both, and I was also anxious to tell them about my experiences in Dakar and Kaolack. I was happy to be with my family once more, and that night I told them everything I saw. I went to sleep at 11:45 p.m., but all through the night, I dreamed about the journey, my stay in Dakar, and all the other nice things I saw.",
          },
        ],
      },
    },
    {
      key: "descriptive",
      icon: "🖼️",
      name: "B. Descriptive Essay",
      definition:
        "A descriptive essay is a piece of writing based on a vivid imagination of a situation or an event — it gives a picturesque account. It describes a scene, an event, a person, an object or a place as clearly as possible so that the reader can have a vivid mental picture of what the person or thing looks like. It demands that you have a clear picture in your mind of what you desire to describe.",
      features: [
        "A descriptive essay paints a picturesque situation of an event.",
        "The tenses used must be in the present.",
        "It must be related to the question.",
        "It must have a topic or heading.",
        "The writer must reveal the identity of what he/she wants to describe.",
        "The writer should be able to explain how or where to find the object of description — the location or address of the place, person or object.",
        "Use nouns, adjectives, verbs and adverbs to make the description clear. Instead of 'I travelled by bus', say 'I travelled by a government bus with registration number BJL 1673'.",
        "Decide which details will best bring out the essential features of the person or object being described.",
        "Make the description lively by using figures of speech such as simile, metaphor and onomatopoeia.",
        "The essay must have a conclusion, but not the name or address of the writer.",
        "If the essay is meant for publication, write your name after the conclusion.",
      ],
      model: {
        question: "Describe a local festival in your village.",
        title: "A LOCAL FESTIVAL IN MY VILLAGE",
        whyItScores:
          "Present-tense picture painting with a named place, origin story, preparation, the day itself and a conclusion on importance — the reader can SEE the festival.",
        paragraphs: [
          {
            label: "P1 — Introduction",
            text: "The coming of western civilisation and its acceptance by our people have made us forget our past. Our heritage was traded away for the white man's ways, and our tradition, which should thrill our youths, is considered old-fashioned and outdated.",
          },
          {
            label: "P2 — Why I changed my mind",
            text: "I must confess that I shared this opinion with my peers for some time, but I was made to give it a second thought when I happened to follow my parents to our home town for a festival.",
          },
          {
            label: "P3 — The place and its origin",
            text: "Farato is a small village in the West Coast Region of The Gambia. Every year, the sons and daughters of Farato and the neighbouring villages travel from far and near to convene at the Farato market area, the venue of the cassava festival. The origin of this festival goes as far back as the time when the first group of settlers fled to Kassama for safety and decided to dwell there. I remember my grandmother telling me that no celebration of the festival surpasses the very first one organised by the settlers. Though none of us was present then, tradition has it that the first celebration was held at the summit of the Farato hill, and the joy shared among the people was enough to pull the heavens down.",
          },
          {
            label: "P4 — The preparation",
            text: "The cassava festival, which I witnessed purely as an active participant, was all the excitement I could wish for. It all began on the Friday preceding the festival day, which fell on a Sunday. On that day, all the men in the village woke up early and left for their farms, returning only in the evening with the children carrying large tubers of cassava on their heads. Some of the tubers were deposited at the market place, and only a few were taken home for use. Saturday night passed on as usual, with the men gathering to talk over several gourds of freshly harvested groundnuts, and the women turned up at the market place very early in the morning in preparation for the following day.",
          },
          {
            label: "P5 — The festival day itself",
            text: "Very early on the festival morning, the women set off peeling the cassava and getting all the ingredients together for the cooking, while the boys began their masquerade performance. The teenage girls, my peers, were not allowed to do the cooking, as it was believed to be the preserve of the mothers; the cooking was therefore left to them. The festival was scheduled to begin at noon, and as early as 5:00 a.m. the women were up putting the finishing touches to their cooking, and finally the cutting of the cassava began. The real festival started when the 'Alkalo' of the village arrived; he was followed by the masquerades, and the young girls were beautifully dressed. I was among the girls, and as the drummers began beating the drums, we danced to the traditional rhythm. I joined the other girls to serve food; there was more than enough to go round, and everybody ate to their satisfaction.",
          },
          {
            label: "P6 — The end and the importance",
            text: "Finally, after all the dancing, singing, eating and merry-making, the festival came to an end in the early hours of Monday morning. The young girls were left to clean up the market place in preparation for the Monday market, after the elderly men and women had left. The cassava festival is of great importance to the Farato people because it is the only time of the year when the constituent villages are brought together by the celebration. It is also a time of thanksgiving, when the villagers express their gratitude to Allah. As a person, it also gave me a sense of inner pride, knowing that I really do have a heritage which I can be proud of.",
          },
        ],
      },
    },
    {
      key: "argumentative",
      icon: "⚖️",
      name: "C. Argumentative / Debate Essay",
      definition:
        "An argumentative essay has the sole idea of convincing and persuading reasonable people. It demands that you carefully consider an issue which has two sides to it and prove that one side has more merit than the other. You are expected to argue logically for or against a given topic, like a debate. Topics in this category demand that you: (a) prove a point, (b) express an opinion, and (c) strike a balance between the two sides of an issue.",
      features: [
        "Begin with the vocatives — the traditional way of starting off.",
        "You must definitely take a side or position.",
        "The tenses will have to be in the present.",
        "The reasons advanced must be clearly convincing.",
        "Give reasons that will persuade the examiner to support your views or opinions.",
        "Do not be illogical in your argument, otherwise you will lose marks.",
        "Have many good points at your disposal, for or against the motion.",
        "Make sure you are really convinced about the side you are supporting — if you support a side you do not believe in, you will soon run out of ideas.",
        "Produce a kind of balanced argument — look at both sides of the coin.",
        "Support your argument with facts and figures.",
        "It is not bad to use other people's material to support the claims you want to make.",
      ],
      protocol: [
        {
          step: "a. Greetings",
          detail:
            "Study the question well and see where the debate is to take place, so that you can greet the guests appropriately: 'Mr. Chairman, Panel of Judges, Accurate Time-keeper, Co-debater, Distinguished Ladies and Gentlemen, good morning / good afternoon / Assalamu Alaykum to you all.'",
        },
        {
          step: "b. Introduction",
          detail:
            "The presentation of the topic and the declaration of the position you are arguing for — whether in favour of or against the topic.",
        },
        {
          step: "c. Argument",
          detail:
            "The body has to be technical: the presentation of logical points to substantiate your opinion (the writer must give reasons for his/her particular view) and practical solutions.",
        },
        {
          step: "d. Conclusion",
          detail:
            "The writer reinstates the point of argument in support of his/her opinion, calling all present by their identities (Mr. Chairman Sir, ladies and gentlemen, etc.).",
        },
        {
          step: "e. Publication",
          detail:
            "If the essay is for publication, the writer may add his/her name, street, town, etc. at the end.",
        },
      ],
      model: {
        question:
          "You are the main speaker in a school debate on the topic: 'We are happier than our fore-fathers.' Write your speech for or against the motion.",
        title: "WE ARE HAPPIER THAN OUR FORE-FATHERS",
        whyItScores:
          "Full vocatives, a clearly declared position, four signposted arguments (infrastructure, science and technology, information, transport) in the present tense, and a conclusion that reinstates the motion.",
        paragraphs: [
          {
            label: "P1 — Vocatives + declaration of position",
            text: "Mr. Chairman, Panel of Judges, Accurate Time-keeper, Co-debater, fellow students, Ladies and Gentlemen, good morning and Assalamu Alaykum to you all. I am Kawsu Komma, a student of Masroor Senior Secondary School, Old Yundum. I am here to support the motion which says, 'We are happier than our fore-fathers.' If we look at the word 'happy', it is the opposite of 'sad' or 'unhappy'; my argument is therefore totally in support of the topic.",
          },
          {
            label: "P2 — First argument: infrastructure",
            text: "To start with, let us look at the infrastructural facilities we have around us. During the time of our fore-fathers, there was nothing like roads, pipe-borne water, electricity or railways, to mention just a few. But look at what we have nowadays: all these infrastructural facilities are everywhere, in every nook and cranny of our towns and cities all over the country.",
          },
          {
            label: "P3 — Second argument: science and technology",
            text: "Furthermore, if we look at the area of science and technology, we can discover that we are happier than our fore-fathers. Science and technology have made things easier for us now, which was not the case during the time of our fore-fathers. For instance, during their time there was nothing like computers, and everything was being done anyhow. But today you can store information on the computer and retrieve it whenever you want it.",
          },
          {
            label: "P4 — Third argument: information dissemination",
            text: "In addition, in the area of information dissemination, we can say that we are happier than ever. During the time of our fore-fathers, there was nothing like radio, television or film. But now we have radio and television, which readily give us information about events taking place in society. Recently, we even have satellite systems that tell us in The Gambia what is happening in other parts of the world without our travelling there physically, thereby making the world a global village.",
          },
          {
            label: "P5 — Fourth argument: transport",
            text: "With all the afore-mentioned points, we are happier than our fore-fathers in the area of today's transport system, which can in no small measure be compared with what it used to be during the time of our fore-fathers. Today, we can talk of cars, lorries and aeroplanes, to mention but a few. In those days, the only means of transportation was trekking, and in some areas people used horses and donkeys. Today, you can get to America or Europe within hours. All these things culminate in making us happier than our fore-fathers.",
          },
          {
            label: "P6 — Conclusion",
            text: "In conclusion, I believe very strongly that I have been able to convince, and not to confuse, you that we are happier than our fore-fathers, based on all the points highlighted above. Thank you for your kind attention.",
          },
        ],
      },
    },
    {
      key: "article",
      icon: "📰",
      name: "D. Article Writing",
      definition:
        "Article writing is another aspect of continuous writing, based on topical or contemporary issues which affect a group of people, a community, a state or the entire world. An article is purposely tailored for publication in a newspaper or magazine — it is NOT the same as writing a letter to the editor of a newspaper.",
      features: [
        "Every article must have an introduction, causes, consequences/effects and solutions.",
        "A candidate is expected to write the title or heading of the article clearly at the top.",
        "Write an introductory paragraph which gives the reader an insight into the topic.",
        "The article must be divided into paragraphs: the introduction, the body and the conclusion.",
        "The content must be relevant to the question.",
        "The conclusion bears your name and your class, town or country, depending on where it will be published.",
      ],
      bylines: [
        "School magazine: name + class — e.g. Jainaba Dahaba, 12C2.",
        "National newspaper: name + town + region — e.g. Jainaba Dahaba, New Yundum, West Coast Region.",
        "International magazine: name + town + region + country — e.g. Jainaba Dahaba, New Yundum, West Coast Region, The Gambia.",
      ],
      model: {
        question:
          "Write an article for publication in your school magazine on the topic: Science and Technology in National Development.",
        title: "SCIENCE AND TECHNOLOGY IN NATIONAL DEVELOPMENT",
        whyItScores:
          "Introduction that defines the key terms, body paragraphs each carrying one contribution (equipment, transport, medicine, work, urbanisation), a conclusion, and the correct byline for a school magazine.",
        paragraphs: [
          {
            label: "P1 — Introduction + definitions",
            text: "There is no doubt that science and technology have led to the development of our great country and indeed the whole world. In order to understand the contribution of science to national development, I would like to define science and technology. Science is the study of knowledge which can be made into a system, usually depending on seeing and testing facts and stating general laws. Technology is the practical application of scientific knowledge or inventions to the solving of everyday problems or to facilitating tedious human activities.",
          },
          {
            label: "P2 — Machines and industries",
            text: "The products of science and technology have contributed to the development of countries such as America, Japan, China and India, and to an extent our country, The Gambia. Through the application of scientific knowledge, people have been able to make and produce equipment and machines used in industries and even in our homes.",
          },
          {
            label: "P3 — Transport",
            text: "Also, science and technology have helped in easing the stress encountered in the movement of people and goods from one place to another, through the invention of automobiles, aircraft and so on. People have been able to move around the country and outside the country with ease because of the availability of modern means of transportation.",
          },
          {
            label: "P4 — Medicine and communication",
            text: "Furthermore, science and technology have helped in the area of medicine. Some natural herbs are converted to drugs with the aid of modern equipment, and these drugs are used in our hospitals and homes by people who are sick. Equally important is the fact that science and technology have made work easier for people through the invention of computers and machines. These machines have taken over the activities of man, made work easier and made it faster. With the invention and availability of communication media such as the telephone, television and radio, one can have contact with friends and relations in faraway places.",
          },
          {
            label: "P5 — Urban transformation",
            text: "Moreover, rural communities are transformed into urban settlements through science and technology. This is made possible by the availability of electricity, pipe-borne water, good roads, schools and hospitals, to mention but a few. In this regard, there has been a population explosion in these new urban areas.",
          },
          {
            label: "P6 — Conclusion",
            text: "Indeed, our country and some other African countries are underdeveloped because science and technology have not been given their proper place in the scheme of things. For us to develop and meet the challenges of the time, science and technology must be given adequate attention.",
          },
        ],
        byline: "Jainaba Dahaba,\n12C2",
      },
    },
    {
      key: "expository",
      icon: "🔧",
      name: "E. Expository / Explanatory Essay",
      definition:
        "An expository essay is meant to convey an idea to people clearly, so that they come to know and understand the field being dealt with. Expository writers seek to explain a subject: through such writing we find out what something is, how it operates, how it is prepared, how to do something, or why one thing causes another. The expository essay must maintain objective views of the subject — it rarely includes connotative words, adjectives or personal utterances. It takes the form of: (i) explanation of a process, (ii) giving instructions, or (iii) explanation of an idea.",
      features: [
        "The essay should always have a subject title or heading.",
        "Give information step by step, putting careful thought into the explanation to fully guide the reader.",
        "Start by providing the general information that should be known at the start — what the explanation is about.",
        "State the tools, ingredients or other materials needed.",
        "If you are explaining an activity, say how many people may participate.",
        "Organise your explanation in order.",
        "Restate the topic sentences by showing the importance of the process or object, depending on the nature of the question.",
        "Have the facts at your fingertips.",
        "The tense used is mostly the simple present or present perfect, depending on the question.",
        "If the question does not take the form of a letter or an article, do not write your name beneath the essay.",
        "Your language should be formal — avoid slang, clichés, idiomatic expressions and meaningless phrases.",
        "Clarity of expression is important: state your facts, instances and points clearly.",
        "Arrange your points or ideas in a logical sequence.",
        "Use phrases or word linkers to link one paragraph to another.",
      ],
      model: {
        question:
          "Your British friend has never been to The Gambia and saw a tourist guide brochure in a tour operator's office. He browsed through the leaflet and became fascinated by the different kinds of local dishes prepared in The Gambia. Explain to your British friend how to prepare one of those local dishes.",
        title: "HOW TO PREPARE BENACHIN",
        whyItScores:
          "A process explanation in order: definition, ingredients, method step by step, and a closing recommendation — the reader could actually cook the dish from the essay.",
        materials: [
          "A kilo of steak meat or some good raw fish",
          "Vegetable oil",
          "Onions",
          "Fresh pepper",
          "A tin of tomato paste",
          "Some fine salt",
          "Four garden eggs",
          "Five Irish or sweet potatoes",
          "Vegetables such as carrot, tomato and egg",
          "Seasonings: black pepper or thyme, shallot",
          "Cubes of Jumbo",
          "Garlic",
          "Some cups of rice, depending on the number of people to be served",
        ],
        paragraphs: [
          {
            label: "P1 — Introduction",
            text: "'Benachin', otherwise known as 'Jollof rice' in some regions of West Africa, is a favourite dish in The Gambia, and it is popular among almost all the ethnic groups in the country. Although it originally comes from the Wollof ethnic group, this dish is very simple to prepare and it is cost-effective, depending on one's taste.",
          },
          {
            label: "P2 — Preparing the meat and fish",
            text: "The raw fish is cleaned, the scales removed, then cut into sizeable pieces and salted. The meat is cut into small pieces, washed properly and boiled in a pot with salt added. When the meat boils to tenderness, the pot is brought down from the fire and replaced with another cooking pot containing vegetable oil. The garden eggs are washed, cut longitudinally into four lobes each, and set aside for later use. As the frying of the fish continues, sliced onions and Irish or sweet potatoes are either boiled or fried and removed from the pot. When the meat and fish are fried till they are brown in colour, the water in which the meat was boiled is poured into the boiling pot to prevent the fish or meat from burning.",
          },
          {
            label: "P3 — Building the stew",
            text: "After boiling for about ten to fifteen minutes, the tomato paste is added to give the sauce a reddish colour. At this point, fresh pepper and garlic (shallot) are ground and added into the steaming pot. The garden eggs that were cut and the boiled or fried potatoes are now added. The salt and Jumbo are evenly dissolved, and the fish is broken into small pieces. Taste the sauce from time to time to ensure the salt is just enough. The pot is covered and allowed to boil for another five minutes to reduce some of the water; at this point the stew is ready.",
          },
          {
            label: "P4 — The rice",
            text: "At this juncture, depending on how many people the food is meant for, the required number of cups of rice is measured, washed, and the water allowed to drain from it. The rice is then emptied into the pot of stew and mixed with a strong wooden spoon. Some water is added, and from this point the steaming pot should be checked frequently to see whether the rice is cooked. If the rice is cooked and the pot has dried up, reduce the fire and leave the pot on the fire for a while. After some minutes, the 'Benachin' (Jollof rice) is dished up, ready to serve.",
          },
          {
            label: "P5 — Closing recommendation",
            text: "Indeed, this dish is my favourite, especially for lunch. It is easy to cook, less time is spent in its preparation, and it is heavy and nutritious. I am convinced that if you follow my explanation step by step and prepare this dish well, you may not want to eat any other British dish except 'Benachin'. If you want to prove my assertion right or wrong, just try it yourself. If you do, I request that you write to me about how it tastes after preparing it.",
          },
        ],
      },
    },
    {
      key: "creative",
      icon: "🎭",
      name: "F. Creative Writing",
      definition:
        "Creative writing is equally an act of storytelling — it is based on one's sense of imagination. It is just like the narrative essay, and it tests the ability of students to freely utilise the vocabulary, idioms and figures of speech they have acquired. Before one tells a story, one must be imaginative and highly creative. Creative writing involves writing short stories that ILLUSTRATE a saying, a proverb or a maxim; it may also involve writing a story that ends with a given statement. The questions are idiomatic in nature — if you do not know the idiom used, avoid that question.",
      sayings: [
        "\"The patient dog eats the fattest bone.\"",
        "\"Where there is life, there is hope.\"",
        "\"Make hay while the sun shines.\"",
        "\"Cut your coat according to your cloth.\"",
        "\"A stitch in time saves nine.\"",
        "\"Where there is a will, there is a way.\"",
        "\"Don't count your chickens before they are hatched.\"",
        "\"Look before you leap.\"",
      ],
      features: [
        "Creative writing is not necessarily a true-life story.",
        "The story you write to illustrate the saying must be credible — not an unrealistic story.",
        "Its questions are idiomatic in nature.",
        "Make use of proverbs and idioms in the course of writing.",
        "The meaning of the saying must be obvious from the story.",
        "The story line must reflect the question.",
        "The story may be real or imaginary, but it should be credible and believable.",
        "Make sure your story actually illustrates the saying — you score ZERO under content if the saying does not follow the story.",
        "If the question asks you to end the story with a statement, the essay must, apart from being relevant, END with that statement.",
        "Understand quite clearly the meaning of the saying before embarking on the story.",
        "A well-organised story must have a beginning, a climax and a conclusion, with an interesting plot — the sequence of events.",
        "The paragraphs should be fully developed and your ideas effectively linked for a good mark.",
        "Write a mixture of long and short sentences.",
        "A fascinating, exciting story that does not illustrate the saying scores zero in content and organisation.",
      ],
      models: [
        {
          question:
            "Tell a story that ends with the advice: \"Cut your coat according to your cloth.\"",
          title: "CUT YOUR COAT ACCORDING TO YOUR CLOTH",
          whyItScores:
            "The story follows the down-then-temptation-then-fall pattern and the last line lands exactly on the required statement — the saying is obvious from the story.",
          paragraphs: [
            {
              label: "P1 — A humble, hardworking beginning",
              text: "There lived a girl whose name was Maimuna. She was born into the poor family of Mr. and Mrs. Keita. Being their first child, her parents did all they could to satisfy her. As a girl from a poor background, she did not live a luxurious life. Although Maimuna was a poor girl, she was among the top students in her school. She became very famous in school and was loved by everyone. Maimuna was given various prizes on prize-giving day, and when it was time for the West African Senior School Certificate Examination (WASSCE), she came out with flying colours, which really impressed the school authority.",
            },
            {
              label: "P2 — The reward of hard work",
              text: "On seeing how well she performed in her examination, the school authority decided to sponsor her university education by writing to the Ministry of Higher Education for a scholarship, which was granted. When her parents heard the news, they were happy and encouraged Maimuna to continue her hard work. She gained admission into the University of The Gambia, where she once again became very famous because of her brilliant performances, and was made Vice President of the Students' Union throughout her first and second years. At the end of her first year, she was one of the best students on campus.",
            },
            {
              label: "P3 — The turn: bad company",
              text: "Right from her first year to her second year, she maintained her position as the best. She represented her faculty in many competitions and won various prizes. But when she entered her third year, disaster struck. Maimuna made friends with some bad girls who were all children of wealthy men. From then on, her academic standard started deteriorating rapidly.",
            },
            {
              label: "P4 — Warnings ignored",
              text: "Her lecturers and the Dean of Faculty became alarmed and warned her to desist from her new behaviour, but it all fell on deaf ears. Her friends influenced her to choose a boyfriend because they all had one. She resisted at first, but later, after much persuasion, she gave in. Her friends chose a boyfriend for her and she started going out with him. Within a week she had started acting oddly — drinking and smoking — and she formed the habit of sneaking out late at night with her friends to night clubs for parties.",
            },
            {
              label: "P5 — The fall",
              text: "A month later, the bombshell fell: she found out that she was pregnant, alongside her friends. Her boyfriend dumped her and denied ever knowing her. On hearing the news, the Ministry of Higher Education instantly decided to withdraw her scholarship, so she could not finish her studies. Her friends went for abortions in a specialist hospital sponsored by their parents; but due to Maimuna's inability to pay for the medical expenses, she resorted to going to a quack doctor, where she ended up paying with her life.",
            },
            {
              label: "P6 — The required ending",
              text: "If Maimuna had heeded the advice always given to her by one of her lecturers to \"cut your coat according to your cloth\", she would not have died.",
            },
          ],
        },
        {
          question: "Write a story to illustrate the saying, \"All that glitters is not gold.\"",
          title: "ALL THAT GLITTERS IS NOT GOLD",
          whyItScores:
            "A gift-giving stranger turns out to be a thief — the glitter is exposed, and the story closes on the saying itself.",
          paragraphs: [
            {
              label: "P1 — Introducing the subject of the description",
              text: "Bintou is my cousin. She is endowed with a beautiful appearance. She is tall and slim, and has a fair complexion. Her hair is long and woolly. These are features that make her look like a model from one of the beauty magazines. She often likes to show off, even though she is more beautiful than she is brilliant. Because we are quite close, she tells me a lot about herself.",
            },
            {
              label: "P2 — The stranger appears",
              text: "On a Sunday last year, when I visited her, she told me that she had had an experience. She said that she had met a young man who told her he loved her and wanted to marry her. She said the man drove a Pathfinder car which appeared new. From the way she spoke, I realised that she had fallen deeply in love with the stranger. I asked her, \"Will you marry him?\" and she answered, \"Yes, of course.\" I was not surprised at this answer, but I was worried, so I tried to warn her to be careful with the man.",
            },
            {
              label: "P3 — The glitter: the gifts",
              text: "A few days later, Bintou went to meet the man in their usual meeting place. He gave her many attractive gifts and she was happy. When she returned, she hurried to my place to show me the gold watch, the expensive-looking gold necklace, a pair of glossy shoes, a beautiful handbag and a Samsung mobile phone. The first thing that crossed my mind when I saw these things was that the man might be a crook. The things did not look quite new; I thought they could not have been bought in a shop so recently. Bintou read my mind and asked me what I was thinking. I told her she might be dealing with a man of the underworld, but she simply laughed it off. She could not see how such a harmless-looking gentleman could be a crook. I did not press the matter further.",
            },
            {
              label: "P4 — The mood changes",
              text: "For some weeks, Bintou did not tell me anything new and I did not ask her. Then I noticed that she had grown moody and sad. I asked her about her boyfriend and she looked even sadder than before. After some time she spoke up. She said that she had gone through hell, although she had been spared further harsh treatment by the police — which explained why I had not heard of the mess earlier.",
            },
            {
              label: "P5 — The gold loses its shine",
              text: "She said that the man had been caught one night breaking into a house. He had already stolen a few belongings before the neighbours overpowered him. Some of the things found on him were jewellery, two beautiful pairs of ladies' shoes and a large amount of money. He was then taken to the police station, where he admitted that he had stolen the materials for the sake of his girlfriend who loved such things. He also claimed that he had done this in the past and had given her stolen goods. The police officers came to my cousin, explained why they were there, and recovered from her everything she had received from her friend. They took her away but released her after they were satisfied that she was innocent.",
            },
            {
              label: "P6 — The lesson",
              text: "When she had finished her story, I felt sorry for her. I comforted her, telling her that she should wait patiently for the right man. She should, however, be more careful and remember that all that glitters is not gold.",
            },
          ],
        },
      ],
    },
    {
      key: "speech",
      icon: "🎤",
      name: "G. Speech Writing",
      definition:
        "Speech writing takes the form of an argumentative essay because it is mainly meant to be delivered to an audience. The only difference from the argumentative essay is that there is no argument: the speech should be straightforward and to the point. The presentation gives information on a subject to a particular gathering.",
      features: [
        "Open with the formal address of the officials present (created or real) at the occasion: Mr. Chairman, Board of Governors, Principal, Vice Principal, Senior Teachers, Members of Staff, Colleagues, Ladies and Gentlemen — good morning / good afternoon to you all.",
        "Commence with a polite opening, e.g. \"I am indeed privileged and honoured to stand before this august gathering to deliver my farewell, welcome or re-election speech...\"",
        "Go on to make your points simply but forcefully, to hold the audience's attention.",
        "Give a comprehensive but concise run-down of the year's activities.",
        "Review some of the successful activities of the academic year or your tenure of office — academic (improvement in internal and external exams, awards), sports (inter-house, inter-school, athletics and football), clubs and societies (vibrant Science and Commerce clubs, special new projects).",
        "Express gratitude to: (a) the student body for their co-operation during your term of office, (b) the teachers for sharing their knowledge and experience with you, (c) the administration for their guidance and instruction.",
        "Thank the audience for listening.",
      ],
      model: {
        question:
          "As a head boy, head girl or senior prefect, you have been asked to deliver a speech which should serve as a suitable welcome address to the new principal and as a kind of tribute to the former principal. Write out your speech.",
        title: "A WELCOME ADDRESS FOR OUR NEW PRINCIPAL",
        whyItScores:
          "Full formal address, a tribute paragraph for the former principal, the new principal's credentials, a pledge of loyalty and the closing thank-you — everything a speech needs.",
        paragraphs: [
          {
            label: "P1 — Formal address + privilege",
            text: "Mr. Chairman, Distinguished Guests, Principal, Vice Principal, Staff and Students, Ladies and Gentlemen. I am indeed happy and grateful for the great privilege and honour given to me to say a few words of welcome in honour of our new Principal, Mr. Kebba Fofanah.",
          },
          {
            label: "P2 — The occasion",
            text: "You will all agree with me that today marks another very important occasion in the history of our great school, Masroor Senior Secondary School. With the coming of our new Principal, a new chapter has been added to the annals of this great institution.",
          },
          {
            label: "P3 — Tribute to the former Principal",
            text: "Ladies and Gentlemen, before I go on to unfold some of the good things our new Principal has in store for us, I think it will be very unfair and unwise if I do not mention briefly some of the achievements of our former Principal, Mr. Lamin Saidykhan, who was relieved of his post a few weeks ago. Throughout his tenure of office with us, Mr. Saidykhan proved to be a good and worthy leader of our great school. He showed great love and concern for all the students. In his dealings with staff and students, he showed no tribal, sectional or religious differences. He was a good disciplinarian and an efficient principal. During his tenure in office there was not a single case of student riot. The moral and academic performances of the school were high, and so the school won not only academic prizes but also prizes in sports and other fields.",
          },
          {
            label: "P4 — Welcoming the new Principal",
            text: "Ladies and Gentlemen, with such an enviable record of academic and moral glories, I am particularly happy and proud to welcome our new Principal to this great institution of ours. I am quite sure that, in spite of our enviable record which I have already mentioned, our new Principal will soon find out that there is still room for improvement in many fields.",
          },
          {
            label: "P5 — The new Principal's credentials",
            text: "Our new Principal, Mr. Fofanah, a man with a great wealth of experience behind him, was one of the first students to pursue a full degree course at the University of The Gambia (UTG), where he graduated with a B.A. (Hons) in History. He later left for the University of London for his Master's degree. He has taught in all kinds of institutions of higher learning but decided to return home to serve his country. Ladies and Gentlemen, with such a man of high repute as our new Principal, we have cause to rejoice and to say that there are bright hopes for the future of this noble school.",
          },
          {
            label: "P6 — The pledge",
            text: "However, since the Principal cannot bring all the expected improvements all by himself, we the entire students and staff of this school hereby pledge our loyalty and co-operation to our new Principal. May Allah crown all his efforts with success. May this school grow from strength to strength, to the joy and pride of the students and members of staff.",
          },
          {
            label: "P7 — Closing",
            text: "I thank you all for your kind attention.",
          },
        ],
      },
    },
  ],

  // ===================== PRACTICE EXERCISE =====================
  practice: [
    "Write an article suitable for publication in a national newspaper on the dangers of drugs among youth.",
    "Write an article for publication in your school magazine on the topic: \"Science and Technology in National Development.\"",
    "Your class has just returned from an excursion to an industrial area in your country. Write a detailed description of your experience during the occasion. Your piece should be suitable for publication in the school magazine.",
    "You have been invited by a youth organisation to speak on the topic: unemployment causes indiscipline among youths. Write your speech for or against the proposition.",
    "Write a story for your school magazine beginning or ending with the sentence: \"I wish I had not met the man.\"",
    "You are the chief speaker in a debate on the topic: \"It is the home and not the school that contributes more to moral laxity among students.\" Write your argument for or against the topic.",
    "Describe a cultural event that you have recently watched in your community. Your piece should be suitable for the monthly magazine of the Tourist Board.",
    "You were an eye-witness to a fire outbreak which completely destroyed the main market in your town. Write an article suitable for publication in a national newspaper describing the incident and suggesting measures that could be adopted to prevent a recurrence.",
    "A vehicle in which you were travelling was involved in an accident and several passengers, including yourself, were injured. Describe to sympathisers who have come to visit you in hospital how the accident happened and what followed.",
    "Describe for your club magazine a fire incident that occurred in your hostel. Your account should include the cause, the damage done and the steps taken to control the fire.",
    "Describe a market day in your area. Your description should be suitable for publication in a local newspaper.",
    "Write an article for publication in a national newspaper on why you think a woman should be your country's next president.",
    "Write an article for publication in an international magazine on nutrition, describing the process involved in the preparation of your favourite Gambian dish.",
    "Write an article for publication in one of your national newspapers on the activities of smugglers and traders in your country. Discuss the effects of the activities of such people on the government and people of your country.",
    "There have been several letters to the editor of one of your national newspapers blaming various people for students' poor performance in the WASSCE examination in recent years. Write an article for publication in a newspaper presenting the students' point of view.",
    "In recent times, the wave of armed robbery, burglary and car snatching has been on the increase in your country. Write an article for publication in a national newspaper, giving reasons for the development and offering suggestions on how it can be curbed.",
    "A pen friend wants to know about the local wedding ceremony in your country. Give a vivid account that will be of great interest to him.",
    "You were on a journey in which you witnessed an accident. Write an account of the accident to a friend.",
    "Write a story, real or imaginary, which ends with: \"...I then realised that it pays to be disciplined.\"",
    "Write a story with the ending: \"So, you see, it doesn't pay to be a liar.\"",
    "Tell a story that ends with the words: \"It was a bitter experience, but I learnt my lesson!\"",
    "Tell a story which ends with the words: \"...and I have had to live with this stigma for the rest of my life.\"",
    "You have been requested to write a story for a local newspaper. Write out the story entitled: \"Honesty Pays.\"",
    "Write a story that illustrates the saying: \"The patient dog eats the fattest bone.\"",
    "Write a story that illustrates the saying: \"Make hay while the sun shines.\"",
  ],
};
