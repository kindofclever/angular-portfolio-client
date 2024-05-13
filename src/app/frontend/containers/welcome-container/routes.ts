import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./welcome-container.component'),
  },
] as Route[];
