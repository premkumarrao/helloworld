import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqToggleComponent } from './faq-toggle.component';

describe('FaqToggleComponent', () => {
  let component: FaqToggleComponent;
  let fixture: ComponentFixture<FaqToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
