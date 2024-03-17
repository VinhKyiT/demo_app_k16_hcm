import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';
import styles from './style';
import FastImage from 'react-native-fast-image';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

const ProductItem = ({item, onItemPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onItemPress} style={styles.itemWrapper}>
        <FastImage
          source={item.image}
          style={styles.itemImage}
          resizeMode={FastImage.resizeMode.cover}
        />
        <AppText
          font={FONTS.ROUNDED.SEMIBOLD}
          align={'center'}
          size={22}
          style={styles.productText}>
          {item.name}
        </AppText>
        <AppText font={FONTS.ROUNDED.BOLD} align={'center'} size={16} color={COLORS.APP_ORANGE}>
          {item.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
