import React from 'react';
import { StyleSheet, Picker } from 'react-native';

export default class Operacao extends React.Component {    
    render() {
        return (
            <Picker 
                style={styles.operacao}
                selectedValue={ this.props.operacao }
                onValueChange={ value=>{ this.props.atualizaOperacao(value) } }
            >
                <Picker.Item label='Soma' value='sum' />
                <Picker.Item label='Subtração' value='sub' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBotton: 15
    }
});
