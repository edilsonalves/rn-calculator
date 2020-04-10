import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ onPress, text }) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  const operations = ['/', 'x', '-', '+'];

  if (text === 'C') {
    buttonStyles.push(styles.buttonClear);
    textStyles.push(styles.textClear);
  }

  if (text === '0') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (text === '=') {
    buttonStyles.push(styles.buttonEqual);
    textStyles.push(styles.textEqual);
  }

  if (operations.includes(text)) {
    buttonStyles.push(styles.buttonOperation);
    textStyles.push(styles.textOperation);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}
