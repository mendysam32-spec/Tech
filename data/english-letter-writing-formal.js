// Tech Monster — Formal & Semi-Formal Letter Masterclass (WAEC / GABECE)
// Companion to data/english-letter-writing.js (the informal masterclass).
// Covers the COEMA marking scheme, the three components of every letter, the
// language families (loose / strict / tepid), formal letters (closed
// applications + open publication letters), the informal-vs-formal contrast,
// semi-formal letters, phrase banks, and six full model letters.
// Rendered by js/english-guides.js in the Library English Book (Grade 9).
window.englishFormalLetterGuide = {
  id: "formal-letter-masterclass",
  title: "Formal and Semi-Formal Letters — Official Correspondence Masterclass",
  intro:
    "A letter is a written message conveyed from one person to another through a medium — a means of disseminating information from person to person, or from group to group. Under letter writing we study three families of letters: the INFORMAL letter (to people close to us), the FORMAL letter (official or business correspondence with people we do not know), and the SEMI-FORMAL letter (the middle course — the principal, the boss, a distant relation). Every examiner grades every letter on the same four criteria, called COEMA, worth 50 marks in all. Master COEMA and the layout of each letter family, and the marks follow you.",

  // ===================== STANDARD MARKING GUIDE (COEMA) =====================
  coema: {
    title: "Standard Marking Guide — COEMA (50 marks)",
    items: [
      {
        name: "Content",
        marks: "10 marks",
        detail:
          "The examiner assesses your ability to write on the topic you were asked to write on, and whether your ideas fall within the central theme. Include enough material to justify writing at all, and develop the topic with the material the question demands. A candidate who writes off-topic can score ZERO under content — if the question asks for 'the effects of unemployment in the country', every paragraph must be an effect of unemployment.",
      },
      {
        name: "Organisation",
        marks: "10 marks",
        detail:
          "This is planning and arrangement: a well-organised letter with correctly written address(es), date, salutation, title and subscription. Arrange your points so the examiner can see how one point follows another. Relate your points with expressions like 'my first point / firstly', 'in addition to', 'furthermore', 'moreover', 'besides', 'again', 'contrary to', 'nevertheless'; conclude with 'finally' or 'in conclusion'. Everything must sit in properly arranged paragraphs — one central idea per paragraph.",
      },
      {
        name: "Expression",
        marks: "20 marks",
        detail:
          "This is where the use of English is brought into play: clarity, your stock of vocabulary including idiomatic expressions, effective arrangement and variation of sentence structures, judicious and imaginative use of figurative language, appropriate words, collocations, sentence types and punctuation. There must be no long, winding, muddled or clumsy sentences and no ambiguity. You may use Standard British English or Standard American English — but you must be CONSISTENT.",
      },
      {
        name: "Mechanical Accuracy",
        marks: "10 marks",
        detail:
          "Correct grammar, correct spelling and accurate punctuation. The examiner rings or circles each error noticed, and every ring is a deduction of half a mark (½). Proofread everything you write before submitting.",
      },
    ],
    commonLosses: [
      "Wrong spellings: any word wrongly spelt costs half a mark — practise 'committee', 'profession', 'occasion', 'preferred', 'maintenance'.",
      "Capitalisation: every sentence starts with a capital letter; the pronoun 'I' is a capital at any point; all proper nouns (persons, places, titles) take capitals.",
      "Omission of articles: say 'I have a cold' (not 'I have cold') and 'it is high time we left' (not 'it is high time we leave').",
      "Redundancy (saying the same thing twice): 'still yet', 'so therefore', 'return back', 'repeat again', 'log of wood', 'night vigil', 'wake keeping', 'should in case' — each one is an error the examiner will ring.",
    ],
  },

  // ===================== BRITISH vs AMERICAN ENGLISH =====================
  britishVsAmerican: {
    note:
      "You may choose either Standard British or Standard American English in the exam, but never mix them. Most West African examiners know Standard British English best — it is the safer choice.",
    lexis: [
      ["fill in (a form)", "fill out (a form)"],
      ["petrol station", "gas station"],
      ["chips", "French fries"],
      ["cooker", "stove"],
      ["mobile phone", "cell phone"],
      ["dressing gown", "bathrobe"],
      ["trainers", "sneakers"],
      ["bonnet (of a car)", "hood (of a car)"],
      ["jumper", "sweater"],
      ["biscuit", "cookie"],
      ["crisps", "potato chips"],
      ["flat", "apartment"],
      ["boot (of a car)", "trunk (of a car)"],
    ],
    spelling: [
      ["centre", "center"],
      ["favour", "favor"],
      ["programme", "program"],
      ["dialogue", "dialog"],
      ["analyse", "analyze"],
      ["storey building", "story building"],
      ["leukaemia", "leukemia"],
      ["meagre", "meager"],
      ["travelling", "traveling"],
      ["analogue", "analog"],
      ["grey", "gray"],
      ["aeroplane", "airplane"],
      ["colour", "color"],
      ["metre", "meter"],
      ["labour", "labor"],
      ["specialise", "specialize"],
      ["neighbour", "neighbor"],
      ["litre", "liter"],
      ["humour", "humor"],
      ["defence", "defense"],
      ["pretence", "pretense"],
      ["theatre", "theater"],
    ],
  },

  // ===================== COMPONENTS OF EVERY LETTER =====================
  components: [
    {
      name: "Audience",
      detail:
        "The person you are writing to — the one who will receive and read the letter. Decide who the receiver is before you write, and direct the letter at what he or she should know. Make sure your audience can understand the content of your letter.",
    },
    {
      name: "Purpose",
      detail:
        "The main reason why you are writing. Some questions expect you to discuss the topic one-fold, two-fold or even three-fold — for example, to describe AND explain AND advise. Many candidates choose only one purpose and write; there is no way such a candidate will not lose more than half of the marks. Circle the action words in the question (discuss, describe, explain, advise, narrate) and satisfy every one of them.",
    },
    {
      name: "Language",
      detail:
        "The type of words you use, determined by your audience — friend, father, principal, government officer. There are three language families for the three letter types: loose (informal), strict (formal) and tepid (semi-formal).",
    },
  ],
  languageTypes: [
    {
      name: "Loose language — informal letters only",
      detail:
        "Sound friendly: greetings to loved ones are expected, and you should shorten your words — 'cannot' → 'can't', 'was not' → 'wasn't', 'I am not' → 'I'm not', 'do not' → 'don't', 'I will not' → 'I won't', 'I should not' → 'I shouldn't'. A little slang or colloquialism is allowed provided you put it in inverted commas: 'boy', 'my son', 'long time no see'. NEVER use text/SMS language such as 'U are d one 2 blame cus u caused d problem' — it is penalised heavily.",
    },
    {
      name: "Strict language — formal letters only",
      detail:
        "Remove every tone of familiarity: no slang, no colloquialism, no chatty language. Be polite and clear, write every word in full (no 'can't', 'don't', 'I'm', 'won't', 'shouldn't'; write out GRA, GPA and other abbreviations in full), and go straight to the point.",
    },
    {
      name: "Tepid language — semi-formal letters only",
      detail:
        "A middle course: a tone of respect mixed with friendliness. Do not respect your audience too much (as in a strict formal letter), and do not be too familiar either — the principal, the boss or a distant relation.",
    },
  ],

  // ===================== FIVE PARTS OF EVERY LETTER =====================
  letterRules: [
    {
      part: "a. The Heading",
      detail:
        "Two parts: the writer's address, followed by the date. WAEC / GABECE convention places the writer's address at the top right-hand corner of the first page (some textbooks allow the left — choose one side and be consistent).",
      example: "No. 64 Independent Drive,\nBanjul,\n10th October, 2020.",
    },
    {
      part: "b. The Salutation (courteous greeting)",
      detail:
        "Depends on the depth of relationship with the receiver. Written on the left-hand side, on the line below the date. Begins with a capital letter and ends with a comma.",
      example: "Informal: Dear Mother, / My dear Omar.\nFormal: Dear Sir, / Dear Madam, / Dear Sir/Madam.",
    },
    {
      part: "c. The Body (the message)",
      detail:
        "The life of the letter. Divide it into paragraphs to mark changes of subject matter (one topic sentence per paragraph); use simple, direct language in short sentences; be complete — think out what you want to say before you begin and put the points down in logical order; write neatly; take care of punctuation.",
      example: "",
    },
    {
      part: "d. The Subscription (courteous leave-taking)",
      detail:
        "The ending must suit the beginning — a letter must not end abruptly, which looks rude. Written after the body on the left-hand side; starts with a capital letter and ends with a comma. Never use an apostrophe with 'yours' — write 'Yours sincerely', never 'Your's'.",
      example: "Blood relations: Yours affectionately, / Yours sincerely.\nFriends: Yours sincerely, / Yours ever.\nPrincipal / teacher: Your student, / Yours obediently.\nOfficials / businessmen: Yours faithfully.\nStrangers: Yours truly.",
    },
    {
      part: "e. The Signature",
      detail:
        "The writer's name below the subscription. In a letter to a stranger, sign clearly so the reader knows whom to address in a reply. A woman puts (Miss) or (Mrs) in brackets before her name, e.g. (Mrs) Bojang.",
      example: "",
    },
  ],

  // ===================== STARTING & ENDING PHRASE BANKS =====================
  phraseBanks: [
    {
      kind: "Informal letters",
      starting: [
        "I got your letter yesterday.",
        "I am glad to receive your letter.",
        "It gives me great pleasure to inform you…",
        "It has been a while since I heard from you.",
        "I cannot understand your silence — it has made me very anxious.",
        "I am very sorry I could not write to you earlier.",
        "I cannot express how great I feel — I am speechless with joy.",
      ],
      ending: [
        "With kind regards,",
        "With best wishes,",
        "Convey my best regards to your dear parents.",
        "With love to your brother and sister.",
        "Well, goodbye for now.",
        "Hoping to hear from you very soon.",
        "With sincere sympathy in your distress.",
        "I promise it won't happen again.",
        "Please feel proud of your achievements.",
        "Wishing you still better luck.",
      ],
    },
    {
      kind: "Business letters",
      starting: [
        "I shall be obliged if you kindly…",
        "I shall be glad if you send me…",
        "Would you be kind enough to send me the following articles…",
        "May I draw your attention to…",
        "Please accept my hearty congratulations…",
        "I am brimming with determination…",
      ],
      ending: [
        "I am thanking you,",
        "I am thanking you in anticipation.",
        "Hoping to be favoured with an early reply.",
      ],
    },
    {
      kind: "Official letters and applications",
      starting: [
        "I beg to submit…",
        "I beg to state…",
        "I have the honour to report…",
        "I have the honour to bring to your kind notice…",
        "With reference to your advertisement in the Standard Newspaper…",
        "I want to deeply apologise for this lapse…",
        "I am sorry to bring to your notice that…",
        "I wish to congratulate you on your…",
      ],
      ending: [
        "I am thanking you,",
        "I am thanking you in anticipation / in advance.",
        "Hoping to be favoured with an early reply.",
      ],
    },
  ],

  // ===================== FORMAL LETTERS =====================
  formal: {
    definition:
      "Formal letters are also called official or business letters. They follow certain established rules and styles, are written to people we are not used to, not related to, and not associated with, and are largely impersonal: no personal greetings, no exchange of jokes, very meagre emotional language.",
    advice: [
      "Your address — but NOT your name — goes at the top right-hand corner. Do not include your telephone number or email address.",
      "The name and address of the person you are writing to goes below your address, on the left. Use the official title (designation) of the addressee, not their name.",
      "The salutation depends on whether you know the name: Dear Sir, / Dear Madam, / Dear Sir/Madam, or Dear Mr/Mrs/Miss Bojang.",
      "It is common to put the subject heading immediately after the salutation, in block letters or small letters. It tells the reader what the letter is about before reading.",
      "The content should not be too long, and should be divided into short, clear paragraphs.",
      "You may end with a phrase such as 'I look forward to hearing from you' or 'thanking you in anticipation' — polite, but not meaningless repetition.",
      "Write 'Yours faithfully' if you began with Dear Sir/Madam, but 'Yours sincerely' if you began with the person's name.",
      "Sign directly below the closing, then write your full name under the signature.",
      "Your letter must be free from grammatical and spelling mistakes.",
      "Be polite even when complaining — and above all, the letter must be well presented.",
    ],
    types: [
      {
        name: "Closed formal letter (application letter)",
        detail:
          "Written in response to an advertisement for a job or admission to an institution — the writer is personally involved, and the style, presentation and content strongly influence the decision of the employer or institution. When responding to an advertisement:",
        rules: [
          "Keep the application as short as is consistent with the information required.",
          "Examine the wording of the advertisement carefully so you understand what it is really about.",
          "Read the requirements for the post painstakingly so you can state clearly which ones you meet.",
          "Use a respectful tone and show determination for the post.",
          "Write in neat handwriting.",
          "State your age, nationality, qualifications, experience and schools attended (if required).",
          "Refer to the source of the advertisement.",
          "Put the name of the paper you referred to in inverted commas, e.g. \"Standard Newspaper\".",
          "Prove that you are capable of helping the establishment when employed.",
          "Give the names of at least two referees (never relatives).",
        ],
      },
      {
        name: "Open formal letter (letter of publication)",
        detail:
          "Letters meant for a wider readership or official attention: (a) letter to the editor of a newspaper, (b) letter of request, (c) letter of complaint, (d) letter of appeal.",
        rules: [],
      },
    ],
    addresses: {
      detail:
        "Formal letters carry TWO addresses. The writer's address goes at the top right-hand corner (with NO name above it); the recipient's address goes on the left-hand side, just below the date. Never address officials, companies, institutions, firms, ministries or newspapers by personal name — use their designations: The Chief Education Officer, The Managing Director, The Auditor General, The Personnel Manager, The Governor, The Editor, The Chairman, The Mayor, The Regional Director.",
      examples: [
        "WRITER (right):\nMasroor Senior Secondary School,\nOld Yundum,\nKombo North District,\nWest Coast Region.",
        "RECIPIENT (left, below the date):\nThe Editor,\nStandard Newspaper,\nBakau Newtown,\nBakau,\nKanifing Municipality.",
        "RECIPIENT (left, below the date):\nThe Marketing Manager,\nAfricell Company Limited,\n67 Kairaba Avenue,\nKanifing Municipality.",
      ],
    },
    salutations: {
      detail:
        "In formal letters, do not use familiar greetings. The conventional forms are: Dear Sir, / Dear Madam, / Dear Sir/Madam, / Dear Sirs.",
      dignitaries: [
        ["The President", "Your Excellency,"],
        ["The Vice President", "Your Excellency,"],
        ["An Ambassador", "Your Excellency,"],
        ["A Judge", "Your Lordship, / My Lord,"],
        ["A King", "Your Royal Highness,"],
        ["An Imam or Bishop", "Your Lordship,"],
        ["A university professor", "Dear Professor,"],
        ["A performer of Hajj", "Alhaji / Alhaja,"],
      ],
    },
    heading: {
      detail:
        "Every official letter should have a heading or title — not necessarily a full sentence, but phrasal or clausal, bringing out the subject matter at a glance. Write it in capital letters (no underline) or in small letters (underlined).",
      examples: [
        "THE EFFECTS OF UNEMPLOYMENT",
        "INDISCIPLINE IN OUR SECONDARY SCHOOLS",
        "Problems Facing Agriculture in My Area",
      ],
    },
    body: "The content is like the informal letter — well developed, properly linked paragraphs — but the language is formal and straight to the point, respectful and polite. No slang, no colloquialism, no contracted spellings. Aim for clarity of expression, varied sentence patterns, and strict precision: each paragraph deals directly with one issue under discussion (one topic sentence per paragraph).",
    conclusion:
      "The conclusion comes at the end, in harmony with the salutation. The 'Y' of 'Yours faithfully' is a capital and the 'f' is a small letter; a comma follows 'Yours faithfully', and a full stop follows the name. The subscription and signature sit at the bottom of the letter, followed by your FULL name — e.g. Yours faithfully, Malang Manneh (Mr).",
  },

  // ===================== INFORMAL vs FORMAL =====================
  informalVsFormal: [
    { a: "Informal letters have varied patterns or styles.", b: "Formal letters follow a fixed pattern or style." },
    { a: "Informal letters have very limited use in working environments.", b: "Formal letters are mostly used in working environments like offices." },
    { a: "The language is by and large personal, social and emotional.", b: "The language is by and large impersonal and work-related." },
    { a: "Language is unrestricted — mild slang and non-conventional terms are acceptable.", b: "Informal words ('gonna', 'wanna', 'I'm', 'can't', 'bro') can never be used." },
    { a: "2–3 acceptable salutations; not much need of formality.", b: "Great care is taken to write the appropriate salutation." },
    { a: "Length varies with the subject matter (minimum 300 words in the exam).", b: "Length is important — the letter should not be too long." },
    { a: "Closing gestures do not vary as much.", b: "Closing gestures vary and must match the opening." },
    { a: "A heading or title is not conventional.", b: "A heading or title is a conventional practice." },
    { a: "The tone expresses emotions and social communication.", b: "The tone stays formal even under provocation (e.g. complaints)." },
  ],

  // ===================== SEMI-FORMAL LETTERS =====================
  semiFormal: {
    definition:
      "Semi-formal letters carry some elements of both the informal and the formal letter — a mid-way between the two. They are neither too formal nor too informal. They are written to people with whom we do not have a close personal relationship: people we are not quite familiar with, people we meet by chance who have done us a good turn, acquaintances or distant relations. They are NOT the letters we write to our own parents or close relations.",
    who: [
      "Your principal, headmaster or teacher",
      "Your boss in the office",
      "Your landlord or landlady",
      "Distant relations — elder uncles, aunts, friends of your parents",
      "Your Imam or pastor",
    ],
    address:
      "The address and date follow the same format as the informal letter (your home address alone is enough). BUT if you begin the letter with 'Dear Sir' — for example to your school principal — you must use TWO addresses, exactly like a formal letter.",
    salutations: [
      "Dear Sir,",
      "Dear Principal,",
      "Dear Mr Bayo, (your teacher)",
      "Dear Mr / Mrs / Miss Bojang, (your parents' friend)",
      "Dear Uncle Modou, / Auntie Bintou,",
      "Dear Dr / Prof Janneh,",
      "Dear Alhaji / Reverend / Pastor,",
    ],
    body:
      "Organise the content in well-arranged sentences and coherent paragraphs. The language is a middle course — between informality and formality (tepid). Slang, jokes, contracted forms and idioms are NOT necessary and should be avoided. You may first acknowledge any previous letter, then state your reason for writing clearly. Be polite, courteous, clear and concise.",
    conclusion:
      "The conclusion should be in harmony with the salutation — slightly formal, not too informal. Acceptable subscriptions: Yours faithfully, / Yours sincerely, — followed by your full name, e.g. Yours faithfully, Ebrima Sanneh.",
  },

  // ===================== MODEL LETTERS =====================
  models: [
    {
      id: "model-informal-marriage",
      kind: "informal",
      title: "Model 1 — Informal: three reasons for Mother to accept the marriage",
      question:
        "Your sister wants to marry a man from another ethnic group against your mother's wishes. Write a letter to your mother giving at least three reasons why she should accept your sister's decision.",
      whyItScores:
        "Three clearly signposted reasons (age and precedent, tribal unity, genuine love), warm daughter-to-mother relationship throughout, linking words ('my first point', 'furthermore', 'above all', 'in conclusion') — full Content and Organisation marks.",
      letter: {
        addressLines: ["Bundung Bathurst Street,", "Bundung,", "Serekunda,", "Kanifing Municipal Council."],
        date: "20th October, 2020.",
        salutation: "Dear Mother,",
        paragraphs: [
          {
            label: "P1 — greet + why I am writing",
            text: "Let me hasten to enquire about your health, which started degenerating about a couple of weeks ago. Are you better now? Well, brother Modou visited me and told me you are already turning the corner. He told me you took ill because of your opposition to my sister Mariama's decision to marry a Fula man. You need not fall sick on account of this! In this letter, I will tell you, sweet mum, why you should consider accepting my sister's choice.",
          },
          {
            label: "P2 — first reason: she is old enough (with example)",
            text: "Mum, my first point is that my sister is old enough, at twenty-eight, to know what she wants and what is good for her. I am very happy you yourself are a fan of the late Bob Marley, the reggae legend who sang 'Everyone has got the right to decide his own destiny…' Do you remember that track? Oh yes, now you remember! That is it. In years past, people of your generation believed in inter-tribal marriage, and that is why you ended up with our father. Your friend Mrs Bojang married from this same Fula tribe, and her marriage remains as happy as — if not happier than — yours today. Am I right? This is the truth!",
          },
          {
            label: "P3 — second reason: inter-tribal marriage unites peoples",
            text: "Furthermore, inter-tribal marriages untie peoples — tribes and nations. Mama, you will remember that before this generation there used to be many inter-tribal wars, because there were not so many inter-tribal marriages, and it was easy for people of one tribe to raise arms against another, killing one another in their tens of thousands. Inter-tribal and communal clashes have, however, greatly reduced in countries here in West Africa because the Jola man has learnt to marry the Fula woman, and other tribes have inter-married too. It is therefore difficult for a Jola man to bear arms against the tribe from which he has taken a wife. Looking at this issue critically, sister Mariama should be a national — or at least a tribal — heroine who deserves to be showered with accolades for daring to untie our disintegrating nation through marriage.",
          },
          {
            label: "P4 — third reason: genuine love (with example)",
            text: "Above all, it is evident that my sister and her intending husband love each other dearly. Right now, mummy, let me ask you a question: which of these two men should carry your child away forever — a man of means from your kindred who loves her fifteen per cent, or a 'stranger' (it depends on what you understand a stranger to be) who can die in place of your daughter? Love overcomes everything, doesn't it? We are all living witnesses to their 'love-in-Tokyo' kind of relationship — holding hands, necking, relating well with the proposed in-laws. The man is open-handed, intelligent, compassionate and gentle, and I suspect they are inseparable because they attended the same school. As you know, we are all Muslims; the religion of Islam makes us one family, in love. So what is left? Oh mama, come on, please let go. Let them be. They love each other. Bless them. I know you understand.",
          },
          {
            label: "P5 — conclusion: close only",
            text: "In conclusion, I would like you to know that Binta — that girl you met in my sister's apartment the last time you came — is eager to pay you a visit, because I have proposed to her to be my wife. However, I have asked her to be patient until my sister Mariama is married, as a sign of respect for her. So by consenting to Mariama's marriage to that wealthy Fula businessman, you are indirectly consenting to my own marriage, which you have been looking forward to. Do let me hear from you soon. How is your old husband? (Please don't tell Daddy I called him an old man!) I hope you are both still enjoying this cold rainy season together. I can figure you are smiling. Well, till then — cheers.",
          },
        ],
        closing: "Yours sincerely,",
        name: "Saikou.",
      },
    },
    {
      id: "model-informal-uncle-fees",
      kind: "informal",
      title: "Model 2 — Informal: thanking Uncle and discussing the consequences of his failure",
      question:
        "Write a letter to your uncle overseas thanking him for paying your WASSCE registration fee and discussing the possible consequences of his failure to have rendered the assistance.",
      whyItScores:
        "The question asks for TWO purposes (thank + discuss consequences) and the letter delivers both: thanks in P1, then the imagined consequences in P2–P4, each as its own paragraph.",
      letter: {
        addressLines: ["Masroor Senior Secondary School", "Old Yundum", "Kombo North District", "West Coast Region", "The Gambia"],
        date: "10th October, 2019.",
        salutation: "Dear Uncle Modou,",
        paragraphs: [
          {
            label: "P1 — greeting + thanks + why I am writing",
            text: "How are you? How particularly is the London weather treating you? I understand that at this time of the year it is extremely cold over there. You have, however, found time out of your busy schedule to write such a long letter encouraging me to brace up for my coming WASSCE examination. You also sent, through Western Union Money Transfer, my WASSCE registration fee of two thousand (D2,000) dalasis. Uncle, after receiving the encouraging letter and the money, I wondered to myself what would have happened to me and my education if you had not been magnanimous enough to pay the fee, since I am an orphan. In this letter, I have tried to write down my secret thoughts on the possible consequences of your failure to pay this fee. Please, read them.",
          },
          {
            label: "P2 — consequence 1: deferring the examination",
            text: "My first point: perhaps I would have written to my school principal to arrange for me to defer my examination. This is possible, but the consequences are grave, terrible and counterproductive. It would have caused me untold drawback in my quest for Western education. I would have had to stay home for several months, doing nothing in particular. My thoughts also captured the fact that, perhaps, I would have been drawn into crime by the few rascal boys who live close to our house. And that is not all — other things could have happened.",
          },
          {
            label: "P3 — consequence 2: becoming a houseboy",
            text: "Furthermore, had I not deferred the writing of my exams, I would have opted to become a houseboy to Governor Hydara, who had gladly offered to pay this fee in return for my becoming his servant. If this had happened, I would have remembered daily the saddening event of the fatal road accident that claimed the lives of my loving parents, who had vowed to 'go with me up to doctoral level of education, in any university of my choice'.",
          },
          {
            label: "P4 — consequence 3: dropping out of academic life",
            text: "However, you did not allow this to happen. It was my thought, when I received the face-saving registration fee, that even if I had not become an unwilling houseboy to Governor Hydara, I would have definitely opted out of academic life. You know, in our several previous discussions I had told you how I could not wait to become a lawyer, twisting cases in favour of the guilty and the innocent by the power of my oratory and legal training — just as I have seen many lawyers do, impressively. Otherwise, I would have gone to Serekunda Market to sell second-hand clothes, 'fukajai', or worse still, I could have become an apprentice. But your intervention did not allow any of these.",
          },
          {
            label: "P5 — conclusion: close only",
            text: "In conclusion, Uncle, let me tell you that not all uncles are like you. Though most family members termed you a miser, you opened your hands towards me and established my academic future. You prevented me from deferring my exam, withdrawing from school, and becoming a houseboy. I want to wish you all the sunshine of success in your life. Please give my sincere greetings to my cousins Buba, Sainabou and Amadou, and to Auntie Fatou and your neighbours. Bye for now.",
          },
        ],
        closing: "Yours sincerely,",
        name: "Omar.",
      },
    },
    {
      id: "model-informal-school-excellence",
      kind: "informal",
      title: "Model 3 — Informal: three areas in which my school excels",
      question:
        "Your friend in another school has requested some information about your school to enable him to decide on moving over to your school. Write a letter to him discussing at least three areas in which your school excels.",
      whyItScores:
        "Three areas signposted with linking words (teachers, library, laboratories + discipline), each developed with a concrete example, and a warm friend-to-friend voice.",
      letter: {
        addressLines: ["Masroor Senior Secondary School,", "P.O. Box 2038,", "Serekunda."],
        date: "18th October, 2019.",
        salutation: "Dear Lamin,",
        paragraphs: [
          {
            label: "P1 — greeting + why I am writing",
            text: "How are you doing? You have now become a scarce commodity that people find so hard to get. I could not even believe it when it dawned on me that you were the one who wrote the letter which Aminata, my younger sister, gave to me. Anyway, it is good to hear from you again, even though it was obvious why you wrote it. With regard to the information you requested about my school, I want to say that my school excels in so many areas, but I shall discuss only the most prominent of these excellent hallmarks.",
          },
          {
            label: "P2 — area 1: committed teachers",
            text: "Lamin, my school has remained one of the top schools on the list for the past five years, with the best set of teachers. The school management makes it a point of duty to employ only teachers with outstanding track records in the subjects they teach. In fact, no teacher of ours is allowed to come late to school, let alone be absent from classes. They give regular tests after every topic, and the marking is done immediately. The strength of my school is no doubt explained by the parade of committed teachers we have.",
          },
          {
            label: "P3 — area 2: teaching and learning aids",
            text: "Another crucial mark of excellence in my school is the fact that teaching and learning aids are abundantly available. The school's central library is almost over-stocked with books of divergent academic interests and fields of human endeavour. My friend, you will not believe it if I say my school library enjoys patronage from far and wide, and this is probably why an international non-governmental organisation (NGO) has continued to shower sponsorship on the library.",
          },
          {
            label: "P4 — area 3: science laboratories",
            text: "Furthermore, the science laboratories are incomparable with those of any other school in the country. They are well equipped with all the latest instruments and furnished with new apparatus; they are comparable to any found in the most civilised countries of the world. This has resulted in our science students doing well in the 'Fanta Science Competitions' organised by Gambega, one of the leading companies in the country. Also, our science students usually top the list of excellence at WASSCE level.",
          },
          {
            label: "P5 — area 4: discipline",
            text: "In addition, in my school, discipline plays a vital role in achieving our goals. There is a mutual awareness of discipline at all levels. The school Disciplinary Committee does not compromise with discipline; they make sure unruly students are taken care of anytime they misbehave. The teachers know the limits of their rights and statutory duties, and the students are fed with invaluable moral instructions that will mould them into ideal personages for tomorrow's leadership. It is a cliché in my school to say that 'the fear of God is the beginning of wisdom'.",
          },
          {
            label: "P6 — conclusion: close only",
            text: "In conclusion, academic excellence is keenly contested in my school because the management boosts the students' morale for excelling in every subject and overall. Lamin, I am sure you are now convinced to make up your mind for my school. Lest I forget, what of Basirou and Abdoulie? I hope they are all right? Give my regards to your family. Bye for now.",
          },
        ],
        closing: "Yours sincerely,",
        name: "Ebrima.",
      },
    },
    {
      id: "model-formal-application",
      kind: "formal",
      title: "Model 4 — Formal: application for employment (paragraph-by-paragraph build)",
      question:
        "Write a reply to the following advertisement which appeared in the Standard Newspaper. — WANTED: Secretary General. Age: between 18–28 years. Applicant must be energetic with sound secondary education. Salary: very attractive. Write to the Managing Director, Africell Company Limited, 67 Kairaba Avenue, Kanifing.",
      whyItScores:
        "A closed (application) formal letter: two addresses, designation (not name), source of the advertisement in inverted commas, and every requirement of the advert answered in its own paragraph — exactly what the employer checks.",
      letter: {
        addressLines: ["Bundung Bathurst Street", "Bundung,", "Serekunda,", "Kanifing Municipal Council."],
        date: "15th October, 2020.",
        recipient: ["The Managing Director,", "Africell Company Limited,", "67 Kairaba Avenue,", "Kanifing Municipality."],
        salutation: "Dear Sir/Madam,",
        heading: "APPLICATION FOR EMPLOYMENT",
        paragraphs: [
          {
            label: "P1 — state the post + the source of the advertisement",
            text: "I am highly interested in the position of Secretary General in your company, as the vacancy was advertised in the Standard Newspaper of Wednesday, 25th September, 2020. I am keenly interested in becoming one of your staff if my application is granted.",
          },
          {
            label: "P2 — personal information (age, nationality, religion, marital status)",
            text: "I am a young man of twenty-three (23) years and a Gambian. I am a faithful Muslim, unmarried.",
          },
          {
            label: "P3 — schools attended, achievements and certificates",
            text: "I started school at Brikama Lower Basic School in 2007 and left in 2012. I moved to St Peter's in 2012 after my Common Entrance Examination. At St Peter's, I became class captain in Grade 8 and a member of the drama group. In 2015, I sat for the National Examination known as the Gambia Basic Certificate Examination (GABECE), where I secured a very sound result which helped me gain admission to Masroor Senior Secondary School, Old Yundum. I entered Masroor in 2015 and sat for the West African Senior School Certificate Examination (WASSCE) in May 2018, obtaining credit in seven (7) subjects, including English Language and Mathematics. I was the Head Boy during my last year in the school, and also captain of the school football team.",
          },
          {
            label: "P4 — job experience (title, office, achievements, years)",
            text: "On leaving school in May 2018, I obtained a job at Qcell Mobile Company, where I worked as Assistant Secretary General in the Public Relations department. I used to organise sensitisation programmes on QRadio to inform the public about activities and promotions. After six (6) months of effective work, I was promoted to Secretary General. In early 2019, I moved to the Gambia Revenue Authority (GRA) in Banjul as Public Relations Officer, where I am presently working. My present salary is two thousand five hundred dalasis (D2,500) per month. I am naturally anxious to secure a post which will offer me the opportunity of improving both my salary and my prospects.",
          },
          {
            label: "P5 — referees (at least two, never relatives)",
            text: "If you want to know more about me regarding my ability and integrity, I humbly refer you to my former boss, Mr Momodou Faal, Secretary General, Qcell Mobile Company, contact numbers 37783860 / 3567890; or Mr Lamin Bojang, Programme Manager, Gambia Revenue Authority (GRA), contact numbers 7783860 / 9773860. I also hope to come along with my testimonials if you could grant me an interview.",
          },
          {
            label: "P6 — commitment + close",
            text: "If I am fortunate to gain employment in your company, I will work hard so that the aims and objectives of your company will be achieved. I hope to hear from you at your most convenient time.",
          },
        ],
        closing: "Yours faithfully,",
        name: "Malang Manneh (Mr).",
      },
    },
    {
      id: "model-formal-complaint",
      kind: "formal",
      title: "Model 5 — Formal: letter of complaint to the Environmental Protection Agency",
      question:
        "Write a letter to the Director of the Environmental Protection Agency in your area complaining about the environmental pollution of your area and requesting that urgent action be taken to improve the situation.",
      whyItScores:
        "An open formal letter: two addresses, designation salutation, a heading, polite but forceful complaint — each cause in its own paragraph and each request clearly made.",
      letter: {
        addressLines: ["Masroor Senior Secondary School,", "Old Yundum,", "Kombo North District,", "West Coast Region."],
        date: "10th October, 2020.",
        recipient: ["The Director,", "National Environment Protection Agency,", "Kanifing South,", "Kanifing Municipal Council."],
        salutation: "Dear Sir/Madam,",
        heading: "Environmental Pollution in My Area",
        paragraphs: [
          {
            label: "P1 — state the problem",
            text: "I wish to bring to your notice the environmental pollution we are facing in my area. I came to this area about three years ago. Since I got to this place, I have noticed that the area has a lot of environmental problems.",
          },
          {
            label: "P2 — cause 1: industrial pollution",
            text: "The first problem is industrial pollution. It has been noticed that the industries in this area do not take care of their waste; people dump their waste anywhere without its being properly treated. For instance, there is an industry which manufactures drugs. Whenever this company finishes its production, it pours the waste products into nearby gutters without treating them. This has, in no small way, contributed to the inhabitants of the area contracting diseases and sicknesses such as lung cancer, and even livestock are dying on a daily basis.",
          },
          {
            label: "P3 — cause 2: no incinerator",
            text: "Also, this area has no incinerator. People dump refuse anywhere. To make matters worse, after dumping the refuse, some people set it ablaze, thereby causing the smoke to spread all over the place. People inhale this smoke, and this impairs the breathing of the inhabitants.",
          },
          {
            label: "P4 — cause 3: auto-technicians",
            text: "Furthermore, auto-technicians make things worse. They cause a lot of pollution in the area. For instance, the panel beaters and spray painters, after finishing their work on a vehicle, drop the containers they used anywhere. The stench coming out of these containers results in environmental pollution, since the stench is not good for human beings to inhale.",
          },
          {
            label: "P5 — the requests",
            text: "Having mentioned all these, your urgent response to this pollution is needed so as to forestall future problems. Among other things, the companies operating in this area should be called to order and told to treat their waste products before disposal. The area should be provided with an incinerator, and the auto-technicians should be enlightened on how to dispose of their containers. Other measures should also be taken to improve the situation.",
          },
          {
            label: "P6 — conclusion",
            text: "I believe in your ability to do something and to help us improve the situation around us. Your quick intervention will save many lives and bring sanity to our community. Thank you for your anticipated response.",
          },
        ],
        closing: "Yours faithfully,",
        name: "",
      },
    },
    {
      id: "model-semiformal-principal",
      kind: "semi-formal",
      title: "Model 6 — Semi-formal: candid views to the principal",
      question:
        "You are about to leave school after spending three years as a student. Write a letter to the principal expressing your candid views on the strengths and weaknesses of the school and giving suggestions for improvement.",
      whyItScores:
        "A tepid tone: respectful but honest. Strengths first, then weaknesses, then suggestions — one idea per paragraph — ending politely without castigating the school.",
      letter: {
        addressLines: ["Masroor Senior Secondary School,", "Old Yundum,", "Kombo North District,", "West Coast Region."],
        date: "20th October, 2019.",
        salutation: "Dear Mr Bayo,",
        paragraphs: [
          {
            label: "P1 — request permission to speak candidly",
            text: "After spending three years in this noble school of great repute, I seek your permission to express my sincere views on the strengths and weaknesses of the school.",
          },
          {
            label: "P2 — strength 1: dedicated teachers",
            text: "Having occupied the post of Head Boy, I can authoritatively figure out the strengths and weaknesses our school has. As it has now come to be widely known that sound education is the bedrock of modern society, the administrators and staff of my great alma mater did not give up in their effort to impart qualitative education in us. Our teachers, as I have seen, are highly dedicated in their effort to bring us to a level of knowledge that will enable us to stand anywhere, in and out of The Gambia, and compete with other students. For this reason, I doff my hat for this great school of ours.",
          },
          {
            label: "P3 — strength 2: teacher–student relationship",
            text: "Worthy of praise also is the commitment of the teachers to building a mutual relationship of love and understanding between them and the students. As an aura of love and understanding is essential for physiological and psychological development, our school has succeeded in making, out of mediocre youths, champions who will contribute positively to society.",
          },
          {
            label: "P4 — strength 3: healthy socialisation",
            text: "The school authority deserves a pat on the back for allowing students of both sexes to intermingle and socialise, with the foresight that this would help the students become participants in building a society that helps one another in spite of sex differences.",
          },
          {
            label: "P5 — weakness 1: indiscipline",
            text: "While giving kudos, I must also give some knocks, so that a few corrections can be made to make our school even better. Our teaching staff have not done too well in allowing the widespread indiscipline to continue, particularly the use of vernacular among students. For instance, when students loiter about the school premises during school hours, the teachers act as if nothing were wrong. This could portray a very bad image of the school in the minds of parents who are considering sending their children to our school.",
          },
          {
            label: "P6 — weakness 2: sports",
            text: "The Sports Department has continued to perform badly. During my three years in this school, there was no time the school did well in the inter-school athletics and football competitions arranged by the Ministry of Youth and Sports. There is also a lack of sporting facilities, such as basketball and volleyball courts.",
          },
          {
            label: "P7 — suggestions",
            text: "For these reasons, I suggest that teachers make sure students on campus always learn to speak English, and that discipline is enforced to the maximum. The Sports Department should also make sure the school does well in subsequent competitions.",
          },
          {
            label: "P8 — conclusion",
            text: "Sir, before I conclude this letter, I wish to reaffirm that my aim is not to castigate the school, but to assess it objectively. Based on my observations, the school is still ranked one of the best in the country. I pray that it continues. Thank you for considering my views.",
          },
        ],
        closing: "Your student,",
        name: "Kawsu Komma (12C2).",
      },
    },
  ],

  // ===================== TEST YOURSELF =====================
  testYourself: [
    "You are in the final year in secondary school. Write a letter to your uncle, who is an influential person in society, telling him what you intend to do next and asking for his assistance.",
    "Write a letter to a friend in another school giving at least three reasons why you support the establishment of private universities in the country.",
    "Write a letter to your brother who has been studying abroad for the past five years, describing at least three ways in which the current economic situation has affected the way of life of your family.",
    "A friend of yours has been absent from school for about a month due to illness. Write a letter to the friend describing some interesting things that have happened in the school during the period and expressing your wish for a quick recovery.",
    "You have received information that your brother, who is schooling in another part of the country, is playing truancy and keeps bad company. Write a letter warning him of the consequences of such behaviour and urging him to turn a new leaf.",
    "You had a quarrel with a very good friend of yours some time ago, and since then both of you have not been on speaking terms. Write a letter expressing your regret at the break in your relationship and your desire for reconciliation.",
    "Your friend in junior school has written to tell you that he has chosen your school for his senior secondary course. Write a reply giving at least three reasons why you support or disagree with his decision.",
    "Your sister is separated from her husband, leaving her children with their father. Write a letter to her pleading that she should return, giving at least three reasons why she should.",
    "You changed school recently and have been at the new school for six weeks. Write a letter to your uncle explaining why you left your former school and describing at least three things you find more interesting in the new school.",
    "A nagging problem in your family has so far defied all solutions. Write a letter to an uncle of yours stating what the problem is and giving reasons why he should intervene.",
  ],
};
