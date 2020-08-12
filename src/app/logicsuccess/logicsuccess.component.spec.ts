import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicsuccessComponent } from './logicsuccess.component';

describe('LogicsuccessComponent', () => {
  let component: LogicsuccessComponent;
  let fixture: ComponentFixture<LogicsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
