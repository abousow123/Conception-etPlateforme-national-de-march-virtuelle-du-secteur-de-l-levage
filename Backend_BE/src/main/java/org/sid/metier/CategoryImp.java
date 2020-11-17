package org.sid.metier;

import org.sid.dao.CategoryRepository;
import org.sid.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CategoryImp implements CategoryService{

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategories() {
        return null;
    }

    @Override
    public Optional<Category> getCategory(String id) {
        return null;
    }

    @Override
    public Category saveCategory(Category category) {
        return null;
    }

    @Override
    public boolean deleteCategory(String id) {
        return false;
    }

    @Override
    public Category updateCategory(Category category, String ref) {
        return null;
    }

}
