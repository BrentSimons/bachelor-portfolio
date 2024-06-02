import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {ScrollUpButtonComponent} from "../../component/scroll-up-button/scroll-up-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ScrollUpButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  protected scrollToAboutMe(): void {
    const nextHeader = document.querySelector('#about-me');
    nextHeader?.scrollIntoView({behavior: 'smooth'});
  }
}
