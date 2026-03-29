import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'core' },
  {
    path: 'core',
    loadComponent: () =>
      import('./features/section-page/section-page.component').then(
        (m) => m.SectionPageComponent,
      ),
    data: { sectionId: 'core' },
  },
  {
    path: 'frontend',
    loadComponent: () =>
      import('./features/section-page/section-page.component').then(
        (m) => m.SectionPageComponent,
      ),
    data: { sectionId: 'frontend' },
  },
  {
    path: 'backend',
    loadComponent: () =>
      import('./features/section-page/section-page.component').then(
        (m) => m.SectionPageComponent,
      ),
    data: { sectionId: 'backend' },
  },
  {
    path: 'data',
    loadComponent: () =>
      import('./features/section-page/section-page.component').then(
        (m) => m.SectionPageComponent,
      ),
    data: { sectionId: 'data' },
  },
  {
    path: 'workflow',
    loadComponent: () =>
      import('./features/section-page/section-page.component').then(
        (m) => m.SectionPageComponent,
      ),
    data: { sectionId: 'workflow' },
  },
  {
    path: 'tech-stack',
    loadComponent: () =>
      import('./features/tech-stack/tech-stack.component').then(
        (m) => m.TechStackComponent,
      ),
  },
  { path: '**', redirectTo: 'core' },
];
