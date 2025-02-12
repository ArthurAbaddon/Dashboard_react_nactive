import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default function LogoTitle() {
    return (
    <>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../../assets/logo.png')} 
        />
      </View>
    </>
    );
  }