import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/account/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { AssignedComponent } from './shipment/ShipmentAssigned/assigned.component';
import { HomeComponent } from './home/home.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { ShipmentCreatingComponent } from './shipment/shipment-creating/shipment-creating.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent, children: [
      { path: 'request', component: RequestListComponent },
      { path: 'shipment', component: ShipmentCreatingComponent },
     ]},
    {
      path: 'home', component: HomeComponent, children: [
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
