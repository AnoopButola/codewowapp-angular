import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbanner-content',
  templateUrl: './mainbanner-content.component.html',
  styleUrls: ['./mainbanner-content.component.css']
})
export class MainbannerContentComponent implements OnInit {
   
       bannerHeading:String;
       bannerParagraph:String;
   
  constructor() { }

  ngOnInit(): void {
    this.getMainBannerContent();
  }

  getMainBannerContent(){
    this.bannerHeading="Welcome to Code WOW!!!1";
    this.bannerParagraph="Enroll for learning cutting edge technologies and become recok star";
  console.log(this.bannerHeading+" para is ::"+this.bannerParagraph);  
  }

}
