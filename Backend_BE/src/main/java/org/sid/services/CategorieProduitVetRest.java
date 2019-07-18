package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.CategorieProVetRepository;
import org.sid.entities.Categorieprodelevage;
import org.sid.entities.Categorieprodveterinaire;
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
@CrossOrigin(origins = "*")
public class CategorieProduitVetRest {

	@Autowired
	private CategorieProVetRepository categorieProVetRepository;

	@RequestMapping(value = "/CategorieProduitVeterinaires", method = RequestMethod.GET)
	public List<Categorieprodveterinaire> getCatProdVets() {
		return categorieProVetRepository.findAll();
	}

	@RequestMapping(value = "/CategorieProduitVeterinaires/{ref}", method = RequestMethod.GET)
	public Optional<Categorieprodveterinaire> getCatProdVet(@PathVariable("ref") int ref) {
		return categorieProVetRepository.findById(ref);
	}
	
	
	@RequestMapping(value="/chercherProduitVeterinaires",method=RequestMethod.GET)
	public Page<Categorieprodveterinaire> chercher(@RequestParam(name="mc",defaultValue="") String mc,
			@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
		
		return categorieProVetRepository.chercherparCategorie("%"+mc+"%", new PageRequest(page, size)) ;
	}

	@RequestMapping(value = "/CategorieProduitVeterinaires", method = RequestMethod.POST)
	public Categorieprodveterinaire saveCatProdVet(@RequestBody Categorieprodveterinaire categorieprodveterinaire) {
		return categorieProVetRepository.save(categorieprodveterinaire);

	}

	@RequestMapping(value = "/CategorieProduitVeterinaires/{ref}", method = RequestMethod.DELETE)
	public boolean deleteCatProdVet(@PathVariable("ref") int ref) {
		categorieProVetRepository.deleteById(ref);
		return true;
	}

	@RequestMapping(value = "/CategorieProduitVeterinaires", method = RequestMethod.PUT)
	public Categorieprodveterinaire updateCatProdVet(@RequestBody Categorieprodveterinaire categorieprodveterinaire) {
		return categorieProVetRepository.saveAndFlush(categorieprodveterinaire);

	}

}
