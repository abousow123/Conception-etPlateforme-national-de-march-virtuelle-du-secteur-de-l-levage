import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AnimalsComponent } from './Views/Animals/animals/animals.component';
import { UserService } from './Services/Utilisateur/user.service';
import { PayementService } from './Services/Payement/payement.service';
import { CommandeService } from './Services/Commandes/commande.service';
import { AnimalService } from './Services/Animal/animal.service';
import { ProduitService } from './Services/Produit/produit.service';
import { HttpModule } from '@angular/http';
import { DetailsComponent } from './Views/details/details.component';
import { LigneCommandeAnimalComponent } from './Views/Animals/ligne-commande-animal/ligne-commande-animal.component';
import { NewAnimalComponent } from './Views/Animals/new-animal/new-animal.component';
import { BovinComponent } from './Views/Animals/bovin/bovin.component';
import { OvinComponent } from './Views/Animals/ovin/ovin.component';
import { CaprinComponent } from './Views/Animals/caprin/caprin.component';
import { EquinComponent } from './Views/Animals/equin/equin.component';
import { CaninComponent } from './Views/Animals/canin/canin.component';
import { PorcinComponent } from './Views/Animals/porcin/porcin.component';
import { AvicoleComponent } from './Views/Animals/avicole/avicole.component';
import { NewProdElevageComponent } from './Views/Produts/produit_Elevage/new-prod-elevage/new-prod-elevage.component';
import { NewProdVeterinaireComponent } from './Views/Produts/produit_Veterinaire/new-prod-veterinaire/new-prod-veterinaire.component';
import { DetailProdElevageComponent } from './Views/detail-prod-elevage/detail-prod-elevage.component';
import { DetailProdVeterinaireComponent } from './Views/detail-prod-veterinaire/detail-prod-veterinaire.component';
import { CompteEleveurComponent } from './Views/Compte/compte-eleveur/compte-eleveur.component';
import { CompteClientComponent } from './Views/Compte/compte-client/compte-client.component';
import { CompteVeterinaireComponent } from './Views/Compte/compte-veterinaire/compte-veterinaire.component';
import { CompteDistributeurComponent } from './Views/Compte/compte-distributeur/compte-distributeur.component';
import { CompteAgentComponent } from './Views/Compte/compte-agent/compte-agent.component';
import { ChercherComponent } from './Views/chercher/chercher.component';
import { AnnonceService } from './Services/Annonce/annonce';



const routes: Routes = [
  { path: 'animal', component: AnimalsComponent },
  { path: 'app', component: AppComponent },
  { path: 'compteEleveur', component: CompteEleveurComponent },
  { path: 'compteVeterinaire', component: CompteVeterinaireComponent },
  { path: 'compteAgent', component: CompteAgentComponent },
  { path: 'newanimal', component: NewAnimalComponent },
  { path: 'newprodelevage', component: NewProdElevageComponent },
  { path: 'newprodveterinaire', component: NewProdVeterinaireComponent },
  { path: 'detailAnimal/:id', component: DetailsComponent },
  { path: 'detailproduitElevage/:id', component: DetailProdElevageComponent },
  { path: 'detailproduitVeterinaire/:ref', component: DetailProdVeterinaireComponent },
  { path: 'ligneComClient', component: LigneCommandeAnimalComponent },
  { path: 'bovin', component: BovinComponent },
  { path: 'ovin', component: OvinComponent },
  { path: 'caprin', component: CaprinComponent },
  { path: 'equin', component: EquinComponent },
  { path: 'porcin', component: PorcinComponent },
  { path: 'canin', component: CaninComponent },
  { path: 'avicole', component: AvicoleComponent },
  
  { path: '', redirectTo: '/animal', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    DetailsComponent,
    DetailProdElevageComponent,
    LigneCommandeAnimalComponent,
    NewAnimalComponent,
    BovinComponent,
    OvinComponent,
    CaprinComponent,
    EquinComponent,
    CaninComponent,
    PorcinComponent,
    AvicoleComponent,
    NewProdElevageComponent,
    NewProdVeterinaireComponent,
    DetailProdVeterinaireComponent,
    CompteEleveurComponent,
    CompteClientComponent,
    CompteVeterinaireComponent,
    CompteDistributeurComponent,
    CompteAgentComponent,
    ChercherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule

  ],
  providers: [
    UserService,
    PayementService,
    CommandeService,
    AnimalService,
    ProduitService,
    AnnonceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
