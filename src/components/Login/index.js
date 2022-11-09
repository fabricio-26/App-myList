import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import firebase from '../../services/firebaseConnection';



export default function Login() {
  const [type, setType] = useState('login')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){
    if(type === 'login'){        //Fazer Login
      const user = firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user) => {
          console.log(user)
        })
    }else{                       //Cadastrar user
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
      }).catch((error) => {
        console.log(error)
        alert('Ops, parece que algo está errado!');
        return;
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Seu e-mail'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        placeholder='**********'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      <TouchableOpacity
      style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6fe': '#141414'}]}
      onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          { type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastra' : 'login')}>
        <Text style={{textAlign:'center'}}>
        { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta!'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#F2F6FC',
    paddingHorizontal: 12
  },
  input:{
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
    height:45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  handleLogin:{
    alignItems: 'center',
    justifyContent:'center',
    height: 45,
    marginBottom: 10
  },
  loginText:{
    color:'#FFF',
    fontSize: 17
  }
})