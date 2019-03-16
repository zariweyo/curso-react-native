import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextoBoton from './Componentes/TextoBoton';

export default class Inicio extends Component{

    state = {
        
    }
    

    componentDidMount(){
        
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.zonaResultado}>
                    
                </View>

                <View style={styles.zonaBotones}>
                    <View style={styles.zonaNumeros}>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <TextoBoton texto="1"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="2"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="3"></TextoBoton>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <TextoBoton texto="4"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="5"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="6"></TextoBoton>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <TextoBoton texto="7"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="8"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="9"></TextoBoton>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <TextoBoton texto=""></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto="0"></TextoBoton>
                            </View>
                            <View style={styles.numero}>
                                <TextoBoton texto=""></TextoBoton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.zonaOperaciones}>
                        <View style={styles.operacion}>
                            <TextoBoton texto="C"></TextoBoton>
                        </View>
                        <View style={styles.operacion}>
                            <TextoBoton texto="+"></TextoBoton>
                        </View>
                        <View style={styles.operacion}>
                            <TextoBoton texto="-"></TextoBoton>
                        </View>
                        <View style={styles.operacion}>
                            <TextoBoton texto="*"></TextoBoton>
                        </View>
                        <View style={styles.operacion}>
                            <TextoBoton texto="/"></TextoBoton>
                        </View>
                        <View style={styles.operacion}>
                            <TextoBoton texto="="></TextoBoton>
                        </View>
                    </View>
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
    /* Nivel container*/
    zonaResultado:{
        flex: 0.2,
        backgroundColor:"#882222"
    },
    zonaBotones:{
        flex: 0.8,
        flexDirection:'row',
        backgroundColor:"#222288"
    },
    /******/

    /* Nivel zonaBotones */
    zonaOperaciones:{
        flex:0.2,
        flexDirection:'column',
        borderWidth:2,
        borderColor:"#228822"
    },
    zonaNumeros:{
        flex:0.8,
        flexDirection:'column',
        borderWidth:2,
        borderColor:"#ffffff"
    },
    /******/

    /* Nivel zonaBotones */
    teclasNumeros:{
        flex:1,
        flexDirection:'row',
    },
    /******/

    /* Nivel teclasNumeros */
    numero:{
        flex:0.3,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center'
    },
    /******/

    /* Nivel teclasOperacion */
    operacion:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center'
    }
    /*******/
});

