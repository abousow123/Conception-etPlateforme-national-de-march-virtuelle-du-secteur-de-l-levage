import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equin',
  templateUrl: './equin.component.html',
  styleUrls: ['./equin.component.css']
})
export class EquinComponent implements OnInit {
  animals: any;

  constructor(private equinService:AnimalService,private router:Router) { }

  ngOnInit() {
    this.equinService.getbyTypeAnimal("Cheval")
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
