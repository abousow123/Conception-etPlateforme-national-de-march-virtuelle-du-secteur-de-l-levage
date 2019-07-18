import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ProduitVeterinaire, ProduitElevage } from '../../model/produit';
import { Serveur } from '~/model/ConnexionToServe';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  ipAddress:Serveur = new Serveur() ;
  host:string= this.ipAddress.ip ;

  constructor(private http:Http) { }

  /* les Services du Produit
     ************************************************************************************************  */
  
    getAllProduits(){
      return this.http.get(this.host+"/Produits")
      .pipe(map(rest=>rest.json())) ;
     }


  /* les Services du ProduitElevage
     ************************************************************************************************  */

     getAllProduitElevages(){
      return this.http.get(this.host+"/ProduitElevages")
      .pipe(map(rest=>rest.json())) ;
     }

     getOneProduitElevage(ref:string){
       return this.http.get(this.host+"/ProduitElevages/"+ref)
      .pipe(map(rest=>rest.json())) ;
     }

     saveProduitElevage(p:ProduitElevage){
      return this.http.post(this.host+"/ProduitElevages",p)
      .pipe(map(rest=>rest.json())) ;
     }

     updateProduitElevage(p:ProduitElevage){
      return this.http.put(this.host+"/ProduitElevages",p)
      .pipe(map(rest=>rest.json())) ;
     }

     deleteProduitElevage(ref:string){
      return this.http.delete(this.host+"/ProduitElevages/"+ref)
     .pipe(map(rest=>rest.json())) ;
    }


    /* les Services du ProduitVeterinaire
     ************************************************************************************************  */

     getAllProduitVeterinaires(){
      return this.http.get(this.host+"/ProduitVeterinaires")
      .pipe(map(rest=>rest.json())) ;
     }

     getOneProduitVeterinaires(ref:string){
      return this.http.get(this.host+"/ProduitVeterinaires/"+ref)
      .pipe(map(rest=>rest.json())) ;
     }

     saveProduitVeterinaires(p:ProduitVeterinaire){
      return this.http.post(this.host+"/ProduitVeterinaires",p)
      .pipe(map(rest=>rest.json())) ;
     }

     updateProduitVeterinaires(p:ProduitVeterinaire){
      return this.http.put(this.host+"/ProduitVeterinaires",p)
      .pipe(map(rest=>rest.json())) ;
     }

     deleteProduitVeterinaires(ref:string){
      return this.http.delete(this.host+"/ProduitVeterinaires/"+ref)
      .pipe(map(rest=>rest.json())) ;
     }




  
}
