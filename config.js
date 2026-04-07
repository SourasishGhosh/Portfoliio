/**
 * ============================================================
 *  PORTFOLIO CONFIG — Edit everything here, nowhere else.
 * ============================================================
 */

const CONFIG = {

  /* ── Personal ─────────────────────────────────────────── */
  name:       "Your Name",
  role:       "Software Engineer",
  tagline:    "I build clean, scalable software and love solving hard problems.",
  avatar:     "", // URL or relative path to your photo. Leave "" to show initials.
  email:      "you@email.com",
  location:   "City, Country",
  resumeUrl:  "", // Link to your resume PDF. Leave "" to hide the button.

  /* ── Social Links ─────────────────────────────────────── */
  social: {
    github:   "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter:  "",   // Leave "" to hide
    website:  "",   // Leave "" to hide
  },

  /* ── About ────────────────────────────────────────────── */
  about: `I'm a software engineer with X years of experience building web applications.
I'm passionate about clean architecture, developer experience, and open source.
When I'm not coding, I enjoy hiking, reading, and drinking too much coffee.`,

  /* ── Skills ───────────────────────────────────────────── */
  // Group your skills into categories
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Go"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "GitHub Actions", "AWS", "Linux"],
    },
  ],

  /* ── Experience ───────────────────────────────────────── */
  experience: [
    {
      company:    "Company Name",
      role:       "Senior Software Engineer",
      period:     "2022 – Present",
      location:   "Remote",
      description: "Led development of core platform features serving 1M+ users. Reduced API latency by 40% through caching and query optimization.",
      tech:       ["TypeScript", "React", "Node.js", "PostgreSQL"],
    },
    {
      company:    "Another Company",
      role:       "Software Engineer",
      period:     "2020 – 2022",
      location:   "New York, NY",
      description: "Built and maintained microservices for the payments infrastructure. Improved deployment pipeline reducing release time from 2 hours to 20 minutes.",
      tech:       ["Python", "Docker", "AWS", "Redis"],
    },
  ],

  /* ── Projects ─────────────────────────────────────────── */
  projects: [
    {
      name:        "Project Alpha",
      description: "An open-source CLI tool that automates repetitive dev tasks. Gained 500+ GitHub stars in the first month.",
      tech:        ["Go", "GitHub Actions"],
      github:      "https://github.com/yourusername/project-alpha",
      live:        "", // Leave "" to hide live link
    },
    {
      name:        "Project Beta",
      description: "A real-time collaboration tool built with WebSockets and React. Supports 50+ concurrent users per session.",
      tech:        ["React", "Node.js", "WebSockets"],
      github:      "https://github.com/yourusername/project-beta",
      live:        "https://projectbeta.com",
    },
    {
      name:        "Project Gamma",
      description: "A data pipeline that ingests and processes 10GB+ of logs daily and surfaces insights via a dashboard.",
      tech:        ["Python", "PostgreSQL", "Docker"],
      github:      "",
      live:        "",
    },
  ],

  /* ── Education ────────────────────────────────────────── */
  education: [
    {
      institution: "University Name",
      degree:      "B.Sc. Computer Science",
      period:      "2016 – 2020",
    },
  ],

};
