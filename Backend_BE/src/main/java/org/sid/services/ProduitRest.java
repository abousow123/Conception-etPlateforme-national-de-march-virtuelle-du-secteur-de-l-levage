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
import org.sid.dao.ProduitRepository;
import org.sid.entities.Animal;
import org.sid.entities.Produit;
import org.sid.entities.Produitelevage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ProduitRest {
	
	@Autowired
	private ProduitRepository produitRepository;
	
	@Autowired
	ServletContext context;
	
	/*
	 * @RequestMapping(value = "/Produits", method = RequestMethod.GET) public
	 * List<Produit> getProduits() { return produitRepository.findAll(); }
	 */
	
	@RequestMapping(value = "/Produits", method = RequestMethod.GET)
	public List<Produit> getProduits() {
		List<Produit> ps = produitRepository.findAll();
		List<Produit> realp = new ArrayList<Produit>();
		for (Produit p : ps) {
			p.setPhoto(this.getPhoto(p.getPhoto()));
			realp.add(p);
		}

		return realp;
	}
	
	@RequestMapping(value = "/Produits/{ref}", method = RequestMethod.GET)
	public Optional<Produit> getProduit(@PathVariable("ref") String ref) {
		Optional<Produit> p = produitRepository.findById(ref);
		p.get().setPhoto(this.getPhoto(p.get().getPhoto()));
		return p; 
	}
	
	
	//@RequestMapping(value = "/Animals", method = RequestMethod.POST)
	public ResponseEntity<String> postPersonne(@RequestParam("file1") MultipartFile file,
			 String produit) throws JsonParseException, JsonMappingException, IOException {
		Produit p1 = new ObjectMapper().readValue(produit, Produit.class);
		boolean isExist = new File(context.getRealPath("/images/")).exists();
		if (!isExist) {
			new File(context.getRealPath("/images/")).mkdir();
		}
		String fileName = file.getOriginalFilename();
		String modifyFileName = FilenameUtils.getBaseName(fileName) + "_" + System.currentTimeMillis() + "."
				+ FilenameUtils.getExtension(fileName);
		File serverFile = new File(context.getRealPath("/images/"+File.separator+modifyFileName));
		try {
			FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
		} catch (Exception e) {
			// TODO: handle exception
		}
		p1.setPhoto(modifyFileName);
		// personne2.setPhoto(file.getBytes());

		Produit dbProduit = produitRepository.save(p1) ;

		if (dbProduit != null) {
			return new ResponseEntity<>("personne is saved successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("personne is not saved", HttpStatus.BAD_REQUEST);
		}

	}
	
	
	
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
							//System.out.println("nom photo = " + file.getName());
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
		//System.out.println(image);
		return image;
	}

}
