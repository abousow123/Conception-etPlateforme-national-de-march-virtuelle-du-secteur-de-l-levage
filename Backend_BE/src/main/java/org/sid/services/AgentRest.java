package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.AgentRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Agentdirectionelevage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
 public class AgentRest {
	
	@Autowired
	private AgentRepository agentRepository ;
	
	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	
	@Autowired
	private AccountService accountService;
	
	@RequestMapping(value = "/Agents",method=RequestMethod.GET)
	public List<Agentdirectionelevage> getAgents(){
		return agentRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Agents/{ref}",method=RequestMethod.GET)
	public Optional<Agentdirectionelevage> getAgent(@PathVariable("ref") String ref){
		return agentRepository.findById(ref) ;
	}
	
	@RequestMapping(value = "/Agents",method=RequestMethod.POST)
	public Agentdirectionelevage saveAgent(@RequestBody Agentdirectionelevage agentdirectionelevage){
		//utilisateurRepository.save(agentdirectionelevage.getUtilisateur()) ;
		accountService.saveCompte(agentdirectionelevage.getUtilisateur(), agentdirectionelevage.getUtilisateur().getPassword()) ;
		return agentRepository.save(agentdirectionelevage) ;	
	}
	
	@RequestMapping(value = "/Agents/{ref}",method=RequestMethod.DELETE)
	public boolean deleteAgent(@PathVariable("ref") String ref){
		agentRepository.deleteById(ref);
		utilisateurRepository.deleteById(ref) ;
		return true;
	}
	
	@RequestMapping(value = "/Agents/",method=RequestMethod.PUT)
	public Agentdirectionelevage updateAgent(@RequestBody Agentdirectionelevage agentdirectionelevage ){
		utilisateurRepository.saveAndFlush(agentdirectionelevage.getUtilisateur()) ;
		return agentRepository.saveAndFlush(agentdirectionelevage);
		 
	}
}
