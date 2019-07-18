package org.sid.entities;
// Generated 5 mars 2019 12:53:42 by Hibernate Tools 3.6.0.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Eleveur generated by hbm2java
 */
@Entity
@Table(name = "eleveur", schema = "public")
public class Eleveur implements java.io.Serializable {

	private String numuser;
	private Utilisateur utilisateur;
	private Set<Membre> membres = new HashSet(0);
	private Set<Commandeeleveur> commandeeleveurs = new HashSet(0);
	private Set<Animal> animals = new HashSet(0);
	private Set<Annoncegouvernemental> annoncegouvernementals = new HashSet(0);

	public Eleveur() {
	}

	public Eleveur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Eleveur(Utilisateur utilisateur, Set<Membre> membres, Set<Animal> animals,
			Set<Commandeeleveur> commandeeleveurs) {
		this.utilisateur = utilisateur;
		
		this.membres = membres;
		this.commandeeleveurs = commandeeleveurs;
		this.animals = animals;
	}

	@GenericGenerator(name = "generator", strategy = "foreign", parameters = @Parameter(name = "property", value = "utilisateur"))
	@Id
	@GeneratedValue(generator = "generator")

	@Column(name = "numuser", unique = true, nullable = false, length = 254)
	public String getNumuser() {
		return this.numuser;
	}

	public void setNumuser(String numuser) {
		this.numuser = numuser;
	}

	@OneToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	public Utilisateur getUtilisateur() {
		return this.utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "eleveur")
	@JsonIgnoreProperties("eleveur")
	public Set<Membre> getMembres() {
		return this.membres;
	}

	public void setMembres(Set<Membre> membres) {
		this.membres = membres;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "eleveur")
	@JsonIgnoreProperties("eleveur")
	public Set<Commandeeleveur> getCommandeeleveurs() {
		return this.commandeeleveurs;
	}

	public void setCommandeeleveurs(Set<Commandeeleveur> commandeeleveurs) {
		this.commandeeleveurs = commandeeleveurs;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "eleveur")
	@JsonIgnoreProperties("eleveur")
	public Set<Animal> getAnimals() {
		return this.animals;
	}

	public void setAnimals(Set<Animal> animals) {
		this.animals = animals;
	}
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "eleveur")
	@JsonIgnoreProperties("eleveur")
	public Set<Annoncegouvernemental> getAnnoncegouvernementals() {
		return this.annoncegouvernementals;
	}

	public void setAnnoncegouvernementals(Set<Annoncegouvernemental> annoncegouvernementals) {
		this.annoncegouvernementals = annoncegouvernementals;
	}

}
