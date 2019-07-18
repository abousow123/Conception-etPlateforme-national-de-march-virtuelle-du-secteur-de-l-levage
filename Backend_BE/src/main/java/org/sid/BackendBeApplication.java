package org.sid;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.sid.dao.AnimalRepository;
import org.sid.dao.CommandeClientRepository;
import org.sid.dao.LigneCommandeClientRepository;
import org.sid.entities.Animal;
import org.sid.entities.Lignecommandeclient;
import org.sid.metier.AnimalImp;
import org.sid.metier.AnimalService;
import org.sid.metier.ClientImpl;
import org.sid.metier.ClientService;
import org.sid.metier.CommandeClientImpl;
import org.sid.metier.CommandeClientService;
import org.sid.metier.DistributeurImpl;
import org.sid.metier.DistributeurService;
import org.sid.metier.EleveurImp;
import org.sid.metier.EleveurService;
import org.sid.metier.ProduitElevageImpl;
import org.sid.metier.ProduitElevageService;
import org.sid.metier.ProduitVeterinaireImpl;
import org.sid.metier.ProduitVeterinaireService;
import org.sid.metier.VeterinaireImpl;
import org.sid.metier.VeterinaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;


@SpringBootApplication
public class BackendBeApplication implements CommandLineRunner {

	@Autowired
	LigneCommandeClientRepository clientRepository;

	@Autowired
	CommandeClientRepository commandeClientRepository;

	@Autowired
	AnimalRepository animalRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendBeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		/* System.out.println(commandeClientRepository.getOne(1).getNumcommande());
		System.out.println(animalRepository.getOne("an1").getIdanimal());
		Lignecommandeclient lc = new Lignecommandeclient(commandeClientRepository.getOne(1),
				animalRepository.getOne("an1"));
		//lc.getCommandeclient().setNumcommande(commandeClientRepository.getOne(6).getNumcommande());
		//lc.getAnimal().setIdanimal(animalRepository.getOne("an1").getIdanimal());
		//System.out.println(lc.getAnimal().getIdanimal());
		
		clientRepository.save(lc) ; */
	}
	
	@Bean
	BCryptPasswordEncoder getBCPE(){
		return new BCryptPasswordEncoder() ;
	}

	@Bean
	AnimalService getAS(){
		return new AnimalImp() ;
	}
	
	@Bean
	ClientService getCS() {
		return new ClientImpl() ;
	}
	
	@Bean
	EleveurService getES() {
		return new EleveurImp() ;
	}
	
	@Bean
	DistributeurService getDS() {
		return new DistributeurImpl() ;
	}
	
	@Bean
	VeterinaireService getVS() {
		return new VeterinaireImpl() ;
	}
	
	@Bean
	ProduitElevageService getPES() {
		return new ProduitElevageImpl() ;
	}
	
	@Bean
	ProduitVeterinaireService getPVS() {
		return new ProduitVeterinaireImpl() ;
	}
	
	@Bean
    CommandeClientService getCCS() {
		return new CommandeClientImpl() ;
	}
	
	
	
	
	
	
	
	
	
}
