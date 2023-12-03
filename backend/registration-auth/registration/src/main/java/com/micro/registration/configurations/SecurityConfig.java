package com.micro.registration.configurations;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Autowired
    private AuthenticationFilter filter;

    @Autowired
    private AuthenticationProvider provider;


    @Bean
    CorsConfigurationSource corsConfigurationSource(){

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.addAllowedOrigin("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;

    }

    @Bean
    public SecurityFilterChain config(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity.cors().and()
                .csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests(
                        auth ->{
                            auth.requestMatchers(HttpMethod.GET, "/teste").permitAll();
                            auth.requestMatchers(HttpMethod.POST, "/api/v1/auth/register/**").permitAll();
                            auth.requestMatchers(HttpMethod.POST, "/api/v1/auth/login").permitAll();
                            auth.requestMatchers(HttpMethod.GET, "/detail/**").permitAll();
                            auth.requestMatchers(HttpMethod.GET, "/detail/email/**").permitAll();
                            auth.requestMatchers(HttpMethod.GET, "/testeHeader").permitAll();
                            auth.requestMatchers(HttpMethod.GET, "/api/v1/auth/**").permitAll();
                        }
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(provider)
                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

















}
