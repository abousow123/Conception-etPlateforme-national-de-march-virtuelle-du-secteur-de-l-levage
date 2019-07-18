import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../model/Animal';
import { AnimalService } from '../../../Services/Animal/animal.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  animal:Animal= new Animal() ;
  typeanimals:any;
  mode:number=1 ;
  idtypeanimal:string = "" ;

  animalForm: FormGroup;
  demandeFile: any = File;

  constructor(private animalServices:AnimalService,typeanimal:AnimalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    this.animalServices.getAllTypeAnimal()
    .subscribe(data=>{
     console.log(data);
     this.typeanimals = data ;

   },err=>{
     console.log(err);

   });
  }

  

  postAnimal(animalForm: FormGroup){

     // this.animal = animalForm.value ;

     //this.animal.typeanimal.idtypeanimal = parseInt(animalForm.value.Idtypeanimal ) ;
     //console.log(this.animal.typeanimal.idtypeanimal);
     this.animal.typeanimal.idtypeanimal = parseInt(this.idtypeanimal) ;

     //this.animal.datepublication = new Date() ;
     this.animal.idanimal =  "an1" ;
     this.animal.eleveur.numuser = "user1" ;
     this.animal.typeanimal.idtypeanimal = parseInt(this.idtypeanimal) ;
      this.animal.nom = this.animalForm.value.nom ;
      this.animal.sexe = this.animalForm.value.sexe ;
      console.log(this.animal.sexe);

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
      //this.demandeFile = this.animal.photo
      formData.append('file1', this.demandeFile);
      console.log(this.animal);
      this.animalServices.postAnimal(formData).subscribe(
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
