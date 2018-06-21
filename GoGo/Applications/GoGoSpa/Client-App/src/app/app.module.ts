import { BrowserModule } from '@angular/platform-browser';
import { NgModule, FactoryProvider, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AuthHttpService, LocalStorageService, ServiceRegistryService } from './shared';
import { NotificationService } from './shared/component/dialog/notification.service';
import { FormValidationService } from './shared/component/form';
import { AuthenticationService } from './shared/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { InvalidTooltipModule } from 'ng-invalid-tooltip';
import { GgmapComponent } from './ggmap/ggmap.component';
import { AgmCoreModule, AgmDataLayer } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

const APP_INITIALIZER_PROVIDER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: (ServiceRegistryService: ServiceRegistryService) => {


    // Do initing of services that is required before app loads
    // NOTE: this factory needs to return a function (that then returns a promise)
    return () => ServiceRegistryService.load('http://localhost:49946/configuration/serviceRegistry').toPromise();
  },
  deps: [ServiceRegistryService],
  multi: true
};
//const APP_INITIALIZER_PROVIDER: FactoryProvider = {
//  provide: APP_INITIALIZER,
//  useFactory: (ServiceRegistryService: ServiceRegistryService) => {

//    // Do initing of services that is required before app loads
//    // NOTE: this factory needs to return a function (that then returns a promise)
//    return () => ServiceRegistryService.load('/configuration/serviceRegistry').toPromise();
//  },
//  deps: [ServiceRegistryService],
//  multi: true
//};


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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DlDateTimePickerDateModule,
    InvalidTooltipModule
  ],
  providers: [
    LocalStorageService,
    ServiceRegistryService,
    NotificationService,
    AuthHttpService,
    AuthenticationService,
    FormValidationService,
    APP_INITIALIZER_PROVIDER,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    }),
    AgmDirectionModule,
    HttpClientModule,
    ShipmentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
