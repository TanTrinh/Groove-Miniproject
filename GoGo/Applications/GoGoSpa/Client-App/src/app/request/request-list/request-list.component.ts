import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestService } from '../request.service';
import { map } from 'rxjs/internal/operators/map';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { translateDataSourceResultGroups, toDataSourceRequestString, DataSourceRequestState, DataResult } from '@progress/kendo-data-query';
import { Observable } from 'rxjs-compat/Observable';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent {

  public requests: GridDataResult;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 5
  };

  constructor(private requestService: RequestService, private router: Router,)
  {
    this.requestService.fetch(this.state).subscribe(response => this.requests = response);

  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.requestService.fetch(state)
      .subscribe(response => this.requests = response);
  }
}
