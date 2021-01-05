package com.devsuperior.dsdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.services.ProductService;

// Poderia também ser no subpacote "resources".
// Essa classe é o controlador REST para trabalhar com o produto

@RestController // Criar o controlador rest
@RequestMapping(value = "/products") // Defini o caminho do recurso
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	// Criando um endpoint
	// ResponseEntity(tipo da resposta do método) - tipo especial do SpringBoot que vai encapsula uma resposta de uma requisição http
	// Entre <> parametro para o tipo do corpo da resposta
	@GetMapping // Será um endpoint do método GET http
	public ResponseEntity<List<ProductDTO>> findAll() { 
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list); /* .ok - é um método que cria uma resposta que deu sucesso, que é o código 200 http, no http quando a resposta
da 200 e alguma coisa, quer dizer que deu certo */
		// .body - defini o corpo da resposta
	}
}