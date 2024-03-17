import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {PanGestureHandler} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import AppIcon from '../../components/AppIcon';

const SIZE = 90;
const CIRCLE_RADIUS = SIZE * 2;

function DemoGestureHandler() {
  const [isPlaying, setIsPlaying] = useState(false);
  // 2 Animated Value cho chuyen dong doc va chuyen dong ngang
  // cua hinh vuong
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const spin = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      // const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      const distance = Math.hypot(translateX.value, translateY.value);
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (isPlaying) {
      spin.value = withRepeat(
        withTiming(spin.value + 1, {duration: 4000, easing: Easing.linear}),
        -1,
      );
    } else {
      cancelAnimation(spin);
    }
  }, [isPlaying, spin]);

  const rThumbnailStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(spin.value, [0, 1], [0, 360]);
    return {
      transform: [{rotate: `${rotateValue}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 32}}>
        <Animated.View style={[{width: 100, height: 100}, rThumbnailStyle]}>
          <FastImage
            source={{
              uri: 'https://thanhnien.mediacdn.vn/Uploaded/caotung/2020_12_30/photo-1-16092554908561278237856_GFAT.jpg?width=500',
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        </Animated.View>
        <TouchableOpacity
          style={{marginTop: 16}}
          onPress={() => {
            setIsPlaying(!isPlaying);
          }}>
          <AppIcon type="antdesign" name={isPlaying ? 'pause' : 'caretright'} />
        </TouchableOpacity>
      </View>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

export default DemoGestureHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
  },
});
