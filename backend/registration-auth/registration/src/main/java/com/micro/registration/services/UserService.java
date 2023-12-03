package com.micro.registration.services;

import com.micro.registration.DTO.UserDTO;
import com.micro.registration.models.User;

import java.util.Optional;

import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;


public interface UserService {

    User saveUser(String urole, UserDTO body);

    Optional<User> retrieveByEmail(String email);

    Optional<User> retrieveByUsername(String username);

    User login(String email, String password);
}
