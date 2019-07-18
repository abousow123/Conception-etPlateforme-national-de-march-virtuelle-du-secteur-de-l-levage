import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canin',
  templateUrl: './canin.component.html',
  styleUrls: ['./canin.component.css']
})
export class CaninComponent implements OnInit {
  animals: any;

  constructor(private caninService:AnimalService,private router:Router) { }

  ngOnInit() {
    this.caninService.getbyTypeAnimal("Chien-Chat")
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
