package org.sid.web;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.sid.entities.Commande;
import org.sid.metier.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommandeRest {

    @Autowired
    private CommandeService commandeService;

    @RequestMapping(value = "/Commandes", method = RequestMethod.GET)
    public List<Commande> getCommandes() {
        return commandeService.getCommandes();

    }


    @RequestMapping(value = "/Commandes/{ref}", method = RequestMethod.GET)
    public Optional<Commande> getCommande(@PathVariable("ref") String ref) {
        return commandeService.getCommande(ref);

    }


    @RequestMapping(value = "/Commandes", method = RequestMethod.POST)
    public Commande saveCommande(@RequestBody Commande commande) throws ParseException {
        return commandeService.saveCommande(commande);
    }

    @RequestMapping(value = "/Commandes/{ref}", method = RequestMethod.DELETE)
    public boolean deleteCommande(@PathVariable("ref") String ref) {
        return commandeService.deleteCommande(ref) ;
    }

    @RequestMapping(value = "/Commandes/{ref}", method = RequestMethod.PUT)
    public Commande updateCommande(@RequestBody Commande commande,@PathVariable("ref") String ref) {
        return commandeService.updateCommande(commande,ref);
    }


}
