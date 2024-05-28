import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./section/hero/hero.component";
import {AboutMeComponent} from "./section/about-me/about-me.component";
import {EducationComponent} from "./section/education/education.component";
import {SkillsComponent} from "./section/skills/skills.component";
import {ProjectCardComponent} from "./component/project-card/project-card.component";
import {NgForOf} from "@angular/common";
import {ProjectsComponent} from "./section/projects/projects.component";
import {InternshipComponent} from "./section/internship/internship.component";
import {FooterComponent} from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, AboutMeComponent, EducationComponent, SkillsComponent, ProjectCardComponent, NgForOf, ProjectsComponent, InternshipComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
