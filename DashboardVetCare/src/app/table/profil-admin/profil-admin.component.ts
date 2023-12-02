import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-profil-admin',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './profil-admin.component.html',
  styleUrl: './profil-admin.component.css'
})
export class ProfilAdminComponent implements OnInit{

  

  constructor(
    private userService: UtilisateurService,
    private router : Router
  ) { }


  ngOnInit() {
    this.adminConnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
  }

  // adminConnect: Utilisateur | any

  // adminConnect = {
  //   motDePasse: ''
  // };

  adminConnect: Utilisateur = {
    motDePasse: ''
    // ... autres propriétés de l'utilisateur
};

  afficherDemandeMotDePasse = false;
  motDePasseSaisi = '';

  demanderMotDePasse() {
    this.afficherDemandeMotDePasse = true;
}

verifierMotDePasse() {
  const motDePasseAttendu = 'leMotDePasseAttendu'; // Remplacez ceci par le vrai mot de passe attendu

  if (this.motDePasseSaisi === motDePasseAttendu) {
      // Si le mot de passe est correct, afficher le mot de passe
      this.adminConnect.motDePasse = motDePasseAttendu;
  } else {
      alert('Mot de passe incorrect');
  }

  // Réinitialiser les champs
  this.motDePasseSaisi = '';
  this.afficherDemandeMotDePasse = false;

}
}