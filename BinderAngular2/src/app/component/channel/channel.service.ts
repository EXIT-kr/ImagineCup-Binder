import {Channel} from './channel.model';
import {Message} from "app/component/message/message.model";
export class ChannelService{
  //chat_id:string, sender_id:string, receiver_id:string, chat_words:string, chat_time:string, chat_read:boolean
  private channels: Channel[] = [
    {active:false,
      title: '#Notice', messages:[
      {type: 'notice', chat_id:'1', sender_id:'James', receiver_id:'Tom',chat_words:'This is Notice Channel',chat_time:'05:11am',chat_read:true},
      {type: 'notice',chat_id:'2', sender_id:'Tom', receiver_id:'James',chat_words:'I know!',chat_time:'05:12am',chat_read:true},
      {type: 'notice',chat_id:'3', sender_id:'James', receiver_id:'Tom',chat_words:'Fuck!',chat_time:'05:13am',chat_read:false}
      ],
      desc: 'Important Things'},
    {active:false,
      title: '#General', messages:[
      {type: 'general',chat_id:'4', sender_id:'James', receiver_id:'Tom',chat_words:'This is Notice Channel',chat_time:'03:07am',chat_read:true},
      {type: 'general',chat_id:'5', sender_id:'Tom', receiver_id:'James',chat_words:'I know man',chat_time:'03:08am',chat_read:false}
    ],
      desc: 'free chatting'}

  ];
  getChannels(){
    return this.channels;
  }
  addChannel(){
    var newMessages: Message[] = [];
    var newChannel: Channel = new Channel(false,"new channel","new channel",newMessages);
    this.channels.push(newChannel);
  }
  /*
  addMessage(channel:Channel,text){
    var newMessage = new Message('general','Me','12:00pm',text);
    channel.messages.push(newMessage);
  }
  */
}
