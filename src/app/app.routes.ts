import { Routes } from '@angular/router';
import {LayoutComponent} from "./frontend/layout/layout.component";

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
      component: LayoutComponent,
      loadChildren: () => import('./frontend/containers/welcome-container/routes'),
    },
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
