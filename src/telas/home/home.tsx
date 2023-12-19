import { View, Text, FlatList, TouchableOpacity } from "react-native"
import estilo from './estilo/estilo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import { listaAbastecimento, maiorValorKm } from "../../serivces/abastecimento";
import Abastecimento from "../abastecimento/abastecimento";
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Mensagem from "../../components/mensagem/mensagem";


const Home = () => {

    type Abastecimento = {
        id: string;
        litros: string;
        preco: string;
        combustivel: string;
        kilometragem: string;
        data: string;
        media: string;
    }

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const [listAbastecimento, setListAbastecimento] = useState<Abastecimento[]>([{ id: '0', litros: '0', preco: "", combustivel: "", kilometragem: "", data: "", media: "" }])
    const [exibirRefresh, setExibirRefresh] = useState<boolean>(false)
    const [mesReferencia, setMesReferencia] = useState<string>("")

    useEffect(() => {
        (async () => {
            const lista = await listaAbastecimento();
            await maiorValorKm();

            if (lista) {
                setListAbastecimento([...lista]);
            }
        })();
    }, [])

    const recuperarMesSelecionado = (event: DateTimePickerEvent, dataSelecionada: Date | any) => {


        if (dataSelecionada === undefined || event.type === 'dismissed') {
            const mesAtual = new Date().getMonth();
            //console.log('Cancelar clicado: ' + meses[mesAtual])
            setMesReferencia(meses[mesAtual])
        }

        const refSelecionada = meses[dataSelecionada.getMonth()];
        setMesReferencia(refSelecionada);
    }

    const exibirDatePicker = () => {
        DateTimePickerAndroid.open({
            mode: 'date',
            value: new Date(),
            onChange: (event, selectedDate) => recuperarMesSelecionado(event, selectedDate),

        })
    }


    const atualizarLista = async () => {

        setExibirRefresh(true);
        const lista = await listaAbastecimento();

        if (lista) {
            setListAbastecimento([...lista]);
            setExibirRefresh(false)
        }
    }

    return (
        <View style={estilo.container}>

            <View style={estilo.referencia}>
                <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>Referencia:</Text>

                <TouchableOpacity onPress={exibirDatePicker} style={{ flexDirection: 'row', alignItems: 'center' }}>

                    {
                        mesReferencia != "" ? <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>{mesReferencia}</Text>
                            : <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>***</Text>
                    }


                    <MaterialCommunityIcons name={"calendar-search"} size={22} color="#443E45" style={{ paddingLeft: 14 }} />
                </TouchableOpacity>

            </View>

            {
                mesReferencia === "" ? <Mensagem />
                    : <FlatList
                        data={listAbastecimento}
                        renderItem={({ item }) => (<Card values={item} />)}
                        keyExtractor={(item) => (item.id)}
                        refreshing={exibirRefresh}
                        onRefresh={atualizarLista}
                    />
            }


        </View>
    )
}

export default Home;