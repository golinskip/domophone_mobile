import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LedNumber from './LedNumber';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: [2,4,3,5,4,3,2,3,4,5,2]
    };
  }

  writeLeds() {
    return Array(this.props.signCount).fill(null).map((val, key) => {
      return <LedNumber key={key} sign={this.state.signs[key]}/>;
    });
  }

  render() {
    return (
      <View>
        {this.writeLeds()}
      </View>
    );
  }
}
