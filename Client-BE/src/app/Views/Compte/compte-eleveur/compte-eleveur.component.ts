import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { LigneCommandeClient } from '../../../model/Commande';
import { Router } from '@angular/router';
import { Animal } from '../../../model/Animal';
import { CommandeService } from '../../../Services/Commandes/commande.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compte-eleveur',
  templateUrl: './compte-eleveur.component.html',
  styleUrls: ['./compte-eleveur.component.css']
})
export class CompteEleveurComponent implements OnInit {

  animals:Animal[] = [];
  mode:number=0;
  m:number=0;
  listLigne:LigneCommandeClient[]= new Array()  ;

  animal:Animal= new Animal() ;
  typeanimals:any;
  idtypeanimal:string = "" ;

  animalForm: FormGroup;
  demandeFile: any = File;

  constructor(private animalService:AnimalService,private ligneServices:CommandeService, private route:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAnimals() ;
  }

  getAnimals(){
    this.animalService.getAnimalByUser("user1")
    .subscribe(data=>{

      this.animals = data ;

      for(let l of this.animals){
        if(l.lignecommandeclients.length!=0) {
          for(let e of l.lignecommandeclients){
               e.animal = l ;
            if(e.commandeclient.commande.confirmer==true) {

              this.listLigne.push(e) ;
            }
          }
        }
      }

      console.log(this.listLigne);


    },err=>{
      console.log(err);

    }) ;

    this.getAllTypeAnimal() ;
    this.animalForm = this.formBuilder.group({
      nom: ([this.animal.nom, Validators.required]),
      sexe: ([this.animal.sexe, Validators.required]),
      poids: ([this.animal.poids, Validators.required]),
      codegenetique: ([this.animal.codegenetique, Validators.required]),
      prix: ([this.animal.prix, Validators.required]),
      description: ([this.animal.description, Validators.required]),
    });
  }

  getAllTypeAnimal(){
    this.animalService.getAllTypeAnimal()
    .subscribe(data=>{
     console.log(data);
     this.typeanimals = data ;

   },err=>{
     console.log(err);

   });
  }


  menuPub(){
    this.mode = 0 ;
  }
  menuCom(){
    this.mode = 1 ;
  }
  menuAnnonce(){
    this.mode = 2 ;
  }

  deleteAnimal(id){
    this.animalService.deleteAnimal(id)
    .subscribe(data=>{
      console.log(data);
      this.getAnimals() ;
      this.route.navigateByUrl("/compteEleveur") ;

    },err=>{
      console.log(err);

    })

  }



  validerLivraison(id:number){

    for(let l of this.listLigne){
      if(l.idligneclient==id){
      l.commandeclient.commande.livrer = true ;
      console.log("Livrer");
      this.updateLigne(l) ;

      }
    }
  }

  updateLigne(ligne:LigneCommandeClient){
    this.ligneServices.updateLigneCommandeClient(ligne)
    .subscribe(data1=>{
      // console.log(data);

     }) ;

  }


  postAnimal(animalForm: FormGroup){

    // this.animal = animalForm.value ;

    //this.animal.typeanimal.idtypeanimal = parseInt(animalForm.value.Idtypeanimal ) ;
    //console.log(this.animal.typeanimal.idtypeanimal);
    this.animal.typeanimal.idtypeanimal = parseInt(this.idtypeanimal) ;

    //this.animal.datepublication = new Date() ;
    this.animal.idanimal =  "an15" ;
    this.animal.eleveur.numuser = "user1" ;
    this.animal.typeanimal.idtypeanimal = parseInt(this.idtypeanimal) ;
     this.animal.nom = this.animalForm.value.nom ;
     this.animal.sexe = this.animalForm.value.sexe ;
     this.animal.validerPublication = false ;

     this.animal.poids = this.animalForm.value.poids;
     this.animal.codegenetique = this.animalForm.value.codegenetique ;
     this.animal.prix = this.animalForm.value.prix ;
     this.animal.description = this.animalForm.value.description ;
     this.animal.datepublication = new Date() ;

    /*
     this.animal.datepublication = new Date() ;
     this.animal.description = "abou"

     this.animal.typeanimal.idtypeanimal = 2 ;
     this.animal.eleveur.numuser = "user1" ;
     this.animal.nom = "sdsdf";
     this.animal.codegenetique = "dfff" ;

     this.animal.prix = 2344567;
     this.animal.poids = 15 ;
     this.animal.idanimal =  "an6" ;
     this.animal.description = "dffdfdf" ;
     this.animal.datepublication = new Date() ;

     this.animal.typeanimal.idtypeanimal =  1;

    console.log(this.animal.typeanimal.idtypeanimal); */
     const formData = new FormData();
     formData.append('animal', JSON.stringify(this.animal));
     formData.append('file1', this.demandeFile);
     console.log(this.animal);
     this.animalService.postAnimal(formData).subscribe(
       response => {
         console.log(response);
       }
     );


 }

 onSelectFile(event) {
   const file = event.target.files[0];
   this.demandeFile = file;
 }

}
