package com.application.product.UTILS;

import java.net.URI;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public interface GeneralUtils {
    
    static URI toURI(String uri){
        return URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path(uri).toUriString());
    }
}
