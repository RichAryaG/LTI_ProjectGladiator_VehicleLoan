import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationFormComponent } from './view-application-form.component';

describe('ViewApplicationFormComponent', () => {
  let component: ViewApplicationFormComponent;
  let fixture: ComponentFixture<ViewApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
