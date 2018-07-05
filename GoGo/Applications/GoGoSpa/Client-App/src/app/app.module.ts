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
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShipmentModule } from './shipment/shipment.module';
import { ConfigService } from './shared/sevices/config-service.service';
import { RequestsService } from './request/request.service';
import { SharedModule } from './shared/shared.module';
import { Request, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ShipmentFormComponent } from './shipment/shipment-form/shipment-form.component';
import { ShipmentComponent } from './shipment/shipment/shipment.component';
import { ShipmentListComponent } from './shipment/shipment-list/shipment-list.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MasterDataService } from './shared/sevices/master-data.service';

import { FormsModule } from '@angular/forms';
import { AccountModule } from './modules/account/account.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UserModule } from './modules/identity/user/user.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { GridModule } from '@progress/kendo-angular-grid';
import { RequestModule } from './modules/request/request.module';
import { GgmapComponent } from './ggmap/ggmap.component';

import { ShipmentPickingComponent } from './shipment/shipment-picking/shipment-picking.component';
import { AgmCoreModule } from '@agm/core';


const APP_INITIALIZER_PROVIDER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: (ServiceRegistryService: ServiceRegistryService) => {


    // Do initing of services that is required before app loads
    // NOTE: this factory needs to return a function (that then returns a promise)
    return () => ServiceRegistryService.load('/configuration/serviceRegistry').toPromise();
    //return () => ServiceRegistryService.load('/configuration/serviceRegistry').toPromise();
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
    LoginComponent,
    ShipmentFormComponent,
    ShipmentComponent,
    ShipmentListComponent,
    GgmapComponent,
    LoginComponent,
    ShipmentPickingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
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
    ButtonGroupModule,
    DateInputsModule ,
    AccountModule,
    InputsModule,
    RequestModule,
    UserModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('tokenKey');
        }
      }
    }),
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    ServiceRegistryService,
    NotificationService,
    AuthHttpService,
    AuthenticationService,
    FormValidationService,
    APP_INITIALIZER_PROVIDER,
    JwtHelperService,
    ConfigService,
    RequestsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
