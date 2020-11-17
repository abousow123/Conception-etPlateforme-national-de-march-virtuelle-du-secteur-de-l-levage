/***********************************************************************
 * Module:  Client.java
 * Author:  abou
 * Purpose: Defines the Class Client
 ***********************************************************************/

package org.sid.entities;



import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;


@Entity
@Table(name = "client")
public class Client implements Serializable {

   private String id = UUID.randomUUID().toString();

   public String nom;
   private String prenom;
   private String adresse;
   private String telephone;
   private String email;

   private Set<Commande> commendes = new HashSet(0);


   public Client() {
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

   @Column(name = "prenom", length = 254)
   public String getPrenom() {
      return prenom;
   }

   public void setPrenom(String prenom) {
      this.prenom = prenom;
   }

   @Column(name = "adresse", length = 254)
   public String getAdresse() {
      return adresse;
   }

   public void setAdresse(String adresse) {
      this.adresse = adresse;
   }

   @Column(name = "telephone", length = 254)
   public String getTelephone() {
      return telephone;
   }

   public void setTelephone(String telephone) {
      this.telephone = telephone;
   }

   @Column(name = "email", length = 254)
   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   @OneToMany(fetch = FetchType.EAGER)
   public Set<Commande> getCommendes() {
      return commendes;
   }

   public void setCommendes(Set<Commande> commendes) {
      this.commendes = commendes;
   }
}