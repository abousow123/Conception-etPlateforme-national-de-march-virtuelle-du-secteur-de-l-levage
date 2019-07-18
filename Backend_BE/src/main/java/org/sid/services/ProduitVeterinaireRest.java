package org.sid.services;


import java.io.IOException;
import java.util.List;
import java.util.Optional;


import org.sid.entities.Produitveterinaire;
import org.sid.metier.ProduitVeterinaireService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "*")
public class ProduitVeterinaireRest {

	@Autowired
	private ProduitVeterinaireService produitVegerinaireService;

	@RequestMapping(value = "/ProduitVeterinaires", method = RequestMethod.GET)
	public List<Produitveterinaire> getProdVeterinaires() {

		return produitVegerinaireService.getProdVeterinaires();
	}

	@RequestMapping(value = "/ProduitVeterinaires/{ref}", method = RequestMethod.GET)
	public Optional<Produitveterinaire> getProdVeterinaire(@PathVariable("ref") String ref) {

		return produitVegerinaireService.getProdVeterinaire(ref);
	}

	// @RequestMapping(value = "/ProduitVeterinaires", method =
	// RequestMethod.POST)
	/*
	 * public Produitveterinaire saveProduitVeterinaire(@RequestBody
	 * Produitveterinaire produitveterinaire) {
	 * produitRepository.save(produitveterinaire.getProduit()); return
	 * produitVegerinaireRepository.save(produitveterinaire); }
	 */

	@RequestMapping(value = "/ProduitVeterinaires/{ref}", method = RequestMethod.DELETE)
	public boolean deleteProduitVeterinaire(@PathVariable("ref") String ref) {

		return produitVegerinaireService.deleteProduitVeterinaire(ref);
	}

	@RequestMapping(value = "/ProduitVeterinaires", method = RequestMethod.PUT)
	public boolean updateProduitVeterinaire(@RequestBody Produitveterinaire produitveterinaire) {

		return produitVegerinaireService.updateProduitVeterinaire(produitveterinaire);

	}

	@RequestMapping(value = "/ProduitVeterinaires", method = RequestMethod.POST)
	public ResponseEntity<String> postProduitVeterinaire(@RequestParam("file1") MultipartFile file,
			@RequestParam("produitVeterinaire") String produitVeterinaire)
			throws JsonParseException, JsonMappingException, IOException {
		
		return produitVegerinaireService.postProduitVeterinaire(file, produitVeterinaire);

	}

	
	

}
