import { Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Mensagem = (props: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name={"information-off"} size={50} color="#f07167" />
            <Text style={{ color: '#ffff', fontSize: 16 }}>{props.message}</Text>
        </View>
    )

}
export default Mensagem;