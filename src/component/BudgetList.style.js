import React from 'react';
import {StyleSheet} from 'react-native';
import COLOR from '../themes/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '2%',
  },
  item: {
    backgroundColor: COLOR.WHITE,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    height: 110,
  },
  title: {
    fontSize: 15,
    justifyContent: 'flex-start',
    color: COLOR.GREYINSH,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  budgetCost: {
    fontSize: 29,
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  budgetPercentage: {
    fontSize: 15,
    justifyContent: 'flex-start',
    color: COLOR.GREYINSH,
    marginTop: '6.7%',
  },
  budgetPercentageRed: {
    fontSize: 15,
    justifyContent: 'flex-start',
    color: COLOR.RED,
    marginTop: '6.7%',
  },
  totalCost: {
    fontSize: 15,
    color: COLOR.GREYINSH,
    marginTop: '6.7%',
    position: 'absolute',
    right: 0,
  },
  progress: {
    marginTop: '4%',
  },
});
