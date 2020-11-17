package org.sid.metier;

import org.sid.dao.LigneCommandeProduitRepository;
import org.sid.entities.LigneCommandeProduit;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class LigneCommandeProduitImpl implements LigneCommandeProduitService {

	@Autowired
	LigneCommandeProduitRepository ligneCommandeProduitRepository;

	@Override
	public List<LigneCommandeProduit> getLigneCommandeProduits() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<LigneCommandeProduit> getLigneCommandeProduit(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteLigneCommandeProduit(String id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public LigneCommandeProduit updateLigneCommandeProduit(LigneCommandeProduit ligneCommandeProduit) {
		// TODO Auto-generated method stub
		return null;
	}


}
