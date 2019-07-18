import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";

import { Item } from "../data/item.model";
import { DataService } from "../data/data";
import { Animal } from "~/model/Animal";
import { AnimalsService } from "~/services/Animal/animals.service";
import { ActivatedRoute } from "@angular/router";
import { CommandeService } from "~/services/Commande/commande.service";
import { CommandeClient } from "~/model/Commande";


@Component({
    selector: "Detail",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    itemId: string;
    item: Item;
    animal:Animal=new Animal() ;
    items: Array<Item>;
    id1:string ;
    datef:string = "20-05-2019" ;
    comClient:CommandeClient = new CommandeClient();

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,private activeRoute:ActivatedRoute,
        private dataService: DataService, private animalServices:AnimalsService,
        private comClientService:CommandeService,
        ) {

        this.items = this.dataService.getItems();        

        this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = params['id'];            
            //this.item = this.items.filter(item => item.id == this.itemId)[0];

            //this.id1 = params['id'] ;
        
            this.id1 = this.activeRoute.snapshot.params['id'] ;
            this.animalServices.getOneAnimal(this.id1)
            .subscribe(data=>{ 
               this.animal = data ;

               console.log(this.animal);
    

          },err=>{
              console.log(err);

            }) ;
        });
    }

    ngOnInit(): void {
        
    }

    toggleLike() {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        } else {
            this.item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon() {
        switch (this.item.categoryTag) {
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

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    onLog(){
        console.log('abc');
        
    }

    onAcheter(){

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
