import React, { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { estilo } from './estilo/estilo'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Veiculo = () => {
    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
    const [kilometragem, setkm] = useState("");

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
                    />
                </View>

                <TouchableOpacity style={estilo.touchable}>
                    <Text style={estilo.text_touchable}>Pronto</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>


    )
}

export default Veiculo;