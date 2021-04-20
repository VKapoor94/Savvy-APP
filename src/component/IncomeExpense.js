import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../screens/Stat/Stat.style';
import COLOR from '../themes/Color';
import * as data from '../locales/en.json';

const IncomeExpense = ({nameIcon, ietext, cost, iconColor}) => {
  return (
    <View style={styles.incomecontainer}>
      <View style={styles.incomeIcon}>
        <Ionicons
          size={38}
          color={iconColor}
          name={nameIcon}
          style={styles.skipback}
        />
      </View>
      <View style={styles.expenseConatiner}>
        <Text style={styles.incomeText}>{ietext}</Text>
        <Text style={styles.incomeCost}>
          {'$'}
          {cost}
        </Text>
      </View>
    </View>
  );
};

export default IncomeExpense;
