package org.sid.metier;

import org.sid.entities.LigneCommandeAnimal;
import org.sid.entities.LigneCommandeProduit;

import java.util.List;
import java.util.Optional;


public interface LigneCommandeAnimalService {
	
	List<LigneCommandeAnimal> getLigneCommandeAnimals() ;
	Optional<LigneCommandeAnimal> getLigneCommandeAnimal(String id) ;
	boolean deleteLigneCommandeAnimalt(String id) ;
	LigneCommandeAnimal updateLigneCommandeAnimal(LigneCommandeAnimal ligneCommandeAnimal) ;


}
