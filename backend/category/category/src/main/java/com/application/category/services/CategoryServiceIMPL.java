package com.application.category.services;

import com.application.category.DTO.CategoryDTO;
import com.application.category.models.Category;
import com.application.category.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Field;
import java.util.Collection;

@Service
@Transactional
public class CategoryServiceIMPL implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Category save(CategoryDTO body) {
        Field[] fields = body.getClass().getDeclaredFields();

        for(Field f : fields){
            if(f == null){
                throw new RuntimeException("Some required field are missing");
            }
        }

        var new_category = Category.builder().name(body.name())
                .available(body.available()).build();
        return categoryRepository.save(new_category);
    }

    @Override
    public Category retrieveCategoryById(Long id) {
        Category category = categoryRepository.getReferenceById(id);

        return category;
    }

    @Override
    public Collection<Category> retrieveAllCategories() {
        return categoryRepository.findAll();
    }
}
