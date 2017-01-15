//JEEWOO make this model.
export class Message{
  type : string;
  chat_id:string;
  sender_id:string;
  receiver_id:string;
  chat_words:string;
  chat_time:string;
  chat_read:boolean;
  constructor(type: string, chat_id:string, sender_id:string, receiver_id:string, chat_words:string, chat_time:string, chat_read:boolean){
    this.type = type;
    this.chat_id = chat_id;
    this.sender_id = sender_id;
    this.receiver_id = receiver_id;
    this.chat_words = chat_words;
    this.chat_time= chat_time;
    this.chat_read= chat_read;
  }
}
