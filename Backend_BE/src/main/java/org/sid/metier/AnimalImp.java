package org.sid.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.sid.dao.AnimalRepository;
import org.sid.entities.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class AnimalImp implements AnimalService {

	@Autowired
	ServletContext context;

	@Autowired
	private AnimalRepository animalRepository;

	@Autowired
	private UtilsService utilsService;

	@Override
	public Optional<Animal> getAnimal(String ref) {
		Optional<Animal> animal = animalRepository.findById(ref);
		animal.get().setPhoto(utilsService.getPhoto(animal.get().getPhoto()));
		
		String oldstring = animal.get().getDatepublication().toString();
		Date date = null ;
		try {
			 date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(oldstring);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		animal.get().setDatepublication(date);


		return animal;
	}

	@Override
	public List<Animal> chercherAnimalsByUser(String mc) {

		List<Animal> animals = animalRepository.chercherAnimalsByUser(mc);
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			animal.setPhoto(utilsService.getPhoto(animal.getPhoto()));
			realAnimal.add(animal);
		}
		return realAnimal;
	}

	@Override
	public List<Animal> chercherAnimalsByName(String mc) {
		List<Animal> animals = animalRepository.chercherAnimalsByName(mc);
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			animal.setPhoto(utilsService.getPhoto(animal.getPhoto()));
			realAnimal.add(animal);
		}
		return realAnimal;
	}


	@Override
	public ResponseEntity<String> postAnimal(MultipartFile file, String animal)
			throws JsonParseException, JsonMappingException, IOException {
		Animal animal1 = new ObjectMapper().readValue(animal, Animal.class);

		animal1.setPhoto(utilsService.modifyFileName(file));

		Animal dbAnimal = animalRepository.save(animal1);

		if (dbAnimal != null) {
			return new ResponseEntity<>("Animal is saved successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Animal is not saved", HttpStatus.BAD_REQUEST);
		}

	}

	@Override
	public boolean deleteAnimal(String ref) {
		animalRepository.deleteById(ref);
		return true;
	}

	@Override
	public Animal updateAnimal(Animal animal,String id) {
		// TODO Auto-generated method stub
		
		animal.setId(id);
		return animalRepository.saveAndFlush(animal);
	}

	@Override
	public List<Animal> getAnimals() {

		List<Animal> animals = animalRepository.findAll();
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			
			animal.setPhoto(utilsService.getPhoto(animal.getPhoto()));
			
			String oldstring = animal.getDatepublication().toString();
			Date date = null ;
			try {
				 date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(oldstring);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			animal.setDatepublication(date);
			
			realAnimal.add(animal);
		}
		return realAnimal;
	}

}
