import React, {useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles.js';
import Header from '../header/header';
import HomeItem from './homeItem';
import {connect} from 'react-redux';
import {AddCharacters, getSimpsons} from '../../redux/actions';

const HomePage = props => {
  const flatlist = useRef();
  useEffect(() => {
    props.getSimpsons();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mapx}>
        {props.isLoading == true ? (
          <View style={[styles.Indicator, styles.horizontal]}>
            <ActivityIndicator size="large" color="#1C9BEF" />
          </View>
        ) : (
          <FlatList
            ref={flatlist}
            data={props.simpsons.data}
            renderItem={({item}) => <HomeItem post={item} />}
            //horizontal
            showsHorizontalScrollIndicator={false}
            // snapToInterval={width - 60}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    simpsons: state.simpsons,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {getSimpsons, AddCharacters})(HomePage);
