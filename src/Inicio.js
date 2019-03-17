import React, {Component} from 'react';
import {
    View, 
    Alert, 
    Text,
    Keyboard,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';



export default class Inicio extends Component{

    state = {
        mensaje:"Teclado no mostrado"
    }

    enabledKeyboardCompress = false;

    constructor(props){
        super(props);

        if(Platform.OS == "ios"){
            this.enabledKeyboardCompress = true;
        }

        var {height, width} = Dimensions.get('window');

        this.state.mensaje += " H:"+height;

    }
    

    componentDidMount() {
        var self = this;
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow.bind(self),
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide.bind(self),
        );
      }
    
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      _keyboardDidShow() {
        var {height, width} = Dimensions.get('window');
        this.setState({
            mensaje:"Teclado mostrado H:"+height
        });
      }
    
      _keyboardDidHide() {
        var {height, width} = Dimensions.get('window');
        this.setState({
            mensaje:"Teclado no mostrado H:"+height
        });
      }

    alerta(){
        Alert.alert("Esto es una alerta");
    }

    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled={this.enabledKeyboardCompress}>
                
                <View style={styles.separador}>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={this.alerta}
                    >
                        <TextoVerde texto="Alerta"></TextoVerde>

                    </TouchableOpacity>

                    <Text>{this.state.mensaje}</Text>
                    
                </View>
                <View style={styles.separador}>
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={Keyboard.dismiss}
                    ></TextInput>
                </View>

                <View style={styles.separador}>
                    <TextInput
                        style={styles.input}
                    ></TextInput>
                </View>
                
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
    },
    separador:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderColor:"#228822"
    },
    boton:{
        backgroundColor:"#222",
        padding:20,
        borderRadius:5
    },
    input:{
        width:200,
        height:40,
        backgroundColor:"#000",
        borderRadius:20,
        padding:5,
        color:"#fff"
    }
});

