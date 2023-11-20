
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from "lottie-react-native";
import estilo from './estilo/estilo';

const Splash = () => {

    return (
        <SafeAreaView style={estilo.container}>
            <LottieView source={require('../../assets/lottie/animation_lky1y011.json')} autoPlay loop style={estilo.lottie} />
            <View>
                <Text style={estilo.titulo}>Full Truck</Text>
                <Text style={estilo.subtitulo}>Gestão de abastecimento</Text>
            </View>
        </SafeAreaView>
    );
};

export default Splash;
