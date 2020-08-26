import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedComponent } from './view-rejected.component';

describe('ViewRejectedComponent', () => {
  let component: ViewRejectedComponent;
  let fixture: ComponentFixture<ViewRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
