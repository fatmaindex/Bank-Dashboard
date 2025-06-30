
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('../features/transactions/transactions.module').then(m => m.TransactionsModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('../features/accounts/accounts.module').then(m => m.AccountsModule)
  },
  { path: '**', redirectTo: 'dashboard' } // Wildcard within layout (optional)
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutsRoutingModule { }
