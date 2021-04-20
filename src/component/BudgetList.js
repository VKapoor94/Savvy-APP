import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import COLOR from '../themes/Color';
import * as data from '../locales/en.json';
import {ProgressBar, Colors} from 'react-native-paper';
import styles from './BudgetList.style';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    budgetCost: '2446.90',
    budgetPercentage: '50',
    totalCost: '5000.00',
    barColor: COLOR.SKYBLUE,
    progress: 0.5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    budgetCost: '2446.90',
    budgetPercentage: '79',
    totalCost: '5000.00',
    barColor: Colors.red600,
    progress: 0.79,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    budgetCost: '2446.90',
    budgetPercentage: '43',
    totalCost: '5000.00',
    barColor: COLOR.SKYBLUE,
    progress: 0.43,
  },
];

const Item = ({
  budgetCost,
  budgetPercentage,
  totalCost,
  barColor,
  progress,
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{data.BUDGET_NAME}</Text>
    <View style={styles.innerContainer}>
      <Text style={styles.budgetCost}>
        {'$'}
        {budgetCost}
      </Text>
      <Text
        style={
          barColor === Colors.red600
            ? styles.budgetPercentageRed
            : styles.budgetPercentage
        }>
        {budgetPercentage}
        {'%'}
      </Text>
      <Text style={styles.totalCost}>
        {'$'}
        {totalCost}
      </Text>
    </View>
    <View style={styles.progress}>
      <ProgressBar progress={progress} color={barColor} />
    </View>
  </View>
);

const BudgetList = () => {
  const renderItem = ({item}) => (
    <Item
      budgetCost={item.budgetCost}
      budgetPercentage={item.budgetPercentage}
      totalCost={item.totalCost}
      barColor={item.barColor}
      progress={item.progress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default BudgetList;
