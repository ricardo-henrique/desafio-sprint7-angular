import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCarsComponent } from './consult-cars.component';

describe('ConsultCarsComponent', () => {
  let component: ConsultCarsComponent;
  let fixture: ComponentFixture<ConsultCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
