package com.devsuperior.dsdeliver.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private Environment env;

	@Override
	// Libera o acesso a aplicação para gerenciar o banco de dados h2, temos que efetuar isso, pois a aplicação do h2 não funcionaria corretamente.
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}
		
		http.cors().and().csrf().disable(); // Aqui libera o Cors baseado na configuração abaixo.
		/*Desabilitando a proteção contra csrf que é um tipo de ataque baseado em sessão, como a aplicação é baseado em REST não tem perigo contra esse
		tipo de ataque.
		*/
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // Não armazena estado
		http.authorizeRequests().anyRequest().permitAll(); // Libera o acesso a todas requisições.
	}
	
	/* 
	  Liberar o Cors, um recurso que os naevgadores possui que bloqueam quando uma aplicação que está em dominio tenta acessar uma aplicação que está 
	  em um outro dominio, por padrão é bloqueado por motivo de segurança.
	  Nesse caso, está sendo liberado pois o beckend estará hospedado no Heroku e o frontend está hospedado em outro lugar, para queo o frontend possa
	  acessar o backend.
	*/
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}