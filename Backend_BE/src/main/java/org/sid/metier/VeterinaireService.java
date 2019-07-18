package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Veterinaire;


public interface VeterinaireService {

	 List<Veterinaire> getVeterinaires() ;
	 Optional<Veterinaire> getVeterinaire(String ref) ;
	 Veterinaire saveVeterinaire( Veterinaire veterinaire) ;
	 boolean deleteVeterinaire(String ref) ;
	 Veterinaire updateVeterinaire(Veterinaire veterinaire) ;
}
