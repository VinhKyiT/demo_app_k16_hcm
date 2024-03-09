import {StyleSheet} from 'react-native';
import {COLORS} from '~constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  sloganContainer: {
    paddingHorizontal: 32,
    marginVertical: 32,
  },
  searchContainer: {
    backgroundColor: COLORS.SEARCH_BOX_BG,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  searchText: {
    marginLeft: 16,
  },
  foodMenuStyle: {
    flexGrow: 0,
  },
  foodMenuContent: {
    paddingVertical: 24,
    paddingLeft: 50,
  },
  foodMenuItem: {
    width: 100,
  },
  seeMoreText: {
    paddingHorizontal: 32,
  },
  itemContainer: {
    marginLeft: 32,
    height: 270,
    width: 200,
  },
});

export default styles;
