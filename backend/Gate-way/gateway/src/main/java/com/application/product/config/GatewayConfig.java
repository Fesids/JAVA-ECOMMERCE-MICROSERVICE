package com.application.product.config;

import com.application.product.filter.AuthenticationFilter;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouterLocator(RouteLocatorBuilder builder){


        return builder.routes()
                .route("product", r -> r.path("/product/**")
                        .filters(f -> f.rewritePath("/product/(?<productId>.*)", "/api/v1/product/${productId}"))
                        .uri("lb://product"))
                .route("product", r -> r
                        .path("/api/v1/product/all")

                        //.filters(f -> f.rewritePath("/product", "/api/v1/product/all"))
                        .uri("lb://product"))
                .route("product", r -> r
                        .path("/api/v1/product/new")
                        //.filters(f -> f.rewritePath("/product", "/api/v1/product/all"))
                        .uri("lb://product"))


                // AUTH ROUTE
                .route("auth", r -> r.path("/register/**")
                        .filters(f -> f.rewritePath("/register/(?<role>.*)", "/api/v1/auth/register/${role}"))
                        .uri("lb://auth"))

                .route("auth", r -> r
                        .path("/api/v1/auth/login")
                        .uri("lb://auth")
                )



                .build();
    }
}
*/