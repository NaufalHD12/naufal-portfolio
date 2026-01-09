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


export const PROJECTS = [
  {
    slug: "predictive-maintenance-copilot",
    title: "Predictive Maintenance Copilot",
    summary:
      "Enterprise-grade microservices platform for industrial IoT, featuring autonomous AI agents for real-time machine health diagnosis.",
    description: [
      "Architected a high-throughput microservices ecosystem for industrial IoT, utilizing Node.js (Hapi) for logic and TimescaleDB for massive sensor logs.",
      "Engineered an autonomous Agentic AI service using LangGraph that proactively diagnoses anomalies and prescribes maintenance actions.",
      "Implemented event-driven architecture via Socket.IO to stream critical failure alerts to operators with sub-second latency.",
    ],
    techStack: ["Microservices", "FastAPI", "LangGraph", "TimescaleDB", "Socket.IO", "Docker"],
    highlights: ["Agentic AI", "Industrial IoT", "Event-Driven"],
    image: projectPredictiveMaintenance,
    github: "https://github.com/NaufalHD12/predictive-maintenance-copilot",
  },
  {
    slug: "echobrief",
    title: "EchoBrief: AI News Podcast SaaS",
    summary:
      "News-to-Audio SaaS platform orchestrating GenAI pipelines for automated content synthesis and voice generation.",
    description: [
      "Built a scalable content pipeline that aggregates RSS feeds and transforms text into podcast-grade audio using DeepSeek and Edge TTS.",
      "Orchestrated asynchronous background processing using Celery and RabbitMQ to handle resource-intensive media generation tasks without blocking the UI.",
      "Implemented secure subscription tiers and API rate limiting using Redis, integrated with a payment gateway.",
    ],
    techStack: ["FastAPI", "React", "RabbitMQ", "Celery", "PostgreSQL", "Redis"],
    highlights: ["SaaS Architecture", "Async Processing", "GenAI Pipeline"],
    image: projectEchobrief,
    github: "https://github.com/NaufalHD12/echobrief",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker: Carbon Analytics Engine",
    summary:
      "Precision-focused carbon tracking platform featuring complex aggregation pipelines and gamified user engagement mechanics.",
    description: [
      "Engineered a precision-focused calculation engine utilizing DEFRA 2024 standards, transforming multi-category inputs into standardized emission metrics.",
      "Optimized MongoDB aggregation pipelines to process complex time-series data, enabling real-time generation of analytics dashboards.",
      "Architected a modular gamification system that handles state management for dynamic leaderboards and user retention loops.",
    ],
    techStack: ["React 19", "Node.js", "MongoDB Aggregations", "Redis", "Recharts"],
    highlights: ["Data Visualization", "Complex Logic", "System Design"],
    image: projectEcoTracker,
    github: "https://github.com/NaufalHD12/eco-tracker",
  },
  {
    slug: "venture-mind",
    title: "VentureMind: Multi-Agent Business Strategist",
    summary:
      "Collaborative multi-agent system utilizing CrewAI to autonomously research and generate comprehensive business strategies.",
    description: [
      "Orchestrated a Multi-Agent System (MAS) using CrewAI where distinct AI agents collaborate to perform market research, SWOT analysis, and strategy formulation.",
      "Integrated a RAG (Retrieval-Augmented Generation) layer with Tavily Search API to ground model outputs in real-time web data.",
      "Deployed as a containerized service ensuring consistent runtime environments across development and production.",
    ],
    techStack: ["CrewAI", "RAG", "FastAPI", "Docker", "PostgreSQL"],
    highlights: ["Multi-Agent System", "Autonomous Research", "LLM Orchestration"],
    image: projectVentureMind,
    github: "https://github.com/NaufalHD12/venture-mind",
  },
  {
    slug: "persona-nexus",
    title: "Persona Nexus: Community Platform",
    summary:
      "Full-stack social forum engineered for performance using Server-Side Rendering (SSR) and AI-assisted content moderation.",
    description: [
      "Architected a monolithic application using Django and HTMX to achieve Single Page Application (SPA) fluidity with Server-Side Rendering reliability.",
      "Integrated an AI moderation layer to automatically flag toxic content and assist users in drafting posts.",
      "Implemented a complete CI/CD pipeline using GitHub Actions for automated testing and deployment to AWS EC2.",
    ],
    techStack: ["Django", "HTMX", "AWS EC2", "CI/CD", "PostgreSQL"],
    highlights: ["Server-Side Rendering", "DevOps", "AI Moderation"],
    image: projectPersonaNexus,
    github: "https://github.com/NaufalHD12/PersonaNexus",
    demo: "https://www.personanexus.club/",
  },
   {
    slug: "synapsis-ai",
    title: "Synapsis AI: Intelligent ATS Pipeline",
    summary:
      "Automated recruitment tool capable of batch-processing CVs and matching them against job descriptions using LLMs.",
    description: [
      "Engineered an intelligent document processing pipeline using PyMuPDF and DeepSeek to extract and analyze candidate data from diverse file formats.",
      "Optimized for batch processing, allowing HR teams to rank hundreds of applicants against job requirements in minutes.",
      "Built a responsive interface for detailed candidate breakdown and match justification.",
    ],
    techStack: ["Python", "Flask", "LLM Engineering", "Pandas", "Document Processing"],
    highlights: ["Automated Screening", "Batch Processing", "NLP"],
    image: projectSynapsisAi,
    github: "https://github.com/NaufalHD12/synapsis-ai",
  },
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
    description: "Developed an AI-powered data entry automation system using Python and a full-stack equipment registration app."
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
