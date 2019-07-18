package org.sid.services;

import java.util.List;

import org.sid.dao.CommandeRepository;
import org.sid.entities.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommandeRest {
	
	@Autowired
	private CommandeRepository commandeRepository ;
	
	@RequestMapping(value = "/Commandes", method = RequestMethod.GET)
	public List<Commande> getCommandes() {
		return commandeRepository.findAll();

	}
	

}
