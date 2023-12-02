import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { StatistiComponent } from './essaye/statisti/statisti.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { BodyComponent } from './admin/body/body.component';
import { UtilisateurComponent } from './table/utilisateur/utilisateur.component';
import { VeterinaireComponent } from './table/veterinaire/veterinaire.component';
import { AjouterAdminComponent } from './admin/ajouter-admin/ajouter-admin.component';
import { ProfilAdminComponent } from './table/profil-admin/profil-admin.component';
import { ProfilVeterinaireComponent } from './table/profil-veterinaire/profil-veterinaire.component';
import { ProfilUtilisateurComponent } from './table/profil-utilisateur/profil-utilisateur.component';

const routes: Routes = [
  { 
    path : '' ,redirectTo : 'dashboard', pathMatch: 'full' 
  },
  { 
    path : 'dashboard', 
    component : DashboardComponent
  },
  { 
    path : 'login-admin', 
    component : LoginAdminComponent
  },
  { 
    path : 'statisti', 
    component : StatistiComponent
  },
  { 
    path : 'sidenav', 
    component : SidenavComponent
  },
  {
    path : 'body',
    component : BodyComponent
  },
  {
    path : 'utilisateur',
    component : UtilisateurComponent
  },
  {
    path : 'veterinaire',
    component : VeterinaireComponent
  },
  {
    path : 'ajouter-admin',
    component : AjouterAdminComponent
  },
  {
    path : 'profil-admin',
    component : ProfilAdminComponent
  },
  {
    path : 'profil-veterinaire/:id',
    component : ProfilVeterinaireComponent
  },
  {
    path : 'profil-utilisateur/:id',
    component : ProfilUtilisateurComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
