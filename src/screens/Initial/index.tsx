import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { styles } from '@/styles/styles'

export default function Initial() {
  const [biscoito, setBiscoito] = useState("A");
  const [quantidade, setQuantidade] = useState("0");

  const iniciarProcesso = () => {
    alert(`Iniciando processo para ${quantidade} unidades do biscoito ${biscoito}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione o Tipo de Biscoito:</Text>
      <Picker
        selectedValue={biscoito}
        onValueChange={(itemValue) => setBiscoito(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C" value="C" />
        <Picker.Item label="D" value="D" />
      </Picker>

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Button mode="contained" onPress={iniciarProcesso} style={styles.button}>
        Iniciar Processo
      </Button>
    </View>
  );
}
