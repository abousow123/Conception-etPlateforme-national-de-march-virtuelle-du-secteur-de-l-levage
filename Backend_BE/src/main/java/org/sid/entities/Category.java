package org.sid.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.UUID;

/***********************************************************************
 * Module:  Category.java
 * Author:  abou
 * Purpose: Defines the Class Category
 ***********************************************************************/

@Entity
@Table(name = "category")
public class Category implements Serializable {

   private String id = UUID.randomUUID().toString();

   public String nom;
   private String description;

   public Category() {
   }

   @Id
   @Column(name = "id", unique = true, nullable = false, length = 254)
   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   @Column(name = "nom", length = 254)
   public String getNom() {
      return nom;
   }

   public void setNom(String nom) {
      this.nom = nom;
   }

   @Column(name = "description", length = 254)
   public String getDescription() {
      return description;
   }

   public void setDescription(String description) {
      this.description = description;
   }
}