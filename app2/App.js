import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    
    const { textStyle, buttonStyle } = cssStyles; 
    
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/logo.png')}/>
        
        <TouchableOpacity 
          style={buttonStyle}
          onPress={_=>{genaratePhrase()}}
        >
          <Text style={textStyle}>Daily Phrases</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const genaratePhrase = _=> {
  let n = Math.floor(Math.random() * 7);
  
  let phrases = Array();

  phrases[0] = 'Os ventos do norte fizeram os Vikings.';
  phrases[1] = 'Há mais coisas entre o céu e a terra do que pode imaginar nossa vã filosofia.';
  phrases[2] = 'Aproximadamente 80% dos efeitos vêm de 20% das causas.';
  phrases[3] = 'Courage is to look your fear in the eye and know that it has no dominion over you!';
  phrases[4] = 'The world!';
  phrases[5] = 'GERMAN SCIENCE IS THE BEST IN THE WORLD!';
  phrases[6] = 'Trading is true magic when you donot have any girl😎';
  phrases[7] = 'Regardless of how much we grow and how much we pray... Life goes on. So stand UP! And do what needs to be done TODAY! Namaste.';
  
  let p = phrases[n];
  
  alert(p);
};

const cssStyles = {
  textStyle:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonStyle: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});