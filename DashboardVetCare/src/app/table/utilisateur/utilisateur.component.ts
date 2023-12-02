import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToutUtilisateur } from 'src/app/model/tout-utilisateur';
import { ToutUtilisateurService } from 'src/app/service/tout-utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  
  listeToutUtilisateur: ToutUtilisateur[] = [];
  subscription: Subscription | undefined;
  afficheTouUser : ToutUtilisateur | any

  public utilisateurId : string | undefined;

  atSymbol: string;

  constructor(
    private toutUserService : ToutUtilisateurService
  ) {
    // Initialisation de la variable avec le symbole "@"
    this.atSymbol = '@';
  }

  ngOnInit() {
    this.afficheTouUser = Object.assign(new ToutUtilisateur(), JSON.parse(localStorage.getItem("utilisateur")!));
    this.subscription = this.toutUserService.listToutUtilisateur().subscribe(
      (toutUtilisateurs: ToutUtilisateur[]) => {
        this.listeToutUtilisateur = toutUtilisateurs.reverse();
        console.log(this.listeToutUtilisateur); // Une fois les données récupérées, les assigner à listeMedicaments
        
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
      
    );
  }


  

  ngOnDestroy() {
    // S'assurer de se désabonner lors de la destruction du composant pour éviter des fuites de mémoire
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
