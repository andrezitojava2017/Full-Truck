import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import Abastecimento from '../../telas/abastecimento/abastecimento';
import estilo from './estilo/estilo'

type Abastecimento = {
    id: string;
    litros: string;
    preco: string;
    combustivel: string;
    kilometragem: string;
    data: string;
    media: string;
}


const Card = ({ values }: { values: Abastecimento }) => {

    const formataData = (data: string) => {
        const dateRegistro = new Date(data);
        const formatada = dateRegistro.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        return formatada;
    }

    return (
        <View style={estilo.container}>

            <View>
                <View style={estilo.item}>
                    <View style={estilo.alinhaItens}>
                        <MaterialCommunityIcons name="gas-station" size={30} color="#033649" />
                        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>{values.litros}</Text>
                        <Text>Lts</Text>

                    </View>
                    <View style={estilo.alinhaItens}>
                        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>{values.media}</Text>
                        <Text>Km/l</Text>
                    </View>
                </View>


            </View>

            <View style={estilo.item}>
                <View style={estilo.alinhaItens}>
                    <MaterialIcons name="date-range" size={30} color="#033649" />
                    <Text>{formataData(values.data)}</Text>
                </View>
                <View style={estilo.alinhaItens}>
                    <MaterialCommunityIcons name="map-marker-distance" size={30} color="#033649" />
                    <Text>{values.kilometragem}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }} >

                <Text style={estilo.infoCombustivel}> {values.combustivel}</Text>


            </View>

        </View>
    )
}

export default Card;