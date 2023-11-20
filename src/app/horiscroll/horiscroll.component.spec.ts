import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriscrollComponent } from './horiscroll.component';

describe('HoriscrollComponent', () => {
  let component: HoriscrollComponent;
  let fixture: ComponentFixture<HoriscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoriscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoriscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
