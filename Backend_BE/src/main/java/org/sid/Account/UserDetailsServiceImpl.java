package org.sid.Account;

import java.util.ArrayList;
import java.util.Collection;

import org.sid.entities.Role;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private AccountService accountService ;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Utilisateur compte = accountService.loadCompteBylogin(login);
		if (compte==null) throw new UsernameNotFoundException("Login incorrect") ;
		Collection<GrantedAuthority> authorities= new ArrayList<>() ;
		Role r = compte.getRole() ;
		authorities.add(new SimpleGrantedAuthority(r.getLibelle())) ;
		
		
		return new User(compte.getEmail(),compte.getPassword(),authorities) ;
	}

}
