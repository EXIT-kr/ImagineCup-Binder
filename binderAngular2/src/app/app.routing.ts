import {Routes,RouterModule} from "@angular/router";
import {MainDashBoardComponent} from "app/main/main-dash-board.component";
import {MainChatComponent} from "app/main/main-chat.component";
import {MainAgendaComponent} from "app/main/main-agenda.component"

const APP_ROUTES: Routes = [
  {path:'',component:MainDashBoardComponent},
  {path:'chat',component:MainChatComponent},
  {path:'agenda',component:MainAgendaComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

