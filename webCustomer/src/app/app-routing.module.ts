import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { AllCategoriesAnimalsComponent } from './views/Animaux/all-categories-animals/all-categories-animals.component';
import { AllCategoriesProduitComponent } from './views/Produits/all-categories-produit/all-categories-produit.component';




const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  {path: 'animals', component: AllCategoriesAnimalsComponent},
  {path: 'produits', component: AllCategoriesProduitComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
