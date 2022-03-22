import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={{flexDirection: 'row', marginLeft: 'auto',marginRight: 'auto'}}>
          <Text style={styles.headerText}>Simpsons</Text>
        </View>
    </View>
  );
};

export default Header;
