import LottieView from 'lottie-react-native';
import React, {memo} from 'react';
import {View} from 'react-native';
import {COLORS} from '~constants/colors';
import {RootSiblingPortal} from 'react-native-root-siblings';

const AppLoading = () => {
  return (
    <RootSiblingPortal>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            width: 150,
            height: 150,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('~assets/animations/loading.json')}
            style={{width: '100%', height: '100%'}}
            autoPlay
            loop
          />
        </View>
      </View>
    </RootSiblingPortal>
  );
};

export default memo(AppLoading);
