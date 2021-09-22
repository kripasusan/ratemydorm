import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmaddclgComponent } from './adminmaddclg.component';

describe('AdminmaddclgComponent', () => {
  let component: AdminmaddclgComponent;
  let fixture: ComponentFixture<AdminmaddclgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmaddclgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmaddclgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
