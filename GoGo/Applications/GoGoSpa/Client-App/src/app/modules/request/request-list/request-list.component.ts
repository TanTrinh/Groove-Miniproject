import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  constructor(private _requestService: RequestService) {

  }
  onClickActivate() {
    //this._requestService.
  }
  onClickDeactivate() {

  }
  ngOnInit() {
  } 

}
