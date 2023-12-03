package com.application.product.DTO;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public record ProductDTO(

        @NotNull @NotEmpty int category_id,

        @NotNull @NotEmpty MultipartFile product_img,
        @NotNull @NotEmpty String product_name,

        @NotNull @NotEmpty BigDecimal price,

        @NotNull @NotEmpty int quantity,


        String description

        ) {




}
