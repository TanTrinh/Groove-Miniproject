import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';

// TODO: Remove sharing service. State ofr update/creation form should be managed by URL instead of sharing service
@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private array = [];

  constructor() { }

  save(array) {
    this.array = array;
  }

  fetch() {
    return this.array;
  }

  public isNewShipment: boolean;
  public shipmentCode: any;


  datimeFormat(string: string) {
    var tempString = new Date(string).toString().split(" ");
    console.log(tempString)
    var weekdays = tempString[0];
    var date = tempString[1] + " " + tempString[2] + " " + tempString[3];
    var time = tempString[4]

    var datetime = time + " - " + weekdays + ", " + date;

    return datetime;
  }


  AddTokenToHeaders(): Headers {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let authToken = localStorage.getItem('tokenKey');

    var authTokenKey = JSON.parse(authToken);

    headers.append('Authorization', `Bearer ${authTokenKey.access_token}`);

    return headers;
  }

  AddTokenToHeader(): HttpHeaders {

    let authToken = localStorage.getItem('tokenKey');

    var authTokenKey = JSON.parse(authToken);

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authTokenKey.access_token
    })

    return headers;
  }
}
