package org.sid.metier;

import org.sid.entities.Commande;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;


public interface CommandeService {
	
	List<Commande> getCommandes() ;
	Optional<Commande> getCommande(String id) ;
	
	 Commande saveCommande(Commande commande) throws ParseException ;
	 
	 boolean deleteCommande( String id)  ;
	 Commande updateCommande( Commande commande,String ref)  ;

}
