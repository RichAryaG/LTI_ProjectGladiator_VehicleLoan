import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanregisterComponent } from './loanregister.component';

describe('LoanregisterComponent', () => {
  let component: LoanregisterComponent;
  let fixture: ComponentFixture<LoanregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
