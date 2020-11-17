package org.sid.metier;

import org.sid.entities.LigneCommandeProduit;

import java.util.List;
import java.util.Optional;


public interface LigneCommandeProduitService {
	
	List<LigneCommandeProduit> getLigneCommandeProduits() ;
	Optional<LigneCommandeProduit> getLigneCommandeProduit(String id) ;
	boolean deleteLigneCommandeProduit(String id) ;
	LigneCommandeProduit updateLigneCommandeProduit(LigneCommandeProduit ligneCommandeProduit) ;

}
