import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HstlComponent } from './hstl.component';

describe('HstlComponent', () => {
  let component: HstlComponent;
  let fixture: ComponentFixture<HstlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HstlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HstlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
