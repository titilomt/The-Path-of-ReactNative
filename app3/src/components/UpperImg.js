import React from 'react';
import { View, Image } from 'react-native';

const imglogo = require('../../img/jokenpo.png');

export default class UpperImg extends React.Component {
    
    render() {
        return (
            <View style={styles.imgMargin}>
                <Image source={imglogo}/>
            </View>
        );
    }
};

const styles = {
  imgMargin: {
    marginTop: 10
  }
};
