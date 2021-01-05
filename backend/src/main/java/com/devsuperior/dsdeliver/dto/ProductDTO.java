package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperior.dsdeliver.entities.Product;

// Convertendo as entidades para DTO
// ProductDTO é um objeto para carregar os dados correspondente a um produto
// Essa classe será um objeto para carregar os dados do produto da camada de web para devolver para o frontend
public class ProductDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageUri;

	public ProductDTO() { // Padrão Java, tem que ter o construtor sem argumentos
	}

	// Copiar os dados de uma produto para cá, para facilitar faremos isso com construtor.
	public ProductDTO(Long id, String name, Double price, String description, String imageUri) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}
	
	// Não tem problema ter vários construtores, é até bom para o programador ter mais opções para instanciar os objetos.
	public ProductDTO(Product entity) {
		// Nesse caso como não tem ambiguidade do que é atributo e do que é parâmetro do método, pode apagar a palavra "this".
		id = entity.getId(); // Pegando o id da entidade e copiando para o dto.
		name = entity.getName();
		price = entity.getPrice();
		description = entity.getDescription();
		imageUri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}
}