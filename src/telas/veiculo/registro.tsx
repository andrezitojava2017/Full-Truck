import React, { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { estilo } from './estilo/estilo'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { adicionaVeiculo, buscarDadosVeiculo } from '../../serivces/tblVeiculo';

const Veiculo = () => {
    const [modelo, setModelo] = useState<string>("");
    const [placa, setPlaca] = useState<string>("");
    const [kilometragem, setkm] = useState<string>("");

    const addVeiculo = async () => {
        const dataVeiculo = { modelo: modelo, placa: placa, km: kilometragem }
        const rs = await adicionaVeiculo(dataVeiculo);
        console.log(rs)
    }

    const buscarVeiculo = async () => {
        const dados = await buscarDadosVeiculo();
        console.log(dados[0].modelo)
    }

    return (


        <KeyboardAvoidingView style={estilo.container}>


            <Image source={require('../../assets/image/truck.png')} style={estilo.image} />

            <View style={estilo.titulo}>
                <Text style={{ fontSize: 28, fontFamily: 'jua', color: "#ffff" }}>REGISTRAR</Text>
                <Text style={{ fontSize: 28, fontFamily: 'jua', color: "#ffff" }}>VEÍCULO</Text>
            </View>
            <View style={estilo.dadosVeiculo}>

                <View style={estilo.view_input}>
                    <FontAwesome5 name="truck" size={24} color="#036564" />
                    <TextInput
                        style={estilo.input}
                        value={modelo}
                        placeholder='Modelo do veiculo'
                        keyboardType='default'
                        placeholderTextColor='#036564'
                        onChangeText={(text) => setModelo(text)}
                    />
                </View>

                <View style={estilo.view_input}>
                    <Entypo name="v-card" size={24} color="#036564" />
                    <TextInput
                        style={estilo.input}
                        value={placa}
                        placeholder='Placa do veiculo'
                        keyboardType='default'
                        placeholderTextColor='#036564'
                        onChangeText={(text) => setPlaca(text.toUpperCase())}
                    />
                </View>

                <View style={estilo.view_input}>
                    <Entypo name="location" size={24} color="#036564" />
                    <TextInput
                        style={estilo.input}
                        value={kilometragem}
                        placeholder='KM Inicial'
                        keyboardType='numeric'
                        placeholderTextColor='#036564'
                        onChangeText={(text) => setkm(text)}
                    />
                </View>

                <TouchableOpacity style={estilo.touchable} onPress={addVeiculo}>
                    <Text style={estilo.text_touchable}>Pronto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.touchable} onPress={buscarVeiculo}>
                    <Text style={estilo.text_touchable}>Buscar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>


    )
}

export default Veiculo;