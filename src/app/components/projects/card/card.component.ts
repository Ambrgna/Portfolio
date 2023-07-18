import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title : String = "";
  @Input() github : String = "";
  @Input() site : String = "";  

  isGithubHidden : boolean = false;  
  isSiteHidden : boolean = false; 
  siteLogo:boolean=true;

  ngOnInit() {
    if (this.github=="") {
      this.isGithubHidden = true;
    }
    if (this.site=="") {
      this.isSiteHidden = true;
    }
    if (this.site.includes("https://github.com/")) {
      this.siteLogo = false;
    }
  }
}
