import { Component } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projectData: any;

  constructor(private projectService: ProjectService) {
    this.projectData = this.projectService.projectData;
    console.log(this.projectData);
    
  }



}
