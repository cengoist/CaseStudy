import React from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import {removeCharacters} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Post = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('detail', {postID: post.id, data: props.post});
  };
  const removeValue = async () => {
    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        if (Platform.OS === 'android') {
          (post.id = ''), await AsyncStorage.clear();
        }
        if (Platform.OS === 'ios') {
          (post.id = ''), await AsyncStorage.multiRemove(asyncStorageKeys);
        }
      }
    } catch (e) {
      console.log('HATA', e);
    }
    console.log('Done.',post.id);
  };
  console.log('ITEMM', post.id);
  return (
    <Pressable
      onPress={goToPostPage}
      style={[
        styles.container,
        {
          width: width - 60,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 15,
        },
      ]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          resizeMode={'stretch'}
          source={{
            uri: post.avatar,
          }}
        />

        <View style={styles.trashView}>
          <Text style={styles.bedrooms}>{post.name}</Text>
          <Text style={styles.price}> {post.job}</Text>
          <TouchableOpacity
            onPress={() => removeValue(post.id)}
            style={styles.trash}>
            <Image
              style={styles.trashImage}
              source={require('../images/trash-can.png')}
            />
            <Text style={styles.trashText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
