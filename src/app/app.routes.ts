import {Routes} from '@angular/router';
import {MainViewComponent} from './main-view/main-view.component';
import {QueueCountComponent} from "./queue-count/queue-count.component";

export const routes: Routes = [
  {path: 'main-view', component: MainViewComponent},
  {path: 'qcc', component: QueueCountComponent},
];
