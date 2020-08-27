import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiSchedulerComponent } from './emi-scheduler.component';

describe('EmiSchedulerComponent', () => {
  let component: EmiSchedulerComponent;
  let fixture: ComponentFixture<EmiSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
