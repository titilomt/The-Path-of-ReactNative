import React from 'react';
import { Navigator } from 'react-native';
import Principal from './src/components/Principal';
import Client from './src/components/Client';

export default class App extends React.Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if(route.id === 'a'){
            return (<Principal navigator={navigator} />);
          } else if (route.id === 'b') {
            return (<Client />);
          }
        }}
      />
    );
  }
}
