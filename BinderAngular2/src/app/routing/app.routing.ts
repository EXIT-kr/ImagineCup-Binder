import {Routes,RouterModule} from "@angular/router";
import {AgendaComponent,ChatComponent,DashComponent,LoginComponent} from "app/main";



const APP_ROUTES: Routes = [
  { path:'agenda',component:AgendaComponent},
  { path:'chat',component:ChatComponent},
  { path:'dash',component:DashComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
