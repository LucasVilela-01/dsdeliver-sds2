import { useNavigation } from '@react-navigation/native';
import React from 'react'; // Nas novas versões do react web, não é ncessário add essa import, mas no react native ainda é
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {

    const navigation = useNavigation(); // é um hook(funções especiais do react) do react

    const handleOnPress = () => {
      navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}> 
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.text}>DS Delivery</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

/* tag Image - responsavel por mostrar uma imagem no app, tem um atributo obrigatório que é o "source", e o require é uma forma de exporta, inclusive é
a que documentação recomenda */

// Quando se tem uma propriedade com mais de 1 palavra, junta essas palavras e usa o padrão camelcase

// Quando indicar o px, apenas deixe o número

// </TouchableWithoutFeedback> - temos que usar essa tag, pois por padrão as views não são clicavéis, e assim conseguimos capturar o evento de clique

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C', // A diferença aqui, é que é um objeto e não tem ";" no final, e a cor(hexadecimal) é dentro de aspas simples.
        height: 90,
        paddingTop: 50,
        flexDirection: 'row', // Aqui ele muda o esquema de layout que é coluna e fica como linha
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24, /* Por padrão, o React Native não suporta a medida "em", temos que trabalhar com  outras medidas, converte de em para px,
        multiplicando por 16 (0.015 * 16 = 0.24) */
        color: '#FFF', // Quando o código da cor repete 6x, simplesmente, deixe apenas os 3 primeiros e dentro de aspas simples
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
  }
});

// export default Header; - Pode exportar dessa forma também, igual no front-web, é que questão de gosto, mas também pode usar na forma como está na função