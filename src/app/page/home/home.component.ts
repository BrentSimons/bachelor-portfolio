import { Component } from '@angular/core';
import { AboutMeComponent } from '../../section/about-me/about-me.component';
import { EducationComponent } from '../../section/education/education.component';
import { HeroComponent } from '../../section/hero/hero.component';
import { InternshipComponent } from '../../section/internship/internship.component';
import { ProjectsComponent } from '../../section/projects/projects.component';
import { SkillsComponent } from '../../section/skills/skills.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutMeComponent,
    EducationComponent,
    HeroComponent,
    InternshipComponent,
    ProjectsComponent,
    SkillsComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
