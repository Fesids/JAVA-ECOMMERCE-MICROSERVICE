package com.application.product.services;

import com.application.product.DTO.ProductDTO;
import com.application.product.models.Product;

import java.util.Collection;

public interface ProductService {


    Product save(ProductDTO body);

    Collection<Product> retrieveAll();

    Product retrieveProductById(Long id);

}
