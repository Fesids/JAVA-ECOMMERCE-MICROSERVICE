package com.micro.registration.DTO;

import com.micro.registration.ENUMS.UserRoles;
import com.micro.registration.UTILS.GeneralUtils;
import com.micro.registration.models.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record UserDTO(

        @NotEmpty @NotNull String username,

        @NotEmpty @NotNull @Email String email,

        @NotEmpty @NotNull String password

) {

    public User createClient(UserDTO body){
        return User.builder().username(body.username)
                .email(body.email)
                .password(GeneralUtils.passEncode(body.password))
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .role(UserRoles.CLIENT)
                .build();

    }

    public User createAdmin(UserDTO body){
        return User.builder().username(body.username)
                .email(body.email)
                .password(GeneralUtils.passEncode(body.password))
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .role(UserRoles.ADMIN)

                .build();
    }

    public User createStaff(UserDTO body){
        return User.builder().username(body.username)
                .email(body.email)
                .password(GeneralUtils.passEncode(body.password))
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .role(UserRoles.STAFF)
                .build();
    }
}
