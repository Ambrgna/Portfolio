import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetprojectsService {

  constructor() { }
  getData(){
    return [
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
      }
    ]
  }
}
