import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectData: any;

  constructor() {
    this.projectData = [
      {
        projectId: 1,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 2,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 3,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 4,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 5,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 6,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 7,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
      {
        projectId: 8,
        title: 'Blogging Application',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
      },
    ]
  }


  getProject(projectId: number) {
    return this.projectData[projectId];
  }
}
