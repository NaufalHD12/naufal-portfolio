import { FaNodeJs, FaPython, FaAws, FaGitAlt, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import {
  SiScikitlearn, SiTensorflow, SiFlask, SiFastapi, SiDjango, SiJavascript, SiDotnet,
  SiReact, SiHtmx, SiTailwindcss, SiMongodb, SiPostgresql, SiGooglecloud, SiExpress,
  SiLangchain, SiSocketdotio, SiRabbitmq, SiRedis, SiCelery, SiKeras, SiStreamlit,
  SiTypescript, SiKubernetes, SiGithubactions, SiDocker
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";

// Project images
import projectPredictiveMaintenance from "@/assets/predictive-maintenance/project-predictive-maintenance1.webp";
import projectEcoTracker from "@/assets/eco-tracker/project-eco-tracker1.webp";
import projectPersonaNexus from "@/assets/persona-nexus/project-persona-nexus1.webp";
import projectVentureMind from "@/assets/venture-mind/project-venture-mind1.webp";
import projectSynapsisAi from "@/assets/synapsis-ai/project-synapsis-ai1.webp";
import projectAcnescan from "@/assets/acnescan/project-acnescan.webp";
import projectTweetsSentiment from "@/assets/project-tweets-sentiment-analysis.webp";
import projectAnimeRecommendation from "@/assets/project-anime-recommendation-system.webp";
import projectStudentPerformance from "@/assets/project-student-performance-predictor.webp";
import projectEcommerceDashboard from "@/assets/project-ecommerce-public-dashboard.webp";
import projectBikeSharing from "@/assets/project-bike-sharing-dashboard.webp";
import projectEchobrief from "@/assets/echobrief/project-echobrief1.webp";

// EchoBrief Gallery
import echoBrief1 from "@/assets/echobrief/project-echobrief1.webp";
import echoBrief2 from "@/assets/echobrief/project-echobrief2.webp";
import echoBrief3 from "@/assets/echobrief/project-echobrief3.webp";
import echoBrief4 from "@/assets/echobrief/project-echobrief4.webp";
import echoBrief5 from "@/assets/echobrief/project-echobrief5.webp";
import echoBrief6 from "@/assets/echobrief/project-echobrief6.webp";
import echoBrief7 from "@/assets/echobrief/project-echobrief7.webp";
import echoBrief8 from "@/assets/echobrief/project-echobrief8.webp";

// EcoTracker Gallery
import ecoTracker1 from "@/assets/eco-tracker/project-eco-tracker1.webp";
import ecoTracker2 from "@/assets/eco-tracker/project-eco-tracker2.webp";
import ecoTracker3 from "@/assets/eco-tracker/project-eco-tracker3.webp";
import ecoTracker4 from "@/assets/eco-tracker/project-eco-tracker4.webp";
import ecoTracker5 from "@/assets/eco-tracker/project-eco-tracker5.webp";

// Predictive Maintenance Gallery
import pmc1 from "@/assets/predictive-maintenance/project-predictive-maintenance1.webp";
import pmc2 from "@/assets/predictive-maintenance/project-predictive-maintenance2.webp";
import pmc3 from "@/assets/predictive-maintenance/project-predictive-maintenance3.webp";
import pmc4 from "@/assets/predictive-maintenance/project-predictive-maintenance4.webp";
import pmc5 from "@/assets/predictive-maintenance/project-predictive-maintenance5.webp";


export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  image: string;
  images?: string[];
  github: string;
  demo?: string;
  problem?: string[];
  solution?: string[];
  features?: string[];
  techImplementation?: string[];
  lessonsLearned?: string[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export interface Certification {
  name: string;
  link: string;
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: TbBrandCSharp },
      { name: "TypeScript", icon: SiTypescript },
    ]
  },
  {
    title: "Backend Framework",
    skills: [
        { name: "FastAPI", icon: SiFastapi },
        { name: "Django", icon: SiDjango },
        { name: "Express", icon: SiExpress },
        { name: "Hapi", icon: FaNodeJs },
        { name: "ASP.NET Core", icon: SiDotnet },
        { name: "Flask", icon: SiFlask },
    ]
  },
  {
    title: "Databases",
    skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQL Server", icon: FaDatabase },
        { name: "ChromaDB", icon: FaDatabase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Neo4j", icon: FaDatabase },
        { name: "Redis", icon: SiRedis },
    ]
  },
  {
    title: "ML/AI Framework",
    skills: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "LangChain", icon: SiLangchain },
        { name: "LangGraph", icon: FaProjectDiagram },
        { name: "Keras", icon: SiKeras },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        { name: "GCP", icon: SiGooglecloud },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub Actions", icon: SiGithubactions },
    ]
  },
  {
    title: "Frontend Framework",
    skills: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTMX", icon: SiHtmx },
        { name: "Streamlit", icon: SiStreamlit },
    ]
  },
  {
    title: "Tools & Ecosystem",
    skills: [
        { name: "RabbitMQ", icon: SiRabbitmq },
        { name: "Celery", icon: SiCelery },
        { name: "Socket.IO", icon: SiSocketdotio },
    ]
  }
];


