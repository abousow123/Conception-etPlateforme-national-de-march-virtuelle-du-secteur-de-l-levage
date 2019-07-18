package org.sid.services;

import java.util.List;

import org.sid.dao.RoleRepository;
import org.sid.entities.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleRest {
	
	@Autowired
	private RoleRepository roleRepository ;
	
	@RequestMapping(value = "/Roles",method=RequestMethod.GET)
	public List<Role> getRoles(){
		return roleRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Roles",method=RequestMethod.POST)
	public Role saveRoles(@RequestBody Role r){
		return roleRepository.save(r) ;
	}

}
