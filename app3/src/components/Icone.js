import React from 'react';
import { Text, View, Image } from 'react-native';

const imgJan = require('../../img/pedra.png');
const imgKen = require('../../img/papel.png');
const imgPo = require('../../img/tesoura.png');

export default class Icone extends React.Component {
  render(){
    if(this.props.choise == 'jan'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>
            {this.props.player}
          </Text>
          <Image source={imgJan} />
        </View>
      );
    } else if(this.props.choise == 'ken'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>
            {this.props.player}
          </Text>
          <Image source={imgKen} />
        </View>
      );
    } else if (this.props.choise == 'po') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>
            {this.props.player}
          </Text>
          <Image source={imgPo} />
        </View>
      );
    }
    return false;
  }
};

const styles = {
  txtPlayer: {
      fontSize: 18
  },
  icone : {
      alignItems: 'center',
      marginBotton: 20
  }
};
