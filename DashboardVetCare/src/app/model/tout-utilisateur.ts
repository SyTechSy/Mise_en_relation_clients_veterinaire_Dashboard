export class ToutUtilisateur {

    
    utilisateurId? : number;
    nom? : string;
    prenom? : string;
    email? : string;
    motDePasse? : string;
    numero? : string;
    genre? : string;
    dateNaissance? : string;
    quartier? : string;
    description? : string;
    photo? : string;

    constructor( 
        utilisateurId? : number, 
        nom? : string, prenom? : string, email? : string, motDePasse? : string, 
        numero? : string, genre? : string, dateNaissance? : string, quartier? : string,
        description? : string, photo? : string
    ) {
        this.utilisateurId = utilisateurId;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.numero = numero;
        this.genre = genre;
        this.dateNaissance = dateNaissance;
        this.quartier = quartier;
        this.photo = photo
        this.description = description
    }
}
