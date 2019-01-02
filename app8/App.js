import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { nome: '' };
  }
  
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA5uIZrsH1laUsR86RgnHR-XZcDyB_pn28",
      authDomain: "udemy-teste-72157.firebaseapp.com",
      databaseURL: "https://udemy-teste-72157.firebaseio.com",
      projectId: "udemy-teste-72157",
      storageBucket: "udemy-teste-72157.appspot.com",
      messagingSenderId: "756188098256"
    };
    firebase.initializeApp(config);    
  }

  cadastrarUsuario() {
    let user = {
      email: "a@a.gmail.com",
      senha: "1ds frew43"
    };

    const userAuth = firebase.auth();

    userAuth.createUserWithEmailAndPassword(user.email, user.senha).catch(err => { console.log(err); alert(err.code)});
  }

  verUser() {
    const userAuth = firebase.auth();

    userAuth.onAuthStateChanged(user => {
      if(user) {
        alert('usuario logado');
      } else {
        alert('usuario vazio');
      }
    });
    // const user = userAuth.currentUser;

    // if(user) {
    //   alert('usuario logado');
    // } else {
    //   alert('usuario vazio');
    // }
  }

  singout() {
    const user = firebase.auth();
    user.signOut();
  }

  singin() {
    let user = {
      email: "a@a.gmail.com",
      senha: "1ds frew43"
    };

    const userAuth = firebase.auth();

    userAuth.signInWithEmailAndPassword(user.email, user.senha);
  }

  saveData() {
    let fun = firebase.database().ref("funcionarios");

    fun.push().set({
      nome: "Josiane",
      altura: "1,77",
      peso: "70kg"
    });
  }

  listData() {
    let fun = firebase.database().ref("funcionarios");

    fun.on('value', (snapshot) => {
      let x = snapshot.val();
      console.log(x);
      this.setState( {nome: x.nome} );
      alert(x.nome);
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title='Cadastrar Usuario'
          onPress={_=>{this.cadastrarUsuario()}}
        />
        <View style={styles.button}>
          <Button
            title='Verificar usuario logado'
            onPress={_=>{this.verUser()}}
          />
          <Text>{this.state.nome}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title='Deslogar usuario'
            onPress={_=>{this.singout()}}
          />
          <Text>{this.state.nome}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title='Logar usuario'
            onPress={_=>{this.singin()}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});
