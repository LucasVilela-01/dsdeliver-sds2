package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service // Essa classe é um componente registrado no SpringBoot, podendo ser injetado em outros componentes
public class ProductService {
				
	@Autowired /* Essa annotation já faz a resolução da dependencia de forma transparente
É um container de injeção de dependencia que gerencia tudo */
	private ProductRepository repository;
	
	// Garantindo que faz a transação fechando a conexão com o banco de dados, usa-se a annotation abaixo
	/* readOnly = true - coloca esse parametro, pois essa operação é somente de leitura, então para evitar o lock no banco de dados por ser transação, usa-se
o readOnly, assim a operação não fazerá o lock de escrita no banco de dados, tornando a operação mais rápido */
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		// Buscando os produtos no banco de dados usando o repository
		List<Product> list = repository.findAllByOrderByNameAsc();
		// Transformando a lista acima para uma lista ProductDTO
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList()); // Expressãp lambida
	}
	
}