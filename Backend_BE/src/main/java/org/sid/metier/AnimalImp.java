package org.sid.metier;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.sid.dao.AnimalRepository;
import org.sid.entities.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AnimalImp implements AnimalService {

	@Autowired
	ServletContext context;

	@Autowired
	private AnimalRepository animalRepository;

	@Override
	public Optional<Animal> getAnimal(String ref) {
		Optional<Animal> animal = animalRepository.findById(ref);
		animal.get().setPhoto(this.getPhoto(animal.get().getPhoto()));
		
		String oldstring = animal.get().getDatepublication().toString();
		System.out.println("******************** "+ oldstring);
		Date date = null ;
		try {
			 date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(oldstring);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		animal.get().setDatepublication(date);
		
		System.out.println("******************** "+ animal.get().getDatepublication());
		

		return animal;
	}

	@Override
	public List<Animal> chercherAnimalsByEleveur(String mc) {

		List<Animal> animals = animalRepository.chercherAnimalsByEleveur(mc);
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			animal.setPhoto(this.getPhoto(animal.getPhoto()));
			realAnimal.add(animal);
		}
		return realAnimal;
	}

	@Override
	public List<Animal> chercherAnimalsByName(String mc) {
		List<Animal> animals = animalRepository.chercherAnimalsByName(mc);
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			animal.setPhoto(this.getPhoto(animal.getPhoto()));
			realAnimal.add(animal);
		}
		return realAnimal;
	}

	@Override
	public String getPhoto(String fileName) {
		String image = null;
		String filesPath = context.getRealPath("/images");
		File fileFolder = new File(filesPath);
		if (fileFolder != null) {
			for (final File file : fileFolder.listFiles()) {
				if (!file.isDirectory()) {
					String encodeBase64 = null;
					try {
						if (fileName.equals(file.getName())) {
							String extension = FilenameUtils.getExtension(file.getName());
							// String nom =
							// FilenameUtils.getBaseName(file.getName()) ;
							// System.out.println("nom photo = " + file.getName());
							FileInputStream fileInputStream = new FileInputStream(file);
							byte[] bytes = new byte[(int) file.length()];
							fileInputStream.read(bytes);
							encodeBase64 = Base64.getEncoder().encodeToString(bytes);
							image = "data:image/" + extension + ";base64," + encodeBase64;
							fileInputStream.close();
						}
					} catch (Exception e) {
						// TODO: handle exception
					}
				}
			}
		}
		// System.out.println(image);
		return image;
	}

	@Override
	public ResponseEntity<String> postPersonne(MultipartFile file, String animal)
			throws JsonParseException, JsonMappingException, IOException {
		Animal animal1 = new ObjectMapper().readValue(animal, Animal.class);
		boolean isExist = new File(context.getRealPath("/images/")).exists();
		if (!isExist) {
			new File(context.getRealPath("/images/")).mkdir();
		}
		String fileName = file.getOriginalFilename();
		String modifyFileName = FilenameUtils.getBaseName(fileName) + "_" + System.currentTimeMillis() + "."
				+ FilenameUtils.getExtension(fileName);
		File serverFile = new File(context.getRealPath("/images/" + File.separator + modifyFileName));
		try {
			FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
		} catch (Exception e) {
			// TODO: handle exception
		}
		animal1.setPhoto(modifyFileName);
		// personne2.setPhoto(file.getBytes());

		Animal dbAnimal = animalRepository.save(animal1);

		if (dbAnimal != null) {
			return new ResponseEntity<>("personne is saved successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("personne is not saved", HttpStatus.BAD_REQUEST);
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
		
		animal.setIdanimal(id);
		return animalRepository.saveAndFlush(animal);
	}

	@Override
	public List<Animal> getAnimals() {

		List<Animal> animals = animalRepository.findAll();
		List<Animal> realAnimal = new ArrayList<>();
		for (Animal animal : animals) {
			
			animal.setPhoto(this.getPhoto(animal.getPhoto()));
			
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
