import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclgComponent } from './addclg.component';

describe('AddclgComponent', () => {
  let component: AddclgComponent;
  let fixture: ComponentFixture<AddclgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
