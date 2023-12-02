import { Injectable } from '@angular/core';
import { Veterinaire } from '../model/veterinaire';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {
  private vete1: Veterinaire|undefined;

  private apiUrl : string = "http://localhost:9000/api/veterinaire";

  constructor(private http : HttpClient) { }

  veterinaire : Veterinaire = new Veterinaire();
  currentFile : File | undefined;

  

  listDesVeterinaire(): Observable<Veterinaire[]> {
    const formData = new FormData();
    return this.http.get<any[]>(this.apiUrl+ '/list').pipe(
      map((response: any[]) => {
        return response.map((item: any) => {
          return {
            "veteriniareId" : item.veteriniareId,
            "nom" : item.nom, 
            "prenom" : item.prenom,
            "email" : item.email,
            "numero" : item.numero,
            "genre" : item.genre,
            "langueParler" : item.langueParler,
            "pays" : item.pays,
            "quartier" : item.quartier,
            "rue" : item.rue,
            "codePostal" : item.codePostal,
            "diplomeOuCertificat" : item.diplomeOuCertificat,
            "domaineSpecialisation" : item.domaineSpecialisation,
            "jours" : item.jours,
            "mois" : item.mois,
            "annee" : item.annee,
            "anneeExperience" : item.anneeExperience,
            // "imageCV" : vete.imageCV,
            "imagePRO" : item.imagePRO,
            "motDePasse" : item.motDePasse,
          } as Veterinaire;
        })
      })
    )
  }

  listVeterinaireID(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/suiviVete/'+id)
  }

  
  setVetes(vete: Veterinaire){
    this.vete1 = vete;
  }
  getVetes():Veterinaire|undefined{
    return this.vete1
  }
}
