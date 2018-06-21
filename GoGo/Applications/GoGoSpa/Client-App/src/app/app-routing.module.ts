import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/account/login/login.component';
import { LayoutComponent } from './layout/layout.component';
//import { GgmapComponent } from './ggmap/ggmap.component';
import { AssignedComponent } from './shipment/ShipmentAssigned/assigned.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './modules/identity/user/user-list/user-list.component';
import { UserProfileComponent } from './modules/identity/user/user-profile/user-profile.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent },
    {
      path: 'home', component: HomeComponent, children: [
        { path: 'assigned', component: AssignedComponent },
        { path: 'account', component: UserListComponent },
        { path: 'profile', component: UserProfileComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
