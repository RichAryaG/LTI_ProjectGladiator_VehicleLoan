import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLoanStatusComponent } from './check-loan-status.component';

describe('CheckLoanStatusComponent', () => {
  let component: CheckLoanStatusComponent;
  let fixture: ComponentFixture<CheckLoanStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLoanStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLoanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
