import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import useCart from '~hooks/useCart';
import ProductItem from '~components/ProductItem';

const CartScreen = () => {
  const {cartData, handleUpdateCartItem} = useCart();

  const renderItem = useCallback(
    ({item}) => {
      return <ProductItem item={item} onUpdateCartItem={handleUpdateCartItem} />;
    },
    [handleUpdateCartItem],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={{height: 20}} />}
        ListHeaderComponent={<Text style={styles.listHeaderText}>Giỏ hàng</Text>}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listHeaderText: {
    textAlign: 'center',
    marginVertical: 16,
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
