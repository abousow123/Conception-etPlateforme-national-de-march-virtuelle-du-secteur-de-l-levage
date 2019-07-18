package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Typeanimal;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class UtilisateurRest {
	
	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	
	@RequestMapping(value = "/Users",method=RequestMethod.GET)
	public List<Utilisateur> getUsers(){
		return utilisateurRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Users/{ref}",method=RequestMethod.GET)
	public Optional<Utilisateur> getOneUser(@PathVariable("ref")String ref){
		return utilisateurRepository.findById(ref) ;
	}
	
	@RequestMapping(value="/chercherUsers",method=RequestMethod.GET)
	public Page<Utilisateur> chercherUtilisateurs(@RequestParam(name="mc",defaultValue="") String mc,
			@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
		
		return utilisateurRepository.chercherparProfil("%"+mc+"%", new PageRequest(page, size)) ;
	}
	
/*	@RequestMapping(value = "/saveUser",method=RequestMethod.POST)
	public Utilisateur saveUser(@RequestBody Utilisateur utilisateur){
		return utilisateurRepository.save(utilisateur) ;
		
	}
	
	@RequestMapping(value = "/Users/{ref}",method=RequestMethod.DELETE)
	public boolean deleteUser(@PathVariable("ref")String ref){
		utilisateurRepository.deleteById(ref);
		return true ;
	}*/
	
	

}
