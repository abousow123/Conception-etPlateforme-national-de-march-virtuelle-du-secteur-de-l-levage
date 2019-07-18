package org.sid.services;



import java.util.List;
import java.util.Optional;

import org.sid.dao.MembreRepository;
import org.sid.entities.Membre;
import org.sid.entities.MembreId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MembreRest {
	
	@Autowired
	private MembreRepository membreRepository ;
	
	@RequestMapping(value = "/Membres",method=RequestMethod.GET)
	public List<Membre> getMembres(){
		return membreRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Membres/{ref}",method=RequestMethod.GET)
	public Optional<Membre> getMembre(@PathVariable("ref") MembreId ref){
		return membreRepository.findById(ref) ;
	}
	
	@RequestMapping(value = "/Membres",method=RequestMethod.POST)
	public Membre saveMembre(@RequestBody Membre membre){
		return membreRepository.save(membre) ;
	}
	
	@RequestMapping(value = "/Membres/{ref}",method=RequestMethod.DELETE)
	public boolean deleteMembre(@PathVariable("ref") MembreId ref){
		membreRepository.deleteById(ref); 
		return true;
	}
	
	@RequestMapping(value = "/Membres",method=RequestMethod.PUT)
	public Membre updateMembre(@RequestBody Membre membre){
		return membreRepository.save(membre) ;
	}

}
