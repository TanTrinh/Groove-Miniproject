import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { AgmCoreModule, AgmDataLayer } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { HttpClientModule } from '@angular/common/http';
import { ShipmentModule } from './shipment/shipment.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GgmapComponent,
    
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
    ShipmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
