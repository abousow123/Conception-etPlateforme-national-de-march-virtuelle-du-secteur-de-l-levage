package org.sid.Account;

import org.sid.dao.RoleRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Role;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AccountServiceImpl implements AccountService {

	@Autowired
	private UtilisateurRepository compteRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public AccountServiceImpl(UtilisateurRepository compteRepository, RoleRepository roleRepository,
			BCryptPasswordEncoder bCryptPasswordEncoder) {

		this.compteRepository = compteRepository;
		this.roleRepository = roleRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@Override
	public Utilisateur saveCompte(Utilisateur user, String passwordConfirmed) {
		// TODO Auto-generated method stub
		Utilisateur c = compteRepository.findByEmail(user.getEmail());
		if (c != null)
			throw new RuntimeException("Il existe un compte avec ce login");
		if (!user.getPassword().equals(passwordConfirmed))
			throw new RuntimeException("Svp confirmĂ© votre mot de passe");
		Utilisateur compte = user;
		compte.setNumuser(user.getNumuser());
	
		compte.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		// compte.setActived(true);
		compteRepository.save(compte);
		//addRoleToCompte(user.getEmail(), user.getRole().getLibelle());

		return compte;
	}

	@Override
	public Role saveRole(Role role) {
		// TODO Auto-generated method stub
		roleRepository.save(role);

		return role;
	}

	@Override
	public Utilisateur loadCompteBylogin(String login) {
		// TODO Auto-generated method stub
		return compteRepository.findByEmail(login);
	}

	@Override
	public void addRoleToCompte(String login, String nomrole) {
		// TODO Auto-generated method stub
		Utilisateur compte = compteRepository.findByEmail(login);
		Role role= roleRepository.findByLibelle(nomrole);
		compte.setRole(role);

	}

}
