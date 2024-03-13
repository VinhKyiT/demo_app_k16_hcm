import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';

const CartItem = ({item, onMinusPress, onPlusPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        borderRadius: 16,
        padding: 16,
      }}>
      <FastImage source={item?.image} style={{width: 70, height: 70, borderRadius: 99}} />
      <View style={{marginLeft: 16}}>
        <AppText font={FONTS.ROUNDED.SEMIBOLD} size={16} numberOfLines={1}>
          {item?.name}
        </AppText>
        <AppText font={FONTS.ROUNDED.SEMIBOLD} size={14} color={COLORS.APP_ORANGE}>
          {(item?.price * item?.quantity).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </AppText>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          paddingHorizontal: 8,
          paddingVertical: 4,
          backgroundColor: COLORS.APP_ORANGE,
          borderRadius: 99,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={onMinusPress}>
          <AppIcon type="feather" name="minus" size={16} color={COLORS.WHITE} />
        </TouchableOpacity>
        <AppText
          style={{marginHorizontal: 4}}
          font={FONTS.ROUNDED.SEMIBOLD}
          size={12}
          color={COLORS.WHITE}>
          {item?.quantity}
        </AppText>
        <TouchableOpacity onPress={onPlusPress}>
          <AppIcon type="feather" name="plus" size={16} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
