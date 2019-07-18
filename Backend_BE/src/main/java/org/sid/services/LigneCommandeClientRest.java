package org.sid.services;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.apache.commons.io.FilenameUtils;
import org.sid.dao.CommandeClientRepository;
import org.sid.dao.CommandeRepository;
import org.sid.dao.LigneCommandeClientRepository;
import org.sid.entities.Commandeclient;
import org.sid.entities.Lignecommandeclient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LigneCommandeClientRest {

	@Autowired
	private LigneCommandeClientRepository clientRepository;

	@Autowired
	private CommandeClientRepository commandeClientRest;

	@Autowired
	private CommandeRepository commandeRepository;

	@Autowired
	ServletContext context;

	@RequestMapping(value = "/LigneComClients", method = RequestMethod.GET)
	public List<Lignecommandeclient> getCommandeClients() {
		List<Lignecommandeclient> lc = clientRepository.findAll();
		List<Lignecommandeclient> c = new ArrayList<Lignecommandeclient>();
		for (Lignecommandeclient l : lc) {
			l.getAnimal().setPhoto(this.getPhoto(l.getAnimal().getPhoto()));
			c.add(l);
		}

		return c;
	}

	@RequestMapping(value = "/LigneComClients/{idligneclient}", method = RequestMethod.GET)
	public Optional<Lignecommandeclient> getCommandeClient(@PathVariable("idligneclient") int idligneclient) {
		return clientRepository.findById(idligneclient);
	}

	@RequestMapping(value = "/LigneComClients/{idligneclient}", method = RequestMethod.DELETE)
	public boolean deleteLignCommandeClient(@PathVariable("idligneclient") int idligneclient) {
		int num = idligneclient ;
		clientRepository.deleteById(idligneclient);
		commandeClientRest.deleteById(commandeClientRest.getOne(num).getNumcommande());
		commandeRepository.deleteById(commandeRepository.getOne(num).getNumcommande());

		return true;
	}

	
	@RequestMapping(value = "/LigneComClients", method = RequestMethod.PUT)
	public Lignecommandeclient updateComClient(@RequestBody Lignecommandeclient commandeclient) {
		commandeRepository.saveAndFlush(commandeclient.getCommandeclient().getCommande());
		return clientRepository.saveAndFlush(commandeclient);
	}
	
	String getPhoto(String fileName) {
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
							// System.out.println("nom photo = " +
							// file.getName());
							FileInputStream fileInputStream = new FileInputStream(file);
							byte[] bytes = new byte[(int) file.length()];
							fileInputStream.read(bytes);
							encodeBase64 = Base64.getEncoder().encodeToString(bytes);
							image = "data:image/" + extension + ";base64," + encodeBase64;
							fileInputStream.close();
						}
					} catch (Exception e) {
						// TODO: handle exception
					}
				}
			}
		}
		// System.out.println(image);
		return image;
	}

}
