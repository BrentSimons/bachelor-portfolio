import { Component, Input } from '@angular/core';
import { Project } from '../../data/models/project-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}

  protected goToDetails() {
    this.router.navigate([this.project.id]);
  }
}
