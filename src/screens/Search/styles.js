import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';
import {DIMENSIONS} from '~constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexGrow: 1,
    marginLeft: 24,
  },
  itemContainer: {
    marginLeft: 32,
    height: 250,
    width: (DIMENSIONS.SCREEN_WIDTH - 96) / 2,
  },
  listContentContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default styles;
