package org.sid.dao;

import org.sid.entities.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category, String> {
	
	@Query("select c from Category c where c.nom like :x")
	public Page<Category> chercherparCategorie(@Param("x") String mc,Pageable pageable) ;

}
