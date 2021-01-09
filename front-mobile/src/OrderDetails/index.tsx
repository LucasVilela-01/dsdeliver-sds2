import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

// Criando um tipo de dados para receber o pedido enviado pelo Orders
// Toda vez que tem um componente e o mesmo é atrelado a rota, o próprio StackNavigator insere algumas Props no componente
type Props = {
    // Lendo essas Props aqui
    route: {
        params: {
            order: Order;
        }
    }
}

export default function OrderDetails({ route } : Props) {
    // Técnica chamada Desustruturação(De-structuring)
    const { order } = route.params;

    // Extrair um order dentro do route
    // const order = route.params.order; // Outra forma de sintaxe

    const navigation = useNavigation();

    const handleOnCancel = () => {
      navigation.navigate('Orders')
    }

    const handleConfirmDelivery = () => {
        confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
                navigation.navigate('Orders')
            })
            .catch(() => {
                Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
            })
    }

/* DippingLink - é como se fosse um link profundo mesmo, é um link que inicializa outros aplicativos, como nesse caso, o google maps, como já está
instalado no celular, ele reconhece que você está abrindo um link do google maps e o mesmo se encarrega de abrir automaticamente */
    const handleStartNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard order={order}/>
                <RectButton style={styles.button} onPress={handleStartNavigation}>
                    <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleConfirmDelivery}>
                    <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleOnCancel}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </RectButton>
            </View>
        </>
    );
}

// OrderCard - renderiza aqui, pois já temos ele pronto e estamos reaproveitando o código

const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }
  });