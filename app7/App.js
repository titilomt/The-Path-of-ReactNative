import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Topo, Resultado, Painel } from './src/components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { num1: '', num2: '', operacao: '', res: '' };
  
    this.calcular = this.calcular.bind(this);
        
    this.atualizarValor = this.atualizarValor.bind(this);
    
    this.atualizarOperacao = this.atualizarOperacao.bind(this);
  }

  calcular() {
    let res = 0;
    
    switch (this.state.operacao){
      case 'sum': res = parseFloat(this.state.num1) + parseFloat(this.state.num2); 
        break;
      case 'sub': res = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default : res = 0;
        break;
    }

    this.setState({ res });
  }

  atualizarValor(nome, value) {
    const obj = {};

    obj[nome] = value;
    
    this.setState(obj);        
  }

  atualizarOperacao(oper){
    this.setState({ operacao: oper })
  }
  
  render() {
    return (
      <View>
        <Topo />
        <Resultado res={this.state.res}/>
        <Painel 
          num1={this.state.num1}
          num1={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizarOperacao={this.atualizarOperacao}
          atualizarValor={this.atualizarValor}
        />
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
});
