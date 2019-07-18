package org.sid.services;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.servlet.ServletContext;

import org.apache.commons.io.FilenameUtils;
import org.sid.dao.TypeAnimalRepository;
import org.sid.entities.Animal;
import org.sid.entities.Typeanimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class TypeAnimalRest {

	@Autowired
	public TypeAnimalRepository typeAnimalRepository;
	
	@Autowired
	ServletContext context;

	@RequestMapping(value = "/TypeAnimals", method = RequestMethod.GET)
	public List<Typeanimal> getTypeAnimals() {
		return typeAnimalRepository.findAll();
	}

	@RequestMapping(value = "/TypeAnimals/{ref}", method = RequestMethod.GET)
	public Optional<Typeanimal> getTypeAnimal(@PathVariable("ref") int ref) {
		return typeAnimalRepository.findById(ref);
	}
	
	
	@RequestMapping(value="/chercherAnimals",method=RequestMethod.GET)
	public List<Animal> chercher(@RequestParam(name="mc",defaultValue="") String mc){
		
		List<Animal> animals =  typeAnimalRepository.chercherparTypeAnimal("%"+mc+"%")  ;
		
		List<Animal> realAnimal = new ArrayList<>();
		
		for (Animal animal : animals) {
			animal.setPhoto(this.getPhoto(animal.getPhoto()));
			realAnimal.add(animal);
		}
		return realAnimal;
	}

	@RequestMapping(value = "/TypeAnimals", method = RequestMethod.POST)
	public Typeanimal saveTypeAnimal(@RequestBody Typeanimal typeanimal) {
		return typeAnimalRepository.save(typeanimal);
	}

	@RequestMapping(value = "/TypeAnimals/{ref}", method = RequestMethod.DELETE)
	public boolean deleteTypeAnimal(@PathVariable("ref") int ref) {
		typeAnimalRepository.deleteById(ref);
		return true;
	}

	@RequestMapping(value = "/TypeAnimals", method = RequestMethod.PUT)
	public Typeanimal updateTypeAnimal(@RequestBody Typeanimal typeanimal) {
		return typeAnimalRepository.saveAndFlush(typeanimal);
	}
	
	
	
	String getPhoto(String fileName) {
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
							System.out.println("nom photo = " + file.getName());
							FileInputStream fileInputStream = new FileInputStream(file);
							byte[] bytes = new byte[(int) file.length()];
							fileInputStream.read(bytes);
							encodeBase64 = Base64.getEncoder().encodeToString(bytes);
							image = "data:image/"+extension+";base64," + encodeBase64;
							fileInputStream.close();
						}
					} catch (Exception e) {
						// TODO: handle exception
					}
				}
			}
		}
		System.out.println(image);
		return image;
	}


}
