import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { Category } from "../data/category.model";
import { DataService } from "../data/data";
import { isIOS } from "tns-core-modules/ui/text-base/text-base";
import { Color } from "tns-core-modules/color/color";
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
import { AnimalsService } from "~/services/Animal/animals.service";
import { Router } from "@angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CommandeService } from "~/services/Commande/commande.service";
import { LigneCommandeClient } from "~/model/Commande";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import * as LabelModule from "tns-core-modules/ui/label";
import { ProduitService } from "~/services/Produits/produit.service";
import { Produit } from "~/model/produit";


elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").Cardview) ;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    //styleUrls: ['./home.component.css']
    // All styles were put inside of app.css so we don't need a home.component.css for now
})

export class HomeComponent implements OnInit {
    
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items: Array<Item>;
    categories: Array<Category>;
    data = [];

    lignes:LigneCommandeClient[] = new Array() ;
    total:number = 0 ;

    itemsa: { name: string, desc: string, price: string, imageSrc: string }[] = [
        { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
        { name: "Bowl of Crap", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
        { name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
        { name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
        { name: "Cuff Links", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
        { name: "Skateboard", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
        { name: "Off-Brand Soda", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
        { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
        { name: "Pie!", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
    ];

    animals:any ;
    produits = [] ;
    produitElevages:Produit[] = new Array() ;
    produitVeterinaires:Produit[] = new Array() ;

    camera = require("nativescript-camera");

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService,private produitService:ProduitService,
    private animalServices:AnimalsService, private router:Router,private ligneServices:CommandeService,) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
    }

    ngOnInit(): void {
        this.animalServices.getAllAnimals()
        .subscribe(data=>{
           // console.log(data);
            console.log(data);
            this.animals = data
            
          }) ;

          this.getAllLigneComClients() ;
          this.getProduits() ;


          this.data.push({ heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
         
    }

    showItem(idAnimal:string) {
        /*console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["detail/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);*/this.router.navigate(['detail',idAnimal]) ;


    }

    toggleLike(item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        } else {
            item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon(itemCategory) {
        switch (itemCategory) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    }


    //Top nav bar tap methods
    onBellTap() {
    }

    onSearchTap() {
    }

    onPopularTap() {
        this.selectedTabview = 0;
    }

    onCategoryTap() {
        this.selectedTabview = 1;
    }

    onPromosTap() {
        this.selectedTabview = 2;
    }

    //Bottom nav bar tap methods
    onHomeTap() {
        this.selectedTab = 0;
        this.selectedTabview = 0;
    }

    onCartTap() {
        this.selectedTab = 2;
       /* this.selectedTabview = 2;

        var imageModule = require("tns-core-modules/ui/image");
        this.camera.takePicture()   
    .then(function (imageAsset) {
        console.log("Result is an image asset instance");
        var image = new imageModule.Image();
        image.src = imageAsset;
        console.log(image.src);
        
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });  */

    }

    onHistoryTap() {
        this.selectedTab = 1;
       // this.selectedTabview =1;
    }

    onAboutTap() {
        this.selectedTab = 3;
       // this.selectedTabview = 3;
    }
    onItemLoading(args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (isIOS) {
            var newcolor = new Color("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
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

      getProduits(){
        this.produitService.getAllProduits()
        .subscribe(data=>{
          this.produits = data ;
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
