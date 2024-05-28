import {Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {ProjectDetailsComponent} from "./page/project-details/project-details.component";

export const routes: Routes = [{
  path: '', component: HomeComponent
}, {path: ':id', component: ProjectDetailsComponent}];
