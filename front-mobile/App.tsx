import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading'; // Isso apenas um loader que aparece na tela, enquanto a sua fonte não for carregada
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular, 
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

// StatusBar - é a barrinha que aparece no topo do celular(cor do icones que ficam no topo, por exemplo, a barra da bateria, icone wi-fi, entre outros)

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa 100% do vh e vw disponiveis
    
    /* alignItems: 'center',
    justifyContent: 'center', // o alignItems e justifyContent estão alinhando o elemento tanto verticalmente, quanto horizontalmente */
  },
});
