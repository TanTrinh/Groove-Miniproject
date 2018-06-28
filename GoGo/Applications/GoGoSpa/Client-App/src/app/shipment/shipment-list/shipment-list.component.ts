import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/models/request'
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { State, process, toDataSourceRequestString, DataSourceRequestState } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators';
import { EditService } from 'src/app/shipment/edit.service';
import { HttpClient } from '@angular/common/http';
import { ShipmentService } from '../shipment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent {
  public shipments: GridDataResult;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 5
  };

  constructor(private shipmentService: ShipmentService, private router: Router, ) {
    this.shipmentService.fetch(this.state).subscribe(response => this.shipments = response);

  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.shipmentService.fetch(state)
      .subscribe(response => this.shipments = response);
  }

}
