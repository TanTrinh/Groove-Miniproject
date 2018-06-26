import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveService } from '../../shared/service/save.service';
import { HttpClient } from '@angular/common/http';
import { RequestDetail } from '../RequestDetail';
import { ShipmentService } from '../../shipment/shipment.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-current-request',
  templateUrl: './current-request.component.html',
  styleUrls: ['./current-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentRequestComponent implements OnInit {
  code: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private shipmentService: ShipmentService
  ) { }
  request = new RequestDetail();
  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.shipmentService.getRequest(this.code).subscribe(data => {
      this.request = data;
      console.log(this.request);
    })
  }
}
