import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../shared/sevices/config-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = '';
  constructor(private http: Http, private configService: ConfigService) {
    this.baseUrl = configService.getApiURI();
  }

  getWaitingRequestList(page) {

    let headers = new Headers();

    return this.http.get(this.baseUrl + '/Coordinator/WaitingRequest?pageNumber=' + page, { headers });
  }

}
