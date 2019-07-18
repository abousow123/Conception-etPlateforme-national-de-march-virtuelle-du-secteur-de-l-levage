package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.DepartementRepository;
import org.sid.entities.Departement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartementRest {
	
	@Autowired
	private DepartementRepository departementRepository ;
	
	@RequestMapping(value = "/Departements",method=RequestMethod.GET)
	public List<Departement> getDepartements(){
		return departementRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Departements/{ref}",method=RequestMethod.GET)
	public Optional<Departement> getDepartement(@PathVariable("ref") int ref){
		return departementRepository.findById(ref) ;
	}
	
	@RequestMapping(value = "/Departements",method=RequestMethod.POST)
	public Departement saveDepartement(@RequestBody Departement departement){
		return departementRepository.save(departement) ;
	}
	
	@RequestMapping(value = "/Departements/{ref}",method=RequestMethod.DELETE)
	public boolean deleteDepartement(@PathVariable("ref") int ref){
		departementRepository.deleteById(ref); 
		return true;
	}
	
	@RequestMapping(value = "/Departements",method=RequestMethod.PUT)
	public Departement updateDepartement(@RequestBody Departement departement){
		return departementRepository.saveAndFlush(departement) ;
	}

}
