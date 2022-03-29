import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const DetailHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('homePage');
        }}
        style={{marginTop: 'auto', marginBottom: '3%', width: '10%', marginLeft: 10}}>
        <Image style={styles.addImage} source={require('../images/previous.png')} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 'auto', marginBottom: '3%', width: '90%', marginLeft: '30%'
        }}>
        <Text style={styles.headerText}>Detail</Text>
      </View>
    </View>
  );
};

export default DetailHeader;
