package org.sid.dao;

import org.sid.entities.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {
	
	@Query("select a from Utilisateur a where a.profil like :x")
	public Page<Utilisateur> chercherparProfil(@Param("x") String mc,Pageable pageable) ;
	
	@Query("select a from Utilisateur a where a.email like :x")
	public Utilisateur findByEmail(@Param("x") String email) ;

}
