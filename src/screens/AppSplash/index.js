import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ROUTES} from '~constants/routes';
import LocalStorage from '~helpers/storage';
import NavigationServices from '~utils/NavigationServices';

const AppSplash = () => {
  const retrieveOnboardingStatus = async () => {
    const result = await LocalStorage.getData('IS_SHOWN_ONBOARDING');
    return !!result;
  };
  const retrieveLoggedInData = useCallback(async () => {
    const result = await LocalStorage.getData('IS_LOGGED_IN');
    return !!result;
  }, []);

  const handleSplashData = useCallback(async () => {
    const isShownOnboarding = await retrieveOnboardingStatus();
    const isLoggedIn = await retrieveLoggedInData();
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
  }, [retrieveLoggedInData]);

  useEffect(() => {
    handleSplashData();
  }, [handleSplashData, retrieveLoggedInData]);

  return <View />;
};

export default AppSplash;
