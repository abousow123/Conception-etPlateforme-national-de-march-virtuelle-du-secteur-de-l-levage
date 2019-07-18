import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommandeClient, CommandeEleveur, LigneCommandeClient } from '../../model/Commande';
import { Serveur } from '~/model/ConnexionToServe';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  ipAddress:Serveur = new Serveur() ;
  host:string= this.ipAddress.ip ;

  constructor(private http:Http) { }


  /* Servies Commande
  *********************************************************************************** */ 
  getAllCommandes(){
    return this.http.get(this.host+"/Commandes") 
    .pipe(map(rest=>rest.json())) ;
  }



  /* Servies CommandeClient
  *********************************************************************************** */ 

  getAllCommandeClients(){
    return this.http.get(this.host+"/CommandeClients")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneCommandeClient(ref:number){
    return this.http.get(this.host+"/CommandeClients/"+ref)
    .pipe(map(rest=>rest.json())) ;
  
  }

  saveCommandeClient(idaminal:string,com:CommandeClient){
    return this.http.post(this.host+"/CommandeClients/"+idaminal,com)
    .pipe(map(rest=>rest.json())) ;
  }

  updateCommandeClient(com:CommandeClient){
    return this.http.put(this.host+"/CommandeClients",com)
    .pipe(map(rest=>rest.json())) ;
  }


  deleteCommandeClient(ref:number){
    return this.http.delete(this.host+"/CommandeClients/"+ref)
    .pipe(map(rest=>rest.json())) ;
  }


  /* Servies CommandeEleveur
  *********************************************************************************** */ 

 getAllCommandeEleveurs(){
  return this.http.get(this.host+"/CommandeEleveurs")
  .pipe(map(rest=>rest.json())) ;
}

getOneCommandeEleveurs(ref:number){
  return this.http.get(this.host+"/CommandeEleveurs/"+ref)
  .pipe(map(rest=>rest.json())) ;

}

saveCommandeEleveurs(com:CommandeEleveur){
  return this.http.post(this.host+"/CommandeEleveurs",com)
  .pipe(map(rest=>rest.json())) ;
}

updateCommandeEleveurs(com:CommandeEleveur){
  return this.http.put(this.host+"/CommandeEleveurs",com)
  .pipe(map(rest=>rest.json())) ;
}

deleteCommandeEleveurs(ref:number){
  return this.http.delete(this.host+"/CommandeEleveurs/"+ref)
  .pipe(map(rest=>rest.json())) ;
}



getAllLigneComClients(){
  return this.http.get(this.host+"/LigneComClients")
  .pipe(map(rest=>rest.json())) ;
}

deleteLigneCommandeClient(ref:number){
  return this.http.delete(this.host+"/LigneComClients/"+ref)
  .pipe(map(rest=>rest.json())) ;
}

updateLigneCommandeClient(ligne:LigneCommandeClient){
  return this.http.put(this.host+"/LigneComClients",ligne);
}



  
}
