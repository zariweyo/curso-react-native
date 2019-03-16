import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';

export default class Inicio extends Component{

    render(){
        return (
            <View style={styles.container}>
                <TextoVerde
                    texto="Openwebinars 2"
                ></TextoVerde>
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