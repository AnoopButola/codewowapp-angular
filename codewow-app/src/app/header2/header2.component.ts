import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  header2={}
  constructor() { }

  ngOnInit(): void {
    this.header2=this.header2;
  }

  navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

  getHeader2(){
    return this.getHeader2;
  }
}
