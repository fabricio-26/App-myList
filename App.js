import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import Login from './src/components/Login/index'

console.disableYellowBox=true;

export default function App() {
  const [user, setUser] = useState(null)
  
 



  if(!user){
    return <Login/>
  }

 return (
   <SafeAreaView style={styles.container}>
    <Text>DENTRO DA TELA DE TAREFAS</Text>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:25,
    paddingHorizontal: 10,
    backgroundColor:'#f2f6fc'
  },
  
})