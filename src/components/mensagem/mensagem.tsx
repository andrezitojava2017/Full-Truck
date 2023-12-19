import { Text, View } from "react-native"

const Mensagem = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#ffff', fontSize: 16 }}>Por favor, selecione um mês de referencia</Text>
        </View>
    )

}
export default Mensagem;