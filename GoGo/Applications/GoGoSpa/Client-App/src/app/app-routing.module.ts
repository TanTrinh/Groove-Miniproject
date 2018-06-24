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
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './modules/identity/user/user-detail/user-detail.component';
import { UserCreateComponent } from './modules/identity/user/user-create/user-create.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent },
    {
      path: 'home', component: HomeComponent, children: [
        { path: 'assigned', component: AssignedComponent },
        { path: 'account', component: UserListComponent },
        { path: 'create', component: UserCreateComponent },
        { path: 'profile', component: UserProfileComponent },
        { path: 'detail/:id', component: UserDetailComponent }
      ]
    },
    //{ path: 'detail/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
