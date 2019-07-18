import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ovin',
  templateUrl: './ovin.component.html',
  styleUrls: ['./ovin.component.css']
})
export class OvinComponent implements OnInit {
  animals: any;

  constructor(private OvinService:AnimalService, private router:Router) { }

  ngOnInit() {
    this.OvinService.getbyTypeAnimal("Mouton")
    .subscribe(data=>{
      console.log(data);
      this.animals = data ;
      
    },err=>{
      console.log(err);
      
    })
  }

  onDetailsAnimal(idAnimal:string){
    console.log(idAnimal);
     this.router.navigate(['detailAnimal',idAnimal]) ;
  }


}
