import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import NavBar from './NavBar';

const detailEmprise = require('../img/detalhe_empresa.png');

export default class Emprise extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <StatusBar 
                backgroundColor='#EC7148'
            />

            <NavBar goBack navigator={this.props.navigator} colorBackground='#EC7148' />

            <View style={styles.headerEmprise}>
                <Image source={detailEmprise}/>
                <Text style={styles.txtTitle}>A Empresa</Text>    
            </View>

            <View style={styles.empriseDetail}>
                <Text style={styles.txtDetail}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus rhoncus vulputate nulla. 
                    In felis metus, ultricies ut pretium a, faucibus sit amet tellus. 
                    Etiam a lorem ut diam laoreet finibus. 
                    Fusce eleifend quis justo sit amet sodales. 
                    Nam rutrum semper orci. Ut feugiat, mauris a elementum lobortis, ligula ante eleifend tortor, ut sagittis justo justo non sem. 
                    Etiam vitae blandit ex.
                </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerEmprise: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitle: {
        fontSize: 30,
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    empriseDetail: {
        padding: 20,
        marginTop: 20
    },
    txtDetail: {
        fontSize: 18
    }
});
