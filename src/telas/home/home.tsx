import { View, Text } from "react-native"
import estilo from './estilo/estilo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../components/card/card";

const Home = () => {
    return (
        <View style={estilo.container}>

            <View style={estilo.referencia}>
                <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>Referencia</Text>
                <Text style={{ fontFamily: "inter-regular400", fontSize: 20, color: "#443E45" }}>Dezembro</Text>
                <MaterialCommunityIcons name={"calendar-search"} size={22} color="#443E45" />
            </View>
            <Card />
        </View>
    )
}

export default Home;