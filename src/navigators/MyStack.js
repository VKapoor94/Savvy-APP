import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import MyTabs from '../navigators/MyTabs';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', header: () => null}}
        />
        <Stack.Screen
          name="Daily"
          component={MyTabs}
          options={{title: 'Daily', header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
