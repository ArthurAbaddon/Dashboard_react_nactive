import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f8f9fa', // Cor do ícone quando a aba estiver ativa
        tabBarInactiveTintColor: '#f8f9fa', // Cor do ícone quando a aba estiver inativa
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveBackgroundColor: '#215828',
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#3fa14c'
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pedir',
          tabBarIcon: ({ color }) => <Icon name="shoppingcart" size={24} color={ color } />,
          tabBarLabelStyle: {
            fontSize: 18, // aumenta o tamanho do texto da aba
            fontWeight: 'bold', // negrito
            color: 'white', // cor do texto
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Produção',
          tabBarIcon: ({ color }) => <Icon name="eye" size={24} color={ color } />,
          tabBarLabelStyle: {
            fontSize: 18, // aumenta o tamanho do texto da aba
            fontWeight: 'bold', // negrito
            color: 'white', // cor do texto
          },
        }}
      />
    </Tabs>
  );
}
