package org.sid.dao;

import org.sid.entities.Categorieprodelevage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategorieElevageRepository extends JpaRepository<Categorieprodelevage, Integer> {
	
	@Query("select c from Categorieprodelevage c where c.nom like :x")
	public Page<Categorieprodelevage> chercherparCategorie(@Param("x") String mc,Pageable pageable) ;

}
