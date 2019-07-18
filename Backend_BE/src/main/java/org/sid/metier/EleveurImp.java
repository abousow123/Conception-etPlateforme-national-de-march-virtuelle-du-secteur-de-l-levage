package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.EleveurRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Eleveur;
import org.springframework.beans.factory.annotation.Autowired;

public class EleveurImp implements EleveurService {
	
	@Autowired
	private EleveurRepository eleveurRepository ;
	
	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	
	@Autowired
	private AccountService accountService;

	@Override
	public List<Eleveur> getEleveurs() {
		return eleveurRepository.findAll() ;
	}

	@Override
	public Optional<Eleveur> getOneEleveur(String ref) {
		return eleveurRepository.findById(ref) ;
	}

	@Override
	public Eleveur saveEleveur(Eleveur eleveur) {
		accountService.saveCompte(eleveur.getUtilisateur(), eleveur.getUtilisateur().getPassword()) ;
		return eleveurRepository.save(eleveur) ;
	}

	@Override
	public boolean deleteEleveur(String ref) {
		eleveurRepository.deleteById(ref);
		utilisateurRepository.deleteById(ref) ;
		return true ;
	}

	@Override
	public Eleveur updateEleveur(Eleveur eleveur) {
		utilisateurRepository.saveAndFlush(eleveur.getUtilisateur()) ;
		return eleveurRepository.saveAndFlush(eleveur) ;
	}

}
