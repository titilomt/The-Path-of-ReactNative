import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AuthActions';

const imgBg = require('../../img/bg.png');

const formLogin = props => (
    <Image style={{ flex: 1 }} source={imgBg} >
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Aplicativo de Trocas de Messagem</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} onChangeText={texto => { props.modificaEmail(texto) }}/>
                <TextInput secureTextEntry value={props.senha} style={{ fontSize: 20, height: 45 }} onChangeText={texto => { props.modificaSenha(texto) }}/>
                <TouchableHighlight onPress={()=> Actions.formCadastro()}>
                    <Text style={{ fontSize: 20 }}>Cadastre-se</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button title='Login' color='#115E54' onPress={()=> false} />
            </View>
        </View>
    </Image>

);

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
