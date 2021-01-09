import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]); // Como capturar os pedidos que já estão dentro do react

  // Criando um estado para mostrar o loading enquanto esses pedidos não estiverem prontos
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation(); // Os hooks são sempre colocados no topo do componente

  /* Forçando o recarregamento do componente, porque por padrão, quando fazemos as navegações, o componente não é inicializado novamente, então temos
que forçar ele reinicializar para ele buscar os pedidos */
  const isFocused = useIsFocused(); /* Aqui quer dizer que toda vez que renderiza essa tela de listagem dos pedidos, ele muda o valor dessa variavel 
aqui, então hora ela será "true"(quando entra na tela) e outra será "false"(quando sai da tela) */

const fetchData = () => { // Busca os dados que são os pedidos
  setIsLoading(true); // Quando entrar na tela, mostrará o loading
  fetchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
    .finally(() => setIsLoading(false)); // E quando acabar, independente se der sucesso ou erro, o loading some
}
// Diferente do browser, o console é o próprio terminal
// Alert - abre uma jaela dizendo que o erro foi informado

// Aqui é uma técnica para forçar a renderização do app
  useEffect(() => {
    if (isFocused) { // Se meu componente estiver com foco, significa que esta sendo renderizado, então chama o método fetchData
      fetchData();
    }
  }, [isFocused]); /* Passando o isFocused como dependencia do useEffect, então toda vez que esse isFocused mudar, ele executa o código dentro desse
  useEffect novamente */
  

  // Criando uma constante, assimque clicar no pedido, libera a navegação

  const handleOnPress = (order: Order) => { /* Quando essa função é chamada, ela navega para o OrderDetails, passando como parametro o pedido(order)
    selecionado pelo usuário */
    navigation.navigate('OrderDetails', { 
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
         {isLoading ? (
           <Text>Buscando pedidos...</Text>
         ) : (
          orders.map(order => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)} // Aqui chama a função onPress passando o pedido selecionado pelo usuário
            >
               <OrderCard order={order}/>
            </TouchableWithoutFeedback>
          ))
         )}
      </ScrollView>
    </>
  );
}

// {atributo ? (parametro) : (parametro) } - operador ternário, várias linguagens utilizam
// ? - quer dizer "se" e : "senão"

/* ScrollView - libera o scroll do app, pois por padrão o react native tem o scroll bloqueado, então quando queremos utilizar o scrooll, devemos usar
essa tag e não a tag view */

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});

// Usar % fica meio que responsivo