import React from 'react';
import {Text, View} from 'react-native';
import MyStack from './src/navigators/MyStack';
import {Provider} from 'react-redux';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <MyStack></MyStack>
      </View>
    </Provider>
  );
};

export default App;
