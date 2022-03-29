import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {Hoshi} from 'react-native-textinput-effects';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AddCharacters} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddCharacter = props => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const [job, setJob] = useState('');
  const [id, setId] = useState('');
  console.log('PROPSSIMP', props.simpsons.data);
  const characterId = props.simpsons.data[0].id + 1;

  const setObjectValue = async () => {
    try {
      const jsonValue = JSON.stringify(
        AddCharacters(name, description, avatar, job, id),
      );
      await AsyncStorage.setItem('key', jsonValue);
      navigation.navigate('homePage');
      console.log('Done.', jsonValue);
    } catch (e) {
      console.log('ERROR', e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1C9BEF',
      }}>
      <StatusBar backgroundColor="#51D1AA" barStyle="light-content" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('homePage');
        }}>
        <Image
          style={{width: 35, height: 35, marginTop: '15%', marginLeft: 15}}
          source={require('../images/previous.png')}
        />
      </TouchableOpacity>
      <KeyboardAwareScrollView behavior="position" enabled>
        <View style={styles.bStyle}>
          <View style={{marginTop: 25}}>
            <Text style={styles.boStyle}>Add Character</Text>
          </View>
          <View
            style={{
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '3%',
            }}>
            <Hoshi
              label={'Name Surname'}
              borderColor={'#1C9BEF'}
              autoCapitalize={'words'}
              returnKeyType="done"
              borderHeight={3}
              labelStyle={{color: '#333'}}
              inputStyle={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              autoCorrect={false}
              placeholderTextColor="#9A9A9A"
              inputPadding={16}
              style={{
                color: 'red',
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              type={'custom'}
              onChangeText={name => setName(name)}
            />
            <View
              style={{
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '3%',
              }}>
              <Hoshi
                label={'Description'}
                borderColor={'#1C9BEF'}
                autoCapitalize={'words'}
                returnKeyType="done"
                multiline={true}
                borderHeight={3}
                labelStyle={{color: '#333'}}
                inputStyle={{
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                autoCorrect={false}
                placeholderTextColor="#9A9A9A"
                inputPadding={16}
                style={{
                  width: '100%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                type={'custom'}
                onChangeText={description => setDescription(description)}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '3%',
            }}>
            <Hoshi
              label={'Image Link'}
              borderColor={'#1C9BEF'}
              autoCapitalize={'words'}
              returnKeyType="done"
              borderHeight={3}
              labelStyle={{color: '#333'}}
              inputStyle={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              autoCorrect={false}
              placeholderTextColor="#9A9A9A"
              inputPadding={16}
              style={{
                color: 'red',
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              type={'custom'}
              onChangeText={avatar => setAvatar(avatar)}
            />
          </View>
          <View
            style={{
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '3%',
            }}>
            <Hoshi
              label={'Job Title'}
              borderColor={'#1C9BEF'}
              autoCapitalize={'words'}
              returnKeyType="done"
              borderHeight={3}
              labelStyle={{color: '#333'}}
              inputStyle={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              autoCorrect={false}
              placeholderTextColor="#9A9A9A"
              inputPadding={16}
              style={{
                color: 'red',
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              type={'custom'}
              onChangeText={job => setJob(job)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setObjectValue(name, description, avatar, job);
              setName(name);
              setDescription(description);
              setAvatar(avatar);
              setJob(job);
              setId(characterId);
            }}
            style={styles.nexButton}>
            <Text style={styles.obStyle}>Add Character</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    simpsons: state.simpsons,
  };
};
export default connect(mapStateToProps, {AddCharacters})(AddCharacter);
const styles = StyleSheet.create({
  container: {
    color: '#50D5A4',
    fontSize: RFPercentage(1.7),
  },
  content: {
    width: 30,
    height: 30,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  slide1: {
    backgroundColor: '#55DBB2',
    width: 70,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: -15,
  },
  bStyle: {
    width: 350,
    height: 510,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '22%',
  },
  boStyle: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2.4),
    color: '#111111',
    textAlign: 'center',
  },
  obStyle: {
    color: '#FFFFFF',
    fontSize: RFPercentage(2.3),
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
  },
  nexButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    backgroundColor: '#50D5A4',
    width: '85%',
    height: 65,
    borderRadius: 100,
    flexDirection: 'row',
  },
  uStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 312.95,
    height: 85,
    marginTop: '25%',
  },
  fStyle: {
    marginTop: 25,
    marginBottom: 18,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  lStyle: {
    color: '#FFF',
    fontSize: RFPercentage(1.7),
  },
  View: {
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 15,
  },
  TextStyle: {
    color: '#f5f5f5',
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  hayStyle: {
    marginTop: 5,
    color: '#f5f5f5',
    fontSize: RFPercentage(1.7),
    fontFamily: 'Poppins',
  },
  Vstyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  TStyle: {
    backgroundColor: '#e70407',
    borderRadius: 65,
    height: 60,
    width: 60,
    marginLeft: 'auto',
    marginRight: 30,
    marginTop: 35,
  },
  IStyle: {
    width: 25,
    height: 25,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tStyle: {
    fontSize: RFPercentage(7),
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
  checkReadImage: {
    width: 25,
    height: 25,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
    marginLeft: 15,
  },
  catStyle: {
    width: 144.69,
    height: 150,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  hoshiStyle: {
    color: 'red',
    marginTop: 25,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  acceptStyle: {
    fontSize: RFPercentage(1.6),
    color: '#50D5A4',
  },
});
