package org.sid.services;

import java.util.List;
import java.util.Optional;

import org.sid.dao.RegionRepository;
import org.sid.entities.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegionRest {
	
	@Autowired
	public RegionRepository regionRepository ;
	
	@RequestMapping(value = "/Regions",method=RequestMethod.GET)
	public List<Region> getRegions(){
		return regionRepository.findAll() ;
	}
	
	@RequestMapping(value = "/Regions/{ref}",method=RequestMethod.GET)
	public Optional<Region> getRegion(@PathVariable("ref") int ref){
		return regionRepository.findById(ref) ;
	}
	
	@RequestMapping(value = "/Regions",method=RequestMethod.POST)
	public Region saveRegion(@RequestBody Region region){
		return regionRepository.save(region);
	}

	@RequestMapping(value = "/Regions/{ref}",method=RequestMethod.DELETE)
	public boolean deleteRegion(@PathVariable("ref") int ref){
		regionRepository.deleteById(ref); 
		return true;
	}
	
	@RequestMapping(value = "/Regions",method=RequestMethod.PUT)
	public Region updateRegion(@RequestBody Region region){
		return regionRepository.saveAndFlush(region);
	}
}
