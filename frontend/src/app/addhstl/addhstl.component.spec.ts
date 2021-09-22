import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhstlComponent } from './addhstl.component';

describe('AddhstlComponent', () => {
  let component: AddhstlComponent;
  let fixture: ComponentFixture<AddhstlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhstlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhstlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
