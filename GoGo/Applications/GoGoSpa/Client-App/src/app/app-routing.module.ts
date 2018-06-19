import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { RequestComponent } from './request/request.component';
import { DetailComponent } from './detail/detail.component';
import { ProblemComponent } from './problem/problem.component';
import { TrafficjamComponent } from './trafficjam/trafficjam.component';
import { ShipmentdetailComponent } from './shipmentdetail/shipmentdetail.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { AssignedComponent } from './shipment/ShipmentAssigned/assigned.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'assigned', component: AssignedComponent },
      {
        path: 'request', component: RequestComponent, children: [
        { path: 'requestdetail', component: DetailComponent },
        { path: 'shipmentdetail', component: ShipmentdetailComponent },
        { path: 'listrequest', component: ListrequestComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
