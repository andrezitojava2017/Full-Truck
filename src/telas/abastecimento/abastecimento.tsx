import { MaterialCommunityIcons, FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from "react-native"
import { dropTable, listaAbastecimento, maiorValorKm, novoAbastecimento } from "../../serivces/abastecimento";
import estilo from './estilo/estilo'

const Abastecimento = () => {
    type AbastecimentoType = {
        qtdLitros: string;
        preco: string;
        combustivel: string;
        kilometragem: string;
        data?: Date;
    }

    const [dataAbastecimento, setDataAbastecimento] = useState<AbastecimentoType>({ qtdLitros: "", preco: "", combustivel: "", kilometragem: "" });
    const [media, setMedia] = useState<string>("0");

    const calcularMediaKmPorLitro = async () => {

        return new Promise<string>(async (resolve) => {

            const ultimoKm = await maiorValorKm();

            if (ultimoKm === null || ultimoKm === undefined) {
                // await registroNovoAbastecimento()
                resolve("0")
            }
            const diferenca = parseFloat(dataAbastecimento.kilometragem) - parseFloat(ultimoKm);
            const calcMedia = (diferenca * 1000) / parseFloat(dataAbastecimento.qtdLitros);
            const mediaValor = calcMedia.toPrecision(3);

            // console.log(`media calculada: ${parseFloat(dataAbastecimento.kilometragem)}-${parseFloat(ultimoKm)} = ${(diferenca * 1000).toPrecision(3)}`)
            // console.log(`Media obtida: ${calcMedia.toPrecision(3)}`)
            console.log(`calculo media: ${calcMedia}`)

            resolve(mediaValor)
        })


    }

    const registroNovoAbastecimento = async () => {

        calcularMediaKmPorLitro().then(async (result: string) => {

            console.log(`media obtida: ${result}`)
            const rs = await novoAbastecimento(dataAbastecimento, result)

            if (rs != 0) {
                ToastAndroid.showWithGravity("Abastecimento registrado!", 6000, ToastAndroid.BOTTOM);
            }


        })

    }

    const drop = () => {
        dropTable();
    }

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
                                onChangeText={(t) => setDataAbastecimento({ ...dataAbastecimento, qtdLitros: t })}
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
                                onChangeText={(t) => setDataAbastecimento({ ...dataAbastecimento, preco: t })}
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
                                onChangeText={(t) => setDataAbastecimento({ ...dataAbastecimento, combustivel: t })}
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
                                onChangeText={(t) => setDataAbastecimento({ ...dataAbastecimento, kilometragem: t })}
                            />
                        </View>
                    </View>

                </View>

                <TouchableOpacity style={estilo.touchable} onPress={registroNovoAbastecimento}>
                    <Text style={estilo.text_touchable}>Pronto</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView >
    )
}

export default Abastecimento;