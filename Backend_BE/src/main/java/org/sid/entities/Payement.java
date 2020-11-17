package org.sid.entities; /***********************************************************************
 * Module:  Payement.java
 * Author:  abou
 * Purpose: Defines the Class Payement
 ***********************************************************************/

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;


@Entity
@Table(name = "payement")
public class Payement implements Serializable {

   private String id =UUID.randomUUID().toString();

   private Date datePayement;
   private String typePayement;

   //relation
   Commande commande;


   public Payement(){
   }


   @Id
   @Column(name = "id", unique = true, nullable = false, length = 254)
   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   @Temporal(TemporalType.TIMESTAMP)
   @Column(name = "datepayement", length = 29)
   public Date getDatePayement() {
      return datePayement;
   }

   public void setDatePayement(Date datePayement) {
      this.datePayement = datePayement;
   }

   @Column(name = "typepayemment", length = 254)
   public String getTypePayement() {
      return typePayement;
   }

   public void setTypePayement(String typePayement) {
      this.typePayement = typePayement;
   }

   @OneToOne
   public Commande getCommande() {
      return commande;
   }

   public void setCommande(Commande commande) {
      this.commande = commande;
   }
}