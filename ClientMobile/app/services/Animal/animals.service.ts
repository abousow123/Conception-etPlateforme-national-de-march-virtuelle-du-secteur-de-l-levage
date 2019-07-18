import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Animal } from '~/model/Animal';
import { Serveur } from '~/model/ConnexionToServe';


@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  ipAddress:Serveur = new Serveur() ;
  host:string= this.ipAddress.ip ;

  constructor(private http:Http) { } 

  getAllAnimals(){
    return this.http.get(this.host+"/Animals")
    .pipe(map(rest=>rest.json())) ;
  }

  getOneAnimal(id:string){
    return this.http.get(this.host+"/Animals/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  getbyTypeAnimal(data){
    return this.http.get(this.host+"/chercherAnimals?mc="+data)
    .pipe(map(rest=>rest.json())) ;
}

getAllTypeAnimal(){
    return this.http.get(this.host+"/chercherAnimals?mc=")
    .pipe(map(rest=>rest.json())) ;
}

   saveAnimal(animal:Animal){
    return this.http.post(this.host+"/Animals",animal)
    .pipe(map(rest=>rest.json())) ;
   }

   updateAnimal(animal:Animal){
    return this.http.put(this.host+"/Animals",animal)
    .pipe(map(rest=>rest.json())) ;
   }
   

}
