import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/service/veterinaire.service';

@Component({
  selector: 'app-veterinaire',
  templateUrl: './veterinaire.component.html',
  styleUrls: ['./veterinaire.component.css']
})
export class VeterinaireComponent implements OnInit{
  listveterinaire: Veterinaire[] = [];
  subscription: Subscription | undefined;
  afficheveterinaire : Veterinaire | any

  public veteriniareId : string | undefined;
  
  atSymbol: string;

  constructor(
    private veteService: VeterinaireService,
  ) {
    // Initialisation de la variable avec le symbole "@"
    this.atSymbol = '@';
  }

  ngOnInit() {
    this.afficheveterinaire = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
    this.subscription = this.veteService.listDesVeterinaire().subscribe(
      (veterinaires: Veterinaire[]) => {
        this.listveterinaire = veterinaires.reverse();
        console.log(this.listveterinaire);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
  }

  
  ngOnDestroy() {
    // S'assurer de se désabonner lors de la destruction du composant pour éviter des fuites de mémoire
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



}
