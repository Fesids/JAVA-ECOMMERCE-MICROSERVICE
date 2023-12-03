package com.micro.registration.configurations.auth;


import com.micro.registration.DTO.AuthDTO;
import com.micro.registration.DTO.ServiceResponse;
import com.micro.registration.DTO.UserDTO;
import com.micro.registration.configurations.JwtService;
import com.micro.registration.models.User;
import com.micro.registration.repository.UserRepository;
import com.micro.registration.services.UserService;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetail;

    @Autowired
    private UserService userService;



    public User register(UserDTO userDTO, String role){
        User user = userService.saveUser(role, userDTO);
        String jwt = jwtService.generateToken(user);

        return user;

    }

    public ServiceResponse login(AuthDTO userDTO){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDTO.email(),
                        userDTO.password())
        );

        var user = this.userDetail.loadUserByUsername(userDTO.email());
        //var userLogin = userService.login(userDTO.email(), userDTO.password());
        String token = jwtService.generateToken(user);

        return ServiceResponse.builder().token(token).build();
    }



}














