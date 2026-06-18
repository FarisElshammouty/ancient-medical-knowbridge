/* =========================================================================
   Ancient Medical KnowBridge — content data
   Seven knowledge-access forms, each populated from the thesis chapter
   "Catechistic papyri" (Greek medical teaching papyri of Greco-Roman Egypt)
   and bridged to the parallel Arabic tradition.
   ========================================================================= */

const KB_SOURCES = {
  greekAnchor: {
    author: "Oribasius",
    work: "Collectiones medicae",
    source: "Coll. medicae",
    date: "4th c. CE",
    tradition: "Greek"
  },
  arabicAnchor: {
    author: "Ibn al-Bayṭār",
    work: "Kitāb al-Ǧāmiʿ li-mufradāt al-adwiya",
    source: "Leiden Or. 167",
    date: "13th c.",
    tradition: "Arabic"
  }
};

/* The five catechistic papyri studied in the chapter (Table 5). */
const KB_PAPYRI = [
  {
    id: "p-aberd-11",
    sigla: "P. Aberd. 11 (= MP³ 2342)",
    topic: "Ophthalmic catechism — pterygium & its surgery",
    provenance: "Faiyum",
    date: "2nd century",
    summary: "Two damaged fragments of a question-and-answer manual on the pterygium: its definition, its varieties, and the surgical removal using a hook, needle, linen thread and horsehair.",
    forms: ["Q–A", "Definitions", "Recipes", "Lists"]
  },
  {
    id: "p-rossgeorg",
    sigla: "P. Ross.Georg. I 20 (= MP³ 2343)",
    topic: "Ophthalmic catechism — glaucoma, staphyloma, pterygium",
    provenance: "Unknown (likely Faiyum)",
    date: "2nd century",
    summary: "Nine question-and-answer sets across three columns, distinguishing glaucoma from cataract, defining staphyloma 'like a grape', and describing ligation surgery (ἀπόσφιγξις).",
    forms: ["Q–A", "Classifications", "Definitions", "Recipes"]
  },
  {
    id: "p-ct-ybr",
    sigla: "P. Ct Y-BR (Beinecke)",
    topic: "Medical catechism — hydrocephalus",
    provenance: "Arsinoïte nome",
    date: "Late 2nd–early 3rd c.",
    summary: "The only papyrus discussing hydrocephalus: definition, a four-fold classification by where the fluid collects, and aetiology — echoing the Pseudo-Galenic Introductio.",
    forms: ["Q–A", "Classifications", "Definitions"]
  },
  {
    id: "p-genav",
    sigla: "P. Genav. inv. 111 (= MP³ 2373)",
    topic: "Surgical catechism — instruments",
    provenance: "Unknown",
    date: "2nd–3rd c.",
    summary: "A catechism defining surgical instruments, including the βελόνη (needle) — a key witness for the vocabulary of the operating table.",
    forms: ["Q–A", "Definitions", "Lists"]
  },
  {
    id: "p-milvogl",
    sigla: "P. Mil.Vogl. I 15 (= MP³ 2340)",
    topic: "Medical catechism — elephantiasis, apoplexy, sciatica",
    provenance: "Oxyrhynchus",
    date: "Mid 3rd–4th c.",
    summary: "Fragments of a medical codex citing Asclepiades and the Methodists on the causes of three grave chronic diseases — a window onto rival medical schools in the classroom.",
    forms: ["Q–A", "Definitions", "Classifications"]
  }
];

