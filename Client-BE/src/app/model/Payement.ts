import { CommandeClient, CommandeEleveur } from './Commande';
import { DatePipe } from '@angular/common/src/pipes';

export class PayementComClient{

    constructor(){}

    idpayement:number ;
    commandeclient:CommandeClient ;
    datepayement:DatePipe;
    montant:number ;
    
}


export class PayementComEleveur{

    constructor(){}

    idpayement:number ;
    commandeeleveur:CommandeEleveur ;
    datepayement:Date;
    montant:number ;
    
}