package org.sid.web;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Category;
import org.sid.metier.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryRest {

	@Autowired
	private CategoryService categoryService;

	@RequestMapping(value = "/Categories", method = RequestMethod.GET)
	public List<Category> getCategories() {
		return categoryService.getCategories() ;
	}

	@RequestMapping(value = "/Categories/{ref}", method = RequestMethod.GET)
	public Optional<Category> getCategory(@PathVariable("ref") String ref) {
		return categoryService.getCategory(ref);
	}
	
/*	@RequestMapping(value="/chercherProduitElevages",method=RequestMethod.GET)
	public Page<Categorieprodelevage> chercher(@RequestParam(name="mc",defaultValue="") String mc,
			@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
		
		return categorieElevageRepository.chercherparCategorie("%"+mc+"%", new PageRequest(page, size)) ;
	}*/

	@RequestMapping(value = "/Categories", method = RequestMethod.POST)
	public Category saveCategory(@RequestBody Category category) {
		return categoryService.saveCategory(category);
	}

	@RequestMapping(value = "/Categories/{ref}", method = RequestMethod.DELETE)
	public boolean deleteCategory(@PathVariable("ref") String ref) {
		categoryService.deleteCategory(ref);
		return true;
	}

	@RequestMapping(value = "/Categories/{ref}", method = RequestMethod.PUT)
	public Category updateCategorieProdElevage(@RequestBody Category category,@PathVariable("ref") String ref) {
		return categoryService.updateCategory(category,ref);
	}

}
