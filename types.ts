
export type Language = 'en' | 'zh';

export interface ResumeContent {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    role: string;
    name: string;
    tagline: string;
    cta: string;
  };
  // Fix: Added missing skillsTitle and competencies properties to match the structure in constants.ts and usage in AboutView.tsx
  about: {
    title: string;
    description: string;
    skillsTitle: string;
    competencies: {
      title: string;
      description: string;
    }[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[]; // Added: Specific skills for this experience
}

export interface EducationItem {
  school: string;
  college: string;
  degree: string;
  period: string;
  gpa: string;
  logo: string;
  courses: string[];
  courseLabel: string;
  academicProjects?: {
    title: string;
    desc: string;
    pdfUrl?: string;
  }[];
  projectLabel?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}