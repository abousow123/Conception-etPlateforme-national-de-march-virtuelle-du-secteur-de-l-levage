import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsAnimalComponent } from './views/Animaux/details-animal/details-animal.component';
import { DetailsProduitComponent } from './views/Produits/details-produit/details-produit.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { AllCategoriesAnimalsComponent } from './views/Animaux/all-categories-animals/all-categories-animals.component';
import { AllCategoriesProduitComponent } from './views/Produits/all-categories-produit/all-categories-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAnimalComponent,
    DetailsProduitComponent,
    AccueilComponent,
    AllCategoriesAnimalsComponent,
    AllCategoriesProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
