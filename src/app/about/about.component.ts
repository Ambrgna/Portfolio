import { Component } from '@angular/core';
import { GetaboutService } from '../getabout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  text : string | undefined;
  name : string | undefined;
  github : string | undefined;
  linkedin : string | undefined;

  constructor() {
    let aboutService = new GetaboutService();
    this.text=  aboutService.getText();
    this.name=  aboutService.getName();
    this.github=  aboutService.getGithub();
    this.linkedin=  aboutService.getLinkedIn();
  }

}
