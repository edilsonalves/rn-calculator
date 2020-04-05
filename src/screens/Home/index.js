import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'iria-sans-bold' }}>Home Screen</Text>
      <Text style={{ fontFamily: 'roboto-mono-medium' }}>Home Screen</Text>
      <Text style={{ fontFamily: 'roboto-mono-regular' }}>Home Screen</Text>
    </View>
  );
}