export const PROJECTS: Project[] = [
  {
    slug: "echobrief",
    title: "EchoBrief: AI News Podcast Platform",
    summary:
      "Built a full-stack application that transforms news articles into AI-generated podcast audio using DeepSeek for summarization and Edge TTS for audio synthesis.",
    problem: [
      "We live in an era of information overload. Staying updated requires visiting multiple websites, scrolling through ads, and dedicating significant time to reading textual content.",
      "For busy professionals or commuters, finding the time to 'read the news' is becoming increasingly difficult, yet the fear of missing out (FOMO) remains."
    ],
    solution: [
      "EchoBrief bridges the gap between staying informed and being busy. It is a full-stack platform that automatically transforms written news articles into engaging AI-generated podcasts.",
      "Instead of reading, you can listen. EchoBrief aggregates stories from your favorite sources, summarizes them into a cohesive script, and narrates them using natural-sounding AI voices."
    ],
    features: [
      "AI-Powered Podcasts: Generate personalized news podcasts from your favorite topics",
      "News Aggregation: Access articles from multiple curated news sources",
      "Smart Search: Search across articles, topics, and sources",
      "Personalization: Customize topics, avatar, and preferences",
      "Admin Dashboard: Comprehensive tools for user management and content control"
    ],
    techImplementation: [
      "Event-Driven Architecture: Built using RabbitMQ & Celery for handling asynchronous background processing tasks like summarization and audio synthesis.",
      "AI Pipeline Integration: Utilized DeepSeek for intelligent text summarization and Edge TTS for generating high-quality natural-sounding audio.",
      "High-Performance Backend: Developed with FastAPI to provide robust REST endpoints and manage heavy workloads efficiently.",
      "Type-Safe Frontend: Constructed with React and TypeScript to ensure a reliable and interactive user interface."
    ],
    lessonsLearned: [
      "Event-Driven Architecture: Migrating from simple background tasks to RabbitMQ + Celery to handle variable AI processing times (30s+) and ensure reliability.",
      "Optimizing AI Costs: Implementing 'one-shot prompting' for LLMs and Redis Caching to prevent re-summarizing viral articles, significantly reducing API costs."
    ],
    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "Celery",
      "Docker",
    ],
    highlights: [
      "Task Queues",
      "Background Processing",
      "AI-Powered Audio",
    ],

    image: projectEchobrief,
    images: [
      echoBrief1,
      echoBrief2,
      echoBrief3,
      echoBrief4,
      echoBrief5,
      echoBrief6,
      echoBrief7,
      echoBrief8
    ],
    github: "https://github.com/NaufalHD12/echobrief",
  },
  {
    slug: "predictive-maintenance-copilot",
    title: "Predictive Maintenance Copilot",
    summary:
      "Architected a microservices-based predictive maintenance platform for manufacturing, integrating AI agents for real-time machine health analysis and alerts.",
    problem: [
      "Unplanned machine downtime in manufacturing leads to massive revenue loss and safety hazards.",
      "Traditional maintenance schedules are inefficient, either checking too often (wasteful) or too late (failures)."
    ],
    solution: [
      "A predictive maintenance platform that orchestrates a microservices ecosystem to monitor industrial machine health in real-time.",
      "It uses AI agents to analyze telemetry data and provide instant root-cause insights and maintenance recommendations."
    ],
    features: [
      "Real-time Alerts: Event streaming via Socket.IO for critical failure alerts",
      "Root-Cause Analysis: Agentic AI service to analyze telemetry data",
      "Microservices Architecture: Scalable system design for independent scaling",
      "Interactive Dashboard: Real-time monitoring of industrial machine health"
    ],
    techImplementation: [
      "Microservices Ecosystem: Orchestrated multiple specialized services (Frontend, Main Backend, ML Service, LLM Agent) for independent scaling and maintenance.",
      "Real-time Telemetry: Implemented WebSocket (Socket.IO) to stream machine health data and deliver instant alerts to the dashboard.",
      "Hybrid ML Model: Deployed a service combining Anomaly Detection and Classification models using Scikit-learn and XGBoost within Docker containers.",
      "Agentic AI: Engineered a ReAct-based AI assistant using LangGraph that can autonomously analyze data and execute maintenance workflows.",
      "Data Infrastructure: Utilized TimescaleDB for efficient storage of high-frequency time-series telemetry data."
    ],
    lessonsLearned: [
      "Microservices Complexity: Managing communication between services required robust error handling and eventual consistency patterns.",
      "Real-time Data Handling: Optimizing Socket.IO for high-frequency telemetry data streams."
    ],
    techStack: [
      "Hapi",
      "NodeJS",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Socket.IO",
      "TimescaleDB",
    ],
    highlights: [
      "Microservices Architecture",
      "Agentic AI",
      "Real-time Streaming",
    ],
    image: projectPredictiveMaintenance,
    images: [
      pmc1,
      pmc2,
      pmc3,
      pmc4,
      pmc5
    ],
    github: "https://github.com/NaufalHD12/predictive-maintenance-copilot",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker: Carbon Footprint Tracker",
    summary:
      "Built a comprehensive MERN-stack carbon footprint tracker with activity logging, interactive dashboard, community challenges, and educational quizzes.",
    problem: [
      "Many individuals want to reduce their carbon footprint but lack the tools to measure it accurately or the motivation to sustain habit changes.",
      "Existing tools often lack engagement or actionable insights."
    ],
    solution: [
      "EcoTracker is a comprehensive MERN-stack application that combines tracking with gamification.",
      "It features activity logging, accurate emission calculations detailed dashboards, and community challenges to drive engagement."
    ],
    features: [
      "Activity Logging: Track emissions across Transportation, Food, Energy, and Shopping using DEFRA 2024 factors",
      "Interactive Dashboard: Visualize weekly, monthly, and yearly statistics with Recharts",
      "Gamification: Engage with community challenges, leaderboards, and badge systems",
      "Educational Quizzes: Learn about sustainability with difficulty levels and score tracking"
    ],
    techImplementation: [
      "MERN Stack Architecture: Built a monolithic full-stack application using MongoDB, Express, React 19, and Node.js for seamless JavaScript development.",
      "Performance Optimization: Integrated Upstash Redis for API rate limiting and efficient caching of leaderboard data.",
      "Security Best Practices: Implemented robust authentication using JWT encryption and comprehensive input validation with Zod and Joi.",
      "Interactive Visualization: Utilized Recharts to render complex carbon footprint data into intuitive and responsive charts."
    ],
    lessonsLearned: [
      "Gamification Logic: Designing balanced challenge and point systems to keep users motivated.",
      "Data Visualization: Using Recharts to make complex emission data easy to understand."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redis", "TailwindCSS", "Recharts", "JWT"],
    highlights: ["Full-Stack MERN", "Interactive Dashboard", "Gamification Features"],
    image: projectEcoTracker,
    images: [
      ecoTracker1,
      ecoTracker2,
      ecoTracker3,
      ecoTracker4,
      ecoTracker5
    ],
    github: "https://github.com/NaufalHD12/eco-tracker",
  },
  {
    slug: "persona-nexus",
    title: "Persona Nexus: AI Community Platform",
    summary:
      "Developed a full-stack community platform with AI moderation, real-time features, and DevOps pipeline for seamless social interactions.",
    problem: [
      "Online communities often suffer from toxic content and lack of engagement.",
      "Building a scalable social platform requires handling complex real-time interactions and content safety."
    ],
    solution: [
      "Persona Nexus is a full-stack community platform that uses AI for content moderation and writing assistance.",
      "It provides real-time notifications and smooth social interactions."
    ],
    features: [
      "AI Content Moderation: Automated toxicity detection and writing assistance",
      "Real-time Notifications: Instant alerts for interaction and activity",
      "OAuth Authentication: Secure login via third-party providers",
      "Interactive Feed: Smooth social interactions built with HTMX"
    ],
    techImplementation: [
      "Modern Monolithic Architecture: Built with Django following the MVT pattern, served via Gunicorn and Nginx on AWS EC2.",
      "Dynamic Interactivity: Leveraged HTMX and Alpine.js to deliver SPA-like user experiences and real-time features without the complexity of a separate frontend app.",
      "Cloud Infrastructure: Automated deployment using GitHub Actions CI/CD to AWS EC2, with static files managed via AWS S3.",
      "AI-Powered Operations: Integrated DeepSeek API for automated content toxicity detection and intelligent post writing assistance."
    ],
    lessonsLearned: [
      "HTMX Integration: Learned how to build dynamic interfaces server-side, reducing JS bloat.",
      "DevOps: Setting up a CI/CD pipeline for Django on AWS."
    ],
    techStack: [
      "Django",
      "HTMX",
      "Alpine.js",
      "OAuth",
      "Chart.js",
      "AWS EC2",
      "Docker",
    ],
    highlights: ["Full-Stack Development", "AI Integration", "DevOps Pipeline"],
    image: projectPersonaNexus,
    github: "https://github.com/NaufalHD12/PersonaNexus",
    demo: "https://www.personanexus.club/",
  },
  {
    slug: "venture-mind",
    title: "VentureMind: AI Business Co-Pilot",
    summary:
      "Created a multi-agent AI system for generating business strategies, with RAG integration and asynchronous processing.",
    problem: [
      "Entrepreneurs often face decision paralysis and tunnel vision. Developing a comprehensive business strategy requires diverse expertise—market trends, risk assessment, and operational planning—which is rarely found in a single person.",
      "Hiring a professional advisory board is cost-prohibitive for early-stage startups, leading many brilliant ideas to fail due to lack of validation."
    ],
    solution: [
      "VentureMind leverages a multi-agent AI system to think, debate, and create. It acts as an autonomous 'AI Board of Directors' that analyzes your business idea from multiple angles.",
      "Input your idea, and our team of intelligent agents (The Visionary, Market Analyst, Critic, Planner) collaborate to craft a comprehensive strategic report."
    ],
    features: [
      "Multi-Agent Collaboration: Specialized agents work together to analyze concepts from unique angles.",
      "Real-Time Analysis Log: Watch the thought process in real-time as agents research and debate.",
      "Smart Memory System: Access full history and use past reports as context for future queries.",
      "Live Market Data: Integrated Tavily Search API ensures strategy is based on real-time web data.",
      "Interactive Q&A: Chat with a specialized agent that knows your specific strategy report."
    ],
    techImplementation: [
      "Multi-Agent Orchestration: Designed a CrewAI workflow where specialized agents (Visionary, Analyst, Critic) collaborate to produce comprehensive strategies.",
      "Retrieval-Augmented Generation (RAG): Integrated Tavily Search API to ground agent outputs in real-time market data, ensuring relevance and accuracy.",
      "Asynchronous Streaming: Implemented FastAPI StreamingResponse with Python generators to stream agent thoughts in real-time to the client."
    ],
    lessonsLearned: [
      "Serverless Timeouts: Solved 'Connection Reset' errors on Railway by implementing a Keep-Alive Streaming pattern for long-running AI tasks.",
      "Prompt Engineering: Learned that assigning highly specific personas (e.g., 'ruthless critic') is key to preventing agents from being too polite."
    ],
    techStack: [
      "CrewAI",
      "GPT-4.1-mini",
      "RAG",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    highlights: ["Multi-Agent AI", "RAG Integration", "Async Architecture"],
    image: projectVentureMind,
    github: "https://github.com/NaufalHD12/venture-mind",
    demo: "https://venture-mind-production-531d.up.railway.app/",
  },
  {
    slug: "synapsis-ai",
    title: "Synapsis AI: CV Screening System",
    summary:
      "Engineered an AI-driven recruitment tool for multi-language CV screening with batch processing.",
    problem: [
      "HR teams spend countless hours manually screening CVs, leading to fatigue and potential bias.",
      "Matching candidates to technical job descriptions requires deep understanding of skills that simple keyword matchers miss."
    ],
    solution: [
      "Synapsis AI automates the screening process using Large Language Models.",
      "It analyzes Job Descriptions and batches of CVs simultaneously, providing match scores, highlights, and deep analysis."
    ],
    features: [
      "Match Scoring: AI-driven analysis of candidate suitability",
      "Batch Processing: Support for mass upload and simultaneous analysis",
      "Multi-language Support: Detects and processes CVs in Indonesian and English",
      "Excel Reports: Export detailed analysis results in professional format"
    ],
    techImplementation: [
      "Backend Architecture: Developed a Python Flask application to serve as the core processing engine for recruitment documents.",
      "Document Processing: Implemented PyMuPDF for precise PDF text extraction to handle various CV formats.",
      "AI Integration: Integrated DeepSeek-V3 API to perform semantic analysis and matching between CVs and Job Descriptions.",
      "Report Generation: Utilized Pandas and Openpyxl to process analysis results and generate downloadable Excel reports."
    ],
    lessonsLearned: [
      "PDF Extraction: Handling various CV formats and layouts to ensure accurate text retrieval.",
      "Prompt Optimization: Fine-tuning prompts to get consistent JSON outputs for scoring."
    ],
    techStack: ["Python", "Flask", "DeepSeek", "PyMuPDF", "Pandas"],
    highlights: ["AI Screening Pipeline", "Multi-Language", "Batch Processing"],
    image: projectSynapsisAi,
    github: "https://github.com/NaufalHD12/synapsis-ai",
    demo: "https://synapsis-ai-production.up.railway.app/",
  },
  {
    slug: "acnescan",
    title: "AcneScan: Acne Detection App",
    summary:
      "Trained a CNN model for acne classification achieving 98% F1-score and deployed on GCP.",
    problem: [
      "Accurate self-diagnosis of skin conditions can be difficult.",
      "Access to dermatological advice is not always immediate or affordable."
    ],
    solution: [
      "AcneScan provides an instant, AI-based classification of acne types.",
      "It uses a trained CNN model to analyze images and provide results with high accuracy."
    ],
    features: [
      "Image Classification: AI-based classification of acne types from images",
      "High Accuracy: Achieved 98% F1-score using EfficientNetB0",
      "Mobile-friendly API: Lightweight RESTful endpoints for easy integration"
    ],
    techImplementation: [
      "Model Architecture: Trained an EfficientNetB0 Convolutional Neural Network (CNN) using TensorFlow with Transfer Learning for high-accuracy detection.",
      "Model Optimization: Achieved 98% F1-score through rigorous training and tuning, and converted the model to TensorFlow Lite for edge usage.",
      "Cloud Serving: Dockerized the Flask API and deployed it to Google Cloud Platform (Cloud Run) for scalable serverless inference.",
      "Mobile Integration: Exposed RESTful APIs to communicate with the Android mobile application for real-time analysis."
    ],
    lessonsLearned: [
      "Model Tuning: Techniques to achieve high accuracy on medical imaging data.",
      "Cloud Deployment: Configuring GCP for serving ML models."
    ],
    techStack: [
      "TensorFlow",
      "EfficientNetB0",
      "Flask",
      "GCP",
      "TensorFlow Lite",
    ],
    highlights: ["CNN Model Training", "98% F1-Score", "Cloud Deployment"],
    image: projectAcnescan,
    github: "https://github.com/Acne-Scan",
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    title: "React & Backend with AI",
    subtitle: "Asah led by Dicoding Association with Accenture",
    date: "Aug 2025 - Present",
    description: "Advanced program focused on full-stack development with React, backend technologies, and AI integration."
  },
  {
    title: "Project-Based Virtual Intern: Data Scientist",
    subtitle: "Home Credit Indonesia",
    date: "Feb 2025 – Mar 2025",
    description: "Developed credit scoring models achieving 96% accuracy and executed end-to-end data science workflow."
  },
  {
    title: "Software Engineer Intern",
    subtitle: "PT Kilang Pertamina Internasional",
    date: "Feb 2025 – May 2025",
    description: "Engineered RAG pipelines for document automation and built internal .NET enterprise tools."
  },
  {
    title: "Machine Learning",
    subtitle: "Bangkit Academy 2024",
    date: "Sep 2024 – Jan 2025",
    description: "Intensive program led by Google, GoTo, and Traveloka, focusing on ML concepts."
  },
  {
    title: "Member",
    subtitle: "Google Developer Student Clubs (GDSC) UPI",
    date: "2023 - 2024",
    description: "Active member of the developer student community, participating in technical workshops and collaborative events."
  },
  {
    title: "Software Engineering Student",
    subtitle: "Universitas Pendidikan Indonesia",
    date: "2022 - Present",
    description: "Bachelor's degree focusing on Backend & AI Engineering."
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Machine Learning by Stanford University & DeepLearning.AI", link: "https://coursera.org/share/e82eef785a5024cadef3e2848d06f599" },
  { name: "DeepLearning.AI Tensorflow Developer", link: "https://coursera.org/share/3ad716fbe35350d7d71072ade73e61d1" },
  { name: "Tensorflow: Data & Deployment", link: "https://coursera.org/share/f08cf568b70691eeb9cbe231c04bb385" },
  { name: "Machine Learning Operations (MLOps)", link: "https://www.dicoding.com/certificates/N9ZO9D9D6XG5" },
  { name: "Applied Machine Learning", link: "https://www.dicoding.com/certificates/07Z64NEG2PQR" },
  { name: "Front-End Development (React)", link: "https://www.dicoding.com/certificates/6RPNG66L9Z2M" },
  { name: "Back-End Development (NodeJS & AWS)", link: "https://www.dicoding.com/certificates/2VX35JE23PYQ" },
  { name: "Cloud & Gen AI on AWS", link: "https://www.dicoding.com/certificates/53XEKJ39KXRN" },
];

export const SOCIALS = {
  github: "https://github.com/NaufalHD12",
  linkedin: "https://linkedin.com/in/naufalhd12",
  instagram: "https://instagram.com/naufalhd1",
};
