import React from 'react';
import {Text, View} from 'react-native';
import * as data from '../locales/en.json';
import styles from './BudgetComponent.style';
import BudgetList from './BudgetList';
const BudgetComponent = () => {
  return (
    <View style={styles.container}>
      <BudgetList></BudgetList>
    </View>
  );
};

export default BudgetComponent;
