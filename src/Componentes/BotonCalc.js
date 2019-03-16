import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import TextoBoton from './TextoBoton';

export default class BotonCalc extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <TouchableOpacity
                style={styles.container} 
                onPress={this.props.onPulsado}>
                <TextoBoton texto={this.props.texto}></TextoBoton>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderRadius:5,
        borderColor:"#888",
        borderWidth:2,
        width:'90%',
        height:'90%',
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center'
    }
});