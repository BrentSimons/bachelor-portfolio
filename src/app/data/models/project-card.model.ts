import {Category} from "./category-model";

type When = 'year1' | 'year2' | 'year3' | 'free time';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  when: When;
  category: Category
  description: string;
  mainImageLocation: string;
}
