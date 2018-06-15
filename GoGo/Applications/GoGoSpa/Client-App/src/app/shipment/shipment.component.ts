import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showRouter() {
    console.log(123);
    document.getElementById("test").style.display = 'block';
  }
}
