import {Message} from "app/component/message/message.model";
export class Channel{
  public active: boolean;
  public title: string;
  public desc: string;
  public messages: Message[];
  constructor(active: boolean,title:string, desc:string,messages:Message[]){
    this.active = active;
    this.title = title;
    this.desc = desc;
    this.messages = messages;
  }
}
