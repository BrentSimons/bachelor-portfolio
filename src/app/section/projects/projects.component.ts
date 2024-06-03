import { Component, OnInit } from '@angular/core';
import { projects } from '../../data/projects';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ProjectCardComponent } from '../../component/page-home/project-card/project-card.component';
import { Project } from '../../data/models/project-card.model';
import { Category } from '../../data/models/category-model';

type CategoryFilter = Category | '';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, ProjectCardComponent, NgClass, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  public readonly projects: Project[] = projects;
  public readonly categories: Category[] = [
    ...new Set(projects.map((p) => p.category)),
  ]; // Extract unique categories

  protected filteredProjects: Project[] = [];
  protected categoryFilter: CategoryFilter = '';

  ngOnInit(): void {
    this.filteredProjects = this.projects;
  }

  protected setCategoryFilter(category: CategoryFilter) {
    this.categoryFilter = category;
    this.filterProjects();
  }

  protected filterProjects(): void {
    if (this.categoryFilter) {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === this.categoryFilter,
      );
    } else {
      this.filteredProjects = this.projects;
    }
  }

  protected moreThanFiveProjects(): boolean {
    return this.filteredProjects.length >= 5;
  }
}
