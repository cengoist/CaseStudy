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
    marginTop: 'auto',
    marginBottom: '15%',
    color: '#fff',
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
  },
});
export default styles;
