import {Component, Input} from '@angular/core';
import {ProjectCard} from "../../data/models/project-card.model";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: ProjectCard;
}
