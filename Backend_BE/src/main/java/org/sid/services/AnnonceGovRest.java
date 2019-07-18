package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.AgentRepository;
import org.sid.dao.AnnonceGovRepository;
import org.sid.entities.Agentdirectionelevage;
import org.sid.entities.Annoncegouvernemental;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnnonceGovRest {

	@Autowired
	private AnnonceGovRepository annonceGovRepository;

	@Autowired
	private AgentRepository agentRepository;

	@RequestMapping(value = "/AnnonceGovernementals", method = RequestMethod.GET)
	public List<Annoncegouvernemental> getAnnonceGovs() {
		return annonceGovRepository.findAll();
	}

	@RequestMapping(value = "/AnnonceGovernementals/{idannonce}", method = RequestMethod.GET)
	public Optional<Annoncegouvernemental> getAnnonce(@PathVariable("idannonce") int idannonce) {
		return annonceGovRepository.findById(idannonce);
	}

	@RequestMapping(value = "/AnnonceGovernementals", method = RequestMethod.POST)
	public Annoncegouvernemental saveAnnonce(@RequestBody Annoncegouvernemental annoncegouvernemental) {
		return annonceGovRepository.save(annoncegouvernemental);
	}

	@RequestMapping(value = "/AnnonceGovernementals/{idannonce}", method = RequestMethod.DELETE)
	public boolean deleteAnnonce(@PathVariable("idannonce") int idannonce) {
		annonceGovRepository.deleteById(idannonce);
		return true;
	}
	
	@RequestMapping(value = "/AnnonceGovernementals", method = RequestMethod.PUT)
	public Annoncegouvernemental updateAnnonce(@RequestBody Annoncegouvernemental annoncegouvernemental) {
		return annonceGovRepository.saveAndFlush(annoncegouvernemental);
	}

}
