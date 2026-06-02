/**
 * ============================================================
 *  PORTFOLIO CONFIG — Edit everything here, nowhere else.
 * ============================================================
 */

const CONFIG = {

  /* ── Personal ─────────────────────────────────────────── */
  name:       "Sourasish Ghosh",
  role:       "AI Engineer · ML Engineer · Data Scientist",
  tagline:    "BS in Data Science · M.Sc. in Atmospheric Science · Building end-to-end ML systems, RAG pipelines, and real-time data infrastructure.",
  avatar:     "assets/CV_photo.jpg",   // put your photo in assets/photo.jpg
  email:      "sourasishghosh02@gmail.com",
  location:   "West Bengal, India",
  resumeUrl:  "assets/Sourasish_Ghosh_resume_02.pdf",  // put your resume PDF in assets/resume.pdf

  /* ── Social Links ─────────────────────────────────────── */
  social: {
    github:   "https://github.com/SourasishGhosh",
    linkedin: "https://www.linkedin.com/in/sourasish-ghosh-b8ba36281",
    twitter:  "",
    website:  "",
  },

  /* ── About ────────────────────────────────────────────── */
  about: `I'm an ML engineer and data scientist with a background in Atmospheric Science and Data Science. I specialize in building end-to-end ML systems — from real-time data pipelines and model training to RAG systems and cloud deployment.

My work spans anomaly detection on drone telemetry, multimodal RAG with vector databases, cough classification with DNNs, and hybrid Fuzzy–Random Forest models for weather prediction. I enjoy working at the intersection of applied ML, backend systems, and MLOps.

Previously interned at Spaceborn building computer vision and state-estimation pipelines for autonomous drones, and at Excelerate as a Project Lead for candidate hiring analytics.`,

  /* ── Skills ───────────────────────────────────────────── */
  skills: [
    {
      category: "Languages",
      items: ["Python", "SQL", "Java", "Bash", "Fortran", "LaTeX"],
    },
    {
      category: "ML & AI",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCLIP", "LangChain", "LangGraph", "RAG", "NLP", "spaCy", "MobileNetV2 ONNX", "TensorRT", "AWS Bedrock"],
    },
    {
      category: "LLM APIs",
      items: ["Claude API", "Gemini API", "OpenAI API", "Agent Flows", "Model Guardrails"],
    },
    {
      category: "Data & Databases",
      items: ["Qdrant", "ChromaDB", "PostgreSQL", "Redis", "Apache Kafka", "BigQuery", "PySpark", "Pandas", "NumPy"],
    },
    {
      category: "Cloud, DevOps & MLOps",
      items: ["Azure", "GCP", "AWS", "Docker", "Kubernetes", "MLflow", "Terraform", "GitHub Actions", "CI/CD", "Vercel", "Render"],
    },
    {
      category: "Frameworks & Tools",
      items: ["FastAPI", "Flask", "Uvicorn", "pytest", "Grafana", "Prometheus", "PowerBI", "A/B Testing"],
    },
  ],

  /* ── Experience ───────────────────────────────────────── */
  experience: [
    {
      company:    "Spaceborn",
      role:       "Machine Learning & Data Engineer (Intern)",
      period:     "Feb 2026 – Apr 2026",
      location:   "Remote",
      description: "Engineered a real-time computer vision and state-estimation pipeline for Drone OS, integrating YOLOv8n and MobileNetV2 ONNX with Unscented Kalman Filters to fuse multi-modal sensor data (LIDAR, Ultrasonic, RPi Cam) for predictive tracking. Deployed an unsupervised anomaly detection engine using Isolation Forest on high-frequency time-series telemetry. Architected a low-latency Kafka + Redis streaming pipeline with Avro serialization to power downstream ML models.",
      tech: ["YOLOv8n", "MobileNetV2 ONNX", "UKF", "Isolation Forest", "Apache Kafka", "Redis", "FastAPI"],
    },
    {
      company:    "Excelerate",
      role:       "Data Analyst Intern",
      period:     "Dec 2025 – Jan 2026",
      location:   "Remote",
      description: "Led analysis of candidate hiring datasets as Project Lead, covering ~200 countries. Identified key findings in yield management and geographic dominance using Python, Excel, and BI tools.",
      tech: ["Python", "Excel", "PowerBI", "KPI Design"],
    },
  ],

  /* ── Projects ─────────────────────────────────────────── */
  projects: [
    {
      name:        "E-Commerce Multimodal RAG System",
      description: "Multimodal RAG system with semantic search using Qdrant VectorDB. Integrated text and image embeddings via OpenCLIP and Gemini 2.5 Flash API. Backend built with FastAPI and Pydantic, with SlowAPI rate-limiting.",
      tech:        ["RAG", "Qdrant", "OpenCLIP", "Gemini API", "FastAPI"],
      github:      "https://github.com/SourasishGhosh/E-Commerce-Multimodal-RAG-System",   // add your GitHub link
      live:        "",
    },
    {
      name:        "Python-based Finance Backend System",
      description: "High-performance financial backend with FastAPI, SQLAlchemy, and PostgreSQL. Implements Role-Based Access Control (Admin, Analyst, Viewer) and Pydantic for end-to-end type safety.",
      tech:        ["FastAPI", "SQLAlchemy", "PostgreSQL", "Pydantic", "RBAC"],
      github:      "https://github.com/SourasishGhosh/Python-based_Finance_Backend_System",   // add your GitHub link
      live:        "",
    },
    {
      name:        "Coughometer – DNN Cough Classifier",
      description: "End-to-end cough classification app with a DNN model and FastAPI backend. Containerized with Docker and deployed on Render. Trained on the Coswara dataset.",
      tech:        ["DNN", "FastAPI", "Docker", "Render", "Librosa"],
      github:      "https://github.com/SourasishGhosh/Python-based_Finance_Backend_System",   // add your GitHub link
      live:        "",
    },
    {
      name:        "Hybrid Fuzzy–Random Forest: Severe Weather Prediction",
      description: "M.Sc. thesis. Hybrid model integrating Fuzzy Logic and Random Forest for severe weather prediction, achieving 88.6% accuracy on 24 years of Kolkata weather data.",
      tech:        ["Random Forest", "Fuzzy Logic", "Python", "Scikit-learn"],
      github:      "https://github.com/SourasishGhosh/M.Sc-Dissertation-",   // add your GitHub link
      live:        "",
    },
    {
      name:        "End-to-End QLoRA and RSLoRA LLM Fine-Tuning Pipeline on Unsloth",
      description: "An end-to-end guide and pipeline for fine-tuning LLMs using Unsloth, QLoRA, and Rank-Stabilised LoRA (RSLoRA). The project processes unstructured document resources into instruction-tuned synthetic conversational datasets, runs comparative configuration experiments across separate PEFT architectures, tracks performance scalars using TensorBoard metrics, and provides a stable runtime generation engine.",
      tech:        ["NVIDIA CUDA Toolkit", "PyTorch", "Python", "Unsloth","Gemma 2-2b","Gemini API","Hugging Face Transformers"],
      github:      "https://github.com/SourasishGhosh/End-to-End-QLoRA-and-RSLoRA-LLM-Fine-Tuning-Pipeline-on-Unsloth",   // add your GitHub link
      live:        "", 
    }
  ],

  /* ── Education ────────────────────────────────────────── */
  education: [
    {
      institution: "Indian Institute of Technology, Madras",
      degree:      "BS in Data Science and Applications (Distance) · CGPA: 7.73",
      period:      "2023 – 2027",
    },
    {
      institution: "University of Calcutta",
      degree:      "M.Sc. in Atmospheric Sciences · CGPA: 8.155",
      period:      "2023 – 2025",
    },
    {
      institution: "Chandernagore College, Burdwan University",
      degree:      "B.Sc. in Physics (Honours) · CGPA: 7.72",
      period:      "2020 – 2023",
    },
  ],

};
