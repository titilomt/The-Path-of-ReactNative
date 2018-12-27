import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { listaItens: []};
  }

  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html').then(results => {
      this.setState({ listaItens: results.data });
    }).catch(err => {console.log(err)});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.state.listaItens.map(item => {
          return (<Itens key={item.titulo} item={item}/>)
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD'
  }
});
