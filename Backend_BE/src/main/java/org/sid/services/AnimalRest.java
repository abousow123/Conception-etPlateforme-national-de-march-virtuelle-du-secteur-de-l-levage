package org.sid.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.sid.dao.AnimalRepository;
import org.sid.entities.Animal;
import org.sid.metier.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
public class AnimalRest {

	@Autowired
	ServletContext context;

	@Autowired
	private AnimalRepository animalRepository;

	@Autowired
	private AnimalService animalService;

	// @RequestMapping(value = "/Animals", method = RequestMethod.GET)
	public List<Animal> getAnimals1() {
		return animalRepository.findAll();
	}

	@RequestMapping(value = "/Animals/{ref}", method = RequestMethod.GET)
	public Optional<Animal> getAnimal(@PathVariable("ref") String ref) {
		return animalService.getAnimal(ref);
	}

	@RequestMapping(value = "/Animals", method = RequestMethod.GET)
	List<Animal> getAnimals() {
		return animalService.getAnimals();
	}

	@RequestMapping(value = "/ChercherAnimalsByUser", method = RequestMethod.GET)
	List<Animal> chercherAnimalsByEleveur(@RequestParam(name = "mc", defaultValue = "") String mc) {

		return animalService.chercherAnimalsByEleveur(mc);
	}

	@RequestMapping(value = "/ChercherAnimalsByName", method = RequestMethod.GET)
	List<Animal> chercherAnimalsByName(@RequestParam(name = "mc", defaultValue = "") String mc) {

		return animalService.chercherAnimalsByName(mc);
	}

	@RequestMapping(value = "/Animals", method = RequestMethod.POST)
	public ResponseEntity<String> postPersonne(@RequestParam("file1") MultipartFile file,
			@RequestParam("animal") String animal) throws JsonParseException, JsonMappingException, IOException {

		return animalService.postPersonne(file, animal);

	}

	@RequestMapping(value = "/Animals/{ref}", method = RequestMethod.DELETE)
	public boolean deleteAnimal(@PathVariable("ref") String ref) {
		return animalService.deleteAnimal(ref);
	}

	@RequestMapping(value = "/Animals/{ref}", method = RequestMethod.PUT)
	public Animal updateAnimal(@RequestBody Animal animal,@PathVariable("ref") String ref ) {
		return animalService.updateAnimal(animal,ref);
	}

}
