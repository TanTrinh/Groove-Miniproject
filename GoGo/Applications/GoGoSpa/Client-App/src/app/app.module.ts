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
//import { GgmapComponent } from './ggmap/ggmap.component';
//import { AgmCoreModule, AgmDataLayer } from '@agm/core';
//import { AgmDirectionModule } from 'agm-direction';

import { LoginComponent } from './modules/account/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentModule } from './shipment/shipment.module';
import { FormsModule } from '@angular/forms';
import { AccountModule } from './modules/account/account.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/identity/user/user.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


const APP_INITIALIZER_PROVIDER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: (ServiceRegistryService: ServiceRegistryService) => {


    // Do initing of services that is required before app loads
    // NOTE: this factory needs to return a function (that then returns a promise)
    return () => ServiceRegistryService.load('http://localhost:62775/configuration/serviceRegistry').toPromise();
    //return () => ServiceRegistryService.load('http://localhost:50269/configuration/serviceRegistry').toPromise();
  },
  deps: [ServiceRegistryService],
  multi: true
};

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    //AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
    //}),
    //AgmDirectionModule,
    HttpClientModule,
    ShipmentModule,
    UserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('tokenKey');
        }
      }
    }),
    ShipmentModule,
    AccountModule,
    InputsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    LocalStorageService,
    ServiceRegistryService,
    NotificationService,
    AuthHttpService,
    AuthenticationService,
    FormValidationService,
    APP_INITIALIZER_PROVIDER,
    JwtHelperService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
