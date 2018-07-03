import { Injectable, Component } from '@angular/core';
import { Guid } from '../models/guid';
import { ServiceRegistryService } from './service-registry.service';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '.././component/dialog/notification.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Headers } from '@angular/http';
import { patch } from 'webdriver-js-extender';
// Recommend to use @auth0/angular-jwt



@Injectable()
export class AuthHttpService {

  /**
   * TODO
   * Every http request should include:
   * x-request-id : generated by client. Which used to for debugging & troubleshooting. Client can give troubleshooter this id to lookup for logs on server.
   * x-client-id: this is client-id in OAUTH standard to indicate where the request comming from
   * 
   */

  constructor(
    private _serviceRegistryService: ServiceRegistryService
    , private _notificationService: NotificationService
    , private _http: HttpClient
  ) { }

  AddTokenToHeaders(): HttpHeaders{
    let headers: HttpHeaders = new HttpHeaders();
    if (localStorage.length != 0) {
      var key = localStorage.getItem('tokenKey');
      var currentKey = JSON.parse(key);
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Authorization', `Bearer ${currentKey.access_token}`);
    }
    return headers;
  }

  private subscribeForRequest(request: Observable<any>): Observable<any> {
    return request
      .pipe(catchError(res => {
        if (res.status === 500) {
          this._notificationService.prompError(res.statusText);
        }
        return throwError(res);
      }))
      .pipe(finalize(() => {
        // Hide loading affect
      }));
  }
  private beforeSendRequest() {
    // Show loading affect
  }

  public get(url: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();

    this.beforeSendRequest();
    return this.subscribeForRequest(this._http.get(this.getAbsoluteUrl(url), { headers: this.AddTokenToHeaders() }));
  }
  public post(url: string, body: any): Observable<any> {
    this.beforeSendRequest();
    return this.subscribeForRequest(this._http.post(this.getAbsoluteUrl(url), body, { headers: this.AddTokenToHeaders() }));
  }
  public put(url: string, body: any): Observable<any> {
    this.beforeSendRequest();
    return this.subscribeForRequest(this._http.put(this.getAbsoluteUrl(url), body, { headers: this.AddTokenToHeaders() }));
  }
  public patch(url: string, body: any): Observable<any> {
    this.beforeSendRequest();
    return this.subscribeForRequest(this._http.patch(this.getAbsoluteUrl(url), body, { headers: this.AddTokenToHeaders() }));
  }

  public getAbsoluteUrl(path: string): string {
    return this._serviceRegistryService.registry.apiUrl + path;
  }


  private getRequestId(): string {
    return Guid.newGuid();
  }

  //private getClientId() {
  //  return APP_SETTINGS.clientId;
  //}

}
