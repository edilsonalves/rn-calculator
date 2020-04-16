import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import Row from '../../components/Row';
import Button from '../../components/Button';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.display}>
        <Text style={styles.value}>1989</Text>
      </View>
      <View style={styles.keyboard}>
        <Row>
          <Button onPress={() => {}} text={'C'}></Button>
          <Button onPress={() => {}} text={'+/-'}></Button>
          <Button onPress={() => {}} text={'%'}></Button>
          <Button onPress={() => {}} text={'/'}></Button>
        </Row>
        <Row>
          <Button onPress={() => {}} text={'7'}></Button>
          <Button onPress={() => {}} text={'8'}></Button>
          <Button onPress={() => {}} text={'9'}></Button>
          <Button onPress={() => {}} text={'x'}></Button>
        </Row>
        <Row>
          <Button onPress={() => {}} text={'4'}></Button>
          <Button onPress={() => {}} text={'5'}></Button>
          <Button onPress={() => {}} text={'6'}></Button>
          <Button onPress={() => {}} text={'-'}></Button>
        </Row>
        <Row>
          <Button onPress={() => {}} text={'1'}></Button>
          <Button onPress={() => {}} text={'2'}></Button>
          <Button onPress={() => {}} text={'3'}></Button>
          <Button onPress={() => {}} text={'+'}></Button>
        </Row>
        <Row>
          <Button onPress={() => {}} text={'0'}></Button>
          <Button onPress={() => {}} text={'.'}></Button>
          <Button onPress={() => {}} text={'='}></Button>
        </Row>
      </View>
    </View>
  );
}
