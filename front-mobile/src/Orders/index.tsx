import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          
      </ScrollView>
    </>
  );
}

/* ScrollView - libera o scroll do app, pois por padrão o react native tem o scroll bloqueado, então quando queremos utilizar o scrooll, devemos usar
essa tag e não a tag view */

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});

// Usar % fica meio que responsivo