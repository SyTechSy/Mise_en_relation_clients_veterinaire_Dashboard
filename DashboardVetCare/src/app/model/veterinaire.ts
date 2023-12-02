export class Veterinaire {
    veteriniareId? : number;
    nom?:string;
    prenom?:string;
    email?:string;
    numero?:string;
    genre?:string;
    langueParler?:string;
    pays?:string;
    quartier?:string;
    rue?: number | undefined;
    codePostal?:number | undefined;
    diplomeOuCertificat?:string;
    domaineSpecialisation?:string;
    jours?:string;
    mois?:string;
    annee?:string;
    anneeExperience?:string;
    // imageCV?:string;
    imagePRO?:string;
    motDePasse?:string;

    constructor (
        veteriniareId? : number, nom?:string, prenom?:string,
        email?:string, numero?:string, genre?:string,
        langueParler?:string, pays?:string, quartier?:string, rue?: number | undefined,
        codePostal?:number | undefined, diplomeOuCertificat?:string,
        domaineSpecialisation?:string, jours?:string, mois?:string, annee?:string,
        anneeExperience?:string, motDePasse?:string, imagePRO?:string //imageCV?:string,
    ) {
        this.veteriniareId = veteriniareId;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.numero = numero;
        this.genre = genre;
        this.langueParler = langueParler;
        this.pays = pays;
        this.quartier = quartier;
        this.rue = rue;
        this.codePostal = codePostal;
        this.diplomeOuCertificat = diplomeOuCertificat;
        this.domaineSpecialisation = domaineSpecialisation;
        this.jours = jours;
        this.mois = mois;
        this.annee = annee;
        this.anneeExperience = anneeExperience;
        // this.imageCV = imageCV;
        this.imagePRO = imagePRO;
        this.motDePasse = motDePasse;
    }
}
