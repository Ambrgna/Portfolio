import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // <!-- <app-skill class="col-md-2" icon="" title=""></app-skill>
  //         <app-skill class="col-md-2" icon="" title=""></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-java" title="Java"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-solid fa-s" title="Spring"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-solid fa-s" title="Spring Boot"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-solid fa-m" title="MySQL"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-solid fa-a" title="Rest APIs"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-html5" title="HTML"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-css3-alt" title="CSS"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-solid fa-t" title="TypeScript"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-square-js" title="JavaScript"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-angular" title="Angular"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-aws" title="AWS"></app-skill>
  //         <app-skill class="col-md-2" icon="bi-git" title="Git"></app-skill>
  //         <app-skill class="col-md-2" icon="bi-github" title="GitHub"></app-skill>
  //         <app-skill class="col-md-2" icon="bi-bootstrap" title="Bootstrap"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-react" title="React"></app-skill>
  //         <app-skill class="col-md-2" icon="fa-brands fa-node-js" title="Node.js"></app-skill> -->
       
  linkItems= [
    {
      title: 'Agile Development',
      icon: 'fa-solid fa-a'
    },
    {
      title: 'Test Driven Development',
      icon: 'fa-solid fa-t'
    },
    {
      title: 'Weather',
      icon: '/weather'
    },
    {
      title: 'Weather',
      icon: '/weather'
    },
    {
      title: 'Weather',
      icon: '/weather'
    },
    {
      title: 'Weather',
      icon: '/weather'
    },
    {
      title: 'Weather',
      icon: '/weather'
    },
  ]
  
}
