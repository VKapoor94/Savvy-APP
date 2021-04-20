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
const Stat = () => {
  const [income, setIncome] = useState('6,593.75');
  const [expense, setExpense] = useState('2,645.50');
  const [netBalance, setNetBalance] = useState('2,446.90');

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.dailyText}>{data.STAT}</Text>
          <View style={styles.searchContainer}>
            <Feather name="search" size={24} color={COLOR.GREY} />
          </View>
          <View style={styles.daysContainer}>
            <Text style={styles.days}>{data.YEAR}</Text>
            <Text style={styles.days}>{data.YEAR}</Text>
            <Text style={styles.days}>{data.YEAR}</Text>
            <Text style={styles.days}>{data.YEAR}</Text>
            <Text style={styles.days}>{data.YEAR}</Text>
            <Text style={styles.days}>{data.YEAR}</Text>
          </View>
          <View style={styles.circleContainer}>
            <Rectangle
              dateNum="Jan"
              bgColor={COLOR.LIGHTGREY}
              color={COLOR.BLACK}
            />
            <Rectangle
              dateNum="Feb"
              bgColor={COLOR.LIGHTGREY}
              color={COLOR.BLACK}
            />
            <Rectangle
              dateNum="Mar"
              bgColor={COLOR.LIGHTGREY}
              color={COLOR.BLACK}
            />
            <Rectangle
              dateNum="Apr"
              bgColor={COLOR.LIGHTGREY}
              color={COLOR.BLACK}
            />
            <Rectangle dateNum="May" bgColor={COLOR.PINK} color={COLOR.WHITE} />

            <Rectangle
              dateNum="Jun"
              bgColor={COLOR.LIGHTGREY}
              color={COLOR.BLACK}
            />
          </View>
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
