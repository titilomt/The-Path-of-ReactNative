import React from 'react';
import { Navigator } from 'react-native';
import Principal from './src/components/Principal';
import Client from './src/components/Client';
import Contacts from './src/components/Contacts';
import Emprise from './src/components/Emprise';
import Services from './src/components/Services';

export default class App extends React.Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {

          switch(route.id) {
            case 'principal': 
              return (<Principal navigator={navigator} />);
            
            case 'cliente':
              return (<Client navigator={navigator} />);
          
            case 'contato':
              return (<Contacts navigator={navigator} />);
          
            case 'empresa':
              return (<Emprise navigator={navigator} />);
          
            case 'servicos':
              return (<Services navigator={navigator} />);
          }
        }}
      />
    );
  }
}
