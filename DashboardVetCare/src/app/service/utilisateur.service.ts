import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../model/utilisateur';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private plag1: Utilisateur |undefined;

  private apiUrl : string = "http://localhost:9000/api/ajoutAdmin";

  constructor(private http : HttpClient) { }

  utilisateur : Utilisateur = new Utilisateur();
  ajouterNewAdmin() {
    console.log(this.utilisateur);
    return this.http.post(this.apiUrl+"/ajouter", this.utilisateur)
  }

  
  /// List
  listDesAdmin(): Observable<Utilisateur[]> {
    return this.http.get<any[]>(this.apiUrl+ '/list')
  }

  /////////////// Pour la connexion de utilisateur
  connexionAdmin(email : string, motDePasse : string) {
    return this.http.get(`${this.apiUrl}/connexion?email=${email}&mot_de_passe=${motDePasse}`)
  }
  
  setMedi(plag: Utilisateur) {
    this.plag1 = plag;
  }

  getMedis():Utilisateur|undefined {
    return this.plag1
  }

}
