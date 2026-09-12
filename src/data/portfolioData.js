export const portfolioData = {
  personal: {
    name: "Siddanth Sajwan",
    role: "Frontend Developer & AI Engineer",
    tagline: "Building High-Performance Web Apps & Autonomous Multi-Agent AI Systems",
    bio: "Computer Science undergraduate with hands-on industry internship experience building scalable, production-grade web applications and architecting cutting-edge Agentic AI workflows using CrewAI, Groq (Llama 3.1), Google Gemini API, and React.",
    email: "siddanthsajwan45@gmail.com",
    phone: "+91-9627124234",
    location: "Dehradun, Uttarakhand, India",
    status: "Available for Full-time Roles & Internships (Graduating June 2026)",
    avatar: "/siddanth-profile.jpg",
    socialLinks: {
      github: "https://github.com/siddanthsajwan",
      linkedin: "https://linkedin.com/in/siddanth-sajwan",
      leetcode: "https://leetcode.com/u/Siddanthsajwan14/",
      email: "mailto:siddanthsajwan45@gmail.com"
    },
    stats: [
      { label: "Beta Users Supported", value: "5,000+", icon: "Users" },
      { label: "Perceived Latency Cut", value: "80%", icon: "Zap" },
      { label: "Task Efficiency Gain", value: "40%", icon: "TrendingUp" },
      { label: "CGPA (GEHU B.Tech CSE)", value: "7.22 / 10", icon: "GraduationCap" }
    ]
  },

  education: [
    {
      institution: "Graphic Era Hill University",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Dehradun, Uttarakhand",
      duration: "Aug 2022 – June 2026",
      score: "CGPA: 7.22 / 10",
      description: "Focusing on Core Computer Science principles, Advanced Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Distributed Computing.",
      highlights: [
        "Finalist in Graphethon 24-Hour University Hackathon",
        "Active member of developer and AI community initiatives",
        "Rigorous coursework in Data Structures, Algorithms, DBMS, OS & Computer Networks"
      ]
    }
  ],

  experience: [
    {
      company: "ProElevate",
      role: "Frontend Developer Intern",
      period: "Sep 2025 – Nov 2025",
      type: "Remote Internship",
      techStack: ["JavaScript", "React.js", "Tailwind CSS", "ShadCN UI", "React-Hook-Form", "Framer-motion", "Tremor"],
      summary: "Spearheaded core frontend features, user onboarding pipelines, and dynamic analytics dashboards for a high-growth platform during its pivotal beta launch.",
      bullets: [
        "Built polished, production grade UI and micro-interactions across key user workflows using React.js, Tailwind CSS and Framer-motion prioritizing visual hierarchy and design consistency.",
        "Optimized the user registration pipeline and eliminated critical sign-up bugs ensuring a smooth on-boarding experience for more than 5000 users during the beta phase.",
        "Developed dynamic dashboards using Tremor chart components enabling real-time KPIs covering over 10 critical performance metrics."
      ],
      metrics: [
        { label: "Users Handled", value: "5,000+" },
        { label: "Live KPIs Tracked", value: "10+" },
        { label: "Workflow UI Polish", value: "100%" }
      ]
    }
  ],

  projects: [
    {
      id: "agentic-email",
      title: "Autonomous Agentic Email Auto-Responder",
      category: "Agentic AI",
      featured: true,
      tagline: "Autonomous multi-agent system powered by CrewAI Flows & Groq Llama 3.1 8B",
      description: "An end-to-end autonomous Agentic AI system that orchestrates 3 specialized collaborative AI agents to automate email filtering, thread context analysis, and high-precision response drafting with real-world tool execution.",
      techStack: ["Python", "CrewAI Flows", "LangChain", "Groq (Llama 3.1 8B)", "Gmail IMAP", "Docker", "uv", "Render"],
      bulletPoints: [
        "Architected an Agentic AI system with CrewAI Flows and Groq’s Llama 3.1, orchestrating 3 agents to autonomously filter, analyze, and draft email responses.",
        "Built custom LangChain tools enabling agents to autonomously read full email threads and create drafts directly via Gmail’s IMAP interface.",
        "Containerized the system with Docker and uv, deploying a live multi-threaded health server on Render."
      ],
      architecture: {
        agents: [
          { name: "Email Filter Crew", role: "Classifies incoming emails, spam detection, priority routing" },
          { name: "Context Analysis Crew", role: "Uses GetThreadTool to fetch entire email historical chain and extract intent" },
          { name: "Draft Response Crew", role: "Synthesizes tailored responses and invokes CreateDraftTool into Gmail" }
        ],
        tools: ["GetThreadTool (IMAP)", "CreateDraftTool (SMTP)", "HealthCheckServer (Multi-threaded)"],
        deployment: "Docker Container + uv package manager on Render Cloud"
      },
      stats: {
        metric1: "3 Collaborative Agents",
        metric2: "Llama 3.1 8B via Groq",
        metric3: "100% Automated IMAP/SMTP"
      },
      links: {
        live: "https://email-auto-responder-1lli.onrender.com/",
        github: "https://github.com/siddanthsajwan/Email-Auto-Responder"
      },
      badge: "Flagship AI Project"
    },
    {
      id: "wanderlust-ai",
      title: "Wanderlust AI — Intelligent Trip Planner",
      category: "Full-Stack AI",
      featured: true,
      tagline: "AI-powered personalized travel itinerary generator with local RAG & live mapping",
      description: "Intelligent travel itinerary generator combining Google Gemini 1.5 Flash with local RAG architecture for grounded, real-time travel recommendations, interactive route maps, and weather tracking.",
      techStack: ["React 18", "Vite", "Google Gemini API", "Vector RAG", "Google Maps API", "Open-Meteo API"],
      bulletPoints: [
        "Built an AI trip planner with Gemini 1.5 Flash and vector RAG for grounded itineraries.",
        "Integrated Google Maps and Open-Meteo APIs for interactive routes and live weather tracking.",
        "Designed a responsive Glassmorphism UI with dark mode, global state, and PDF/JSON exports."
      ],
      architecture: {
        aiModel: "Gemini 1.5 Flash with Grounded RAG Knowledge Base",
        features: ["Interactive Waypoint Mapping", "Live Weather Forecasts", "PDF/JSON Itinerary Exports", "Glassmorphism Design"]
      },
      stats: {
        metric1: "Instant RAG Itineraries",
        metric2: "Real-time Google Maps",
        metric3: "PDF/JSON Export Ready"
      },
      links: {
        live: "https://ai-trip-planner-kappa-nine.vercel.app/",
        github: "https://github.com/siddanthsajwan/Ai-Trip-Planner"
      },
      badge: "AI Web Application"
    },
    {
      id: "productivity-dashboard",
      title: "Productivity Dashboard App",
      category: "Frontend & Full-Stack",
      featured: true,
      tagline: "High-performance task management & analytics suite with optimistic UI updates",
      description: "A fast, modern productivity dashboard with drag-and-drop Kanban state management, optimistic updates, and custom SVG analytics visualizing live performance metrics.",
      techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
      bulletPoints: [
        "Engineered frontend with optimistic updates, reducing perceived UI latency by 80% for CRUD operations.",
        "Built an analytics dashboard with custom SVG charts to visualize 5+ real-time productivity metrics.",
        "Implemented drag-and-drop state management, improving task organization efficiency by 40%."
      ],
      architecture: {
        performance: "Optimistic updates with background reconciliation",
        visualization: "Custom lightweight SVG charts with zero bulky dependencies",
        interactions: "HTML5 drag and drop state machine"
      },
      stats: {
        metric1: "-80% Perceived Latency",
        metric2: "5+ Real-time SVG Charts",
        metric3: "+40% Task Efficiency"
      },
      links: {
        live: "https://task-manager-xi-ebon.vercel.app/",
        github: "https://github.com/siddanthsajwan/Task-Manager"
      },
      badge: "High-Performance Web App"
    }
  ],

  skills: {
    aiAndAgentic: [
      { name: "CrewAI & Multi-Agent Flows", level: 92, icon: "Bot", tag: "Specialized" },
      { name: "Groq & Llama 3.1 8B", level: 90, icon: "Cpu", tag: "LLMs" },
      { name: "Google Gemini API (1.5 Flash)", level: 90, icon: "Sparkles", tag: "Generative AI" },
      { name: "RAG (Retrieval-Augmented Gen)", level: 88, icon: "Database", tag: "AI Architecture" },
      { name: "LiteLLM & Prompt Engineering", level: 85, icon: "Terminal", tag: "Tooling" }
    ],
    frontend: [
      { name: "React.js (v18+)", level: 95, icon: "Code2", tag: "Core" },
      { name: "JavaScript (ES6+)", level: 94, icon: "FileCode", tag: "Core" },
      { name: "Tailwind CSS & ShadCN", level: 92, icon: "Palette", tag: "Styling" },
      { name: "React-Hook-Form", level: 88, icon: "CheckSquare", tag: "Forms" },
      { name: "Framer Motion & Animations", level: 85, icon: "Layers", tag: "UI/UX" },
      { name: "HTML5 & CSS3 Glassmorphism", level: 95, icon: "Layout", tag: "Design" },
      { name: "Tkinter (Python GUI)", level: 80, icon: "Monitor", tag: "Desktop" }
    ],
    backendAndDevops: [
      { name: "Node.js & Express.js", level: 86, icon: "Server", tag: "Backend" },
      { name: "MySQL & SQL", level: 85, icon: "Database", tag: "Databases" },
      { name: "JWT Authentication", level: 88, icon: "Lock", tag: "Security" },
      { name: "Docker & uv Package Manager", level: 85, icon: "Box", tag: "Containers" },
      { name: "Render & Vercel Cloud", level: 90, icon: "Cloud", tag: "Deployment" },
      { name: "Git & GitHub Workflow", level: 92, icon: "GitBranch", tag: "Version Control" },
      { name: "VS Code & Debugging", level: 95, icon: "Code", tag: "Tooling" }
    ],
    languagesAndCore: [
      { name: "C++", level: 88, icon: "Binary", tag: "Problem Solving" },
      { name: "C", level: 82, icon: "Terminal", tag: "Foundations" },
      { name: "Python", level: 88, icon: "FileCode", tag: "AI / Scripting" },
      { name: "Data Structures & Algorithms", level: 88, icon: "Workflow", tag: "Core CS" },
      { name: "Object-Oriented Programming (OOPS)", level: 90, icon: "Boxes", tag: "Core CS" },
      { name: "DBMS & Operating Systems", level: 86, icon: "HardDrive", tag: "Core CS" },
      { name: "Computer Networks", level: 84, icon: "Network", tag: "Core CS" }
    ]
  },

  certifications: [
    {
      id: "google-genai",
      title: "Google Cloud Generative AI Certification",
      issuer: "Google Cloud",
      date: "2024",
      icon: "CloudLightning",
      description: "Certified in Generative AI architectures, foundation models, prompt tuning, Google Cloud Vertex AI, and enterprise generative AI solutions.",
      badgeColor: "from-blue-500 to-cyan-400",
      skills: ["Generative AI", "Vertex AI", "LLM Fine-Tuning", "Prompt Engineering"],
      verificationUrl: "https://drive.google.com/file/d/1qbtXt6xE7DhOP8Qpfkac1r-e65-lqxnB/view?usp=drive_link"
    },
    {
      id: "oracle-agentic",
      title: "Agentic AI Certification",
      issuer: "Oracle",
      date: "2024",
      icon: "Cpu",
      description: "Demonstrated expertise in building multi-agent AI systems, autonomous agent workflows, tool calling, and orchestrating enterprise LLM agents.",
      badgeColor: "from-amber-500 to-rose-500",
      skills: ["Agentic AI", "Multi-Agent Systems", "Tool Execution", "Autonomous Workflows"],
      verificationUrl: "https://drive.google.com/file/d/1B0DGq4g5sIh12M1o7iG5Nc8eDH5VQVk_/view?usp=drive_link"
    },
    {
      id: "graphethon-hackathon",
      title: "Finalist — Graphethon 24-Hour Hackathon",
      issuer: "Graphic Era Hill University",
      date: "2024",
      icon: "Trophy",
      description: "Selected as finalist among top university engineering teams in an intensive 24-hour hackathon, designing and shipping an innovative tech solution under strict time constraints.",
      badgeColor: "from-purple-500 to-indigo-500",
      skills: ["Rapid Prototyping", "Full-Stack Development", "Team Collaboration", "Problem Solving"],
      verificationUrl: "#"
    }
  ],

  sampleEmailSimulations: [
    {
      id: "sim1",
      sender: "sarah.investor@venturepulse.io",
      subject: "Partnership & Technical Demo for Agentic Auto-Responder",
      body: "Hi Siddanth, I reviewed your CrewAI agentic auto-responder project on GitHub. We are evaluating autonomous multi-agent pipelines for customer workflows. Are you available for a quick technical deep-dive this Thursday at 3 PM IST?",
      expectedCategory: "High Priority / Business Opportunity",
      draftPreview: "Hi Sarah,\n\nThank you for reaching out! I'd be glad to walk you through the architecture of my CrewAI and Groq Llama 3.1 multi-agent system. Thursday at 3:00 PM IST works perfectly for me.\n\nLooking forward to speaking with you!\n\nBest regards,\nSiddanth Sajwan"
    },
    {
      id: "sim2",
      sender: "recruiter@innovate-tech.com",
      subject: "Frontend & AI Engineering Role at InnovateTech",
      body: "Hello Siddanth, We were impressed by your work at ProElevate optimizing the user onboarding pipeline for 5,000+ users as well as your Wanderlust AI project. Would you be open to discussing an upcoming Software Engineer opportunity?",
      expectedCategory: "Career Opportunity / Recruitment",
      draftPreview: "Hello,\n\nThank you for considering my profile! I am actively looking for high-impact Frontend & AI Engineering roles where I can leverage my React, agentic AI, and full-stack background. I have attached my resume and would welcome a conversation.\n\nWarm regards,\nSiddanth Sajwan"
    },
    {
      id: "sim3",
      sender: "newsletter@promo-deals-daily.xyz",
      subject: "Exclusive 70% Off Cloud Credits Just For You!",
      body: "Claim your massive discount on unverified cloud instances today! Click here now to redeem before expiration.",
      expectedCategory: "Spam / Marketing Filtered",
      draftPreview: "[Agent Decision: Auto-archived / No response draft generated to preserve inbox health]"
    }
  ]
};
