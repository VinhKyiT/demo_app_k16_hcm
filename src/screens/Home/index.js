import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppIcon from '../../components/AppIcon';
import AppText from '../../components/AppText';
import ProductItem from '../../components/ProductItem';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {ROUTES} from '../../constants/routes';
import {foodData, menuData} from '../../mock';
import NavigationServices from '../../utils/NavigationServices';
import styles from './styles';

const HomeScreen = () => {
  const [selectingItem, setSelectingItem] = useState(menuData[0].id);
  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.itemContainer}>
        <ProductItem
          item={item}
          onItemPress={() => {
            NavigationServices.navigate(ROUTES.PRODUCT_DETAIL, {item});
          }}
        />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader
        leftIcon={{
          iconName: 'menu',
          iconType: 'feather',
          iconColor: COLORS.BLACK,
          iconSize: 24,
          onIconPress: NavigationServices.openDrawer,
        }}
        rightIcon={{
          iconName: 'shopping-cart',
          iconType: 'feather',
          iconColor: COLORS.ICON_GRAY,
          iconSize: 24,
          onIconPress: () => {
            NavigationServices.navigate(ROUTES.CART);
          },
        }}
      />
      <View style={styles.sloganContainer}>
        <AppText size={34} font={FONTS.ROUNDED.BOLD}>
          {'Delicious \nfood for you'}
        </AppText>
      </View>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => {
          NavigationServices.navigate(ROUTES.SEARCH);
        }}
        activeOpacity={0.8}>
        <AppIcon type="ionicon" name="search" size={18} />
        <AppText
          style={styles.searchText}
          size={16}
          color={COLORS.TEXT_GRAY}
          font={FONTS.ROUNDED.SEMIBOLD}>
          Search
        </AppText>
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.foodMenuStyle}
        contentContainerStyle={styles.foodMenuContent}>
        {menuData.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              style={styles.foodMenuItem}
              onPress={() => {
                setSelectingItem(item.id);
              }}>
              <AppText
                size={16}
                color={selectingItem === item.id ? COLORS.TAB_BAR_ACTIVE : COLORS.TAB_BAR_INACTIVE}>
                {item.name}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity>
        <AppText align={'right'} style={styles.seeMoreText} color={COLORS.APP_ORANGE}>
          see more
        </AppText>
      </TouchableOpacity>
      <FlatList
        style={{flexGrow: 0}}
        contentContainerStyle={{flexGrow: 1, paddingTop: 50, paddingBottom: 16}}
        data={foodData}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
