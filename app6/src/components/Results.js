import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const heads = require('../img/moeda_cara.png');
const tails = require('../img/moeda_coroa.png');

export default class Results extends Component {
    constructor(props){
        super(props);

        this.state = { result: '' };
    }
    
    componentWillMount(){
        const numAleatorio = Math.floor(Math.random() * 2);
        let headsAndTails = '';

        if (numAleatorio === 0){
            headsAndTails = 'heads';
        } else {
            headsAndTails = 'tails';
        }

        this.setState({ result: headsAndTails });
    }

    render() {

        if(this.state.result === 'heads'){
            return (
                <View style={styles.results}>
                    <Image source={heads}/>
                </View>
            );                    
        }
        return (
            <View style={styles.results}>
                <Image source={tails}/>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    results: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center'
    }
});
