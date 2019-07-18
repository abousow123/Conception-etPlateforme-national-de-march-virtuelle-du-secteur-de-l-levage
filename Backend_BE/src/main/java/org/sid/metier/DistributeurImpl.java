package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.DistributeurRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Distributeur;
import org.springframework.beans.factory.annotation.Autowired;

public class DistributeurImpl implements DistributeurService {
	
	@Autowired
	private DistributeurRepository distributeurRepository ;
	
	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	
	@Autowired
	private AccountService accountService;

	@Override
	public List<Distributeur> getDistributions() {
		return distributeurRepository.findAll() ;
	}

	@Override
	public Optional<Distributeur> getDistribution(String ref) {
		return distributeurRepository.findById(ref) ;
	}

	@Override
	public Distributeur saveDistribution(Distributeur distributeur) {
		accountService.saveCompte(distributeur.getUtilisateur(), distributeur.getUtilisateur().getPassword()) ;
		return distributeurRepository.save(distributeur) ;
	}

	@Override
	public boolean deleteDistribution(String ref) {
		distributeurRepository.deleteById(ref);
		utilisateurRepository.deleteById(ref) ;
		return true;
	}

	@Override
	public boolean updateDistribution(Distributeur distributeur) {
		distributeurRepository.saveAndFlush(distributeur);
		 return true;
	}

}
