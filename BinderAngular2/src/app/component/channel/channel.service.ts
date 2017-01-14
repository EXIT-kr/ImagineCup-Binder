import {Channel} from './channel.model';
import {Message} from "app/component/message/message.model";
export class ChannelService{
  private channels: Channel[] = [
    {active:false,
      title: '#Notice', messages:[
      {type:'notice', name:'', date:'',text:'This is Notice Channel'},
      {type:'general', name:'Tomas', date:'09:16pm',text:'Hello'},
      {type:'general',name:'James', date:'09:16pm',text:'Hello'}
    ],
      desc: 'Important Things'},
    {active:false,
      title: '#General', messages:[
      {type:'notice',name:'', date:'',text:'This is General Channel'},
      {type:'general',name:'Sam', date:'09:16pm',text:'Hello'}
    ],
      desc: 'free chatting'}

  ];
  getChannels(){
    return this.channels;
  }
  addChnnel(){
    var newMessages: Message[] = [];
    var newChannel: Channel = new Channel(false,"new channel","new channel",newMessages);
    this.channels.push(newChannel);
  }
}
