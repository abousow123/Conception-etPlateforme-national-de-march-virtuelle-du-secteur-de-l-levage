package org.sid.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.CommandeEleveurRepository;
import org.sid.dao.CommandeRepository;

import org.sid.dao.ProduitRepository;
import org.sid.entities.Commandeeleveur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class CommandeEleveurRest {

	@Autowired
	private CommandeEleveurRepository commandeEleveurRepository;

	@Autowired
	private ProduitRepository produit;

	@Autowired
	private CommandeRepository commandeRepository;

	@RequestMapping(value = "/CommandeEleveurs", method = RequestMethod.GET)
	public List<Commandeeleveur> getCommandeEleveurs() {
		return commandeEleveurRepository.findAll();
	}

	@RequestMapping(value = "/CommandeEleveurs/{numcommande}", method = RequestMethod.GET)
	public Optional<Commandeeleveur> getCommandeEleveur(@PathVariable("numcommande") int numcommande) {
		return commandeEleveurRepository.findById(numcommande);
	}

	@RequestMapping(value = "/CommandeEleveurs/{referenceproduit}", method = RequestMethod.POST)
	public Commandeeleveur saveCommande(@PathVariable("referenceproduit") String referenceproduit,
			@RequestBody Commandeeleveur commandeeleveur) {
		commandeRepository.save(commandeeleveur.getCommande());
		return commandeEleveurRepository.save(commandeeleveur);	
	}

	@RequestMapping(value = "/CommandeEleveurs/{numcommande}", method = RequestMethod.DELETE)
	public boolean deleteCommande(@PathVariable("numcommande") int numcommande) {
		commandeEleveurRepository.deleteById(numcommande);
		return true;
	}

	@RequestMapping(value = "/CommandeEleveurs", method = RequestMethod.PUT)
	public Commandeeleveur updateCommande(@RequestBody Commandeeleveur commandeeleveur) {
		commandeRepository.saveAndFlush(commandeeleveur.getCommande());
		return commandeEleveurRepository.saveAndFlush(commandeeleveur);
	}
}
