package org.sid.entities;
// Generated 5 mars 2019 12:53:42 by Hibernate Tools 3.6.0.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Produitveterinaire generated by hbm2java
 */
@Entity
@Table(name = "produitveterinaire", schema = "public")
public class Produitveterinaire implements java.io.Serializable {

	private String referenceproduit;
	private Produit produit;
	private Veterinaire veterinaire;
	private Categorieprodveterinaire categorieprodveterinaire;

	public Produitveterinaire() {
	}

	public Produitveterinaire(Produit produit, Veterinaire veterinaire,
			Categorieprodveterinaire categorieprodveterinaire) {
		this.produit = produit;
		this.veterinaire = veterinaire;
		this.categorieprodveterinaire = categorieprodveterinaire;
	
	}

	@GenericGenerator(name = "generator", strategy = "foreign", parameters = @Parameter(name = "property", value = "produit"))
	@Id
	@GeneratedValue(generator = "generator")

	@Column(name = "referenceproduit", unique = true, nullable = false, length = 254)
	public String getReferenceproduit() {
		return this.referenceproduit;
	}

	public void setReferenceproduit(String referenceproduit) {
		this.referenceproduit = referenceproduit;
	}

	@OneToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	public Produit getProduit() {
		return this.produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "numuser", nullable = false)
	@JsonIgnoreProperties("produitveterinaire")
	public Veterinaire getVeterinaire() {
		return this.veterinaire;
	}

	public void setVeterinaire(Veterinaire veterinaire) {
		this.veterinaire = veterinaire;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idcatprodveterinaire", nullable = false)
	@JsonIgnoreProperties("produitveterinaires")
	public Categorieprodveterinaire getCategorieprodveterinaire() {
		return this.categorieprodveterinaire;
	}

	public void setCategorieprodveterinaire(Categorieprodveterinaire categorieprodveterinaire) {
		this.categorieprodveterinaire = categorieprodveterinaire;
	}

	

}
