import React from 'react';
import {Text, View} from 'react-native';
import styles from './Daily.style';
import * as data from '../../locales/en.json';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../../themes/Color';
import {Dimensions, TouchableHighlight} from 'react-native';
import Circle from '../../component/Circle';
import DailyTransaction from '../../component/DailyTransaction';

const Daily = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dailyText}>{data.DAILY}</Text>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color={COLOR.GREY} />
        </View>
        <View style={styles.daysContainer}>
          <Text style={styles.days}>{data.SUN}</Text>
          <Text style={styles.days}>{data.MON}</Text>
          <Text style={styles.days}>{data.TUE}</Text>
          <Text style={styles.days}>{data.WED}</Text>
          <Text style={styles.days}>{data.THU}</Text>
          <Text style={styles.days}>{data.FRI}</Text>
          <Text style={styles.days}>{data.SAT}</Text>
        </View>
        <View style={styles.circleContainer}>
          <Circle dateNum="28" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
          <Circle dateNum="29" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
          <Circle dateNum="30" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
          <Circle dateNum="1" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
          <Circle dateNum="2" bgColor={COLOR.PINK} color={COLOR.WHITE} />
          <Circle dateNum="3" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
          <Circle dateNum="4" bgColor={COLOR.LIGHTGREY} color={COLOR.BLACK} />
        </View>
        <View style={styles.dailyContainer}>
          <DailyTransaction></DailyTransaction>
        </View>
        <View style={styles.todayContainer}>
          <Text style={styles.todayText}>{data.TOTAL}</Text>
          <Text style={styles.totalCost}>{data.TOTALCOST}</Text>
        </View>
      </View>
    </View>
  );
};

export default Daily;
