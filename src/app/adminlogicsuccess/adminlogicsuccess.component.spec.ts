import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogicsuccessComponent } from './adminlogicsuccess.component';

describe('AdminlogicsuccessComponent', () => {
  let component: AdminlogicsuccessComponent;
  let fixture: ComponentFixture<AdminlogicsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlogicsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlogicsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
