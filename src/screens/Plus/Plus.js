import React from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {fetchData} from '../../reduxStart/action';
import {connect} from 'react-redux';
import store from '../../store';
const Plus = props => {
  let users = props.user;
  console.log(users);
  const handleFetchData = () => {
    console.log('Hello');
    props.fetchData(2);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Get Data" onPress={handleFetchData}></Button>
      <View>{users ? <Text>{users.first_name}</Text> : null}</View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: id => {
      dispatch(fetchData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plus);
