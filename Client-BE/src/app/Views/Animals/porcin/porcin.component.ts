import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porcin',
  templateUrl: './porcin.component.html',
  styleUrls: ['./porcin.component.css']
})
export class PorcinComponent implements OnInit {
  animals: any;

  constructor(private porcinService:AnimalService, private router:Router) { }

  ngOnInit() {
    this.porcinService.getbyTypeAnimal("Porcin")
    .subscribe(data=>{

      this.animals = data ;
      console.log(data);
      
    },err=>{
      console.log(err);
      
    })
  }

  onDetailsAnimal(idAnimal:string){
    console.log(idAnimal);
     this.router.navigate(['detailAnimal',idAnimal]) ;
  }

}
