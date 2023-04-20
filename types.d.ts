interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
  category: string;
  level: string;
  background: string;
  usedCases: string[];
  usedProjects: string[];
  usedWork: string[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
  category: string;
  level: string;
  isShowcase: boolean;
  background: string;
  usedCases: string[];
  usedProjects: string[];
  usedWork: string[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  themeColor: string;
  isShowcase: boolean;
  linkToBuild: string;
  linkToCode: string;
  summary: string;
  technologies: Technology[];
}

type Social = {};
