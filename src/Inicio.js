import React, {Component} from 'react';
import {
    View, 
    StyleSheet,
    Platform,
    ActivityIndicator,
    WebView
} from 'react-native';


export default class Inicio extends Component{

    state = {
        cargando:true,
        uri:'https://openwebinars.net/'
    }

    constructor(props){
        super(props);
    }
    

    componentDidMount(){
        
    }

    webCargada(){
        this.setState({
            cargando:false
        })
    }

    loadSpinner(){
        if(!this.state.cargando){
            return (<View/>);
        }

        return (
            <View style={styles.spinner}>
                <ActivityIndicator 
                        size="large" 
                        color="#0000ff"
                        animating={this.state.cargando}
                ></ActivityIndicator>
            </View>
            
        );
    }

    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.navegador}>
                    <WebView
                        source={{uri: this.state.uri}}
                        style={styles.wView}
                        onLoadEnd={this.webCargada.bind(this)}
                    />
                </View>

                {this.loadSpinner()}
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
        ...Platform.select({
            ios:{
                marginTop:40
            }
        })
    },
    spinner:{
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:10
    },
    navegador:{
        flex: 1
    },
    wView:{
        flex:1
    }
});

