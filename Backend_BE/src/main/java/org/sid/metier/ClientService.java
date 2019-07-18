package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Client;


import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ClientService {
	
	List<Client> getClients() ;
	Optional<Client> getClient(String ref) ;
	Client saveClient(String client, String pass) throws JsonParseException, JsonMappingException, IOException;
	boolean deleteClient(String ref)  ;
	Client updateClient(String ref, Client client) ;

}
