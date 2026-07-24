import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(
        ({ HomeComponent }) => HomeComponent,
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        ({ ProjectsComponent }) => ProjectsComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(
        ({ AboutComponent }) => AboutComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        ({ ContactComponent }) => ContactComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
