import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { navigator } from '@/src/styles/styles';

type StatusKeys = 'moedor' | 'tesoura' | 'bandejaUp' | 'bandeja' | 'esteira' | 'atuador1' | 'atuador2';

export default function Dashboard() {
  
  const [status, setStatus] = useState({
    moedor: false,
    tesoura: false,
    bandejaUp: false,
    bandeja: false,
    esteira: false,
    atuador1: false,
    atuador2: false,
  });

  const [biscoitos, setBiscoitos] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [atual, setAtual] = useState("A");

  const toggleStatus = (key: StatusKeys) => {
    setStatus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  
  return (
    <View style={navigator.container}>
      <View style={navigator.card}>
        <Text style={navigator.title}>Controle de Motores</Text>
        {Object.keys(status).map((key) => (
          <View key={key} style={navigator.row}>
            <Text style={navigator.label}>Motor {key.replace(/([A-Z])/g, ' $1')}</Text>
            <TouchableOpacity 
              style={[navigator.button, status[key] ? navigator.buttonOff : navigator.buttonOn]} 
              onPress={() => toggleStatus(key)}>
              <Text style={navigator.buttonText}>{status[key] ? "Desligado" : "Ligado"}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={navigator.card}>
        <Text style={navigator.title}>Produção</Text>
        <Text style={navigator.subtitle}>Biscoito em produção: <Text style={navigator.bold}>{atual}</Text></Text>
        {Object.entries(biscoitos).map(([tipo, qtd]) => (
          <View key={tipo} style={navigator.row}>
            <Text>Biscoito {tipo}</Text>
            <Text>{qtd}</Text>
          </View>
        ))}
      </View>

      <View style={navigator.controls}>
        <TouchableOpacity style={navigator.controlButton} onPress={() => console.log("Start pressed")}>
          <Text style={navigator.controlText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[navigator.controlButton, navigator.stopButton]} onPress={() => console.log("Stop pressed")}>
          <Text style={navigator.controlText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[navigator.controlButton, navigator.emergencyButton]} onPress={() => console.log("Emergency pressed")}>
          <Text style={navigator.controlText}>Emergência</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 

