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
 
 route: string;
 
//  constructor(location: Location, router: Router) {
//   router.events.subscribe((val) => {

    
//     if(location.path() == '/admin/login'){
//       this.route = location.path();
//       this.adminTheme=true;
//      console.log("adminTheme true")
//     } else {
//       this.userTheme=true;
//       //this.route = 'Home'
//       console.log("user-theme-true")
//     }
//   });
// }

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