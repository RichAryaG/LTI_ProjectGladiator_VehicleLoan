import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeligiblityuserComponent } from './checkeligiblityuser.component';

describe('CheckeligiblityuserComponent', () => {
  let component: CheckeligiblityuserComponent;
  let fixture: ComponentFixture<CheckeligiblityuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckeligiblityuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeligiblityuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
