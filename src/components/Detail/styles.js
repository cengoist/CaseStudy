import {StyleSheet, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {RFPercentage} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C9BEF',
    flexDirection: 'row',
    width: '100%',
    ...Platform.select({
      ios: {
        height: '11%',
      },
      android: {
        height: '10%',
      },
    }),
    ...ifIphoneX({
      paddingTop: 15,
    }),
  },
  headerText: {
    color: '#fff',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  addImage: {
    width: 30,
    height: 30,
  },
  image: {
    height: 205.444,
    width: 115,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  description: {
    fontSize: RFPercentage(2),
    lineHeight: 24,
    textAlign: 'center',
    marginTop: '5%'
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    marginVertical: 10,
    color: '#111',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize:RFPercentage(3)
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
    marginTop: '1%',
    marginRight: 'auto',
  },
  imgT: {
    marginLeft: 'auto',
    marginTop: '3%',
  },
  bedrooms: {
    color: '#5b5b5b',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    fontSize: RFPercentage(1.9)
  },
  trash: {
    flexDirection: 'row',
    marginTop: '5%',
    backgroundColor: '#eee',
    borderRadius: 13,
    height: 40,
    width: '45%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  trashImage: {
    marginLeft: 'auto',
    width: 20,
    height: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  trashText: {
    marginRight: 'auto',
    marginLeft: 5,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  trashView: {
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    flex: 1,
  }
});
export default styles;
