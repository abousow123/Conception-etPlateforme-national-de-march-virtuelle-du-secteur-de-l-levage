package org.sid.dao;

import org.sid.entities.LigneCommandeProduit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LigneCommandeProduitRepository extends JpaRepository<LigneCommandeProduit,String>  {
}
