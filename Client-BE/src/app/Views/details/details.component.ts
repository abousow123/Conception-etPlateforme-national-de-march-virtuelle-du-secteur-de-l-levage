import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../model/Animal';
import { AnimalService } from '../../Services/Animal/animal.service';
import { CommandeClient } from '../../model/Commande';
import { CommandeService } from '../../Services/Commandes/commande.service';
import { Constent } from '../../model/const';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string ;
  animal: Animal = new Animal() ;
  datep:string = "" ;
  datepp:string = "29-04-2019 à 12:32" ;
  comClient:CommandeClient = new CommandeClient();
  //count= Constent.count ;

  constructor(private activeRoute:ActivatedRoute,private animamlService:AnimalService,
  private comClientService:CommandeService,private router:Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'] ;
    console.log(this.id);
    this.animamlService.getOneAnimal(this.id)
    .subscribe(data=>{ 
      this.animal = data ;

      console.log(this.animal);
     // this.datep = ""+this.animal.datepublication.getDay() ;
      //console.log(this.animal);

    },err=>{
      console.log(err);

    }) ;
  }


  addCart(){
    this.comClient.client.numuser = "user2" ;
    //Constent.count = Constent.count + 1 ;
    this.comClient.commande.livrer = false ;
    this.comClient.commande.confirmer = false ;
    console.log(this.animal.idanimal);

    this.comClientService.saveCommandeClient(this.animal.idanimal,this.comClient)
    .subscribe(data=>{

    },err=>{
      console.log(err);

    }) ;
    
    //this.router.navigateByUrl("/app") ;

  }



}
