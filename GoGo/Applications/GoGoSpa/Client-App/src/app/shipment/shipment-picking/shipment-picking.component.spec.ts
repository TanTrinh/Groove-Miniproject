import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPickingComponent } from './shipment-picking.component';

describe('ShipmentPickingComponent', () => {
  let component: ShipmentPickingComponent;
  let fixture: ComponentFixture<ShipmentPickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentPickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
