import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { UserDetail } from './UserDetail';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string;
  data: any = {};
  public userDetail: UserDetail = this.data;
  public lStorage = localStorage.length;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);

    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      };

      this.id = this.route.snapshot.paramMap.get('id');

      this.http.get('http://localhost:62772/api/user/detail?id=' + this.id, httpOptions).subscribe(result => {
        console.log(result);
        this.data = result;
        this.userDetail = this.data;
      });
    }
  }

  pageBack() {
    this.router.navigate(['home/account']);
  }

}
