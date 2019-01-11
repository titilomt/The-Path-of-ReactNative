import React from 'react'
import { View, TextInput, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AuthActions'

const imgBg = require('../../img/bg.png')

const formCadastro = props => (
    <Image style={{ flex: 1 }} source={imgBg} >
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.nome} placeholder='Nome' style={{ fontSize:20, height: 45 }} onChangeText={texto => { props.modificaNome(texto) }}/>
                <TextInput value={props.email} placeholder='Email' style={{ fontSize:20, height: 45 }} onChangeText={texto => { props.modificaEmail(texto) }}/>
                <TextInput secureTextEntry value={props.senha} placeholder='Senha' style={{ fontSize:20, height: 45 }} onChangeText={texto => { props.modificaSenha(texto) }}/>
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Cadastrar' color='#115E54' onPress={() => false} />
            </View>    
        </View>
    </Image>
);

const mapStateToProps = state => (
    {
        nome: state.AuthReducer.nome,
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
