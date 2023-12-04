import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {
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


  // :::::::::::::::::::::::::::::::::::::: 

  isDashboardClicked: boolean = true;
  isUtilisateurClicked: boolean = false;
  isVeterinaireClicked: boolean = false;
  isProfilAdminClicked: boolean = false;
  isAjouterAdminClicked: boolean = false;

  toggleDashboardClick() {
    this.isDashboardClicked = !this.isDashboardClicked;
    this.isUtilisateurClicked = false;
    this.isVeterinaireClicked = false;
    this.isProfilAdminClicked = false;
    this.isAjouterAdminClicked = false;
  }

  toggleUtilisateurClick() {
    this.isDashboardClicked = false;
    this.isUtilisateurClicked = !this.isUtilisateurClicked;
    this.isVeterinaireClicked = false;
    this.isProfilAdminClicked = false;
    this.isAjouterAdminClicked = false;
  }

  toggleVeterinaireClick() {
    this.isDashboardClicked = false;
    this.isUtilisateurClicked = false;
    this.isVeterinaireClicked = !this.isVeterinaireClicked;
    this.isProfilAdminClicked = false;
    this.isAjouterAdminClicked = false;
  }


  toggleProfilAdminClick() {
    this.isDashboardClicked = false;
    this.isUtilisateurClicked = false;
    this.isVeterinaireClicked = false;
    this.isProfilAdminClicked = !this.isProfilAdminClicked;
    this.isAjouterAdminClicked = false;
  }

  toggleAjouterAdminClick() {
    this.isDashboardClicked = false;
    this.isUtilisateurClicked = false;
    this.isVeterinaireClicked = false;
    this.isProfilAdminClicked = false;
    this.isAjouterAdminClicked = !this.isAjouterAdminClicked;
  }



   // Méthode pour déconnecter l'utilisateur
   deconnecter() {
    localStorage.removeItem('utilisateur');
    this.router.navigate(['/login-admin']).then();
  }

}
