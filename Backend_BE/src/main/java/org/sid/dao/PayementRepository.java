package org.sid.dao;

import org.sid.entities.Payement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayementRepository extends JpaRepository<Payement, String> {

}
