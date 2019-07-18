import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/Utilisateur/user.service';
import { Utilisateur, Eleveur, Client, Distributeur, Veterinaire } from './model/Utilisateur';
import { AnimalService } from './Services/Animal/animal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constent } from './model/const';
import { CommandeService } from './Services/Commandes/commande.service';
import { LigneCommandeClient } from './model/Commande';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  roles:any ;
  user:Utilisateur = new Utilisateur() ;
  e:Eleveur  = new Eleveur();
  c:Client = new Client();
  d:Distributeur = new Distributeur() ;
  v:Veterinaire = new Veterinaire() ;
  idroless:string="" ;
  pass:string = "" ;
  typeanimals: any;
  num:number = 0 ;
  log1:number = 0 ;
  lignes:LigneCommandeClient[] = new Array() ;

  produitForm: FormGroup;

   constructor(private userService:UserService,private animalServices:AnimalService,private ligneServices:CommandeService,
    private formBuilder: FormBuilder){}


   ngOnInit(): void {

    this.userService.getAllRoles()
    .subscribe(data=>{
     this.roles = data
     this.roles.splice(0,1) ;
    // console.log(this.roles);

    },err=>{
      console.log(err);

    })

    this.produitForm = this.formBuilder.group({
      search1: (['', Validators.required]),
      search2: (['', Validators.required])
     

    });

    this.getAllLigneComClients() ;
  }


  saveUser(){

    this.user.numuser = "user29" ;
    this.user.role.idrole = parseInt(this.idroless) ;
    console.log(this.user);


    if(this.user.role.idrole==2){
      this.user.profil = "Eleveur" ;
       this.e.utilisateur = this.user ;
      this.userService.saveEleveur(this.e)
      .subscribe(data=>{
       console.log(data);
       },err=>{
         console.log(err);

       })
    } ;

    if(this.user.role.idrole==3){
      this.user.profil = "Client" ;
      this.c.utilisateur = this.user ;
      const form:FormData = new FormData() ;
      form.append('client',JSON.stringify(this.c)) ;
      form.append('pass',this.pass) ;
     this.userService.saveClient(form)
     .subscribe(data=>{
      console.log(data);
      },err=>{
        console.log(err);

      })
   }

   if(this.user.role.idrole==4){
    this.user.profil = "Veterinaire" ;
    this.v.utilisateur = this.user ;
   this.userService.saveVeterinaires(this.v)
   .subscribe(data=>{
    console.log(data);
    },err=>{
      console.log(err);

    })
 }

 if(this.user.role.idrole==5){
  this.user.profil = "Distributeur" ;
  this.d.utilisateur = this.user ;
 this.userService.saveDistributeurs(this.d)
 .subscribe(data=>{
  console.log(data);
  },err=>{
    console.log(err);

  })
}

  }

  title = 'app';


  getAnimalsByName(){
    console.log(this.produitForm.value.search1);
    this.num = 1 ;
    this.animalServices.getAnimalByName(this.produitForm.value.search1)
    .subscribe(data=>{
     console.log(data);
     this.typeanimals = data ;

   },err=>{
     console.log(err);

   });
  }

  getAllLigneComClients(){
    this.ligneServices.getAllLigneComClients()
    .subscribe(data=>{
       // console.log(data);
        console.log(data);
        this.lignes = data ;
        this.log1 = this.lignes.length


      }) ;

  }



  ind:number= 0 ;

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
