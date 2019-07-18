import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ProduitElevage, ProduitVeterinaire } from '../../model/produit';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProduitService {

  public host:string="http://localhost:8080" ;

  constructor(private http:Http) { }


  /* les Services Categorie de Produits
     ************************************************************************************************  */

    getCategorieProdElevage(){
      return this.http.get(this.host+"/chercherProduitElevages?mc=")
      .pipe(map(rest=>rest.json())) ;
     }

     getCategorieProdVegetal(){
      return this.http.get(this.host+"/CategorieProduitVeterinaires")
      .pipe(map(rest=>rest.json())) ;
     }


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

     saveProduitElevage(formData: FormData): Observable<any>{
      return this.http.post(this.host+"/ProduitElevages",formData)

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

     saveProduitVeterinaires(formData: FormData): Observable<any>{
      return this.http.post(this.host+"/ProduitVeterinaires",formData)
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
