import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Animal } from '../../model/Animal';
import { Observable } from 'rxjs/Observable';
import { Serveur } from '../../model/ConnexionToServe';
import { isPending } from 'q';

@Injectable()
export class AnimalService {

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

  deleteAnimal(id:string){
    return this.http.delete(this.host+"/Animals/"+id)
    .pipe(map(rest=>rest.json())) ;
  }

  getbyTypeAnimal(data){
    return this.http.get(this.host+"/chercherAnimals?mc="+data)
    .pipe(map(rest=>rest.json())) ;
}

getAnimalByUser(data){
  return this.http.get(this.host+"/ChercherAnimalsByUser?mc="+data)
  .pipe(map(rest=>rest.json())) ;
}

getAnimalByName(data){
  return this.http.get(this.host+"/ChercherAnimalsByName?mc="+data)
  .pipe(map(rest=>rest.json())) ;
}


getAllTypeAnimal(){
    return this.http.get(this.host+"/TypeAnimals")
    .pipe(map(rest=>rest.json())) ;
}

   saveAnimal(animal:Animal){
    return this.http.post(this.host+"/Animals",animal)
    .pipe(map(rest=>rest.json())) ;
   }

   postAnimal(formData: FormData): Observable<any> {
    return this.http.post(this.host+"/Animals", formData);
  }

   updateAnimal(animal:Animal){
    return this.http.put(this.host+"/Animals/"+animal.idanimal,animal)
    .pipe(map(rest=>rest.json())) ;
   }


}
