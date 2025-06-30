import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CreditCardComponent } from '../../shared/components/credit-card/credit-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreditCardComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
