import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent {
  protected scrollToAboutMe(): void {
    const nextHeader = document.querySelector('#about-me');
    nextHeader?.scrollIntoView({behavior: 'smooth'});
  }
}
