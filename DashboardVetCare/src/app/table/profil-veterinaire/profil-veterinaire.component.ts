import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/service/veterinaire.service';

@Component({
  selector: 'app-profil-veterinaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-veterinaire.component.html',
  styleUrl: './profil-veterinaire.component.css'
})
export class ProfilVeterinaireComponent implements OnInit{

  profilVeteConnecte : Veterinaire | any;

  public veteriniareId : string | undefined;

  constructor(
    private profilVeteService : VeterinaireService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.profilVeteConnecte = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veterinaire")!));
    this.veteriniareId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.veteriniareId);

    this.profilVeteService.listVeterinaireID(+this.veteriniareId).subscribe((result) => {
      this.profilVeteConnecte = result;
    },(error) => {
      console.log(error);
    })
  }

}
