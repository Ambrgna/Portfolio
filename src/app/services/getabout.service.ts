import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetaboutService {

  constructor() { }
  getText(){
    return "Hello, and welcome to my portfolio! I am a software developer who is experienced in many skills such as HTML, CSS, JavaScript, Java, Angular, Spring, MySQL, Bootstrap, and many more. With a strong foundation in these technologies, I have successfully delivered numerous projects and contributed to the development of scalable and robust software solutions. Please explore my portfolio to learn more about my skills and experiences.";
  }
  getName(){
    return "Joshua Pritchett";
  }
  getGithub(){
    return "https://github.com/Ambrgna";
  }
  getLinkedIn(){
    return "https://www.linkedin.com/in/josh-pritchett-457059201/";
  }
}

