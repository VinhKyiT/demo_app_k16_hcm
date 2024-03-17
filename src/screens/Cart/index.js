import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import AppHeader from '~components/AppHeader';
import {COLORS} from '~constants/colors';
import useCart from '~hooks/useCart';
import NavigationServices from '~utils/NavigationServices';
import styles from './styles';
import AppText from '~components/AppText';
import AppIcon from '~components/AppIcon';
import CartItem from '~components/CartItem';
import AppButton from '~components/AppButton';
import {showModal} from '~components/AppModal';

const CartScreen = () => {
  const {cartData, handleUpdateCartItem, handleRemoveFromCart} = useCart();
  const handleRemoveCart = useCallback(
    item => {
      showModal({
        title: 'Thông báo',
        content: `Bạn có muốn xoá ${item?.name} khỏi giỏ hàng?`,
        hasCancel: true,
        onConfirm: () => {
          handleRemoveFromCart(item?.id);
        },
      });
    },
    [handleRemoveFromCart],
  );
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View>
          <CartItem
            item={item}
            onMinusPress={() => {
              if (item?.quantity === 1) {
                handleRemoveCart(item);
              } else {
                handleUpdateCartItem(item?.id, -1);
              }
            }}
            onPlusPress={() => {
              handleUpdateCartItem(item?.id, 1);
            }}
            onRemoveFromCart={handleRemoveCart}
          />
        </View>
      );
    },
    [handleRemoveCart, handleUpdateCartItem],
  );
  return (
    <View style={styles.container}>
      <AppHeader
        leftIcon={{
          iconName: 'left',
          iconType: 'antdesign',
          iconColor: COLORS.BLACK,
          iconSize: 24,
          onIconPress: NavigationServices.goBack,
        }}
        centerTitle={'Cart'}
      />
      <View style={styles.stdInstruction}>
        <AppIcon type="material" name="swipe-left" size={16} />
        <AppText size={10}>swipe on an item to delete</AppText>
      </View>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={<View style={{height: 16}} />}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Complete order'}
          onPress={() => {}}
          disabled={Array.isArray(cartData) && cartData?.length === 0}
        />
      </View>
    </View>
  );
};

export default CartScreen;
