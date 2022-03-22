import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles.js';
import Header from '../header/header';
import {useNavigation} from '@react-navigation/native';
import HomeItem from './homeItem';

const simpsonsURL = 'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';
const Post = () => {
  const navigation = useNavigation();
  const flatlist = useRef();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(simpsonsURL)
      .then(response => response.json())
      .then(json => setData(json.simpsons))
      .catch(error => alert(error));
  });
  const goToPostPage = () => {
    navigation.navigate('addCharacter');
  };
// Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(simpsonsURL);
      let json = await response.json();
      setData(json.simpsons);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mapx}>
        <FlatList
          ref={flatlist}
          data={data}
          renderItem={({item}) => <HomeItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          // snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          /* onViewableItemsChanged={onViewChanged.current}
          viewabilityConfig={viewConfig.current}*/
        />
      </View>
    </View>
  );
};

export default Post;
