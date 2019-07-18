package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.UtilisateurRepository;
import org.sid.dao.VeterinaireRepository;
import org.sid.entities.Veterinaire;
import org.sid.metier.VeterinaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class VeterinaireRest {

	@Autowired
	private VeterinaireService veterinaireService;


	@RequestMapping(value = "/Veterinaires", method = RequestMethod.GET)
	public List<Veterinaire> getVeterinaires() {
		return veterinaireService.getVeterinaires() ;
	}

	@RequestMapping(value = "/Veterinaires/{ref}", method = RequestMethod.GET)
	public Optional<Veterinaire> getVeterinaire(@PathVariable("ref") String ref) {
		return veterinaireService.getVeterinaire(ref) ;
	}

	@RequestMapping(value = "/Veterinaires", method = RequestMethod.POST)
	public Veterinaire saveVeterinaire(@RequestBody Veterinaire veterinaire) {
		

		return veterinaireService.saveVeterinaire(veterinaire) ;
	}

	@RequestMapping(value = "/Veterinaires/{ref}", method = RequestMethod.DELETE)
	public boolean deleteVeterinaire(@PathVariable("ref") String ref) {
		
		return veterinaireService.deleteVeterinaire(ref) ;
	}

	@RequestMapping(value = "/Veterinaires", method = RequestMethod.PUT)
	public Veterinaire updateVeterinaire(@RequestBody Veterinaire veterinaire) {
		
		return veterinaireService.updateVeterinaire(veterinaire) ;
	}

}
