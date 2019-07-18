package org.sid.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.sid.dao.PayementComEleveurRepository;
import org.sid.entities.Payementcomeleveur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PayementComEleveurRest {
	
	
	
	@Autowired
	private PayementComEleveurRepository payementComEleveurRepository ;
	
	
	@RequestMapping(value = "/PayementComEleveurs",method=RequestMethod.GET)
	public List<Payementcomeleveur> getPayementComEleveurs(){
		return payementComEleveurRepository.findAll() ;
	}
	
	@RequestMapping(value = "/PayementComEleveurs/{ref}",method=RequestMethod.GET)
	public Optional<Payementcomeleveur> getPayementComEleveur(@PathVariable("ref") int ref){
		return payementComEleveurRepository .findById(ref) ;		
	}
	
	@RequestMapping(value = "/PayementComEleveurs",method=RequestMethod.POST)
	public Payementcomeleveur savePayementComEleveur(@RequestBody Payementcomeleveur payementcomeleveur){
		payementcomeleveur.setDatepayement(new Date());
		return payementComEleveurRepository.save(payementcomeleveur) ;
	}
	
	@RequestMapping(value = "/PayementComEleveurs",method=RequestMethod.DELETE)
	public boolean deletePayementComEleveur(@PathVariable("ref") int ref){
		payementComEleveurRepository.deleteById(ref);
		return true ;
	}
	
	@RequestMapping(value = "/PayementComEleveurs",method=RequestMethod.PUT)
	public Payementcomeleveur updatePayementComEleveur(@RequestBody Payementcomeleveur payementcomeleveur){
		return payementComEleveurRepository.saveAndFlush(payementcomeleveur) ;
	}

}
