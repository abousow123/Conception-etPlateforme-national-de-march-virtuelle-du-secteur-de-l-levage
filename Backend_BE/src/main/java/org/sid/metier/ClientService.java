package org.sid.metier;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.sid.entities.Client;

public interface ClientService {
	
	List<Client> getClients() ;
	Optional<Client> getClient(String ref) ;
	Client saveClient(Client client) ;
	boolean deleteClient(String ref)  ;
	Client updateClient(String ref, Client client) ;

}
