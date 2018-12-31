import React from 'react';
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../img/logo.png');
const btnPlay = require('../img/botao_jogar.png');
const btnAbout = require('../img/sobre_jogo.png');
const btnOthers = require('../img/outros_jogos.png');

export default class Principal extends React.Component {
  render() {
    return (
        <View style={styles.pricipal}>
      
            <View style={styles.present}>
                <Image source={logo}/>
                <TouchableHighlight
                    onPress={_=>{ Actions.resultado() }}
                >
                    <Image source={btnPlay}/>
                </TouchableHighlight>
            </View>

            <View style={styles.footer}>
                <TouchableHighlight
                    onPress={_=>{ Actions.sobrejogo() }}
                >
                    <Image source={btnAbout}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={_=>{ Actions.outrosjogos() }}
                >
                    <Image source={btnOthers}/>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  present: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
