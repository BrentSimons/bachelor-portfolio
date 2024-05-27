import { Component } from '@angular/core';
import {projects} from "../../data/projects";
import {NgForOf} from "@angular/common";
import {ProjectCardComponent} from "../../component/project-card/project-card.component";
import {Project} from "../../data/models/project-card.model";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    protected readonly projects: Project[] = projects;

    protected moreThanFiveProjects(): boolean {
        return this.projects.length >= 5;
    }
}
