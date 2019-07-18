package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.GieRepository;
import org.sid.entities.Gie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GieRest {
	
	@Autowired
	private GieRepository gieRepository ;
	
	@RequestMapping(value = "/Gies",method=RequestMethod.GET)
	public List<Gie> getGies(){
		return gieRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Gies/{ref}",method=RequestMethod.GET)
	public Optional<Gie> getGie(@PathVariable("ref") int ref){
		return gieRepository.findById(ref) ;
	}
	
	@RequestMapping(value = "/Gies",method=RequestMethod.POST)
	public Gie saveGie(@RequestBody Gie gie){
		return gieRepository.save(gie) ;
	}
	
	
	@RequestMapping(value = "/Gies/{ref}",method=RequestMethod.DELETE)
	public boolean deleteGie(@PathVariable("ref") int ref){
		 gieRepository.deleteById(ref); 
		 return true ;
	}
	
	@RequestMapping(value = "/Gies",method=RequestMethod.PUT)
	public Gie updateGie(@RequestBody Gie gie){
		return gieRepository.saveAndFlush(gie) ;
	}

}
