import { View, Text, FlatList } from "react-native"
import estilo from './estilo/estilo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import { listaAbastecimento } from "../../serivces/abastecimento";
import Abastecimento from "../abastecimento/abastecimento";

const Home = () => {

    type Abastecimento = {
        id: string;
        litros: string;
        preco: string;
        combustivel: string;
        kilometragem: string;
        data: string;
    }

    const [listAbastecimento, setListAbastecimento] = useState<Abastecimento[]>([{ id: '0', litros: '0', preco: "", combustivel: "", kilometragem: "", data: "" }])

    useEffect(() => {
        (async () => {
            const lista = await listaAbastecimento();
            if (lista) {
                setListAbastecimento([...lista]);

                console.log('dados abastecimento:\n', lista)
            }
        })();
    }, [])

    return (
        <View style={estilo.container}>

            <View style={estilo.referencia}>
                <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>Referencia</Text>
                <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>Dezembro</Text>
                <MaterialCommunityIcons name={"calendar-search"} size={22} color="#443E45" />
            </View>

            <FlatList
                data={listAbastecimento}
                renderItem={({ item }) => (<Card values={item} />)}
                keyExtractor={(item) => (item.id)}
            />

        </View>
    )
}

export default Home;