export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  github?: string;
  useCases?: {
    smallBusiness: string;
    mediumBusiness: string;
    enterprise: string;
  };
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  cta: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  skills: string[];
  icon?: React.ReactNode;
}