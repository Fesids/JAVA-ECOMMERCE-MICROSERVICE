package com.micro.registration.UTILS;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

public interface GeneralUtils {

    static String passEncode(String password){
        return new BCryptPasswordEncoder().encode(password);
    }

    static URI toUri(String uri){
        return URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path(uri).toString());
    }

}
