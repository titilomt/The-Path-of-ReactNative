import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { Container, TextStyle } = style; 
    return (
      <View style={Container}>
        <Text style={TextStyle}>Daily Phrases</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize: 30,
    backgroundColor: '#0f0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6
  },
});
