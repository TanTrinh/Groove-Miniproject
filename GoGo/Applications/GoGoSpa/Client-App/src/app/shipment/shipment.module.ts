import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedComponent } from './ShipmentAssigned/assigned.component';
import { ShipmentCreatingComponent } from './shipment-creating/shipment-creating.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AssignedComponent,
    EditFormComponent,
  ]
})
export class ShipmentModule { }
