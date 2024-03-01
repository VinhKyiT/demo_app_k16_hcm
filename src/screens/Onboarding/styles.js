import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';
import {DIMENSIONS} from '~constants/dimensions';
import {FONTS} from '~constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ONBOARDING_ORANGE,
    paddingHorizontal: 32,
  },
  miniLogoContainer: {
    marginTop: 32,
  },
  miniLogo: {
    width: 70,
    height: 70,
  },
  onboardingWoman: {
    width: DIMENSIONS.SCREEN_WIDTH - 64,
    height: 400,
  },
  buttonView: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 32,
  },
  buttonContainer: {
    backgroundColor: COLORS.WHITE,
  },
  buttonTitle: {
    color: COLORS.APP_ORANGE,
    fontFamily: FONTS.TEXT.SEMIBOLD,
    fontSize: 16,
  },
});

export default styles;
