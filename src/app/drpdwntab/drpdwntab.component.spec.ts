import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpdwntabComponent } from './drpdwntab.component';

describe('DrpdwntabComponent', () => {
  let component: DrpdwntabComponent;
  let fixture: ComponentFixture<DrpdwntabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrpdwntabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrpdwntabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
