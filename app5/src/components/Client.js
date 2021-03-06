import React from 'react';
import { StatusBar, StyleSheet, View, Text, Image } from 'react-native';
import NavBar from './NavBar';

const detailClient = require('../img/detalhe_cliente.png');
const client1 = require('../img/cliente1.png');
const client2 = require('../img/cliente2.png');

export default class Principal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar 
                    backgroundColor='#B9C941'
                />

                <NavBar goBack navigation={this.props.navigation} colorBackground='#B9C941'/>

                <View style={styles.headerClient}>
                    <Image source={detailClient}/>
                    <Text style={styles.txtTitle}>Nossos Clientes</Text>    
                </View>
                <View style={styles.clientDetail}>
                    <Image source={client1}/>
                    <Text style={styles.txtDetail}>Lorem ipsum dolorem</Text>
                </View>
                <View style={styles.clientDetail}>
                    <Image source={client2}/>
                    <Text style={styles.txtDetail}>Lorem ipsum dolorem</Text>    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerClient: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitle: {
        fontSize: 20,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    clientDetail: {
        padding: 20,
        marginTop: 10
    },
    txtDetail: {
        fontSize: 18,
        marginLeft: 20
    }
});