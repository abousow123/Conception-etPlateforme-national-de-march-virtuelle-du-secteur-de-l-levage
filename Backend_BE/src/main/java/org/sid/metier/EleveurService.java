package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Eleveur;


public interface EleveurService {
	
	List<Eleveur> getEleveurs() ;
	Optional<Eleveur> getOneEleveur(String ref) ;
	Eleveur saveEleveur(Eleveur eleveur) ;
	boolean deleteEleveur(String ref) ;
	Eleveur updateEleveur(Eleveur eleveur) ;
	

}
