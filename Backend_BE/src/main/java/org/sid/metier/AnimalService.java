package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Animal;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;


public interface AnimalService {

	Optional<Animal> getAnimal(String ref) ;
	List<Animal> getAnimals() ;
	List<Animal> chercherAnimalsByUser( String mc) ;
	List<Animal> chercherAnimalsByName(String mc) ;
	
	ResponseEntity<String> postAnimal( MultipartFile file, String animal) throws JsonParseException, JsonMappingException, IOException ;
	boolean deleteAnimal(String ref) ;
	Animal updateAnimal(Animal animal,String id) ;
}
