export interface Project {
  title: string;
  description: string;
  stack: string[];
  workflow?: string[];
  status?: string;
  contribution?: string;
  videoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}

export interface Activity {
  title: string;
  type: "Hackathon" | "Competition" | "Open source";
  description: string;
  url?: string;
}

interface Portfolio {
  name: string;
  fullName: string;
  intro: string;
  about: string;
  portrait?: {
    url: string;
    alt: string;
    srcset?: string;
    width?: number;
    height?: number;
  };
  education?: { degree: string; college?: string; startYear?: string; graduation?: string; firstYearCgpa?: string };
  links: { email?: string; github?: string; instagram?: string; linkedin?: string; resume?: string };
  projects: Project[];
  moreProjects: { title: string; url: string }[];
  skills: { name: string; icon: string; purpose: string }[];
  experience: { role: string; organization: string; period: string; description: string }[];
  currentLearning: string[];
  activities: Activity[];
}

export const portraits = {
  hoodie: { url: "/images/alsaf-studio.webp", alt: "Studio portrait of Alsaf in a black hoodie", width: 1052, height: 1494 },
  shirt: { url: "/images/hero-shirt.webp", alt: "Alsaf in a light shirt and backwards cap", width: 640, height: 854 },
  blazer: { url: "/images/alsaf-1440.webp", alt: "Alsaf wearing a black blazer", width: 1440, height: 1920 },
};

export const portfolio: Portfolio = {
  name: "Alsaf",
  fullName: "Syed Mohd Alsaf",
  intro: "I’m interested in software engineering, especially the systems behind the interface.",
  about: "I got into coding because I wanted to take an idea in my head and make something I could hand to someone else and say, “Here, try this.”",
  education: { degree: "B.Tech in Computer Science and Engineering", college: "Dr. D. Y. Patil Vidyapeeth, Pune", startYear: "2025", graduation: "2029", firstYearCgpa: "8.9" },
  experience: [],
  portrait: portraits.hoodie,
  links: {
    email: "sayyedmohdalsaf06@gmail.com",
    instagram: "https://www.instagram.com/_syedalsaf/",
    github: "https://github.com/sayyedmohdalsaf06-afk",
  },
  // The first item is featured.
  projects: [
    {
      title: "ResuMatch",
      description: "A résumé analyzer that reads a PDF, extracts skills, and compares them with a set of job profiles to surface potential matches and missing skills.",
      contribution: "The app separates PDF parsing and rule-based matching from optional Gemini feedback. Visitors can see the extracted skills and match results before requesting a generated explanation.",
      status: "Personal project",
      stack: ["Python", "Streamlit", "PyMuPDF", "Gemini API"],
      workflow: ["Read PDF", "Extract skills", "Match job profiles"],
      repositoryUrl: "https://github.com/sayyedmohdalsaf06-afk/resumatch-ai",
    },
    {
      title: "NER PathSetu",
      description: "A logistics dashboard prototype that brings fleet locations, route decisions, and incident reports into one map-based interface. It includes a field view and simulated offline reporting.",
      status: "Prototype",
      stack: ["React", "TypeScript", "MapLibre GL", "Zustand"],
      repositoryUrl: "https://github.com/sayyedmohdalsaf06-afk/NER-PathSetu",
    },
  ],
  moreProjects: [
    { title: "CampusSwap AI", url: "https://github.com/sayyedmohdalsaf06-afk/CampusSwap-AI" },
    { title: "GapSight AI", url: "https://github.com/sayyedmohdalsaf06-afk/gapsight-ai" },
    { title: "Python Quiz App", url: "https://github.com/sayyedmohdalsaf06-afk/python-quiz-app" },
    { title: "Wordle Terminal Game", url: "https://github.com/sayyedmohdalsaf06-afk/wordle-terminal-game" },
  ],
  skills: [
    { name: "C", icon: "c", purpose: "Memory & pointers" },
    { name: "C++", icon: "cplusplus", purpose: "Data structures" },
    { name: "Python", icon: "python", purpose: "Scripts & automation" },
    { name: "HTML5", icon: "html5", purpose: "Page structure" },
    { name: "CSS3", icon: "css3", purpose: "Layout & motion" },
    { name: "Flask", icon: "flask", purpose: "Web apps" },
    { name: "FastAPI", icon: "fastapi", purpose: "API endpoints" },
    { name: "SQLite", icon: "sqlite", purpose: "Local databases" },
    { name: "Supabase", icon: "supabase", purpose: "Hosted PostgreSQL" },
    { name: "Firebase", icon: "firebase", purpose: "App backend services" },
    { name: "Git", icon: "git", purpose: "Version control" },
    { name: "GitHub", icon: "github", purpose: "Code sharing" },
    { name: "macOS", icon: "apple", purpose: "My workspace" },
  ],
  currentLearning: [
    "I’m in my second year, studying data structures and algorithms in C++ and Python, along with Computer Networks & Security.",
    "Outside class, I’m exploring cloud computing and getting familiar with AWS and Microsoft Azure.",
  ],
  activities: [],
};
