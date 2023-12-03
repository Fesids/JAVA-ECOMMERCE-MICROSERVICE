package com.application.product.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.application.product.DTO.CartDTO;
import com.application.product.UTILS.GeneralUtils;
import com.application.product.services.CartService;

@RestController
@CrossOrigin("*")
public class CartController {
    
    @Autowired
    private CartService cartService;

    @GetMapping("/api/v1/cart/teste")
    public ResponseEntity<String> teste(){
        return ResponseEntity.ok().body("teste");
    }


    @PostMapping("/api/v1/cart")
    public ResponseEntity<?> createCart(@RequestBody CartDTO data){

        var response = cartService.save(data);
        URI uri = GeneralUtils.toURI("/cart");

        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping("/api/v1/cart/{userId}")
    public ResponseEntity<?> getCartByUserId(@PathVariable("userId") String userId){

        var response = cartService.retrieveByUserId(userId);

        return ResponseEntity.ok().body(response);

    }


}
