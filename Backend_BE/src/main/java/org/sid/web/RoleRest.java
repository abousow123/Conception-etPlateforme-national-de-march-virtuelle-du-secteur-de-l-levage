package org.sid.web;

import java.util.List;

import org.sid.dao.RoleRepository;
import org.sid.entities.Role;
import org.sid.metier.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleRest {
	
	@Autowired
	private RoleService roleService ;
	
	@RequestMapping(value = "/Roles",method=RequestMethod.GET)
	public List<Role> getRoles(){
		return roleService.getRoles() ;
	}
	
	@RequestMapping(value = "/Roles",method=RequestMethod.POST)
	public Role saveRoles(@RequestBody Role role){
		return roleService.saveRole(role);
	}

}
