import { StyleSheet } from 'react-native'

const estilo = StyleSheet.create({
    container: {
        marginTop: 14,
        backgroundColor: "#FFFEFE",
        borderRadius: 6,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    alinhaItens: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoCombustivel: {
        width: '100%',
        textAlign: 'center',
        color: "#443E45",
        fontSize: 26,
    }

})

export default estilo;