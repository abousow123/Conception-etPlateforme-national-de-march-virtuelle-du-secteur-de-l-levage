package org.sid.dao;

import org.sid.entities.Membre;
import org.sid.entities.MembreId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembreRepository extends JpaRepository<Membre,MembreId> {

}
