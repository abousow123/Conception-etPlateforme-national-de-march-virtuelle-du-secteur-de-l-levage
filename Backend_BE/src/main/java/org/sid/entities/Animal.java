package org.sid.entities;
// Generated 5 mars 2019 12:53:42 by Hibernate Tools 3.6.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Animal generated by hbm2java
 */
@Entity
@Table(name = "animal", schema = "public")
public class Animal implements java.io.Serializable {

	private String idanimal;
	private Typeanimal typeanimal;
	private Eleveur eleveur;
	private String nom ;
	private String sexe;
    private String photo;
	private String video;
	private String description;
	private Double poids;
	private Double taille;
	private Integer age;
	private String codegenetique;
	private Double prix;
	private Date datepublication;
	private boolean validerPublication ;
	
	private Set<Lignecommandeclient> lignecommandeclients = new HashSet(0);


	public Animal() {
	}

	public Animal(String idanimal, Typeanimal typeanimal, Eleveur eleveur) {
		this.idanimal = idanimal;
		this.typeanimal = typeanimal;
		this.eleveur = eleveur;
	}

	public Animal(String idanimal, Typeanimal typeanimal, Eleveur eleveur, String sexe, String photo, String video,
			String description, Double poids, Double taille, Integer age, String codegenetique, Double prix, Date datepublication) {
		this.idanimal = idanimal;
		this.typeanimal = typeanimal;
		this.eleveur = eleveur;
		this.sexe = sexe;
		this.photo = photo;
		this.video = video;
		this.description = description;
		this.poids = poids;
		this.taille = taille;
		this.age = age;
		this.codegenetique = codegenetique;
		this.prix = prix;
		this.datepublication = datepublication ;
	}

	@Id

	@Column(name = "idanimal", unique = true, nullable = false, length = 254)
	public String getIdanimal() {
		return this.idanimal;
	}

	public void setIdanimal(String idanimal) {
		this.idanimal = idanimal;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idtypeanimal", nullable = false)
	@JsonIgnoreProperties({"animals","typeanimal"})
	public Typeanimal getTypeanimal() {
		return this.typeanimal;
	}

	public void setTypeanimal(Typeanimal typeanimal) {
		this.typeanimal = typeanimal;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "numuser", nullable = false)
	@JsonIgnoreProperties("animals")
	public Eleveur getEleveur() {
		return this.eleveur;
	}

	public void setEleveur(Eleveur eleveur) {
		this.eleveur = eleveur;
	}

	@Column(name = "sexe", length = 254)
	public String getSexe() {
		return this.sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	@Column(name = "photo") 
	public String getPhoto() {
		return this.photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	@Column(name = "video", length = 254)
	public String getVideo() {
		return this.video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	@Column(name = "description", length = 254)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "poids", precision = 17, scale = 17)
	public Double getPoids() {
		return this.poids;
	}

	public void setPoids(Double poids) {
		this.poids = poids;
	}

	@Column(name = "taille", precision = 17, scale = 17)
	public Double getTaille() {
		return this.taille;
	}

	public void setTaille(Double taille) {
		this.taille = taille;
	}

	@Column(name = "age")
	public Integer getAge() {
		return this.age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Column(name = "codegenetique", length = 254)
	public String getCodegenetique() {
		return this.codegenetique;
	}

	public void setCodegenetique(String codegenetique) {
		this.codegenetique = codegenetique;
	}

	@Column(name = "prix", precision = 17, scale = 17)
	public Double getPrix() {
		return this.prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}


	@Column(name = "nom", length = 254)
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}
	
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "animal")
	@JsonIgnoreProperties("animal")
	public Set<Lignecommandeclient> getLignecommandeclients() {
		return this.lignecommandeclients;
	}

	public void setLignecommandeclients(Set<Lignecommandeclient> lignecommandeclients) {
		this.lignecommandeclients = lignecommandeclients;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "datepublication", length = 29)
	public Date getDatepublication() {
		return datepublication;
	}

	public void setDatepublication(Date datepublication) {
		this.datepublication = datepublication;
	}

	@Column(name = "validerPublication")
	public boolean getValiderPublication() {
		return validerPublication;
	}

	public void setValiderPublication(boolean validerPublication) {
		this.validerPublication = validerPublication;
	}

	
	

}
