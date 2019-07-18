import { Eleveur } from "./Utilisateur";
import { DatePipe } from "@angular/common/src/pipes";

export class Gie{
    constructor(){}

    idgie:number;
    nom:string;
    departement:Departement;
    membres:Membre[];
}

export class Membre{
    constructor(){}

    gie:Gie ;
    eleveur:Eleveur ;
    dateadhesion:DatePipe ;
}

export class Region{
    constructor(){}

    idrole:number;
    nomregion:string ;
    departements:Departement[];

}

export class Departement{
    constructor(){}

    iddepartement:number;
    region:Region ;
    nomdepartement:string ;
    gies:Gie[];
}