
import { useState } from 'react';
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { Jua_400Regular } from '@expo-google-fonts/jua';
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import Registro from './src/telas/veiculo/registro'
import Rotas from './src/rotas';
import { buscarDadosVeiculo, criarTabelaRegistroDeVeiculo } from './src/serivces/tblVeiculo';
import { criarTabelaAbastecimento } from './src/serivces/abastecimento';

export default function App() {

  const [veiculoRegistrado, setVeiculoRegistrado] = useState(false);
  const buscarRegistroVeiculo = async () => {
    buscarDadosVeiculo().then((rs) => {
      if (rs.length !== 0) {
        setVeiculoRegistrado(true)
        console.log('Veiculo cadastrado: ', rs)
      }

    })
  }

  useEffect(() => {
    criarTabelaRegistroDeVeiculo();
    criarTabelaAbastecimento();
    buscarRegistroVeiculo();
  }, [])

  const [fonstLoaded] = useFonts({
    "fast-one-regular400": FasterOne_400Regular,
    "inter-regular400": Inter_400Regular,
    "jua": Jua_400Regular,
  })

  if (!fonstLoaded) {
    return <View><Text>Aguardando fonte</Text></View>
  }

  if (veiculoRegistrado) {
    return <Rotas />

  }

  return (
    <Registro />
  )

}

