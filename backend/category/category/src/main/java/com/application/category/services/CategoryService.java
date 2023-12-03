package com.application.category.services;

import com.application.category.DTO.CategoryDTO;
import com.application.category.models.Category;

import java.util.Collection;

public interface CategoryService {

    Category save(CategoryDTO body);
    Category retrieveCategoryById(Long id);

    Collection<Category> retrieveAllCategories();

}
