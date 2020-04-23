import React, { useState } from 'react';
import { View, StatusBar, Text } from 'react-native';

import Row from '../../components/Row';
import Button from '../../components/Button';

import styles from './styles';

export default function Home() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation('');
  };

  const handlePosNeg = () => {
    setCurrentValue(`${parseFloat(currentValue) * -1}`);
  };

  const handlePercentage = () => {
    setCurrentValue(`${+(parseFloat(currentValue) / 100).toPrecision(9)}`);
  };

  const handleOperator = (value) => {
    setOperation(value);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  };

  const handleNumber = (value) => {
    currentValue === '0'
      ? setCurrentValue(value)
      : setCurrentValue(`${currentValue}${value}`);
  };

  const handlePoint = () => {
    if (!currentValue.includes('.')) {
      setCurrentValue(`${currentValue}.`);
    }
  };

  const handleEqual = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    if (operation) {
      if (currentValue.endsWith('.')) {
        currentValue.replace('.', '');
      }

      switch (operation) {
        case '/':
          setCurrentValue(`${+(previous / current).toPrecision(9)}`);
          break;
        case 'x':
          setCurrentValue(`${+(previous * current).toPrecision(9)}`);
          break;
        case '-':
          setCurrentValue(`${+(previous - current).toPrecision(9)}`);
          break;
        case '+':
          setCurrentValue(`${+(previous + current).toPrecision(9)}`);
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.display}>
        <Text style={styles.value}>{currentValue}</Text>
      </View>
      <View style={styles.keyboard}>
        <Row>
          <Button onPress={() => handleClear()} text={'C'}></Button>
          <Button onPress={() => handlePosNeg()} text={'+/-'}></Button>
          <Button onPress={() => handlePercentage()} text={'%'}></Button>
          <Button onPress={() => handleOperator('/')} text={'/'}></Button>
        </Row>
        <Row>
          <Button onPress={() => handleNumber('7')} text={'7'}></Button>
          <Button onPress={() => handleNumber('8')} text={'8'}></Button>
          <Button onPress={() => handleNumber('9')} text={'9'}></Button>
          <Button onPress={() => handleOperator('x')} text={'x'}></Button>
        </Row>
        <Row>
          <Button onPress={() => handleNumber('4')} text={'4'}></Button>
          <Button onPress={() => handleNumber('5')} text={'5'}></Button>
          <Button onPress={() => handleNumber('6')} text={'6'}></Button>
          <Button onPress={() => handleOperator('-')} text={'-'}></Button>
        </Row>
        <Row>
          <Button onPress={() => handleNumber('1')} text={'1'}></Button>
          <Button onPress={() => handleNumber('2')} text={'2'}></Button>
          <Button onPress={() => handleNumber('3')} text={'3'}></Button>
          <Button onPress={() => handleOperator('+')} text={'+'}></Button>
        </Row>
        <Row>
          <Button onPress={() => handleNumber('0')} text={'0'}></Button>
          <Button onPress={() => handlePoint()} text={'.'}></Button>
          <Button onPress={() => handleEqual()} text={'='}></Button>
        </Row>
      </View>
    </View>
  );
}
