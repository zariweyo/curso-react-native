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
    PermissionsAndroid
    
} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';
import Geolocation from 'react-native-geolocation-service';



export default class Inicio extends Component{

    state = {
        cuenta:0,
        gps:{
            latitude:0,
            longitude:0
        }
    }


    constructor(props){
        super(props);
    }
    

    componentDidMount() {

        var self = this;

        if (Platform.OS === 'android') {
            if (Platform.Version >= 23)
              PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((permission) => {
                if (permission === PermissionsAndroid.RESULTS.GRANTED){
                    self.actualizarPosicion(); 
                }
            });
        }else{
            this.actualizarPosicion(); 
        }

           
    }

    actualizarPosicion(){
        var self = this;

        Geolocation.getCurrentPosition(
                (position) => {
                    self.setState({
                        gps:{
                            latitude:position.coords.latitude,
                            longitude:position.coords.longitude,
                        }
                    });
                },
                (error) => {
                    console.warn(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.separador}>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={this.actualizarPosicion.bind(this)}
                    >
                        <TextoVerde texto="Actualizar GPS"></TextoVerde>

                    </TouchableOpacity>

                    <Text>Longitud: {this.state.gps.longitude}</Text>
                    <Text>Latitud: {this.state.gps.latitude}</Text>
                    
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
    }
});

