package org.sid.dao;

import java.util.List;

import org.sid.entities.Animal;
import org.sid.entities.Typeanimal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TypeAnimalRepository extends JpaRepository<Typeanimal, Integer> {
	
	@Query("select a from Animal a where a.typeanimal.libelle like :x")
	public List<Animal> chercherparTypeAnimal(@Param("x") String mc) ;

}
