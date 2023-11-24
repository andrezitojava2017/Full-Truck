
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registro from './telas/veiculo/registro';
import Home from './telas/home/home';
import Abastecimento from './telas/abastecimento/abastecimento';

const Tab = createBottomTabNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Registro"
                    component={Registro}
                    options={
                        { headerShown: false }
                    } />
                <Tab.Screen name="Abastecimento"
                    component={Abastecimento}
                    options={
                        { headerShown: false }
                    } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Rotas;