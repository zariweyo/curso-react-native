import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';

export default class Inicio extends Component{

    state = {
        textoInicial:  "texto inicial"
    }
    

    componentDidMount(){
        this.setState({
            textoInicial: "texto ha cambiado"
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <TextoVerde
                    texto={this.state.textoInicial}
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