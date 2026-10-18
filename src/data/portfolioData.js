export const portfolioData = {
  personal: {
    name: "Shivraj Patil",
    role: "Computer Engineering Student & Full-Stack Developer",
    college: "D. Y. Patil College of Engineering, Akurdi (DYPCOE)",
    degree: "Bachelor of Engineering in Computer Engineering (2023 - 2027)",
    location: "Pune, Maharashtra, India",
    phone: "(+91) 956-146-5920",
    rawPhone: "+919561465920",
    email: "patil.shivraj2005@gmail.com",
    github: "https://github.com/Shivraj-29",
    linkedin: "https://www.linkedin.com/in/shivraj-patil-784b8827b/",
    avatar: "/profile.jpg",
    status: "Software Developer Intern @ Bajaj Finserv (Ongoing)",
    summary:
      "Computer Engineering student with hands-on experience in full-stack development, backend engineering, and AI-powered applications. Proficient in Java, Python, JavaScript, React.js, Node.js, and FastAPI, with expertise in building RESTful APIs, database-driven applications, and deploying solutions on AWS. Strong foundation in software development, problem-solving, and emerging AI technologies.",
    aboutDetailed: [
      "I am a passionate Computer Engineering undergraduate at D. Y. Patil College of Engineering, Akurdi, Pune (DYPCOE) with an exceptional academic record of 9.1 / 10.0 CGPA.",
      "Currently, I am working as a Software Developer Intern at Bajaj Finserv. Previously, I completed internships at Genz Infosystem and EduSkills Academy, delivering production-grade features in logistics operations, backend APIs, and Java full-stack enterprise architectures.",
      "My core technical expertise spans scalable full-stack web applications, advanced multimodal RAG pipelines (DocRAG), cloud infrastructure (AWS EC2, RDS, Docker), and AI integrations. I have solved 150+ coding challenges on LeetCode and GeeksforGeeks, and hold an industry certification in Oracle Generative AI, LLMs, and RAG architectures."
    ],
    stats: [
      { label: "Engineering CGPA", value: "9.1 / 10", sub: "DYPCOE Akurdi Top Tier" },
      { label: "MHT-CET Merit", value: "94.8 %ile", sub: "State Entrance Exam" },
      { label: "Problems Solved", value: "150+", sub: "LeetCode & GeeksforGeeks" },
      { label: "Internships", value: "3", sub: "Bajaj Finserv (Ongoing), Genz & EduSkills" },
      { label: "Key Projects", value: "4+", sub: "DocRAG, Recruitment, AWS & AI" }
    ]
  },

  education: [
    {
      institution: "D. Y. Patil College of Engineering, Akurdi",
      shortName: "DYPCOE Akurdi",
      degree: "Bachelor of Engineering in Computer Engineering",
      duration: "2023 – 2027",
      grade: "CGPA: 9.1 / 10.0",
      isTopGrade: true,
      badge: "Current Degree",
      location: "Pune, Maharashtra",
      description:
        "Pursuing comprehensive computer engineering curriculum emphasizing core computer science fundamentals, algorithm design, cloud computing, and advanced software engineering methodologies.",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ],
      highlights: [
        "Consistently maintained an outstanding academic CGPA of 9.1/10.0",
        "Actively participated in DYPCOE Mini Project Exhibition and team hackathons",
        "Built multiple production-ready full-stack, cloud-native, and AI/RAG applications"
      ]
    },
    {
      institution: "Higher Secondary Certificate (HSC)",
      shortName: "Class 12th (Science)",
      degree: "Higher Secondary Certificate",
      duration: "Completed in 2023",
      grade: "73.33% | MHT-CET: 94.8 Percentile",
      isTopGrade: false,
      badge: "94.8%ile MHT-CET",
      location: "Maharashtra State Board",
      description:
        "Rigorous science curriculum with focus on Physics, Chemistry, and Mathematics, qualifying through competitive entrance examinations with top percentiles.",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      highlights: [
        "Scored 94.8 percentile in Maharashtra State Common Entrance Test (MHT-CET)",
        "Awarded Higher Secondary Certificate with 73.33% aggregate"
      ]
    },
    {
      institution: "Secondary School Certificate (SSC)",
      shortName: "Class 10th",
      degree: "Secondary School Certificate",
      duration: "Completed in 2021",
      grade: "74.5%",
      isTopGrade: false,
      badge: "Distinction",
      location: "Maharashtra State Board",
      description:
        "Completed foundational secondary education covering general sciences, mathematics, and languages with high academic distinction.",
      coursework: ["General Mathematics", "Science & Technology", "Social Sciences", "English"],
      highlights: [
        "Strong quantitative and analytical foundation with 74.5% aggregate"
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "ai_rag",
        title: "AI, RAG & LLMs",
        iconName: "Cpu",
        color: "purple",
        skills: [
          { name: "RAG (Retrieval-Augmented Gen)", level: 95, tag: "Chunking, Embeddings, Ingestion, Grounding" },
          { name: "ChromaDB (Vector Database)", level: 92, tag: "Persistent Vector Store, Cosine Distance" },
          { name: "Hybrid Search (BM25 + Dense)", level: 90, tag: "Reciprocal Rank Fusion (RRF), Reranking" },
          { name: "Google Gemini Vision API", level: 90, tag: "Multimodal Image Captioning, Document OCR" },
          { name: "Sentence Transformers", level: 88, tag: "all-MiniLM-L6-v2, Local Embeddings" },
          { name: "Groq API & LLM Streaming", level: 92, tag: "High-speed Inference, Query Rewriting" },
          { name: "Document Parsing (PyMuPDF)", level: 90, tag: "PDF Extraction, python-docx, OCR" }
        ]
      },
      {
        id: "programming",
        title: "Programming",
        iconName: "Code2",
        color: "blue",
        skills: [
          { name: "Java", level: 90, tag: "Core, OOP, Collections, Backend" },
          { name: "JavaScript", level: 92, tag: "ES6+, Async/Await, DOM, V8" },
          { name: "Python", level: 92, tag: "FastAPI, AI/LLMs, RAG, Automation" },
          { name: "SQL", level: 85, tag: "Complex Queries, Joins, Indexing" }
        ]
      },
      {
        id: "frontend",
        title: "Frontend",
        iconName: "Layout",
        color: "indigo",
        skills: [
          { name: "React.js", level: 94, tag: "Hooks, Context, SPAs, Component Design" },
          { name: "Next.js", level: 84, tag: "SSR, App Router, Fullstack Features" },
          { name: "Tailwind CSS", level: 95, tag: "Utility-first, Responsive UI, Glassmorphism" },
          { name: "HTML5 & CSS3", level: 95, tag: "Semantic markup, Flexbox, Grid, Animations" },
          { name: "Responsive Web Design", level: 92, tag: "Mobile-first, Adaptive UX" }
        ]
      },
      {
        id: "backend",
        title: "Backend",
        iconName: "Server",
        color: "emerald",
        skills: [
          { name: "FastAPI", level: 92, tag: "Asynchronous APIs, BackgroundTasks, Pydantic, Streaming" },
          { name: "Node.js", level: 90, tag: "Runtime, Event-driven, Async I/O" },
          { name: "Express.js", level: 92, tag: "Routing, Middlewares, RESTful Architecture" },
          { name: "REST API Development", level: 94, tag: "Clean Endpoints, CRUD, Error Handling" },
          { name: "JWT Authentication", level: 90, tag: "Stateless Auth, Refresh Tokens, RBAC" },
          { name: "Backend Development", level: 88, tag: "Scalability, Performance Optimization" }
        ]
      },
      {
        id: "databases",
        title: "Databases",
        iconName: "Database",
        color: "amber",
        skills: [
          { name: "ChromaDB", level: 92, tag: "Vector Indexing, Semantic Similarity, Embeddings" },
          { name: "MongoDB", level: 90, tag: "NoSQL, Mongoose ODM, Aggregations" },
          { name: "PostgreSQL", level: 85, tag: "Relational, ACID, Complex Joins" },
          { name: "MySQL", level: 82, tag: "Relational Schema, Foreign Keys" },
          { name: "SQLModel", level: 80, tag: "FastAPI ORM Integration" },
          { name: "CRUD Operations", level: 95, tag: "High-performance Data Operations" }
        ]
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        iconName: "Cloud",
        color: "purple",
        skills: [
          { name: "AWS (EC2, RDS, S3)", level: 84, tag: "Compute, Managed Databases, Object Storage" },
          { name: "Docker", level: 82, tag: "Containerization, Multi-stage builds" },
          { name: "Cloud Deployment", level: 88, tag: "Continuous Integration, Production Hosting" },
          { name: "Vercel & Render", level: 90, tag: "Fast Edge Deployment & PaaS" },
          { name: "Git & GitHub", level: 94, tag: "Branching, Collaboration, Version Control" }
        ]
      },
      {
        id: "corecs",
        title: "Core CS",
        iconName: "Cpu",
        color: "rose",
        skills: [
          { name: "Data Structures & Algorithms", level: 90, tag: "Arrays, Trees, Graphs, DP (150+ Solved)" },
          { name: "OOP (Object-Oriented)", level: 92, tag: "Polymorphism, Inheritance, Encapsulation" },
          { name: "DBMS", level: 88, tag: "Transactions, Concurrency, Normalization" },
          { name: "Operating Systems", level: 84, tag: "Processes, Threads, Memory Mgmt" },
          { name: "Computer Networks", level: 82, tag: "TCP/IP, HTTP/S, DNS, Sockets" }
        ]
      },
      {
        id: "tools",
        title: "Tools",
        iconName: "Terminal",
        color: "cyan",
        skills: [
          { name: "Postman", level: 92, tag: "API Testing, Automated Collections, Mocking" },
          { name: "MongoDB Atlas", level: 88, tag: "Cloud Cluster Configuration, Indexes" },
          { name: "VS Code", level: 96, tag: "Primary Development Environment, Debugging" }
        ]
      }
    ]
  },

  experience: [
    {
      company: "Bajaj Finserv",
      role: "Software Developer Intern",
      period: "October 2026 – Present",
      type: "Internship (Ongoing)",
      location: "Pune, India",
      status: "Currently Active Internship",
      badgeColor: "blue",
      isCurrent: true,
      summary:
        "Currently working as a Software Developer Intern at Bajaj Finserv, contributing to enterprise financial software engineering, scalable backend systems, and automated workflows.",
      bullets: [
        "Contributing to software development and backend systems supporting financial services and digital enterprise workflows.",
        "Collaborating with engineering teams to design, optimize, and maintain robust API services and internal developer tooling.",
        "Gaining practical industry experience in financial technology compliance, high-volume transactional systems, and agile engineering workflows."
      ],
      skillsUsed: ["Software Development", "Backend Engineering", "REST APIs", "Enterprise Systems", "Fintech Workflows", "Git"]
    },
    {
      company: "Genz Infosystem",
      role: "Software Developer Intern",
      period: "June 2026 – September 2026",
      type: "Internship",
      location: "Pune, India",
      status: "Completed Internship",
      badgeColor: "indigo",
      isCurrent: false,
      summary:
        "Contributed to website development and backend operations, supporting software solutions for logistics-related business processes.",
      bullets: [
        "Contributed to website development and backend operations, supporting the development and maintenance of software solutions for logistics-related business processes.",
        "Collaborated on development tasks, translating operational requirements into functional features while gaining hands-on experience in software development workflows.",
        "Engineered reliable API endpoints and participated in code reviews, testing, and continuous deployment workflows."
      ],
      skillsUsed: ["Node.js", "React.js", "Express.js", "REST APIs", "Logistics Systems", "Git"]
    },
    {
      company: "EduSkills Academy",
      role: "Java Full Stack Developer Intern",
      period: "January 2026 – March 2026",
      type: "Internship",
      location: "Pune, India (Hybrid)",
      status: "10-Week Project-Based Program",
      badgeColor: "emerald",
      isCurrent: false,
      summary:
        "Completed a 10-week, project-based internship focused on Java full-stack development, gaining hands-on experience in enterprise backend engineering.",
      bullets: [
        "Completed a 10-week, project-based internship focused on Java full-stack development, gaining hands-on experience in REST API development, backend programming, CRUD operations, and database integration.",
        "Implemented secure and scalable backend business logic, integrating relational database management with front-facing web views.",
        "Strengthened practical understanding of MVC architecture, data persistence layers, and software development lifecycles."
      ],
      skillsUsed: ["Java", "Full Stack Development", "REST API Development", "CRUD Operations", "Database Integration", "SQL"]
    }
  ],

  projects: [
    {
      id: "doc-rag",
      title: "DocRAG – Multimodal RAG over Large PDF & Word Documents",
      tagline: "Hybrid search (BM25 + ChromaDB) with multimodal Gemini Vision and Groq LLM streaming",
      year: "2026",
      featured: true,
      category: "AI & GenAI",
      accent: "from-purple-500 via-indigo-600 to-cyan-500",
      tech: [
        "Python",
        "FastAPI",
        "React (Vite)",
        "ChromaDB",
        "Groq API",
        "Google Gemini Vision",
        "BM25",
        "Sentence-Transformers"
      ],
      bullets: [
        "Engineered an advanced multimodal Retrieval-Augmented Generation (RAG) platform capable of ingesting large 1000+ page PDF and Word documents with real-time streaming answers.",
        "Implemented hybrid retrieval combining dense vector embeddings (all-MiniLM-L6-v2 in ChromaDB) and sparse BM25 keyword search, fused via Reciprocal Rank Fusion (RRF) and reranked using Groq LLM.",
        "Integrated Google Gemini Vision API for automatic image captioning and OCR on scanned document pages, enabling deep multimodal question-answering over charts, figures, and tables.",
        "Designed code-aware chunking separating code blocks from narrative text, interactive PDF viewer with clickable page citations, and SHA-256 duplicate upload prevention.",
        "Built a reactive streaming UI in React (Vite) with syntax-highlighted code blocks, Markdown formatting, and background ingestion progress bars."
      ],
      liveDemoUrl: "https://github.com/Shivraj-29/DocRAG",
      githubUrl: "https://github.com/Shivraj-29/DocRAG",
      hasLiveDemo: true,
      demoLabel: "GitHub Repo & Code"
    },
    {
      id: "job-portal",
      title: "Job Portal – Full-Stack Recruitment Platform",
      tagline: "Comprehensive recruitment ecosystem for recruiters and job seekers",
      year: "2026",
      featured: true,
      category: "Full-Stack",
      accent: "from-blue-500 to-indigo-600",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
      bullets: [
        "Developed a full-stack recruitment platform with role-based access for job seekers and recruiters, enabling seamless job posting, searching, filtering, resume uploads, and application management.",
        "Implemented secure JWT authentication, RESTful APIs, recruiter dashboards, and MongoDB integration to efficiently manage user profiles, job listings, and applications through a responsive and user-friendly interface.",
        "Engineered real-time application status tracking and granular filters by experience, salary, and job role."
      ],
      liveDemoUrl: "https://job-portal-ivory-iota.vercel.app/",
      githubUrl: "https://github.com/Shivraj-29/Job-portal",
      hasLiveDemo: true,
      demoLabel: "Live Demo"
    },
    {
      id: "smart-link-hub",
      title: "Smart Link Hub – Dynamic Link Management & Analytics Platform",
      tagline: "Rule-based smart URL routing with real-time analytics deployed on AWS",
      year: "2026",
      featured: true,
      category: "Cloud & DevOps",
      accent: "from-emerald-500 to-teal-600",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "AWS (EC2, RDS)"],
      bullets: [
        "Built a dynamic link management platform for creating personalized link pages with configurable time-, device-, and location-based routing rules, enabling customized user experiences and intelligent link redirection.",
        "Developed click-tracking analytics and secure authentication, capturing user engagement metrics with geographic and device breakdowns.",
        "Deployed the application in production using AWS EC2 and PostgreSQL on RDS with RESTful backend APIs for reliable data management."
      ],
      liveDemoUrl: "https://drive.google.com/drive/folders/19rlb1sbVwviBv2g9RLXAo3nFoNUuom58",
      githubUrl: "https://github.com/Shivraj-29/Smart-Link-Hub",
      hasLiveDemo: true,
      demoLabel: "AWS Deploy Demo"
    },
    {
      id: "recap-ai",
      title: "Recap – AI-Powered Meeting & Lecture Intelligence Platform",
      tagline: "Whisper audio transcription, LLM meeting summaries, and interactive context Q&A",
      year: "2026",
      featured: true,
      category: "AI & GenAI",
      accent: "from-purple-500 to-pink-600",
      tech: ["Python", "FastAPI", "Next.js", "TypeScript", "Whisper", "Groq API", "SQLModel", "Docker"],
      bullets: [
        "Developed an AI-powered platform using the Groq API with the Whisper model to transcribe audio recordings and generate concise summaries, key insights, and actionable items using LLMs.",
        "Integrated context-aware transcript Q&A and asynchronous processing using FastAPI BackgroundTasks and status polling, enabling efficient task execution and streamlined application management.",
        "Encapsulated backend and database operations into Docker containers for reliable cross-environment deployment."
      ],
      liveDemoUrl: "https://recap-ai-gules.vercel.app/",
      githubUrl: "https://github.com/Shivraj-29/Recap-ai",
      hasLiveDemo: true,
      demoLabel: "Live Demo"
    }
  ],

  certifications: [
    {
      title: "Oracle – Generative AI, LLMs, RAG & AI Agents",
      issuer: "Oracle",
      year: "2026",
      badge: "Industry Certified",
      icon: "Award",
      description:
        "Comprehensive certification in generative artificial intelligence, LLM fine-tuning and prompting, Retrieval-Augmented Generation (RAG) pipelines, and autonomous AI agents."
    }
  ],

  extracurriculars: [
    {
      title: "Mini Project Exhibition, DYPCOE",
      badge: "Hackathon & Collaboration",
      icon: "Users",
      description:
        "Collaborated in a team-based hackathon at DYPCOE Akurdi, demonstrating teamwork, agile problem-solving, and innovative technical execution under strict deadlines."
    },
    {
      title: "Algorithmic Problem Solving",
      badge: "150+ Problems Solved",
      icon: "Code",
      description:
        "Solved 150+ coding problems combined on LeetCode and GeeksforGeeks, strengthening mastery over data structures, recursion, dynamic programming, and algorithmic optimization."
    },
    {
      title: "Academic Excellence",
      badge: "9.1 / 10.0 CGPA",
      icon: "Trophy",
      description:
        "Maintained a distinguished CGPA of 9.1/10.0 in Computer Engineering at DYPCOE Akurdi, demonstrating sustained commitment to academic rigor."
    }
  ]
};
