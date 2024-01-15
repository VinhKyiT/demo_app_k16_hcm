import {View, ScrollView, Animated} from 'react-native';
import React, {useRef} from 'react';
import AppText from '~components/AppText';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '~assets/images';
import {FONTS} from '~constants/fonts';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_SIZE = 80;
const PROFILE_IMAGE_MIN_SIZE = 40;

const TwitterProfile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = e => {
    console.log(e.nativeEvent.contentOffset.y);
  };

  const headerHeightStyle = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageSizeStyle = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_SIZE, PROFILE_IMAGE_MIN_SIZE],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_SIZE / 2, HEADER_MAX_HEIGHT + 5],
    extrapolate: 'clamp',
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
    outputRange: [0, 0, 99],
    extrapolate: 'clamp',
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_SIZE,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_SIZE + 26,
    ],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          backgroundColor: 'lightskyblue',
          height: headerHeightStyle,
          justifyContent: 'center',
          position: 'absolute',
          alignItems: 'center',
          left: 0,
          top: 0,
          right: 0,
          zIndex: headerZIndex,
        }}>
        <Animated.View style={{opacity: headerTitleOpacity}}>
          <AppText style={{fontSize: 18, fontFamily: FONTS.MEDIUM, color: 'white'}}>
            VinhKyIT
          </AppText>
        </Animated.View>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
          useNativeDriver: false,
          listener: handleScroll,
        })}
        contentContainerStyle={{height: 1000, paddingHorizontal: 16}}>
        <Animated.View
          style={{
            width: profileImageSizeStyle,
            height: profileImageSizeStyle,
            borderRadius: 99,
            borderColor: 'white',
            borderWidth: 3,
            marginTop: profileImageMarginTop,
            elevation: 1,
            overflow: 'hidden',
          }}>
          <FastImage source={IMAGES.MEN} style={{flex: 1, width: null, height: null}} />
        </Animated.View>
        <AppText style={{fontSize: 26, fontFamily: FONTS.BOLD, color: 'black'}}>VinhKyIT</AppText>
      </ScrollView>
    </View>
  );
};

export default TwitterProfile;
