import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BotonCalc from './Componentes/BotonCalc';
import ValorResultado from './Componentes/ValorResultado';

export default class Inicio extends Component{

    state = {
        total:0,
        resultado:'0',
        operacion:''
    }
    

    componentDidMount(){
        
    }

    pulsadoNumero(_numero){
        var _num = parseInt(this.state.resultado + "" + _numero);
        this.setState({
            resultado: _num
        });
    }

    pulsadoOperacion(_operacion){
        var total = this.calcular();

        if(_operacion=="="){
            this.setState({
                total: 0,
                resultado: total+'',
                operacion:''
            });
        }else{
            this.setState({
                total: total,
                resultado: '0',
                operacion:_operacion
            });
        }
        
    }

    pulsadoClear(){
        this.setState({
            total:0,
            resultado:'0',
            operacion:''
        });
    }

    

    calcular(){
        var total = this.state.total;
        var ultimo = parseInt(this.state.resultado);

        if(this.state.operacion==''){
            return ultimo;
        }
        
        switch(this.state.operacion){
            case '+':
                total += ultimo;
                break;
            case '-':
                total -= ultimo;
                break;
            case '/':
                if(ultimo==0){
                    return total;
                }
                total /= ultimo;
                break;
            case 'X':
                total *= ultimo;
                break;
        }

        return total;
        
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.zonaResultado}>
                    <ValorResultado style={styles.resultadoTotal} valor={this.state.total}></ValorResultado>
                    <ValorResultado style={styles.resultadoParcial} valor={this.state.resultado}></ValorResultado>
                </View>

                <View style={styles.zonaBotones}>
                    <View style={styles.zonaNumeros}>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,1)} texto="1"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,2)} texto="2"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,3)} texto="3"></BotonCalc>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,4)} texto="4"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,5)} texto="5"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,6)} texto="6"></BotonCalc>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,7)} texto="7"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,8)} texto="8"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,9)} texto="9"></BotonCalc>
                            </View>
                        </View>
                        <View style={styles.teclasNumeros}>
                            <View style={styles.numero}>
                            </View>
                            <View style={styles.numero}>
                                <BotonCalc onPulsado={this.pulsadoNumero.bind(this,0)} texto="0"></BotonCalc>
                            </View>
                            <View style={styles.numero}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.zonaOperaciones}>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoClear.bind(this)}  texto="C"></BotonCalc>
                        </View>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoOperacion.bind(this,'+')} texto="+"></BotonCalc>
                        </View>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoOperacion.bind(this,"-")} texto="-"></BotonCalc>
                        </View>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoOperacion.bind(this,"X")} texto="X"></BotonCalc>
                        </View>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoOperacion.bind(this,"/")} texto="/"></BotonCalc>
                        </View>
                        <View style={styles.operacion}>
                            <BotonCalc onPulsado={this.pulsadoOperacion.bind(this,"=")} texto="="></BotonCalc>
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
        backgroundColor:"#882222",
        alignItems:'flex-end',
        alignContent:'flex-end',
        justifyContent: 'flex-end',
        backgroundColor:'#555'
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
        flex:1,
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
    },
    /*******/

    resultadoTotal:{
        color:"#999",
        fontSize:30
    },

    resultadoParcial:{
        color:"#222",
        fontSize:40
    }
});

