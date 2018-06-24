import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/models/request'
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { State, process, toDataSourceRequestString } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators';
import { EditService } from 'src/app/shipment/edit.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  private BASE_URL = 'http://localhost:54520/api/Requests/RequestList';
  public view: Observable<GridDataResult>;
  public gridData: any[];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };



   ngOnInit(): void {
   
  }

}
