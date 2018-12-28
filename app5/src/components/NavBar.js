import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class NavBar extends React.Component {
  render() {
    return (
        <View style={styles.barTitle}>
            <Text style={styles.txtTitle}>ATM consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barTitle: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    },
    txtTitle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
