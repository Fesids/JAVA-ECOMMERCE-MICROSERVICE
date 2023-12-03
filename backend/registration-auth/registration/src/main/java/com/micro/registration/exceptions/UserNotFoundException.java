package com.micro.registration.exceptions;

public class UserNotFoundException extends RuntimeException{

    private static final Long serialVersionUID = 5071646428281007896L;

    public UserNotFoundException(String message){
        super(message);
    }

}
