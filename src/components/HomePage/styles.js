import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Indicator: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  mapx: {
    //position: 'absolute',
    //bottom: 10,
    flex: 1,
    paddingVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    //overflow: 'hidden',
  },

  image: {
    height: 205.444,
    width: 115,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  headerText: {
    textAlign: 'center',
    marginTop: 'auto',
    color: 'white',
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
  },
  description: {
    fontSize: RFPercentage(2),
    lineHeight: 24,
    textAlign: 'center',
    marginTop: '5%',
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
    fontSize: RFPercentage(3),
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
    fontSize: RFPercentage(1.9),
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
  },
});
export default styles;
