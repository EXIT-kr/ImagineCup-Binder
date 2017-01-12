import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() notice = 'no';
  isNotice(){
    if(this.notice ==='yes'){
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
