import { Category } from './category-model';

export type ProjectTextSection = {
  title: string;
  description: string[];
  imageLocation: string | null;
};

export type TeamMate = {
  name: string;
  linkedIn: string;
};

export type TeamProjectSection = {
  isTeamProject: boolean;
  team: TeamMate[] | null;
  text: ProjectTextSection | null;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  when: number;
  category: Category;
  technologies: string[];
  description: string;
  mainImageLocation: string;
  teamProject: TeamProjectSection;
  textSections: ProjectTextSection[];
  projectHostedUrl: string | null;
  githubUrl: string | null;
};
