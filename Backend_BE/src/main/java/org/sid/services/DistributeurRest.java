package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.DistributeurRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Distributeur;
import org.sid.metier.DistributeurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class DistributeurRest {
	
	@Autowired
	private DistributeurService distributeurService ;
	
	
	
	@RequestMapping(value = "/Distributeurs",method=RequestMethod.GET)
	public List<Distributeur> getDistributions(){
		return distributeurService.getDistributions() ;
	}
	
	@RequestMapping(value = "/Distributeurs/{ref}",method=RequestMethod.GET)
	public Optional<Distributeur> getDistribution(@PathVariable("ref") String ref){
		return distributeurService.getDistribution(ref) ;
	}
	
	@RequestMapping(value = "/Distributeurs",method=RequestMethod.POST)
	public Distributeur saveDistribution(@RequestBody Distributeur distributeur){
		
		return distributeurService.saveDistribution(distributeur);
	}
	
	@RequestMapping(value = "/Distributeurs/{ref}",method=RequestMethod.DELETE)
	public boolean deleteDistribution(@PathVariable("ref") String ref){
		distributeurService.deleteDistribution(ref) ;
		return true;
	}
	
	@RequestMapping(value = "/Distributeurs",method=RequestMethod.PUT)
	public boolean updateDistribution(@RequestBody Distributeur distributeur){
		 distributeurService.updateDistribution(distributeur) ;
		 return true;
	}

}
