import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';

export default class Inicio extends Component{

    state = {
        texto1:  "texto de cuadro 1",
        texto2:  "texto de cuadro 2",
        texto3:  "texto de cuadro 3",
    }
    

    componentDidMount(){
        this.setState({
            textoInicial: "texto ha cambiado"
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={[styles.cuadro1,styles.cuadroBase]}>
                    <TextoVerde
                        texto={this.state.texto1}
                    ></TextoVerde>
                </View>
                <View style={[styles.cuadro2,styles.cuadroBase]}>
                    <TextoVerde
                        texto={this.state.texto2}
                    ></TextoVerde>
                </View>
                <View style={[styles.cuadro3,styles.cuadroBase]}>
                    <TextoVerde
                        texto={this.state.texto3}
                    ></TextoVerde>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#F5FCFF',
    },
    cuadroBase:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    cuadro1:{
        flex:0.2,
        backgroundColor:"#114411"
    },
    cuadro2:{
        flex:0.4,
        backgroundColor:"#441111"

    },
    cuadro3:{
        flex:0.4,
        backgroundColor:"#111144"
    }
});