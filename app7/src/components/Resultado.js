import React from 'react';
import { View, Text } from 'react-native';
import Visor from './Visor';

const Resultado = props => (
    <Visor resultado={props.res}/>
);

export { Resultado };
