import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';
import {DIMENSIONS} from '~constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  topPart: {
    backgroundColor: COLORS.WHITE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 4,
  },
  loginImage: {
    width: 200,
    height: 200,
  },
  tabSelector: {
    position: 'absolute',
    bottom: 0,
    left: 32,
    right: 32,
    flexDirection: 'row',
  },
  tabLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTabLine: {
    height: 2,
    backgroundColor: COLORS.APP_ORANGE,
    borderRadius: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  bottomPart: {
    paddingHorizontal: 32,
  },
  inputWrapper: {
    marginTop: 48,
  },
  inputContainer: {
    marginTop: 32,
  },
  forgotStyle: {
    marginTop: 16,
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32,
  },
  loginButton: {
    width: DIMENSIONS.SCREEN_WIDTH - 64,
  },
});

export default styles;
