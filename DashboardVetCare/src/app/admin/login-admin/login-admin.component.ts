import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  email:string="";
  motDePasse:string="";

  // user!:string;

  constructor(
      private userService: UtilisateurService,
      private router : Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.connexionAdmin(this.email, this.motDePasse).subscribe(
      (result:any) => {
        console.log(result);
        const utilisateurId= result.utilisateurId; 
        localStorage.setItem('utilisateur', JSON.stringify(result));
        this.userService.setMedi(result);
        // Redirection vers une autre page après la connexion réussie
        this.router.navigate(['/']).then();
        
    }
    )
  }

}