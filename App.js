import React from 'react';
import {Text, View} from 'react-native';
import MyStack from './src/navigators/MyStack';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <MyStack></MyStack>
    </View>
  );
};

export default App;
