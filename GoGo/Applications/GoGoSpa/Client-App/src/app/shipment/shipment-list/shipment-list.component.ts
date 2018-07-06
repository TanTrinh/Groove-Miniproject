import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/models/request'
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable, Subscription, fromEvent,  } from 'rxjs';
import { State, process, toDataSourceRequestString, DataSourceRequestState } from '@progress/kendo-data-query';
import { map, tap} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ShipmentService } from '../shipment.service';
import { Router } from '@angular/router';

import { Renderer2, NgZone, AfterViewInit,  EventEmitter, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators/take';
import { SharingService } from '../../shared/sevices/sharing-service.service';
//import { fromEvent } from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent{
  public shipments: GridDataResult;
  private currentSubscription: Subscription;
  private isCoordinator: boolean;
  private canCreate: boolean;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 15
  };

  constructor(private shipmentService: ShipmentService, private router: Router, private sharingService: SharingService,
              private renderer: Renderer2, private zone: NgZone) {
    this.shipmentService.fetch(this.state).subscribe(response => this.shipments = response);

    (this.sharingService.getRole() == "Coordinator") ? this.canCreate = true : this.canCreate = false;
  }


  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.shipmentService.fetch(state)
      .subscribe(response => this.shipments = response);
  }


  ChangeStatus(value: any) {
    
    this.shipmentService.ActivateShipment(value).subscribe();
  }

 
  onCreate()
  {
    this.sharingService.isNewShipment = true;
    this.router.navigate(['/shipment/form/create']);
  }

  onUpdate(id: any)
  {
    
    this.sharingService.isNewShipment = false;
    this.sharingService.shipmentCode = id;

    // TODO: Remove sharing service. State ofr update/creation form should be managed by URL instead of sharing service
    // It should navigate to /shipment/update/{shipmentCode}
    // Done
    this.router.navigate(['/shipment/form/update', id]);
  }

  
}
