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
import { DetailComponent } from './detail/detail.component';
import { RequestComponent } from './request/request.component';
import { ProblemComponent } from './problem/problem.component';
import { TrafficjamComponent } from './trafficjam/trafficjam.component';
import { ShipmentdetailComponent } from './shipmentdetail/shipmentdetail.component';
import { ListrequestComponent } from './listrequest/listrequest.component';

import { HttpClientModule } from '@angular/common/http';
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
    DetailComponent,
    RequestComponent,
    ProblemComponent,
    TrafficjamComponent,
    ShipmentdetailComponent,
    ListrequestComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    }),
    AgmDirectionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
