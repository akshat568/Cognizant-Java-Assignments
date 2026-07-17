package com.cognizant.apigateway.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;

@Component
public class LoggingGlobalFilter implements GlobalFilter, Ordered {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingGlobalFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        LOGGER.info("Request received: {} {}",
                exchange.getRequest().getMethod(),
                exchange.getRequest().getURI().getPath());
        return chain.filter(exchange).then(Mono.fromRunnable(() ->
            LOGGER.info("Response status: {}",
                    exchange.getResponse().getStatusCode())
        ));
    }

    @Override
    public int getOrder() {
        return -1;
    }
}
