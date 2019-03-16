import React, {Component} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    Image,
    Picker,
    Platform
} from 'react-native';
import TextoVerde from './Componentes/TextoVerde';



export default class Inicio extends Component{

    state = {
        listaDatos: [
            {
                nombre:"Torre Sevilla",
                imagen:"https://pbs.twimg.com/media/BnO4QhNIMAALRnK.jpg"
            },
            {
                nombre:"Plaza de España de Sevilla",
                imagen:"https://sevilla.abc.es/media/sevilla/2018/11/29/s/portada-plaza-espana-koX--620x349@abc.jpg"
            },
            {
                nombre:"Alcazar de Sevilla",
                imagen:"http://www.pasaporteblog.com/wp-content/uploads/2018/03/patio-de-las-doncellas-real-alcazar-de-sevilla.jpg"
            }
        ],
        imagenSelecionada:0
    }

    constructor(props){
        super(props);
    }
    

    componentDidMount(){
        
    }

    cambiarImagen(value,index){
        this.setState({
            imagenSelecionada: index
        });
    }

    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.separador}>

                    <Image
                        style={styles.imagen}
                        source={{uri: this.state.listaDatos[this.state.imagenSelecionada].imagen}}
                        resizeMode="cover"
                    />
                    
                </View>
                <View style={styles.separador}>
                    <Picker
                        selectedValue={this.state.imagenSelecionada}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => this.cambiarImagen(itemValue,itemIndex)}>

                        {
                            this.state.listaDatos.map(function(value,idx){
                                return(
                                    <Picker.Item key={idx} label={value.nombre} value={idx} />
                                );
                            })
                        }
                        
                    </Picker>
                </View>

                <View style={styles.separador}>
                    
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
        ...Platform.select({
            android: {
                justifyContent: 'center',
            },
        }),
        alignItems: 'center',
        borderWidth:2,
        borderColor:"#228822"
    },
    imagen:{
        height:'100%',
        width:'100%'
    },
    picker:{
        height:80,
        width:'90%'
    }
});

