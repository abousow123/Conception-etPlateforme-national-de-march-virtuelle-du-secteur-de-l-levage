package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.UtilisateurRepository;
import org.sid.dao.VeterinaireRepository;
import org.sid.entities.Veterinaire;
import org.springframework.beans.factory.annotation.Autowired;

public class VeterinaireImpl implements VeterinaireService {
	
	@Autowired
	private VeterinaireRepository veterinaireRepository;

	@Autowired
	private AccountService accountService;

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@Override
	public List<Veterinaire> getVeterinaires() {
		return veterinaireRepository.findAll();
	}

	@Override
	public Optional<Veterinaire> getVeterinaire(String ref) {
		return veterinaireRepository.findById(ref);
	}

	@Override
	public Veterinaire saveVeterinaire(Veterinaire veterinaire) {
		accountService.saveCompte(veterinaire.getUtilisateur(), veterinaire.getUtilisateur().getPassword());
		accountService.addRoleToCompte(veterinaire.getUtilisateur().getEmail(), veterinaire.getUtilisateur().getRole().getLibelle());

		return veterinaireRepository.save(veterinaire);
	}

	@Override
	public boolean deleteVeterinaire(String ref) {
		veterinaireRepository.deleteById(ref);
		utilisateurRepository.deleteById(ref);
		return true;
	}

	@Override
	public Veterinaire updateVeterinaire(Veterinaire veterinaire) {
		utilisateurRepository.saveAndFlush(veterinaire.getUtilisateur());
		return veterinaireRepository.saveAndFlush(veterinaire);
	}

}
