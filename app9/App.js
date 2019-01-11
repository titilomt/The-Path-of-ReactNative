import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './src/reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
