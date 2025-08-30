import { Component } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  project: any;
  projectId: any;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {

  }
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId');
      this.project = this.projectService.getProject(this.projectId - 1);
    })
  }

  


}
