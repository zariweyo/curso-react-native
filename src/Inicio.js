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
    KeyboardAvoidingView,
    AsyncStorage
    
} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';



export default class Inicio extends Component{

    state = {
        cuenta:0
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

        AsyncStorage.getItem("CUENTA",function(err,dato){
            
            if(err || dato==null){
                return;
            }

            var cuenta = parseInt(dato);
            if(isNaN(cuenta)){
                cuenta=0;
            }

            self.setState({
                cuenta
            });
        });
      }

    addOne(){
        var cuenta = this.state.cuenta +1;
        var self = this;

        AsyncStorage.setItem("CUENTA",""+cuenta,function(error){
            if(error==null){
                self.setState({
                    cuenta
                });
            }
        });
  

        
        
    }

    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.separador}>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={this.addOne.bind(this)}
                    >
                        <TextoVerde texto="ADD"></TextoVerde>

                    </TouchableOpacity>

                    <Text>CUENTA: {this.state.cuenta}</Text>
                    
                </View>
                
            </View>
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

