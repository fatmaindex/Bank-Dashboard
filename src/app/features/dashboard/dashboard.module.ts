import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CreditCardComponent } from '../../shared/components/credit-card/credit-card.component';
import { RecentTransactionComponent } from './components/recent-transaction/recent-transaction.component';
import { QuickTransferComponent } from './components/quick-transfer/quick-transfer.component';
import { ActivityChartComponent } from './components/activity-chart/activity-chart.component';
import { ExpenseStatisticsChartComponent } from './components/expense-statistics-chart/expense-statistics-chart.component';
import { BalanceHistoryChartComponent } from './components/balance-history-chart/balance-history-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreditCardComponent,
    RecentTransactionComponent,
    QuickTransferComponent,
    ActivityChartComponent,
    ExpenseStatisticsChartComponent,
    BalanceHistoryChartComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
