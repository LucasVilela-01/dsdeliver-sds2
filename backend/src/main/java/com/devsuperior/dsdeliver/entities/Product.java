package com.devsuperior.dsdeliver.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity /* Essa annotation em cima da classe, diz que os produtos corresponde a uma entidade do meu domínio que será gerenciada pelo JPA, pela ferramenta
de ORM. Nesse caso, essa classe corresponde a uma tabela do banco de dados.*/
@Table(name = "tb_product") // Especifica o nome da tabela no banco de dados.
public class Product implements Serializable { /* Essa implementação é uma boa medida para que os objetos do tipo produto possam ser transformados em
sequeência de bytes. É um padrão do Java, especialmente antigamente, teriam que fazer isso para evitar que o objeto desse problema na rede, na hora de 
acessar um arquivo, esse tipo de coisa. Mantém o padrão por boa medida. */

	private static final long serialVersionUID = 1L; // Diz que essa implementação da classe é da versão 1.
	
	// Defini a chave primaria da tabela e como se comportará.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Especifica que o Id será um número autoincrementavel pelo banco de dados.
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageUri;
	
	public Product() {
	}

	public Product(Long id, String name, Double price, String description, String imageUri) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override 
	// Método equals e hashcode - um produto possa ser comparado com outro pelo valor.
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}