package org.sid.metier;

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
import org.sid.dao.ProduitRepository;
import org.sid.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ProduitImpl implements ProduitService {


	@Autowired
	private ProduitRepository produitRepository;

	@Autowired
	ServletContext context;

	@Autowired
	private UtilsService utilsService;

	@Override
	public List<Produit> getProduits() {
		List<Produit> ps = produitRepository.findAll();
		List<Produit> realp = new ArrayList<Produit>();
		for (Produit p : ps) {
			p.setPhoto(utilsService.getPhoto(p.getPhoto()));
			realp.add(p);
		}

		return realp;
	}

	@Override
	public Optional<Produit> getProduit(String ref) {
		Optional<Produit> pe = produitRepository.findById(ref);
		pe.get().setPhoto(utilsService.getPhoto(pe.get().getPhoto()));
		return pe;
	}

	@Override
	public ResponseEntity<String> postProduit(MultipartFile file, String produit)
			throws JsonParseException, JsonMappingException, IOException {
		Produit p = new ObjectMapper().readValue(produit, Produit.class);

		p.setPhoto(utilsService.modifyFileName(file));

		Produit dbProduit = produitRepository.save(p);

		if (dbProduit != null) {
			return new ResponseEntity<>("Produit is saved successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Produit is not saved", HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	public boolean deleteProduit(String ref) {
		produitRepository.deleteById(ref);
		return true;
	}

	@Override
	public boolean updateProduit(Produit produit) {
		produitRepository.saveAndFlush(produit) ;
		return true;
	}



}
