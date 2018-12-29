import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const backIcon = require('../img/btn_voltar.png');

export default class NavBar extends React.Component {
  render() {
    if(this.props.goBack){
        return (
            <View style={[styles.barTitle, { backgroundColor: this.props.colorBackground }]}>
                <TouchableHighlight
                    underlayColor={this.props.colorBackground}
                    activeOpacity={0.3}
                    onPress={_=>{this.props.navigator.pop()}}
                >
                    <Image source={backIcon}/>
                </TouchableHighlight>
                <Text style={styles.txtTitle}>ATM consultoria</Text>
            </View>
        );
    }
    
    return (
        <View style={styles.barTitle}>
            <Text style={styles.txtTitle}>ATM consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barTitle: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    txtTitle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
