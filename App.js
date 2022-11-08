import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;

export default function App() {
  const [nome, setNome] = useState('Carregando...')
  
  useEffect(() => {
    async function dados() {
      await firebase.database().ref('nome').on('value', (snapshot) => {
        setNome(snapshot.val())
      })
    }
    dados()
  },[])

 return (
   <View style={styles.container}>
      <Text style={styles.text}>Olá {nome}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:25
  },
  text:{
    fontSize: 25
  }
})