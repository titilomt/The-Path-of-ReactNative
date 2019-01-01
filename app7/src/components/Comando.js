import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default props => (
    <Button style={styles.visor}
        title='Calcular'
        onPress={props.acao()}
    />
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});
