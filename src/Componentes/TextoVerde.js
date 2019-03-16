import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class TextoVerde extends Component{

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
        fontSize:18,
        fontWeight:'bold',
        color:"#33ff33"
    }
});