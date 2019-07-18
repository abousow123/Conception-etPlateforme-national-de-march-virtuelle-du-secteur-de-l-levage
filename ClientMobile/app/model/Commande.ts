import { Client, Eleveur } from './Utilisateur';
import {  Animal } from './Animal';
export class Commande{
    constructor(){}
    numcommande:number ;
    datecommande:Date ;
    confirmer:boolean = false;
    livrer:boolean ;

}

export class CommandeClient{
    constructor(){} 
    numcommande:number ;
    commande:Commande= new Commande ;
    client:Client = new Client();
}

export class CommandeEleveur{
    constructor(){}

    numcommande:number ;
    commande:Commande = new Commande() ;
    eleveur:Eleveur = new Eleveur() ;

}

export class LigneCommandeClient{
    constructor(){}

    idligneclient:number ;
    commandeclient:CommandeClient = new CommandeClient();
    animal:Animal=new Animal() ;
    prixtotal:number ;

}

