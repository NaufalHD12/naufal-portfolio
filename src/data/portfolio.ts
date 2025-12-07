import { FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaCogs, FaRobot, FaDatabase } from "react-icons/fa";
import {
  SiScikitlearn, SiTensorflow, SiFlask, SiFastapi, SiDjango, SiJavascript, SiDotnet, SiAlpinedotjs, SiReact, SiHtmx, SiTailwindcss, SiMongodb, SiPostgresql, SiGooglecloud, SiExpress, SiGraphql, SiLangchain, SiSocketdotio, SiRedis, SiOpenai, SiChartdotjs, SiPandas, SiNumpy, SiPlotly
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  image?: string;
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

export const SKILLS: Skill[] = [
  { name: "Python", icon: FaPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "JavaScript", icon: SiJavascript },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Hapi", icon: FaNodeJs },
  { name: "C#", icon: TbBrandCSharp },
  { name: "ASP.NET", icon: SiDotnet },
  { name: "Alpine", icon: SiAlpinedotjs },
  { name: "React", icon: SiReact },
  { name: "HTMX", icon: SiHtmx },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "TimescaleDB", icon: FaDatabase },
  { name: "Neo4j", icon: SiGraphql },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
  { name: "SDLC", icon: FaCogs },
  { name: "AWS", icon: FaAws },
  { name: "GCP", icon: SiGooglecloud },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Plotly", icon: SiPlotly },
  { name: "LangChain", icon: SiLangchain },
  { name: "OpenAI", icon: SiOpenai },
  { name: "AI/ML", icon: FaRobot },
  { name: "Chart.js", icon: SiChartdotjs },
  { name: "Socket.IO", icon: SiSocketdotio }
];

export const PROJECTS: Project[] = [
  {
    slug: "predictive-maintenance-copilot",
    title: "Predictive Maintenance Copilot",
    summary: "Architected a microservices-based predictive maintenance platform for manufacturing, integrating AI agents for real-time machine health analysis and alerts.",
    description: [
      "Architected and led the development of a predictive maintenance platform for the manufacturing sector, orchestrating a microservices ecosystem to monitor industrial machine health.",
      "Implemented real-time event streaming via Socket.IO to deliver critical machine failure alerts and synchronized updates across the dashboard.",
      "Engineered an Agentic AI service using FastAPI, LangChain, and LangGraph to analyze telemetry data, providing engineers with real-time health summaries.",
    ],
    techStack: ["Hapi", "NodeJS", "FastAPI", "LangChain", "LangGraph", "Socket.IO", "TimescaleDB"],
    highlights: ["Microservices architecture", "Agentic AI", "Real-time streaming"],
    github: "https://github.com/NaufalHD12/predictive-maintenance-copilot",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker: Carbon Footprint App",
    summary: "Built a scalable MERN-stack app with RESTful APIs, caching, and secure authentication for users to track and reduce their carbon footprints.",
    description: [
      "Architected a robust RESTful API with Node.js and Express, featuring comprehensive OpenAPI documentation.",
      "Optimized application performance by integrating Redis for efficient caching strategies.",
      "Secured user data through a JWT-based authentication system with role-based access control.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    highlights: ["RESTful API", "Caching & Rate Limiting", "RBAC Security"],
    github: "https://github.com/NaufalHD12/eco-tracker",
    demo: "https://eco-tracker-demo.com",
  },
  {
    slug: "persona-nexus",
    title: "Persona Nexus: AI Community Platform",
    summary: "Developed a full-stack community platform with AI moderation, real-time features, and DevOps pipeline for seamless social interactions.",
    description: [
      "Architected and developed the full-stack web application using Django, HTMX, and Alpine.js.",
      "Implemented comprehensive social features, including OAuth authentication and real-time notifications.",
      "Integrated AI functionality for content moderation and writing assistance.",
    ],
    techStack: ["Django", "HTMX", "Alpine.js", "OAuth", "Chart.js", "AWS EC2", "Docker"],
    highlights: ["Full-Stack Development", "AI Integration", "DevOps Pipeline"],
    github: "https://github.com/NaufalHD12/PersonaNexus",
    demo: "https://www.personanexus.club/",
  },
  {
    slug: "venture-mind",
    title: "VentureMind: AI Business Co-Pilot",
    summary: "Created a multi-agent AI system for generating business strategies, with RAG integration and asynchronous processing.",
    description: [
      "Designed a multi-agent AI system using CrewAI and GPT-4.1-mini for collaborative strategy generation.",
      "Integrated Retrieval-Augmented Generation with Tavily Search API for real-time market data.",
    ],
    techStack: ["CrewAI", "GPT-4.1-mini", "RAG", "FastAPI", "PostgreSQL", "Docker"],
    highlights: ["Multi-Agent AI", "RAG Integration", "Async Architecture"],
    github: "https://github.com/NaufalHD12/venture-mind",
    demo: "https://venture-mind-production-531d.up.railway.app/",
  },
  {
    slug: "synapsis-ai",
    title: "Synapsis AI: CV Screening System",
    summary: "Engineered an AI-driven recruitment tool for multi-language CV screening with batch processing.",
    description: [
      "Engineered an intelligent screening system to analyze job descriptions against CVs simultaneously.",
      "Developed a multi-language pipeline leveraging DeepSeek for matching scores and analysis.",
    ],
    techStack: ["Python", "Flask", "DeepSeek", "PyMuPDF", "Pandas"],
    highlights: ["AI Screening Pipeline", "Multi-Language", "Batch Processing"],
    github: "https://github.com/NaufalHD12/synapsis-ai",
    demo: "https://synapsis-ai-production.up.railway.app/",
  },
  {
    slug: "acnescan",
    title: "AcneScan: Acne Detection App",
    summary: "Trained a CNN model for acne classification achieving 98% F1-score and deployed on GCP.",
    description: [
      "Designed and trained a CNN image classification model using TensorFlow and EfficientNetB0.",
      "Built a RESTful API with Flask and deployed it on Google Cloud Platform.",
    ],
    techStack: ["TensorFlow", "EfficientNetB0", "Flask", "GCP", "TensorFlow Lite"],
    highlights: ["CNN Model Training", "98% F1-Score", "Cloud Deployment"],
    github: "https://github.com/Acne-Scan",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    title: "React & Backend with AI",
    subtitle: "Asah by Dicoding & Accenture",
    date: "Aug 2025 - Present",
    description: "Advanced program focused on full-stack development with React, backend technologies, and AI integration."
  },
  {
    title: "Data Scientist Intern",
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
    description: "Intensive program led by Google, GoTo & Traveloka, focusing on ML concepts and TensorFlow."
  },
  {
    title: "Software Engineering Student",
    subtitle: "Universitas Pendidikan Indonesia",
    date: "2022 - Present",
    description: "Bachelor's degree with GPA 3.81, focusing on Backend & AI Engineering."
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
