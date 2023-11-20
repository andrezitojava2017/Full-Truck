import react from 'react';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#036564',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titulo: {
        fontFamily: 'fast-one-regular400',
        fontSize: 38,
        fontWeight: '400',
    },
    subtitulo: {
        fontFamily: 'inter-regular400',
        textAlign: 'right',
    },
    lottie: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: -38
    }
})

export default estilo;