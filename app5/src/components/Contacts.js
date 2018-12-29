import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import NavBar from './NavBar';

const detailContacts = require('../img/detalhe_contato.png');

export default class Contacts extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <StatusBar 
                backgroundColor='#61BD8C'
            />
            <NavBar goBack navigator={this.props.navigator} colorBackground='#61BD8C' />

            <View style={styles.headerContacts}>
                <Image source={detailContacts}/>
                <Text style={styles.txtTitle}>Nossos Contatos</Text>    
            </View>
            <View style={styles.contactsDetail}>
                <Text style={styles.txtDetail}>Tel: (31) 12345-6789</Text>
                <Text style={styles.txtDetail}>Email: email@email.com</Text>
                <Text style={styles.txtDetail}>Lorem ipsum dolorem</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContacts: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitle: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    contactsDetail: {
        padding: 20,
        marginTop: 20
    },
    txtDetail: {
        fontSize: 18
    }
});
