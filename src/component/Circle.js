import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import COLOR from '../themes/Color';

const Circle = props => {
  return (
    <TouchableHighlight
      style={{
        borderRadius: 34 / 2,
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3%',
      }}
      underlayColor="#ccc"
      onPress={() => alert('Yaay!')}>
      <Text style={{color: props.color}}> {props.dateNum}</Text>
    </TouchableHighlight>
  );
};

export default Circle;
