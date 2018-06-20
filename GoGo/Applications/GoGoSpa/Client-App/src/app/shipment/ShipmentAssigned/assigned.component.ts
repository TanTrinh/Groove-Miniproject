import { Component, OnInit } from '@angular/core';
import { ShipmentAssigned } from './ShipmentAssigned';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})
export class AssignedComponent implements OnInit {
  data: any = {};
  shipmentAssigned: ShipmentAssigned[];
  total: number;
  currentpage: number;



  constructor(private http: HttpClient, private router: Router) { }

  paginators = [];
  ngOnInit() {
    this.LoadPage(1);
  }
  LoadPage(page) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.get('http://localhost:60012/api/Request/shipmentAssigned?id=54').subscribe(result => {
      //this.paginators = [];
      this.data = result;
      console.log(this.data);
      this.shipmentAssigned = this.data;
      console.log(this.shipmentAssigned);
      //this.paginators = this.data.totalPage;
      //this.currentpage = page;
    });
  }
}

