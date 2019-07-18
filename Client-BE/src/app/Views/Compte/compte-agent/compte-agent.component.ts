import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitVeterinaire, Produit } from '../../../model/produit';
import { ProduitService } from '../../../Services/Produit/produit.service';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { UserService } from '../../../Services/Utilisateur/user.service';
import { AnnonceGouvernemental } from '../../../model/annonce';
import { AnnonceService } from '../../../Services/Annonce/annonce';
import { Animal } from '../../../model/Animal';

@Component({
  selector: 'app-compte-agent',
  templateUrl: './compte-agent.component.html',
  styleUrls: ['./compte-agent.component.css']
})
export class CompteAgentComponent implements OnInit {

  animals: Animal[] = new Array() ;

  demandeFile: any = File;

  allusers:any ;

  annonce:AnnonceGouvernemental = new AnnonceGouvernemental() ;

  catprodVeterinaire:any ;

  mode:number = 1 ;

  produitForm: FormGroup;

  produitVeterinaire:ProduitVeterinaire = new ProduitVeterinaire() ;
  produit:Produit = new Produit() ;

  constructor(private animalServices:AnimalService, private userServices:UserService,
     private annonceService:AnnonceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllTypeAnimal() ;
    this.getAllUsers() ;

    /*this.produitForm = this.formBuilder.group({
      typeannonce: ([this.annonce.typeannonce, Validators.required]),
      description: [this.annonce.descriptionannonce, Validators.required],
      destine: ['', Validators.required],
      prix: [this.produit.prix, Validators.required],
      typeproduit: [this.produit.typeproduit, Validators.required],
      idcatprodveterinaire: ['', Validators.required],

    }); */
  }

  menuPub(){
    this.mode = 2 ;
  }

  menuCom(){
    this.mode = 1 ;
  }

  menuAnnonce(){
    this.mode = 2 ;
  }


  

  getAllTypeAnimal(){
    this.animalServices.getAllAnimals()
    .subscribe(data=>{
     console.log(data);
     //this.animals = data ;

     for(var i = 0;i<data.length;i++){
      if(data[i].validerPublication==false){
      this.animals[i] = data[i] ;
      }
   }

   },err=>{
     console.log(err);

   });
  }

  getAllUsers(){
    this.userServices.getAllUsers()
    .subscribe(data=>{
     //console.log(data);
     this.allusers = data ;

   },err=>{
     console.log(err);

   });
  }

  validerAnnonce(ani:Animal){
    ani.validerPublication = true ;
    this.animalServices.updateAnimal(ani)
    .subscribe(data=>{
      //console.log(data);
      //this.allusers = data ;
 
    },err=>{
      console.log(err);
 
    }); 

    /*const formData = new FormData();
    formData.append('animal', JSON.stringify(ani));
    this.demandeFile = ani.photo
    console.log(this.demandeFile);
    
    formData.append('file1', this.demandeFile);
    console.log(ani);
    this.animalServices.postAnimal(formData).subscribe(
      response => {
        console.log(response);
      }
    ); */
  }

/*
  saveProdVeterinaire(){
    this.produit.referenceproduit = "ref8" ;
    this.produit.typeproduit = this.produitForm.value.typeproduit  ;
    this.produit.nom = this.produitForm.value.nom ;
    this.produit.description = this.produitForm.value.description ;
    this.produit.modeemploi = this.produitForm.value.modeemploi ;
    this.produit.prix = this.produitForm.value.prix ;

    this.produitVeterinaire.produit = this.produit ;
    this.produitVeterinaire.categorieprodveterinaire.idcatprodveterinaire = parseInt(this.produitForm.value.idcatprodveterinaire) ;

    this.produitVeterinaire.veterinaire.numuser = "user6" ;

    console.log(this.produitVeterinaire);

    const formData = new FormData();
    formData.append('produitVeterinaire', JSON.stringify(this.produitVeterinaire));
    formData.append('file1', this.demandeFile);

    /*this.catProdService.saveProduitVeterinaires(formData)
    .subscribe(data=>{
      console.log(data);

    },err=>{
      console.log(err);

    }); 
  }
*/

  onSelectFile(event) {
    const file = event.target.files[0];
    this.demandeFile = file;
  } 


}
