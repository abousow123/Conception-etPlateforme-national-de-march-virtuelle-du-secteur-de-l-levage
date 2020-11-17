package org.sid.metier;

import org.sid.entities.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> getCategories();
    Optional<Category> getCategory(String id);
    Category saveCategory(Category category);
    boolean deleteCategory(String id);
    Category updateCategory(Category category,String ref);
}
