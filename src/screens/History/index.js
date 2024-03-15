import {addEventListener} from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import styles from './styles';
import AppButton from '~components/AppButton';
import {FONTS} from '~constants/fonts';
import {DIMENSIONS} from '~constants/dimensions';

const HistoryScreen = () => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      if (state.isConnected !== isConnected) {
        setIsConnected(state.isConnected);
      }
    });
    return () => unsubscribe();
  }, [isConnected]);
  return (
    <View style={styles.container}>
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
