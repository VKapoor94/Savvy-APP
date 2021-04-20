import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Stat.style';
import * as data from '../../locales/en.json';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../../themes/Color';
import {Dimensions, TouchableHighlight} from 'react-native';
import Rectangle from '../../component/Rectangle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IncomeExpense from '../../component/IncomeExpense';
import AreaChartComponent from '../../component/AreaChartComponent';
import HeaderComponent from '../../component/HeaderComponent';
const Stat = () => {
  const [income, setIncome] = useState('6,593.75');
  const [expense, setExpense] = useState('2,645.50');
  const [netBalance, setNetBalance] = useState('2,446.90');
  const montharr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderComponent
            headerText={data.STAT}
            year={'2018'}
            montharr={montharr}
            showPlus={false}></HeaderComponent>
          <View style={styles.topLevelView}>
            <View style={styles.graphConatiner}>
              <Text style={styles.netBalance}>{data.NETBALANCE}</Text>
              <Text style={styles.netBalanceText}>
                {'$'}
                {netBalance}
              </Text>
              <AreaChartComponent></AreaChartComponent>
            </View>
            <View style={styles.incomeExpenseContainer}>
              <IncomeExpense
                nameIcon={'play-skip-back-circle-sharp'}
                iconColor={COLOR.SKYBLUE}
                ietext={data.INCOME}
                cost={income}></IncomeExpense>
              <IncomeExpense
                iconColor={COLOR.PINK}
                nameIcon={'play-skip-forward-circle-sharp'}
                ietext={data.EXPENSE}
                cost={expense}></IncomeExpense>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stat;
