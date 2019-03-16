import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class TextoVerde extends Component{

    mitexto="";

    constructor(props){
        super(props);
        this.mitexto = props.texto;
    }

    render(){
        return (
            <Text style={styles.texto}>{this.mitexto}</Text>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30,
        fontWeight:'bold',
        color:"#33ff33"
    }
});