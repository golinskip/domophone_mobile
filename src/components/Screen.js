import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LedNumber from './LedNumber';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <LedNumber/>
        <LedNumber/>
        <LedNumber/>
        <LedNumber/>
      </View>
    );
  }
}
