import { Route } from '@angular/router';
import { DashboardComponent } from '@avans-nx-workshop/share-a-meal/features';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboards',
  },
  {
    path: 'dashboards',
    pathMatch: 'full',
    component: DashboardComponent,
  },
];
