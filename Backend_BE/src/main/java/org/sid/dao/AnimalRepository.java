package org.sid.dao;

import java.util.List;

import org.sid.entities.Animal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnimalRepository extends JpaRepository<Animal, String> {
	
	@Query("select c from Animal c where c.eleveur.numuser like :x")
	public List<Animal> chercherAnimalsByEleveur(@Param("x") String mc) ;
	
	@Query("select c from Animal c where  c.typeanimal.libelle like :x")
	public List<Animal> chercherAnimalsByName(@Param("x") String mc) ;


}
