import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  //We can define message tag`s type property to 'notice' or default:'general'.
  //@input() define customized property for this tag.(type is customized property here)
  @Input() type = 'general';
  //isNotice() return the boolean value according to type property.
  isNotice(){
    if(this.type =='notice'){
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
