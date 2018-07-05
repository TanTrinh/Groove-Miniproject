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
    // TODO: console.log is used to troubleshooting only, It should be removed
    console.log(this.model);


    // TODO: Move all HTTPs request relate to user API into seperated service
    // You need to create UserService in modles/account/account.service.ts
    //
    // then you call _accountService.Login(this.userName, this.password).subcrible(result=>{
    // 
    // })
    //
    // httpOptions, API url... will be managed by API service
    
    this._http.post('http://localhost:65090/api/authentication/token', this.model, httpOptions).subscribe(result => {
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
