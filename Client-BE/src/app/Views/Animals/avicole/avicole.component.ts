import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avicole',
  templateUrl: './avicole.component.html',
  styleUrls: ['./avicole.component.css']
})
export class AvicoleComponent implements OnInit {
  animals:any ;
  constructor(private ovinService:AnimalService, private router:Router) { }

  ngOnInit() {
    this.ovinService.getbyTypeAnimal("Avicole")
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
