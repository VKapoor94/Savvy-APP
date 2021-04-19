import React from 'react';
import {Text, View} from 'react-native';
import styles from './Stat.style';
import * as data from '../../locales/en.json';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../../themes/Color';
import {Dimensions, TouchableHighlight} from 'react-native';
import Circle from '../../component/Circle';
import DailyTransaction from '../../component/DailyTransaction';
import Rectangle from '../../component/Rectangle';

const Stat = () => {
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
            <View style={styles.graphConatiner}></View>
            <View style={styles.incomeExpenseContainer}>
              <View style={styles.incomecontainer}></View>
              <View style={styles.expensecontainer}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stat;
