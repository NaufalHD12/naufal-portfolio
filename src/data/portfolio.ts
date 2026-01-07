import { FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaCogs, FaRobot, FaDatabase } from "react-icons/fa";
import {
  SiScikitlearn, SiTensorflow, SiFlask, SiFastapi, SiDjango, SiJavascript, SiDotnet, SiAlpinedotjs, SiReact, SiHtmx, SiTailwindcss, SiMongodb, SiPostgresql, SiGooglecloud, SiExpress, SiGraphql, SiLangchain, SiSocketdotio, SiRedis, SiOpenai, SiChartdotjs, SiPandas, SiNumpy, SiPlotly, SiTypescript, SiRabbitmq, SiCelery, SiKeras, SiStreamlit
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
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "Celery", icon: SiCelery },
  { name: "Keras", icon: SiKeras },
  { name: "Streamlit", icon: SiStreamlit }
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
      "Full-Stack Application",
      "AI-Powered Audio",
      "Async Task Processing",
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
  },
  {
    slug: "tweets-sentiment-analysis",
    title: "Tweets Sentiment Analysis",
    summary:
      "Developed an end-to-end ML pipeline using TFX for sentiment analysis of tweets, achieving high accuracy in binary classification.",
    description: [
      "Built a comprehensive machine learning pipeline using TensorFlow Extended (TFX) components for automated data processing, validation, and model training.",
      "Implemented data ingestion with CsvExampleGen, statistics generation with StatisticsGen, and schema inference with SchemaGen for robust data handling.",
      "Created anomaly detection using ExampleValidator and data transformation with Transform component for feature engineering and preprocessing.",
      "Developed a binary classification model using TensorFlow/Keras with text vectorization, embedding layers, and convolutional networks for sentiment analysis.",
      "Achieved 89% binary accuracy and 0.94 AUC score, with systematic evaluation using TFX Evaluator component and threshold-based model validation.",
    ],
    techStack: ["Python", "TensorFlow", "TFX", "Keras", "TF Data Validation"],
    highlights: [
      "End-to-End ML Pipeline",
      "TFX Components",
      "High Accuracy Model",
    ],
    image: projectTweetsSentiment,
    github: "https://github.com/NaufalHD12/tweets-sentiment-analysis",
  },
  {
    slug: "anime-recommendation-system",
    title: "Anime Recommendation System",
    summary:
      "Built a hybrid recommendation engine combining content-based and collaborative filtering for personalized anime suggestions.",
    description: [
      "Developed a robust recommendation system model using Content-Based and Collaborative Filtering techniques to help users discover new anime.",
      "Implemented content-based filtering by analyzing anime metadata (genres, themes, demographics) to find similar content.",
      "Applied collaborative filtering using user ratings and preferences to identify patterns and make personalized recommendations.",
      "Combined both approaches in a hybrid system to overcome limitations of individual methods and improve recommendation accuracy.",
      "Achieved high precision and low prediction error through extensive model evaluation and optimization.",
    ],
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    highlights: [
      "Hybrid Recommendation",
      "Content & Collaborative Filtering",
      "High Accuracy",
    ],
    image: projectAnimeRecommendation,
    github: "https://github.com/NaufalHD12/anime-recommendation-system",
  },
  {
    slug: "student-performance-predictor",
    title: "Student Performance Predictor",
    summary:
      "Created a machine learning model using CatBoost to predict student academic performance based on comprehensive feature analysis.",
    description: [
      "Conducted extensive exploratory data analysis on the UCI Student Performance dataset, examining correlations between demographic, behavioral, and academic factors.",
      "Performed comprehensive feature engineering, including encoding categorical variables and standardizing numerical features for optimal model performance.",
      "Implemented and compared multiple regression algorithms including Linear Regression, KNN, Random Forest, XGBoost, and CatBoost.",
      "Selected CatBoost as the final model due to its superior performance, achieving high R² scores and low error metrics on the test set.",
      "Identified key predictors of academic success, including parental education, study time, and past academic performance.",
    ],
    techStack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "Matplotlib"],
    highlights: [
      "Comprehensive EDA",
      "Multiple ML Algorithms",
      "High Prediction Accuracy",
    ],
    image: projectStudentPerformance,
    github: "https://github.com/NaufalHD12/student-performance-predictor",
  },
  {
    slug: "ecommerce-public-dashboard",
    title: "Ecommerce Public Dashboard",
    summary:
      "Developed an interactive Streamlit dashboard for ecommerce analytics with comprehensive data visualization and business insights.",
    description: [
      "Built a comprehensive ecommerce analytics dashboard using Streamlit for interactive data exploration and visualization.",
      "Implemented data processing pipelines to handle large datasets and perform real-time calculations for key business metrics.",
      "Created multiple visualization types including charts, graphs, and KPI cards to display sales trends, customer behavior, and product performance.",
      "Added filtering and drill-down capabilities to allow users to explore data at different granularities (daily, weekly, monthly).",
      "Deployed the dashboard on Streamlit Cloud for public access and easy sharing with stakeholders.",
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
    highlights: [
      "Interactive Dashboard",
      "Real-time Analytics",
      "Public Deployment",
    ],
    image: projectEcommerceDashboard,
    github: "https://github.com/NaufalHD12/ecommerce-public-dashboard",
    demo: "https://submission-ecommerce-public-dtwvbgakmi3wdkutzwun8p.streamlit.app/",
  },
  {
    slug: "bike-sharing-dashboard",
    title: "Bike Sharing Dashboard",
    summary:
      "Created a comprehensive data analysis dashboard for bike sharing systems with predictive analytics and usage insights.",
    description: [
      "Developed a complete data analysis solution for bike sharing systems using Python and Streamlit for the dashboard interface.",
      "Implemented data preprocessing and cleaning pipelines to handle raw bike sharing data including weather conditions, seasonality, and usage patterns.",
      "Created interactive visualizations showing usage patterns, peak hours, popular stations, and seasonal trends.",
      "Deployed the dashboard on Streamlit Cloud for easy access and real-time data exploration.",
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"],
    highlights: [
      "Predictive Analytics",
      "Usage Pattern Analysis",
      "Interactive Visualizations",
    ],
    image: projectBikeSharing,
    github: "https://github.com/NaufalHD12/bike-sharing-dashboard",
    demo: "https://bikesharinganalysisfal.streamlit.app/",
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
