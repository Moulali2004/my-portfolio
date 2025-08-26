import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: any;

  constructor() { 
    this.skillCategories = [
      {
        category: 'Programming Languages',
        skills: [
          {name: 'Java', percentage: 50},
          {name: 'C/C++', percentage: 50},
          {name: 'Python', percentage: 90}
        ]
      },
      {
        category: 'Frontend',
        skills: [
          {name: 'HTML', percentage: 75},
          {name: 'CSS', percentage: 70},
          {name: 'JavaScript', percentage: 65},
          {name: 'TypeScript', percentage: 55},
          {name: 'Bootstrap', percentage: 90},
          {name: 'Angular', percentage: 80}
        ]
      },
      {
        category: 'Backend',
        skills: [
          {name: 'Node.js', percentage: 75},
          {name: 'Express', percentage: 70},
          {name: 'REST API', percentage: 50}
        ]
      },
      {
        category: 'Databases',
        skills: [
          {name: 'SQL', percentage: 80},
          {name: 'MySQL', percentage: 60},
          {name: 'MongoDB', percentage: 65}
        ]
      }
    ];
  }
}
