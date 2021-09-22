import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmdeleteclgComponent } from './adminmdeleteclg.component';

describe('AdminmdeleteclgComponent', () => {
  let component: AdminmdeleteclgComponent;
  let fixture: ComponentFixture<AdminmdeleteclgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmdeleteclgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmdeleteclgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
