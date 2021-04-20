import React from 'react';
import {Text, View} from 'react-native';
import COLOR from '../themes/Color';
import styles from './HeaderComponent.style';
import * as data from '../locales/en.json';
import Feather from 'react-native-vector-icons/Feather';
import Rectangle from '../component/Rectangle';
import Entypo from 'react-native-vector-icons/Entypo';
const HeaderComponent = ({headerText, year, montharr, showPlus}) => {
  return (
    <View>
      <Text style={styles.dailyText}>{headerText}</Text>
      <View style={styles.searchContainer}>
        {showPlus ? <Entypo name="plus" size={24} color={COLOR.GREY} /> : null}
        <Feather name="search" size={24} color={COLOR.GREY} />
      </View>
      <View style={styles.daysContainer}>
        <Text style={styles.days}>{year}</Text>
        <Text style={styles.days}>{year}</Text>
        <Text style={styles.days}>{year}</Text>
        <Text style={styles.days}>{year}</Text>
        <Text style={styles.days}>{year}</Text>
        <Text style={styles.days}>{year}</Text>
      </View>
      <View style={styles.circleContainer}>
        <Rectangle
          dateNum={montharr[0]}
          bgColor={COLOR.LIGHTGREY}
          color={COLOR.BLACK}
        />
        <Rectangle
          dateNum={montharr[1]}
          bgColor={COLOR.LIGHTGREY}
          color={COLOR.BLACK}
        />
        <Rectangle
          dateNum={montharr[2]}
          bgColor={COLOR.LIGHTGREY}
          color={COLOR.BLACK}
        />
        <Rectangle
          dateNum={montharr[3]}
          bgColor={COLOR.LIGHTGREY}
          color={COLOR.BLACK}
        />
        <Rectangle
          dateNum={montharr[0]}
          bgColor={COLOR.PINK}
          color={COLOR.WHITE}
        />

        <Rectangle
          dateNum={montharr[4]}
          bgColor={COLOR.LIGHTGREY}
          color={COLOR.BLACK}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;
