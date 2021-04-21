import React, {useState} from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import styles from './Profile.style';
import COLOR from '../../themes/Color';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';
import * as data from '../../locales/en.json';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Circle from '../../component/Circle';

const Profile = () => {
  const [profileName, setProfileName] = useState('Abbie Wilson');
  const [credit, setCreditScore] = useState('73.50');
  const [bank, setBank] = useState('United Bank Asia');
  const [cost, setCost] = useState('2446.90');
  const [email, setEmail] = useState('jparker@gmail.com');
  const [dob, setDob] = useState('04-19-1992');
  const [password, setPassword] = useState('.........');

  const OnUpdate = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.profile}>Profile</Text>
          <View style={styles.icon}>
            <Feather name="settings" size={24} color={COLOR.BLACK} />
          </View>
        </View>
        <View style={styles.blood}>
          <Text
            style={{
              fontSize: 15,
              color: COLOR.WHITE,
              padding: '2%',
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              margin: '8%',
            }}>
            B+
          </Text>
          <Feather name="square" size={0} color={COLOR.PINK} />
        </View>

        <View style={styles.profileContainer}>
          <ProgressCircle
            percent={50}
            radius={60}
            borderWidth={8}
            color={COLOR.PINK}
            shadowColor={COLOR.LIGHTGREY}>
            <View style={styles.profileImgContainer}>
              <Image
                source={require('../../assests/images/profile.png')}
                style={styles.profileImg}
              />
            </View>
          </ProgressCircle>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>{profileName}</Text>
            <View style={styles.creditContainer}>
              <Text style={styles.credit}>
                {data.CREDIT}
                {credit}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bankInfoContainer}>
          <View style={styles.bankInfo}>
            <Text style={styles.bank}>{bank}</Text>
            <TouchableHighlight style={styles.update} onPress={() => OnUpdate}>
              <Text style={styles.updateText}>{data.UPDATE}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.bankInfo}>
            <Text style={styles.cost}>
              {'$'}
              {cost}
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.headerText}>{data.EMAIL}</Text>
          <Text style={styles.actualData}>{email}</Text>
          <Text style={styles.headerText}>{data.DOB}</Text>
          <Text style={styles.actualData}>{dob}</Text>
          <Text style={styles.headerText}>{data.PASSWORD}</Text>
          <View style={styles.password}>
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
            <Circle width={10} height={10} bgColor={COLOR.BLACK} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
