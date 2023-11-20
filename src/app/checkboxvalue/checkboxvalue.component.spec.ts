import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxvalueComponent } from './checkboxvalue.component';

describe('CheckboxvalueComponent', () => {
  let component: CheckboxvalueComponent;
  let fixture: ComponentFixture<CheckboxvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
