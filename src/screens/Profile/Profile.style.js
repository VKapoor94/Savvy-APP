import React from 'react';
import {StyleSheet} from 'react-native';
import COLOR from '../../themes/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  innerContainer: {
    flexDirection: 'column',
    backgroundColor: COLOR.red,
  },
  profileImgContainer: {
    marginLeft: 10,
    height: 100,
    width: 120,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImg: {
    height: 110,
    width: 110,
    borderRadius: 50,
  },
  profileContainer: {
    margin: '5%',
    flexDirection: 'row',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    margin: '3%',
  },
  profile: {
    fontSize: 26,
    marginLeft: '3%',
    marginTop: '3%',
    fontWeight: 'bold',
    width: '100%',
    overflow: 'hidden',
  },
  icon: {
    position: 'absolute',
    right: 0,
    margin: '3%',
  },
  blood: {
    position: 'absolute',
    top: 85,
    left: 20,
    width: 28,
    height: 28,
    elevation: 1,
    borderRadius: 7,
    borderColor: COLOR.PINK,
    backgroundColor: COLOR.PINK,
  },
  profileNameContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '7%',
  },
  profileName: {
    fontSize: 26,
    marginLeft: '3%',
    fontWeight: 'bold',
  },
  creditContainer: {
    flexDirection: 'column',
  },
  credit: {
    fontSize: 14,
    color: COLOR.DARK_GREY,
    marginLeft: '3%',
    marginTop: '3%',
  },
  bankInfoContainer: {
    backgroundColor: COLOR.PINK,
    height: 85,
    margin: '5%',
    padding: '5%',
    borderRadius: 14,
  },
  bankInfo: {
    flexDirection: 'row',
  },
  bank: {
    color: COLOR.WHITE,
    fontSize: 13,
  },
  update: {
    color: COLOR.WHITE,
    borderColor: COLOR.WHITE,
  },
  update: {
    position: 'absolute',
    right: 0,
    backgroundColor: COLOR.PINK,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    width: 80,
    height: 40,
    marginTop: '1%',
  },
  updateText: {
    color: COLOR.WHITE,
    textAlign: 'center',
    padding: '11%',
  },
  cost: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
  },
  form: {
    backgroundColor: COLOR.WHITE,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '3%',
  },
  headerText: {
    color: COLOR.GREYINSH,
    fontSize: 12,
    marginLeft: '5%',
    marginTop: '4%',
  },
  actualData: {
    color: COLOR.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: '2%',
  },
  password: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '3%',
  },
});
