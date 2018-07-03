import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCreatingComponent } from './shipment-creating.component';

describe('ShipmentCreatingComponent', () => {
  let component: ShipmentCreatingComponent;
  let fixture: ComponentFixture<ShipmentCreatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentCreatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
