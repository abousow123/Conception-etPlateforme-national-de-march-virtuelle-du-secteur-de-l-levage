package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.ClientRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Client;
import org.sid.entities.Commande;
import org.sid.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ClientImpl implements ClientService{
	
	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private AccountService accuntService;


	@Override
	public List<Client> getClients() {
		// TODO Auto-generated method stub
		return clientRepository.findAll();
	}

	@Override
	public Optional<Client> getClient(String ref) {
		// TODO Auto-generated method stub
		return clientRepository.findById(ref);
	}

	@Override
	public Client saveClient(Client client) {
		return clientRepository.save(client);
	}

	@Override
	public boolean deleteClient(String ref) {
		// TODO Auto-generated method stub
		clientRepository.deleteById(ref);
		//utilisateurRepository.deleteById(ref);
		return true;
	}

	@Override
	public Client updateClient(String ref, Client client) {
		// TODO Auto-generated method stub
		Client c = clientRepository.getOne(ref);
		//System.out.println("***********" + c.getNumuser() + "**************");
		/*
		 * if(c==null){ return null ; }
		 */

		return clientRepository.saveAndFlush(c);
	}

}
