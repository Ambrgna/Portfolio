import { Component } from '@angular/core';
import { GetskillsService } from '../../services/getskills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  Skills;

  constructor() {
    let skillsService = new GetskillsService();
    this.Skills=  skillsService.getData();
  }
}