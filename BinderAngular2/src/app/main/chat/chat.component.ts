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
    this.channelService.addChnnel();
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
  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    this.channels = this.channelService.getChannels();
  }

}
