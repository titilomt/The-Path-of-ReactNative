import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button
} from 'react-native';
import UpperImg from './src/components/UpperImg';
import Icone    from './src/components/Icone';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      userChoise     : '', 
      computerChoise : '', 
      result         : '' 
    };
  };

  jokenpo(userChoise) {
    const num = Math.floor(Math.random() * 3);
    
    let computerChoise = '';
    
    switch(num) {
      case 0: computerChoise = 'jan'; break;
      case 1: computerChoise = 'ken'; break;
      case 2: computerChoise = 'po'; break;
      default: computerChoise = ''; break;
    }

    let result = '';

    if(userChoise === 'jan') {
      if(computerChoise === 'jan') result = 'Draw Game'
      else if (computerChoise === 'ken') result = 'Computer Win'
      else result = 'You Win Gratulations'
    } else if(userChoise === 'ken') {
      if(computerChoise === 'jan') result = 'You Win Gratulations'
      else if (computerChoise === 'ken') result = 'Draw Game'
      else result = 'Computer Win noob'
    } else if(userChoise === 'po') {
      if(computerChoise === 'jan') result = 'Brutal, Savage, Reckt'
      else if (computerChoise === 'ken') result = 'Gratulations You Win'
      else result = 'Draw!'
    }

    this.setState( { 
      userChoise, 
      computerChoise, 
      result 
    } );
  };

  render() {
    return (
      <View style={styles.container}>        
        
        <UpperImg />
        
        <View style={styles.actionPainel}>
          <View style={styles.btnChoose}>
            <Button
              title='Jan'
              onPress={ _=>{this.jokenpo('jan')}}
            />
          </View>
          
          <View style={styles.btnChoose}>
            <Button
              title='Ken'
              onPress={ _=>{this.jokenpo('ken')}}
            />
          </View>
          
          <View style={styles.btnChoose}>
            <Button
              title='Po'
              onPress={ _=>{this.jokenpo('po')}}
            />
          </View>
        </View>
        
        <View style={styles.showTime}>
          
          <Text style={styles.txtResult}>{this.state.result}</Text>
          
          <Icone choise={this.state.userChoise} player='Player' />

          <Icone choise={this.state.computerChoise} player='Computer' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#AAEDF9',
    paddingTop: 13
  },
  btnChoose: {
    width: 90
  },
  actionPainel: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  showTime: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FC858B',
    height: 60
  }
} );
