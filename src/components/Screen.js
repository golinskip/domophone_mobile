import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LedNumber from './LedNumber';
import { connect } from 'react-redux';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <LedNumber sign={this.props.screenState[0]}/>
        <LedNumber sign={this.props.screenState[1]}/>
        <LedNumber sign={this.props.screenState[2]}/>
        <LedNumber sign={this.props.screenState[3]}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    screenState: state.intercom.screenState
  }
}

export default connect(mapStateToProps)(Screen)