package com.application.product.DTO;

import java.util.ArrayList;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CartDTO(

    @NotNull @NotEmpty String userId,

    ArrayList<Integer> products



) {
    
}
