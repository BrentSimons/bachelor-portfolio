import { Component } from '@angular/core';
import { Skill } from '../../data/models/skill-model';
import { Skills } from '../../data/skills';
import { SkillBarComponent } from '../../component/page-home/skill-bar/skill-bar.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent, NgForOf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private skillsList: Skill[] = Skills;
  private skillsSortedOnPercentage = this.skillsList.sort(
    (a, b) => b.percentage - a.percentage,
  );

  protected columnOne: Skill[] = [];
  protected columnTwo: Skill[] = [];

  constructor() {
    this.splitSkillsIntoColumns();
  }

  private splitSkillsIntoColumns(): void {
    this.columnOne = this.skillsSortedOnPercentage.slice(
      0,
      Math.ceil(this.skillsSortedOnPercentage.length / 2),
    );
    this.columnTwo = this.skillsSortedOnPercentage.slice(
      Math.ceil(this.skillsSortedOnPercentage.length / 2),
      this.skillsSortedOnPercentage.length,
    );
  }
}
