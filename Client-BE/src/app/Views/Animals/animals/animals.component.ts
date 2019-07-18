import { Component, OnInit, Input } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { Router } from '@angular/router';
import { ProduitService } from '../../../Services/Produit/produit.service';
import { Produit } from '../../../model/produit';
import { Animal } from '../../../model/Animal';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals:Animal[] = new Array() ;
  produitElevages:Produit[] = new Array() ;
  produitVeterinaires:Produit[] = new Array() ;

 

  ind:number= 0 ;

  constructor(private  animalService:AnimalService,private produitService:ProduitService,
    private router:Router) { }

  ngOnInit() {
    this.animalService.getAllAnimals()
    .subscribe(data=>{
        console.log(data);
        
        //this.animals = data ;
        //console.log(this.animals);

        for(var i = 0;i<data.length;i++){
          //if(data[i].validerPublication==true){ }
          this.animals[i] = data[i] ;
         
       }

      }) ;

      this.produitService.getAllProduitElevages()
      .subscribe(data=>{
         // console.log(data);

         for(var i = 0;i<data.length;i++){
            this.produitElevages[i] = data[i].produit ;
         }

          console.log(this.produitElevages);

        }) ;

        this.produitService.getAllProduitVeterinaires()
        .subscribe(data=>{
           // console.log(data);

           for(var i = 0;i<data.length;i++){
              this.produitVeterinaires[i] = data[i].produit ;
           }

            console.log(this.produitVeterinaires);

          }) ;


  }

  onDetailsAnimal(idAnimal:string){
    console.log(idAnimal);
     this.router.navigate(['detailAnimal',idAnimal]) ;
  }

  onDetailsProduitElevage(reference:string){
    //console.log(idAnimal);
     this.router.navigate(['detailproduitElevage',reference]) ;
  }

  onDetailsProduitVeterinaire(reference:string){
    //console.log(idAnimal);
     this.router.navigate(['detailproduitVeterinaire',reference]) ;
  }

  onTest(){
    //console.log(idAnimal);
    
   
  }




  Last(){
    this.ind = 0 ;
  }

  Special(){
    this.ind = 1 ;
  }

  Collect(){
    this.ind = 2 ;
  }

}



