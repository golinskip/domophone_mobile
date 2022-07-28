import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Intercom from './src/screens/Intercom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './src/reducers/AppReducer';

export default function App() {
  const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Intercom></Intercom>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
