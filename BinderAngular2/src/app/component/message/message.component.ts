import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() type = 'general';
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
