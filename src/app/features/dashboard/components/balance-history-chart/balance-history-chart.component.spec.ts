import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceHistoryChartComponent } from './balance-history-chart.component';

describe('BalanceHistoryChartComponent', () => {
  let component: BalanceHistoryChartComponent;
  let fixture: ComponentFixture<BalanceHistoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceHistoryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
