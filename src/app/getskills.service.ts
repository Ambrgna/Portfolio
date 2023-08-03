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
        icon: 'fa-solid fa-a'
      },
      {
        title: 'Test Driven Development',
        icon: 'fa-solid fa-t'
      },
      {
        title: 'Java',
        icon: 'fa-brands fa-java'
      },
      {
        title: 'Spring',
        icon: 'fa-solid fa-s'
      },
      {
        title: 'Spring Boot',
        icon: 'fa-solid fa-s'
      },
      {
        title: 'MySQL',
        icon: 'fa-solid fa-m'
      },
      {
        title: 'Rest APIs',
        icon: 'fa-solid fa-a'
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
        icon: 'fa-solid fa-t'
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
      {
        title: 'Node.js',
        icon: 'fa-brands fa-node-js'
      }
    ]      
  }
}
  
