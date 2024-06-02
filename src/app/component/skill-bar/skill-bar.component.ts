import {Component, Input} from '@angular/core';
import {Skill} from "../../data/models/skill-model";

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss'
})
export class SkillBarComponent {
  @Input() skill: Skill = {
    percentage: 50,
    name: "A Skill"
  };
}
