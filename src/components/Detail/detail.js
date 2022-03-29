import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../HomePage/styles';
import DetailHeader from './detailHeader';
const Post = props => {
  const post = props.route.params.data;

  return (
    <View style={styles.innerContainer}>
      <View style={{flex: 1}}>
        <DetailHeader />
        <View style={{flex: 1, padding: 8}}>
          <View
            style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}>
            <Image
              style={styles.image}
              resizeMode={'stretch'}
              source={{
                uri: post.avatar,
              }}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.price}>{post.name}</Text>
            <Text style={styles.bedrooms}>{post.job}</Text>
          </View>
          <Text style={styles.description}>{post.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
