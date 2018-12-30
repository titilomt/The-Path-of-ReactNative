import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Principal from './src/components/Principal';
import Client from './src/components/Client';
import Contacts from './src/components/Contacts';
import Emprise from './src/components/Emprise';
import Services from './src/components/Services';

export default class App extends React.Component {
  render() {
    return <StackApp />;
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: Principal,
    navigationOptions: {
      header: null // Will hide header for HomePage
    }
  },
  Client: {
    screen: Client,
    navigationOptions: {
      header: null // Will hide header for HomePage
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: null // Will hide header for HomePage
    }
  },
  Emprise: {
    screen: Emprise,
    navigationOptions: {
        header: null // Will hide header for HomePage
    }
  },
  Services: {
    screen: Services,
    navigationOptions: {
      header: null // Will hide header for HomePage
    }
  },
});

const StackApp = createAppContainer(RootStack);
