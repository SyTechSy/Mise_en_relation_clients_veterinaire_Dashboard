import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToutUtilisateur } from 'src/app/model/tout-utilisateur';
import { ToutUtilisateurService } from 'src/app/service/tout-utilisateur.service';

@Component({
  selector: 'app-profil-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-utilisateur.component.html',
  styleUrl: './profil-utilisateur.component.css'
})
export class ProfilUtilisateurComponent implements OnInit {
  
  toutUserConnecte : ToutUtilisateur | any;

  public utilisateurId : string | undefined;

  constructor(
    private toutUserService : ToutUtilisateurService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.toutUserConnecte = Object.assign(new ToutUtilisateur(), JSON.parse(localStorage.getItem("utilisateur")!));
    this.utilisateurId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.utilisateurId);

    this.toutUserService.listuserID(+this.utilisateurId).subscribe((result) => {
      this.toutUserConnecte = result;
    },(error) => {
      console.log(error);
    })
  }

}
