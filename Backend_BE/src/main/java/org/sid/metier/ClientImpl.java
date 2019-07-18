package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.Account.AccountService;
import org.sid.dao.ClientRepository;
import org.sid.dao.UtilisateurRepository;
import org.sid.entities.Client;
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

	@Autowired
	private UtilisateurRepository utilisateurRepository;

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
	public Client saveClient(String client, String pass) throws JsonParseException, JsonMappingException, IOException {
		// TODO Auto-generated method stub
		Client c = new ObjectMapper().readValue(client, Client.class);
		accuntService.saveCompte(c.getUtilisateur(), pass);
		return clientRepository.save(c);
	}

	@Override
	public boolean deleteClient(String ref) {
		// TODO Auto-generated method stub
		clientRepository.deleteById(ref);
		utilisateurRepository.deleteById(ref);
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

		Utilisateur u = client.getUtilisateur();
		u.setNumuser(u.getNumuser());
		c.setNumuser(u.getNumuser());
		c.setUtilisateur(u);

		utilisateurRepository.saveAndFlush(u);
		return clientRepository.saveAndFlush(c);
	}

}
