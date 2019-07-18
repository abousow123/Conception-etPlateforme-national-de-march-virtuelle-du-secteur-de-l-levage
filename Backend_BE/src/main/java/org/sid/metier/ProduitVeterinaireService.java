package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Produitveterinaire;
import org.springframework.http.ResponseEntity;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ProduitVeterinaireService {
	
	List<Produitveterinaire> getProdVeterinaires() ;
	Optional<Produitveterinaire> getProdVeterinaire( String ref) ;
	 boolean deleteProduitVeterinaire( String ref) ;
	 boolean updateProduitVeterinaire( Produitveterinaire produitveterinaire) ;
	 
	 ResponseEntity<String> postProduitVeterinaire( MultipartFile file, String produitVeterinaire)
				throws JsonParseException, JsonMappingException, IOException ;
	 
	 String getPhoto(String fileName) ;

}
