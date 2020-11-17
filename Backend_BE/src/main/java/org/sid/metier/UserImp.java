package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;

public class UserImp implements UserService {
	

	
	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	
	@Autowired
	private AccountService accountService;

	@Override
	public List<Utilisateur> getUsers() {
		return utilisateurRepository.findAll() ;
	}

	@Override
	public Optional<Utilisateur> getUser(String ref) {
		return utilisateurRepository.findById(ref) ;
	}

	@Override
	public Utilisateur saveUser(Utilisateur utilisateur) {
		accountService.saveCompte(utilisateur, utilisateur.getPassword()) ;
		return utilisateurRepository.save(utilisateur) ;
	}

	@Override
	public boolean deleteUser(String ref) {
		utilisateurRepository.deleteById(ref);
		return true ;
	}

	@Override
	public Utilisateur updateUser(Utilisateur utilisateur,String ref) {
		Utilisateur u = utilisateurRepository.getOne(ref);
		u.setNom(utilisateur.getNom());
		u.setPrenom(utilisateur.getPrenom());
		u.setAdresse(utilisateur.getAdresse());
		u.setEmail(utilisateur.getEmail());

		return utilisateurRepository.saveAndFlush(u) ;
	}

}
