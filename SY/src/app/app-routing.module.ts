import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { 
    path : '' ,redirectTo : 'header', pathMatch: 'full' 
  },
  { 
    path : 'header', 
    component : HeaderComponent
  },
  { 
    path : 'accueil', 
    component : AccueilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
