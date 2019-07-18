package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Distributeur;


public interface DistributeurService {

	List<Distributeur> getDistributions() ;
	 Optional<Distributeur> getDistribution(String ref) ;
	 Distributeur saveDistribution(Distributeur distributeur) ;
	 boolean deleteDistribution(String ref) ;
	 boolean updateDistribution(Distributeur distributeur) ;
}
