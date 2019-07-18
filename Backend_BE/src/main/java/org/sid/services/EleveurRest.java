package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.EleveurRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Eleveur;
import org.sid.metier.EleveurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class EleveurRest {
	
	@Autowired
	private EleveurService eleveurService ;
	
	
	@RequestMapping(value = "/Eleveurs",method=RequestMethod.GET)
	public List<Eleveur> getEleveurs(){
		return eleveurService.getEleveurs() ;
	}
	
	@RequestMapping(value = "/Eleveurs/{ref}",method=RequestMethod.GET)
	public Optional<Eleveur> getOneEleveur(@PathVariable("ref") String ref){
		return eleveurService.getOneEleveur(ref) ;
	}
	
	@RequestMapping(value = "/Eleveurs",method=RequestMethod.POST)
	public Eleveur saveEleveur(@RequestBody Eleveur eleveur){
	
		return eleveurService.saveEleveur(eleveur) ;
	}
	
	@RequestMapping(value = "/Eleveurs/{ref}",method=RequestMethod.DELETE)
	public boolean deleteEleveur(@PathVariable("ref") String ref){
		eleveurService.deleteEleveur(ref) ;
		return true ;
	}
	
	@RequestMapping(value = "/Eleveurs",method=RequestMethod.PUT)
	public Eleveur updateEleveur(@RequestBody Eleveur eleveur){
		
		return eleveurService.updateEleveur(eleveur) ;
	}
	

}
