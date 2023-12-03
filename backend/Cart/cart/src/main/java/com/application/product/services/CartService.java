package com.application.product.services;

import com.application.product.DTO.CartDTO;
import com.application.product.models.Cart;

public interface CartService {
    
    Cart save(CartDTO data);

    Cart retrieveByUserId(String userId);

}
