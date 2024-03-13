import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  stdInstruction: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
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
