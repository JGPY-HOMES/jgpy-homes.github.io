export interface Carousel {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface TeamStat {
  id: string;
  icon: string;
  number: string;
  label: string;
  description: string;
}

export interface TeamFeature {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
}

export interface TeamIntro {
  title: string;
  subtitle: string;
  description: string;
  stats: TeamStat[];
  features: TeamFeature[];
}

export interface Position {
  id: string;
  title: string;
  requirements: string[];
  benefits: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: string[];
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BenefitCategory {
  id: string;
  category: string;
  items: string[];
}

export interface Activity {
  id: string;
  title: string;
  type: 'company' | 'expansion';
  date: string;
  description: string;
  image: string;
  participants?: number;
}

export interface TeamExpansion {
  title: string;
  subtitle: string;
  description: string;
  positions: Position[];
  trainingPrograms: TrainingProgram[];
  values: CompanyValue[];
  activities: Activity[];
}

export interface HistoryItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface DevelopmentHistory {
  title: string;
  subtitle: string;
  description: string;
  timeline: HistoryItem[];
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CompanyValues {
  title: string;
  subtitle: string;
  description: string;
  values: ValueItem[];
}

export interface AboutPageData {
  carousels: Carousel[];
  teamIntro: TeamIntro;
  teamExpansion: TeamExpansion;
  developmentHistory: DevelopmentHistory;
  companyValues: CompanyValues;
}
