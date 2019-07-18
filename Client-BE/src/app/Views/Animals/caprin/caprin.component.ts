import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caprin',
  templateUrl: './caprin.component.html',
  styleUrls: ['./caprin.component.css']
})
export class CaprinComponent implements OnInit {

  animals : any

  constructor(private bovinService:AnimalService,private router:Router) { }

  ngOnInit() {
    this.bovinService.getbyTypeAnimal("Chevre")
    .subscribe(data=>{
      
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
