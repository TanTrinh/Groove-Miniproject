import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-form/request-form.component';

const routes: Routes = [
  { path: 'list', component: RequestListComponent },
  { path: 'form/:mode/:id', component: RequestFormComponent }, // View / Edit
  { path: 'form/:mode', component: RequestFormComponent }      // Create
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RequestRoutingModule { }
