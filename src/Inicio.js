import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Inicio extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Inicio</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    texto:{
        fontSize: 30,
        fontWeight:'bold'
    }
});