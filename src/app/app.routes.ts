import { Routes } from '@angular/router';
import {JourneyOverviewComponent} from "./journeys/journey-overview/journey-overview.component";

export const routes: Routes = [
  { path: '',   component: JourneyOverviewComponent, pathMatch: 'full' },
  { path: '**', component: JourneyOverviewComponent }
];
