import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BottomComponent } from './_includes/bottom.component';
import { TopComponent } from './_includes/top.component';
import { HeaderComponent } from './_includes/header.component';
import { LeftComponent } from './_includes/left.component';






import { ErrorComponent } from './error.component';

import { LoginComponent } from './login.component';
import { RightComponent } from './right.component';
import { MainAgendaComponent } from './main/main-agenda.component';
import { MainChatComponent } from './main/main-chat.component';
import { MainDashBoardComponent } from './main/main-dash-board.component';
import { MainLoginComponent } from './main/main-login.component';
import {routing} from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    BottomComponent,
    TopComponent,
    HeaderComponent,
    LeftComponent,

    ErrorComponent,

    LoginComponent,
    RightComponent,
    MainAgendaComponent,
    MainChatComponent,
    MainDashBoardComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
