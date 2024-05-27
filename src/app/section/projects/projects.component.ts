import { Component } from '@angular/core';
import {projectCards} from "../../data/project-cards";
import {NgForOf} from "@angular/common";
import {ProjectCardComponent} from "../../component/project-card/project-card.component";

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

    protected readonly projectCards = projectCards;
}
