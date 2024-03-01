import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '~assets/images';
import AppText from '~components/AppText';
import {FONTS} from '~constants/fonts';
import {COLORS} from '~constants/colors';
import AppButton from '~components/AppButton';
import LocalStorage from '~helpers/storage';
import NavigationServices from '~utils/NavigationServices';
import {ROUTES} from '~constants/routes';

const OnboardingScreen = () => {
  const handleButtonPress = () => {
    LocalStorage.storeData('IS_SHOWN_ONBOARDING', 'true');
    NavigationServices.replace(ROUTES.LOGIN);
  };
  return (
    <View style={styles.container}>
      <View style={styles.miniLogoContainer}>
        <FastImage
          source={IMAGES.MINI_LOGO}
          style={styles.miniLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View>
        <AppText font={FONTS.ROUNDED.HEAVY} size={65} color={COLORS.WHITE}>
          Food for Everyone
        </AppText>
      </View>
      <View>
        <FastImage
          source={IMAGES.ONBOARDING_WOMAN}
          style={styles.onboardingWoman}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.buttonView}>
        <AppButton
          onPress={handleButtonPress}
          title={'Get Started'}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
