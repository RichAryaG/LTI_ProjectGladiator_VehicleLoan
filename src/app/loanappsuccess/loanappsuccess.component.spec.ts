import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanappsuccessComponent } from './loanappsuccess.component';

describe('LoanappsuccessComponent', () => {
  let component: LoanappsuccessComponent;
  let fixture: ComponentFixture<LoanappsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanappsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanappsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
