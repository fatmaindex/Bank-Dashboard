// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./layouts/layouts.module').then((m) => m.LayoutsModule),
//   },
//   {
//     path: '**',
//     redirectTo: '',
//     pathMatch: 'full',
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./layouts/layouts-routing.module').then(m => m.LayoutsRoutingModule) // Load layout-specific routes
  },
  // Optional: Add non-layout routes (e.g., login, 404)
  // { path: 'login', loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent) }, // Example
  { path: '**', redirectTo: '/dashboard' } // Wildcard redirect (can be moved to layout routing if desired)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
