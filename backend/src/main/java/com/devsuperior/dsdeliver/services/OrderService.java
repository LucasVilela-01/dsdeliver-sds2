package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {
				
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts(); // repository retorna entidade
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		// Salvar no banco de dados
		// Instant.now() -  instanciando um objeto de instant com o instant atual
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		// Antes de salvar no banco, temos associar esse pedido com os produtos que vieram no dto também
		for (ProductDTO p : dto.getProducts()) {
			/* .getOne - instancia um produto, mas não vai no banco de dados, simplesmente cria uma entidade gerenciada pela JPA, para que quando o pedido for
			salvo, ele também salve as associações de quais produtos estão nesse pedido */
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		// Salvar o pedido no banco
		order = repository.save(order);
		return new OrderDTO(order);
	}
}