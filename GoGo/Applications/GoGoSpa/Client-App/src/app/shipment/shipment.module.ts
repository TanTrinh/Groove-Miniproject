import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedComponent } from './ShipmentAssigned/assigned.component';

// TODO: move shipment to ../modules
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AssignedComponent,
  ]
})
export class ShipmentModule { }
