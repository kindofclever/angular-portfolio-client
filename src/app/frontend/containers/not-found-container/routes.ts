import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./not-found-container.component'),
  },
] as Route[];
