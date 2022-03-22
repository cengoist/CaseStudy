import React, {useEffect, useRef} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles.js';
import Header from '../header/header';
import {useNavigation} from '@react-navigation/native';
import HomeItem from './homeItem';
import {getSimpsons, setAge, setName} from '../../redux/actions';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);
const Post = () => {
  const navigation = useNavigation();
  const flatlist = useRef();
  const goToPostPage = () => {
    navigation.navigate('addCharacter');
  };
  const {simpsons} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
    dispatch(getSimpsons());
  }, []);
  const getData = () => {
    try {
      // AsyncStorage.getItem('simpsons')
      //     .then(value => {
      //         if (value != null) {
      //             let user = JSON.parse(value);
      //             setName(user.name);
      //             setAge(user.job);
      //         }
      //     })
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var userName = results.rows.item(0).name;
            var userJob = results.rows.item(0).job;
            dispatch(setName(userName));
            dispatch(setAge(userJob));
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mapx}>
        <FlatList
          ref={flatlist}
          data={simpsons}
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
