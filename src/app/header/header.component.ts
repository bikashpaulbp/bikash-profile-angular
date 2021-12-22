import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {}
  biList = false;
  navbarOpen = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.biList = !this.biList;
    if(this.navbarOpen === false) {
      this.document.body.classList.add('mobile-nav-active')
    }
    else{
      this.document.body.classList.remove('mobile-nav-active')
    }

  }

  toggleMobileNav(){
    
    
   
    if(this.navbarOpen === false){
      this.document.body.classList.remove('mobile-nav-active')
    }

  }

}
