/***********************************************************************
 * Module:  LigneCommandeAnimal.java
 * Author:  abou
 * Purpose: Defines the Class LigneCommandeAnimal
 ***********************************************************************/


package org.sid.entities;


import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "lignecommandeanimal")
public class LigneCommandeAnimal implements Serializable {

   private String id = UUID.randomUUID().toString();
   private double prix;

   //relation
   private Animal animal;
   private Commande commande;

   public LigneCommandeAnimal() {
   }


   @Id
   @Column(name = "id", unique = true, nullable = false, length = 254)
   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   @Column(name = "prix", precision = 17, scale = 17)
   public double getPrix() {
      return prix;
   }

   public void setPrix(double prix) {
      this.prix = prix;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   public Animal getAnimal() {
      return animal;
   }

   public void setAnimal(Animal animal) {
      this.animal = animal;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   public Commande getCommande() {
      return commande;
   }

   public void setCommande(Commande commande) {
      this.commande = commande;
   }
}