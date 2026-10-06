export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  year: string;
  description: string;
  methodology: string[];
  liveUrl?: string;
  results?: {
    map50?: string;
    map5095?: string;
    metricLabel1?: string;
    metricValue1?: string;
    metricLabel2?: string;
    metricValue2?: string;
  };
  features?: string[];
  technology: string[];
  ctaText: string;
  caseStudy: {
    overview: string;
    problem: string;
    methodologyDetail: string[];
    implementation: string;
    resultsDetail: string;
    limitations: string;
  };
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  type: 'professional' | 'leadership';
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  description?: string;
  fileUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Revidya Aprilla Sandiva",
  initials: "RA",
  eyebrow: "COMPUTER SCIENCE GRADUATE · AI ENGINEER · COMPUTER VISION",
  headline: "REVIDYA APRILLA SANDIVA",
  supportingText: "I develop machine learning and computer vision solutions, transforming data and research into practical applications for industrial and business problems.",
  location: "South Sumatera, Indonesia",
  availability: "Open to AI / ML opportunities",
  email: "revidyaa@gmail.com",
  phone: "+62 821-7874-2958",
  university: "Universitas Sriwijaya",
  degree: "Bachelor of Computer Science",
  graduationYear: "2022–2026",
  gpa: "3.89",
  aboutText: "I'm a Computer Science graduate from Universitas Sriwijaya with a GPA of 3.89, focused on Machine Learning, Data Science, Deep Learning, and Computer Vision. My experience includes data preprocessing, exploratory data analysis, model development, hyperparameter tuning, and performance evaluation. My academic research explored a lightweight YOLOv11n object detection system for identifying foreign objects on coal conveyor belts. I'm interested in developing practical AI systems that address real-world industrial challenges.",
  highlights: [
    {
      title: "Machine Learning & Data Science",
      desc: "End-to-end data preprocessing, exploratory analysis, feature preparation, and predictive model evaluation."
    },
    {
      title: "Computer Vision & Industrial AI",
      desc: "Object detection, CNN architectures, YOLO training pipelines, and real-time inference on industrial workflows."
    },
    {
      title: "Research-Driven Problem Solving",
      desc: "Scientific methodology, hyperparameter experimentation, metric rigor, and translating research into practical solutions."
    }
  ],
  coreCompetencies: [
    "Analytical & Critical Thinking",
    "Data-Driven Problem Solving",
    "Research & Technical Documentation",
    "Cross-Functional Collaboration",
    "Team Coordination",
    "Attention to Detail",
    "Adaptability"
  ],
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Computer Networks",
    "Hardware-Oriented Programming",
    "Data Structures & Algorithms",
    "Big Data Analytics",
    "Computer Organization & Architecture"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "foreign-object-detection",
    projectNumber: "01",
    title: "Foreign Object Detection on Conveyor Belts",
    category: "Bachelor's Thesis · Computer Vision · Industrial AI",
    year: "2026",
    description: "Developed a lightweight YOLOv11n object detection system to identify foreign objects on coal conveyor belt systems, exploring computer vision for industrial monitoring.",
    methodology: [
      "Image dataset preparation, label conversion and cleaning.",
      "Image enhancement and dataset balancing.",
      "Model training and validation using YOLOv11n.",
      "Experimentation with learning rate, batch size, and epochs."
    ],
    results: {
      map50: "0.836",
      map5095: "0.628",
      metricLabel1: "Test mAP@50",
      metricValue1: "0.836",
      metricLabel2: "Test mAP@50–95",
      metricValue2: "0.628"
    },
    technology: [
      "Python",
      "PyTorch",
      "Ultralytics YOLO",
      "OpenCV",
      "Roboflow",
      "Google Colab"
    ],
    ctaText: "Explore Research",
    caseStudy: {
      overview: "As part of my Bachelor's thesis at Universitas Sriwijaya, this research investigated automated visual inspection for coal conveying systems. Industrial bulk material handling systems frequently face hazards from foreign contaminants—such as stray iron, scrap metal, rock impurities, or mechanical parts—that can rip high-tension rubber belts or severely damage secondary crushers.",
      problem: "Traditional industrial monitoring on high-speed conveyor belts relies heavily on human visual vigilance or post-damage sensors, both of which struggle under heavy dust, uneven lighting, and continuous operating hours. The challenge was building an accurate detection pipeline that is computationally lightweight enough for edge deployment without sacrificing precision.",
      methodologyDetail: [
        "Dataset Preparation: Collected and structured industrial image sets, converting annotations to standard YOLO format, eliminating false labels and outlier samples.",
        "Image Enhancement: Applied contrast stretching and lighting balance adjustments to simulate varying illumination inside transfer chutes and outdoor conveyor housings.",
        "Model Selection: Deployed the ultra-lightweight YOLOv11n (nano) variant to maximize frame rates and conserve memory overhead.",
        "Hyperparameter Optimization: Systematically tuned base learning rates, weight decay schedules, batch size (16 vs 32), and training duration across multi-epoch validation runs in Google Colab."
      ],
      implementation: "The detection pipeline was developed in Python utilizing PyTorch and the Ultralytics YOLO framework. Training and validation workflows were managed with Roboflow and Colab GPU runtimes. Frame preprocessing and bounding box coordinate post-processing were implemented through OpenCV for pipeline flexibility.",
      resultsDetail: "The optimized YOLOv11n model attained a Test mAP@50 of 0.836 and a Test mAP@50–95 of 0.628 on the evaluation split. The lightweight architecture maintained high frame rates suitable for streaming conveyor feeds, proving that nano-scale architectures can reliably detect non-coal contaminants under realistic industrial constraints.",
      limitations: "Experiments were conducted on a curated experimental dataset. Real-world continuous deployment will require active lens cleaning mechanisms to counter thick coal particulate accumulation, edge camera enclosure hardening, and domain adaptation for night shifts."
    }
  },
  {
    id: "gold-price-forecasting",
    projectNumber: "02",
    title: "Gold Price Forecasting",
    category: "Time-Series Analysis · Machine Learning",
    year: "2025",
    description: "Analyzed historical gold prices and developed forecasting models to explore historical trends and long-term price projections through 2040 as part of an external academic assignment.",
    methodology: [
      "Historical data analysis and preprocessing.",
      "Simple Moving Average (SMA) and Weighted Moving Average (WMA).",
      "ARIMA forecasting.",
      "Evaluation using MAE, MSE, and MAPE.",
      "Analysis of forecasting results and model limitations."
    ],
    technology: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Time-Series Analysis"
    ],
    ctaText: "View Case Study",
    caseStudy: {
      overview: "Conducted an in-depth empirical time-series study evaluating the historical dynamics of international gold spot valuations, exploring statistical modeling techniques and algorithmic projection models extending out through 2040.",
      problem: "Commodity asset prices are characterized by non-stationary behaviors, macroeconomic volatility, and non-linear trend fluctuations. The task required cleaning historical sequences, testing stationarity, applying moving average smoothers, and calibrating autoregressive models.",
      methodologyDetail: [
        "Data Hygiene & Stationarity: Normalized historical chronological sequences, handled missing observations, and performed differencing to stabilize variance and trend.",
        "Baseline Averaging: Computed Simple Moving Averages (SMA) and Weighted Moving Averages (WMA) across multiple historical windows.",
        "Autoregressive Modeling: Formulated ARIMA (Autoregressive Integrated Moving Average) parameterizations with AIC/BIC model order checks.",
        "Rigorous Evaluation: Quantified performance against test folds using Mean Absolute Error (MAE), Mean Squared Error (MSE), and Mean Absolute Percentage Error (MAPE)."
      ],
      implementation: "Executed in Python using Pandas for temporal data structuring, NumPy for mathematical transformations, and Matplotlib for publication-ready visual trajectory comparisons with prediction interval bands.",
      resultsDetail: "Successfully mapped historical cyclical regimes, established baseline benchmark metrics, and projected macro trends through 2040 while documenting how differing moving-average window lengths smooth short-term noise versus capturing structural inflection points.",
      limitations: "Long-range forecasting (up to 2040) is subject to unpredictable macroeconomic shifts, geopolitical disruptions, and monetary policy changes that standard statistical time-series models cannot anticipate."
    }
  },
  {
    id: "tasktodo-web-app",
    projectNumber: "03",
    title: "TaskToDo",
    category: "Web Development · Task Management",
    year: "2024",
    description: "Built a CRUD-based task management web application with task prioritization, using Firebase for backend and hosting, supported by AI-assisted development workflows.",
    features: [
      "Create, read, update, and delete tasks.",
      "Task prioritization.",
      "Firebase backend and hosting."
    ],
    methodology: [
      "Requirements gathering and data modeling for task lifecycle.",
      "Component-based user interface architecture.",
      "Firebase Firestore real-time synchronization.",
      "Deployment and testing on Firebase Hosting."
    ],
    technology: [
      "JavaScript",
      "Node.js",
      "Firebase"
    ],
    liveUrl: "https://taskto-19c5f.web.app/",
    ctaText: "View Project",
    caseStudy: {
      overview: "Developed TaskToDo, a focused productivity application designed to help users organize personal and project deliverables with explicit priority hierarchies and real-time state synchronization.",
      problem: "Many personal task tools are over-engineered or lack clear visual prioritization. The objective was to build a clean, responsive web application with zero friction for task creation, priority reassignment, and completion tracking.",
      methodologyDetail: [
        "Schema Design: Structured task documents with priority ranks (High, Medium, Low), timestamps, status flags, and description fields.",
        "State Management: Implemented reactive UI updates with seamless CRUD lifecycle hooks.",
        "AI-Assisted Workflow: Leveraged modern AI tooling for workflow scaffolding, error debugging, and edge-case testing.",
        "Hosting & Persistence: Configured Firebase Firestore for cloud persistence and Firebase Hosting for continuous delivery."
      ],
      implementation: "Built using vanilla JavaScript, Node.js tooling, and Firebase SDK (Firestore + Hosting). Applied clean UI styling with instant local state reflection prior to database confirmation.",
      resultsDetail: "Delivered a fully responsive, cross-device task manager featuring immediate CRUD operations, visual priority filters, and automated cloud synchronization with sub-second response times.",
      limitations: "Does not currently support multi-user team workspaces or collaborative assignment boards, which represent the logical next milestone for application scaling."
    }
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Data Science & Machine Learning",
    description: "End-to-end predictive pipelines, statistical modeling, and model evaluation",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Preparation",
      "Model Training & Validation",
      "Hyperparameter Tuning",
      "Predictive Modeling"
    ]
  },
  {
    category: "AI & Computer Vision",
    description: "Object detection systems, neural architectures, and vision pipelines",
    skills: [
      "Object Detection",
      "CNN",
      "YOLO",
      "Image Enhancement",
      "Image Processing",
      "Model Optimization",
      "Edge AI"
    ]
  },
  {
    category: "Programming & Tools",
    description: "Engineering frameworks, developer tools, and cloud services",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Ultralytics YOLO",
      "Matplotlib",
      "C/C++",
      "Node.js",
      "Jupyter",
      "Google Colab",
      "Git",
      "GitHub",
      "Roboflow",
      "LabelImg",
      "REST APIs",
      "Firebase",
      "Vercel"
    ]
  }
];

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    organization: "PT. Satria Bahana Sarana",
    role: "Intern",
    period: "July – August 2024",
    description: "Supported technology operations in a professional environment, applying foundational knowledge of computer systems and networking.",
    responsibilities: [
      "Supported network setup, troubleshooting, and maintenance across operational workstations.",
      "Assisted with internal data management, verification, and technical reporting.",
      "Applied foundational knowledge of computer systems, diagnostics, and enterprise IT infrastructure."
    ],
    type: "professional"
  }
];

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = [
  {
    organization: "BEM KM FASILKOM UNSRI",
    role: "Deputy, Department of Administration",
    period: "2023–2024",
    description: "Supervised administrative data management and reporting, while contributing to coordination and documentation for a national-scale technology event.",
    responsibilities: [
      "Managed administrative data repositories, archiving protocols, and formal organizational correspondence.",
      "Served as Secretary II for Technology Euphoria, a major national technology event.",
      "Coordinated cross-functional student teams and produced rigorous event documentation and evaluations."
    ],
    type: "leadership"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Forward Learning Program",
    issuer: "McKinsey & Company",
    period: "June 2026",
    description: "Executive problem-solving, digital agility, and structured analytical thinking framework.",
    fileUrl: "/Sertif/Forward learner.pdf"
  },
  {
    name: "NVIDIA Certified Associate: AI Infrastructure and Operations (NCA-AIIO)",
    issuer: "NVIDIA",
    period: "September 2025 – September 2027",
    description: "AI computing infrastructure, GPU clustering, and machine learning operational fundamentals.",
    fileUrl: "/Sertif/NVIDIA-CertifiedAssociateAIInfrastructureandOperations.pdf"
  },
  {
    name: "Data Classification and Summarization Using IBM Granite",
    issuer: "IBM",
    period: "June 2025",
    description: "Large model application workflows for tabular and unstructured text classification.",
    fileUrl: "/Sertif/IBM.pdf"
  },
  {
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    period: "December 2023 – December 2026",
    description: "RouterOS configuration, IP routing protocols, firewall rules, and network administration.",
    fileUrl: "/Sertif/MTCNA.pdf"
  }
];
