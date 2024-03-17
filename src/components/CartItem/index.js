import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';
import {DIMENSIONS} from '../../constants/dimensions';

const SWIPE_THRESHOLD = -80;
const TRANSLATE_X_THRESHOLD = -60;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const CartItem = ({item, onMinusPress, onPlusPress, onRemoveFromCart}) => {
  const translateX = useSharedValue(0);

  const pan = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      ctx.translateX = translateX.value;
    },
    onActive: (e, ctx) => {
      translateX.value = e.translationX + ctx.translateX;
    },
    onEnd: (e, ctx) => {
      if (e.translationX + ctx.translateX > TRANSLATE_X_THRESHOLD) {
        translateX.value = withSpring(0);
      } else {
        translateX.value = withSpring(SWIPE_THRESHOLD);
      }
    },
  });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateX.value, [-40, -80], [0, 1], Extrapolate.CLAMP),
    };
  }, []);

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
            rContainerStyle,
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
        onPress={() => {
          onRemoveFromCart(item);
        }}
        style={[
          {
            position: 'absolute',
            zIndex: -1,
            right: 24,
            justifyContent: 'center',
            height: '100%',
          },
          rButtonStyle,
        ]}>
        <AppIcon type="feather" name="trash-2" color={COLORS.APP_RED} />
      </AnimatedTouchable>
    </View>
  );
};

export default CartItem;
