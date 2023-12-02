import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatistiComponent } from './essaye/statisti/statisti.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { BodyComponent } from './admin/body/body.component';
import { UtilisateurComponent } from './table/utilisateur/utilisateur.component';
import { VeterinaireComponent } from './table/veterinaire/veterinaire.component';
import { AccueilComponent } from './admin/accueil/accueil.component';
import { AjouterAdminComponent } from './admin/ajouter-admin/ajouter-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfilAdminComponent } from './table/profil-admin/profil-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    StatistiComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    UtilisateurComponent,
    VeterinaireComponent,
    AccueilComponent,
    AjouterAdminComponent,
    // ProfilAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
