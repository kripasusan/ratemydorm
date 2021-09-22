import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfullComponent } from './addfull.component';

describe('AddfullComponent', () => {
  let component: AddfullComponent;
  let fixture: ComponentFixture<AddfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
