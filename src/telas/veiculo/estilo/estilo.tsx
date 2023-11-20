import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#036564',
    },
    image: {
        position: 'relative',
        height: '40%',
        width: '100%',
    },
    titulo: {
        position: 'absolute',
        alignItems: 'flex-end',
        paddingHorizontal: 18,
        top: '25%',
        right: 0,
    },
    dadosVeiculo: {
        flex: 2,
        backgroundColor: '#FFFEFE',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center',
        paddingTop: 8,
        marginTop: 20
    },
    view_input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#D3D3D3",
        padding: 8,
        marginTop: 14,
        width: '80%',
        //opacity: 0.6,
        borderRadius: 10,
    },
    input: {
        paddingLeft: 8,
        width: '80%',
        fontSize: 18,
        color: '#ffffff',
        // fontWeight: "bold",
        letterSpacing: 2,
        padding: 8,


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
    }
}) 