import {Category} from "./category-model";

type When = 'year1' | 'year2' | 'year3' | 'free time';

export type ProjectTextSection = {
  title: string;
  description: string[];
  imageLocation: string | null;
}

export type TeamMate = {
  name: string;
  linkedIn: string;
}

export type TeamProjectSection = {
  isTeamProject: boolean;
  team: TeamMate[] | null;
  text: ProjectTextSection | null;
}

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  when: When;
  category: Category;
  technologies: string[];
  description: string;
  mainImageLocation: string;
  teamProject: TeamProjectSection;
  textSections: ProjectTextSection[];
  projectHostedUrl: string | null;
}
