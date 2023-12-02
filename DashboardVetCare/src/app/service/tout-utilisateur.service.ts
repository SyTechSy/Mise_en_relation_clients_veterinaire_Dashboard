import { Injectable } from '@angular/core';
import { ToutUtilisateur } from '../model/tout-utilisateur';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToutUtilisateurService {
  
  private medi1: ToutUtilisateur|undefined;

  private apiUrl : string = "http://localhost:9000/api/utilisateur";

  constructor(private http : HttpClient) { }

  toutUtilisateur : ToutUtilisateur = new ToutUtilisateur();
  currentFile : File | undefined;
  
  ////////////////// Liste les medicament 

  listToutUtilisateur(): Observable<ToutUtilisateur[]> {
    const formData = new FormData();
    return this.http.get<any[]>(this.apiUrl+ '/list').pipe(
      map((response: any[]) => {
        return response.map((item: any) => {
          return {
            utilisateurId: item.utilisateurId,
            nom: item.nom,
            prenom: item.prenom,
            email: item.email,
            motDePasse: item.motDePasse,
            numero: item.numero,
            genre: item.genre,
            dateNaissance: item.dateNaissance,
            quartier: item.quartier,
            photo: item.photo,
            description: item.description,
          } as ToutUtilisateur;
        })
      })
    )
  }

  
  ///////////////////////////// voir par ID

  listuserID(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/user/'+id)
  }


  
  setMedi(medi: ToutUtilisateur) {
    this.medi1 = medi;
  }

  getMedis():ToutUtilisateur|undefined {
    return this.medi1
  }

}
