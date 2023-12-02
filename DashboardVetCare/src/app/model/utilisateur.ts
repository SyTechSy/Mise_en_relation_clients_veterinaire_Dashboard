export class Utilisateur {
    ajoutAdminId? : number;
    nom? : string;
    prenom? : string;
    email? : string;
    motDePasse? : string;

    constructor( 
        ajoutAdminId? : number, nom? : string, prenom? : string, email? : string, motDePasse? : string,
    ) {
        this.ajoutAdminId = ajoutAdminId;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
    }

}