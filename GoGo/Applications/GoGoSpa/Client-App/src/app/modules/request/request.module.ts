import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestRoutingModule } from './request-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
  ],
  declarations: [
    RequestListComponent,
    RequestFormComponent,
  ]
})
export class RequestModule { }
