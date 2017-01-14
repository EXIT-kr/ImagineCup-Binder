import { Component, OnInit } from '@angular/core';
import {Channel,ChannelService} from "app/component";



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  channels :Channel[] = [];
  addChannel(){
    this.channelService.addChannel();
  }
  addMessage(text){
    this.channelService.addMessage(this.channels[this.activeChannel],text);
  }
  activeChannel = 0;
  channelClicked(channel){
    for(var i =0;i<this.channels.length;i++){
      if(this.channels[i]===channel){
        this.activeChannel = i;
        return;
      }
    }
    channel.active = true;
  }
  formEntered(event){
    if(event.keyCode===13){
      this.addMessage(event.target.value);

    }
  }
  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    this.channels = this.channelService.getChannels();
  }

}
