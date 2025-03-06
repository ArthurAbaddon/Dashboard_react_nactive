import AsyncStorage from '@react-native-async-storage/async-storage';
import { Client, Message } from 'react-native-paho-mqtt';

// Configuração de armazenamento para o cliente MQTT
const myStorage = {
  setItem: async (key: string, item: string): Promise<void> => {
    await AsyncStorage.setItem(key, item);
  },
  getItem: async (key: string): Promise<string | null> => {
    return await AsyncStorage.getItem(key);
  },
  removeItem: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },
};

// Criar o cliente MQTT
const client = new Client({
  uri: 'ws://test.mosquitto.org:8080/mqtt', // Certifique-se de usar um broker compatível
  clientId: `react_native_mqtt_${Math.random().toString(16).substr(2, 8)}`,
  storage: myStorage,
});

// Conectar ao MQTT
export const connectClient = async (setStatus: (status: string) => void): Promise<void> => {
  try {
    await client.connect();
    console.log('✅ Conectado ao broker MQTT');

    await client.subscribe('biscoitos/status');
    console.log('📡 Inscrito no tópico: biscoitos/status');

    // Configurar evento de mensagem recebida
    client.onMessageArrived = (message: Message) => {
      const payload = (message as any).payloadString; // ✅ Força TypeScript a aceitar payloadString
      console.log('📩 Mensagem recebida:', payload);
      setStatus(payload);
    };

  } catch (error) {
    console.error('❌ Erro ao conectar MQTT:', error);
  }
};

// Publicar uma mensagem
export const publishMessage = async (topic: string, message: string): Promise<void> => {
  try {
    const mqttMessage = new Message(message);
    mqttMessage.destinationName = topic;
    await client.send(mqttMessage);
    console.log(`📤 Mensagem enviada para ${topic}:`, message);
  } catch (error) {
    console.error('❌ Erro ao publicar mensagem:', error);
  }
};

// Desconectar do MQTT
export const disconnectClient = async (): Promise<void> => {
  try {
    await client.disconnect();
    console.log('🚫 Desconectado do broker MQTT');
  } catch (error) {
    console.error('❌ Erro ao desconectar:', error);
  }
};
