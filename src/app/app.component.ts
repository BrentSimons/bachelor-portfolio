import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./section/hero/hero.component";
import {AboutMeComponent} from "./section/about-me/about-me.component";
import {EducationComponent} from "./section/education/education.component";
import {SkillsComponent} from "./section/skills/skills.component";
import {ProjectCardComponent} from "./component/project-card/project-card.component";
import {projectCards} from "./data/project-cards";
import {NgForOf} from "@angular/common";
import {ProjectCard} from "./data/models/project-card.model";
import {ProjectsComponent} from "./section/projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, AboutMeComponent, EducationComponent, SkillsComponent, ProjectCardComponent, NgForOf, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-brent-simons';

  projectCards: ProjectCard[] = projectCards;
}
