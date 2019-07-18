import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class AnnonceService {
  host:string="http://localhost:8080"

  constructor(private http:Http) { }

  getAllAnnonces(){
    return this.http.get(this.host+"/AnnonceGovernementals")
    .pipe(map(rest=>rest.json())) ;
  }
}