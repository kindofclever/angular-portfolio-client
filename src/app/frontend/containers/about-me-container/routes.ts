import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./about-me-container.component'),
  },
] as Route[];
