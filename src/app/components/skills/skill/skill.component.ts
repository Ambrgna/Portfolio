import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent{
  @Input() icon : String = "";
  @Input() title : String = "";
  noIcon:boolean=false;
  
  ngOnInit(){
    if(!this.icon.includes("-")){
      this.noIcon=true;
    }
  }
}
