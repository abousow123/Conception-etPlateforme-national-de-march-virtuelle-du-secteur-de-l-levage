import { Eleveur, Distributeur, Veterinaire } from "./Utilisateur";
import { Gie } from "./Gie";


export class AnnonceGouvernemental{
    idannonce:number;
    typeannonce:string='';
    descriptionannonce:string='' ;
    dateannonce:Date ;

    eleveur:Eleveur = new Eleveur() ;
    gie:Gie = new Gie() ;
    distributeur:Distributeur = new Distributeur() ;
    veterinaire:Veterinaire = new Veterinaire() ;
   
}