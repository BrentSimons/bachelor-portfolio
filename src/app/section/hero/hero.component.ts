import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  protected scrollToAboutMe(): void {
    const nextHeader = document.querySelector('#about-me');
    nextHeader?.scrollIntoView({behavior: 'smooth'});
  }
}
