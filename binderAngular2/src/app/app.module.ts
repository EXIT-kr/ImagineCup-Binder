import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopComponent,BottomComponent,LeftComponent} from './_include';
import { CardComponent,ColumnComponent,ContainerComponent,ColumnService} from './component';
import { AgendaComponent,ChatComponent,DashComponent,LoginComponent} from './main';
import { ChannelComponent } from './component/channel/channel.component';
import { MessageComponent } from './component/message/message.component';
import { BttonComponent } from './component/btton/btton.component';
import {MessageService} from "app/component/message/message.serivce";
import {ChannelService} from "app/component/channel/channel.service";


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    LeftComponent,
    CardComponent,
    ColumnComponent,
    ContainerComponent,
    AgendaComponent,
    ChatComponent,
    DashComponent,
    LoginComponent,
    ChannelComponent,
    MessageComponent,
    BttonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    providers: [ColumnService,MessageService,ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
