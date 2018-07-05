import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../../shared/sevices/sharing-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isCoordinorOrDriver: boolean;

  constructor(private router: Router, private shareingService: SharingService) { }

  ngOnInit() {
    if (this.shareingService.getRole() == "Coordinator" || this.shareingService.getRole() == "Driver")
      this.isCoordinorOrDriver = true;
    else
      this.isCoordinorOrDriver = false;

    console.log(this.shareingService.getRole())
  }

}
