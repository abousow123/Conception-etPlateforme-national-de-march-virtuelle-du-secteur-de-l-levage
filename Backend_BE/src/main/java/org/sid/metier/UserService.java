package org.sid.metier;

import org.sid.entities.Utilisateur;

import java.util.List;
import java.util.Optional;


public interface UserService {
	
	List<Utilisateur> getUsers() ;
	Optional<Utilisateur> getUser(String ref) ;
	Utilisateur saveUser(Utilisateur utilisateur) ;
	boolean deleteUser(String ref) ;
	Utilisateur updateUser(Utilisateur utilisateur,String ref) ;
	

}
