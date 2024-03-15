import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
  },
  menuItemContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemDivider: {
    height: 24,
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
});

export default styles;
