/**
 * ============================================================
 *  PORTFOLIO CONFIG — Edit everything here, nowhere else.
 * ============================================================
 */

const CONFIG = {

  /* ── Personal ─────────────────────────────────────────── */
  name:       "Sourasish Ghosh",
  role:       "ML & Data Science Engineer",
  tagline:    "BS in Data Science · M.Sc. in Atmospheric Science · Building end-to-end ML systems and real-time data pipelines.",
  avatar:     "assets/photo.jpg",   // → put your photo here (see instructions)
  email:      "sourasishghosh02@gmail.com",
  location:   "Kolkata, India",
  resumeUrl:  "assets/resume.pdf",  // → put your resume PDF here (see instructions)

  /* ── Social Links ─────────────────────────────────────── */
  social: {
    github:   "https://github.com/SourasishGhosh",
    linkedin: "https://www.linkedin.com/in/sourasish-ghosh-b8ba36281",
    twitter:  "",
    website:  "",
  },

  /* ── About ────────────────────────────────────────────── */
  about: `I'm a data scientist and ML engineer with a background in Atmospheric Science and Data Science. I specialize in building end-to-end ML systems — from data pipelines and model training to deployment and real-time inference.

My work spans anomaly detection on flight telemetry, autonomous UAV navigation stacks, cough classification with DNNs, and hybrid Fuzzy–Random Forest models for weather prediction. I enjoy working at the intersection of scientific computing, backend systems, and applied machine learning.

Currently working as an ML & Systems Engineer at Spaceborn, building real-time ROS 2 systems for autonomous UAVs.`,

  /* ── Skills ───────────────────────────────────────────── */
  skills: [
    {
      category: "Languages",
      items: ["Python", "SQL", "Fortran", "LaTeX"],
    },
    {
      category: "ML / DL",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "TabNet", "Librosa"],
    },
    {
      category: "Data & Backend",
      items: ["FastAPI", "PostgreSQL", "PySpark", "SQLAlchemy", "Pydantic"],
    },
    {
      category: "Infra & Tools",
      items: ["Docker", "Apache Kafka", "Redis", "ROS 2", "MAVROS"],
    },
    {
      category: "Cloud & DB",
      items: ["GCP", "Azure (AZ-900)", "BigQuery", "Cloud Functions", "Render"],
    },
    {
      category: "Environments",
      items: ["Linux/Unix", "Git", "GitHub", "VS Code", "QGIS"],
    },
  ],

  /* ── Experience ───────────────────────────────────────── */
  experience: [
    {
      company:    "Spaceborn",
      role:       "ML and System Engineer",
      period:     "Feb 2026 – Present",
      location:   "Remote",
      description: "Architected a real-time ROS 2 obstacle avoidance stack with an APF local planner, UKF object tracking, and YOLO-based perception running at 50Hz. Built an anomaly detection engine for flight telemetry using Isolation Forest, and a bi-directional Kafka + Redis telemetry bridge to a FastAPI backend with Avro serialization. Fused multi-modal sensor data (TF-Luna LIDAR, HC-SR04 sonar) via a dedicated ESP32 co-processor.",
      tech: ["ROS 2", "YOLO", "Isolation Forest", "Apache Kafka", "Redis", "FastAPI", "MAVROS"],
    },
    {
      company:    "Excelerate",
      role:       "Data Analyst Intern",
      period:     "Dec 2025 – Jan 2026",
      location:   "Remote",
      description: "Acted as Project Lead for analysis of candidate hiring datasets across ~200 countries. Uncovered key findings in yield management, geographic dominance, and operational efficiency. Delivered KPI frameworks with future business recommendations using Python, Excel, and BI tools.",
      tech: ["Python", "Excel", "BI Tools", "KPI Design"],
    },
    {
      company:    "IIT Madras (Online)",
      role:       "Workshop: Introduction to Cloud using GCP",
      period:     "May 2025",
      location:   "Online",
      description: "Worked with Compute Engine, BigQuery, Cloud Storage, Cloud Functions, and Pub/Sub. Built a dashboard system for real-time cloud-based data streams.",
      tech: ["GCP", "BigQuery", "Pub/Sub", "Cloud Functions", "Compute Engine"],
    },
  ],

  /* ── Projects ─────────────────────────────────────────── */
  projects: [
    {
      name:        "Python-based Finance Backend System",
      description: "High-performance financial backend with FastAPI and SQLAlchemy using a strict separation of concerns (Routers, CRUD, Models, Schemas). Features Role-Based Access Control (Admin, Analyst, Viewer), PostgreSQL schema design, and Pydantic validation throughout.",
      tech:        ["FastAPI", "SQLAlchemy", "PostgreSQL", "Pydantic", "RBAC"],
      github:      "",
      live:        "",
    },
    {
      name:        "Coughometer – DNN Cough Classifier",
      description: "End-to-end cough classification app with a DNN model, FastAPI backend, and HTML/JS frontend. Trained on public datasets (Coswara, COUGHVID), packaged with Docker, and deployed on Render.",
      tech:        ["DNN", "FastAPI", "Docker", "Render", "Librosa"],
      github:      "",
      live:        "",
    },
    {
      name:        "Hybrid Fuzzy–Random Forest: Severe Weather Prediction",
      description: "M.Sc. thesis project. Developed a hybrid model integrating Fuzzy Logic and Random Forest for severe weather prediction, achieving 88.6% accuracy on 24 years of Kolkata weather data.",
      tech:        ["Random Forest", "Fuzzy Logic", "Python", "Scikit-learn"],
      github:      "",
      live:        "",
    },
    {
      name:        "BDM: Inventory Optimization for a Local Café",
      description: "IITM capstone project optimizing inventory and maximizing profit for a local café. Performed SKU-level analysis, demand forecasting, and regression modeling achieving R² ≈ 0.96.",
      tech:        ["Python", "Regression", "Forecasting", "Business Analytics"],
      github:      "",
      live:        "",
    },
  ],

  /* ── Education ────────────────────────────────────────── */
  education: [
    {
      institution: "University of Calcutta",
      degree:      "M.Sc. in Atmospheric Sciences · CGPA: 8.155",
      period:      "2023 – 2025",
    },
    {
      institution: "Indian Institute of Technology, Madras",
      degree:      "BS in Data Science and Applications (Distance) · CGPA: 7.67",
      period:      "2023 – 2027",
    },
    {
      institution: "Chandernagore College, University of Burdwan",
      degree:      "B.Sc. Physics (Honours) · CGPA: 7.72",
      period:      "2020 – 2023",
    },
  ],

};
