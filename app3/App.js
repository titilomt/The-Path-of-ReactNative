import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image 
} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = { 
      userChoise     : '', 
      computerChoise : '', 
      result         : '' 
    };
  };

  jokenpo(userChoise){
    let num = Math.floor(Math.random() * 3);
    let r = '';
    
    switch(num){
      case 0: r = 'jan'; break;
      case 1: r = 'ken'; break;
      case 2: r = 'po'; break;
    }

    let result = '';

    if(userChoise == 'jan') {
      if(r == 'jan') result = 'Draw Game'
      else if (r == 'ken') result = 'Computer Win'
      else result = 'You Win Gratulations'
    } else if(userChoise == 'ken') {
      if(r == 'jan') result = 'You Win Gratulations'
      else if (r == 'ken') result = 'Draw Game'
      else result = 'Computer Win noob'
    } else if(userChoise == 'po') {
      if(r == 'jan') result = 'Brutal, Savage, Reckt'
      else if (r == 'ken') result = 'Gratulations You Win'
      else result = 'Draw!'
    }

    this.setState({ 
      userChoise     : userChoise, 
      computerChoise : r, 
      result         : result 
    });
  };

  render() {
    return (
      <View>
        
        <UpperImg></UpperImg>
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
          <Text>Choose your fighter: {this.state.computerChoise}</Text>
          <Text>Meh: {this.state.userChoise}</Text>
          
        </View>
      </View>
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
    color: 'red'
  },
  imgMargin: {
    marginTop: 10
  }
});

class UpperImg extends React.Component {
 render() {
   return (
    <View style={styles.imgMargin}>
      <Image source={require('./img/jokenpo.png')}/>
    </View>
   );
 }
}