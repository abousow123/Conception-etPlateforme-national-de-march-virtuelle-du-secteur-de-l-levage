package org.sid.metier;

import org.sid.dao.RoleRepository;
import org.sid.entities.Role;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class RoleImpl implements RoleService{

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> getRoles() {
        return null;
    }

    @Override
    public Optional<Role> getRole(String ref) {
        return Optional.empty();
    }

    @Override
    public Role saveRole(Role role) {
        return null;
    }

    @Override
    public boolean deleteRole(String ref) {
        return false;
    }

    @Override
    public Role updateRole(Role role) {
        return null;
    }
}
