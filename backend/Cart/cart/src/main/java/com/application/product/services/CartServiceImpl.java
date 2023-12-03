package com.application.product.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.product.DTO.CartDTO;
import com.application.product.models.Cart;
import com.application.product.repository.CartRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart save(CartDTO data) {

        var cart = Cart.builder().userId(data.userId()).products(data.products()).build();
        return cartRepository.save(cart);
    }

    @Override
    public Cart retrieveByUserId(String userId) {

        var cart = cartRepository.findByUserId(userId).get();
        return cart;
        

    }
    
}
