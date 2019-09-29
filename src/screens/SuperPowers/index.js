import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
class SuperPowers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SuperPowers</Text>
      </View>
    );
  }
}
export default SuperPowers;
