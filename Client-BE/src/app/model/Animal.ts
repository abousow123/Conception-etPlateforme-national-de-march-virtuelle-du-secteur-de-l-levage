import { TypeAnimal } from "./Category";
import { Eleveur } from "./Utilisateur";
import { CommandeClient, LigneCommandeClient } from './Commande';
import { DatePipe } from "@angular/common/src/pipes";

export class Animal{
    constructor(){}
    idanimal:string="";
    typeanimal:TypeAnimal=new TypeAnimal();
    eleveur:Eleveur=new Eleveur() ;
    nom:string="";
    sexe:string="";
    photo:string="";
    video:string="";
    description:string="";
    poids:number;
    taile:number;
    age:number ;
    codegenetique:string="";
    prix:number ;
    datepublication:Date = new Date() ;
    validerPublication:boolean ;
    lignecommandeclients:LigneCommandeClient[] = [] ;



}

