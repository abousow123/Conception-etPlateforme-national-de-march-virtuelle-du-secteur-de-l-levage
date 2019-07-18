package org.sid.metier;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Commandeclient;


public interface CommandeClientService {
	
	List<Commandeclient> getCommandeClients() ;
	Optional<Commandeclient> getCommandeClient(int numcommande) ;
	
	 Commandeclient saveComClient( String idanimal,Commandeclient commandeclient) throws ParseException ;
	 
	 boolean deleteComClient( int numcommande)  ;
	 Commandeclient updateComClient( Commandeclient commandeclient)  ;

}
