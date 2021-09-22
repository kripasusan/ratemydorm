import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmdeletehstlComponent } from './adminmdeletehstl.component';

describe('AdminmdeletehstlComponent', () => {
  let component: AdminmdeletehstlComponent;
  let fixture: ComponentFixture<AdminmdeletehstlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmdeletehstlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmdeletehstlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
