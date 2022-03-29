import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 7
        }}>
        <Text style={styles.headerText}>Character</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('addCharacter');
        }}
        style={{marginTop: 'auto', marginBottom: '3%', width: '10%'}}>
        <Image style={styles.addImage} source={require('../images/plus.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
