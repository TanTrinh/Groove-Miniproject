import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RequestService } from '../request-service.service';
import { PagerService } from '../../shared/sevices/pager-service.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  constructor(private requestService: RequestService, private router: Router, private http: Http, private pagerService: PagerService) { }

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page) {

    this.requestService.getWaitingRequestList(page).pipe(map(response => response.json())).subscribe(jsonObject => {
      // get current page of items
      this.pagedItems = jsonObject.data;

      // get pager object from service
      this.pager = this.pagerService.getPager(jsonObject.totalPages, page);
    });
  }
}
