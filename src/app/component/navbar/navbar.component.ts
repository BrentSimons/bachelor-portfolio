import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() homePage: boolean = true;

  constructor(private router: Router) {}


  protected scrollToAboutMe(): void {
    const nextHeader = document.querySelector('#about-me');
    nextHeader?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToEducation(): void {
    const nextHeader = document.querySelector('#education');
    nextHeader?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToSkills(): void {
    const nextHeader = document.querySelector('#skills');
    nextHeader?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToProjects(): void {
    const nextHeader = document.querySelector('#projects');
    nextHeader?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToInternship(): void {
    const nextHeader = document.querySelector('#internship');
    nextHeader?.scrollIntoView({ behavior: 'smooth' });
  }

  protected navigateHome() {
    this.router.navigate(['']).then(_r => {
      this.scrollToAboutMe()
    });
  }
}
