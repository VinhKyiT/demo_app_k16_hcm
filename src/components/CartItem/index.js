import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';

const SWIPE_THRESHOLD = -80;
const TRANSLATE_X_THRESHOLD = -60;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const CartItem = ({item, onMinusPress, onPlusPress}) => {
  const translateX = useSharedValue(0);

  const pan = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      ctx.translateX = translateX.value;
    },
    onActive: (e, ctx) => {
      const translateValue = e.translationX + ctx.translateX;
      translateX.value = translateValue;
    },
    onEnd: (e, ctx) => {
      if (e.translationX + ctx.translateX > TRANSLATE_X_THRESHOLD) {
        translateX.value = withSpring(0);
      } else {
        translateX.value = withSpring(SWIPE_THRESHOLD);
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateX.value, [-40, -80], [0, 1], Extrapolate.CLAMP),
    };
  });
  return (
    <View>
      <PanGestureHandler onGestureEvent={pan}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.WHITE,
              borderRadius: 16,
              padding: 16,
            },
            reanimatedStyle,
          ]}>
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
        </Animated.View>
      </PanGestureHandler>
      <AnimatedTouchable
        style={[
          {
            position: 'absolute',
            height: '100%',
            justifyContent: 'center',
            right: 32,
            marginTop: 8,
            zIndex: -1,
          },
          buttonStyle,
        ]}>
        <AppIcon type="feather" name="trash-2" color="red" size={24} />
      </AnimatedTouchable>
    </View>
  );
};

export default CartItem;
