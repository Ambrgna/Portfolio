import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetskillsService {

  constructor() { }
  getData(){
    return [
      {
        title: 'Agile Development',
        icon: 'Agile'
      },
      {
        title: 'Test Driven Development',
        icon: 'TDD'
      },
      {
        title: 'Java',
        icon: 'fa-brands fa-java'
      },
      {
        title: 'Spring',
        icon: 'fas fa-leaf'
      },
      {
        title: 'Spring Boot',
        icon: 'fas fa-power-off'
      },
      {
        title: 'MySQL',
        icon: 'SQL'
      },
      {
        title: 'Rest APIs',
        icon: 'API'
      },
      {
        title: 'HTML',
        icon: 'fa-brands fa-html5'
      },
      {
        title: 'CSS',
        icon: 'fa-brands fa-css3-alt'
      },
      {
        title: 'TypeScript',
        icon: 'TS'
      },
      {
        title: 'JavaScript',
        icon: 'fa-brands fa-square-js '
      },
      {
        title: 'Angular',
        icon: 'fa-brands fa-angular'
      },
      {
        title: 'AWS',
        icon: 'fa-brands fa-aws'
      },
      {
        title: 'Git',
        icon: 'bi-git '
      },
      {
        title: 'GitHub',
        icon: 'bi-github'
      },
      {
        title: 'Bootstrap',
        icon: 'bi-bootstrap'
      },
      {
        title: 'React',
        icon: 'fa-brands fa-react'
      },
      // {
      //   title: 'Node.js',
      //   icon: 'fa-brands fa-node-js'
      // }
    ]      
  }
}
  
