import {Component,} from '@angular/core';
import {ScrollButtonComponent} from "../../component/scroll-up-button/scroll-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ScrollButtonComponent
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
