import React from 'react';
import {StyleSheet} from 'react-native';
import COLOR from '../../themes/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
    padding: '3%',
    backgroundColor: COLOR.WHITE,
  },
  budget: {
    fontSize: 17,
    color: COLOR.DARK_GREY,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
  },
  header: {
    flexDirection: 'row',
  },
  signup: {
    position: 'absolute',
    right: 0,
    color: COLOR.PINK,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    fontSize: 17,
  },
  imageStyle: {
    marginTop: '7%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageStyleLeft: {
    marginTop: '7%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },

  actualImage: {
    width: 180,
    height: 180,
  },
  smallImage: {
    width: 100,
    height: 100,
  },

  form: {
    marginStart: '5%',
    marginTop: '5%',
    flexDirection: 'column',
  },
  login: {
    fontSize: 23,
    color: COLOR.BLACK,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 15,
    color: COLOR.DARK_GREY,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    marginTop: '3%',
  },
  enail: {
    fontSize: 15,
    color: COLOR.GREY,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    marginTop: '5%',
  },
  name: {
    fontSize: 15,
    color: COLOR.GREY,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    marginTop: '5%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: '3%',
    borderRadius: 2,
    width: '100%',
    borderColor: COLOR.LIGHTGREY,
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    marginTop: '3%',
    borderRadius: 2,
    width: '84%',
    borderColor: COLOR.LIGHTGREY,
    fontWeight: 'bold',
  },
  passwordView: {
    flexDirection: 'row',
  },
  submitButton: {
    height: 40,
    width: 40,
    backgroundColor: COLOR.PINK,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    borderRadius: 9,
  },
  disabledbutton: {
    height: 40,
    width: 40,
    backgroundColor: COLOR.LIGHTGREY,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    borderRadius: 9,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    color: 'white', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontWeight: 'bold',
    fontSize: 20,
  },
  orContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '3%',
  },
  or: {
    color: COLOR.GREY,
  },
  LoginWithFb: {
    borderRadius: 6,
    borderColor: COLOR.BLUE,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '3%',
  },
  fbText: {
    flex: 1,
    marginTop: '1%',
    color: COLOR.BLUE,
    fontWeight: 'bold',
    marginHorizontal: '10%',
  },
  iconStyle: {
    marginHorizontal: '3%',
  },
  forgotpwd: {
    color: COLOR.GREY,
    fontSize: 12,
    fontWeight: '800',
  },
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
});
