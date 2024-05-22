import { Routes } from '@angular/router';
import {LayoutComponent} from "./frontend/layout/layout.component";
import WelcomeContainerComponent from "./frontend/containers/welcome-container/welcome-container.component";

export const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: `welcome`
    },
    {
      path: `welcome`,
      loadComponent: () => WelcomeContainerComponent},
    {
      path: 'not-found',
      component: LayoutComponent,
      loadChildren: () => import('./frontend/containers/not-found-container/routes'),
    },
    {
      path: '404',
      redirectTo: 'not-found'
    },
    {
      path: '**',
      redirectTo: 'not-found',
    },
  ],
},];
