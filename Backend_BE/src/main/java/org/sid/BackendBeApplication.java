package org.sid;

import org.sid.Account.AccountService;
import org.sid.dao.*;
import org.sid.entities.*;
import org.sid.metier.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Date;


@SpringBootApplication
public class BackendBeApplication implements CommandLineRunner {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private DepartementRepository departementRepository;
    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private AccountService accountService;

    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private TypeAnimalRepository typeAnimalRepository;


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


        Region region1 = new Region();
        region1.setNomregion("Dakar");
        Region region2 = new Region();
        region2.setNomregion("Thiès");

        regionRepository.save(region1);
        regionRepository.save(region2);

        Departement dp1 = new Departement();
        dp1.setNomdepartement("Guédiawaye");
        dp1.setRegion(region1);

        Departement dp2 = new Departement();
        dp2.setNomdepartement("Pikine");
        dp2.setRegion(region1);

        departementRepository.save(dp1);
        departementRepository.save(dp2);

        Role role = new Role();
        role.setLibelle("admin");

        Role role1 = new Role();
        role1.setLibelle("client");


        Utilisateur user = new Utilisateur();
        user.setNom("SOW");
        user.setPrenom("Abou");
        user.setAdresse("guédiawaye");
        user.setEmail("abou@gmail.com");
        user.setLogin("abou");
        user.setTelephone("777987315");
        user.setPassword("12345");
        user.setDepartement(dp1);

        Utilisateur user1 = new Utilisateur();
        user1.setNom("Dia");
        user1.setPrenom("Faty");
        user1.setAdresse("guédiawaye");
        user1.setEmail("faty@gmail.com");
        user1.setLogin("faty");
        user1.setTelephone("777987415");
        user1.setPassword("12345");
        user1.setDepartement(dp1);


        accountService.saveRole(role);
        accountService.saveRole(role1);

        accountService.saveCompte(user, user.getPassword());
        accountService.saveCompte(user1, user1.getPassword());

        accountService.addRoleToCompte(user.getEmail(), role.getLibelle());
        accountService.addRoleToCompte(user1.getEmail(), role1.getLibelle());

        Typeanimal typeanimal = new Typeanimal();
        typeanimal.setLibelle("Bovin");

        typeAnimalRepository.save(typeanimal);

        Animal animal = new Animal();

        animal.setNom("mouton");
        animal.setSexe("male");
        animal.setAge(2);
        animal.setCodegenetique("ladoum");
        animal.setDatepublication(new Date());
        animal.setDescription("test");
        animal.setPoids(50);
        animal.setTaille(1);
        animal.setTypeanimal(typeAnimalRepository.findByName("Bovin"));
        animal.setPrix(150000.0);
        animal.setUtilisateur(accountService.loadCompteBylogin("abou@gmail.com"));

        animalRepository.save(animal);


    }

    @Bean
    BCryptPasswordEncoder getBCPE() {
        return new BCryptPasswordEncoder();
    }

  /*  @Bean
    AnimalService getAnimS() {
        return new AnimalImp();
    }*/

 /*   @Bean
    ClientService getCS() {
        return new ClientImpl();
    }

    @Bean
    ProduitService getPES() {
        return new ProduitImpl();
    }

    @Bean
    CommandeService getCCS() {
        return new CommandeImpl();
    }

    @Bean
    CategoryService getCat() {
        return new CategoryImp();
    }

    @Bean
    LigneCommandeAnimalService getLigneAni() {
        return new LigneCommandeAnimalImpl();
    }

    @Bean
    LigneCommandeProduitService ligneComProd() {
        return new LigneCommandeProduitImpl();
    }

    @Bean
    RoleService getRoles() {
        return new RoleImpl();
    }

    @Bean
    UserService getUser() {
        return new UserImp();
    }

    @Bean
    UtilsService getUtils() {
        return new UtilsImpl();
    }
*/

}
