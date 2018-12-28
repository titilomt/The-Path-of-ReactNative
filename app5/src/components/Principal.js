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
    return (
        <View>
            <StatusBar 
                backgroundColor='#CCC'
            />
            <NavBar />

            <View style={styles.logoImg}>
                <Image source={logo} />
            </View>

            <View style={styles.menu}>
                <View style={styles.menuGruop}>
                    <TouchableHighlight
                        onPress={_=>{
                            this.props.navigator.push({id: 'b'});
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuClient} />
                    </TouchableHighlight>
                    
                    <Image style={styles.imgMenu} source={menuContact} />
                </View>
                <View style={styles.menuGruop}>
                    <Image style={styles.imgMenu} source={menuEnterprise} />
                    <Image style={styles.imgMenu} source={menuService} />
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
