package org.sid.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.sid.dao.ProduitElevageRepository;
import org.sid.dao.ProduitRepository;
import org.sid.entities.Produit;
import org.sid.entities.Produitelevage;
import org.sid.metier.ProduitElevageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "*")
public class ProduitElevageRest {

	@Autowired
	private ProduitElevageService produitElevageRepository;

	@RequestMapping(value = "/ProduitElevages", method = RequestMethod.GET)
	public List<Produitelevage> getProduitElevages() {

		return produitElevageRepository.getProduitElevages();
	}

	@RequestMapping(value = "/ProduitElevages/{ref}", method = RequestMethod.GET)
	public Optional<Produitelevage> getProduitElevage(@PathVariable("ref") String ref) {

		return produitElevageRepository.getProduitElevage(ref);
	}

	@RequestMapping(value = "/ProduitElevages/{ref}", method = RequestMethod.DELETE)
	public boolean deleteProduitElevage(@PathVariable("ref") String ref) {

		return produitElevageRepository.deleteProduitElevage(ref);
	}

	@RequestMapping(value = "/ProduitElevages", method = RequestMethod.PUT)
	public boolean updateProduitElevage(@RequestBody Produitelevage produitelevage) {

		return produitElevageRepository.updateProduitElevage(produitelevage);
	}

	@RequestMapping(value = "/ProduitElevages", method = RequestMethod.POST)
	public ResponseEntity<String> postProduitElevage(@RequestParam("file1") MultipartFile file,
			@RequestParam("produitElevage") String produitElevage)
			throws JsonParseException, JsonMappingException, IOException {

		return produitElevageRepository.postProduitElevage(file, produitElevage);

	}

}
