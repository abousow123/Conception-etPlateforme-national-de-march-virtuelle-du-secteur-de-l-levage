package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.CategorieElevageRepository;
import org.sid.entities.Categorieprodelevage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategorieProdElevage {

	@Autowired
	public CategorieElevageRepository categorieElevageRepository;

	@RequestMapping(value = "/CategorieProduitElevages", method = RequestMethod.GET)
	public List<Categorieprodelevage> getCategorieProdElevages() {
		return categorieElevageRepository.findAll();
	}

	@RequestMapping(value = "/CategorieProduitElevages/{ref}", method = RequestMethod.GET)
	public Optional<Categorieprodelevage> getCategorieProdElevage(@PathVariable("ref") int ref) {
		return categorieElevageRepository.findById(ref);
	}
	
	@RequestMapping(value="/chercherProduitElevages",method=RequestMethod.GET)
	public Page<Categorieprodelevage> chercher(@RequestParam(name="mc",defaultValue="") String mc,
			@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
		
		return categorieElevageRepository.chercherparCategorie("%"+mc+"%", new PageRequest(page, size)) ;
	}

	@RequestMapping(value = "/CategorieProduitElevages", method = RequestMethod.POST)
	public Categorieprodelevage saveCategorieProdElevage(@RequestBody Categorieprodelevage categorieprodelevage) {
		return categorieElevageRepository.save(categorieprodelevage);
	}

	@RequestMapping(value = "/CategorieProduitElevages/{ref}", method = RequestMethod.DELETE)
	public boolean deleteCategorieProdElevage(@PathVariable("ref") int ref) {
		categorieElevageRepository.deleteById(ref);
		return true;
	}

	@RequestMapping(value = "/CategorieProduitElevages", method = RequestMethod.PUT)
	public Categorieprodelevage updateCategorieProdElevage(@RequestBody Categorieprodelevage categorieprodelevage) {
		return categorieElevageRepository.saveAndFlush(categorieprodelevage);
	}

}
