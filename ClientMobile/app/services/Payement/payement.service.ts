import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { PayementComClient, PayementComEleveur } from '~/model/Payement';
import { Http } from '@angular/http';
import { Serveur } from '~/model/ConnexionToServe';


@Injectable({
  providedIn: 'root'
})
export class PayementService {

  ipAddress:Serveur = new Serveur() ;
  host:string= this.ipAddress.ip ;

  constructor(private http:Http) { }

  /* Servies PayementComClient
  *********************************************************************************** */ 
  getAllPayementComClients(){
    return this.http.get(this.host+"/PayementComClients")
    .pipe(map(rest=>rest.json())) ;
  }

  getOnePayementComClient(id:string){
    return this.http.get(this.host+"/PayementComClients/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  savePayementComClient(pc:PayementComClient){
    return this.http.post(this.host+"/PayementComClients",pc)
    .pipe(map(rest=>rest.json())) ;
  }

  updatePayementComClient(pc:PayementComClient){
    return this.http.put(this.host+"/PayementComClients",pc)
    .pipe(map(rest=>rest.json())) ;
  }

  deletePayementComClient(id:string){
    return this.http.delete(this.host+"/PayementComClients/"+id)
    .pipe(map(rest=>rest.json())) ;
  }


  /* Servies PayementComEleveur
  *********************************************************************************** */ 
  
  getAllPayementComEleveurs(){
    return this.http.get(this.host+"/PayementComEleveurs")
    .pipe(map(rest=>rest.json())) ;
  }

  getOnePayementComEleveurs(id:string){
    return this.http.get(this.host+"/PayementComEleveurs/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  savePayementComEleveur(pe:PayementComEleveur){
    return this.http.post(this.host+"/PayementComEleveurs",pe)
    .pipe(map(rest=>rest.json())) ;
  }

  updatePayementComEleveur(pe:PayementComEleveur){
    return this.http.put(this.host+"/PayementComEleveurs",pe)
    .pipe(map(rest=>rest.json())) ;
  }

  deletePayementComEleveur(id:string){
    return this.http.delete(this.host+"/PayementComEleveurs/"+id)
    .pipe(map(rest=>rest.json())) ;
  }


}
