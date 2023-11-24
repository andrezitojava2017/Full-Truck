import { MaterialCommunityIcons, FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import estilo from './estilo/estilo'

const Abastecimento = () => {
    return (
        <KeyboardAvoidingView style={estilo.container}>
            <Image source={require("../../assets/image/fuel_station.png")} style={estilo.image} />
            <View style={estilo.titulo}>
                <Text style={{ fontSize: 28, fontFamily: 'jua', color: "#ffff" }}>REGISTRAR</Text>
                <Text style={{ fontSize: 28, fontFamily: 'jua', color: "#ffff" }}>ABASTECIMENTO</Text>
            </View>
            <View style={estilo.view_abastecimento}>

                <View style={{ marginTop: 10 }}>

                    <Text style={estilo.text_input}>Quantidade em litros</Text>

                    <View style={estilo.view_input} >
                        <MaterialCommunityIcons name="gas-station" size={36} color="#036564" />

                        <View style={{ width: '50%' }}>
                            <TextInput
                                placeholder='Litros'
                                keyboardType='numeric'
                                placeholderTextColor='#036564'
                                style={{ fontSize: 26, color: '#036564', fontWeight: 'bold', }}
                            />
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: 10 }}>

                    <Text style={estilo.text_input}>Preço por litro</Text>

                    <View style={estilo.view_input} >
                        <FontAwesome name="dollar" size={36} color="#036564" />

                        <View style={{ width: '50%' }}>
                            <TextInput
                                placeholder='ex: 1.25'
                                keyboardType='numeric'
                                placeholderTextColor='#036564'
                                style={{ fontSize: 18, color: '#036564', fontWeight: 'bold' }}
                            />
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: 10 }}>

                    <Text style={estilo.text_input}>Combustivel</Text>

                    <View style={estilo.view_input} >
                        <FontAwesome5 name="water" size={30} color="#036564" />

                        <View style={{ width: '50%' }}>
                            <TextInput
                                placeholder='ex: gasolina'
                                keyboardType='default'
                                placeholderTextColor='#036564'
                                style={{ fontSize: 18, color: '#036564', fontWeight: 'bold' }}
                            />
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: 10 }}>

                    <Text style={estilo.text_input}>KM</Text>

                    <View style={estilo.view_input} >
                        <Entypo name="location" size={36} color="#036564" />

                        <View style={{ width: '50%' }}>
                            <TextInput
                                placeholder='ex: 78999'
                                keyboardType='numeric'
                                placeholderTextColor='#036564'
                                style={{ fontSize: 18, color: '#036564', fontWeight: 'bold' }}
                            />
                        </View>
                    </View>

                </View>

                <TouchableOpacity style={estilo.touchable}>
                    <Text style={estilo.text_touchable}>Pronto</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView >
    )
}

export default Abastecimento;