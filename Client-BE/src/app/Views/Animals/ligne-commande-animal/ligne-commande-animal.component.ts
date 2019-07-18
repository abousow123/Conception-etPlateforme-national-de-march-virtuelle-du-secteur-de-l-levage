import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../../Services/Commandes/commande.service';
import { LigneCommandeClient } from '../../../model/Commande';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligne-commande-animal',
  templateUrl: './ligne-commande-animal.component.html',
  styleUrls: ['./ligne-commande-animal.component.css']
})
export class LigneCommandeAnimalComponent implements OnInit {
  lignes:LigneCommandeClient[] = new Array() ;
  total:number = 0 ;

  constructor(private ligneServices:CommandeService,private route:Router) { }

  ngOnInit() {
   this.getAllLigneComClients() ;
   //this.getTotal();

  }

  getAllLigneComClients(){
    this.ligneServices.getAllLigneComClients()
    .subscribe(data=>{
       // console.log(data);
        console.log(data);
        this.lignes = data ;
        for(let a of this.lignes){
            this.total = this.total + a.animal.prix ;
        }


      }) ;

  }

  validerCommande(){
    for(let l of this.lignes){
      l.commandeclient.commande.confirmer = true ;
      this.updateLigne(l) ;

    }

  }

  updateLigne(ligne:LigneCommandeClient){
    this.ligneServices.updateLigneCommandeClient(ligne)
    .subscribe(data=>{
      // console.log(data);

     }) ;

  }


  deleteLigne(ref:number){
    let confirm = window.confirm('Etes vous sure?');
    if(confirm==true){
      this.ligneServices.deleteLigneCommandeClient(ref)
      .subscribe(data=>{
       this.total = 0 ;
       this.getAllLigneComClients() ;
      },err=>{
        console.log(err);

      }) ;




    }

  }


}
