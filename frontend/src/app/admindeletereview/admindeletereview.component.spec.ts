import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletereviewComponent } from './admindeletereview.component';

describe('AdmindeletereviewComponent', () => {
  let component: AdmindeletereviewComponent;
  let fixture: ComponentFixture<AdmindeletereviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeletereviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeletereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
