import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#036564',
    },
    titulo: {
        position: 'absolute',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        top: '15%',
        right: 0,
    },
    image: {
        position: 'relative',
        height: '30%',

    },
    view_abastecimento: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    view_input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#D3D3D3",
        padding: 8,
        width: '80%',
        borderRadius: 10,
    },
    touchable: {
        backgroundColor: "#036564",
        width: '80%',
        marginTop: 12,
        padding: 14,
        alignItems: 'center',
        borderRadius: 10,
    },
    text_touchable: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'jua'
    },
    text_input: {
        color: "#036564"
    }
})

export default estilo;