/* The seven access forms. `default: true` marks the card shown on load. */
const KB_FORMS = [
  {
    id: "lists",
    icon: "list",
    title: "Lists",
    cardLines: ["Segmenting knowledge", "Greek & Arabic examples"],
    tagline: "Segmenting knowledge",
    fn: "Segmenting knowledge into discrete, individually retrievable items.",
    analogy: "data chunks / indexed items",
    traditions: "Greek + Arabic",
    exampleLabel: "pharmacological ingredient lists",
    greek: {
      kind: "text",
      lines: [
        "ἄγκιστρον — surgical hook",
        "βελόνη — needle",
        "λίνον — linen thread",
        "τρίχα ἱππείαν — horsehair"
      ],
      caption: "Instruments enumerated for the pterygium operation, P. Aberd. 11."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["مُفْرَدَات الأَدْوِيَة", "الصَّبِر · الأَفْسَنْتِين · الزَّعْفَرَان", "الكَافُور · المُرّ · السَّنَا"],
      caption: "A list of simple drugs (mufradāt), after Ibn al-Bayṭār."
    },
    props: {
      "Ancient form": "Lists",
      "Function": "Segmenting knowledge",
      "Modern analogy": "data chunks / indexed items",
      "Traditions": "Greek + Arabic",
      "Example": "pharmacological ingredient lists"
    },
    source: "P. Aberd. 11 · Ibn al-Bayṭār (illustrative)",
    date: "2nd c. CE",
    tradition: "Greek + Arabic",
    link: "explore.html#lists"
  },
  {
    id: "definitions",
    icon: "quill",
    title: "Headings / Definitions",
    cardLines: ["Term labeling & glosses", "Linked sources"],
    tagline: "Term labelling & glosses",
    fn: "Labelling terms and fixing their meaning with short glosses and definitions.",
    analogy: "glossary / key–value definitions / tooltips",
    traditions: "Greek + Arabic",
    exampleLabel: "opening 'What is …?' definitions",
    greek: {
      kind: "text",
      lines: [
        "Τί ἐστι τὸ πτερύγιον;",
        "Ἔκφυσις ὑμενώδης αὐξανομένη",
        "ἀπὸ τοῦ κανθοῦ.",
        "πτερύγιον · «little wing» (πτέρυξ)"
      ],
      rubricFirst: true,
      caption: "“What is pterygium? — A membranous outgrowth growing from the corner of the eye.” P. Aberd. 11."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["مَا الظُّفْرَة؟", "زِيَادَةٌ غِشَائِيَّةٌ تَنْبُتُ", "فِي زَاوِيَةِ العَيْن."],
      caption: "The same definition glossed in the Arabic ophthalmic tradition (ẓafra)."
    },
    props: {
      "Ancient form": "Headings / Definitions",
      "Function": "Term labelling & glosses",
      "Modern analogy": "glossary / key–value pairs",
      "Traditions": "Greek + Arabic",
      "Example": "etymological & clinical glosses"
    },
    source: "P. Aberd. 11 · P. Ross.Georg. I 20",
    date: "2nd c.",
    tradition: "Greek + Arabic",
    link: "explore.html#definitions"
  },
  {
    id: "classifications",
    icon: "tree",
    title: "Classifications",
    cardLines: ["Hierarchies & taxonomies", "Greek & Arabic examples"],
    tagline: "Hierarchies & taxonomies",
    fn: "Sorting phenomena into types and sub-types by stated criteria.",
    analogy: "taxonomy / decision tree / categories",
    traditions: "Greek + Arabic",
    exampleLabel: "the four types of hydrocephalus",
    greek: {
      kind: "text",
      lines: [
        "Διαφοραὶ τῶν ὑδροκεφάλων· τέσσαρες —",
        "α. μεταξὺ δέρματος & περικρανίου",
        "β. μεταξὺ περικρανίου & ὀστοῦ",
        "γ. μεταξὺ ὀστοῦ & μήνιγγος",
        "δ. μεταξὺ μήνιγγος & ἐγκεφάλου"
      ],
      caption: "Four kinds of hydrocephalus by where the fluid gathers, P. Ct Y-BR — matching Ps.-Galen, Introductio 19."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["مَرَاتِبُ الأَدْوِيَة", "الأُولَى · الثَّانِيَة", "الثَّالِثَة · الرَّابِعَة"],
      caption: "The four ‘degrees’ of a drug’s potency — the Galenic grid inherited by Arabic pharmacology."
    },
    props: {
      "Ancient form": "Classifications",
      "Function": "Hierarchies & taxonomies",
      "Modern analogy": "taxonomy / decision tree",
      "Traditions": "Greek + Arabic",
      "Example": "four types of hydrocephalus"
    },
    source: "P. Ct Y-BR · Ps.-Galen, Introductio 19",
    date: "2nd–3rd c.",
    tradition: "Greek + Arabic",
    link: "explore.html#classifications"
  },
  {
    id: "tables",
    icon: "table",
    title: "Tables",
    cardLines: ["Compare & structure", "Data in parallel · Greek & Arabic tables"],
    tagline: "Compare & structure",
    fn: "Arranging data in parallel rows and columns for direct comparison.",
    analogy: "spreadsheet / relational table",
    traditions: "Greek + Arabic",
    exampleLabel: "concordance of an instrument across papyri",
    greek: {
      kind: "text",
      lines: [
        "βελόνη — the needle, across the papyri:",
        "P. Aberd. 11 · pterygium",
        "P. Ross.Georg. I 20 · staphyloma",
        "P. Giss. Univ. IV · coloboma",
        "P. Genav. inv. 111 · definition"
      ],
      caption: "A concordance table: every appearance of the surgical needle βελόνη in the papyri."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["الدَّوَاء · الطَّبِيعَة · المِقْدَار", "الصَّبِر · حَارّ · دِرْهَم", "الكَافُور · بَارِد · أُوقِيَّة"],
      caption: "A materia-medica table: drug · quality · dose, after the Arabic pharmacopoeias."
    },
    props: {
      "Ancient form": "Tables",
      "Function": "Compare & structure",
      "Modern analogy": "spreadsheet / relational table",
      "Traditions": "Greek + Arabic",
      "Example": "instrument concordance across papyri"
    },
    source: "Thesis concordance tables · Galen",
    date: "2nd–4th c.",
    tradition: "Greek + Arabic",
    link: "explore.html#tables"
  },
  {
    id: "qa",
    icon: "qa",
    title: "Q–A",
    cardLines: ["Prompt / retrieve", "Scholarly dialogues & query formats"],
    tagline: "Prompt / retrieve",
    fn: "Encoding knowledge as question→answer pairs for teaching, memorising and retrieval (κατήχησις · ἐρωταπόκρισις).",
    analogy: "prompt → response · FAQ · flashcards — and how we query an LLM today",
    traditions: "Greek (κατήχησις) + Arabic (masāʾil)",
    exampleLabel: "the catechistic question and its answer",
    flagship: true,
    greek: {
      kind: "text",
      lines: [
        "Τί ἐστι τὸ πτερύγιον;",
        "Ἔκφυσις ὑμενώδης αὐξανομένη ἀπὸ",
        "τοῦ κανθοῦ ἢ σωματοποιουμένη",
        "ἀπὸ τοῦ κερατοειδοῦς χιτῶνος.",
        "Τίνες εἰσὶ διαφοραὶ πτερυγίων;",
        "Διαφέρεται τόπῳ, μεγέθει, σχήματι…"
      ],
      rubricQuestions: true,
      caption: "Question (in red) and answer from the pterygium catechism, P. Aberd. 11."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["مَسَائِل فِي الطِّبّ", "مَا الطِّبّ؟", "عِلْمٌ يُعْرَفُ بِهِ", "أَحْوَالُ بَدَنِ الإِنْسَان."],
      caption: "“What is medicine? — A science by which the states of the human body are known.” Ḥunayn ibn Isḥāq, al-Masāʾil fī al-ṭibb."
    },
    props: {
      "Ancient form": "Q–A (catechism / ἐρωταπόκρισις)",
      "Function": "Prompt → retrieve · teaching & memorising",
      "Modern analogy": "prompt → response · FAQ · flashcards",
      "Traditions": "Greek + Arabic",
      "Example": "‘What is pterygium?’ and its answer"
    },
    source: "P. Aberd. 11 · P. Ross.Georg. I 20 · Oribasius, Collectiones medicae · Ḥunayn, Masāʾil fī al-ṭibb",
    date: "2nd–9th c.",
    tradition: "Greek + Arabic",
    link: "explore.html#qa"
  },
  {
    id: "recipes",
    icon: "mortar",
    title: "Recipes",
    cardLines: ["Procedural knowledge", "Formulas & workflows · Linked sources"],
    tagline: "Procedural knowledge",
    fn: "Step-by-step procedures — surgical operations and compound-drug formulas.",
    analogy: "procedure / algorithm / workflow",
    traditions: "Greek + Arabic",
    exampleLabel: "the pterygium operation, step by step",
    greek: {
      kind: "text",
      lines: [
        "Μετὰ τὸν καθέδριον ὄντα τὸν πάσχοντα,",
        "διαστείλαντες τὰ βλέφαρα,",
        "τὸ πτερύγιον ἀγκιστρίῳ διεκφανοῦμεν,",
        "βελόνην δὲ λίνον καὶ τρίχα ἱππείαν",
        "ἔχουσαν…"
      ],
      caption: "“With the patient seated, the eyelids parted, we lift the pterygium with a hook; a needle bearing linen and horsehair…” P. Aberd. 11."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["الأَقْرَابَاذِين", "يُؤْخَذُ مِنَ الصَّبِرِ جُزْء", "وَمِنَ المُرِّ جُزْء", "يُدَقُّ وَيُعْجَنُ بِالعَسَل."],
      caption: "A compound-drug recipe from the aqrābādhīn (pharmacopoeia) genre."
    },
    props: {
      "Ancient form": "Recipes",
      "Function": "Procedural knowledge",
      "Modern analogy": "procedure / algorithm / workflow",
      "Traditions": "Greek + Arabic",
      "Example": "surgical & pharmacological procedures"
    },
    source: "P. Aberd. 11 · Paul of Aegina · Aëtius of Amida",
    date: "2nd–7th c.",
    tradition: "Greek + Arabic",
    link: "explore.html#recipes"
  },
  {
    id: "diagrams",
    icon: "branch",
    title: "Diagrams / Branching Schemes",
    cardLines: ["Train reasoning & map relations", "Trees, flows & decision paths"],
    tagline: "Train reasoning & map relations",
    fn: "Visual schemata, decision paths and branching reasoning that map relations and procedures.",
    analogy: "flowchart / decision tree / mind-map",
    traditions: "Greek + Arabic",
    exampleLabel: "the hypospathismos schematic",
    wide: true,
    greek: {
      kind: "image",
      src: "assets/manuscripts/img02.jpg",
      caption: "Schematic of the hypospathismos — the three forehead incisions for chronic eye disease."
    },
    arabic: {
      kind: "text",
      rtl: true,
      lines: ["شَجَرَةُ الطِّبّ", "الأَمْرَاض ← الأَسْبَاب", "← العَلَامَات ← العِلَاج"],
      caption: "A branching ‘tree of medicine’: disease → cause → sign → cure."
    },
    props: {
      "Ancient form": "Diagrams / Branching schemes",
      "Function": "Train reasoning & map relations",
      "Modern analogy": "flowchart / decision tree",
      "Traditions": "Greek + Arabic",
      "Example": "surgical schemata & decision paths"
    },
    source: "Thesis figures · Oribasius · Paul of Aegina",
    date: "2nd–7th c.",
    tradition: "Greek + Arabic",
    link: "explore.html#diagrams"
  }
];

if (typeof window !== "undefined") {
  window.KB_DATA = { forms: KB_FORMS, sources: KB_SOURCES, papyri: KB_PAPYRI };
}
