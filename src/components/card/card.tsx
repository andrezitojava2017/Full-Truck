import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import estilo from './estilo/estilo'
const Card = () => {
    return (
        <View style={estilo.container}>

            <View>
                <View style={estilo.item}>
                    <View style={estilo.alinhaItens}>
                        <MaterialCommunityIcons name="gas-station" size={30} color="#033649" />
                        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>328,50</Text>
                        <Text>Lts</Text>

                    </View>
                    <View style={estilo.alinhaItens}>
                        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>22,8</Text>
                        <Text>Km/l</Text>
                    </View>
                </View>


            </View>

            <View style={estilo.item}>
                <View style={estilo.alinhaItens}>
                    <MaterialIcons name="date-range" size={30} color="#033649" />
                    <Text>28/11/2023</Text>
                </View>
                <View style={estilo.alinhaItens}>
                    <MaterialCommunityIcons name="map-marker-distance" size={30} color="#033649" />
                    <Text>80.125km</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }} >

                <Text style={estilo.infoCombustivel}> Diesel Comum</Text>


            </View>

        </View>
    )
}

export default Card;