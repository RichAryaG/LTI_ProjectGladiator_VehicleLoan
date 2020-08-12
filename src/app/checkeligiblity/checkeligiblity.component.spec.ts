import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeligiblityComponent } from './checkeligiblity.component';

describe('CheckeligiblityComponent', () => {
  let component: CheckeligiblityComponent;
  let fixture: ComponentFixture<CheckeligiblityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckeligiblityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeligiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
