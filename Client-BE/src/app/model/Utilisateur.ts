import { CommandeClient, CommandeEleveur } from './Commande';
import { ProduitElevage, ProduitVeterinaire } from './produit';
import { Membre } from './Gie';
import { Animal } from './Animal';

// Les acteurs du systemes
// *********************************************************
export class Eleveur{
   constructor(){};
    numuser:string;
    utilisateur:Utilisateur=new Utilisateur() ;
    ideleveur:number ;
    membres:Membre[];
    commandeeleveurs:CommandeEleveur[];
    animals:Animal[] ;

}

export class Veterinaire{
  constructor(){};
    numuser:string;
    utilisateur:Utilisateur ;
    idveterinaire:number ;
    produitveterinaires:ProduitVeterinaire[] ;

}

export class Distributeur{
  constructor(){};
    numuser:string;
    utilisateur:Utilisateur ;
    idagence:number ;
    produitelevages:ProduitElevage[];
}

export class Client{
  constructor(){};
    numuser:string;
    utilisateur:Utilisateur ;
    idclient:number ;
    commandeclients: CommandeClient[];


}

export class Agent{
  constructor(){};
    numuser:string;
    utilisateur:Utilisateur ;

}



// Utilisateur et Role
// *********************************************************

export class Utilisateur{
    numuser:string="";
    role:Role=new Role();
    nom:string="";
    prenom:string="";
    adresse:string="";
    email:string="";
    telephone:string="";
    login:string="";
    password:string="";
    profil:string="";

}

export class Role{
    constructor(){}
    idrole:number;
    libelle:string="";
    utilisateur:Utilisateur[];
}
