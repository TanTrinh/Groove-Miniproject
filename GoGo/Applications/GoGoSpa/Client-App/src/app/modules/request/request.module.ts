import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestRoutingModule } from './request-routing.module';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { GgmapComponent } from '../../ggmap/ggmap.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    DateInputsModule,
    ComboBoxModule,
    GridModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    }),
  ],
  providers: [
  ],
  declarations: [
    RequestListComponent,
    RequestFormComponent,
    GgmapComponent,
  ]
})
export class RequestModule { }
