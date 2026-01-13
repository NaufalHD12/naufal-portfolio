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
import projectPredictiveMaintenance from "@/assets/project-predictive-maintenance.webp";
import projectEcoTracker from "@/assets/project-eco-tracker.webp";
import projectPersonaNexus from "@/assets/project-persona-nexus.webp";
import projectVentureMind from "@/assets/project-venture-mind.webp";
import projectSynapsisAi from "@/assets/project-synapsis-ai.webp";
import projectAcnescan from "@/assets/project-acnescan.webp";
import projectTweetsSentiment from "@/assets/project-tweets-sentiment-analysis.webp";
import projectAnimeRecommendation from "@/assets/project-anime-recommendation-system.webp";
import projectStudentPerformance from "@/assets/project-student-performance-predictor.webp";
import projectEcommerceDashboard from "@/assets/project-ecommerce-public-dashboard.webp";
import projectBikeSharing from "@/assets/project-bike-sharing-dashboard.webp";
import projectEchobrief from "@/assets/project-echobrief.webp";


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
  description: string[];
  techStack: string[];
  highlights: string[];
  image: string;
  github: string;
  demo?: string;
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
    description: [
      "Developed a complete news-to-podcast platform that aggregates articles from RSS feeds, generates intelligent summaries, and produces high-quality audio content.",
      "Implemented a full-stack architecture with FastAPI backend, React frontend, PostgreSQL database, Redis caching, and RabbitMQ with Celery for async task processing.",
      "Integrated AI services including DeepSeek for content summarization and Edge TTS for natural-sounding audio generation with multiple voice options.",
      "Built user authentication with JWT tokens and Google OAuth 2.0, along with a subscription system integrated with Ko-fi for payments.",
      "Created an admin dashboard for user management, content control, and system operations including news aggregation triggers.",
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
    github: "https://github.com/NaufalHD12/echobrief",
  },
  {
    slug: "predictive-maintenance-copilot",
    title: "Predictive Maintenance Copilot",
    summary:
      "Architected a microservices-based predictive maintenance platform for manufacturing, integrating AI agents for real-time machine health analysis and alerts.",
    description: [
      "Architected and led the development of a predictive maintenance platform for the manufacturing sector, orchestrating a microservices ecosystem to monitor industrial machine health.",
      "Implemented real-time event streaming via Socket.IO to deliver critical machine failure alerts and synchronized updates across the dashboard.",
      "Engineered an Agentic AI service using FastAPI, LangChain, and LangGraph to analyze telemetry data, providing instant root-cause insights and maintenance recommendations.",
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
      "Microservices architecture",
      "Agentic AI",
      "Real-time streaming",
    ],
    image: projectPredictiveMaintenance,
    github: "https://github.com/NaufalHD12/predictive-maintenance-copilot",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker: Carbon Footprint Tracker",
    summary:
      "Built a comprehensive MERN-stack carbon footprint tracker with activity logging, interactive dashboard, community challenges, and educational quizzes.",
    description: [
      "Developed a full-stack personal carbon footprint tracking application using React 19, Node.js, Express, and MongoDB with comprehensive feature set.",
      "Implemented activity logging across 4 categories (Transportation, Food, Energy, Shopping) with accurate emission calculations using DEFRA 2024 emission factors.",
      "Built an intelligent dashboard with interactive Recharts visualizations, weekly/monthly/yearly statistics, and tree planting equivalent metrics.",
      "Created community challenges with leaderboards, progress tracking, and badge systems to encourage carbon reduction.",
      "Integrated educational quizzes with difficulty levels, score tracking, and cooldown systems for consistent learning.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redis", "TailwindCSS", "Recharts", "JWT"],
    highlights: ["Full-Stack MERN", "Interactive Dashboard", "Gamification Features"],
    image: projectEcoTracker,
    github: "https://github.com/NaufalHD12/eco-tracker",
  },
  {
    slug: "persona-nexus",
    title: "Persona Nexus: AI Community Platform",
    summary:
      "Developed a full-stack community platform with AI moderation, real-time features, and DevOps pipeline for seamless social interactions.",
    description: [
      "Architected and developed the full-stack web application using Django, HTMX, and Alpine.js.",
      "Implemented comprehensive social features, including OAuth authentication and real-time notifications.",
      "Integrated AI functionality for content moderation and writing assistance.",
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
    description: [
      "Designed a multi-agent AI system using CrewAI and GPT-4.1-mini for collaborative strategy generation.",
      "Integrated Retrieval-Augmented Generation with Tavily Search API for real-time market data.",
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
    description: [
      "Engineered an intelligent screening system to analyze job descriptions against CVs simultaneously.",
      "Developed a multi-language pipeline leveraging DeepSeek for matching scores and analysis.",
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
    description: [
      "Designed and trained a CNN image classification model using TensorFlow and EfficientNetB0.",
      "Built a RESTful API with Flask and deployed it on Google Cloud Platform.",
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
