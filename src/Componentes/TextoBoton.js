import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class TextoBoton extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Text style={styles.texto}>{this.props.texto}</Text>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        fontWeight:'bold',
        color:"#686"
    }
});