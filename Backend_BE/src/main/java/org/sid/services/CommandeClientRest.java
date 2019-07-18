package org.sid.services;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.AnimalRepository;
import org.sid.dao.ClientRepository;
import org.sid.dao.CommandeClientRepository;
import org.sid.dao.CommandeRepository;
import org.sid.dao.LigneCommandeClientRepository;
import org.sid.entities.Commandeclient;
import org.sid.entities.Lignecommandeclient;
import org.sid.metier.CommandeClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class CommandeClientRest {

	

	


	
	@Autowired
	private CommandeClientService commandeClientService ;



	@RequestMapping(value = "/CommandeClients", method = RequestMethod.GET)
	public List<Commandeclient> getCommandeClients() {
		return  commandeClientService.getCommandeClients();
 
	}

	@RequestMapping(value = "/CommandeClients/{numcommande}", method = RequestMethod.GET)
	public Optional<Commandeclient> getCommandeClient(@PathVariable("numcommande") int numcommande) {
		return  commandeClientService.getCommandeClient(numcommande);
	}

	@RequestMapping(value = "/CommandeClients/{idanimal}", method = RequestMethod.POST)
	public Commandeclient saveComClient(@PathVariable("idanimal") String idanimal,
			@RequestBody Commandeclient commandeclient) throws ParseException {
		

		return  commandeClientService.saveComClient(idanimal, commandeclient);

	}

	@RequestMapping(value = "/CommandeClients/{numcommande}", method = RequestMethod.DELETE)
	public boolean deleteComClient(@PathVariable("numcommande") int numcommande) {
		
		return  commandeClientService.deleteComClient(numcommande);
	}

	@RequestMapping(value = "/CommandeClients", method = RequestMethod.PUT)
	public Commandeclient updateComClient(@RequestBody Commandeclient commandeclient) {
		
		return  commandeClientService.updateComClient(commandeclient);
	}

}
