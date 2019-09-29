import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
class MyFavourite extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MyFavourite</Text>
      </View>
    );
  }
}
export default MyFavourite;
