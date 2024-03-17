import {addEventListener} from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import styles from './styles';
import AppButton from '~components/AppButton';
import {FONTS} from '~constants/fonts';
import {DIMENSIONS} from '~constants/dimensions';
import Animated, {
  Easing,
  Extrapolate,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';

const HistoryScreen = () => {
  const spin = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      if (state.isConnected !== isConnected) {
        setIsConnected(state.isConnected);
      }
    });
    return () => unsubscribe();
  }, [isConnected]);

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

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(spin.value, [0, 1], [0, 360], Extrapolate.EXTEND);
    return {transform: [{rotate: `${rotate}deg`}]};
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[rStyle, {width: 100, height: 100}]}>
        <FastImage
          source={{
            uri: 'https://thanhnien.mediacdn.vn/Uploaded/caotung/2020_12_30/photo-1-16092554908561278237856_GFAT.jpg?width=500',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={() => {
          setIsPlaying(!isPlaying);
        }}>
        <AppIcon type="antdesign" name={isPlaying ? 'pause' : 'caretright'} />
      </TouchableOpacity>
      {!isConnected && (
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.WHITE,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}>
          <AppIcon type="feather" name="wifi-off" color={COLORS.DOT_INACTIVE} size={150} />
          <AppText font={FONTS.TEXT.SEMIBOLD} size={28} style={{marginVertical: 16}}>
            No internet Connection
          </AppText>
          <AppText size={16} align={'center'} color={COLORS.TEXT_GRAY}>
            Your internet connection is currently not available please check or try again.
          </AppText>
          <AppButton
            title={'Try again'}
            containerStyle={{marginTop: 16, width: DIMENSIONS.SCREEN_WIDTH - 32}}
          />
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;
