import { Component, Input, OnChanges } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ProjectTextSection } from '../../data/models/project-card.model';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [NgForOf, NgOptimizedImage],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
})
export class TextSectionComponent implements OnChanges {
  @Input() textSection!: ProjectTextSection;

  protected firstDescriptions: string[] = [];
  protected lastDescriptions: string[] = [];
  protected title: string = '';

  ngOnChanges() {
    if (this.textSection) {
      this.title = this.textSection.title;
      this.firstDescriptions = this.textSection.description.slice(
        0,
        this.textSection.description.length / 2,
      );
      this.lastDescriptions = this.textSection.description.slice(
        this.textSection.description.length / 2,
      );
    }
  }

  protected readonly projects = projects;
}
