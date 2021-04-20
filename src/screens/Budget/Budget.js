import React from 'react';
import {Text, View} from 'react-native';
import HeaderComponent from '../../component/HeaderComponent';
import * as data from '../../locales/en.json';
import BudgetComponent from '../../component/BudgetComponent';
import styles from './Budget.style';

const Budget = () => {
  const montharr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <HeaderComponent
          headerText={data.BUDGET}
          year={'2018'}
          montharr={montharr}
          showPlus={true}></HeaderComponent>
        <BudgetComponent></BudgetComponent>
      </View>
    </View>
  );
};

export default Budget;
