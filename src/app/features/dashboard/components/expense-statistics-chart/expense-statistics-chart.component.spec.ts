import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseStatisticsChartComponent } from './expense-statistics-chart.component';

describe('ExpenseStatisticsChartComponent', () => {
  let component: ExpenseStatisticsChartComponent;
  let fixture: ComponentFixture<ExpenseStatisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseStatisticsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
