package org.sid.web;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Client;
import org.sid.metier.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



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
	public Client saveClient(@RequestBody Client client){
		return clientService.saveClient(client) ;
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
