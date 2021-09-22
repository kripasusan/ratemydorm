import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmainbodyComponent } from './adminmainbody.component';

describe('AdminmainbodyComponent', () => {
  let component: AdminmainbodyComponent;
  let fixture: ComponentFixture<AdminmainbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmainbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmainbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
