package com.application.product.exceptions;

public class ProductNotFoundException extends RuntimeException{

    private static final long SerialVersionUID = 5071646428281007896L;

    public ProductNotFoundException(String message){

        super(message);
    }
}
