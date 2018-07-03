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
import { UserEditComponent } from './modules/identity/user/user-edit/user-edit.component';
import { UserProfileEditComponent } from './modules/identity/user/user-profile-edit/user-profile-edit.component';
import { AuthGuardService as AuthGuard } from './shared/services/authservices/auth-guard.service';
import { RoleGuardService as RoleGuard } from './shared/services/roleguardservice/role-guard.service';
import { ShipmentFormComponent } from './shipment/shipment-form/shipment-form.component';
import { ShipmentComponent } from './shipment/shipment/shipment.component';
import { ShipmentListComponent } from './shipment/shipment-list/shipment-list.component';
import { RequestModule } from './modules/request/request.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'assigned', component: AssignedComponent },
      { path: 'account', component: UserListComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' }},
      { path: 'account/create', component: UserCreateComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' } },
      { path: 'account/detail/:id', component: UserDetailComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' } },
      { path: 'account/edit/:id', component: UserEditComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' } },
      { path: 'request', loadChildren: () => RequestModule }, // Remove LazyLoad because current version of angular-cli not support mixing / nested routing https://github.com/angular/angular-cli/issues/9651, https://github.com/angular/angular-cli/issues/9488
      {
        path: 'shipment', component: ShipmentComponent, children: [
          { path: '', component: ShipmentListComponent },
          { path: 'create', component: ShipmentFormComponent },
          { path: 'update/:id', component: ShipmentFormComponent },
        ]
      }
    ]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'profile/edit/:id', component: UserProfileEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
