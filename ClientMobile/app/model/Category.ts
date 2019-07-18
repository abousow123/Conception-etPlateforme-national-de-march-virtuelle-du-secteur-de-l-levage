import { Animal } from "./Animal";
import { ProduitElevage, ProduitVeterinaire } from './produit';

export class TypeAnimal{
    constructor(){}
    idtypeanimal:number=0;
    libelle:string="";
    animals:Animal[]= [] ;

}

export class CategoryProduitElevage{
    constructor(){}
    idcatprodelevage:number;
    nom:string="";
    produitelevages:ProduitElevage[] ;
}

export class CategoryProduitVeterinaire{
    constructor(){}
    idcatprodveterinaire:number;
    nom:string="";
    produitveterinaires:ProduitVeterinaire[] ;
}
