package org.sid.metier;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.AnimalRepository;

import org.sid.dao.CommandeClientRepository;
import org.sid.dao.CommandeRepository;
import org.sid.dao.LigneCommandeClientRepository;
import org.sid.entities.Commandeclient;
import org.sid.entities.Lignecommandeclient;
import org.springframework.beans.factory.annotation.Autowired;

public class CommandeClientImpl implements CommandeClientService {
	
	

	@Autowired
	private AnimalRepository animalRepository;
	
	@Autowired
	private CommandeClientRepository commandeClientRest;

	@Autowired
	private CommandeRepository commandeRepository;

	@Autowired
	private LigneCommandeClientRepository ligneComClient;

	@Override
	public List<Commandeclient> getCommandeClients() {
		return commandeClientRest.findAll();
	}

	@Override
	public Optional<Commandeclient> getCommandeClient(int numcommande) {
		return commandeClientRest.findById(numcommande);
	}

	@Override
	public Commandeclient saveComClient(String idanimal, Commandeclient commandeclient) throws ParseException {
		 SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		 
			commandeclient.getCommande().setDatecommande(new Date());
			commandeRepository.save(commandeclient.getCommande()); 
			commandeClientRest.save(commandeclient);
			//System.out.println("***********************"+animalRepository.getOne(idanimal).getNom());
			
			Lignecommandeclient lc = new Lignecommandeclient(commandeclient,animalRepository.getOne(idanimal)) ;

			//lc.setDatecommande(new Date());
			lc.setPrixtotal(animalRepository.getOne(idanimal).getPrix());
			ligneComClient.save(lc);

			return commandeclient;
	}

	@Override
	public boolean deleteComClient(int numcommande) {
		commandeClientRest.deleteById(numcommande);
		return true;
	}

	@Override
	public Commandeclient updateComClient(Commandeclient commandeclient) {
		commandeRepository.saveAndFlush(commandeclient.getCommande());
		return commandeClientRest.saveAndFlush(commandeclient);
	}

}
