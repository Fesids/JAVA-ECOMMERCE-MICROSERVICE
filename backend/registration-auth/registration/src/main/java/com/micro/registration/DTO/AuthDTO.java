package com.micro.registration.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record AuthDTO(
        @NotEmpty @NotNull String email,

        @NotEmpty @NotNull String password
) {
}
