import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import COLOR from '../themes/Color';

const Rectangle = props => {
  return (
    <TouchableHighlight
      style={{
        borderRadius: 34 / 2,
        width: 50,
        height: 34,
        backgroundColor: props.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2%',
      }}
      underlayColor="#ccc"
      onPress={() => alert('Yaay!')}>
      <Text
        style={{
          color: props.color,
          fontSize: 13,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {' '}
        {props.dateNum}
      </Text>
    </TouchableHighlight>
  );
};

export default Rectangle;
