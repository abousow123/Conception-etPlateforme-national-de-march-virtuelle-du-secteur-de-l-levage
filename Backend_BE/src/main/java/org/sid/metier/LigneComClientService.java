package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Lignecommandeclient;


public interface LigneComClientService {
	
	List<Lignecommandeclient> getCommandeClients() ;
	Optional<Lignecommandeclient> getCommandeClient(int idligneclient) ;
	boolean deleteLignCommandeClient(int idligneclient) ;
	Lignecommandeclient updateComClient(Lignecommandeclient commandeclient) ;
	String getPhoto(String fileName) ;

}
