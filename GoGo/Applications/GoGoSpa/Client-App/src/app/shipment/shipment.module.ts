import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedComponent } from './ShipmentAssigned/assigned.component';
import { ShipmentCreatingComponent } from './shipment-creating/shipment-creating.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AssignedComponent,
    ShipmentCreatingComponent,
  ]
})
export class ShipmentModule { }
