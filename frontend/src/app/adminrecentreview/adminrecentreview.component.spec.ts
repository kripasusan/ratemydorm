import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecentreviewComponent } from './adminrecentreview.component';

describe('AdminrecentreviewComponent', () => {
  let component: AdminrecentreviewComponent;
  let fixture: ComponentFixture<AdminrecentreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrecentreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecentreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
