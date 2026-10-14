// Tech Monster — SES Book (Grade 7 • Grade 8 • Grade 9)
// Social and Environmental Studies, Gambia Upper Basic syllabus.
// Compiled from Mr. Fafanding Dibba SES Dept notes (Grade 7 SES Notes).
// Grade 7 = history/culture foundations (Ch 1-12). Grade 8 = religion/family/economy/health/tourism/climate (Ch 13-30).
// Grade 9 = chapters 24-41 (Mr. Fafanding Dibba Grade 9 notes: solar system to world organisations).
window.sesBook = [
  // ============================================================
  // GRADE 7
  // ============================================================
  {
    id: "ses-g7",
    grade: "Grade 7",
    label: "SES — Grade Seven",
    icon: "🌍",
    blurb: "Introduction to SES, history sources, Trans-Saharan trade, Western Sudan empires, Senegambia kingdoms, ethnic groups, political and social organisation, culture and tradition.",
    themes: [
      {
        id: "ses-g7-t1",
        number: "Theme 1",
        title: "Introduction to SES and History",
        topics: [
          {
            id: "ses-g7-t1-1", unit: "1.0", page: "1", title: "What is SES?", icon: "🌍",
            explanation: "Social and Environmental Studies (SES) is the study of humans and their environment (surroundings). It combines History, Geography, Government/Civics with Economics, Agriculture, Science and Sociology.",
            points: [
              "SES studies humans and their environment, also called surroundings.",
              "Geography studies the world including natural and man-made features such as mountains, water bodies, settlements and forests.",
              "Government studies government, people and laws made to maintain order, respect and peace.",
              "History is the study of important past events.",
              "SES links History, Geography and Government with Economics, Agriculture and Sociology."
            ],
            definitions: [
              "SES: the study of humans and their environment.",
              "Geography: the study of the world including natural and man-made features.",
              "Government: the study of government, people and laws.",
              "History: the study of important past events.",
              "Environment: surroundings, the area where we live."
            ],
            examples: ["Mountains and rivers are geography topics.", "Laws keeping peace in society are government topics.", "Independence on 18th February 1965 is a history topic."],
            waecFocus: ["Define SES, Geography, Government and History.", "List the main subjects combined in SES.", "Give examples of natural and man-made features."],
            memoryTip: "SES = Humans + Environment. HisGeoGov: History past, Geography place, Government laws."
          },
          {
            id: "ses-g7-t1-2", unit: "1.1", page: "1", title: "Importance of Studying SES", icon: "⭐",
            explanation: "We study SES to gain knowledge, morals, values and positive attitudes, become responsible citizens, know our rights, respect law, know our country and the world, and preserve resources.",
            points: [
              "Acquires knowledge, morals, values and positive attitudes.",
              "Prepares responsible and potential citizens.",
              "Teaches political rights in a country.",
              "Encourages respect for law and authority.",
              "Makes people know their country and the world.",
              "Provides environmental education and resource preservation.",
              "Teaches norms and values of society.",
              "Promotes tolerance — living peacefully across religions.",
              "Links past, present and future for children.",
              "Teaches new learning techniques in life."
            ],
            definitions: ["Tolerance: accepting and living peacefully with people of different religions.", "Norms: accepted behaviours of a society.", "Values: respected principles of a society."],
            examples: ["Respecting law and authority is an SES value.", "Preserving forest and water is environmental education.", "Muslims and Christians living peacefully shows tolerance."],
            waecFocus: ["State five importance of studying SES.", "Explain tolerance with an example.", "State how SES teaches citizenship."],
            memoryTip: "Rights, Respect, Country, Environment, Tolerance — SES makes a good citizen."
          },
          {
            id: "ses-g7-t1-3", unit: "1.2", page: "2", title: "Sources of History", icon: "📜",
            explanation: "History is the study and records of important past events. The three main sources are oral tradition, written records and ancient remains (archaeology).",
            points: [
              "Oral tradition is the oldest form — stories by word of mouth, told by griots (praise singers). It is not always reliable because stories change by exaggeration or omission.",
              "Written record is the best form — newspapers, letters, magazines, photographs kept at the national Archive. Facts cannot be easily changed.",
              "Ancient remains (archaeology) means digging up history — potteries, stones and metal tools are excavated.",
              "An Archive is a place where written documents are kept for reference.",
              "An Archaeologist studies ancient remains."
            ],
            definitions: [
              "Oral tradition: recording history by spoken stories.",
              "Written record: recording history in documents kept at an archive.",
              "Archaeology: study of ancient remains by digging.",
              "Archive: place where written documents are kept for reference.",
              "Griot: praise singer who keeps oral history."
            ],
            examples: ["A griot narrating ancestors is oral tradition.", "A 1965 newspaper at the archive is a written record.", "Excavated pottery at a settlement is archaeology."],
            waecFocus: ["Name the three sources of history.", "State which source is best and why.", "Define archive and archaeology.", "Give one weakness of oral tradition."],
            memoryTip: "Oral = mouth (changes). Written = best (archive). Digging = archaeology."
          },
          {
            id: "ses-g7-t1-4", unit: "1.3", page: "2", title: "Periods and Terms Used in History", icon: "⏳",
            explanation: "Historians divide events into time frames called periods: dates, BC/AD, decade, century, millennium, generation, jubilees, pre-history, Stone/Iron/Computer ages.",
            points: [
              "Dates show exact year, when, how and why an event happened. E.g. Gambia independence 18th February 1965.",
              "BC means Before Christ; AD means Anno Domini (year of the Lord).",
              "Decade = 10 years. Century = 100 years (AD 1–100 is First Century; we live in the 21st century).",
              "Millennium = 1000 years. Generation = 30 years.",
              "Silver Jubilee = 25th, Golden = 50th, Diamond = 60th, Centenary = 100th, Bicentenary = 200th anniversary.",
              "Pre-history = before written records. Ancient times = distant past. Modern times = present.",
              "Stone Age used stone tools; Iron Age used iron tools (about 3000 years ago); Computer/Digital Age is today.",
              "To convert a year to century: cancel last two digits and add 1. E.g. 1076 = 11th century, 1324 = 14th century, 800 = 9th century."
            ],
            definitions: ["Decade: 10 years.", "Century: 100 years.", "Millennium: 1000 years.", "Generation: 30 years.", "Pre-history: period before written records."],
            examples: ["1076 = 11th century.", "1965 = 20th century.", "25th anniversary of a school is Silver Jubilee."],
            waecFocus: ["Define decade, century, millennium, generation.", "Convert 1076, 1324, 800 to centuries.", "State meaning of BC and AD.", "Name the jubilees for 25, 50, 60, 100 years."],
            memoryTip: "10-100-1000: Decade-Century-Millennium. Cancel 2 digits +1 = century."
          },
          {
            id: "ses-g7-t1-5", unit: "1.4", page: "3", title: "Importance of Studying History", icon: "🏛️",
            explanation: "History teaches lives of forefathers, our origin, how/why/when events happened, preserves culture, promotes nationalism, teaches historical places and provides income.",
            points: [
              "Teaches lives of forefathers (ancestors).",
              "Tells our origin (roots).",
              "Tells how, why and when an event happened.",
              "Preserves culture.",
              "Promotes nationalism.",
              "Makes us know historical places of the country.",
              "Provides income through tourism and heritage."
            ],
            definitions: ["Ancestor: forefather.", "Origin/roots: where a people came from.", "Nationalism: love and pride for one's country."],
            examples: ["Stone Circles at Wassu teach origin and attract tourists.", "Knowing independence history promotes nationalism."],
            waecFocus: ["State five importance of studying history.", "Explain how history preserves culture.", "Give two historical places in The Gambia."],
            memoryTip: "Ancestors, Origin, Events, Culture, Nation, Places, Income."
          }
        ]
      },
      {
        id: "ses-g7-t2",
        number: "Theme 2",
        title: "Trans-Saharan Trade",
        topics: [
          {
            id: "ses-g7-t2-1", unit: "2.0", page: "4", title: "Trans-Saharan Trade: Causes and Organisation", icon: "🐪",
            explanation: "The Trans-Saharan (Caravan) Trade was trade between Western Sudan (West Africa) and North Africa across the Sahara from about 7th–8th century AD. Berbers from North Africa were pioneers. Desertification forced the two regions to exchange goods.",
            points: [
              "Trade began 7th–8th century AD; Berber merchants pioneered it.",
              "Major cause was desertification of fertile land into the Sahara — regions needed each other's goods.",
              "Trade started as barter, then cowrie shells became money. Early contact used dumb barter before common language.",
              "Serahulis (Soninkes) and Mandinkos were middlemen; Tuaregs and Moors gave security, guides, wells and oases.",
              "Main transport was the camel (beast of burden); horses and donkeys were also used."
            ],
            definitions: ["Barter: exchange of goods and services.", "Dumb barter: silent exchange before common language.", "Middlemen: traders linking buyers and sellers.", "Oasis: water point in the desert.", "Beast of burden: animal carrying loads."],
            examples: ["Camel caravans crossing the Sahara.", "Soninke middlemen meeting Berbers at trade centres."],
            waecFocus: ["Define Trans-Saharan trade and date it.", "State the major cause of the trade.", "Explain barter and dumb barter.", "Name the middlemen, guides and transport."],
            memoryTip: "Berbers + Camels + Barter + Soninke middlemen + Tuareg guides."
          },
          {
            id: "ses-g7-t2-2", unit: "2.1", page: "5", title: "Routes, Centres and Commodities", icon: "🗺️",
            explanation: "Three desert routes linked Sudan to North Africa: Western, Central and Far Eastern. Centres like Timbuktu, Gao and Jenne grew into towns. North sent salt and goods; Sudan sent gold and products.",
            points: [
              "Three routes: Western Route, Central Route, Far Eastern Route.",
              "Centres: Timbuktu, Gao, Tekrur, Marrakesh, Jenne, Agades, Niani, Fez, Sigilmasa.",
              "Sudan goods: gold, kola-nut, ostrich feathers, slaves, ivory. North goods: salt, cloth, horses, beads, metalware.",
              "Gold functions: ornaments, measure of wealth, medium of exchange, decoration, trophies.",
              "Salt functions: food ingredient, wound treatment, income, food preservation, soap and leather making.",
              "Major world deserts: Sahara (31% of Africa), Arabian, Kalahari, Namib, Syrian, Australian, Atacama, Arctic, Antarctica."
            ],
            definitions: ["Trade centre: town where caravans met and exchanged.", "Commodity: article of trade.", "Caravan: group of traders travelling together."],
            examples: ["Timbuktu and Jenne became urban centres.", "Gold from Bure and Bambuk exchanged for Saharan salt."],
            waecFocus: ["Name the three desert routes.", "List five trade centres.", "State goods from each side.", "Give functions of gold and salt."],
            memoryTip: "West-Central-Far East routes. Timbuktu-Gao-Jenne remember T-G-J."
          },
          {
            id: "ses-g7-t2-3", unit: "2.2", page: "6", title: "Effects of Trans-Saharan Trade", icon: "🤝",
            explanation: "The trade grew kingdoms, gave wealth, spread Islam, exchanged culture, built diplomacy, introduced goods and towns, and linked North and Western Sudan.",
            points: [
              "Growth of kingdoms and empires in Western Sudan.",
              "Wealth to many people.",
              "Introduction of Islam to Western Sudan.",
              "Cultural exchange (acculturation).",
              "Diplomatic relations between North Africa and Western Sudan.",
              "New commodities such as kola-nut and ostrich feathers.",
              "Timbuktu and Jenne grew into urban centres.",
              "Linked North and Western Sudan permanently."
            ],
            definitions: ["Acculturation: mixing of cultures.", "Urban centre: developed town.", "Diplomacy: peaceful relations between lands."],
            examples: ["Islam reaching Mali via traders.", "Timbuktu mosques and schools from trade wealth."],
            waecFocus: ["State five effects of Trans-Saharan trade.", "Explain how trade spread Islam.", "Name two towns developed by the trade."],
            memoryTip: "Kingdoms, Wealth, Islam, Culture, Towns — trade built Sudan."
          }
        ]
      },
      {
        id: "ses-g7-t3",
        number: "Theme 3",
        title: "Great Empires of Western Sudan",
        topics: [
          {
            id: "ses-g7-t3-1", unit: "3.0", page: "7", title: "Ghana Empire", icon: "👑",
            explanation: "Ghana was the first, smallest, richest and longest-serving empire, founded by Soninkes (Sarahuleh) around AD 300–400. Capital Kumbi Saleh. Title Ghana meant war chief; Kaya Maghan meant lord of gold.",
            points: [
              "Origin: Soninkes from small kingdom Aoukar/Wagadou; Ghana was the king's title.",
              "Centralised government: emperor appointed governors; Metropolitan Ghana (capital) and Provincial Ghana (vassal states).",
              "Justice by trial by ordeal (fetish — bitter water; vomiting proved innocence). Matrilineal inheritance (sister's son).",
              "Rise: gold control (Bure, Bambuk), Trans-Saharan middlemen, taxes on imports/exports, fertile Niger land.",
              "Decline internal: disunity, poor communication, civil wars, succession disputes. External: Almoravids destroyed Kumbi Saleh 1076, Susu Sumanguru 1203, Sundiata annexed 1235 at Kirina.",
              "States under Ghana: Tichitt, Silla, Nema, Dia, Kirina, Wangara."
            ],
            definitions: ["Centralised: power with one emperor.", "Matrilineal: succession through sister's son.", "Trial by ordeal: fetish bitter-water test.", "Metropolitan: central capital area.", "Vassal: conquered state under governors."],
            examples: ["King controlling Bure gold mines.", "Almoravid leader Abdallah Ibn Yassin 1076 attack."],
            waecFocus: ["State origin, capital and meaning of Ghana.", "Describe government and justice.", "Give four reasons for rise.", "Classify internal vs external fall factors with dates."],
            memoryTip: "First-Smallest-Richest-Longest. Kumbi Saleh. 1076 Almoravids, 1235 Kirina."
          },
          {
            id: "ses-g7-t3-2", unit: "3.1", page: "9", title: "Mali Empire and Mansa Musa", icon: "🦁",
            explanation: "Mali began as Mandingo kingdom Kangaba (capital Jeriba, later Niani). Founder Sundiata Keita (1234–1255, Mari Jatta/lion thief) defeated Sumanguru at Kirina 1235. Greatest ruler Mansa Kankan Musa (1312–1337) made Mali world-famous by his 1324–1326 Hajj.",
            points: [
              "Mali means place where the king lives; Mansa means king. Kangaba was under Ghana then Sumanguru (1224) until Sundiata revolt.",
              "Sundiata (Makhara Makhang Konate) exiled at Mema, returned to win Kirina 1235, moved capital to Niani. Died in Sankarani River 1255.",
              "Rulers: Sundiata, Mansa Sakura, Mansa Sulayman, Mansa Musa (nephew of Sundiata).",
              "Musa Hajj 1324–1326 with 3000 soldiers, gold, camels: fame, scholars/architects (Sankore mosque Timbuktu), Portuguese contact, Mali on world map (Angelino Dulcert), trade control, respect, diplomacy.",
              "Rise: Sundiata foundation + generals Amari Sonko (Niumi/Sonko dynasty) and Tiramang Trawally (Kaabu), minerals, Musa pilgrimage effects.",
              "Fall internal: weak rulers after Sulayman, 6 kings in 40 years, civil wars, weak army, poor communication. External: Tuareg/Mossi attacks, annexed by Songhai (Sunni Ali)."
            ],
            definitions: ["Mansa: king.", "Pilgrimage/Hajj: journey to Mecca.", "Griot: praise singer historian.", "Caliph: Muslim leader title."],
            examples: ["Sankore mosque at Timbuktu.", "Amari Sonko founding Sonko dynasty at Barra."],
            waecFocus: ["Name founder, capitals and meaning of Mali/Mansa.", "Give achievements of Mansa Musa's Hajj.", "State reasons for rise and fall.", "Name the battle and year Mali was founded."],
            memoryTip: "1235 Kirina birth, 1324 Hajj fame. Sundiata founded, Musa famous."
          },
          {
            id: "ses-g7-t3-3", unit: "3.2", page: "12", title: "Songhai Empire and Askia Muhammad", icon: "⚔️",
            explanation: "Songhai was the last and biggest empire (1460–1595), from small Al-Kaw Kaw (Kukia, later Gao). Founded by Sunni Ali (1464–1492, the liberator); greatest ruler Askia Muhammad (1493–1528) built Islam, army and trade; fell to Morocco at Tondibi 1591.",
            points: [
              "Origin: Sorko fishermen + Gabibi farmers; Za dynasty (Berbers) then Sunni then Askia dynasty. Capital moved Kukia to Gao for trade.",
              "Sunni Ali (Ali Colon): Gao prince captured by Musa, escaped 1335, took title Sunni (liberator), built army, died 1492 drowning.",
              "Askia Muhammad (Muhammed Touray): killed Sunni Baru after 1 year, divided empire into Kurimina, Dendi, Bolla, Bongur; Hajj 1495–1499; made Caliph of Western Sudan.",
              "Achievements: Islam/Islamic culture, Sankore University, standing army, trade and commerce.",
              "Fall internal: civil wars, weak rulers, poor communication. External: vassal revolts, Moroccan invasion 15 Feb 1591 at Tondibi — end of empires.",
              "Other rulers: Askia Musa, Bankouri, Ishak, Daud; modern lands: Gambia, Senegal, Mali, Guinea, Niger, Nigeria, Mauritania."
            ],
            definitions: ["Sunni: the liberator.", "Askia: dynasty of Muhammad Touray.", "Standing army: permanent soldiers.", "Caliph: Muslim ruler title."],
            examples: ["Sankore University in Timbuktu.", "Four provinces: Kurimina, Dendi, Bolla, Bongur."],
            waecFocus: ["State origin and capitals of Songhai.", "Compare Sunni Ali and Askia Muhammad.", "List Askia achievements.", "Give date and battle of final fall."],
            memoryTip: "Last-Biggest: 1464 Sunni founds, 1493 Askia shines, 1591 Tondibi ends."
          }
        ]
      },
      {
        id: "ses-g7-t4",
        number: "Theme 4",
        title: "Kingdoms of Senegambia",
        topics: [
          {
            id: "ses-g7-t4-1", unit: "4.0", page: "15", title: "Kaabu Kingdom (1537–1867)", icon: "🏰",
            explanation: "Kaabu was a Mandingo kingdom (Guinea Bissau, Casamance, part of Gambia) founded 1537 by Tiramang Trawally (Sundiata's general with 75,000 soldiers). Capital Kansala. Fell to Fula jihad at Kansala (Turubang Kello).",
            points: [
              "Founded by Tiramang Trawally; capital Kansala (now Guinea Bissau). Married Balaba; 14 Gambian states plus many in Bissau/Casamance.",
              "Rulers Nyanchos (Sanneh, Manneh kings) and Korings (Sonko, Sanyang governors). Payoungou oldest state. Matrilineal inheritance.",
              "Last king Mama Jankey Wally Sanneh (1846–1866, grandson of Tiramang, born Kabendu). War lasted 11 days; 47,000 Fula attacked, 4,000 survived.",
              "Kansala battle (Turubang Kello = complete destruction) after 12 years Fula preparation; Jankey Wally named fortress Tato.",
              "Fulas attacked to spread Islam, take fertile/watered land and wealth, escape oppression.",
              "Generals Kelepha Sanneh, Ansumana Manneh, Nghaling Sonko; biggest and richest of the three kingdoms."
            ],
            definitions: ["Nyanchos: kings.", "Korings: governors.", "Matrilineal: through mother line.", "Turubang Kello: complete destruction."],
            examples: ["States: Kantora, Sandu, Jimara, Kombo, Kiang, Jarra, Wuli.", "Alpha Molloh leading 35,000 foot + 12,000 cavalry."],
            waecFocus: ["State founder, date, capital and extent of Kaabu.", "Name ruling classes and inheritance.", "Give reasons Fulas attacked.", "Name last king and battle."],
            memoryTip: "1537 Tiramang founds, Kansala capital, 1867 Fulas end it."
          },
          {
            id: "ses-g7-t4-2", unit: "4.1", page: "17", title: "Fulladu Kingdom", icon: "🐄",
            explanation: "Fulladu was a Fula kingdom founded by Alpha Molloh Baldeh. First capital Silla (Casamance), later Kesser Kunda (CRR). Last king Musa Molloh exiled 1919 by British.",
            points: [
              "Founder Alpha Molloh Baldeh (Baldeh/Bandeh dynasty); first states captured Jimara, Kantora, Tumana.",
              "Alpha died 1881; brother Bakary Demba ruled (Musa too young), then Musa Molloh after capturing Korop; Bakary exiled to Bakary Demba Kunda.",
              "Musa moved capital to Kesser Kunda, gave land to British who betrayed him; exiled Sierra Leone 1919, returned 1923, died 1931, tomb at Kesser Kunda.",
              "Musa was empire builder not jihadist. Patrilineal inheritance. Kingdom 1870s–1903.",
              "Alpha jihad inspired Foday Kabba, Kombo Sillah, Maba Jahou Ba. Koli Tengela Bah founded Denianke dynasty at Futa Toro."
            ],
            definitions: ["Patrilineal: through father line.", "Imamate: Fula Muslim state.", "Dynasty: ruling family line.", "Exile: forced removal from land."],
            examples: ["Kesser Kunda tomb of Musa Molloh.", "Silla first capital in Casamance."],
            waecFocus: ["Name founder and capitals of Fulladu.", "Trace Alpha to Bakary to Musa succession.", "State fate of Musa Molloh with dates.", "Name the dynasty and inheritance."],
            memoryTip: "Alpha founds, Musa ends: Silla to Kesser Kunda, 1919 exile."
          },
          {
            id: "ses-g7-t4-3", unit: "4.2", page: "18", title: "Jollof Kingdom", icon: "🤴",
            explanation: "Jollof was founded by Njajan Ndiaye of Walo. Six states united under Burba Jollof (supreme ruler). Fell about 1560 when coastal states with Europeans challenged it.",
            points: [
              "Founder Njajan Ndiaye (Jan Jan Njie); title Burba Jollof.",
              "Six states: Kayor, Baol, Walo, Jollof, Sine, Saloum. Kayor/Baol/Walo joined by federation; Sine/Saloum by conquest (Serer states); Jollof overlord.",
              "All in Senegal except Saloum (Senegal + Gambia). Mbegan Ndure and Biram Ndieme Koumba expanded it.",
              "Fall: contact with Europeans made Kayor/Baol/Walo strong; independence and wealth struggles; collapsed 1560."
            ],
            definitions: ["Burba Jollof: supreme ruler.", "Federation: voluntary union.", "Overlord/metropolitan: leading state."],
            examples: ["Saloum as Gambian Wollof kingdom (Gualafa).", "Kayor using European help to break away."],
            waecFocus: ["Name founder and title.", "List the six states and how they joined.", "Locate them in Senegal/Gambia.", "Give three causes of fall with date."],
            memoryTip: "Six states, one Burba. Federation + conquest, 1560 fall."
          }
        ]
      },
      {
        id: "ses-g7-t5",
        number: "Theme 5",
        title: "Ethnic Groups of The Gambia",
        topics: [
          {
            id: "ses-g7-t5-1", unit: "5.0", page: "19", title: "Mandinko and Fula", icon: "👥",
            explanation: "Mandinkos (32.3%) came from Kangaba/Mali in 14th century; largest group, farmers/traders. Fulas (22.6%) descended from Berbers, herdsmen, most widespread in West Africa, first to accept Islam.",
            points: [
              "Ethnic group = common ancestry, language, culture. Identified by language. Oldest activities hunting and gathering; earliest inhabitants Bainunkas then Jolas.",
              "Mandinkos: from Manding (Mali), Malinke speakers, farmers/traders/artisans; 3 generals — Tiramang (Kaabu), Amari Sonko (Barra Sonko dynasty), Sankaranka Conteh (Kombo Bojang dynasty). Centralised, first in Senegambia. Found Baddibu, Kiang, Jarra, Niumi, Wuli, Kantora, Sandu, Kombo.",
              "Mandinko migration: farmland, climate, trade, conquest, escape Sumanguru, spread Islam.",
              "Fulas: Berber descent, Fulbe/Fulani/Pol, language Pularr; herdsmen pastoralists; leaders Koli Tengela Bah (Denianke) and Alpha Molloh (Baldeh/Fulladu); first state Futa Toro/Tekrur; first to accept Islam via madarasas; groups Gidda (farmers) and Bororoge (nomads); patrilineal + compulsory military.",
              "Fula migration: overpopulation Futa Toro, Islamise Kaabu, trade, pasture, new kingdoms."
            ],
            definitions: ["Ethnic group: common ancestry/language/culture.", "Centralised: one strong authority.", "Pastoralist: cattle herder.", "Madarasas: Islamic schools.", "Patrilineal: father line."],
            examples: ["Bojang dynasty in Kombo.", "Fulani Bororoge moving for pasture."],
            waecFocus: ["Define ethnic group and how identified.", "Give origin, % and districts of Mandinko and Fula.", "Name the three Mandinko generals.", "State migration reasons."],
            memoryTip: "Mandinko 32% farmers from Mali. Fula 23% herders from Berbers."
          },
          {
            id: "ses-g7-t5-2", unit: "5.1", page: "21", title: "Wollof and Jola", icon: "🗣️",
            explanation: "Wollofs (13.9%) from Sahara, 6 states, language is lingua franca. Jolas (9.8%) long residents of Foni/Kombo, farmers and palm producers, last to accept Islam, initiation Futampaf.",
            points: [
              "Wollofs: Saharan origin (8th century desertification); 6 states Jollof, Walo, Kayor, Baol, Sine, Saloum; main Gambian kingdom Gualafa/Saloum; first ruler Jan Jan Njie (Burba); found Saloum, Niumi, Jokadou, Niani, Banjul, KM; Wollof is lingua franca of Senegambia.",
              "Wollof migration: farmland, rainfall/climate, Trans-Saharan trade.",
              "Jolas: Ajimatau/Enyab (brave man); Mandinka name means one who pays back; Foni/Kombo; rice, palm wine/oil; best at culture; Futampaf initiation; dialects Bliss, Kassa, Foni, Karoon etc; little history — no griots, oral only, far places.",
              "Jola coming: rice swamps, palm tapping, marabout wars, rebel activities."
            ],
            definitions: ["Lingua franca: language of commerce.", "Dialect: local form of language.", "Futampaf: Jola initiation.", "Enyab: brave man."],
            examples: ["Wollof spoken in markets across Senegambia.", "Jola Foni palm oil production."],
            waecFocus: ["Give origin, % and districts of Wollof and Jola.", "Explain lingua franca.", "Why is Jola history little known?", "Name Jola dialects."],
            memoryTip: "Wollof = trade language. Jola = rice + palm + Futampaf."
          },
          {
            id: "ses-g7-t5-3", unit: "5.2", page: "23", title: "Sarahuleh, Serer, Aku and Minor Groups", icon: "🧭",
            explanation: "Sarahuleh (7.7%, Soninkes, Ghana founders, Dyula traders), Serers (2.9%, fishermen, Sine/Saloum, Laman/Maad), Akus (0.5%, Creoles, last settlers, pioneers of Western education), plus Manjago, Balanta, Bainunka, Karoninka, Bambara.",
            points: [
              "Sarahuleh: Soninkes of Ghana (AD 400–500); name means half-caste; common ancestry with Mandinkos; Dyula traders in gold/salt/kola; fled Almoravids 1076, Sumanguru 1224, Sundiata 1235; found Wuli, Kantora, Sandu, Tumana; states Kingi, Gajiaga, Gon.",
              "Serers: Kasinkos/Chuballo, from Kaabu river banks/Casamance to Foni then NBR 400 years ago; fishermen; states Sine/Saloum (Mbissil); chiefs Laman, kings Maad/Gelewar, queen Linguere; matrilineal; found Sine, Saloum, Jokadou, Kombo coast; 2.9%.",
              "Akus/Creoles: freed slaves, resettled Freetown 1787 then Bathurst/McCarthy 1832–38; pioneers of Western education/Christianity; no slaves; surnames Cole, Foster, William + Femi, Kojo; found Bathurst, KM, Lamin; 0.5%; last to settle. Problems: swampy rainy arrival, unemployment, hostile Timme, malaria/cholera/yellow fever, overcrowding Freetown.",
              "Minors: Manjago (Bissau, palm wine, animism, no griots/slaves), Balanta/Mankanyi (Bissau), Bainunka (original, helped French vs Kombo Sillah), Karoninka (Casamance, Jola kin), Bambara (Mali, like Mandinko). Tools: hoe, cutlass, rake, axe, korandaka, sooko."
            ],
            definitions: ["Dyula: trader.", "Laman: Serer chief.", "Maad: Serer king.", "Creole: freed-slave descendant.", "Animism: traditional religion."],
            examples: ["Sarahuleh still trading gold/diamond.", "Aku surnames Cole and Foster."],
            waecFocus: ["Give origin, % and districts of Sarahuleh, Serer, Aku.", "Who were Dyula? Laman? Creoles?", "State Aku settler problems.", "Name minor groups and activities."],
            memoryTip: "Sarahuleh gold, Serer fish, Aku school — 7.7, 2.9, 0.5."
          }
        ]
      },
      {
        id: "ses-g7-t6",
        number: "Theme 6",
        title: "Political and Social Organisation",
        topics: [
          {
            id: "ses-g7-t6-1", unit: "6.0", page: "27", title: "Mandinko, Wollof and Fula Politics", icon: "🏛️",
            explanation: "Mandinkos centralised (lineage/village/state, Mansa, Seyfo, stick insignia, 43 districts, 53 constituencies). Wollofs centralised under Bur with Jambur and Linguere, matrilineal. Fulas theocratic under Almamy/Imam, patrilineal.",
            points: [
              "Mandinko: lineage (korida tiyo) → village (seyfo/chief) → state (Mansa). Patrilineal (son/brother). 43 districts (no chief in 3 Banjul parts), 120 wards (councillors), district tribunal, paramount chief head, 53 constituencies + 5 nominated NAMs, speaker head, stick insignia, 5 regions (WCR Brikama, NBR Kerewan, LRR Mansakonko, URR Basse, CRR Janjanbureh) + Banjul/KM mayors. Chiefs: Matarr Ceesay, Cherno Baldeh, Ture Sanyang, Tamba Jammeh, Abu Khan, Sora Darboe, Sanjally Bojang. Alkalo: head, land, tax, disputes, representative, ceremonies; women alkalolu exist (Farato, Juffureh, Tendaba...).",
              "Wollof: Bur + Jambur (kingmakers: appoint/dismiss/advise/minister) + Linguere (queen: women court, tribute farms, advises Bur). Matrilineal. Royal slaves Jami Bur Jam (tax, messengers).",
              "Fula: Almamy/Imam (village head, religious, war leader); states called Imamates (Futa Toro, Djallon, Bondu, Macina, Fulladu, Timbo, Labe); theocratic/Sharia; before Islam leaders Saltigi. Imam settles disputes, wars, prayers, marriages."
            ],
            definitions: ["Centralised: one authority.", "Seyfo: chief.", "Alkalo: village head.", "Jambur: kingmaker.", "Linguere: queen.", "Almamy: Fula Imam king.", "Theocratic: rule by religious law."],
            examples: ["Stick as Mandinko insignia.", "Jambur crowning the Bur.", "Imam leading prayers and wars."],
            waecFocus: ["Describe three lines of Mandinko authority.", "State functions of Jambur, Linguere, Imam, Seyfo, Alkalo.", "Compare inheritance systems.", "Name regions and heads."],
            memoryTip: "Mandinko Mansa, Wollof Bur, Fula Almamy — stick, Jambur, Sharia."
          },
          {
            id: "ses-g7-t6-2", unit: "6.1", page: "29", title: "Jola, Serer and Stateless Groups", icon: "⚖️",
            explanation: "Jolas decentralised/stateless (Kanda + Ayi). Serers like Wollofs (Laman/Maad/Linguere, matrilineal, Sine/Saloum). Sarahuleh, Aku, Manjago and others had only clan/village heads (Saltigi).",
            points: [
              "Jolas: fragmented, stateless, classless; villages unite in crises/Futampaf under Kanda (political/religious/protector/disputes) and secret Ayi (spiritual protection, god-mediator, war/famine liaison).",
              "Serers: Laman chiefs, Maad kings (Gelewar for Mandinko nobles), Linguere queens, matrilineal; Sine and Saloum (Mbissil).",
              "Sarahuleh: no Senegambia state, village heads, noble Saltigi.",
              "Aku, Manjago, Balanta, Bambara, Mankaji, Bainunka: no states/kingdoms."
            ],
            definitions: ["Decentralised/stateless: no kingdom.", "Kanda: Jola leader.", "Ayi: Jola spiritual leader.", "Saltigi: Serahuli noble."],
            examples: ["Jola villages choosing Kanda in war.", "Sine and Saloum under Maad."],
            waecFocus: ["Contrast centralised vs stateless.", "State functions of Kanda and Ayi.", "Name Serer titles and states.", "Which groups had no states?"],
            memoryTip: "Jola Kanda + Ayi. Serer Laman + Maad. Others only village heads."
          },
          {
            id: "ses-g7-t6-3", unit: "6.2", page: "30", title: "Social Hierarchy, Kinship and Work Groups", icon: "🪜",
            explanation: "Hierarchy by birth: nobles, freeborn, artisans, slaves (Mandinko Sontigi/Foro/Nyamalo/Jongo; Wollof Bur/Jambur/freemen/Jam; Fula Rimbe/Nyenube/Machudoh). Kinship patrilineal/matrilineal/bilateral. Work groups Kafo/Kompin/Bukut. Qadi settles Islamic inheritance.",
            points: [
              "Mandinko: nobles Sontigi (Mansa, elders, warriors; Kaabu Nyanchos/Korings) → freeborn Foro (farmers, traders, marabouts, fishermen) → artisans Nyamalo (Numo smiths, Farabo leather, Jali griots, weavers, carvers, potters) → slaves Jongo (domestic/war).",
              "Wollof rigid: royal (Bur/Linguere) → nobles Jambur/Gor → freemen (Tega smiths, Ude leather, Gewel griots, Baadole peasants, potters) → slaves Jam. Fula: Rimbe (Imams, farmers, traders) → Nyenube (Gawlo singers, Bailo smiths, Garanke leather, Labos weavers) → Machudoh slaves. Artisans called Nyenyo. Sarahuleh: Saltigi nobles → Jaare griots/Tago smiths/Garanke → Komme slaves. Jola: warriors (Kanda) → tappers → farmers → commoners → craftsmen; no griots (share surnames Bojang, Sanneh with Mandinkos).",
              "Kinship by blood/surname: patrilineal (father), matrilineal (mother/sister's son), bilateral (both). Mandinko polygamy, Faden (father-side)/Baden (mother-side), uncle organises marriage. Wollof Xaskan (patrilineal). Fula small units (nomadic). Jola strongest kinship. Support/advice/learning.",
              "Inheritance Islamic: sons half, daughters quarter, mother sixth; Qadi (Islamic judge) shares, settles divorce/marriage; Christians use will. Work groups: Kafo (Mandinka), Kompin/Xamba (Wollof, head Botal), Bukut (Jola); help sick, finance, ceremonies, communal works.",
              "Roles: nobles rule/disputes/land; smiths tools/weapons/pots/circumcise; leather shoes/juju covers; griots entertain/praise/history/mediate/messengers/courage; slaves work/fight/message (Jami Bur Jam could rule); carvers spoons/furniture/canoes; weavers baskets/clothes; potters jars/blocks. Change: jihad, Islam, Christianity/education, colonialism. Birth decides class. Advantage division/organisation; disadvantage hatred/endogamy/discomfort."
            ],
            definitions: ["Hierarchy: social ladder by birth.", "Patrilineal/matrilineal/bilateral.", "Qadi: Islamic judge.", "Will: property wish document.", "Kafo/Kompin/Bukut: age/work groups.", "Endogamy: marry within class."],
            examples: ["Numo smith making hoe.", "Jali griot narrating history.", "Kafo doing village communal work."],
            waecFocus: ["Name classes in each ethnic hierarchy with local terms.", "State artisan roles and griot roles.", "Define kinship types and Qadi roles.", "Give advantages/disadvantages of hierarchy."],
            memoryTip: "Nobles-Free-Artisans-Slaves. Birth decides. Qadi shares Islamic property."
          }
        ]
      },
      {
        id: "ses-g7-t7",
        number: "Theme 7",
        title: "Culture, Language and Traditional Religion",
        topics: [
          {
            id: "ses-g7-t7-1", unit: "7.0", page: "35", title: "Acculturation, Toleration and Joking Relations", icon: "🤝",
            explanation: "Acculturation is mixing of cultures (incorporation, domination, blending, assimilation, innovation, enculturation). Toleration is peaceful living. Dankuuto (joking relations) builds unity.",
            points: [
              "Types: incorporation (borrow), direct change (dominate e.g. British indirect rule), blending (mix e.g. intermarriage), assimilation (replace e.g. France/Senegal), innovation (new ideas), enculturation (adopt surroundings).",
              "Toleration: allow different beliefs peacefully. Religious (Muslim/Christian), cultural (Jola/Mandinko), political (parties campaign by law). Accept dress, culture, religion.",
              "Acculturation examples: inter-tribe/religion marriage, Gambians abroad marrying, tourists, foreign residents.",
              "Dankuuto (Mandinka joking relation): ethnic (Jola-Serer, Jola-Fula, Serahuli-Mandinko), surnames (Camara-Ceesay, Fatty-Sanneh, Jallow-Bah), districts (Baddibu-Kiang, Jarra-Niumi), settlements (Sukuta-Gunjur), countries (Malians-Baddibunkas), kinships (aunt/uncle children).",
              "Importance: peace, unity, harmony, indiscrimination, teach religions, visits, acceptance, intermarriage, frankness, culture preservation, behaviour control, dispute settlement."
            ],
            definitions: ["Acculturation: cultures mixing.", "Assimilation: replace culture.", "Toleration: peaceful acceptance.", "Dankuuto: joking relationship."],
            examples: ["Camara and Ceesay joking.", "Baddibu and Kiang joking districts."],
            waecFocus: ["Define acculturation and list types.", "Define toleration and types.", "Give Dankuuto examples.", "State importance of all three."],
            memoryTip: "Mix (acculturation) + Accept (toleration) + Joke (dankuuto) = peace."
          },
          {
            id: "ses-g7-t7-2", unit: "7.1", page: "37", title: "Language, Dialect and Official Language", icon: "🗣️",
            explanation: "Language is communication by symbols/sounds/speech. Elements: vocabulary, grammar, dialect. English is official language; Wollof is lingua franca; mother tongue is home language; linguist speaks many.",
            points: [
              "Elements: vocabulary (words/meanings), grammar (arrangement), dialect (local variation).",
              "Jola dialects: Djamat, Fogni, Cassa, Kaborous, Ayat, Bayat, Bliss, Flup, Elinkin etc. Fulbe: Fouta, Torodbe, Firdu, Jerry (10+ in Senegambia).",
              "Official language (government business/documents): English — unites nation, school, international, documents. Written languages: English, Arabic, French, Spanish.",
              "Lingua franca (trade language): Wollof (changes by place — English/Fula/Mandinka).",
              "Word borrowing: no local word so borrow French/English/Portuguese/Arabic. Mother tongue = home language (e.g. Dibba Mandinka descent speaking Wollof at home). Linguist/polyglot = many languages expert."
            ],
            definitions: ["Vocabulary, grammar, dialect.", "Official language: government language.", "Lingua franca: trade language.", "Mother tongue: home language.", "Linguist: language expert."],
            examples: ["English uniting Gambian ethnic groups.", "Wollof used in markets."],
            waecFocus: ["Define language and elements.", "Name Jola/Fula dialects.", "State official language and importance.", "Distinguish lingua franca and mother tongue."],
            memoryTip: "Vocabulary + Grammar + Dialect. English official, Wollof trade, home = mother tongue."
          },
          {
            id: "ses-g7-t7-3", unit: "7.2", page: "38", title: "Taboo, Totem, Superstition and Libation", icon: "🚫",
            explanation: "Traditional beliefs (animism) group into taboo (forbidden), totem (clan animal/plant), superstition and libation (pouring drinks in prayer).",
            points: [
              "Taboos: no naming soap/salt/charcoal/needle at night (bad luck); children no fish head (stupid); pregnant no eggs (deaf/dumb), no bitter tomato (skin disease); black cat (bad luck); whistling (poverty). Guide morals, health, dos/don'ts.",
              "Totem: clan animal/plant not touched/eaten. Darboe no goat (ancestor from goat); some Fula no cow (like mother); Camara no crocodile (saved ancestor); Njie no lion (saved hunter).",
              "Superstition: sneezing (luck), kukuwo tree (barren women), twins (luck), reincarnation, circumcision (clean), python Bismillahi track, garlic/onion vs witches; owl = witchcraft bird. Deprive nutrition, discomfort.",
              "Libation: pouring water/alcohol/drinks by priest/elders at naming, war, marriage, travel, sickness, funeral."
            ],
            definitions: ["Taboo: forbidden act.", "Totem: honoured clan animal/plant.", "Superstition: cultural taboo belief.", "Libation: pouring prayer drinks.", "Animism: idol worship."],
            examples: ["Camara not eating crocodile.", "Libation at naming ceremony."],
            waecFocus: ["Define each with two examples.", "State importance and disadvantages.", "Name the witchcraft bird.", "Give libation occasions."],
            memoryTip: "Taboo = don't do. Totem = don't eat. Libation = pour and pray."
          },
          {
            id: "ses-g7-t7-4", unit: "7.3", page: "40", title: "Traditional Religion and Sacred Places", icon: "🛕",
            explanation: "African Traditional Religion (animism) worshipped lifeless objects/idols assisting God; followers Soninkes. Beliefs: monotheism, polytheism, trinity, atheism. Sacred: stone circles, crocodile ponds, Sanneh Mentereng, Kaba tree and more.",
            points: [
              "Religion = belief/worship of supreme God. Traditional = animism (stones, rivers, thunder, idols).",
              "Monotheism one God (Islam); polytheism many; trinity three-in-one (Christianity); atheism none.",
              "Practices: crocodile ponds (Bakau Kachikally/Bojang, Berending, Folonko), stone circles, witches, jujus, libation, sacrifice, tombs (Musa Molloh Kesser Kunda), Kaba tree Kiang Bateling.",
              "Stone Circles (Wassu, Kerr Bach, Dingarai, 300 BC–AD 1300, CRR north): royal burials, earliest civilisation, tourist, income, jobs, culture; UNESCO sites Wassu/Kerr Batch/Kankurang.",
              "Others: Sanneh Mentereng Brufut, Bwiam revolving pot, Kenyeh Kenyeh mosque Gunjur (Omar Futi 40 days), Jambar Sanneh, Taba Konkorong, Worso Niumi. Priests: rituals, protection, disputes, advice, mediators, healers, prayers. Herbalists use herbs/incantations; Mandinka magician Mama Jumbo. Preserve culture, cure witchcraft, accessible; vs modern medicine comparison."
            ],
            definitions: ["Animism, monotheism, polytheism, trinity, atheism.", "Herbalist: traditional healer.", "UNESCO site: world heritage."],
            examples: ["Barren women bathing at Kachikally.", "Wassu circles as royal burial."],
            waecFocus: ["Define religion types with examples.", "Name sacred places and uses.", "State stone circle importance and dates.", "List priest roles."],
            memoryTip: "One-Many-Three-None: Mono-Poly-Trinity-Atheism. Wassu stones = oldest burials."
          },
          {
            id: "ses-g7-t7-5", unit: "7.4", page: "44", title: "Culture, Ceremonies, Proverbs and Masquerades", icon: "🎭",
            explanation: "Culture is way of life (dances, beliefs, dress...). Material vs expressive. Ceremonies: naming (8th day), marriage, initiation, funeral, Futampaf, Roots festival. Proverbs give wisdom. Masquerades (Portuguese Fanal) protect and entertain. Drum is common instrument; Kora 21 strings.",
            points: [
              "Culture: values (physical/moral/mental), materials (domoda/benachin foods, garambuba dress, mud houses), institutional (chieftaincy/inheritance), technical (tools). Develops by enculturation/innovation. Shapes personality, regulates life, identifies origin.",
              "Proverbs: e.g. stump never crocodile (African stays African); sorrel sour (training); bird no bad insect (parent advice); drums + buttocks (no two things); rain found bathroom wet (self-reliant); one-leg baby (own work); clean hand eats with elders (discipline). Teach morals, hard work, guidance.",
              "Masquerades/lanterns (Portuguese 15th–16th, Fanal): Fairy/Agugu/Hunting/Gesseh (Aku), Zimba (Wollof), Kankurang (Mandingo), Kumpo (Jola male)/Samayo (female), Mamapara (Susu), Mamoo mother of Kankurangs, Fanbondi night initiation; sacks/bark/grasses/horns. Roles: protect initiates, foretell, punish witches, initiation drum Emambalie, fertility Senko, entertainment. Lanterns Christmas Banjul/Janjanbureh, peace, patrons, unity, marriage start.",
              "Music: drum all groups; Halam 5 strings (Wollof funerals), Kora 21 strings calabash, Balafong 16–19 keys (oldest Mandingo), Bukarab 4 drums (Jola). Songs/stories/folktales: history, lullaby, entertainment, education, comfort, courage, work, advice, gods, peace. Cosmetics Fudan, Njam tattoo (Fula/Serer/Wollof); dress Jalabeh; Muslims white funeral, Christians black; Lappa (Faano/Malaan/Wudere/kafulag, loom) for initiates/brides/funerals/debts.",
              "Ceremonies: naming 8th day (Kuliyo/Ngainteh high with Tameso/Hari sheep; Nyambo/Waat low); marriage (colanut Muslims, palm wine Christians; bride price calabash/cattle; church/mosque/court/traditional); initiation (karambo, juju karamba, Ifangbondi); funeral/mourning (white/black); Futampaf (real men, unity; Jammeh Kanilai festival); Roots Juffureh (Alex Haley 1977 Kunta Kinteh)."
            ],
            definitions: ["Culture: way of life.", "Material vs expressive culture.", "Proverb: wise saying.", "Masquerade: masked spirit.", "Lappa: traditional cloth.", "Bride price: husband payment."],
            examples: ["Kankurang at initiation.", "Kola nut at all ceremonies.", "Kora griot music."],
            waecFocus: ["Define culture and types/components.", "Name ceremonies and details (day 8, items).", "Interpret two proverbs.", "State masquerade roles by group and instruments."],
            memoryTip: "Naming 8th day, Kola everywhere. Drum for all, Kora 21 strings."
          }
        ]
      }
    ]
  },
  // ============================================================
  // GRADE 8
  // ============================================================
  {
    id: "ses-g8",
    grade: "Grade 8",
    label: "SES — Grade Eight",
    icon: "🏦",
    blurb: "Islam and Christianity, family systems, Gambian economy, vegetable gardening, rice, livestock, cotton and fishing, industry, trade, banking, population, health, tourism, weather and climate.",
    themes: [
      {
        id: "ses-g8-t1",
        number: "Theme 1",
        title: "Islam and Christianity in The Gambia",
        topics: [
          {
            id: "ses-g8-t1-1", unit: "13.0", page: "50", title: "Coming and Spread of Islam", icon: "☪️",
            explanation: "Islam (peace/submission, founder Prophet Muhammad SAW 570–632, book Al-Quran) reached Western Sudan/Gambia in 11th century via Arab/Berber Trans-Saharan traders. Fulas of Tekrur first embraced; 19th-century jihad spread it; 96% Gambians Muslim today.",
            points: [
              "Muhammad (Macca, Quraish, parents Abdullah/Aminata, year of Elephant) founded Islam 7th century.",
              "Fulas/Tukulors of Tekrur first Senegambian Muslims; spread via Darras/Madarasas/Karantas; jihadists Foday Kabba, Maba Bah converted Soninke kings.",
              "Supreme Islamic Council headed by president; Imam Ratib at King Fahad Banjul mosque.",
              "Spread reasons: trade, jihad, clerics/scholars, preaching, dress, rulers, conduct, intermarriage.",
              "Jihad = holy war; Marabouts = keen Muslims; Soninkes = traditionalists. 19th Sudan jihadists: Dan Fodio (Sokoto), Umar Taal (Segu 1840–64), Samori Touray (1878–98), Ahmadu Lobo (Tukulor).",
              "Soninke-Marabout war reasons: purify Islam, force faith, stop alcohol, reject animist rule. Effects: instability, Islamisation, deaths, poverty, hunger, trade/farming collapse, towns destroyed, kings lost power. Marabouts built schools, secretaries, healers, advisers, Quran jujus, mediators. Places: Badibu, Kombo, Niani, Kayor, Tubakolong etc. Scholars: Ahmadou Bamba, Baye Niasse, Umar Bun Jeng, Banding Drammeh (Maahad, d.2020), Gibril Kujabi. Sects: Tijaniyya, Qadriyya, Wahabia, Ahmadiya, Mouridiyya, Siyaa. Problems: tradition, resistance, language, communication, illiteracy. Effects: Arabic schools, kings lost power, Islamic schools/names/dress/polygamy, no sacrifice. British/French intervened for peace, colonisation, trade."
            ],
            definitions: ["Islam: peace/submission.", "Jihad: holy war.", "Marabout: Muslim cleric.", "Soninke: traditionalist.", "Imam Ratib: chief Imam."],
            examples: ["Tekrur Fulas learning Quran in darras.", "Maba Bah jihad in Senegambia."],
            waecFocus: ["State founder, book, % Muslims and arrival route/century.", "Give spread reasons and jihad reasons/effects.", "Name sects and scholars.", "Explain British/French intervention."],
            memoryTip: "11th century Berbers bring Islam. Trade + Jihad + Schools spread it."
          },
          {
            id: "ses-g8-t1-2", unit: "13.1", page: "54", title: "Coming and Effects of Christianity", icon: "✝️",
            explanation: "Christianity (teachings of Jesus, Bethlehem 8–4 BC, Gospels Matthew/Mark/Luke/John) came with Europeans after 1807 abolition. Portuguese Catholics 1400s, then Quakers, Methodists, Anglicans built churches/schools. 3.8% Gambians Christian; head is Bishop; Christian Council runs affairs.",
            points: [
              "Jesus (Virgin Mary, miracles: clay birds, leprosy, blind, dead) founded faith; first church Sao Domingo Juffureh by Diego Gomez (Tankular, Bintang, Bathurst, Georgetown); Quakers first formal education (Gov McCarthy); Anglicans Farafenni, Bakau, Kristi kunda.",
              "Coming reasons: trade, christianise, colonise, civilise, navigable River Gambia.",
              "Sects: Catholic, Anglican, Methodist/Wesleyan, Quaker, Born Again, Baptist, Deeper Life, Evangelical.",
              "Success: explorers, river, schools/scholarships/medicine/agriculture/preaching, withstanding climate.",
              "Problems: unfriendly locals, climate, language, malaria/diarrhoea/yellow fever, Islam, monogamy, denomination rivalry, persuasion vs jihad force.",
              "Advantages: schools, medicines, Christian names (John/Paul), inputs, end slave trade, churches, anti-jihad/slavery. Negatives: lost authority, condemned culture, western lifestyle, converts removed. Moral lessons: honesty, tolerance, truth, sexual control, respect, prayers."
            ],
            definitions: ["Gospel: Jesus teaching book.", "Missionary: religious spreader.", "Denomination: church sect.", "Bishop: church head.", "Monogamy: one wife."],
            examples: ["Quaker schools in Bathurst.", "Sao Domingo first church."],
            waecFocus: ["State founder, arrival time and first missions.", "Give coming/success reasons and problems.", "List sects and advantages/negatives."],
            memoryTip: "1807 abolition brings missions. Schools + Churches + Medicine."
          }
        ]
      },
      {
        id: "ses-g8-t2",
        number: "Theme 2",
        title: "Family Systems and Marriage",
        topics: [
          {
            id: "ses-g8-t2-1", unit: "16.0", page: "60", title: "Types of Families", icon: "👨‍👩‍👧",
            explanation: "Family is blood/marriage/adoption group in same household; first school. Three types: nuclear (monogamy, father-mother-children, 2 generations, urban/Aku/Christian), extended (polygamy, 3 generations, rural/Mandingo Muslim, best for tradition), single-parent (one parent via death/distance/divorce — triple Ds).",
            points: [
              "Nuclear advantages: easy manage, less conflict, cater all, shelter/food, peaceful. Disadvantages: no support, loneliness, low manpower, hire labour.",
              "Extended advantages: manpower, socialisation, faithful, respect, sharing, no hired labour. Disadvantages: hard manage, conflicts, inheritance, feeding/housing, sexual dissatisfaction.",
              "Single-parent causes: divorce (commonest), death, distance, jail, out-of-wedlock, illness, abandonment. Advantages: fewer problems, no inheritance issue. Disadvantages: low manpower, stress, orphan risk, burden.",
              "Norms = expected behaviours (greet elders); values = principles (respect, neighbourliness, skills, peace, worship, honesty, sharing). Socialisation acquires them.",
              "Child rights: equality, name/nationality, food/housing/care, handicap care, love, education/play, protection."
            ],
            definitions: ["Nuclear, extended, single-parent.", "Monogamy one wife; polygamy many; bigamy multiple.", "Socialisation, norms, values.", "Household, community, family tree."],
            examples: ["Aku nuclear family in Banjul.", "Mandingo extended compound with uncles/cousins."],
            waecFocus: ["Define family and three types with generations.", "Give advantages/disadvantages of each.", "State triple Ds and child rights.", "Distinguish monogamy/polygamy."],
            memoryTip: "Small (nuclear) - Large (extended) - One (single). Triple Ds cause single."
          },
          {
            id: "ses-g8-t2-2", unit: "16.1", page: "62", title: "Marriage, Dowry and Divorce", icon: "💍",
            explanation: "Marriage is legal man-woman union. Dowry/bride price (cattle, calabash, cash) legalises and stabilises but heavy demands enslave/discourage. Divorce ends marriage via Cadi court; wife waits Eddah 3 months.",
            points: [
              "Gay = man homosexual, lesbian = woman. Incest is taboo.",
              "Dowry benefits: responsible hands, stabilises (refund fear), sex right, legalises, respect. Problems: slave treatment, scares boys.",
              "Divorce via Cadi; Eddah 3 months in husband house to check pregnancy (extends if pregnant) and allow reconcile.",
              "Breakdown causes: no courtship, unsteadiness, dependence, infertility/impotence, relatives interference."
            ],
            definitions: ["Dowry/bride price.", "Divorce: legal end.", "Eddah: 3-month wait.", "Cadi: Islamic judge.", "Foster/adopted, ancestors, inheritance."],
            examples: ["Cattle as traditional dowry.", "Eddah extended for pregnant wife."],
            waecFocus: ["Define marriage/dowry/divorce/Eddah.", "Give benefits/problems of dowry.", "State Eddah reasons and breakdown causes."],
            memoryTip: "Pay (dowry) - Wait (Eddah) - Judge (Cadi)."
          }
        ]
      },
      {
        id: "ses-g8-t3",
        number: "Theme 3",
        title: "Gambian Economy and Livelihood",
        topics: [
          {
            id: "ses-g8-t3-1", unit: "17.0", page: "64", title: "Traditional and Modern Economy, Tax and Budget", icon: "💰",
            explanation: "Economy manages resources/money. Backbone agriculture plus trade/tourism/industry/fish/transport/livestock. Traditional uses hoe/cutlass, labour-intensive, low output. Modern uses tractors/NPK, skilled, high output. Green Revolution (1960s) brought high seeds/fertiliser/machines. Government earns by tax (GRA), spends on projects; budget deficit/surplus/balanced.",
            points: [
              "Traditional: farming (shifting/bush fallow), craft, fishing, local trade, griot singing, tie-dye, smithery, hunting/gathering (oldest). Traits: traditional tools, labour intensive, low production, unskilled, limited market, organic fertiliser.",
              "Modern: machines/fertiliser (tractors, NPK, monoculture), tourism, transport, banking, manufacturing, international trade. Traits: modern tools, skilled, high production, urea, external markets. Subsistence (maize, millet, rice — 80% farmers) vs cash (groundnut, cotton, sesame, cashew).",
              "Revenue: tax, licences, grants/aids, parastatal profits, banking, fines/rates/borrowings, interest, tourism, trade. Expenditure: roads/schools, trade, tourism, banking, subsidies, defence, debts, salaries/medicine/education.",
              "Tax compulsory levy; GRA collects. Types: import, export, excise (local goods), VAT (replaces sales tax), sales, income/employment, corporation (NAWEC), council (road/market/car park). Taxpayers deserve 60% back as projects.",
              "Budget = income/expenditure statement (Finance minister, National Assembly, fiscal year). Deficit (spend>income), surplus (income>spend), balanced (equal). Sectors: primary (farming groundnut, fishing bonga, mining gold, quarrying stones, lumbering timber), secondary (gari/fufu, furniture, soap, coffee, tea, tyres, weaving, petrol/kerosene), tertiary (teaching, banking, transport, telecom, trade, construction, medicine, insurance)."
            ],
            definitions: ["Economy, subsistence vs cash crop.", "Tax, GRA, VAT, budget, deficit/surplus/balanced.", "Primary/secondary/tertiary sectors.", "Green Revolution, NPK, fiscal year, subsidy, revenue."],
            examples: ["Groundnut as cash crop.", "VAT on shop sales.", "Furniture as secondary product."],
            waecFocus: ["List determinants and traditional/modern traits.", "Name tax types and budget types.", "Classify activities into three sectors.", "State revenue vs expenditure items."],
            memoryTip: "Earn (tax) - Spend (projects). Deficit spend more, Surplus earn more."
          },
          {
            id: "ses-g8-t3-2", unit: "18.0", page: "68", title: "Vegetable Gardening and Rice Cultivation", icon: "🌾",
            explanation: "Vegetables (women, horticulture: cabbage, tomato, okra) need irrigation (wells/boreholes). Rice is staple (women growers, men groundnut); Jahally-Pacharr 1984 (Sapu CRR) first project for self-sufficiency. Methods broadcast/transplant.",
            points: [
              "Vegetables: cabbage, tomatoes, okra, cucumber, lettuce; centres Banjulinding, Sukuta, Bakau; dry-season irrigation; water: rain, River Gambia, wells, boreholes/taps, lakes.",
              "Gardening problems: irrigation, seeds, pests, storage, salt intrusion, fertiliser cost, electricity, oversupply, markets, transport, processing. Solutions: boreholes, NARI seeds, cold rooms, agro-industries.",
              "Rice staple then groundnut/coos/cassava/maize; projects Jahally-Pacharr (1984 Sapu), Sankulay Kunda, Jakoto swamps.",
              "Rice steps: clearing (cutlass/tractor), ploughing (hoe/tiller), sowing (broadcast/transplant), weeding (hoe), harvesting (sickle/knife), winnowing, packaging, transport.",
              "CRR favours: fertile soil, labour, irrigation, markets, expertise, communication, topography, cooperatives, early seeds. Problems: drought, pests, storage, capital, traditional tools, markets, inputs, attitudes, fields, tractor cost, salt. Solutions: awareness, cooperatives, subsidies/loans, irrigation, extension. Jahally importance: food, jobs, living standards, savings, forex, less imports, income."
            ],
            definitions: ["Horticulture, irrigation.", "Broadcast vs transplant.", "Sickle, winnowing.", "Salt intrusion: sea water into farms.", "Extension worker, cooperative, subsidy."],
            examples: ["Sukuta women's garden.", "Transplanting seedlings to flooded field."],
            waecFocus: ["Name vegetables and water sources.", "List gardening/rice problems and solutions.", "Describe rice steps and methods.", "State Jahally importance."],
            memoryTip: "Women: vegetables + rice. Broadcast spread, Transplant move."
          },
          {
            id: "ses-g8-t3-3", unit: "20.0", page: "70", title: "Livestock, Cotton and Fishing", icon: "🐄",
            explanation: "Livestock (Fulani herdsmen, nomadic; CRR most cattle; Ndama/Zebu common; Abattoir slaughter, Daral sale, GLMA/NaLOA). Cotton (Basse URR, ginnery, weaving). Fishing (Serer/Chuballo, coastal 80km Kartong-Barra vs inland river; preserve smoking oldest, canning absent).",
            points: [
              "Animals: sheep, goat, pig, chicken, horse, donkey, rabbit, camel, cattle; husbandry = feeds/meds/water/shelter. Breeds Ndama, Zebu, Bororo, Fulani, Gudali, Friesian, Muturu, Angus.",
              "Marketing: Abuko, Brikama, Soma, Farafenni, Janjanbureh, Bansang, Basse, Fatoto. Importance: hides (belts/shoes), meat/milk, income, manure, prestige, jobs, forex, transport. Problems: rustling, pasture, markets, drought, capital, tax, trekking, tsetse/sleeping sickness/anthrax/fever, ignorance, vets, wild animals, storage, farmer clashes. Solutions: vets, insecticides, boreholes, vaccination, committees, sensitisation, ranching, ITC, lorries.",
              "Cotton second cash crop, Basse (heat, ginnery): near ginnery, soil, heat. Problems: insecticides, price, labour, drought, fertility, groundnut competition, pests. Solutions: insecticides, incentives, machines, migrant labour, irrigation, fertiliser. Ginning separates seeds; weaving industry; cash crops groundnut/cotton/sesame/cashew/palm.",
              "Fishing under Fisheries Ministry: coastal (oceans, Bonga, octopus, shark, tuna) centres + inland (river CRR/URR: Kosemar, Tendaba, Kaur, Basse; mudfish, tilapia). Methods coastal drift/gill/encircling/trawlers; inland hooks/spears/traps/baskets. Preserve smoking (oldest), frying, drying, freezing, salting, steaming (canning absent). Companies Golden Lead, Sea Food, A Plus; old Sea Gull, NPE, Lye; Tanji/Gunjur/Brufut Japan/EU projects; Bakoteh/Brikama markets; export China/Japan/USA/EU; industrial (trawlers) vs artisanal (small nets). Importance income/jobs/protein/forex. Problems capital, weather, fuel, storage, transport, overfishing, markets, coast guards, prices. Government ice plants (Tanji/Gunjur/Bakau), storage, navy, feeder roads, loans."
            ],
            definitions: ["Husbandry, nomadic/pastoral, abattoir, daral.", "Ginning, cash crop.", "Coastal vs inland, industrial vs artisanal.", "Trypanosomiasis/sleeping sickness."],
            examples: ["Ndama cattle in CRR.", "Smoked bonga at Tanji."],
            waecFocus: ["Name breeds, centres and cattle diseases.", "State cotton reasons/problems.", "Classify fishing types/methods/preservation.", "Give importance and government steps."],
            memoryTip: "Cattle Ndama, Cotton Basse, Fish Bonga. Smoking oldest, Canning absent."
          },
          {
            id: "ses-g8-t3-4", unit: "22.0", page: "76", title: "Industry, Trade and Banking", icon: "🏭",
            explanation: "Industry at Kanifing Estate: manufacturing (machines) vs cottage (backyard). Trade local (Lumo weekly) vs international (bilateral 2 countries, multilateral many). Banking keeps money, gives loans; Central Bank heads, commercial banks serve public.",
            points: [
              "Manufacturing examples/process; contribution jobs/revenue/infrastructure/forex/inflation/human resources/materials (Bell Bottling Bonto; Julbrew closed high tax). Problems small market, skills, electricity/water, tax, capital, raw materials, purchasing power, roads, know-how. Solutions roads, NAWEC power, loans, markets, lower tax, cooperatives, capacity. Pollution water/land/air, chemicals; others construction/mining/oil refinery (crude → petrol/diesel; Nigeria/Libya/Saudi/Qatar).",
              "Cottage: local tools/backyard (smithery oldest); pottery cooking/storage/decoration/income/jobs/water; importance income/jobs/forex/skills; problems raw materials, imports, capital, quality.",
              "Domestic importance jobs/income/relations/local industry/prosperity. International importance large markets, no monopoly, relations, jobs, revenue, industries. Reasons forex, technology, resources, climate/soil. Problems: overdependence, language, currency, duties, transport. Government steps: quality control, roads, loans, storage, trade agreements.",
              "Balance of trade (exports-imports): favourable (export more), unfavourable, balanced. Demand (want + ability) vs supply; price rises demand falls. Banking: save, loans, forex, salaries, safekeeping; types central (issues currency, banker to banks/government) vs commercial (accounts/loans); loans need collateral/guarantor; interest is charge. Population economy links."
            ],
            definitions: ["Industry, manufacturing vs cottage.", "Lumo, bilateral vs multilateral.", "Balance of trade, demand, supply.", "Bank, loan, interest, collateral."],
            examples: ["Kanifing Industrial Estate.", "Lumo weekly market.", "Bilateral Gambia-China trade."],
            waecFocus: ["Distinguish industry types with problems/solutions.", "Distinguish trade types and importance.", "Define balance of trade and demand/supply.", "State bank functions and types."],
            memoryTip: "Make (industry) - Buy/sell (trade) - Keep (bank). Lumo local, Bilateral two."
          }
        ]
      },
      {
        id: "ses-g8-t4",
        number: "Theme 4",
        title: "Population, Health, Tourism and Climate",
        topics: [
          {
            id: "ses-g8-t4-1", unit: "25.0", page: "82", title: "Population, Census and Migration", icon: "👨‍👩‍👧‍👦",
            explanation: "Population is people in an area. Census counts them (Gambia 2013: Mandinko 32.3%, Fula 22.6%...). Migration moves in/out; urbanisation crowds towns. Malthus warned population outgrows food; development meets needs.",
            points: [
              "Census: official count (housing, age, tribe, jobs). Importance planning, constituencies, revenue, schools. Problems: illiteracy, transport, funds, suspicion, weather, borders. 2013 ethnic % as above; Banjul/KM dense.",
              "Migration: emigration (leave), immigration (enter), rural-urban (jobs/schools), urban-rural, seasonal, forced (war). Causes jobs, schools, pasture, war, trade, climate. Effects overcrowding, jobs pressure, slums, labour loss, culture mix. Urbanisation = town growth; problems housing, water, jobs, crime, sanitation; solutions estates, water, jobs, planning.",
              "Malthus theory: population grows geometrically, food arithmetically → famine/war/disease checks; control late marriage, moral restraint. Development = better life (roads, schools, health, income); needs aid, good governance, skills, peace."
            ],
            definitions: ["Population, census.", "Emigration vs immigration.", "Urbanisation.", "Malthusian theory.", "Development."],
            examples: ["2013 census ethnic shares.", "Youth moving Basse to Serrekunda."],
            waecFocus: ["Define terms and give census importance/problems.", "Classify migration and urbanisation effects.", "Explain Malthus and development needs."],
            memoryTip: "Count (census) - Move (migration) - Crowd (urbanisation)."
          },
          {
            id: "ses-g8-t4-2", unit: "27.0", page: "86", title: "Health, Teenage Pregnancy and Drug Abuse", icon: "🏥",
            explanation: "Health is complete well-being. Gambia faces malaria, cholera, HIV; teenage pregnancy (dropout, poverty, stigma) and drug abuse (kush, alcohol, cigarettes damage liver/lungs) need prevention; hospitals (EFSTH Banjul, Kanifing, Bansang) and nutrition (balanced diet) protect.",
            points: [
              "Diseases: malaria (mosquito, nets, drainage), cholera/typhoid (clean water), HIV/AIDS (abstinence/faithfulness/condoms), TB, yellow fever. Prevention hygiene, vaccination, clean water, nets.",
              "Teenage pregnancy causes: peer pressure, poverty, ignorance, media, abuse. Effects dropout, health risk, stigma, poverty, abortion risk. Prevention abstinence, education, guidance, parental care. Nutrition: balanced (carbs/protein/vitamins), breastfeeding, iodised salt, vitamin A; malnutrition kwashiorkor/marasmus.",
              "Drugs: kush, marijuana, alcohol, cigarettes, tramadol. Causes curiosity, peers, stress, unemployment. Effects liver/lungs, madness, crime, dropout, death. Control laws, sensitisation, rehab, jobs, religion. Hospitals: EFSTH (main referral Banjul), Kanifing General, Bansang, Basse, Farafenni; health centres, clinics; doctors/nurses/midwives; referrals."
            ],
            definitions: ["Health, hygiene.", "Teenage pregnancy.", "Drug abuse.", "Balanced diet, malnutrition.", "Referral hospital."],
            examples: ["Sleeping under nets vs malaria.", "EFSTH as main referral."],
            waecFocus: ["Name diseases and prevention.", "Give teenage pregnancy causes/effects/prevention.", "State drug effects and control.", "Name hospitals and nutrition needs."],
            memoryTip: "Clean water + Nets + Abstinence + Balanced food = health."
          },
          {
            id: "ses-g8-t4-3", unit: "28.0", page: "92", title: "Tourism in The Gambia", icon: "✈️",
            explanation: "Tourism is visiting for leisure; Gambia (Smiling Coast) attracts sun, beaches, birds, culture, Roots. Sites: Banjul Arch 22, Kachikally, Wassu, Juffureh, Abuko, Bijilo, Makasutu, Tanji. Benefits jobs/forex/culture; problems sex tourism, price rise, culture loss, dependence.",
            points: [
              "Tourists = visitors; winter sun season (Oct–Apr) Europeans escape cold. Attractions beaches (Kololi, Bakau, Kartong), birds (Abuko, Tanji), culture (Juffureh Roots, Wassu, Kankurang festival), crafts (Bakoteh markets), river trips.",
              "Importance: jobs (guides, hotels), forex, revenue, infrastructure, culture promotion, international relations.",
              "Problems: high prices, prostitution/drugs, beach erosion, cultural dilution, seasonal jobs, dependence. Solutions: eco-tourism, community tourism, laws, training, diversify, protect beaches.",
              "Gambia Tourism Board markets; hotels (Senegambia, Kairaba); guides licensed."
            ],
            definitions: ["Tourism, tourist.", "Eco-tourism.", "Smiling Coast.", "Heritage site."],
            examples: ["Roots trip to Juffureh.", "Bird watching at Abuko."],
            waecFocus: ["Define tourism and name 5 sites.", "Give importance and problems with solutions.", "State tourist season and why."],
            memoryTip: "Sun + Beach + Birds + Roots = Smiling Coast."
          },
          {
            id: "ses-g8-t4-4", unit: "29.0", page: "95", title: "Weather, Climate and Environment", icon: "🌦️",
            explanation: "Weather is daily air condition; climate is 30-year average. Gambia: Sudano-Sahelian, rainy Jun–Oct, dry Nov–May (harmattan). Elements temperature, rainfall, wind, humidity. Environment needs protection from bush burning, deforestation, pollution.",
            points: [
              "Elements: temperature (thermometer °C), rainfall (rain gauge mm), wind (anemometer/vane), humidity (hygrometer), pressure (barometer), sunshine. Instruments as in science.",
              "Gambia climate: hot (25–32°C), rainfall 800–1200mm south to north, harmattan dusty Dec–Feb. Vegetation savanna, mangroves at river mouth; no mountains (lowland); River Gambia source Fouta Djallon, mouth Atlantic (estuary); land ~11,295 km²; lat 13°N long 16°W; bolongs as boundaries.",
              "Population-environment: overpopulation → deforestation, overgrazing, bush fires, erosion, waste. Conserve: plant trees, controlled grazing, stop bush burning, proper waste, marine protection, Raffia palm uses (roofs, oil). Natural disasters: flood, drought, storm, thunderstorm.",
              "Extra geo: Africa 5 parts; biggest Russia/Canada/China/USA/Brazil; continents 7; longest Nile; source vs mouth; estuary."
            ],
            definitions: ["Weather vs climate.", "Harmattan.", "Estuary/mouth vs source.", "Vegetation, bolong.", "Conservation."],
            examples: ["Harmattan dust in January.", "Mangroves at river mouth."],
            waecFocus: ["Distinguish weather/climate with instruments.", "Describe Gambia climate/seasons/vegetation.", "State river source/mouth and area.", "Give environmental problems and conservation."],
            memoryTip: "Rain Jun-Oct, Dry Nov-May. Weather daily, Climate 30 years."
          }
        ]
      }
    ]
  },
  // ============================================================
  // GRADE 9 — from Grade 9 Geography/SES complete notes (Mr. Fafanding Dibba)
  // ============================================================
  {
    id: "ses-g9",
    grade: "Grade 9",
    label: "SES — Grade Nine",
    icon: "🎓",
    blurb: "Chapters 24-41: solar system, map work, slave trade, colonial rule, government, democracy, development and world organisations. Read a chapter, then quiz it.",
    themes: [
      {
        "id": "ses-g9-t1",
        "number": "Theme 1",
        "title": "The Earth and the Solar System",
        "topics": [
          {
            "id": "ses-g9-t1-1",
            "unit": "24.0",
            "page": "—",
            "title": "The Solar System and Planets",
            "icon": "🪐",
            "explanation": "The solar system is the sun plus the eight planets revolving around it in elliptical orbits, with their satellites and other heavenly bodies.",
            "points": [
              "The solar system comprises the sun and eight planets revolving around it in elliptical orbits, plus satellites and other heavenly bodies.",
              "The sun is the largest and brightest star, the main source of light, made of burning gases at 6000 degrees Celsius.",
              "The universe is the whole of space; astronomy is the study of stars or the universe; a group of stars is called a galaxy or nebulas.",
              "A planet is a natural body going round the sun in its orbit; an orbit is the pathway used by planets to go round the sun.",
              "A satellite is a body going round a planet; the natural satellite of the earth is the moon, taking 27 and a half days round the earth.",
              "Mercury is smallest, hottest and nearest to the sun (88 days); Venus is the earth twin, morning or evening star, closest to the earth; Earth is the only planet with life, the blue planet, 365 and a quarter days round the sun and 150 million km away.",
              "Mars is the red planet with possibility of life but no water and oxygen; Jupiter is the largest with 12 satellites; Saturn is most beautiful with a ring, 9 satellites, second largest; Uranus rotates clockwise unlike others with 5 satellites; Neptune looks green from a distance and is farthest.",
              "Pluto is no longer a complete planet but a dwarf planet or plutoid, per the International Astronomical Union pronouncement of 2008."
            ],
            "definitions": [
              "Solar system: the sun and the eight planets revolving around it in elliptical orbits, with satellites and other heavenly bodies.",
              "Sun: the largest and brightest star, main source of light, made of burning gases.",
              "Universe: the whole of space.",
              "Astronomy: the study of stars or the universe.",
              "Galaxy or nebulas: a group of stars.",
              "Planet: a natural body that goes round the sun in its orbit.",
              "Orbit: the pathway used by planets to go round the sun.",
              "Satellite: a body that goes around a planet.",
              "Natural satellites: natural bodies going round a planet, e.g. the moon.",
              "Artificial satellites: objects sent into space by people to send back television, radio, photograph, internet and weather signals."
            ],
            "examples": [
              "Mercury takes 88 days to revolve round the sun.",
              "Venus is called the morning or evening star.",
              "Earth takes 365 and a quarter days round the sun, 366 days in a leap year.",
              "Jupiter, the largest planet, has 12 satellites.",
              "Saturn has a ring around it and 9 satellites."
            ],
            "waecFocus": [
              "Define planet, orbit, satellite, astronomy and galaxy.",
              "State the characteristics of each of the eight planets.",
              "Distinguish natural and artificial satellites with examples and uses.",
              "Explain the 2008 IAU position on Pluto."
            ],
            "memoryTip": "Mercury races, Venus shines, Earth lives: Small Hot Near, Twin Star, Blue Life."
          },
          {
            "id": "ses-g9-t1-2",
            "unit": "24.1",
            "page": "—",
            "title": "Earth Shape, Movements and Seasons",
            "icon": "🌍",
            "explanation": "The earth is geoid in shape, slightly flattened at the poles, with two movements: rotation every 24 hours and revolution every 365 and a quarter days, whose tilt brings solstices, equinoxes and seasons.",
            "points": [
              "The earth is not completely circular but slightly flattened at the poles, making it spherical or geoid in shape.",
              "Proofs of sphericity: circumnavigation by Ferdinand Magellan 1519-1522, circular horizon, Bedford level canal experiment, other planetary bodies, aerial photographs, ship visibility, sunrise and sunset, and lunar eclipse.",
              "An eclipse is when sun, moon and earth come in a straight line during revolution; solar eclipse is the moon between sun and earth; lunar eclipse is the earth between sun and moon, casting the earth image on the moon.",
              "Rotation is the turning of the earth from west to east on its axis once every 24 hours; effects are day and night, deflection of wind and ocean currents, dawn and dusk, and daily rise and fall of ocean tides.",
              "Dawn is the brief period between sunrise and full daylight; dusk or twilight is the brief period between sunset and complete darkness.",
              "Revolution is the journey of the earth on its orbit round the sun once every 365 and a quarter days, 366 days in a leap year; a leap year comes every 4 years and any year divisible by 4 is a leap year.",
              "Effects of revolution: seasons, varying length of day and night, varying altitude of the mid-day sun, and changes of temperature.",
              "Tilt positions: summer solstice 21st June at 23 and a half degrees north of the Tropic of Cancer with longer days in the Northern Hemisphere; winter solstice 22nd December at 23 and a half degrees south of the Tropic of Capricorn with longer days in the Southern Hemisphere; equinox 22nd March and 23rd September with equal 12-hour days and nights when the sun is overhead the Equator."
            ],
            "definitions": [
              "Geoid: the spherical shape of the earth, slightly flattened at the poles.",
              "Eclipse: the period during revolution when sun, moon and earth come in a straight line.",
              "Solar eclipse: the moon coming between the sun and the earth.",
              "Lunar eclipse: the earth coming between the sun and the moon.",
              "Rotation: turning of the earth from west to east on its axis once every 24 hours.",
              "Revolution: movement of the earth on its orbit round the sun once every 365 and a quarter days.",
              "Dawn: brief period between sunrise and full daylight.",
              "Dusk or twilight: brief period between sunset and complete darkness.",
              "Season: a period in the year with a set of atmospheric characteristics such as wet, warm, dry or cold.",
              "Solstice: times of the year with unequal length of day and night."
            ],
            "examples": [
              "Magellan circumnavigated the earth from 1519 to 1522.",
              "Summer solstice falls on 21st June; winter solstice on 22nd December.",
              "Equinoxes fall on 22nd March and 23rd September with 12 hours of day and 12 of night.",
              "The world has four seasons: winter, summer, spring and autumn.",
              "The Gambia has two main seasons, the wet or rainy season and the dry season, due to its location."
            ],
            "waecFocus": [
              "List proofs that the earth is spherical.",
              "Distinguish rotation from revolution with effects of each.",
              "Distinguish solar from lunar eclipse with diagrams.",
              "Explain solstices and equinoxes with dates and hemisphere effects."
            ],
            "memoryTip": "Spin 24 hours, trip 365 days: rotation brings night-day, revolution brings seasons."
          },
          {
            "id": "ses-g9-t1-3",
            "unit": "24.2",
            "page": "—",
            "title": "Latitude, Longitude and Time",
            "icon": "🧭",
            "explanation": "Latitudes run east to west and longitudes run north to south as great circles; the Equator and Greenwich meridian are the zero lines used to find places, distances and local time.",
            "points": [
              "Latitudes are parallel imaginary lines round the earth running east to west, starting from the centre of the earth to the poles; uses are locating places and measuring distance between two places.",
              "Longitudes are imaginary lines round the earth running north to south forming great circles; they meet at the poles and are semi-circles; uses are locating places and calculating local time.",
              "Latitudes and longitudes are alike: both imaginary, same colours on maps, measured in degrees, fix locations, and calculate distances.",
              "The Equator at 0 degrees is the most important and longest latitude; the Greenwich or Prime Meridian at 0 degrees is the most important and longest longitude.",
              "The Prime Meridian passes through Ghana, England, Spain, Mali and Algeria; the Equator passes through Ecuador, Colombia, Kenya, Somalia and Indonesia.",
              "Revolution periods: Mercury 88 days, Venus 224.7 days, Earth 365 days, Mars 687 days, Jupiter 11.9 years, Saturn 29.5 years, Uranus 84 years, Neptune 164.8 years.",
              "Latitude and distance: every 1 degree equals 111 km; north and north subtract, south and south subtract, north and south add, Equator to any direction add; e.g. Banjul 50N to Bissau 60N gives 10 degrees times 111 km equals 1,110 km.",
              "Longitude and time: the earth rotates 360 degrees in 24 hours, 15 degrees in 1 hour, 1 degree in 4 minutes; going east add, going west subtract; e.g. 5:00 pm at Banjul 0 degrees gives 7:00 pm at Dakar 30E; GMT means Greenwich Meridian Time, AM means Anti Meridian and PM means Post Meridian."
            ],
            "definitions": [
              "Latitude: parallel imaginary lines round the earth running east to west.",
              "Longitude: imaginary lines round the earth running north to south, forming great circles.",
              "Equator: the most important and longest latitude, marked 0 degrees.",
              "Greenwich or Prime Meridian: the most important and longest longitude, marked 0 degrees.",
              "GMT: Greenwich Meridian Time.",
              "AM: Anti Meridian.",
              "PM: Post Meridian."
            ],
            "examples": [
              "Banjul 50N to Bissau 60N: 60 minus 50 equals 10 degrees, times 111 km equals 1,110 km.",
              "5:00 pm at Banjul 0 degrees is 7:00 pm at Dakar 30E after adding 2 hours eastward.",
              "Major latitude lines include the Arctic circle 66 and a half N, Tropic of Cancer 23 and a half N, Equator 0, Tropic of Capricorn 23 and a half S and Antarctic circle 66 and a half S."
            ],
            "waecFocus": [
              "State characteristics and uses of latitudes and longitudes.",
              "Name countries on the Equator and the Prime Meridian.",
              "Calculate distance from latitudes using 1 degree equals 111 km.",
              "Calculate local time from longitudes using 15 degrees per hour and 4 minutes per degree."
            ],
            "memoryTip": "Lats lie flat east-west, longs stand north-south: east add, west subtract."
          }
        ]
      },
      {
        "id": "ses-g9-t10",
        "number": "Theme 10",
        "title": "Policy, Development and the World",
        "topics": [
          {
            "id": "ses-g9-t10-1",
            "unit": "34.0",
            "page": "—",
            "title": "National Education Policy",
            "icon": "🎓",
            "explanation": "Education is the process of exposing ability and mind to acquire knowledge and develop skills. The Gambia designed a new 6-3-3 policy in 1987: 6 years lower basic, 3 years upper basic and 3 years senior secondary, then tertiary education.",
            "points": [
              "Education exposes ability and mind to acquire knowledge and develop skills; literacy is the ability to read and write.",
              "The new policy was designed in 1987 at the first national conference on education: 9 years basic cycle plus 3 years senior secondary, then tertiary and skills centres.",
              "2004 to 2015 policy focused on relevance, quality and access; 2007 to 2013 encouraged reading and mathematics from Grades 1 to 3.",
              "2016 to 2030 policy provides access, quality and equity, vocational and technical skills, tertiary and higher education, and capacity building.",
              "Ministry bodies: CREDD prepares syllabuses and trains teachers; WAEC conducts WASSCE for The Gambia, Ghana, Nigeria and Sierra Leone; GABECE is for Grade 9; NAT is for Grades 3, 5 and 8.",
              "Tertiary institutions: UTG (1999), University of Education formerly Gambia College (1952) with schools of education, public health, nursing and agriculture, USET formerly GTTI for TVET, Civil Service University formerly MDI (1982), IOU, American International University, RDI and NYSS for dropouts.",
              "Importance: develops physical, mental, emotional and social wellbeing, prepares citizens for national development, gives decent jobs and self-employment, and teaches environmental protection.",
              "Western education is formal, examinable and systematically designed with a defined syllabus (academic, vocational, technical); traditional education is informal, non-examinable and unstructured. Public holidays include Independence Day 18th February, Workers Day 1st May and Christmas; events include Womens Day 8th March and World AIDS Day 1st December."
            ],
            "definitions": [
              "Education: process of exposing ability and mind to acquire knowledge and develop skills.",
              "Literacy: ability to read and write.",
              "6-3-3 policy: 6 years lower basic, 3 years upper basic and 3 years senior secondary.",
              "CREDD: body preparing syllabuses and teaching materials and training teachers.",
              "TVET: Technical and Vocational Skills Education and Training."
            ],
            "examples": [
              "A child spends 9 years in the basic cycle before senior secondary.",
              "WAEC conducts WASSCE while GABECE examines Grade 9.",
              "USET trains plumbers and welders at Old Jeshwang."
            ],
            "waecFocus": [
              "Define education and literacy.",
              "Explain the 6-3-3 system and policy eras.",
              "State roles of CREDD, WAEC, GABECE and NAT.",
              "Name tertiary institutions and their fields.",
              "Compare western and traditional education."
            ],
            "memoryTip": "1987 gave 6-3-3: nine basic, three senior, then tertiary."
          },
          {
            "id": "ses-g9-t10-2",
            "unit": "35.0",
            "page": "—",
            "title": "Contributions to National Development",
            "icon": "🌟",
            "explanation": "Contribution to national development means selfless and invaluable service in any sector that improves citizens welfare and basic needs. Gambian women serve in domestic, political, economic and social roles, joined by many prominent men and women.",
            "points": [
              "National development contribution means selfless service in any sector that improves citizens welfare and basic needs.",
              "Domestic roles: wives, mothers and domestic workers giving security, child bearing, breastfeeding, babysitting and teaching values.",
              "Political roles: village heads, ministers, National Assembly members, diplomats and party mobilizers.",
              "Economic roles: rice and food crop cultivation, trading, skills centres and vegetable gardening; social roles: teachers, nurses and community social workers.",
              "Issues facing women: early marriage, teenage pregnancy, harassment, illiteracy, religious and customary beliefs, insecurity, discrimination, domestic violence, low self-esteem and fewer opportunities.",
              "The 1995 Beijing conference rules: recognise women as humans with rights, give them voice in their destiny, equal access to jobs, education and land, and equal partnership in development.",
              "Improvements: education, better health, formal jobs, legislation, empowerment, scholarships, and discouraging early marriage and teenage pregnancy.",
              "Welfare bodies include Womens Bureau, GAWFA, GAMCOTRAP, BAFROW, FLAG, National Women Federation and WISDOM. Prominent women include Nyimasata Sanneh Bojang, Isatou Njie Saidy, Fatou Bom Bensouda and Rohey Malick Lowe; prominent men include Dawda Jawara, Edward Francis Small, Pierre Sarr Njie and Talib Bensouda. 8th March is International Womens Day."
            ],
            "definitions": [
              "National development: improvement of citizens welfare and basic needs across sectors.",
              "Domestic role: service as wife, mother and home caretaker.",
              "Empowerment: giving women power, opportunities and resources to decide their lives.",
              "Early marriage: marrying off girls before maturity, harming their welfare.",
              "Beijing conference: 1995 world conference setting rules for womens rights."
            ],
            "examples": [
              "Women vegetable gardeners and traders feed families and markets.",
              "Nyimasata Sanneh Bojang was the first woman in the House of Representatives.",
              "Edward Francis Small led trade unionism while Jawara became first president."
            ],
            "waecFocus": [
              "Define contribution to national development.",
              "State domestic, political, economic and social roles of women.",
              "List issues affecting women and Beijing rules.",
              "State ways to improve women and girls.",
              "Name welfare organisations and prominent contributors."
            ],
            "memoryTip": "Women build Home, Politics, Market, School: Beijing 1995 says equal rights."
          },
          {
            "id": "ses-g9-t10-3",
            "unit": "41.0",
            "page": "—",
            "title": "The Gambia and International Organisations",
            "icon": "🌐",
            "explanation": "Countries send representatives called diplomats to international organisations. The Gambia belongs to the UN, AU (formerly OAU), Commonwealth, ECOWAS, OIC and others, gaining aid, trade, peacekeeping and scholarships.",
            "points": [
              "Diplomats represent countries abroad. The UN formed 24th October 1945 in New York after the world wars; The Gambia joined 21st September 1965 under Secretary General U Thant and it now has about 193 members.",
              "The UN grew from the League of Nations; permanent five with veto power are Britain, France, USA, Russia and China; the head is the Secretary General with a 5-year term, including U Thant, Kofi Annan, Ban Ki-moon and Antonio Guterres.",
              "UN organs: General Assembly, Security Council of 15 with 5 permanent, Secretariat, Economic and Social Council, International Court of Justice and Trusteeship Council. Agencies include WHO, FAO, ILO, UNESCO, UNHCR, World Bank, UNDP, UNFPA and UNICEF.",
              "UN aims: world peace, diplomatic relations, human rights and peacekeeping. The Gambia contributes appointments, peacekeeping, dues and denouncing abuses; it gains food, health, bank and labour projects. Achievements include preventing a third world war and helping independence; problems include ideology differences, poor funds, language barriers, veto power and no standing army.",
              "OAU formed 25th May 1963 in Addis Ababa to fight for independence and unity; founders include Nkrumah, Haile Selassie, Nyerere, Sekou Toure and Modibo Keita; Liberia and Ethiopia were never colonized; first chairman Haile Selassie; Morocco left and rejoined in 2017; it became the AU in May 2002.",
              "AU was proposed by Gaddafi in 1999 and launched 2001 to 2002 in South Africa under Thabo Mbeki; advocates include Gaddafi, Mbeki and Daniel Arap Moi. Aims: fight poverty and disease, end wars, protect human rights and renew Pan-Africanism. Organs: Assembly, Executive Council, Pan-African Parliament, Commission, Peace and Security Council and Court of Justice. Cooperation is hindered by ideology differences, European influence, border conflicts, languages, illiteracy and weak democracy.",
              "Commonwealth admits former British colonies voluntarily; it began with Britain, Canada, New Zealand, South Africa and Australia; the head is the English monarch, headquarters London at Marlborough House, and envoys are High Commissioners. The Gambia left 2nd October 2013 and rejoined 8th February 2018; benefits are scholarships, financial aid, military help, multilateral trade and games.",
              "ECOWAS, also CEDEAO, was founded 28th May 1975 by the Lagos treaty with headquarters in Abuja; members are the West African states except Mauritania which withdrew in 2002. Aims: trade, free movement of people and goods, and peace; The Gambia gains free movement, jobs, games, re-export trade and cultural and military ties; ECOMOG keeps peace; Mali, Guinea, Niger and Burkina Faso were suspended in 2024. Others: OIC formed 25th September 1969 in Jeddah with 57 members, Banjul hosted the 15th summit 4th to 5th May 2024 with President Barrow as chairman; plus CILSS (1973) for drought, NEPAD for economic revival, OMVG for the Gambia River basin, EEC, IMF and ADB."
            ],
            "definitions": [
              "Diplomat: representative sent by a country to international organisations.",
              "Veto power: right of UN permanent members to block decisions.",
              "Secretary General: head of the UN serving a 5-year term.",
              "High Commissioner: ambassador of one Commonwealth country in another.",
              "ECOMOG: ECOWAS monitoring arm for keeping peace among members."
            ],
            "examples": [
              "Gambian soldiers serve in UN peacekeeping missions.",
              "Gambians travel and trade freely across ECOWAS borders.",
              "Banjul hosted the OIC Islamic summit in May 2024."
            ],
            "waecFocus": [
              "State UN formation date, HQ, membership and Gambia entry.",
              "Name P5 veto states and UN organs and agencies.",
              "Give Gambia contributions, benefits and UN problems.",
              "Trace OAU to AU with dates, founders and organs.",
              "State Commonwealth and ECOWAS facts, exits and benefits."
            ],
            "memoryTip": "UN 1945, OAU 1963, ECOWAS 1975, OIC 1969: Gambia gains peace, trade, aid."
          }
        ]
      },
      {
        "id": "ses-g9-t2",
        "number": "Theme 2",
        "title": "Structure of the Earth and Rocks",
        "topics": [
          {
            "id": "ses-g9-t2-1",
            "unit": "25.0",
            "page": "—",
            "title": "Structure of the Earth",
            "icon": "🌋",
            "explanation": "The earth has an external structure of atmosphere, hydrosphere and biosphere, and an internal structure of lithosphere, mesosphere and barysphere core.",
            "points": [
              "The structure of the earth is divided into the internal and the external structures.",
              "The atmosphere is an envelope of gases covering the earth up to about 100 km above sea level: nitrogen 78 percent, oxygen 21 percent, carbon dioxide 0.03 percent, plus rain and wind as resources.",
              "The atmosphere gives oxygen and carbon dioxide for respiration, acts as a greenhouse, shelters animals, aids communication, gives nitrogen to plants, shields harmful sun rays and gives oxygen for combustion.",
              "The hydrosphere or water bodies (oceans, rivers, seas, lakes) covers about 70 percent of the earth; it gives domestic water, transport, fishing jobs, tourism, fish food and habitat for aquatic animals.",
              "The biosphere of plants, animals and micro-organisms is any part occupied by living things; it gives food, fuel like firewood and fossil fuel, shelter from trees, clothing from animals, habitat, a link between spheres and support for life.",
              "The lithosphere or crust has SiAl upper crust of silicon and aluminium forming continents with density 2.65 to 2.70, occupied by settlements, and SiMa lower crust of silicon, magnesia and iron with density 3.0, called the ocean floor or sea bed.",
              "The lithosphere gives land for agriculture and settlement, minerals, and nutrients to plants; the correct order is SiAl, SiMa, mantle and core.",
              "The mesosphere or mantle is the middle, thickest layer with about 85 percent of earth volume, semi-liquid very hot rocks, density 3.3; it protects the earth, burns up meteoroids and asteroids, moderates temperature and balances oxygen and carbon dioxide for life."
            ],
            "definitions": [
              "External structure: the outer zone of atmosphere, hydrosphere and biosphere.",
              "Atmosphere: the envelope of gases covering the earth up to about 100 km above sea level.",
              "Hydrosphere: the water bodies such as oceans, rivers, seas and lakes.",
              "Biosphere: any part occupied by living organisms, plants, animals and micro-organisms.",
              "Internal structure: the inner zone of lithosphere, mesosphere and barysphere.",
              "Lithosphere or crust: the outer solid layer with SiAl continents and SiMa ocean floor.",
              "SiAl: the upper crust of silicon and aluminium forming continents.",
              "SiMa: the lower crust of silicon, magnesia and iron, the ocean floor or sea bed.",
              "Mesosphere or mantle: the middle, thickest layer of very hot semi-liquid rocks.",
              "Barysphere or core: the innermost part of iron and nickel (NiFe), about 2000 degrees Celsius, the hottest layer, in inner and outer core."
            ],
            "examples": [
              "Nitrogen 78 percent and oxygen 21 percent dominate the atmosphere.",
              "The hydrosphere covers about 70 percent of the earth.",
              "The mantle holds about 85 percent of earth volume.",
              "The core of iron and nickel is about 2000 degrees Celsius."
            ],
            "waecFocus": [
              "Name the layers of the external and internal structure.",
              "State the composition and importance of atmosphere, hydrosphere and biosphere.",
              "Distinguish SiAl from SiMa with density and minerals.",
              "State the importance of the lithosphere and mesosphere."
            ],
            "memoryTip": "Outside Air-Water-Life, inside Crust-Mantle-Core: SiAl land, SiMa sea, NiFe heat."
          },
          {
            "id": "ses-g9-t2-2",
            "unit": "25.1",
            "page": "—",
            "title": "Rocks and Landforms",
            "icon": "🪨",
            "explanation": "Rocks are solidified minerals forming the crust, in igneous, sedimentary and metamorphic types, while highlands, plateaux and plains shape the land where human life developed.",
            "points": [
              "A rock is any solidified material or mineral, or combination of minerals, forming part of the crust; rocks differ in colour, texture and structure; the study of rocks is geology.",
              "Igneous rocks form from molten magma, e.g. basalt, granite and gabbro.",
              "Sedimentary rocks form from sediments, e.g. sandstone, clay, gravel and mud.",
              "Metamorphic rocks form from pre-existing rocks, e.g. slate, marble and graphite, and are generally resistant to erosion.",
              "Rocks are important for roads and bridges, minerals, fuel, limestone for cement, agriculture and decoration.",
              "Mountains are highland areas: Mount Everest in China is highest at 8,848.86 m; Mount Kilimanjaro in Tanzania at 5,895 m is highest in Africa.",
              "Plateaux are large flat lands above sea level, e.g. Deccan plateau in India and Jos plateau in Nigeria; plains are large flat lands, e.g. the Russian platform and the great plains of the USA.",
              "Life began millions of years ago through the ice or glacial age, stone age of stones and bones as tools, iron age of discovered irons, and computer or digital age of computers and software; early men called Homo sapiens fall into Negroids (Africans), Mongoloids (Asians) and Caucasians (Europeans)."
            ],
            "definitions": [
              "Rock: any solidified material or mineral, or combination of minerals, forming part of the crust.",
              "Geology: the study of rocks.",
              "Igneous rocks: rocks formed from molten magma.",
              "Sedimentary rocks: rocks formed from sediments.",
              "Metamorphic rocks: rocks formed from pre-existing rocks.",
              "Mountains: highland areas of the earth.",
              "Plateaux: large flat lands above sea level.",
              "Plains: large areas of flat land.",
              "Homo sapiens: the early men, in Negroid, Mongoloid and Caucasian races."
            ],
            "examples": [
              "Basalt, granite and gabbro are igneous rocks.",
              "Sandstone, clay, gravel and mud are sedimentary rocks.",
              "Slate, marble and graphite are metamorphic rocks.",
              "Everest 8,848.86 m and Kilimanjaro 5,895 m are famous mountains.",
              "Deccan (India) and Jos (Nigeria) are plateaux."
            ],
            "waecFocus": [
              "Define rock and geology and state how rocks differ.",
              "Give examples of igneous, sedimentary and metamorphic rocks.",
              "State six importance of rocks.",
              "Distinguish mountains, plateaux and plains with examples."
            ],
            "memoryTip": "Fire-Mud-Change: igneous magma, sedimentary sediments, metamorphic pre-existing."
          }
        ]
      },
      {
        "id": "ses-g9-t3",
        "number": "Theme 3",
        "title": "Maps and Settlement",
        "topics": [
          {
            "id": "ses-g9-t3-1",
            "unit": "26.0",
            "page": "—",
            "title": "Map Interpretation and Settlement",
            "icon": "🗺️",
            "explanation": "A map represents the earth surface with title, scale and key, read through scales, bearings, contours and conventional signs, and shows settlements in clear patterns from cities to farmsteads.",
            "points": [
              "A map is a representation of any part or the whole earth surface on paper, cloth, wall or board, showing relief, settlements and routes with conventional signs of distance, direction and size; an atlas or world map collects maps; cartographers draw maps in cartography.",
              "A good map must have a title at top or bottom describing it, a scale relating map distance to ground distance (cm to km), and a key or legend for reading signs, e.g. rivers in blue and vegetation in green.",
              "Map types include road or tourist maps for travellers with compass and bearings, relief or physical or topographical maps with contour lines for senior school geography, weather or climatic maps with isopleths for pilots and captains, vegetation maps of savannah and mangroves, and agricultural maps of crops and animals.",
              "Statement scale uses words (one cm represents one km); representative fraction or ratio scale uses maths (1 over 100,000 or 1:100,000); linear scale uses a line with primary and secondary sides, measuring straight crow-fly distances with ruler or dividers and irregular distances with thread.",
              "Compass and protractors give direction and position; the magnetic needle points north; points divide into 4, 8 and 16 cardinal points, and the compass also shows wind direction; 16 bearings run N 360 or 000, NNE 22.5, NE 45, ENE 67.5, E 90, ESE 112.5, SE 135, SSE 157.5, S 180, SSW 202.5, SW 225, WSW 247.5, W 270, WNW 292.5, NW 315, NNW 337.5 degrees.",
              "Isopleths show equal weather distributions: rainfall isoyeth, temperature isotherm, pressure isobars, clouds isoneph, sunshine isohel, salinity isohaline, humidity isoneph, wind speed isotach; contours join equal heights with the contour interval between lines; map reading identifies ground features through signs.",
              "Map reduction and enlargement rules: the bigger the map the smaller the scale and vice versa; enlargement multiplies sides and divides the scale, e.g. 1:75,000 enlarged 3 times becomes 1:25,000; reduction divides sides and multiplies the scale, e.g. 1:50,000 reduced by half becomes 1:100,000.",
              "Colours and conversions: blue for water and fishing or mining areas, brown for relief like mountains and valleys, green for vegetation, black for human features like settlements roads railways, red for international boundaries; 10 mm equals 1 cm, 100 cm equals 1 m, 1000 m equals 1 km, 1000 mm equals 1 m, 100,000 cm equals 1 km; further types are political, administrative, population, economic or mineral, historical, plan or sketch, geological and world maps; maps give shortest routes, locations, navigation for pilots and captains, and pathfinding."
            ],
            "definitions": [
              "Map: a representation of any part or the whole earth surface on a flat medium.",
              "Atlas or world map: a collection of different maps or the whole world on one surface.",
              "Cartographers: those who draw or design maps.",
              "Cartography: the act or process of drawing or designing maps.",
              "Title: what describes the map, written at top or bottom.",
              "Scale: the relationship between map distance and actual ground distance.",
              "Key or legend: what enables reading and interpreting conventional signs.",
              "Isopleths: lines on weather maps showing equal distributions of weather elements.",
              "Contour lines: lines joining places of equal height above sea level.",
              "Contour interval: the difference between one contour line and another.",
              "Settlement: a place with one or more buildings where people live."
            ],
            "examples": [
              "Temperature lines are isotherms; pressure lines are isobars.",
              "A 1:75,000 map enlarged 3 times becomes 1:25,000.",
              "A 1:50,000 map reduced by half becomes 1:100,000.",
              "Linear settlement lines roads or rivers; nucleated KMC clusters round factories and amenities; dispersed rural Gambia scatters with few amenities.",
              "Nodal settlement Jarra Soma sits at meeting roads; confluenced settlement at meeting rivers; ring takes a circle; city, town, slum, village, hamlet and home or farmstead rank by size and facilities."
            ],
            "waecFocus": [
              "State features of a good map and types of maps with uses.",
              "Distinguish statement, RF and linear scales with examples.",
              "Match isopleths (isoyeth, isotherm, isobars, isoneph, isohel, isohaline, isotach) to elements.",
              "Solve map enlargement and reduction and state conventional colours and settlement patterns."
            ],
            "memoryTip": "Title Scale Key: words, fractions, lines; blue water, brown hills, green trees, black people, red borders."
          }
        ]
      },
      {
        "id": "ses-g9-t4",
        "number": "Theme 4",
        "title": "Europeans and the Slave Trade",
        "topics": [
          {
            "id": "ses-g9-t4-1",
            "unit": "27.0",
            "page": "—",
            "title": "Coming of the Europeans to Africa",
            "icon": "⛵",
            "explanation": "Europeans started coming to Africa in the late 15th century, first as explorers and traders and later as missionaries and colonial masters. The voyage was pioneered by the Portuguese and followed by the British, French, Spanish, Germans and other European nations.",
            "points": [
              "Location of Africa: bounded by the Atlantic Ocean on the west, the Mediterranean Sea on the north and the Indian Ocean on the east; Europe lies on top of the Mediterranean Sea.",
              "Africa was called the Dark Continent by Europeans during their explorations and surprise discoveries of other qualities in Africa, and the White Man's Grave due to killer tropical diseases like malaria.",
              "First arrival: the first Portuguese man and European to come to the coast of Africa was Alviso da Cadamosto in 1455, but the first trip was not successful so he came back in 1456; Prince Henry the Navigator invented Portuguese exploration, opened a school of navigation to train sailors, and died 13th November 1460.",
              "Portuguese explorers: Cadamosto 1455 and 1456 (first to visit Gambia), Diego Gomez 1458 and 1460, Diego Cam 1484, Vasco da Gama 1497-1498 (Africa and India), Ferdinand Magellan 1519 and 1522, Christopher Columbus 1492, 1493 and 1495 (first to discover America), and Americo Vespucci 1497-1504 (Italian who showed America a separate continent, later named after him).",
              "English explorers: William Hawkins 1530, George Thompson 1618 (ship called the Catherine), Captain Richard Jobson 1620 (ships St John and Sion), Captain Stibbs 1723, and Mungo Park 1795 and 1805, explorer and missionary sent by the Royal Geographic Society looking for a route to Timbuktu through River Niger, where he died in 1806; his obelisk stands at Sami Karantaba Tenda (Pisania) in CRR.",
              "Reasons for coming: to explore Africa, to trade with Africans, to spread Christianity, to explore or exploit natural resources and minerals, to colonize Africa, to scramble for and partition Africa, and for fame and glory.",
              "Old trading posts in The Gambia: Fort James, Kataba, Albreda, Bintang, Sika, Tankular, Kaur, Kosemar, Bateling and Sami Karantaba.",
              "European trade types: legitimate trade (lawful, e.g. goods) and illegitimate trade (unlawful, e.g. human beings as slaves); reasons for such trades were demand for raw materials, search for markets and growth of industries."
            ],
            "definitions": [
              "Explorer.",
              "Navigator.",
              "Missionary and colonial master.",
              "Trading post.",
              "Legitimate vs illegitimate trade."
            ],
            "examples": [
              "Mungo Park's obelisk at Sami Karantaba Tenda.",
              "Fort James and Albreda as old trading posts."
            ],
            "waecFocus": [
              "Name the first European visitor and Prince Henry's role.",
              "List Portuguese and English explorers with dates and ships.",
              "Give reasons for the coming of Europeans.",
              "Name old trading posts and trade types with reasons."
            ],
            "memoryTip": "Portuguese Pioneered, English Explored, Trade Then Takeover."
          },
          {
            "id": "ses-g9-t4-2",
            "unit": "27.1",
            "page": "—",
            "title": "The Trans-Atlantic Slave Trade",
            "icon": "🔗",
            "explanation": "The Trans-Atlantic trade is also called the triangular slave trade because it took three routes in the form of a triangle between Africa and the New World. The Portuguese were the first people to buy slaves from Africa and the trade became more lucrative in the 15th century, followed by Britain, France, Spain, Holland and others.",
            "points": [
              "First route: transportation of European goods to Africa, e.g. alcohol, tobacco, gun powder, knife, gun and mirrors, to be exchanged with slaves.",
              "Second route, also called the Middle Passage: transportation of slaves from Africa to the New World and West Indies by their masters; it is the most dangerous route.",
              "Third route: from America (West Indies) to Europe with raw materials for processing.",
              "Forms of slavery before the Atlantic trade: war slaves, domestic or household slaves, and Trans-Saharan slaves; a slave is a person who has no right and must work for his or her master, while slavery is the buying and selling of human beings for forced labour.",
              "How one becomes a slave: as a criminal, as a prisoner of war (captive), as a debtor, by capture by slave raiders, or by association with witchcraft.",
              "Factors that gave rise to the trade: discovery of a new vast land rich in minerals, start of new plantations in the New World, adaptability of Africans to the harsh climate, industrialization in Europe, the nature of African rulers, and building of ships able to carry large numbers of slaves.",
              "Economic benefits: European merchants benefited a lot, it led to industrial revolution (growth) in Europe, and slave ship builders gained revenue.",
              "Effects on Africans: millions lost their lives, depopulation, most cities, towns and villages destroyed, hatred and mistrust among Africans, decline in agriculture, introduction of European firearms and goods, and introduction of diseases e.g. smallpox."
            ],
            "definitions": [
              "Triangular slave trade.",
              "Middle Passage.",
              "Slave.",
              "Slavery.",
              "War, domestic and Trans-Saharan slaves."
            ],
            "examples": [
              "Mirrors and guns exchanged for slaves on the first route.",
              "Smallpox and firearms reaching Africa."
            ],
            "waecFocus": [
              "Describe the three triangular routes.",
              "Define slave and slavery; list earlier forms.",
              "State how one becomes a slave and the factors behind the trade.",
              "Give benefits to Europe and effects on Africans."
            ],
            "memoryTip": "Goods In, Slaves Across, Raw Materials Back."
          },
          {
            "id": "ses-g9-t4-3",
            "unit": "27.2",
            "page": "—",
            "title": "Abolition and Repatriation",
            "icon": "🕊️",
            "explanation": "Slave trade was first banned by Britain in 1807 due to the industrial revolution and the activities of humanitarians who formed the British Anti-Slavery Society. Freed slaves were later repatriated to Africa, mainly to Freetown, Bathurst and Monrovia.",
            "points": [
              "First ban by Britain in 1807 through humanitarians Granville Sharp, William Wilberforce, Lord Mansfield, Thomas Clarkson, Sir Fowell Buxton and David Livingstone of the British Anti-Slavery Society; later bans were USA 1808, Sweden 1813, Holland 1814, France 1815, Spain 1816 and Portugal last in 1817.",
              "Methods used by humanitarians: rallies and public meetings, public protest and demonstration, and lobbying.",
              "Steps taken by Britain: Lord Mansfield decision in 1772 in favour of slaves, the Act of Parliament in 1807, the reciprocal search treaty, the equipment search treaty, and the British Naval Squadron.",
              "Effects of abolition: it led to the founding of Bathurst, introduction of legitimate trade, paved the way for Christian missionaries, and led to the founding of the Aku tribe; the freedom pole after slavery was at Albreda while the tree was at Georgetown (Janjanbureh).",
              "Repatriation causes and Freetown: slaves were repatriated due to joblessness and poor accommodation in Europe; Granville Sharp bought land in Freetown from King Niabana of Sierra Leone; the first batch of about 411 freed slaves sailed from Britain in 1787 and the second batch came from Nova Scotia in Canada in 1792; the land was named Granville Town (Freetown).",
              "Gambia link: some slaves were forwarded to The Gambia (Bathurst, Georgetown and Kombo Lamin) by Sir Charles McCarthy, then British governor of Sierra Leone and The Gambia jointly from 1830 to 1839; Governor Rendell brought slaves from Freetown to Bathurst.",
              "Liberated slaves were the freed slaves from Britain, while recaptives were those captured as slaves and later rescued from slave ships on the high seas after abolition; the liberated slaves later spoke Pidgin English (Creole).",
              "People and places: Kunta Kinteh, a renowned slave, was born in 1750 at Juffreh; slaves were repatriated to Sierra Leone (Freetown), The Gambia (Bathurst) and Liberia (Monrovia)."
            ],
            "definitions": [
              "Abolition.",
              "Humanitarian.",
              "Liberated slaves vs recaptives.",
              "Repatriation.",
              "Creole (Pidgin English)."
            ],
            "examples": [
              "411 freed slaves sailing to Freetown in 1787.",
              "Freedom pole at Albreda and tree at Georgetown."
            ],
            "waecFocus": [
              "Give the ban years per country and name humanitarians.",
              "List humanitarian methods and British abolition steps.",
              "State effects of abolition and repatriation batches.",
              "Distinguish liberated slaves from recaptives with places."
            ],
            "memoryTip": "Banned 1807, Boats Back 1787 and 1792."
          }
        ]
      },
      {
        "id": "ses-g9-t5",
        "number": "Theme 5",
        "title": "Scramble and Colonial Rule",
        "topics": [
          {
            "id": "ses-g9-t5-1",
            "unit": "28.0",
            "page": "—",
            "title": "Scramble, Partition and the Berlin Conference",
            "icon": "🗺️",
            "explanation": "Scramble for Africa means the rush for markets and colonies by European powers, while partition means the demarcation of African lands among them, for economic, political and social reasons. The Berlin Conference of 1884-1885 laid down the rules for dividing Africa without conflict.",
            "points": [
              "The Berlin (West African or Congo) Conference was held in Germany from 15th November 1884 to 26th February 1885, chaired by German Chancellor Otto von Bismarck; its main aim was to divide Africa among European powers without conflict and lay down rules on trading and acquiring colonies during the new imperialism.",
              "It was attended by 14 European nations, namely Portugal, France, Spain, Britain, Belgium, Germany, Italy, Austria, Hungary, Denmark, Netherlands, Russia, Norway and Turkey, while the United States of America was represented by an ambassador; there was no representative from Africa.",
              "There was no peaceful agreement over Senegambia, which prompted the British to give up Goree Island to the French because the British built a special interest over River Gambia.",
              "Agreements: the Congo and Niger Rivers must be open to all European powers; any nation claiming territory must inform all others to avoid conflict; any owned territory must be effectively occupied; and all nations must trade freely in the Congo Free State.",
              "Reasons for the scramble and partition: industrial revolution in Europe, supply of raw materials, colonization, and stopping the slave trade for legitimate trade.",
              "Colonisation is the direct political control of a nation by a foreign power; colonialism is the total political control of a country's peoples by a foreign country, also the policy or practice of acquiring colonies; by 1914 the whole of Africa was under colonial rule except Ethiopia, under powers like Britain, France, Italy, Portugal, Belgium and Germany.",
              "Reasons for colonialism: to control the supply of raw materials, to introduce their so-called civilization, to have political superiority and prestige over Africa, and to have a direct link with Africa.",
              "Effects: Western education was introduced, roads and railways were built, African cultures declined, natural resources were exploited, Christianity was introduced, and colonial masters' languages were introduced; note that colonialism is both political and economic domination while imperialism is limited to only economic domination."
            ],
            "definitions": [
              "Scramble for Africa.",
              "Partition of Africa.",
              "Berlin Conference.",
              "Colonisation.",
              "Colonialism vs imperialism."
            ],
            "examples": [
              "Goree Island ceded to France over Senegambia.",
              "Ethiopia uncolonized by 1914."
            ],
            "waecFocus": [
              "Define scramble, partition, colonisation and colonialism.",
              "Give Berlin dates, chairman, aim and attendees.",
              "State the four agreements and Goree outcome.",
              "Give reasons for scramble and effects of colonialism."
            ],
            "memoryTip": "Rush (Scramble), Share (Partition), Rules (Berlin)."
          },
          {
            "id": "ses-g9-t5-2",
            "unit": "28.1",
            "page": "—",
            "title": "Bathurst and Legitimate Trade",
            "icon": "🏙️",
            "explanation": "Bathurst was founded in 1816 by Captain Alexander Grant as a British settlement to stop the slave trade, resettle liberated slaves and promote legitimate trade. Its strategic position at the mouth of River Gambia made it a major trading centre.",
            "points": [
              "Founding: Bathurst was founded in 1816 by Captain Alexander Grant with 72 soldiers, bought from the King of Kombo Tumani Bojang for 25 pounds sterling, 6 shillings and 8 pence (he even attempted to sell the whole Gambia for 16 pounds); local people called the island Banjulo and it was named after Lord Earl Bathurst; before founding, the island was a hideout for runaway slaves and criminals.",
              "Streets and wards of Banjul: Portuguese town (for mulattoes, traders and administrators), Jollof town (for Wolofs), Mocan town later called Half Die (for migrant workers), Soldier town (for retired soldiers), Jola town also called Melville town, Melville town or new town (for Akus), plus Gloucester street, Leman street, Buckle street and Hardington street.",
              "Reasons for founding: to stop the slave trade, resettlement of liberated slaves, settlement for British sailors and merchants, to promote legitimate trade, and its strategic location to monitor ships from the Atlantic Ocean entering The Gambia.",
              "British interest in Banjul: to serve as a settlement for British sailors, traders and repatriated slaves; it was a major trading centre; and it lay at the mouth of River Gambia, closer to the Atlantic Ocean.",
              "Exports during legitimate trade (Africa to Europe): palm kernel, diamond, palm oil, rubber, timber, cocoa, coffee, gold (most valuable and important), groundnut and bauxite.",
              "Imports during legitimate trade (Europe to Africa): cotton cloth (most valuable), canned foods, tobacco, cooking materials, farming implements, kerosene, building materials and wines.",
              "Firms were European business enterprises and companies in The Gambia during legitimate trade, e.g. CFAO, NTC, VESIAC, Maurel and Prom, Barter and others."
            ],
            "definitions": [
              "Bathurst (Banjulo).",
              "Ward.",
              "Legitimate trade.",
              "Export vs import.",
              "Firm."
            ],
            "examples": [
              "Gold as most valuable export; cotton cloth as most valuable import.",
              "Half Die ward for migrant workers."
            ],
            "waecFocus": [
              "Give founder, year, soldiers, seller and price of Bathurst.",
              "Match wards to their settlers.",
              "State reasons for founding and British interest.",
              "List exports, imports and firms."
            ],
            "memoryTip": "Grant 1816, 72 Soldiers, Stop Slaves, Start Trade."
          },
          {
            "id": "ses-g9-t5-3",
            "unit": "28.2",
            "page": "—",
            "title": "Colonial Administration in West Africa",
            "icon": "🏛️",
            "explanation": "The British ruled mainly through indirect rule using local chiefs under British supervisors, while the French used assimilation, the Portuguese used association and the Germans used paternalism. Africans resisted in many places, and colonial traces remain in The Gambia today.",
            "points": [
              "British systems: direct rule managed coastal towns (Bathurst and McCarthy Island) as crown colonies in 1821, governed directly by the British governor; indirect rule, the major British policy, used local rulers like kings, chiefs and alkalos managing affairs with traditional laws under British supervisors; it was invented by Lord Frederick Lugard, first adapted in the protectorate in 1888, started in Buganda and Northern Nigeria in 1906, and later introduced in The Gambia in 1893, Ghana and Sierra Leone; the British divided The Gambia into the crown colony and the protectorate.",
              "Reasons for indirect rule: the British did not want to interfere with traditional cultures and administration, lack of adequate British personnel, cost of direct rule, language barrier, poor climate, and poor transport and communication.",
              "Features, functions and hierarchy: features were use of traditional rulers, use of both traditional and British laws, the governor assisted by a travelling commissioner, and the governor could appoint and dismiss chiefs; governors appointed and dismissed chiefs, presided over state ceremonies and the legislative and executive councils, and maintained law and order in colony and protectorate; hierarchy ran Queen (Monarch), Secretary of State for Colonies, Governor, Travelling Commissioner, Local chiefs; Lugard's 1922 dual mandate meant exploiting Africa's resources while protecting local rights.",
              "Governors: Sir Charles McCarthy (jointly governed Sierra Leone and The Gambia), Sir Robert Baxter Llewelyn (founding father of indirect rule in The Gambia), Sir John Paul (last British governor at independence), Sir Cecil Hamilton Armitage (Armitage School named after him), Sir G. C. Denton (Denton Bridge named after him) and A. F. Richards; Sir Farimang Mamadi Singhateh was the only and last black governor (1966-1970); Queen Elizabeth II ascended in 1952 and visited in December 1961 under Governor Sir Edward Windley.",
              "Why Europeans won and Africans resisted: Europeans used advanced weapons like guns, had professionally trained soldiers, some Africans saw themselves as inferior, and some masters were helped by other Africans; rulers resisted to maintain independence, protect rich culture, maintain traditional authorities and protect sovereignty; resisters included Samori Toure (Mandingo empire, Guinea Conakry), Alhagie Omar Taal (Futa Toro), Foday Kabaa Dumbuya, Foday Ebrima Kombo Sillah, Bai Bureh (Temne, Sierra Leone), Musa Molloh (Fulladu), Mansa Burugai Sonko (Barra), Biram Ceesay, Edward Francis Small, Dawda Kairaba Jawara, Pierre Sarr Njie and Maba Jahou Bah; Gambian resistance included the Barra (Anglo-Niumi) war 1831, the Kiang Sankandi incident 1900 (Sitwell and Ozen killed), jihadist activities and traditional rulers like King Wapai of Foni.",
              "Failure, problems and remains: indirect rule failed from lack of personnel, high cost and tropical diseases (white man's grave: malaria, diarrhoea, yellow fever); Europeans faced opposing kings, unfavourable climate, expensive administration, deaths from malaria and yellow fever, language barrier and no support from nationalist elites; Europeans colonized easily because of high illiteracy, many tribes and clans, and information from traders, missionaries and explorers; remains include State House and Quadrangle, Fort Bullen (Barra, NBR), Fort Louvel, churches and mission schools, Georgetown now Janjanbureh, streets named after masters, Bathurst as a master's name, Royal Victoria now Edward Francis Small Teaching Hospital, and Mungo Park's Obelisk (CRR).",
              "French, Portuguese and German systems: France used assimilation to change local culture, language and laws exactly to French ways (colonies ruled by French laws, traditional rulers unrecognized, French culture deemed superior, colonists direct French citizens), with association and Loi Cadre letting some locals join law-making e.g. Blaise Diagne, first Senegalese to serve; Dakar was the central seat and the four communes were Dakar, Rufisque, Goree and St Louis; after assimilation failed, association restored traditional authority; Portugal used association or assimilado treating colonies as provinces of Portugal (respecting cultures, ending first and second class citizenship, reviving institutions); Germany used paternalism with no regard for cultures; summary: Britain indirect rule, France assimilation, Portugal association, Germany paternalism; language types are Anglophone English (Gambia, Nigeria), Francophone French (Senegal, Mali, Niger), Lusophone Portuguese (Guinea-Bissau) and Assimile Spanish (Equatorial Guinea); all British colonies in West Africa are British West Africa, all French ones French West Africa, and all British colonies formed the British Empire, now Commonwealth countries headed by England's monarch; neo-colonialism is modern infiltration by western powers controlling former colonies through ideas; sub-Saharan Africa means countries below the Sahara e.g. Gambia, Senegal.",
              "Independent states and masters: Benin (Porto Novo, 1 Aug 1960, France), Burkina Faso (Ouagadougou, 5 Aug 1960, France), Cape Verde (Praia, 5 Jul 1975, Portugal), The Gambia (Banjul, 18 Feb 1965, Britain), Ghana (Accra, 6 Mar 1957, Britain), Guinea Conakry (Conakry, 2 Oct 1958, France), Guinea Bissau (Bissau, 24 Sep 1974, Portugal), Ivory Coast (Abidjan, 7 Aug 1960, France), Liberia (Monrovia, 26 Jul 1847, USA through repatriation), Mali (Bamako, 20 Jun 1960, France), Mauritania (Nouakchott, 28 Nov 1960, France), Niger (Niamey, 3 Aug 1960, France), Nigeria (Abuja, 1 Oct 1960, Britain), Senegal (Dakar, 4 Apr 1960, France), Togo (Lome, 27 Apr 1960, Germany), Sierra Leone (Freetown, 27 Apr 1961, Britain); Togo, Cameroon, Tanganyika (Tanzania) and Namibia were first German colonies but after World War I the League of Nations and UNO mandated Britain and France to run them as trust territories; Ethiopia was not colonized."
            ],
            "definitions": [
              "Direct rule.",
              "Indirect rule.",
              "Assimilation vs association.",
              "Paternalism.",
              "Dual mandate, trust territory, neo-colonialism, sub-Saharan Africa."
            ],
            "examples": [
              "Llewelyn as founding father of indirect rule in The Gambia.",
              "Ghana 1957 (Britain) vs Senegal 1960 (France) vs Guinea Bissau 1974 (Portugal)."
            ],
            "waecFocus": [
              "Contrast direct and indirect rule with dates and inventor.",
              "Give reasons, features, governor functions and hierarchy.",
              "Name governors and resisters with events.",
              "Match systems and languages to powers; give independence dates, capitals and masters."
            ],
            "memoryTip": "British Chiefs, French Citizens, Portuguese Provinces, German Paternalism."
          }
        ]
      },
      {
        "id": "ses-g9-t6",
        "number": "Theme 6",
        "title": "Government and Democracy",
        "topics": [
          {
            "id": "ses-g9-t6-1",
            "unit": "36.0",
            "page": "—",
            "title": "Elements of Government",
            "icon": "🏛️",
            "explanation": "Government is the institution or body of people that conducts and manages the day to day affairs of a country. It is also a system of social control in which the right to make and enforce laws is given to a particular group of people by the electorates.",
            "points": [
              "Totalitarianism is government controlled by a single individual or party with absolute powers, including fascism, the absolute one-party dictatorship introduced in Italy from 1922 to 1943 by Benito Mussolini.",
              "Monarchy is rule by a king, queen or emperor through hereditary, while a republic is a system where the head of state is elected by the people, for example The Gambia.",
              "In the presidential system the head of state and government are the same, while in the cabinet system the head of state and government are separate, for example the UK.",
              "In the unitary system all powers belong to the central government or single authority, in the federal system power is shared between central and state governments, and in the confederal system two states come together to form a political unit, for example the Senegambia confederation.",
              "Oligarchy is a state controlled by a few individuals who defend their own interest instead of the state: aristocracy is rule by nobles, plutocracy rule by rich people, autocracy rule by one man, military rule by junta members, and theocracy rule by religious leaders.",
              "Socialism puts the economy, production and distribution in the hands of the state, capitalism puts them under private individuals, and communalism is collective ownership of property with equal distribution.",
              "Military rule is a state ruled by soldiers or a military junta through a coup or force.",
              "Functions of government: make, implement, interpret and preserve laws, provide basic necessities, employment and welfare, uphold and defend the constitution, maintain peace and tranquility, and promote the sovereignty of the country."
            ],
            "definitions": [
              "Government: an institution or body of people responsible for conducting and managing the day to day affairs of a country or state.",
              "Totalitarianism: government controlled by a single individual or party with absolute powers.",
              "Monarchy: rule by a king, queen or emperor through hereditary.",
              "Republic: a system where the head of state is elected by the people.",
              "Oligarchy: a state controlled by a few individuals who defend their interest instead of the state.",
              "Theocracy: a state or government ruled by religious leaders.",
              "Federal system: a system where power is shared between central government and state governments."
            ],
            "examples": [
              "The Gambia is a republic because its head of state is elected by the people.",
              "The UK uses the cabinet system where head of state and government are separate.",
              "The Senegambia confederation is an example of a confederal system.",
              "Italy under Benito Mussolini from 1922 to 1943 is an example of fascism."
            ],
            "waecFocus": [
              "Define government and state any four types of government.",
              "List the five types of oligarchy with their meanings.",
              "State five functions or importance of government as an institution.",
              "Distinguish between presidential and cabinet systems, and between unitary and federal systems."
            ],
            "memoryTip": "Rule by one, few or all: Monarchy inherits, Republic elects, Oligarchy keeps power for a few."
          },
          {
            "id": "ses-g9-t6-2",
            "unit": "37.0",
            "page": "—",
            "title": "Democracy and Elections in The Gambia",
            "icon": "🗳️",
            "explanation": "Democracy comes from Demos meaning people and Kratos meaning rule, and Abraham Lincoln defined it as government of the people, by the people and for the people. In The Gambia the Independent Electoral Commission headed by a Chairperson ensures free and fair representation of the people into office through elections.",
            "points": [
              "Principles of democracy: free and fair election, rule of law, equality before the law, independence of the judiciary, freedom of expression and press, existence of opposition parties, universal adult suffrage and fundamental human rights.",
              "The electoral system ensures free and fair representation of people into office through elections, and an election is the process through which electorates change their government or representatives directly or indirectly through voting or the ballot box.",
              "Direct election means people vote their choice directly, while indirect election is voting through an electoral college.",
              "The three main periodic elections in The Gambia are the presidential election held every 5 years, the parliamentary or National Assembly election, and the Local Government or Area Council elections in part one and two, plus by-elections held to refill a vacant position after disqualification, resignation or death.",
              "Types of voting: secret voting done at a polling station in secret, open voting done publicly mostly with the ballot paper method, and open secret voting in which voters are counted before voting.",
              "What takes place during an election: establishment of the IEC, registration of voters, nomination of candidates, sensitization by the IEC, political campaigns and rallies, sealing of ballot boxes, the voting exercise, and announcement of results by the IEC Chairman.",
              "Elections choose representatives, encourage democracy, make rulers accountable for their policies and educate voters, and the IEC runs them by registering voters and parties, conducting elections, counting votes, educating voters and announcing results.",
              "Franchise is the legal right to vote and be voted for: universal franchise or universal adult suffrage opens voting to adults as in The Gambia, while restricted franchise limits it by qualification and experience; those under 18, the insane, non-registered adults, criminals and non-citizens are disqualified, a referendum is a public YES or NO vote, a constituency is an electoral district such as Brikama North, and public opinion is measured through elections, referendums, mass media surveys and opinion polls."
            ],
            "definitions": [
              "Democracy: government of the people, by the people and for the people, from Demos meaning people and Kratos meaning rule.",
              "Electoral system: a way of ensuring free and fair representation of people into office through elections.",
              "Election: the process through which electorates change their government or representatives directly or indirectly through voting or the ballot box.",
              "By-election: an election held to refill a vacant position after disqualification, resignation or death.",
              "Franchise: the legal right to vote and to be voted for in an election.",
              "Referendum: a public vote based on YES or NO.",
              "Constituency: an electoral district, for example Brikama North Constituency.",
              "Public opinion: the general mind set of people in a country about affairs affecting their livelihood."
            ],
            "examples": [
              "The presidential election held every 5 years is a periodic election in The Gambia.",
              "A by-election is held when a seat becomes vacant through death, resignation or disqualification.",
              "Brikama North Constituency is an example of a constituency."
            ],
            "waecFocus": [
              "State six principles or features of democracy.",
              "Name the three main periodic elections in The Gambia and explain by-election.",
              "List the steps that take place during an election.",
              "State the functions of the IEC and the disqualification criteria in an election."
            ],
            "memoryTip": "Lincoln 3 Ps: of the people, by the people, for the people; the IEC runs it all."
          },
          {
            "id": "ses-g9-t6-3",
            "unit": "38.0",
            "page": "—",
            "title": "The Constitution",
            "icon": "📜",
            "explanation": "A constitution is a set of rules or laws that governs how a government can exercise public powers. It is a system of laws and basic principles by which a state or an organisation is governed.",
            "points": [
              "Written constitution is written in one booklet or document, for example The Gambia and Senegal, while unwritten constitution is not written in one document, for example Britain.",
              "Flexible constitution can easily be changed or amended by parliament, while rigid constitution cannot easily be changed or amended unless there is a referendum.",
              "Federal constitution shares powers between central and state governments, for example Nigeria and the USA, confederal constitution is an alliance of states with one delegated to lead, for example the Senegambia confederation, and unitary constitution keeps all powers with the central government.",
              "A constitution states the structure of government, defines the rights, duties and obligations of citizens, and states the tenure of office of the government or president.",
              "It reveals the type of party system and defines the powers and limits of each organ of government.",
              "It maintains law and orderliness, prevents dictatorship, and serves effective governance and reference in a law court."
            ],
            "definitions": [
              "Constitution: a set of rules that governs how a government can exercise public powers.",
              "Written constitution: a constitution written in one booklet or document.",
              "Unwritten constitution: a constitution not written in one document, for example Britain.",
              "Flexible constitution: one that can easily be changed or amended by parliament.",
              "Rigid constitution: one that cannot easily be changed except through a referendum.",
              "Federal constitution: one in which powers are shared between central and state governments."
            ],
            "examples": [
              "The Gambia has a written constitution.",
              "Britain has an unwritten constitution.",
              "Nigeria and the USA have federal constitutions."
            ],
            "waecFocus": [
              "Define constitution and list its types with examples.",
              "Distinguish between flexible and rigid constitutions.",
              "State five features or importance of a constitution."
            ],
            "memoryTip": "WUFR FCU: Written, Unwritten, Flexible, Rigid, Federal, Confederal, Unitary."
          }
        ]
      },
      {
        "id": "ses-g9-t7",
        "number": "Theme 7",
        "title": "Citizenship, Rights and Organs",
        "topics": [
          {
            "id": "ses-g9-t7-1",
            "unit": "39.0",
            "page": "—",
            "title": "Citizenship and Human Rights",
            "icon": "🤝",
            "explanation": "A citizen is a person with legal, economic and political rights in a country who must defend it and obey its laws, while an alien is a foreigner residing in a country. Fundamental human rights are the basic international rights adopted by all governments as prescribed by the United Nations in 1948.",
            "points": [
              "Ways of acquiring citizenship: birth or place of birth, descent or heritage through the parents bloodline, naturalization after long stay as an alien (15 years in The Gambia), registration or marriage to a Gambian spouse (after 7 years of marriage), honorary award by the president, and conquest through invasion.",
              "Duties of a Gambian citizen: pay tax regularly, obey the constitution, protect public assets such as schools, hospitals and roads, vote during elections, participate in nation building, be loyal to the state and the president of the day, be honest, and respect national symbols like the flag, coat of arms and anthem.",
              "Conditions for naturalization and registration: stay for the specified period, be of good character free from criminal conviction, be economically independent and support dependents, participate in nation building, be above 18 years, be of sound mind, be law abiding, and continue to domicile in The Gambia with an oath of allegiance.",
              "Basic human rights: right to life (the most important), peaceful assembly, religion and association, movement, expression and press, education, vote and be voted for, fair and equal trial, privacy and personal liberty, property, freedom from forced labour, and right to marry.",
              "Organisations supporting democracy and human rights: NCCE, IEC, Child Protection Alliance 2001, African Commission for Human and Peoples Rights, Office of the Ombudsman for civil servants, African Center for Democracy and Human Rights founded in The Gambia in 1989, Amnesty International and human rights activist movements.",
              "Citizen versus alien: citizens cannot be deported but aliens can, citizens have political rights but aliens cannot, citizens need no visa to stay but aliens need one, citizens owe allegiance to the state, citizens can join security forces, citizens enjoy full fundamental rights while aliens have restricted rights, and citizens are expected to be patriotic.",
              "Rights are protected by educating citizens, using the constitution, applying the rule of law, keeping an independent judiciary, allowing opposition parties, keeping a free and responsible press, and separating powers."
            ],
            "definitions": [
              "Citizen: a person who has the legal, economic and political rights in a country and must be ready to defend it internally and externally.",
              "Alien: a foreigner residing in a country.",
              "Naturalization: acquiring citizenship after long stay in a country by an alien, after 15 years in The Gambia.",
              "Registration: acquiring citizenship through marriage to a Gambian spouse, after 7 years of marriage.",
              "Fundamental human rights: the basic international human rights adopted by governments as prescribed by the United Nations."
            ],
            "examples": [
              "An alien who lives 15 years in The Gambia may apply for citizenship by naturalization.",
              "A foreign spouse may apply for citizenship by registration after 7 years of marriage.",
              "The right to life is the most important human right."
            ],
            "waecFocus": [
              "List six ways of acquiring citizenship.",
              "State five duties of a Gambian citizen.",
              "List the conditions for naturalization and registration.",
              "State five differences between a citizen and an alien and five ways rights are protected."
            ],
            "memoryTip": "BORN Here: Birth, Origin of parents, Residence 15, Natural ties by marriage 7, Honour by president."
          },
          {
            "id": "ses-g9-t7-2",
            "unit": "40.0",
            "page": "—",
            "title": "Organs of Government",
            "icon": "⚖️",
            "explanation": "Every government has three arms that carry out its functions, also called government machinery: the legislature, the executive and the judiciary.",
            "points": [
              "The legislature makes and enacts laws and comprises the Speaker, the Clerk and members or NAMs: unicameral means one house as in The Gambia and Ghana, while bicameral means two houses as in Britain and the USA.",
              "Legislature names: National Assembly in The Gambia, State Assembly in Nigeria, Parliament in Britain, Congress or Senate in the USA; the Speaker heads the National Assembly and the Clerk is its internal administrative head.",
              "National Assembly functions: make laws, represent the people, amend the constitution, educate the people, approve the government budget, check the executives, approve treaties and perform oversight on other departments; the Speaker guides debates, treats NAMs equally and declares vacant seats, while the Clerk keeps files, takes minutes and makes announcements.",
              "NAM qualifications: Gambian citizen, 21 years old, fluent in English, and resident in the constituency for 1 year before nomination; the Assembly meets once every 3 months with emergency meetings when necessary.",
              "The executive formulates and implements policies and laws and comprises the president, vice president, ministers, permanent secretaries, commissioners, governors and civil servants, with the president as head; the presidential system has the president as head of state and government as in The Gambia, while the cabinet system separates them as in Britain.",
              "President qualifications: citizen by birth or descent, above 30 but below 65 years, take the oath of office, complete Senior Secondary School, and reside in The Gambia for 5 continuous years before election; foreigners, retired or terminated officers, and convicted persons cannot be president.",
              "President functions: appoint and dismiss ministers, declare state of emergency such as curfew, serve as commander-in-chief of the armed forces, represent the country abroad, and pardon convicted criminals; citizens control the executive through judicial review, public opinion, independent press and opposition parties.",
              "The judiciary interprets and administers laws and comprises judges, magistrates, lawyers and legal practitioners headed by the Chief Justice, while the Attorney General or Minister of Justice is the principal legal adviser of the government; courts from the highest are Supreme Court, Court of Appeal, Special Criminal Court, High Court, Magistrate Court, Customary or District Tribunal Court, and Qadi or Muslim Court."
            ],
            "definitions": [
              "Legislature: the organ of government responsible for making and enacting laws.",
              "Executive: the body responsible for formulating and implementing government policies and laws.",
              "Judiciary: the organ responsible for interpreting and administering laws.",
              "Separation of powers: division of government responsibilities into different arms.",
              "Checks and balances: ensuring that no one arm has total control over government decisions.",
              "Independence of the judiciary: the judiciary performing its duties without fear, favour or threat.",
              "Presidential system: a system where the president is head of state and government."
            ],
            "examples": [
              "The Gambia and Ghana practise unicameral legislature while Britain and the USA practise bicameral.",
              "Sir John Mahoney was the first Speaker of the National Assembly in 1954.",
              "The Minister is the political head of a ministry while the Permanent Secretary is the internal administrative head.",
              "A magistrate hears minor cases like theft while a judge hears major cases like murder and alone can pass death or life sentences."
            ],
            "waecFocus": [
              "Name the three organs of government and their heads in The Gambia.",
              "List the courts in The Gambia from the highest.",
              "State the qualifications and functions of the president.",
              "Distinguish between magistrates and judges."
            ],
            "memoryTip": "LEM: Legislature makes, Executive implements, Judiciary interprets."
          },
          {
            "id": "ses-g9-t7-3",
            "unit": "40.1",
            "page": "—",
            "title": "The Civil Service",
            "icon": "💼",
            "explanation": "The civil service is the administrative institution of the executive, headed by the Secretary General at the Office of the President, and those who work in it are called civil or public servants.",
            "points": [
              "The civil service is the administrative institution of the executive headed by the Secretary General in the Office of the President, and its workers are called civil or public servants.",
              "The executive arm includes the president, vice president, ministers, permanent secretaries, commissioners, governors and other civil servants.",
              "Qualities of civil servants: neutrality, merit, impartiality, and keeping off partisan politics.",
              "The Public Service Commission handles recruitment, promotion, dismissal and discipline of all civil servants and is headed by a Chairperson.",
              "The Minister is the political head of a ministry while the Permanent Secretary is the internal administrative head of the ministry.",
              "Citizens control the executive through judicial review, public opinion, an independent press and opposition parties."
            ],
            "definitions": [
              "Civil service: the administrative institution of the executive.",
              "Civil servant: a person working in the civil or public service.",
              "Public Service Commission: the body responsible for recruitment, promotion, dismissal and discipline of civil servants.",
              "Permanent Secretary: the internal administrative head of a ministry."
            ],
            "examples": [
              "The Secretary General heads the civil service from the Office of the President.",
              "A Chairperson heads the Public Service Commission.",
              "The Permanent Secretary administers a ministry while the Minister gives it political direction."
            ],
            "waecFocus": [
              "Define civil service and state the qualities of civil servants.",
              "State the functions of the Public Service Commission.",
              "Distinguish between a Minister and a Permanent Secretary."
            ],
            "memoryTip": "NIMP: Neutral, Impartial, Merit, no Partisan politics."
          }
        ]
      },
      {
        "id": "ses-g9-t8",
        "number": "Theme 8",
        "title": "Communication, Transport and Climate Data",
        "topics": [
          {
            "id": "ses-g9-t8-1",
            "unit": "30.0",
            "page": "—",
            "title": "Communication in The Gambia",
            "icon": "📡",
            "explanation": "Communication is the way people send news, messages and ideas from one person or place to another. It has two general forms in The Gambia: traditional and modern.",
            "points": [
              "Communication means sending news, messages and ideas from one person or place to another.",
              "Two general forms exist: traditional communication and modern communication.",
              "Traditional methods used drums, flutes, smoke from fire, horns, signals and gestures.",
              "Modern communication is divided into three: telecommunication, mass media and transportation.",
              "Telecommunication uses cables, radio signals and wifi, for example telephone, fax, telegram, telex and modem.",
              "GSM providers are Gamcell, Africell, Comium and Q-Cell; GAMTEL is the major state-owned telecommunication company.",
              "Internet providers include Gamtel, Quantum Net, Net Page, Unique Solutions, Lanix Limited, Dk Telecom Ltd and STAR-NET.",
              "Mass media sends information to many listeners, viewers or readers at once: radios, newspapers, television, magazines, journals and internet apps like WhatsApp and E-mail."
            ],
            "definitions": [
              "Communication: the way people send news, messages and ideas from one person or place to another.",
              "Traditional communication: earliest forms using drums, flutes, smoke, horns, signals and gestures.",
              "Telecommunication: communication done with cables, radio signals and wifi.",
              "Mass media: sending information to a large number of listeners, viewers or readers at the same time.",
              "Print media: newspapers, journals and magazines.",
              "Electronic media: radio (audio) and television (audio-visual)."
            ],
            "examples": [
              "Drums, horns and smoke signals are traditional communication.",
              "Facsimile (fax) sends documents by telephone.",
              "GRTS, Star FM, Capital FM, Paradise FM and community stations like Soma, Basse and Kerewan are Gambian radio stations.",
              "GRTS is the state-owned TV station while QTV was the first private TV, plus Paradise TV, EyeAfrica TV and Star TV.",
              "The Daily Observer (state-owned), The Point, Foroyaa, The Standard, The Voice and The Republic are Gambian newspapers."
            ],
            "waecFocus": [
              "Define communication and name its two general forms.",
              "List traditional methods and the three divisions of modern communication.",
              "Name GSM and internet service providers in The Gambia.",
              "Classify print and electronic mass media with examples.",
              "Name radio, TV and newspaper houses in The Gambia."
            ],
            "memoryTip": "Old: drums and smoke. New: telecom, media, transport. GAMTEL leads, GRTS airs."
          },
          {
            "id": "ses-g9-t8-2",
            "unit": "30.1",
            "page": "—",
            "title": "Transportation in The Gambia",
            "icon": "🚌",
            "explanation": "Transportation is the movement of people, goods and services from one place to another by road, water, air or railway. Road is the most common and important form in The Gambia.",
            "points": [
              "Transportation moves people, goods and services by road, water, air or railway.",
              "Road is the most common and important form; the South Bank Road and North Bank Road are the two most important roads.",
              "First class roads are tarmac, second class roads are laterite and stone, third class roads are feeder roads.",
              "Road merits: flexible, affordable, good for domestic trade, fast contact, encourages tourism and links many places.",
              "Road disadvantages: bad for heavy bulky goods, potholes, poor road network, traffic jams and frequent accidents.",
              "Water transport uses ferries, boats, canoes, ships and submarines on the River Gambia; it is the slowest but safest and best for bulky goods.",
              "River transport declined because of more road construction, lack of passenger boats and decline in groundnut production.",
              "Air transport with airplanes and helicopters is the newest and fastest form for light goods; Banjul International Airport is at Yundum, 17 km from Banjul."
            ],
            "definitions": [
              "Transportation: the movement of people, goods and services from one place to another.",
              "Feeder roads: third class roads linking local areas to main roads.",
              "Water transport: movement on waterways with ferries, boats, canoes, ships and submarines.",
              "Air transport: movement with airplanes and helicopters, the newest form of transport.",
              "Transport providers: GPA, GTSC, GIA and GCAA support transport services in The Gambia."
            ],
            "examples": [
              "Serrekunda to Banjul is a first class tarmac road; Brikama to Kassa Kunda is second class laterite road.",
              "Ferries like Kunta Kinteh, Lady Wright, Lady Denham, Fulladu and Barra cross the River Gambia.",
              "Cars, buses, bicycles, motorcycles and donkey or horse carts are land modes; animals and human portage were the oldest.",
              "Aeroplanes, helicopters, rockets and parachutes are air modes; railway with trains is not in The Gambia."
            ],
            "waecFocus": [
              "Define transportation and name its types.",
              "Classify Gambian roads with one example each.",
              "Compare merits and disadvantages of road, water and air transport.",
              "Explain three causes of river transport decline.",
              "Locate Banjul International Airport and name transport service providers."
            ],
            "memoryTip": "Road common, water bulky-safe, air fastest-newest. Yundum airport, South and North Bank roads."
          },
          {
            "id": "ses-g9-t8-3",
            "unit": "30.2",
            "page": "—",
            "title": "Climate Data Interpretation",
            "icon": "🌦️",
            "explanation": "Climate data tables record monthly temperature and rainfall for a station. Station A shows a total rainfall of 373.9 mm, an August peak and a yearly temperature range of 32 degrees F.",
            "points": [
              "Station A records temperature in degrees F and rainfall in mm for the twelve months J to D.",
              "Total annual rainfall is 373.9 mm, got by adding all twelve monthly values.",
              "Highest rainfall falls in August with 110.1 mm; lowest is December with 3.0 mm.",
              "Hottest reading is July at 72 degrees F and the coldest is December at 40 degrees F.",
              "Yearly temperature range is 32 degrees F, got by subtracting 40 from 72.",
              "The worked answer names July and November as the hottest months of the station.",
              "Rainfall rises from January to a June to August wet peak, then falls toward December.",
              "Table skills tested: totals, wettest and driest months, hottest months and range."
            ],
            "definitions": [
              "Climate data: recorded monthly temperature and rainfall values for a station.",
              "Annual rainfall: the sum of the twelve monthly rainfall figures.",
              "Temperature range: highest temperature minus lowest temperature.",
              "Hottest month: the month with the highest temperature reading.",
              "Wettest month: the month with the highest rainfall figure."
            ],
            "examples": [
              "Adding the twelve Station A months gives 373.9 mm total rainfall.",
              "72 minus 40 gives the 32 degrees F yearly range.",
              "August 110.1 mm is the wettest month while December 3.0 mm is the driest.",
              "68 degrees F converts to 20 degrees C in GABECE conversions."
            ],
            "waecFocus": [
              "Compute total annual rainfall from a table.",
              "Identify wettest, driest, hottest and coldest months.",
              "Calculate temperature range with working.",
              "Convert 68 degrees F to 20 degrees C."
            ],
            "memoryTip": "Total 373.9, August wettest, range 72 minus 40 equals 32."
          }
        ]
      },
      {
        "id": "ses-g9-t9",
        "number": "Theme 9",
        "title": "Services, Groups and Local Government",
        "topics": [
          {
            "id": "ses-g9-t9-1",
            "unit": "31.0",
            "page": "—",
            "title": "Parastatals in The Gambia",
            "icon": "🏢",
            "explanation": "Parastatals are public institutions set up by the central government through an act of parliament to provide essential services for the people on low payment. Each parastatal is headed by a Managing Director assisted by a board of directors.",
            "points": [
              "Parastatals are set up by the central government through an act of parliament to provide essential services on low payment.",
              "Each parastatal is headed by a Managing Director assisted by a board of directors, and parastatals are different from central government.",
              "Reasons for establishing parastatals: provide essential services, prevent economic exploitation by foreigners, promote economic growth, create youth employment and avoid private monopoly.",
              "Executive control: the board is appointed by the Minister of Works, commissions of inquiry can probe parastatals, programmes are approved by the executive, and accounts are scrutinised by the PAC and PEC of the National Assembly.",
              "GPA (1972) handles river and ocean transport, ports services and international trade; GCAA handles air transport, licences, landing rights and airport cargo services.",
              "SSHFC (1981) collects pensions and provides retirement, provident, housing and injury compensation funds; NAWEC supplies clean water and electricity and supports industries.",
              "GTA promotes tourism and cultural exchange; GAMTEL (1984) gives telephone and internet services; GAMCELL gives GSM mobile services; GRTS (1962) gives radio and TV with entertainment, education and advertisement; GAMPOST gives postal, money transfer and micro-finance services; GIA is the national air carrier.",
              "PURA regulates charges and protects consumers; GBoS manages national statistics; GPPA ensures transparent procurement; GRA collects revenue; GCC ensures fair market competition; GCCI (1967) handles trade fairs; GNPC gives fuel and gas; GGC buys and sells groundnuts; GTSC (2013) runs bus transport. Problems include bureaucracy, nepotism, political interference, corruption, poor management, unskilled staff and carefree attitudes."
            ],
            "definitions": [
              "Parastatal: public institution set up by government through an act of parliament to provide essential services.",
              "Managing Director: head of a parastatal, assisted by a board of directors.",
              "Bureaucracy: administration by non-elective officials, a problem of parastatals.",
              "Nepotism: selecting close relatives and friends for jobs.",
              "Monopoly: control of a service by one provider; parastatals prevent private monopoly."
            ],
            "examples": [
              "GPA ferries and ships deliver goods through the ports.",
              "NAWEC water and electricity keep homes and industries running.",
              "GRTS educates, informs and entertains the nation on radio and TV."
            ],
            "waecFocus": [
              "Define parastatal and name its head.",
              "State five reasons for establishing parastatals.",
              "Explain executive control over parastatals.",
              "Match parastatals such as GPA, NAWEC, SSHFC, PURA and GRA to their functions.",
              "List problems of parastatals."
            ],
            "memoryTip": "MD leads, Act creates: Services, Foreigners out, Growth, Jobs, No monopoly."
          },
          {
            "id": "ses-g9-t9-2",
            "unit": "32.0",
            "page": "—",
            "title": "Pressure Groups, Unions and NGOs",
            "icon": "✊",
            "explanation": "A trade union is a pressure group and voluntary association of workers in the same trade that improves members benefits and welfare through negotiation and influences government policies. NGOs are non-profit bodies working for development under the coordinating body TANGO.",
            "points": [
              "A trade union is a voluntary association of workers in the same trade that seeks members interests and influences government policies.",
              "Bathurst Trade Union (1929) was founded by Edward Francis Small, father of Gambian politics; GTU by Rev. John Colley Faye; Gambia Workers Union (1957) by Momodou Ebrima Jallow.",
              "Other unions: Bathurst Rate Payers Association (R. Shokele), Gambia Bar Association (Salieu Taal), FLAG, GPU (1978), medical and dental association, credit union, farmers, workers confederation, GAMSU students and dock workers unions.",
              "Methods used: strikes, demonstrations, boycotts, negotiations and dialogue, lobbying, propaganda and campaigns, public meetings and rallies, newspapers.",
              "Functions: educate and train members, influence government policies, provide social welfare, contribute to national development, run advocacy programmes and promote economic growth.",
              "NGOs are non-profit organisations for education, health, agriculture and skills development; all Gambian NGOs fall under TANGO with over 70 registered members.",
              "TANGO aims: foster cooperation among NGOs, spread information, help secure funds and coordinate activities for sustainable development.",
              "Named NGOs: GFPA for health and population, ActionAid for health education and agriculture, CRS for health education and agriculture, Sight Savers for health, Child Fund for education and health, YMCA for education and training. Others: Red Cross for health, Scouts for youth field trips, Peace Corps for education and health, NCCE for civic rights and the constitution headed by a chairperson."
            ],
            "definitions": [
              "Trade union: voluntary association of workers in the same trade improving benefits through negotiation.",
              "Pressure group: organised group that influences government policies for its members interests.",
              "NGO: non-profit organisation working for socio-economic development.",
              "TANGO: The Association of Non-Governmental Organizations coordinating all NGOs in The Gambia.",
              "Boycott: refusal to buy, use or take part in something as a protest."
            ],
            "examples": [
              "GTU negotiates better conditions for teachers.",
              "A strike or boycott presses employers to meet workers demands.",
              "GFPA runs health and population programmes in communities."
            ],
            "waecFocus": [
              "Define trade union and pressure group.",
              "Name founders of Bathurst Trade Union, GTU and Gambia Workers Union.",
              "List methods used by pressure groups.",
              "State functions of trade unions.",
              "State aims of TANGO and match NGOs to their areas."
            ],
            "memoryTip": "Small 1929, Faye GTU, Jallow 1957: Strike, Boycott, Talk, Lobby."
          },
          {
            "id": "ses-g9-t9-3",
            "unit": "33.0",
            "page": "—",
            "title": "Local Government and Area Councils",
            "icon": "🏘️",
            "explanation": "Local governments are semi-autonomous bodies set up by central government to meet local needs. In The Gambia they are called area or municipal councils, with 8 councils across the 7 administrative regions since Central River Region has two.",
            "points": [
              "Local governments are semi-autonomous bodies set up by central government to provide essential needs of local people in a geographical region.",
              "There are 8 area councils: Central River Region has two, Janjanbureh for CRR south and Kuntaur for CRR north; every other region has one.",
              "The 8 councils are Banjul City, Kanifing Municipal, Brikama (WCR), Kerewan (NBR), Mansakonko (LRR), Basse (URR), Janjanbureh and Kuntaur.",
              "Political heads are the Mayor or Mayoress for the two municipalities and Chairpersons for the five regions, elected with 120 ward councillors; the administrative heads are Chief Executive Officers or Municipal and Town Clerks.",
              "Functions: rapid development, grassroot infrastructure, transport and recreation, scholarships, town planning, public health, bringing government closer to people, leadership training, bye-laws, rates and taxes, jobs, schools and markets, licences, death and marriage records.",
              "Revenue sources: central government grants, licence fees, royalties, rates and taxes, court fines, donations, bank loans, special levies and land sales or investments.",
              "Problems: financial problems, corruption and embezzlement, poor quality staff, lack of funds, executive control by central government and inefficiency.",
              "Other agencies: NEA for environment, NRA for roads, NaNA for food safety and breastfeeding, NDLEAG for drugs, NDMA for disasters, GRA for taxes, PURA for public facilities, GTBoard for tourism and GAMWORKS for public works."
            ],
            "definitions": [
              "Local government: semi-autonomous body set up by central government for local needs.",
              "Area council: local government unit for a region in The Gambia.",
              "Chairperson: elected political head of a regional area council.",
              "Mayor or Mayoress: elected political head of a municipality.",
              "Bye-law: local rule made and enforced by a council."
            ],
            "examples": [
              "Kanifing Municipal Council established Charles Jow Memorial Academy.",
              "Brikama Area Council collects compound rates and market taxes.",
              "NRA maintains road networks while NEA protects the environment."
            ],
            "waecFocus": [
              "Define local government and state how many councils exist and why.",
              "Name the 8 councils with their regions and heads.",
              "State functions of area councils.",
              "List revenue sources and problems of councils.",
              "Match agencies such as NEA, NRA, NaNA, NDMA and GAMWORKS to roles."
            ],
            "memoryTip": "8 councils, CRR has 2: Mayors for cities, Chairpersons for regions."
          }
        ]
      }
    ]
  }
];
