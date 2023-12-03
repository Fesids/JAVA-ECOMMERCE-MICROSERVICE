package com.application.category.controllers;

import com.application.category.DTO.CategoryDTO;
import com.application.category.models.Category;
import com.application.category.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/api/v1/category/teste")
    public ResponseEntity<?> teste(){
        return ResponseEntity.ok().body("teste");
    }

    @GetMapping("/api/v1/category/all")
    public ResponseEntity<List<Category>> getAllCategoriesController(){
        return ResponseEntity.ok().body(categoryService.retrieveAllCategories().stream().toList());

    }


    @GetMapping("/api/v1/category/{id}")
    public ResponseEntity<?> getCategoryByIdController(@PathVariable("id") Long id){

        if(id == null){
            return ResponseEntity.badRequest().body("No ID provided");
        }

        var category_detail = categoryService.retrieveCategoryById(id);

        return ResponseEntity.ok().body(category_detail);

    }

    @PostMapping("/api/v1/category")
    public ResponseEntity<Category> createCategoryController(@RequestBody CategoryDTO requestBody){

        var category_resp = categoryService.save(requestBody);

        return ResponseEntity.ok().body(category_resp);


    }




}
