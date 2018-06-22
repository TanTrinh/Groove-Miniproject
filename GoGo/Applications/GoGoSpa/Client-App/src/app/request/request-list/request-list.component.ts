import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RequestDetail } from '../RequestDetail';
import { SaveService } from '../../shared/service/save.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  requestList: RequestDetail[];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private save: SaveService
  ) { }

  code: any;
  data: any;
  ngOnInit() {
    this.http.get('http://localhost:60012/api/Driver/shipment/requestList?code=' + this.save.getCode()).subscribe(result => {
      this.data = result;
      this.requestList = this.data;

    });
  }

}
