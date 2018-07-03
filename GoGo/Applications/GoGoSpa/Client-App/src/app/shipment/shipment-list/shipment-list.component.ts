import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/models/request'
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable, Subscription, fromEvent,  } from 'rxjs';
import { State, process, toDataSourceRequestString, DataSourceRequestState } from '@progress/kendo-data-query';
import { map, tap} from 'rxjs/operators';
import { EditService } from 'src/app/shipment/edit.service';
import { HttpClient } from '@angular/common/http';
import { ShipmentService } from '../shipment.service';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/shared/sevices/sharing-service.service';
import { Renderer2, NgZone, AfterViewInit,  EventEmitter, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators/take';
//import { fromEvent } from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent{
  public shipments: GridDataResult;
  private currentSubscription: Subscription;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 8
  };

  constructor(private shipmentService: ShipmentService, private router: Router, private sharingService: SharingService,
              private renderer: Renderer2, private zone: NgZone) {
    this.shipmentService.fetch(this.state).subscribe(response => this.shipments = response);

    

  }


  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.shipmentService.fetch(state)
      .subscribe(response => this.shipments = response);
  }


  ChangeStatus(value: any) {
   
    this.shipmentService.ChangeShipmentStatus(value, "Pending").subscribe();
  }

 
  onCreate()
  {
    this.sharingService.isNewShipment = true;
    this.router.navigate(['/shipment/create']);
  }

  onUpdate(value: any)
  {
    this.sharingService.isNewShipment = false;
    this.sharingService.shipmentCode = value;

    this.router.navigate(['/shipment/create']);
  }
}
