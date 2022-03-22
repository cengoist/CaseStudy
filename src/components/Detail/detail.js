import React from 'react';
import {View, Text, useWindowDimensions, Pressable} from 'react-native';
import styles from '../HomePage/styles';
import {useNavigation} from '@react-navigation/native';

const Post = () => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('PostScreen');
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bedrooms}>
              abc
            </Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            abc
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}>₺</Text>/ gece
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
