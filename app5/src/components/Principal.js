import React from 'react';
import { StatusBar, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import NavBar from './NavBar';

const logo = require('../img/logo.png');
const menuClient = require('../img/menu_cliente.png');
const menuContact = require('../img/menu_contato.png');
const menuEnterprise = require('../img/menu_empresa.png');
const menuService = require('../img/menu_servico.png');

export default class Principal extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    
    return (
        <View>
            <StatusBar 
                backgroundColor='#CCC'
            />
            <NavBar navigate={navigate}/>

            <View style={styles.logoImg}>
                <Image source={logo} />
            </View>

            <View style={styles.menu}>
                <View style={styles.menuGruop}>
                    <TouchableHighlight
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                        onPress={_=>{
                            navigate('Client');
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuClient} />
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        onPress={_=>{
                            navigate('Contacts');
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuContact} />
                    </TouchableHighlight>
                </View>
                <View style={styles.menuGruop}>
                    <TouchableHighlight
                        underlayColor={'#EC7148'}
                        activeOpacity={0.3}
                        onPress={_=>{
                            navigate('Emprise');
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuEnterprise} />
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        underlayColor={'#19D1C8'}
                        activeOpacity={0.3}
                        onPress={_=>{
                            navigate('Services');
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuService} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    logoImg: {
        marginTop: 10,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGruop: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 13
    }
});
