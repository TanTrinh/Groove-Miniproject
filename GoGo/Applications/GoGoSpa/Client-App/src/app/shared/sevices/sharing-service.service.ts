import { Injectable } from '@angular/core';

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
}
