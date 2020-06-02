import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: 'The href is: {{href}}',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  adminTheme: boolean = false;
  userTheme: boolean=false;
  public href: string = "";
 /* constructor(private _router?: Router) {
    this.href = this._router.url;
    console.log(+this.href);
    console.log("default route in constructor is ::"+this._router.url);
    if(this._router.url=='/adminlogin'){
      this.showAdminLogin=true;
    }
  }

  */
 route: string;
 
 constructor(location: Location, router: Router) {
  router.events.subscribe((val) => {
    if(location.path() == '/admin/login'){
      this.route = location.path();
      this.adminTheme=true;
     // console.log(this.route+"nnn"+location.path())
    } else {
      this.userTheme=true;
      //this.route = 'Home'
      //console.log(this.route+"nnn"+location.path())
    }
  });
}

  ngOnInit() {
    //console.log("default route in ngOnInit is ::"+this._router.url);
    //this.router.url === '/login'
   // this._router.navigate(['/home']);
  }
  title = 'my-app';
  navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}
