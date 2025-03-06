import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from '@/src/styles/styles';
import * as ScreenOrientation from 'expo-screen-orientation';
import { connectClient, publishMessage, disconnectClient } from '@/src/services/mqttService';
import { useRouter } from 'expo-router'; // Importando useRouter

export default function Inicio() {

  const router = useRouter();

  const [open, setOpen] = useState(true);
  const [quantidade, setQuantidade] = useState<number>(1);
  const [tipo, setTipo] = useState<number>();
  const opcoes = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
  ];

  const [status, setStatus] = useState("");

  const handleChange = (value: number) => {
    if (value < 1) {
      setQuantidade(1);
    } else {
      setQuantidade(value);
    }
  };

  useEffect(() => {
    // Bloqueia a tela para a orientação paisagem
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // Conecta ao MQTT ao montar o componente
    connectClient(setStatus);

    return () => {
      // Desconecta ao desmontar o componente
      disconnectClient();
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const iniciarProcesso = async () => {
    if (!tipo) {
      Alert.alert("Erro", "Por favor, selecione um tipo antes de iniciar o processo.");
      return;
    }
  
    if (quantidade <= 0) {
      Alert.alert("Erro", "A quantidade de biscoitos deve ser maior que zero.");
      return;
    }
  
    console.log("Processo iniciado");
  
    // Criar o objeto JSON com os dados
    const mensagem = {
      qtd_biscoitos: quantidade,
      tipo: tipo,
      status: true
    };
  
    try {
      // Enviar mensagem para o broker MQTT
      await publishMessage("biscoitos/status", JSON.stringify(mensagem));
  
      // Zerar os valores
      setTipo(0);
      setQuantidade(1);
  
      // Navegar para a aba "explore"
      router.push('/explore');
    } catch (error) {
      console.error("Erro ao enviar mensagem MQTT:", error);
      Alert.alert("Erro", "Falha ao enviar comando MQTT.");
    }
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="#3fa14c" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.logoContainer}>
          {/* LOGO */}
          <Image source={require("@/src/assets/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.label}>TIPO</Text>
            <View style={styles.box2}>
              {opcoes.map((opcao) => (
                <TouchableOpacity
                  key={opcao.id}
                  style={[
                    styles.buttonTipo,
                    tipo === opcao.id && styles.selectedButton
                  ]}
                  onPress={() => setTipo(opcao.id)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      tipo === opcao.id && styles.selectedText
                    ]}
                  >
                    {opcao.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.box1}>
            <Text style={styles.label}>QUANTIDADE</Text>
            <View style={styles.quantidade}>

              <InputSpinner
                max={999}
                min={1}
                step={1}
                value={quantidade}
                onChange={handleChange}
                showBorder={false}
                inputStyle={styles.input} // Usando estilo importado
                buttonRightImage={<Icon name="plus" size={24} color="#fff" />} // Ícone personalizado para aumentar
                buttonLeftImage={<Icon name="minus" size={24} color="#fff" />} // Ícone personalizado para diminuir
                buttonPressRightImage={<Icon name="plus" size={24} color="#fff" />} // Ícone personalizado para aumentar
                buttonPressLeftImage={<Icon name="minus" size={24} color="#fff" />} // Ícone personalizado para diminuir
                style={styles.inputSpinner} // Usando estilo importado
                buttonStyle={{
                  backgroundColor: '#3fa14c',  // Cor de fundo
                  width: 100,                   // Largura do botão
                  height: 100,                  // Altura do botão (mesma que a largura)
                  borderRadius: 10,             // Sem bordas arredondadas
                }}
              />
            </View>
          </View>
        </View >

        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={iniciarProcesso}
            style={styles.button}>
            <Text style={styles.buttontext}>INICIAR PROCESSO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}