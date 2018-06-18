import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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

    message;

    public model = {
        username: '',
        password: ''
    };
    constructor(
        private http: HttpClient,
        private router: Router)
    { }

  ngOnInit() {
  }

    onSubmit() {
        console.log(this.model);
        this.http.post('http://localhost:62772/api/authentication/token', this.model, httpOptions).subscribe(result => {
            var key = "tokenKey";
            console.log(result);
            if (result) {
                var keyValue = JSON.stringify(result);
                localStorage.setItem(key, keyValue);
                this.router.navigate(['layout']);
            }
            this.message = "User does not exist"
            //this.message = result;
            //var keyValue = JSON.stringify(result);
            //localStorage.setItem(key, keyValue);
            //this.router.navigate(['home']);
        });
    }
}
