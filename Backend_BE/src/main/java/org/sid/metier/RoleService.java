package org.sid.metier;

import org.sid.entities.Role;
import org.sid.entities.Utilisateur;

import java.util.List;
import java.util.Optional;

public interface RoleService {
    List<Role> getRoles() ;
    Optional<Role> getRole(String ref) ;
    Role saveRole(Role role) ;
    boolean deleteRole(String ref) ;
    Role updateRole(Role role) ;

}