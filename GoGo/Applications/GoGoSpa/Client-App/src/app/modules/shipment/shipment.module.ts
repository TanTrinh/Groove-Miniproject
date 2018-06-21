import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedComponent } from './ShipmentAssigned/assigned.component';
import { ShipmentPickingComponent } from './shipment-picking/shipment-picking.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AssignedComponent,
    ShipmentPickingComponent
  ]
})
export class ShipmentModule { }
