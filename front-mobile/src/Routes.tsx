import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Orders from "./Orders";

/* Adicionar a pilha de navegação no app, pensar nas rotas como pilha, então se você clica em um botão que te redireciona para uma outra rota, você está
empilhando/adicionando um item naquela pilha e se apertar em voltar para a página anterior, você tem que desempilhar, então essa é a ideia das rotas */

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            // Por padrão, caso leia a documentação, perceberá que ele adiciona alguns estilos no app e vamos removê-los
                headerMode="none"
                screenOptions={{
                    cardStyle: { // cardStyle - é o estilo da nossa aplicação
                        backgroundColor: '#FFF' // Todas as telas do app fiquem brancos
                    }
                }}
            > 
                <Stack.Screen name="Home" component={Home}></Stack.Screen> 
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

// NavigationContainer - é como se fosse o browser router do react router dom, encapsula todas as rotas da aplicação
// {{}} - dentro da 2º chave é adicionado um objeto dentor do código JS
// Diferente um pouco do React Web para React Native, não temos URL, mas temos nomes para as rotas(definido no Stack.Screen)
// atributo componente entre {} diz qual componente será renderizado para aquela página