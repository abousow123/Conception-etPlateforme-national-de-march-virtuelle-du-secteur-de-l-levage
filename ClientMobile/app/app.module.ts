import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";



import { AnimalsService } from "~/services/Animal/animals.service";
import { CommandeService } from "~/services/Commande/commande.service";
import { PayementService } from "~/services/Payement/payement.service";
import { ProduitService } from "~/services/Produits/produit.service";
import { UsersService } from "~/services/utilisateurs/users.service";
import { HttpModule } from "@angular/http";
import {NativeScriptHttpModule} from 'nativescript-angular/http';
import { HomeComponent } from "~/home/home.component";
import { DetailComponent } from "~/detail/detail.component";
import { DataService } from "~/data/data";




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule,
        NativeScriptCommonModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpModule,
        NativeScriptHttpModule,
    
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent,

    ],
    providers: [
        DataService,
        AnimalsService,
        CommandeService,
        PayementService,
        ProduitService,
        UsersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
