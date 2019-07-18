package org.sid.dao;

import org.sid.entities.Categorieprodveterinaire;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategorieProVetRepository extends JpaRepository<Categorieprodveterinaire, Integer> {
	
	@Query("select c from Categorieprodveterinaire c where c.nom like :x")
	public Page<Categorieprodveterinaire> chercherparCategorie(@Param("x") String mc,Pageable pageable) ;

}
