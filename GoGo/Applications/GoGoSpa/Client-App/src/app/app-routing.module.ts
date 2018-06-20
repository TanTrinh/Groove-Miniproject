import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { AssignedComponent } from './shipment/ShipmentAssigned/assigned.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'assigned', component: AssignedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
