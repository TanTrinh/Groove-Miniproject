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
//import { GgmapComponent } from './ggmap/ggmap.component';
//import { AgmCoreModule, AgmDataLayer } from '@agm/core';
//import { AgmDirectionModule } from 'agm-direction';

import { LoginComponent } from './modules/account/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentModule } from './shipment/shipment.module';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    //GgmapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    //}),
    //AgmDirectionModule,
    HttpClientModule,
    ShipmentModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
