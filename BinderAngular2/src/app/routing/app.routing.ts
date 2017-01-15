import {Routes,RouterModule} from "@angular/router";
import {AgendaComponent,ChatComponent,DashComponent,LoginComponent} from "app/main";


// Route
const APP_ROUTES: Routes = [

  /*
    Path : URL 뒤에 붙는 부분
    해당 URL이 왔을 때 어떤 Component로 연결할지 정의를 해준다.
  */

  { path:'agenda',component:AgendaComponent},
  { path:'chat',component:ChatComponent},
  { path:'dash',component:DashComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
