package org.sid.entities;
// Generated 26 mars 2019 14:00:12 by Hibernate Tools 3.6.0.Final

import java.util.Date;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Lignecommandeeleveur generated by hbm2java
 */
@Entity
@Table(name = "lignecommandeeleveur", schema = "public")
public class Lignecommandeeleveur implements java.io.Serializable {

	private int idligneeleveur;
	private Produit produit;
	private Commandeeleveur commandeeleveur;
	private Integer quantite;
	private Double prixtotal;

	public Lignecommandeeleveur() {
	}

	public Lignecommandeeleveur(int idligneeleveur, Produit produit, Commandeeleveur commandeeleveur) {
		this.idligneeleveur = idligneeleveur;
		this.produit = produit;
		this.commandeeleveur = commandeeleveur;
		
	}

	public Lignecommandeeleveur(int idligneeleveur, Produit produit, Commandeeleveur commandeeleveur,
			 Integer quantite, Double prixtotal) {
		this.idligneeleveur = idligneeleveur;
		this.produit = produit;
		this.commandeeleveur = commandeeleveur;
		
		this.quantite = quantite;
		this.prixtotal = prixtotal;
	}

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idligneeleveur", unique = true, nullable = false)
	public int getIdligneeleveur() {
		return idligneeleveur;
	}

	public void setIdligneeleveur(int idligneeleveur) {
		this.idligneeleveur = idligneeleveur;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "referenceproduit", nullable = false)
	@JsonIgnoreProperties("lignecommandeeleveurs")
	public Produit getProduit() {
		return this.produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "numcommande", nullable = false)
	public Commandeeleveur getCommandeeleveur() {
		return this.commandeeleveur;
	}

	public void setCommandeeleveur(Commandeeleveur commandeeleveur) {
		this.commandeeleveur = commandeeleveur;
	}

	

	@Column(name = "quantite")
	public Integer getQuantite() {
		return this.quantite;
	}

	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}

	@Column(name = "prixtotal", precision = 17, scale = 17)
	public Double getPrixtotal() {
		return this.prixtotal;
	}

	public void setPrixtotal(Double prixtotal) {
		this.prixtotal = prixtotal;
	}

}
