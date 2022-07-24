// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })


//   constructor() { }

//   ngOnInit(): void {
//     console.log("admin-login-component-called");
//   }

//   //call login service
//   //if  success open  app-dashboard
//   //else error message

  
// }



import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-admin-login',
  templateUrl:'./admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

username: string;
password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin/dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }
