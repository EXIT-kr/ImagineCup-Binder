import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopComponent,BottomComponent,LeftComponent} from './_include';
import { CardComponent,ColumnComponent,ContainerComponent,
  ColumnService,ChannelComponent,MessageComponent,
  BttonComponent,MessageService,ChannelService} from './component';
import { AgendaComponent,ChatComponent,DashComponent,LoginComponent} from './main';



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
