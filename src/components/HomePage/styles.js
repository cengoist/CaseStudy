import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapx: {
    position: 'absolute',
    bottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    height: 205.444,
    width: 115,
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  headerText: {
    textAlign: 'center',
    marginTop: 'auto',
    color: 'white',
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
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
    fontWeight: 'bold',
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
    marginVertical: 10,
    color: '#5b5b5b',
  },
});
export default styles;
