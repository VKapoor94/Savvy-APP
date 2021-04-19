import React from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './Login.style';
import * as data from '../../locales/en.json';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLOR from '../../themes/Color';

const Login = ({navigation}) => {
  const [email, onEmailChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [emailFocus, onemailFocus] = React.useState(false);
  const [signup, setsignUp] = React.useState(false);
  const [name, onNameChange] = React.useState('');

  const onEmailFocus = () => {
    onemailFocus(true);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.budget}>{data.BUDGET_TRACKER}</Text>
        <Text
          onPress={event =>
            event._dispatchInstances.memoizedProps.children === data.LOG
              ? setsignUp(false)
              : setsignUp(true)
          }
          style={styles.signup}>
          {signup ? data.LOG : data.SIGN}
        </Text>
      </View>
      <View style={emailFocus ? styles.imageStyleLeft : styles.imageStyle}>
        <Image
          style={emailFocus ? styles.smallImage : styles.actualImage}
          source={require('../../assests/images/Logo.png')}
        />
      </View>
      <KeyboardAvoidingView style={styles.form}>
        <Text style={styles.login}>{signup ? data.SIGNUP : data.LOGIN}</Text>
        <Text style={styles.signupText}>{signup ? data.SIGNUPTEXT : null}</Text>
        {signup ? (
          <View>
            <Text style={styles.name}>{data.NAME}</Text>
            <TextInput
              style={styles.input}
              onChangeText={onNameChange}
              onFocus={onEmailFocus}
              placeholder={data.NAMEPLACEHOLDER}
              value={name}
            />
          </View>
        ) : null}
        <Text style={styles.enail}>{data.EMAIL}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onEmailChange}
          placeholder={data.EMAILPLACEHOLDER}
          value={email}
        />
        <Text style={styles.enail}>{data.PASSWORD}</Text>
        <View style={styles.passwordView}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={onPasswordChange}
            onFocus={onEmailFocus}
            value={password}
            placeholder={data.PASSWORDPLACEHOLDER}
            secureTextEntry={true}
          />
          <View style={styles.searchSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Daily')}
              style={
                password.length > 4
                  ? styles.submitButton
                  : styles.disabledbutton
              }>
              <FontAwesome5 size={16} color={COLOR.WHITE} name="greater-than" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orContainer}>
          <Text style={styles.or}>{data.OR}</Text>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.LoginWithFb} title={data.LOGINWITHFB}>
        <View style={styles.iconStyle}>
          <EvilIcons size={30} color={COLOR.BLUE} name="sc-facebook" />
        </View>
        <Text style={styles.fbText}>
          {' '}
          {signup ? data.SIGNUPWITHFB : data.LOGINWITHFB}{' '}
        </Text>
      </TouchableOpacity>
      <View style={styles.forgotContainer}>
        <Text style={styles.forgotpwd}>{data.FORGOT_PASSWORD}</Text>
      </View>
    </ScrollView>
  );
};

export default Login;
