import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  itemWrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingBottom: 24,
  },
  itemImage: {
    width: 140,
    height: 140,
    marginTop: -40,
    borderRadius: 999,
  },
  productText: {
    marginVertical: 8,
  },
});

export default styles;
