import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {ROUTES} from '~constants/routes';
import LocalStorage from '~helpers/storage';
import {loginStateSelector} from '~redux/auth/selectors';
import NavigationServices from '~utils/NavigationServices';

const AppSplash = () => {
  const isLoggedIn = useSelector(loginStateSelector);
  const retrieveOnboardingStatus = async () => {
    const result = await LocalStorage.getData('IS_SHOWN_ONBOARDING');
    return !!result;
  };

  const handleSplashData = useCallback(async () => {
    const isShownOnboarding = await retrieveOnboardingStatus();
    if (isShownOnboarding) {
      if (isLoggedIn) {
        NavigationServices.replace(ROUTES.DRAWER);
      } else {
        NavigationServices.replace(ROUTES.LOGIN);
      }
    } else {
      NavigationServices.replace(ROUTES.ONBOARDING);
    }
    SplashScreen.hide();
  }, [isLoggedIn]);

  useEffect(() => {
    handleSplashData();
  }, [handleSplashData]);

  return <View />;
};

export default AppSplash;
