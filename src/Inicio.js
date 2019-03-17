import React, {Component} from 'react';
import {
    View, 
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';



export default class Inicio extends Component{

    state = {
        listaDatos: [],
        textoInput: ""
    }
    

    componentDidMount(){
        var _listado = [];
        for(var i=0;i<10;i++){
            _listado.push(
                {
                    key:"D"+i,
                    texto:'Dato '+i
                }
            );
        }
        this.setState({
            listaDatos: _listado
        });
    }

    addLista(){
        this.state.listaDatos.push({
            key:"D"+Math.floor(Math.random()*1000000),
            texto: this.state.textoInput
        });

        this.setState({
            textoInput: "",
            listaDatos: this.state.listaDatos
        })
    }

    delLista(){
        this.state.listaDatos.pop();
        this.setState({
            listaDatos: this.state.listaDatos
        });
    }

    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.separador}>
                    <ScrollView>
                        {
                            this.state.listaDatos.map(function(value,index){
                                return (<TextoVerde key={index} texto={value.texto}></TextoVerde>) 
                            }) 
                        }
                    </ScrollView>

                </View>
                <View style={styles.separador}>
                    <TextInput
                        style={styles.input}
                        value={this.state.textoInput}
                        onChangeText={(textoInput) => this.setState({textoInput})}
                    ></TextInput>
                    <TextoVerde texto={this.state.textoInput}></TextoVerde>

                    <View style={styles.botonesSep}>
                        <TouchableHighlight
                            onPress={this.addLista.bind(this)}
                            style={styles.boton}
                        >
                            <TextoVerde texto="Añadir"></TextoVerde>
                        </TouchableHighlight>
                        <TouchableOpacity
                            onPress={this.delLista.bind(this)}
                            style={styles.boton}
                        >
                            <TextoVerde texto="Quitar último"></TextoVerde>
                        </TouchableOpacity>

                    </View>
                    
                </View>

                <View style={styles.separador}>
                    <FlatList
                        data={this.state.listaDatos}
                        extraData={this.state}
                        renderItem={({item}) => <TextoVerde texto={item.texto}></TextoVerde>}
                    />
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
    input:{
        borderWidth:1,
        borderColor:"#000",
        width:200,
        borderRadius:10,
        padding:2
    },
    boton:{
        backgroundColor:"#000",
        padding:5,
        borderRadius:10,
        margin:2
    },
    botonesSep:{
        flexDirection:'row'
    }
});

