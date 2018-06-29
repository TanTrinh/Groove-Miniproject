import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string = null;
  response;

  public model = {
    username: '',
    password: ''
  };
  public isError: boolean = false;
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _notificationService: NotificationService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);

    this._http.post('http://localhost:62772/api/authentication/token', this.model, httpOptions).subscribe(result => {
      var key = "tokenKey";
      console.log(result);
      if (result) {
        var keyValue = JSON.stringify(result);
        localStorage.setItem(key, keyValue);
        this._router.navigate(['home']);
      }
    }, error => {
      this.isError = true;

      let httpError: HttpErrorResponse = error;
      if (httpError.status === 400) {

        this.message = httpError.error.message;
      } else {
        this._notificationService.prompError(httpError.message);
      }
    });
  }
}
