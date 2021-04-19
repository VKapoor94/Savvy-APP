import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import COLOR from '../themes/Color';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Gauthier Drewitt',
    date: 'Fri 10AM',
    cost: '$340.40',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sukhbirpal Dhalan',
    date: 'Fri 10AM',
    cost: '$340.40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lia Castro',
    date: 'Fri 10AM',
    cost: '$340.40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Xu Xuefeng',
    date: 'Fri 10AM',
    cost: '$340.40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Xu Xuefeng',
    date: 'Fri 10AM',
    cost: '$340.40',
  },
];

const Item = ({title, date, cost}) => (
  <View style={styles.item}>
    <Image
      source={require('../assests/images/medicine.png')}
      style={{width: 55, height: 55, backgroundColor: COLOR.LIGHTGREY}}
    />
    <View style={styles.dateContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <Text style={styles.cost}>{cost}</Text>
  </View>
);

const DailyTransaction = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} date={item.date} cost={item.cost} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: COLOR.WHITE,
  },
  item: {
    backgroundColor: COLOR.WHITE,
    padding: '2%',
    flexDirection: 'row',
    marginLeft: '1%',
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: COLOR.DARK_GREY,
    marginLeft: '5%',
    marginTop: '2%',
  },
  cost: {
    fontSize: 17,
    color: COLOR.GREEN,
    marginRight: '3%',
    marginTop: '4%',
    position: 'absolute',
    right: 0,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  date: {
    fontSize: 14,
    color: COLOR.GREYINSH,
    marginLeft: '5%',
  },
});

export default DailyTransaction;
