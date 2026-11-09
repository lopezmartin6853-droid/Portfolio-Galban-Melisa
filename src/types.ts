export interface CaseStudyProject {
  id: string;
  letter: string;
  title: string;
  summary: string;
  technologies: string[];
  level: string; // [Nivel / edad]
  urlPlaceholder: string;
  image?: string;
  imageAlt: string;
  caption: string;
  desafio: string;
  actividad: string;
  aprendizaje: string;
  hardware: string[];
}

export interface ContactData {
  email: string;
  social: string;
  locationMode: string;
  name: string;
  objectivePhrase: string;
}

export interface TimelineMilestone {
  period: string;
  role: string;
  focus: string;
  description: string;
}
