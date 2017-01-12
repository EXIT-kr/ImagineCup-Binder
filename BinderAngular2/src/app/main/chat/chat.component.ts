import { Component, OnInit } from '@angular/core';
import {Message} from "app/component/message/message.model";
import {Channel} from "app/component/channel/channel.model";
import {MessageService} from "app/component/message/message.serivce";
import {ChannelService} from "app/component/channel/channel.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages :Message[] = [];
  channels :Channel[] = [];
  addChannel(){
    this.channelService.addChnnel();
  }
  addMessage(){
    this.messageService.addMessage();
  }
  constructor(private messageService:MessageService,private channelService:ChannelService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.channels = this.channelService.getChannels();
  }

}
