package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	/* Annotation para consulta no JPA, essa consulta não está no SQL e sim numa linguagem especifica da JPA, que ´o JPQL, lembra um pouco o SQL, tem alguns
recursos que são análogos, porém possui várias peculariedades*/
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products " // Na JPQL tem que definir um apelido para o objeto que buscará, nesse caso, "obj".
            + " WHERE obj.status = 0 ORDER BY obj.moment ASC") // Na hora de fazer o "FROM" tem que escrever exatamente igual ao nome da classe
	// Para fazer uma busca que já busca os pedidos com os seus produtos correspondentes, tem que fazer um JOIN
	/* JOIN FETCH - esse join faz o inerjoin, toca o banco de dados uma vez só e traz todo mundo junto já com os registros correspondentes. Na sua frente
coloca o atributo que representa a associação */
	// status 0 é o status pendente
    List<Order> findOrdersWithProducts();
}