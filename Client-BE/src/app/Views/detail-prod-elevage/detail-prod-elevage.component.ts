import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../Services/Produit/produit.service';
import { ProduitElevage } from '../../model/produit';

@Component({
  selector: 'app-detail-prod-elevage',
  templateUrl: './detail-prod-elevage.component.html',
  styleUrls: ['./detail-prod-elevage.component.css']
})
export class DetailProdElevageComponent implements OnInit {

  produitElevage:ProduitElevage = new ProduitElevage() ;
  id:string = "" ;

  constructor(private activeRoute:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'] ;
    this.produitService.getOneProduitElevage(this.id)
    .subscribe(data=>{
      this.produitElevage = data ;
     // console.log(this.animal);

    },err=>{
      console.log(err);

    })
  }

}
