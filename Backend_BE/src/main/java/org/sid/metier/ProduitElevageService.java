package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Produitelevage;
import org.springframework.http.ResponseEntity;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ProduitElevageService {

	
	 List<Produitelevage> getProduitElevages() ;
	 Optional<Produitelevage> getProduitElevage(String ref) ;
	 
	 ResponseEntity<String> postProduitElevage( MultipartFile file,String produitElevage)
				throws JsonParseException, JsonMappingException, IOException  ;
	 
	 boolean deleteProduitElevage( String ref) ;
	 boolean updateProduitElevage( Produitelevage produitelevage) ;
	 String getPhoto(String fileName) ;
}
