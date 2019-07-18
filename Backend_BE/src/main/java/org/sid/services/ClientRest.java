package org.sid.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.ClientRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Client;
import org.sid.entities.Utilisateur;
import org.sid.entities.Veterinaire;
import org.sid.metier.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "*")
public class ClientRest {

	
	@Autowired
	private ClientService clientService ;

	@RequestMapping(value = "/Clients", method = RequestMethod.GET)
	public List<Client> getClients() {
		return clientService.getClients() ;
	}

	@RequestMapping(value = "/Clients/{ref}", method = RequestMethod.GET)
	public Optional<Client> getClient(@PathVariable("ref") String ref) {
		return clientService.getClient(ref) ;
	}

	@RequestMapping(value = "/Clients", method = RequestMethod.POST)
	public Client saveClient(@RequestParam("client") String client, @RequestParam("pass") String pass) throws JsonParseException, JsonMappingException, IOException {
		return clientService.saveClient(client, pass) ;
	}

	@RequestMapping(value = "/Clients/{ref}", method = RequestMethod.DELETE)
	public boolean deleteClient(@PathVariable("ref") String ref) {
		return clientService.deleteClient(ref) ;
	}

	@RequestMapping(value = "/Clients/{ref}", method = RequestMethod.PUT)
	public Client updateClient(@PathVariable("ref") String ref, @RequestBody Client client) {
		return clientService.updateClient(ref, client) ;
	
	}

}
