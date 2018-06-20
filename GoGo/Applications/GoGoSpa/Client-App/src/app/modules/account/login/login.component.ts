import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
import * as $ from 'jquery';

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
        private http: HttpClient,
        private router: Router,
        private _notificationService: NotificationService)
    { }

  ngOnInit() {
  }

    onSubmit() {
        console.log(this.model);
        var valueUser = $.trim($("#username").val());
        var valuePass = $.trim($("#pwd").val());
        if (valueUser.length > 0 && valuePass.length > 0) {
            $("#val-user").attr('style', 'visibility: hidden')
            $("#val-pass").attr('style', 'visibility: hidden');
          this.http.post('http://localhost:54520/api/authentication/token', this.model, httpOptions).subscribe(result => {
                var key = "tokenKey";
                console.log(result);
                if (result) {
                    var keyValue = JSON.stringify(result);
                    localStorage.setItem(key, keyValue);
                    this.router.navigate(['home']);
                }
            }, error => {
                $("#check-valid").removeAttr('style', 'visibility', 'hidden');
                this.isError = true;

                let httpError: HttpErrorResponse = error;
                if (httpError.status === 400) {

                    this.message = httpError.error.message;
                } else {
                    this._notificationService.prompError(httpError.message);
                }
            });
        }
        else if (valueUser.length > 0 && valuePass.length == 0) {
            $("#val-user").attr('style', 'visibility: hidden');
            $("#val-pass").removeAttr('style', 'visibility', 'hidden');
        }
        else if (valueUser.length == 0 && valuePass.length > 0) {
            $("#val-user").removeAttr('style', 'visibility', 'hidden');
            $("#val-pass").attr('style', 'visibility: hidden');
        }
        else {
            $("#val-user").removeAttr('style', 'visibility', 'hidden');
            $("#val-pass").removeAttr('style', 'visibility', 'hidden');
        }
    }
}
