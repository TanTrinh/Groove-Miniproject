import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { AgmCoreModule, AgmDataLayer } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoginComponent } from './modules/account/login/login.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShipmentModule } from './shipment/shipment.module';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
import { ConfigService } from './shared/sevices/config-service.service';
import { PagerService } from './shared/sevices/pager-service.service';
import { RequestService } from './request/request.service';
import { SharedModule } from './shared/shared.module';
import { RequestListComponent } from './request/request-list/request-list.component';
import { Request, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ShipmentCreatingComponent } from './shipment/shipment-creating/shipment-creating.component';
import { ShipmentComponent } from './shipment/shipment/shipment.component';
import { ShipmentListComponent } from './shipment/shipment-list/shipment-list.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GgmapComponent,
    LoginComponent,
    RequestListComponent,
    ShipmentCreatingComponent,
    ShipmentComponent,
    ShipmentListComponent,
   
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AgmDirectionModule,
    HttpClientModule,
    ShipmentModule,
    CommonModule,
    HttpModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DropDownsModule,
    DialogModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    }),
  ],
  providers: [
    NotificationService, ConfigService, PagerService, RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
