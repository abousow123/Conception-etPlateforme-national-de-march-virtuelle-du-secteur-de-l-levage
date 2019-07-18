import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../../Services/Produit/produit.service';
import { ProduitElevage, Produit } from '../../../../model/produit';
import { AnimalService } from '../../../../Services/Animal/animal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-prod-elevage',
  templateUrl: './new-prod-elevage.component.html',
  styleUrls: ['./new-prod-elevage.component.css']
})
export class NewProdElevageComponent implements OnInit {
  typeanimals: any;

  demandeFile: any = File;

  catprodElevage:any ;

  produitForm: FormGroup;

  produitElevage:ProduitElevage = new ProduitElevage() ;
  produit:Produit = new Produit() ;

  constructor(private catProdService:ProduitService,private animalServices:AnimalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCatProduit() ;
    this.getAllTypeAnimal() ;
    this.produitForm = this.formBuilder.group({
      nom: ([this.produit.nom, Validators.required]),
      description: [this.produit.description, Validators.required],
      modeemploi: [this.produit.modeemploi, Validators.required],
      prix: [this.produit.prix, Validators.required],
      typeproduit: [this.produit.typeproduit, Validators.required],
      idcatprodelevage: ['', Validators.required],

    });
  }

  getCatProduit(){
    this.catProdService.getCategorieProdElevage()
    .subscribe(data=>{
     console.log(data);
     this.catprodElevage = data ;
   },err=>{
     console.log(err);

   });

  }

  getAllTypeAnimal(){
    this.animalServices.getAllTypeAnimal()
    .subscribe(data=>{
     console.log(data);
     this.typeanimals = data ;

   },err=>{
     console.log(err);

   });
  }

  saveProdElevage(){
    this.produit.referenceproduit = "ref2" ;
    this.produit.typeproduit = this.produitForm.value.typeproduit  ;
    this.produit.nom = this.produitForm.value.nom ;
    this.produit.description = this.produitForm.value.description ;
    this.produit.modeemploi = this.produitForm.value.modeemploi ;
    this.produit.prix = this.produitForm.value.prix ;

    this.produitElevage.produit = this.produit ;
    this.produitElevage.categorieprodelevage.idcatprodelevage = parseInt(this.produitForm.value.idcatprodelevage) ;
    this.produitElevage.referenceproduit = this.produit.referenceproduit
    this.produitElevage.distributeur.numuser = "user3" ;

    console.log(this.produitElevage);

    const formData = new FormData();
    formData.append('produitElevage', JSON.stringify(this.produitElevage));
    formData.append('file1', this.demandeFile);

    this.catProdService.saveProduitElevage(formData)
    .subscribe(data=>{
      console.log(data);

    },err=>{
      console.log(err);

    });
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    this.demandeFile = file;
  }

}
