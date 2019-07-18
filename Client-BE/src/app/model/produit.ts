import { CategoryProduitElevage, CategoryProduitVeterinaire } from './Category';
import { Distributeur, Veterinaire } from './Utilisateur';
import { CommandeEleveur } from './Commande';
import { DatePipe } from '@angular/common/src/pipes';

export class Produit{
    constructor(){}
    referenceproduit:string="";
    nom:string="";
    description:string="";
    modeemploi:string="";
    prix:number =0;
    typeproduit:string="";
    datepublication:Date = new Date() ;

}

export class Posseder{
    constructor(){}

    produit:Produit;
    commandeEleveur:CommandeEleveur ;
    datecommande:DatePipe ;
}


export class ProduitElevage{
    constructor(){}
    referenceproduit:string="";
    produit:Produit =new Produit();
    categorieprodelevage:CategoryProduitElevage = new CategoryProduitElevage();
    distributeur:Distributeur = new Distributeur();
    idprodagent:number;

}

export class ProduitVeterinaire{
    constructor(){}
    referenceproduit:string="";
    produit:Produit = new Produit();
    veterinaire:Veterinaire = new Veterinaire();
    categorieprodveterinaire: CategoryProduitVeterinaire = new CategoryProduitVeterinaire() ;
    idprodvet:number ;

}
