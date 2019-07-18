package org.sid.Account;

import org.sid.entities.Role;
import org.sid.entities.Utilisateur;

public interface AccountService {
	
	public Utilisateur saveCompte(Utilisateur user, String passwordConfirmed) ;
	
    public Role saveRole(Role role) ;
	
	public Utilisateur loadCompteBylogin(String login);
	
	public void addRoleToCompte(String login,String nomrole) ;

}
