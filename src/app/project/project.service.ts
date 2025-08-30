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
        title: 'Blogging Application',
        imageLink: 'assets/blogapp.png',
        description: `Developed a blog web application using Node.js, Express.js, and EJS, enabling users to create, update, delete, and view blog posts. 
The application integrates a MongoDB database to ensure posts persist between sessions. Implemented JWT-based 
authentication to secure user accounts, enabling login, registration, and role-based access control. Secured routes to ensure only 
authenticated users can create, edit, or delete posts while maintaining public access for viewing posts. Tested and debugged the 
application using Postman and manual testing, ensuring all features work as intended. `,
        technologies: ['Nodejs', 'Expressjs', 'EJS', 'MongoDB', 'Bootstrap'],
        liveLink: '',
        codeLink: 'https://github.com/Moulali2004/Blogging-Application',
      },
      {
        projectId: 2,
        title: 'URL Shortener',
        imageLink: 'assets/urlshortener.png',
        description: `Designed a user-friendly web interface allowing users to input, shorten, and manage URLs. Developed a backend API with Node.js 
and Express to generate unique short URLs and handle redirection. Integrated a MongoDB database to store original URLs, short 
codes, and click analytics for tracking usage. Implemented JWT-based authentication to secure user accounts and ensure 
authorized access. Added validation and error-handling to enhance security and prevent duplicate entries. `,
        technologies: ['Nodejs', 'Express', 'EJS', 'MongoDB', 'Postman'],
        liveLink: '',
        codeLink: 'https://github.com/Moulali2004/URL_SHORTENER',
      },
      {
        projectId: 3,
        title: 'JobForU - Job Listing Platform',
        imageLink: 'assets/jbfy.png',
        description: `Developed a job listing platform for students seeking job opportunities and implemented a secure user authentication system 
        using PHP and MySQL. Enabled features to browse job and internship listings, apply directly through the platform, save favorite 
        job listings for later, and track application status. Designed a responsive and user-friendly interface using HTML, CSS, and JavaScript to ensure accessibility across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'],
        liveLink: 'https://moulali2004.github.io/JobForU/',
        codeLink: 'https://github.com/Moulali2004/JobForU',
      },
      {
        projectId: 4,
        title: 'Personal Note Manager',
        imageLink: 'assets/personalnotemanager.png',
        description: `Personal Note Manager is a full-stack web application for creating, managing, and organizing 
        notes efficiently. The frontend is built with React.js, while the backend uses Node.js and Express.js, with MongoDB 
        for data persistence. It provides full CRUD operations through a RESTful API and ensures a responsive, user-friendly 
        interface across devices. Tools like Axios, Mongoose, and Bootstrap enhance functionality and styling. The project is 
        structured with clear separation of frontend and backend, making it easy to set up and maintain. Users can run it locally 
        by configuring MongoDB, installing dependencies, and starting both servers.`,
        technologies: ['Reactjs', 'Nodejs', 'Expressjs', 'MongoDB', 'TailwindCSS'],
        liveLink: '',
        codeLink: 'https://github.com/Moulali2004/Personal_Note_Manager',
      },
      {
        projectId: 5,
        title: 'Simon Game',
        imageLink: 'assets/simongame.png',
        description: `The Simon Game is a fun memory-based game built using HTML, CSS, and jQuery.
It challenges players to remember and repeat an ever-growing sequence of colors and sounds.
The game features an interactive UI with smooth animations and responsive design.
It’s a simple yet engaging project that strengthens logic, memory, and frontend development skills.`,
        technologies: ['HTML', 'CSS', 'JQuery'],
        liveLink: 'https://65f0921290c57b1bea7963b7--thriving-belekoy-9a6f13.netlify.app/',
        codeLink: 'https://github.com/Moulali2004/Simon-game',
      },
      {
        projectId: 6,
        title: 'MyRestaurant Menu',
        imageLink: 'assets/image.png',
        description: `Developed a dynamic restaurant menu using HTML, CSS, JavaScript, and Bootstrap. 
        Implemented menu filters for easy navigation and quick item access. Designed a responsive layout, 
        ensuring seamless user experience across devices.`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        liveLink: 'https://65eda318acb6fd649b30ccfb--effervescent-gaufre-e8db6b.netlify.app/',
        codeLink: 'https://github.com/Moulali2004/Personal_Note_Manager',
      },
      {
        projectId: 7,
        title: 'Jab Tv Landing Page',
        imageLink: 'assets/jabtv.png',
        description: `The JAB TV Landing Page is a visually engaging single-page website built using HTML, CSS, and JavaScript. 
        It showcases a modern layout with attractive sections such as a hero banner, featured shows, channel highlights, and a 
        call-to-action area for viewers. CSS was used to create a clean, responsive design that works seamlessly across devices,
         while JavaScript adds interactivity through dynamic elements like sliders, navigation effects, and animations. This project 
         demonstrates strong frontend skills in designing user-friendly and interactive web interfaces.`,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://moulali2004.github.io/JabTv/',
        codeLink: 'https://github.com/Moulali2004/JabTv',
      },
      {
        projectId: 8,
        title: 'Flappy Bird Game',
        imageLink: 'assets/flappybird.png',
        description: `Welcome to my Flappy Bird game project! This game is designed and developed using JavaScript, HTML, and CSS. Here’s a brief overview of what i have learn and achieve through this project:

Game Loop Creation: Learn to set up the main game loop to keep the game running smoothly.
Canvas Manipulation: Add and manipulate images on the canvas to bring your game to life.
Click Handlers: Implement click handlers to make the flappy bird jump with user interactions.
Random Pipe Generation: Create pipes that randomly generate and move across the screen.
Collision Detection: Detect collisions between the flappy bird and pipes to manage game over scenarios.
Score Tracking: Add a running score to keep track of the player's progress.
This project is a fantastic way to enhance your JavaScript skills while creating a fun and interactive game. Dive in and enjoy coding your own Flappy Bird game! 🚀`,


        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://moulali2004.github.io/flappy-bird/',
        codeLink: 'https://github.com/Moulali2004/flappy-bird',
      },
    ]
  }


  getProject(projectId: number) {
    return this.projectData[projectId];
  }
}
