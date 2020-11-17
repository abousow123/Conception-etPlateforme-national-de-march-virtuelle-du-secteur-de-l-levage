package org.sid.metier;

import org.sid.dao.LigneCommandeAnimalRepository;
import org.sid.entities.LigneCommandeAnimal;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class LigneCommandeAnimalImpl implements LigneCommandeAnimalService {

    @Autowired
    LigneCommandeAnimalRepository ligneCommandeAnimalRepository;

    @Override
    public List<LigneCommandeAnimal> getLigneCommandeAnimals() {
        return null;
    }

    @Override
    public Optional<LigneCommandeAnimal> getLigneCommandeAnimal(String id) {
        return Optional.empty();
    }

    @Override
    public boolean deleteLigneCommandeAnimalt(String id) {
        return false;
    }

    @Override
    public LigneCommandeAnimal updateLigneCommandeAnimal(LigneCommandeAnimal ligneCommandeAnimal) {
        return null;
    }

}
