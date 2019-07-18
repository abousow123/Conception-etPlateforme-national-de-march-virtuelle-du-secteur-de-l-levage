package org.sid.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.PayementComClientRepository;
import org.sid.entities.Payementcomclient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PayementComClientRest {
	
	@Autowired
	private PayementComClientRepository payementComClientRepository ;
	
	
	@RequestMapping(value = "/PayementComClients",method=RequestMethod.GET)
	public List<Payementcomclient> getPayementComClients(){
		return payementComClientRepository.findAll() ;
	}
	
	@RequestMapping(value = "/PayementComClients/{ref}",method=RequestMethod.GET)
	public Optional<Payementcomclient> getPayementComClient(@PathVariable("ref") int ref){
		return payementComClientRepository.findById(ref) ;		
	}
	
	@RequestMapping(value = "/PayementComClients",method=RequestMethod.POST)
	public Payementcomclient savePayementComClient(@RequestBody Payementcomclient payementcomclient){
		payementcomclient.setDatepayement(new Date());
		return payementComClientRepository.save(payementcomclient) ;
	}
	
	@RequestMapping(value = "/PayementComClients",method=RequestMethod.DELETE)
	public boolean deletePayementComClient(@PathVariable("ref") int ref){
		payementComClientRepository.deleteById(ref);
		return true ;
	}
	
	@RequestMapping(value = "/PayementComClients",method=RequestMethod.PUT)
	public Payementcomclient updatePayementComClient(@RequestBody Payementcomclient payementcomclient){
		return payementComClientRepository.saveAndFlush(payementcomclient) ;
	}

}
