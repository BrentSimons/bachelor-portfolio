import { Component } from '@angular/core';
import {Project} from "../../data/models/project-card.model";
import {ActivatedRoute, Router} from "@angular/router";
import {projects} from "../../data/projects";
import {take, tap} from "rxjs";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  private id: string | undefined;
  private projectExists: Project | undefined;

  protected project: Project = {} as Project;

  constructor(private route: ActivatedRoute,
  private router: Router) {
    this.route.params
      .pipe(
        tap(params => {
          this.id = params['id'];
          this.projectExists = projects.find(project => project.id === this.id);
        }),
        take(1)
      )
      .subscribe();

    if (!this.projectExists) {
      this.returnToHome();
    } else {
      this.project = this.projectExists;
    }

    console.log(this.project)
  }

  protected returnToHome() {
    this.router.navigate(['']);
  }
}
