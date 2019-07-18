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
import org.sid.dao.ProduitVegerinaireRepository;
import org.sid.entities.Produitveterinaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ProduitVeterinaireImpl implements ProduitVeterinaireService {

	@Autowired
	private ProduitVegerinaireRepository produitVegerinaireRepository;

	@Autowired
	private ProduitRepository produitRepository;

	@Autowired
	ServletContext context;
	
	@Override
	public List<Produitveterinaire> getProdVeterinaires() {
		List<Produitveterinaire> pv = produitVegerinaireRepository.findAll();
		List<Produitveterinaire> realp = new ArrayList<>();
		for(Produitveterinaire p : pv){
			p.getProduit().setPhoto(this.getPhoto(p.getProduit().getPhoto()));
			realp.add(p) ;
		}
		return realp;
	}

	@Override
	public Optional<Produitveterinaire> getProdVeterinaire(String ref) {
		Optional<Produitveterinaire> p = produitVegerinaireRepository.findById(ref);
		p.get().getProduit().setPhoto(this.getPhoto(p.get().getProduit().getPhoto()));
		return p;
	}

	@Override
	public boolean deleteProduitVeterinaire(String ref) {
		produitVegerinaireRepository.deleteById(ref);
		produitRepository.deleteById(ref);
		return true;
	}

	@Override
	public boolean updateProduitVeterinaire(Produitveterinaire produitveterinaire) {
		produitVegerinaireRepository.saveAndFlush(produitveterinaire);
		produitRepository.saveAndFlush(produitveterinaire.getProduit()) ;
		return true;
	}

	@Override
	public ResponseEntity<String> postProduitVeterinaire(MultipartFile file, String produitVeterinaire)
			throws JsonParseException, JsonMappingException, IOException {
		Produitveterinaire p1 = new ObjectMapper().readValue(produitVeterinaire, Produitveterinaire.class);
		boolean isExist = new File(context.getRealPath("/images/")).exists();
		if (!isExist) {
			new File(context.getRealPath("/images/")).mkdir();
		}
		String fileName = file.getOriginalFilename();
		String modifyFileName = FilenameUtils.getBaseName(fileName) + "_" + System.currentTimeMillis() + "."
				+ FilenameUtils.getExtension(fileName);
		File serverFile = new File(context.getRealPath("/images/" + File.separator + modifyFileName));
		try {
			FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
		} catch (Exception e) {
			// TODO: handle exception
		}
		p1.getProduit().setPhoto(modifyFileName);
		// personne2.setPhoto(file.getBytes());

		produitRepository.save(p1.getProduit());
		// System.out.println("********************" +
		// p1.getReferenceproduit());

		Produitveterinaire dbProduit = produitVegerinaireRepository.save(new Produitveterinaire(p1.getProduit(),
				p1.getVeterinaire(), p1.getCategorieprodveterinaire()));

		if (dbProduit != null) {
			return new ResponseEntity<>("personne is saved successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("personne is not saved", HttpStatus.BAD_REQUEST);
		}
	}

	@Override
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
