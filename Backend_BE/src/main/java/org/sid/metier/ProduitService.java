package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Produit;
import org.springframework.http.ResponseEntity;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ProduitService {

	
	 List<Produit> getProduits() ;
	 Optional<Produit> getProduit(String ref) ;
	 
	 ResponseEntity<String> postProduit( MultipartFile file,String produit)
				throws JsonParseException, JsonMappingException, IOException  ;
	 
	 boolean deleteProduit( String ref) ;
	 boolean updateProduit( Produit produit) ;

}
