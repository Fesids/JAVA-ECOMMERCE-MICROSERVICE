package com.application.product.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.product.models.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

    Optional<Cart> findByUserId(String userId);
    
}
