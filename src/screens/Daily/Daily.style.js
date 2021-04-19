import React from 'react';
import {StyleSheet} from 'react-native';
import COLOR from '../../themes/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  header: {
    flex: 1,
  },
  dailyText: {
    fontSize: 26,
    marginLeft: '3%',
    marginTop: '3%',
    fontWeight: 'bold',
  },
  searchContainer: {
    position: 'absolute',
    right: 0,
    marginTop: '5%',
    marginRight: '3%',
  },
  daysContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
    marginEnd: '5%',
    justifyContent: 'space-between',
  },
  circleContainer: {
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '2%',
    marginEnd: '4%',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  days: {
    color: COLOR.DARK_GREY,
    fontSize: 13,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  dailyContainer: {
    flex: 1,
    margin: '3%',
  },
  todayContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    marginTop: '1%',
    marginLeft: '22%',
  },
  todayText: {
    flex: 1,

    fontSize: 16,
    marginLeft: '3%',
    fontWeight: 'normal',
    color: COLOR.GREYINSH,
    marginBottom: '10%',
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    position: 'absolute',
    right: 0,
    marginRight: '8%',
  },
});
