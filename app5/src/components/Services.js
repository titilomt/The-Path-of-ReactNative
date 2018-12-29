import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import NavBar from './NavBar';

const detailServices = require('../img/detalhe_servico.png');

export default class Services extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <StatusBar 
                backgroundColor='#19D1C8'
            />
            
            <NavBar goBack navigator={this.props.navigator} colorBackground='#19D1C8' />

            <View style={styles.headerService}>
                <Image source={detailServices}/>
                <Text style={styles.txtTitle}>Nosso Serviço</Text>    
            </View>

            <View style={styles.empriseDetail}>
                <Text style={styles.txtDetail}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus rhoncus vulputate nulla. 
                </Text>
                
                <Text style={styles.txtDetail}>
                    In felis metus, ultricies ut pretium a, faucibus sit amet tellus. 
                    Etiam a lorem ut diam laoreet finibus. 
                </Text>    
                <Text style={styles.txtDetail}>
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
    headerService: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitle: {
        fontSize: 30,
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    servicoDetail: {
        padding: 20,
        marginTop: 20
    },
    txtDetail: {
        fontSize: 18
    }
});
