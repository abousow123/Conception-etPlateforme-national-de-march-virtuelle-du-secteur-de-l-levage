package org.sid.entities;
// Generated 5 mars 2019 13:26:04 by Hibernate Tools 3.6.0.Final

import java.util.Date;
import javax.persistence.Column;
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
 * Annoncegouvernemental generated by hbm2java
 */
@Entity
@Table(name = "annoncegouvernemental", schema = "public")
public class Annoncegouvernemental implements java.io.Serializable {

	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	
	private int idannonce;
	private Eleveur eleveur;
	private Gie gie;
	private Agentdirectionelevage agentdirectionelevage;
	private Distributeur distributeur;
	private Veterinaire veterinaire;
	private String typeannonce;
	private String descriptionannonce;
	private Date dateannonce;

	public Annoncegouvernemental(){
	}

	public Annoncegouvernemental(int idannonce, Agentdirectionelevage agentdirectionelevage) {
		this.idannonce = idannonce;
		this.agentdirectionelevage = agentdirectionelevage;
	}

	public Annoncegouvernemental(int idannonce, Eleveur eleveur, Gie gie, Agentdirectionelevage agentdirectionelevage,
			Distributeur distributeur, Veterinaire veterinaire, String typeannonce, String descriptionannonce,
			Date dateannonce) {
		this.idannonce = idannonce;
		this.eleveur = eleveur;
		this.gie = gie;
		this.agentdirectionelevage = agentdirectionelevage;
		this.distributeur = distributeur;
		this.veterinaire = veterinaire;
		this.typeannonce = typeannonce;
		this.descriptionannonce = descriptionannonce;
		this.dateannonce = dateannonce;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idannonce", unique = true, nullable = false)
	public int getIdannonce() {
		return this.idannonce;
	}

	public void setIdannonce(int idannonce) {
		this.idannonce = idannonce;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ele_numuser")
	@JsonIgnoreProperties("Annoncegouvernemental")
	public Eleveur getEleveur() {
		return this.eleveur;
	}

	public void setEleveur(Eleveur eleveur) {
		this.eleveur = eleveur;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idgie")
	@JsonIgnoreProperties("Annoncegouvernemental")
	public Gie getGie() {
		return this.gie;
	}

	public void setGie(Gie gie) {
		this.gie = gie;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "numuser", nullable = false)
	@JsonIgnoreProperties("Annoncegouvernemental")
	public Agentdirectionelevage getAgentdirectionelevage() {
		return this.agentdirectionelevage;
	}

	public void setAgentdirectionelevage(Agentdirectionelevage agentdirectionelevage) {
		this.agentdirectionelevage = agentdirectionelevage;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "dis_numuser")
	@JsonIgnoreProperties("Annoncegouvernemental")
	public Distributeur getDistributeur() {
		return this.distributeur;
	}

	public void setDistributeur(Distributeur distributeur) {
		this.distributeur = distributeur;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "vet_numuser")
	@JsonIgnoreProperties("Annoncegouvernemental")
	public Veterinaire getVeterinaire() {
		return this.veterinaire;
	}

	public void setVeterinaire(Veterinaire veterinaire) {
		this.veterinaire = veterinaire;
	}

	@Column(name = "typeannonce", length = 254)
	public String getTypeannonce() {
		return this.typeannonce;
	}

	public void setTypeannonce(String typeannonce) {
		this.typeannonce = typeannonce;
	}

	@Column(name = "descriptionannonce", length = 254)
	public String getDescriptionannonce() {
		return this.descriptionannonce;
	}

	public void setDescriptionannonce(String descriptionannonce) {
		this.descriptionannonce = descriptionannonce;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dateannonce", length = 29)
	public Date getDateannonce() {
		return this.dateannonce;
	}

	public void setDateannonce(Date dateannonce) {
		this.dateannonce = dateannonce;
	}

}
