export class Message{
  type:string;
  name:string;
  date:string;
  text:string;
  constructor(type:string,name:string,date:string,text:string){
    this.type = type;
    this.name = name;
    this.date = date;
    this.text = text;
  }
}
