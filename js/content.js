/* =====================================================================
   CONTENT — edit everything about the site here.
   Text can be a plain string, or { en: "...", de: "..." } for both languages.
   Links with an empty url are hidden automatically.
   ===================================================================== */
window.SITE = {
  name: "Marvel C. Chinedozie",
  firstName: "Marvel",
  lastName: "Chinedozie",
  photo: "assets/profile.jpg",
  role: { en: "Hardware & Software Engineer", de: "Hardware- & Software-Engineer" },
  degree: { en: "B.Sc. Computer Engineering (Informatik Technische Systeme) · HAW Hamburg",
            de: "B.Sc. Informatik Technische Systeme · HAW Hamburg" },
  tagline: { en: "From Assembler, C and logic gates up to Java, Python and the cloud: I like knowing how a system works all the way down.",
             de: "Von Assembler, C und Logikgattern bis zu Java, Python und der Cloud: Ich will verstehen, wie ein System bis ganz unten funktioniert." },
  status: { en: "Working student · Hardware & Software", de: "Werkstudent · Hardware & Software" },
  location: "Hamburg, Germany",
  timezone: "Europe/Berlin",
  email: "marvelouschinedu12@gmail.com",
  cv: "Marvel_Chinedozie_Lebenslauf.pdf",   // the PDF in the same folder as index.html
  githubUser: "Marvelchinedozie",                // live repositories are loaded from this account

  socials: [
    { label: "LinkedIn",  short: "in", handle: "/in/das-marvels", url: "https://www.linkedin.com/in/das-marvels" },
    { label: "GitHub",    short: "gh", handle: "@Marvelchinedozie", url: "https://github.com/Marvelchinedozie" },
    { label: "Instagram", short: "ig", handle: "@das_marvels",    url: "https://www.instagram.com/das_marvels" },
    { label: "X",         short: "x",  handle: "", url: "" },
    { label: "YouTube",   short: "yt", handle: "", url: "" }
  ],

  datasheet: [
    [{ en: "Role", de: "Rolle" }, { en: "Working student, Hardware & Software", de: "Werkstudent Hardware & Software" }],
    [{ en: "Study", de: "Studium" }, { en: "B.Sc. Informatik Technische Systeme", de: "B.Sc. Informatik Technische Systeme" }],
    [{ en: "University", de: "Hochschule" }, "HAW Hamburg · 2025 →"],
    [{ en: "Focus", de: "Fokus" }, "Hardware · Systems · Software · Cloud"],
    [{ en: "Code", de: "Code" }, "C · Java · Assembler · Python · JavaScript"],
    [{ en: "Cloud", de: "Cloud" }, { en: "AWS (SAA-C03 in progress)", de: "AWS (SAA-C03 in Arbeit)" }],
    [{ en: "Speaks", de: "Sprachen" }, { en: "English · Igbo · German (C1)", de: "Englisch · Igbo · Deutsch (C1)" }],
    [{ en: "Location", de: "Standort" }, "{location}"],
    [{ en: "Local time", de: "Ortszeit" }, "{time}"]
  ],

  about: {
    en: [
      "I'm a computer engineering student at HAW Hamburg, working my way across the whole stack: from registers and circuits to applications and cloud infrastructure.",
      "Before university I built web front-ends as an intern at HiiT Plc in Lagos, then spent eight months as a mechatronics intern at Peter Schilling Metallprofile in Hamburg, where software meets motors, sensors and real machines.",
      "That mix is what I enjoy most: understanding a problem on the hardware side and solving it cleanly in software. Today I put that into practice as a working student in hardware and software, alongside my studies, while working towards the AWS Solutions Architect Associate certification."
    ],
    de: [
      "Ich studiere Informatik Technische Systeme an der HAW Hamburg und arbeite mich durch den gesamten Stack: von Registern und Schaltungen bis zu Anwendungen und Cloud-Infrastruktur.",
      "Vor dem Studium habe ich als Praktikant bei HiiT Plc in Lagos Web-Frontends entwickelt und danach acht Monate als Mechatroniker-Praktikant bei Peter Schilling Metallprofile in Hamburg gearbeitet, wo Software auf Motoren, Sensoren und echte Maschinen trifft.",
      "Genau diese Mischung macht mir am meisten Spaß: ein Problem auf der Hardware-Seite verstehen und es sauber in Software lösen. Heute setze ich das neben dem Studium als Werkstudent im Bereich Hardware und Software um und bereite mich zusätzlich auf die Zertifizierung AWS Solutions Architect Associate vor."
    ]
  },

  disciplines: [
    { ref: "HW", title: { en: "Hardware & low level", de: "Hardware & Low Level" },
      text: { en: "C and Assembler, digital systems and computer architecture at HAW, plus hands-on mechatronics from industry.",
              de: "C und Assembler, Digitaltechnik und Rechnerarchitektur an der HAW, dazu praktische Mechatronik aus der Industrie." } },
    { ref: "SW", title: { en: "Software development", de: "Softwareentwicklung" },
      text: { en: "Java and Python, algorithms and data structures, and web front-ends with HTML, CSS and JavaScript.",
              de: "Java und Python, Algorithmen und Datenstrukturen sowie Web-Frontends mit HTML, CSS und JavaScript." } },
    { ref: "IT", title: { en: "Cloud & infrastructure", de: "Cloud & Infrastruktur" },
      text: { en: "AWS architecture, Windows Server, system administration and IT support.",
              de: "AWS-Architektur, Windows Server, Systemverwaltung und IT-Support." } }
  ],

  skillClusters: [
    { id: "hw", label: { en: "Hardware", de: "Hardware" }, cx: 170, cy: 245, r: 100, rot: 0.6 },
    { id: "sw", label: { en: "Software", de: "Software" }, cx: 470, cy: 215, r: 135, rot: 0.1 },
    { id: "it", label: { en: "Cloud & IT", de: "Cloud & IT" }, cx: 790, cy: 255, r: 115, rot: 0 }
  ],
  // level: 1–5
  skills: [
    { name: "Assembler", cluster: "hw", level: 5, note: { en: "Low-level programming: registers, memory, instruction sets.", de: "Hardwarenahe Programmierung: Register, Speicher, Befehlssätze." } },
    { name: "C", cluster: "hw", level: 4, note: { en: "Hardware-near programming: pointers, memory, bit manipulation and microcontroller code.", de: "Hardwarenahe Programmierung: Zeiger, Speicher, Bitmanipulation und Mikrocontroller-Code." } },
    { name: { en: "Mechatronics", de: "Mechatronik" }, cluster: "hw", level: 3, note: { en: "Eight-month industrial internship with machines, sensors and drives.", de: "Achtmonatiges Industriepraktikum mit Maschinen, Sensorik und Antrieben." } },
    { name: { en: "Digital systems", de: "Digitaltechnik" }, cluster: "hw", level: 2, note: { en: "Logic, circuits and computer architecture, in progress at HAW.", de: "Logik, Schaltungen und Rechnerarchitektur, laufend an der HAW." } },
    { name: { en: "Electrical basics", de: "E-Technik Grundlagen" }, cluster: "hw", level: 2, note: { en: "Fundamentals of electrical engineering, in progress at HAW.", de: "Grundlagen der Elektrotechnik, laufend an der HAW." } },

    { name: "Java", cluster: "sw", level: 5, note: { en: "Main language; University of Helsinki Java Programming I & II.", de: "Hauptsprache; Java Programming I & II der University of Helsinki." } },
    { name: "Python", cluster: "sw", level: 4, note: { en: "Scripting and automation; ReDi School course.", de: "Skripte und Automatisierung; Kurs an der ReDi School." } },
    { name: "JavaScript", cluster: "sw", level: 3, note: { en: "Interactive front-ends; used at HiiT Plc and ReDi School.", de: "Interaktive Frontends; eingesetzt bei HiiT Plc und an der ReDi School." } },
    { name: "HTML5 / CSS", cluster: "sw", level: 4, note: { en: "Responsive layouts, including this website.", de: "Responsive Layouts, auch diese Website." } },
    { name: { en: "Algorithms & DS", de: "Algorithmen & DS" }, cluster: "sw", level: 4, note: { en: "Algorithms, complexity, data structures, programming methodology.", de: "Algorithmen, Komplexität, Datenstrukturen, Programmiermethodik." } },
    { name: "Git / GitHub / GitLab", cluster: "sw", level: 5, note: { en: "Daily version control; Google certificate.", de: "Tägliche Versionskontrolle; Google-Zertifikat." } },
    { name: "LaTeX", cluster: "sw", level: 3, note: { en: "Technical documents and reports.", de: "Technische Dokumente und Berichte." } },

    { name: "AWS", cluster: "it", level: 3, note: { en: "Preparing for Solutions Architect Associate (SAA-C03).", de: "Vorbereitung auf Solutions Architect Associate (SAA-C03)." } },
    { name: "Windows Server", cluster: "it", level: 3, note: { en: "Server roles, users and basic administration.", de: "Serverrollen, Benutzer und grundlegende Administration." } },
    { name: "IT Support", cluster: "it", level: 4, note: { en: "Troubleshooting and helping users; Google Digital Skills.", de: "Fehlerbehebung und Anwenderbetreuung; Google Digital Skills." } },
    { name: "MS Office", cluster: "it", level: 5, note: { en: "Excel, PowerPoint and Word.", de: "Excel, PowerPoint und Word." } },
    { name: "Draw.io", cluster: "it", level: 4, note: { en: "Architecture and network diagrams.", de: "Architektur- und Netzwerkdiagramme." } },
    { name: "macOS", cluster: "it", level: 4, note: { en: "Daily driver and dev environment.", de: "Tägliches System und Entwicklungsumgebung." } }
  ],
  // dashed links between disciplines (use the English skill names)
  crossLinks: [
    ["Assembler", "Algorithms & DS"], ["C", "Java"], ["Digital systems", "Java"], ["Mechatronics", "IT Support"],
    ["Python", "AWS"], ["Git / GitHub / GitLab", "AWS"], ["HTML5 / CSS", "Draw.io"]
  ],
  tools: ["Adobe Illustrator", "Microsoft Excel", "Microsoft PowerPoint", "Draw.io", "LaTeX"],

  // Hand-picked projects (shown before the live GitHub repos). Add your own:
  // { title: "...", category: "hardware|software|cloud", year: 2026, summary: {en,de}, tags: [...], url: "https://..." }
  projects: [
    { title: "PM2-Mediathek", category: "software", year: 2026,
      summary: { en: "Media library management system with a Swing GUI: select a customer, lend out CDs, DVDs and video games, and handle returns in a separate view. Built for Programmiermethodik 2 at HAW Hamburg.",
                 de: "Mediathek-Verwaltung mit Swing-Oberfläche: Kunden auswählen, CDs, DVDs und Videospiele ausleihen und Rückgaben in einer eigenen Ansicht abwickeln. Entstanden im Kurs Programmiermethodik 2 an der HAW Hamburg." },
      tags: ["Java", "Swing", "JUnit", "OOP"], url: "https://github.com/Marvelchinedozie/mediathek-java" },
    { title: { en: "This website", de: "Diese Website" }, category: "software", year: 2026,
      summary: { en: "Personal site with a live neural-cosmos background, a skills constellation, an EN/DE switch and a built-in terminal.",
                 de: "Persönliche Website mit Neural-Cosmos-Hintergrund, Skill-Konstellation, EN/DE-Umschaltung und eingebautem Terminal." },
      tags: ["HTML", "CSS", "JavaScript", "Canvas"], url: "https://github.com/Marvelchinedozie/marvelchinedozie.github.io" }
  ],

  experience: [
    { period: "", periodEnd: { en: "Present", de: "Aktuell" }, kind: { en: "Work", de: "Praxis" }, now: true,
      role: { en: "Working Student, Hardware & Software", de: "Werkstudent Hardware & Software" },
      org: "Hamburg",
      points: { en: ["Working across hardware and software alongside my studies."],
                de: ["Tätigkeit im Bereich Hardware und Software neben dem Studium."] } },
    { period: "10.2025 — " , periodEnd: { en: "Present", de: "Heute" }, kind: { en: "Education", de: "Studium" }, now: true,
      role: { en: "B.Sc. Computer Engineering (Informatik Technische Systeme)", de: "B.Sc. Informatik Technische Systeme" },
      org: "Hochschule für Angewandte Wissenschaften (HAW) · Hamburg",
      points: { en: ["Hardware-oriented computer science: digital systems, computer architecture, embedded and software engineering."],
                de: ["Hardwarenahe Informatik: Digitaltechnik, Rechnerarchitektur, Embedded Systems und Softwaretechnik."] } },
    { period: "02.2025 — 10.2025", kind: { en: "Work", de: "Praxis" },
      role: { en: "Mechatronics Intern", de: "Praktikum als Mechatroniker" },
      org: "Peter Schilling Metallprofile · Hamburg",
      points: { en: ["Hands-on work with the mechanical, electrical and control systems of metal-profile production."],
                de: ["Praktische Arbeit an mechanischen, elektrischen und steuerungstechnischen Systemen in der Metallprofilfertigung."] } },
    { period: "08.2022 — 11.2022", kind: { en: "Education", de: "Bildung" },
      role: { en: "German language course (C1.2)", de: "Deutschkurs (C1.2)" },
      org: "Technische Universität Clausthal · Clausthal-Zellerfeld",
      points: { en: ["German at C1 level."], de: ["Deutsch auf C1-Niveau."] } },
    { period: "02.2021 — 12.2021", kind: { en: "Work", de: "Praxis" },
      role: { en: "Front-end Developer Intern", de: "Praktikum als Frontend-Entwickler" },
      org: "HiiT Plc · Lagos, Nigeria",
      points: { en: ["Built and maintained web interfaces with HTML, CSS and JavaScript."],
                de: ["Entwicklung und Pflege von Web-Oberflächen mit HTML, CSS und JavaScript."] } },
    { period: "09.2015 — 06.2020", kind: { en: "Education", de: "Schule" },
      role: { en: "Senior School Certificate (WAEC SSCE)", de: "(West African) SSCE (Realschulabschluss)" },
      org: "Bim-Nic College · Lagos, Nigeria",
      points: { en: ["West African Examination Council certificate, 06.2020."], de: ["West African Examination Council, 06.2020."] } }
  ],

  certificates: [
    { title: "AWS Certified Solutions Architect – Associate (SAA-C03)", issuer: "Amazon Web Services · Udemy", date: { en: "11.2023 — in progress", de: "11.2023 — laufend" }, tag: "Cloud", progress: true },
    { title: "Java Programming I & II", issuer: "University of Helsinki · mooc.fi", date: "09.2025 — 06.2026", tag: "Java" },
    { title: { en: "Computer Science Foundations", de: "Computerverwaltung" }, issuer: { en: "Algorithms · complexity · language design · data structures", de: "Algorithmen · Komplexität · Sprachdesign · Datenstrukturen" }, date: "09.2025", tag: "CS" },
    { title: "JavaScript & Python", issuer: "ReDi School of Digital Integration · Hamburg", date: "01.2023 — 06.2023", tag: "Code" },
    { title: "Google Digital Skills for Africa", issuer: { en: "Code basics · tech support · IT infrastructure", de: "Code-Grundlagen · Tech-Support · IT-Infrastruktur" }, date: "12.2022", tag: "IT" },
    { title: "Introduction to Git and GitHub", issuer: "Google · Coursera", date: "10.2022 — 11.2022", tag: "Git" }
  ],

  languages: [
    { name: { en: "English", de: "Englisch" }, level: 5, label: { en: "Fluent", de: "Fließend" } },
    { name: "Igbo", level: 5, label: { en: "Native", de: "Muttersprache" } },
    { name: { en: "German", de: "Deutsch" }, level: 4, label: "C1" }
  ],

  interests: [
    { icon: "</>", name: { en: "Software development", de: "Softwareentwicklung" } },
    { icon: "▦",  name: { en: "IT infrastructure", de: "IT-Infrastruktur" } },
    { icon: "☁",  name: { en: "Cloud computing", de: "Cloud Computing" } },
    { icon: "◉",  name: { en: "Photography", de: "Fotografie" }, link: "Instagram" },
    { icon: "✈",  name: { en: "Travel", de: "Reisen" } },
    { icon: "♥",  name: { en: "Volunteering", de: "Freiwilliger Dienst" } }
  ]
};
