import { Component } from '@angular/core';
import { GetprojectsService } from '../../services/getprojects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  Projects;

  constructor() {
    let projectsService = new GetprojectsService();
    this.Projects=  projectsService.getData();
  }
}
