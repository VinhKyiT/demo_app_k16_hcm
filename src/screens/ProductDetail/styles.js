import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  dotContainer: {
    marginTop: 16,
  },
  productInfoWrapper: {
    marginTop: 16,
  },
  bodySection: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
});

export default styles;
