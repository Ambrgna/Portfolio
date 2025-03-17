import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetprojectsService {

  constructor() { }
  getData(){
    return [
      {
        title:"Portfolio", 
        github:"https://github.com/Ambrgna/Portfolio", 
        site:"",
        skills:"Angular, Bootstrap",
        list:[
          "Crafted an \"About\" page that includes convenient links to my GitHub and LinkedIn profiles.",
          "Developed a Skills Page showcasing my computer science proficiency, including the skills I have acquired, learned, and currently utilize.",
          "Projects Page showcasing a compilation of the projects I've created.",
          "The front-end allows easy editing of each page by manipulating objects." 
        ]
      },
      {
        title:"UMKC Capstone Project", 
        github:"https://github.com/451R-Team-Japn/Firebase2",
        site:"https://japn-a71a1.firebaseapp.com/",
        skills:"HTML, CSS, Bootstrap, JavaScript, jQuery, DataTables, Node.js, Cloud Firestore, and Jira",
        list:[
          "Developed a web application where UMKC students can apply for a grader or lab instructor position, and where admins can view applicants and add positions.", 
          "Writes and fetches data from Cloud Firestore.", 
          "Designed front-end using HTML, CSS, Bootstrap, JavaScript, and jQuery.", 
          "Built back-end using JavaScript and Node.js."
        ]
      },
      {
        title:"X Men's Morris", 
        github:"https://github.com/Team-Brownies/x_mens_morris", 
        site:"",
        skills:"Java, Junit, JavaFX, Agile Development",
        list:[
          "Developed Java application 9 Men's Morris game.", 
          "Two game modes 9 Men's Morris or 6 Men's Morris.", 
          "Custom animations for game pieces",
          "Able to play against two humans, a human and a computer, or two computers.",
          "Three computer difficulties that make better moves on harder difficulties."
        ]
      },
      {
        title:"React SOS Game", 
        github:"https://github.com/Ambrgna/SOS", 
        site:"https://ambrgna.github.io/SOS/",
        skills:"HTML, CSS, JavaScript, React, Bootstrap",
        list:[
          "Developed React Web application SOS game.", 
          "Two game modes General, play until the board is filled, and Simple, play until the first SOS is made.", 
          "Custom board size, any value great than three.",
          "Able to play against two humans, a human and a computer, or two computers." 
        ]
      },
      {
        title:"Color Compare Tool", 
        github:"https://github.com/ColorAssist/Java-Demo", 
        skills:"Java, Junit",
        list:[
          "Developed a Java Desktop application that takes an area in two images and compares their colors.", 
          "Finds average RGB values of color in an area then compares the color distance between the two." 
        ]
      },
      {
        title:"Projects Database", 
        github:"https://github.com/Week11Project/Project-Database", 
        skills:"Angular, Bootstrap, Java, Jira, Spring, Spring Boot, MySQL, AWS",
        list:[
          "Developed at GenSpark.", 
          "Designed an Angular-based web application showcasing user profiles and their respective projects.", 
          "Implemented user registration and account creation functionalities for adding and editing projects.",
          "Leveraged Spring Security to ensure restricted access to the REST API, allowing only logged-in users.",
          "Users can seamlessly add, edit, and view their own projects, as well as explore projects from other users." 
        ]
      },
      {
        title:"Restaurant Fullstack", 
        github:"https://github.com/Week13Project/Restaurant-Fullstack", 
        site:"https://github.com/Week13Project/Spring-Boot-Restaurant-Fullstack",
        skills:"Angular, Bootstrap, Java, Jira, Spring, Spring Boot, MySQL, AWS",
        list:[
          "Developed at GenSpark.", 
          "Created an app for users to view restaurants and their menus.",
          "The application allows users to register either as restaurant owners or as regular users.",
          "Regular users have the ability to browse through a comprehensive list of restaurants and explore the items available on their menus.",
          "Restaurant owners have the capability to generate fresh restaurant entries, curate menus for their establishments, and exercise full control over editing or removing any content associated with their accounts."
          
        ]
      },
      {
        title:"Client and Project Management", 
        github:"https://github.com/Ambrgna/mySoloProject", 
        site:"https://github.com/Ambrgna/Solo-Project-Spring-Boot",
        skills:"Angular, Bootstrap, Java, JUnit, Jira, Spring, Spring Boot, MySQL, AWS",
        list:[
          "Developed at GenSpark.", 
          "Developed an application that enables users to access client information and project details.",
          "Users have the option to register either as team leads or team members.",
          "Non-logged-in users can browse clients with public access and their associated projects.",
          "Team members can view all clients shared with them and their respective projects.",
          "Team members can also access and view all projects they are involved in.",
          "Team leads possess the authority to create new clients, as well as generate and manage clients for whom they have access. They can also edit or delete any relevant content within their access permissions."
        ]
      },
    ]
  }
}
