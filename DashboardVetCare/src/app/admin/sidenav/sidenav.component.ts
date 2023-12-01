import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0; 
  navData = navbarData;

  sidebarVisible: boolean = true;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (this.screenWidth < 900) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }



  ngOnInit(): void {
      // this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed =!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
