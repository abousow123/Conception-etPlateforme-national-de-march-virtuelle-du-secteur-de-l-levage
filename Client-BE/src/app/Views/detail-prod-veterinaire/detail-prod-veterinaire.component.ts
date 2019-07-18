import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../Services/Produit/produit.service';
import { ProduitVeterinaire, ProduitElevage } from '../../model/produit';

@Component({
  selector: 'app-detail-prod-veterinaire',
  templateUrl: './detail-prod-veterinaire.component.html',
  styleUrls: ['./detail-prod-veterinaire.component.css']
})
export class DetailProdVeterinaireComponent implements OnInit {

  id:string = "" ;
  produitVeterinaire: ProduitVeterinaire = new ProduitVeterinaire() ;

  constructor(private activeRoute:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['ref'] ;
    this.produitService.getOneProduitVeterinaires(this.id)
    .subscribe(data=>{
      this.produitVeterinaire = data ;
     // console.log(this.animal);

    },err=>{
      console.log(err);

    })
  }

}
