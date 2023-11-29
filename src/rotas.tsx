
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registro from './telas/veiculo/registro';
import Home from './telas/home/home';
import Abastecimento from './telas/abastecimento/abastecimento';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === "Home") {
                        iconName = focused ? "gas-station" : "gas-station";
                        //return <MaterialCommunityIcons name="gas-station" size={36} color="#ffffff" />
                    }
                    if (route.name === "Registro") {
                        iconName = focused ? "view-dashboard-edit" : "view-dashboard-edit";
                        //return <MaterialCommunityIcons name="view-dashboard-edit" size={36} color="#ffffff" />
                    }

                    if (route.name === "Abastecimento") {
                        iconName = focused ? "truck-fast" : "truck-fast";
                        //return <MaterialCommunityIcons name="truck-fast" size={36} color="#ffffff" />
                    }
                    return <MaterialCommunityIcons name={iconName} size={36} color={color} />
                },
                tabBarHideOnKeyboard: true,
                tabBarStyle: { backgroundColor: "#033649" },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={
                        {

                            headerTitle: "ABASTECIMENTOS",
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                color: "#ffffff",
                                fontFamily: 'jua',
                            },
                            headerStyle: {
                                backgroundColor: "#033649",
                            }
                        }
                    }

                />
                <Tab.Screen name="Registro"
                    component={Registro}
                    options={{ headerShown: false }} />
                <Tab.Screen name="Abastecimento"
                    component={Abastecimento}
                    options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Rotas;