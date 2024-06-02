import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-button.component.html',
  styleUrl: './scroll-button.component.scss'
})
export class ScrollButtonComponent {
  @Input() scrollUp: boolean | undefined;


  protected scrollToAboutMe(): void {
    const nextHeader = document.querySelector('#about-me');
    nextHeader?.scrollIntoView({behavior: 'smooth'});
  }
}
