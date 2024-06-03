import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProjectTextSection } from '../../../data/models/project-card.model';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-text-section-with-image',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf],
  templateUrl: './text-section-with-image.component.html',
  styleUrl: './text-section-with-image.component.scss',
})
export class TextSectionWithImageComponent implements OnChanges {
  @Input() textSection!: ProjectTextSection;

  protected imageLocation: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.imageLocation = this.textSection.imageLocation;
  }
}
