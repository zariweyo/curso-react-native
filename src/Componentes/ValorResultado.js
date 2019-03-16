import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class ValorResultado extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Text style={[styles.texto,this.props.style]}>{this.props.valor}</Text>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
        fontWeight:'bold',
        padding:5
    }
});