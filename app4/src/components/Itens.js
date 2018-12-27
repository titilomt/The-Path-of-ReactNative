import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Itens extends React.Component {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={styles.imgStle} source={{uri: this.props.item.foto}}/>
                </View>
            
                <View style={styles.itemDetails}>
                    <Text style={styles.txtTitle}>{this.props.item.titulo}</Text>
                    <Text style={styles.txtMoney}>R$ {this.props.item.valor}</Text>
                    <Text style={styles.txtDetails}>{this.props.item.local_anuncio}</Text>
                    <Text style={styles.txtDetails}>{this.props.item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    foto: {
        width: 102,
        height: 102
    },
    imgStle:{
        height: 100, 
        width: 100 
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    itemDetails: {
        marginLeft: 20,
        flex: 1
    },
    txtTitle: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtMoney: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetails: {
        fontSize: 16
    }
  });
