package org.sid.metier;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.AnimalRepository;

import org.sid.dao.CommandeRepository;
import org.sid.dao.LigneCommandeAnimalRepository;
import org.sid.entities.Commande;
import org.springframework.beans.factory.annotation.Autowired;

public class CommandeImpl implements CommandeService {


    @Autowired
    private AnimalRepository animalRepository;


    @Autowired
    private CommandeRepository commandeRepository;

    @Autowired
    private LigneCommandeAnimalRepository ligneComClient;

    @Override
    public List<Commande> getCommandes() {
        return commandeRepository.findAll();
    }

    @Override
    public Optional<Commande> getCommande(String id) {
        return commandeRepository.findById(id);
    }

    @Override
    public Commande saveCommande(Commande commande) throws ParseException {

        SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        commande.setDatecommande(new Date());
        commandeRepository.save(commande);
        //commandeClientRest.save(commandeclient);
        //System.out.println("***********************"+animalRepository.getOne(idanimal).getNom());

        //	Lignecommandeclient lc = new Lignecommandeclient(commandeclient,animalRepository.getOne(idanimal)) ;

        //lc.setDatecommande(new Date());
        //	lc.setPrixtotal(animalRepository.getOne(idanimal).getPrix());
        //	ligneComClient.save(lc);

        return commande;
    }

    @Override
    public boolean deleteCommande(String id) {
        commandeRepository.deleteById(id);
        return true;
    }

    @Override
    public Commande updateCommande(Commande commande,String ref) {
        Commande c = commandeRepository.getOne(ref);
        return commandeRepository.saveAndFlush(c);
    }

}
