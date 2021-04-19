import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Daily from '../screens/Daily/Daily';
import Stat from '../screens/Stat/Stat';
import Budget from '../screens/Budget/Budget';
import Profile from '../screens/Profile/Profile';
import COLOR from '../themes/Color';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import Plus from '../screens/Plus/Plus';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Daily"
      labeled={true}
      sceneAnimationEnabled={true}
      activeTintColor={COLOR.BLACK}
      shifting={false}
      inactiveColor={COLOR.DARK_GREY}
      barStyle={{backgroundColor: COLOR.WHITE}}
      tabBarOptions={{
        activeTintColor: COLOR.BLACK,
      }}
      labelStyle={{fontSize: 14}}>
      <Tab.Screen
        name="Daily"
        component={Daily}
        options={{
          tabBarLabel: 'Daily',
          tabBarIcon: ({focused}) => (
            <Fontisto
              name="calendar"
              color={focused ? COLOR.PINK : COLOR.DARK_GREY}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stat"
        component={Stat}
        options={{
          tabBarLabel: 'Stat',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={focused ? COLOR.PINK : COLOR.DARK_GREY}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOR.PINK,
              }}>
              <AntDesign name="pluscircleo" color="white" size={68} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarLabel: 'Budget',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="wallet"
              color={focused ? COLOR.PINK : COLOR.DARK_GREY}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-outline"
              color={focused ? COLOR.PINK : COLOR.DARK_GREY}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
