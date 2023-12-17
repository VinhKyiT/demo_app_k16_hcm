import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {FONTS} from '~constants/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductItem = ({item, onAddToCart, onUpdateCartItem}) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={{uri: item?.images?.[0]}} style={styles.itemImage} />
      </View>
      <View style={styles.itemBody}>
        <View style={styles.itemRow}>
          <Text style={[styles.bodyText, {maxWidth: width - 180}]}>Tên: {item.title}</Text>
        </View>
        <View style={styles.itemPriceRow}>
          <FontAwesome color={'green'} name="money" size={20} style={styles.bodyIcon} />
          <Text style={styles.bodyText}>{item.price}</Text>
        </View>
        {item.quantity ? (
          <View style={styles.cartUpdateView}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onUpdateCartItem(item.id, -1)}>
              <AntDesign name="minuscircleo" size={20} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onUpdateCartItem(item.id, 1)}>
              <AntDesign name="pluscircleo" size={20} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
            <FontAwesome color={'green'} name="cart-plus" size={28} style={styles.bodyIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(ProductItem);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
  },
  itemRow: {
    flexDirection: 'row',
  },
  itemPriceRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 12,
  },
  itemBody: {
    flexGrow: 1,
  },
  bodyText: {
    fontFamily: FONTS.REGULAR,
    color: '#0A0A0A',
  },
  bodyIcon: {
    marginRight: 8,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cartUpdateView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});
