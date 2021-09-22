import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmaddhstlComponent } from './adminmaddhstl.component';

describe('AdminmaddhstlComponent', () => {
  let component: AdminmaddhstlComponent;
  let fixture: ComponentFixture<AdminmaddhstlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmaddhstlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmaddhstlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
