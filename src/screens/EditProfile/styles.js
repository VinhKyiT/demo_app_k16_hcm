import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';
import {DIMENSIONS} from '~constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  pageContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  userCard: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 8,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 16,
    borderRadius: 12,
  },
  infoWrapper: {
    width: DIMENSIONS.SCREEN_WIDTH - 170,
  },
  userCardEditIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
});

export default styles;
