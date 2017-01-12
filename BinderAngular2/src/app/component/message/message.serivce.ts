import {Message} from "app/component/message/message.model";
export class MessageService{
  private messages: Message[] = [
    {name: 'David Hook', date: '7:23 pm',text:'hello everyone~'},
    {name: 'Andriano James', date: '3:24 am',text:'I cannot sleep!!'}
  ]
  getMessages(){
    return this.messages;
  }
  addMessage(){};
}
