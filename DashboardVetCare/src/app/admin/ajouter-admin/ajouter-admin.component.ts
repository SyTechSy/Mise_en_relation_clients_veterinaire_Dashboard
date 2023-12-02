import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit{

  nom:string="";
  prenom:string="";
  email:string="";
  motDePasse:string="";  

  ngOnInit() {
  }

    
  constructor(
      private userService: UtilisateurService,
      private router : Router
    ) { }
  
  
  onSubmit() {  
    this.userService.utilisateur.nom = this.nom;
    this.userService.utilisateur.prenom = this.prenom;
    this.userService.utilisateur.email = this.email;
    this.userService.utilisateur.motDePasse = this.motDePasse;
    console.log(this.userService.utilisateur);
    this.userService.ajouterNewAdmin().subscribe((result) => {
      console.log(result);
      this.router.navigate(['/dashboard']).then()
    })

    }

}
