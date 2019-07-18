import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Eleveur, Client, Veterinaire, Distributeur } from '~/model/Utilisateur';
import { Serveur } from '~/model/ConnexionToServe';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ipAddress:Serveur = new Serveur() ;
  host:string= this.ipAddress.ip ;

  constructor(private http:Http) { }



   /* les Services du roles
     ************************************************************************************************  */
  getAllRoles(){
    return this.http.get(this.host+"/Roles")
    .pipe(map(rest=>rest.json())) ;
  }




  /* les Services de l'éleveurs
   ************************************************************************************************  */
  getAllEleveurs(){
    return this.http.get(this.host+"/Eleveurs")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneEleveur(id:string){
    return this.http.get(this.host+"/Eleveurs/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  saveEleveur(e:Eleveur){
    return this.http.post(this.host+"/Eleveurs/",e)
    .pipe(map(rest=>rest.json())) ;
  }

  updateEleveur(e:Eleveur){
    return this.http.put(this.host+"/Eleveurs/",e)
    .pipe(map(rest=>rest.json())) ;
  }

  deleteEleveur(ref:string){
    return this.http.delete(this.host+"/Eleveurs/"+ref)
    .pipe(map(rest=>rest.json())) ;
  }

  


 /* les Services du Clients
   ************************************************************************************************  */
  getAllClients(){
    return this.http.get(this.host+"/Clients")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneClients(id:string){
    return this.http.get(this.host+"/Clients/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  saveClient(c:Client){
    return this.http.post(this.host+"/Clients/",c)
    .pipe(map(rest=>rest.json())) ;
  }

  updateClient(c:Client){
    return this.http.put(this.host+"/Clients/",c)
    .pipe(map(rest=>rest.json())) ;
  }

  deleteClient(ref:string){
    return this.http.delete(this.host+"/Clients/"+ref)
    .pipe(map(rest=>rest.json())) ;
  }


  /* les Services du Veterinaires
   ************************************************************************************************  */
  getAllVeterinaires(){
    return this.http.get(this.host+"/Veterinaires")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneVeterinaires(id:string){
    return this.http.get(this.host+"/Veterinaires/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  saveVeterinaires(v:Veterinaire){
    return this.http.post(this.host+"/Veterinaires/",v)
    .pipe(map(rest=>rest.json())) ;
  }

  updateVeterinaires(v:Veterinaire){
    return this.http.put(this.host+"/Veterinaires/",v)
    .pipe(map(rest=>rest.json())) ;
  }

  deleteVeterinaires(ref:string){
    return this.http.delete(this.host+"/Veterinaires/"+ref)
    .pipe(map(rest=>rest.json())) ;
  }





  /* les Services du Distributeur
   ************************************************************************************************  */
  getAllDistributeurs(){
    return this.http.get(this.host+"/Distributeurs")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneDistributeurs(id:string){
    return this.http.get(this.host+"/Distributeurs/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  saveDistributeurs(d:Distributeur){
    return this.http.post(this.host+"/Distributeurs/",d)
    .pipe(map(rest=>rest.json())) ;
  }

  updateDistributeurs(d:Distributeur){
    return this.http.put(this.host+"/Distributeurs/",d)
    .pipe(map(rest=>rest.json())) ;
  }

  deleteDistributeurs(ref:string){
    return this.http.delete(this.host+"/Distributeurs/"+ref)
    .pipe(map(rest=>rest.json())) ;
  }


  



}
