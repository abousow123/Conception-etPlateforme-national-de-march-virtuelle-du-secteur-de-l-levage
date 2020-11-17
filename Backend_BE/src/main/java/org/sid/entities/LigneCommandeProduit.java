package org.sid.entities; /***********************************************************************
 * Module:  LigneCommandeProduit.java
 * Author:  abou
 * Purpose: Defines the Class LigneCommandeProduit
 ***********************************************************************/

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "lignecommandeproduit")
public class LigneCommandeProduit  implements Serializable {

   private String id = UUID.randomUUID().toString();

   private int quantite;
   private double prix;

   //relation
   private Produit produit;
   private Commande commande;


   public LigneCommandeProduit() {
   }

   @Id
   @Column(name = "id", unique = true, nullable = false, length = 254)
   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   @Column(name = "quantite")
   public int getQuantite() {
      return quantite;
   }

   public void setQuantite(int quantite) {
      this.quantite = quantite;
   }

   @Column(name = "prix", precision = 17, scale = 17)
   public double getPrix() {
      return prix;
   }

   public void setPrix(double prix) {
      this.prix = prix;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   public Produit getProduit() {
      return produit;
   }

   public void setProduit(Produit produit) {
      this.produit = produit;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   public Commande getCommande() {
      return commande;
   }

   public void setCommande(Commande commande) {
      this.commande = commande;
   }
}