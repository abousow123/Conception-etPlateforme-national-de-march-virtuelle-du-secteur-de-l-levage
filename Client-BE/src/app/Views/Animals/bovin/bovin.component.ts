import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { TypeAnimal } from '../../../model/Category';
import { Animal } from '../../../model/Animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bovin',
  templateUrl: './bovin.component.html',
  styleUrls: ['./bovin.component.css']
})
export class BovinComponent implements OnInit {
 animals:any  ;
  

  constructor(private bovinService:AnimalService, private router:Router) { }

  ngOnInit() {
    this.bovinService.getbyTypeAnimal("Boeuf-Vache")
    .subscribe(data=>{
      //console.log(data.content.TypeAnimal);
      this.animals = data ;

      console.log(this.animals);


    },err=>{
      console.log(err);

    }) ;

  }

  onDetailsAnimal(idAnimal:string){
    console.log(idAnimal);
     this.router.navigate(['detailAnimal',idAnimal]) ;
  }





}
