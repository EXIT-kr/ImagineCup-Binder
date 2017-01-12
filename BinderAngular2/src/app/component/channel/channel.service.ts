import {Channel} from './channel.model';
export class ChannelService{
  private channels: Channel[] = [
    {title: '#Notice', desc: 'Important Things'},
    {title: '#General', desc: 'Free Talking Channel'}
  ];
  getChannels(){
    return this.channels;
  }
  addChnnel(){
    var newChannel: Channel = new Channel("new channel","new channel");
    this.channels.push(newChannel);
  }
}
