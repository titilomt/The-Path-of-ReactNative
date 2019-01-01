import React, { Component } from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
    <View>
        <Entrada 
            num1={props.num1} 
            num2={props.num2} 
            atualizarValor={props.atualizarValor}
        />
        <Operacao 
            oper={props.operacao} 
            acao={props.atualizarOperacao}
        />
        <Comando acao={props.calcular}/>
    </View>
);

export { Painel }; 
